import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '../..');
const date = '2026-10-13';
const baseSha = 'c52d2aed316365176214afe2a72f65282a096b14';
const errors = [];
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' });
const parseExportText = (source, name) => {
  const match = source.match(new RegExp(`export const ${name}:[^=]+\\s=\\s([\\s\\S]+);\\s*$`));
  if (!match) throw new Error(`Cannot parse ${name}`);
  return JSON.parse(match[1]);
};
const parseExport = (relative, name) => parseExportText(read(relative), name);
const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const shingles = (value, size = 5) => {
  const words = normalize(value).split(/\s+/).filter(Boolean);
  return new Set(words.slice(0, Math.max(0, words.length - size + 1)).map((_, i) => words.slice(i, i + size).join(' ')));
};
const similarity = (a, b) => {
  const left = shingles(a); const right = shingles(b);
  if (!left.size || !right.size) return 0;
  let common = 0; for (const value of left) if (right.has(value)) common += 1;
  return common / Math.min(left.size, right.size);
};

const headSha = git('rev-parse', 'HEAD').trim();
const parentSha = headSha === baseSha ? null : git('rev-parse', 'HEAD^').trim();
if (headSha !== baseSha && parentSha !== baseSha) errors.push('Scoped commit is not directly based on the immutable base');
const remoteSha = git('ls-remote', 'origin', 'refs/heads/main').trim().split(/\s+/)[0];
if (remoteSha !== baseSha && remoteSha !== headSha) errors.push('origin/main is neither the immutable base nor this scoped commit');

const blogs = parseExport('lib/october13BlogPosts.ts', 'october13BlogPosts');
const research = parseExport('lib/october13ResearchPosts.ts', 'october13ResearchPosts');
const manifest = JSON.parse(read('publishing/2026-10-13/manifest.json'));
const all = [...blogs.map((post) => ({ ...post, section: 'Blog' })), ...research.map((post) => ({ ...post, section: 'Research' }))];

if (blogs.length !== 12) errors.push(`Expected 12 Blog posts; found ${blogs.length}`);
if (research.length !== 5) errors.push(`Expected 5 Research posts; found ${research.length}`);
if (all.length !== 17 || manifest.items.length !== 17) errors.push('Expected exactly 17 generated and manifested items');
if (manifest.baseSha !== baseSha || manifest.publicationDate !== date) errors.push('Manifest base SHA or publication date is incorrect');
if (manifest.counts.blog !== 12 || manifest.counts.research !== 5 || manifest.counts.total !== 17) errors.push('Manifest counts are incorrect');

const baseBlogs = parseExportText(git('show', `${baseSha}:lib/october12BlogPosts.ts`), 'october12BlogPosts');
const baseResearch = parseExportText(git('show', `${baseSha}:lib/october12ResearchPosts.ts`), 'october12ResearchPosts');
const baseAll = [...baseBlogs, ...baseResearch];
const baseSlugs = new Set(baseAll.map((post) => post.slug));
const baseTitles = new Set(baseAll.map((post) => normalize(post.title)));
const slugs = new Set(); const titles = new Set(); const thumbnails = new Set(); const imageHashes = new Set();
const paragraphs = new Map(); const baseParagraphs = [];
for (const post of baseAll) for (const section of post.sections ?? []) for (const paragraph of section.paragraphs ?? []) baseParagraphs.push({ slug: post.slug, text: paragraph });

for (const post of all) {
  if (post.publishedAt !== date) errors.push(`${post.slug}: wrong publication date`);
  if (/\b(?:2026|oct(?:ober)?\.?\s*13|10[/-]13)\b/i.test(post.title)) errors.push(`${post.slug}: date appears in title`);
  if (slugs.has(post.slug) || baseSlugs.has(post.slug)) errors.push(`${post.slug}: duplicate slug`); slugs.add(post.slug);
  if (titles.has(normalize(post.title)) || baseTitles.has(normalize(post.title))) errors.push(`${post.slug}: duplicate title`); titles.add(normalize(post.title));
  if (!post.thumbnail || thumbnails.has(post.thumbnail)) errors.push(`${post.slug}: missing or duplicate thumbnail path`); thumbnails.add(post.thumbnail);
  const thumbPath = `public${post.thumbnail}`;
  if (!fs.existsSync(path.join(root, thumbPath))) errors.push(`${post.slug}: missing thumbnail file`);
  else {
    const image = read(thumbPath);
    const digest = hash(image);
    if (imageHashes.has(digest)) errors.push(`${post.slug}: duplicate thumbnail bytes`); imageHashes.add(digest);
    const escapedTitle = post.title.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    if (!image.includes(`<title id="title">${escapedTitle}</title>`)) errors.push(`${post.slug}: thumbnail title mismatch`);
    if (!image.includes('width="1200" height="630"')) errors.push(`${post.slug}: thumbnail is not native 1200x630`);
    const visibleTitle = [...image.matchAll(/<text class="title-line"[^>]*>(.*?)<\/text>/g)].map((match) => match[1]).join(' ');
    if (visibleTitle !== post.title) errors.push(`${post.slug}: full title is not visibly rendered in thumbnail`);
  }
  if (!Array.isArray(post.sections) || post.sections.length < 7) errors.push(`${post.slug}: insufficient article depth`);
  for (const section of post.sections ?? []) for (const paragraph of section.paragraphs ?? []) {
    const normalized = normalize(paragraph);
    if (normalized.length < 120) errors.push(`${post.slug}: substantive paragraph is too short`);
    if (paragraphs.has(normalized)) errors.push(`${post.slug}: duplicates prose from ${paragraphs.get(normalized)}`);
    else paragraphs.set(normalized, post.slug);
    for (const prior of baseParagraphs) {
      if (normalized === normalize(prior.text)) errors.push(`${post.slug}: repeats base prose from ${prior.slug}`);
      else if (similarity(paragraph, prior.text) >= 0.82) errors.push(`${post.slug}: near-duplicates base prose from ${prior.slug}`);
    }
  }
}

for (const post of research) {
  if (!Array.isArray(post.sources) || post.sources.length !== 10) errors.push(`${post.slug}: expected exactly 10 sources`);
  if (new Set((post.sources ?? []).map((source) => source.url)).size !== 10) errors.push(`${post.slug}: source URLs are not unique`);
  for (const source of post.sources ?? []) {
    try { if (new URL(source.url).protocol !== 'https:') errors.push(`${post.slug}: non-HTTPS source`); }
    catch { errors.push(`${post.slug}: invalid source URL`); }
  }
}

const manifestKeys = new Set(manifest.items.map((item) => `${item.section}:${item.slug}`));
for (const post of all) if (!manifestKeys.has(`${post.section}:${post.slug}`)) errors.push(`${post.slug}: missing manifest item`);
for (const required of ['lib/content.ts', 'app/blog/page.tsx', 'app/blog/[slug]/page.tsx', 'app/research/page.tsx', 'app/research/[slug]/page.tsx', 'components/ResearchSidebar.tsx', 'app/sitemap.ts']) {
  if (!fs.existsSync(path.join(root, required))) errors.push(`Missing integration path: ${required}`);
}
const content = read('lib/content.ts');
if (!content.includes('october13BlogPosts') || !content.includes('october13ResearchPosts')) errors.push('Content registry does not load both October 13 systems');
if (!read('app/blog/page.tsx').includes('post.publishedAt') || !read('app/research/page.tsx').includes('post.publishedAt')) errors.push('Index pages do not show publication dates');
if (!read('app/blog/[slug]/page.tsx').includes('Published {post.publishedAt}') || !read('app/research/[slug]/page.tsx').includes('Published {post.publishedAt}')) errors.push('Article pages do not show publication dates');
if (!read('app/blog/[slug]/page.tsx').includes('related') || !read('app/blog/[slug]/page.tsx').includes('sidebar')) errors.push('Blog detail lacks related/sidebar behavior');
if (!read('app/research/[slug]/page.tsx').includes('ResearchSidebar') || !read('components/ResearchSidebar.tsx').includes('/research')) errors.push('Research detail lacks research sidebar behavior');
if (!read('app/sitemap.ts').includes('blogPosts.map') || !read('app/sitemap.ts').includes('researchPosts.map')) errors.push('Sitemap does not enumerate both systems');

const allowed = /^(lib\/content\.ts|lib\/october13(?:Blog|Research)Posts\.ts|public\/thumbnails\/october-13\/[^/]+\.svg|publishing\/2026-10-13\/(?:generate|validate)\.mjs|publishing\/2026-10-13\/manifest\.json)$/;
const changed = new Set([
  ...git('diff', '--name-only', baseSha, '--').trim().split('\n'),
  ...git('ls-files', '--others', '--exclude-standard').trim().split('\n'),
].filter(Boolean));
for (const file of changed) if (!allowed.test(file)) errors.push(`Out-of-scope changed path: ${file}`);

if (errors.length) { console.error(`FAIL (${errors.length})\n- ${errors.join('\n- ')}`); process.exit(1); }
console.log('PASS: TheMortgageAssistant October 13 publication validated (12 Blog, 5 Research, 17 exact-title native thumbnails, immutable base and duplicate audits clean).');
