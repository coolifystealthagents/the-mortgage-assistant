import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '../..');
const date = '2026-10-12';
const errors = [];
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const parseExport = (relative, name) => {
  const source = read(relative);
  const match = source.match(new RegExp(`export const ${name}:[^=]+\\s=\\s([\\s\\S]+);\\s*$`));
  if (!match) throw new Error(`Cannot parse ${name}`);
  return JSON.parse(match[1]);
};
const blogs = parseExport('lib/october12BlogPosts.ts', 'october12BlogPosts');
const research = parseExport('lib/october12ResearchPosts.ts', 'october12ResearchPosts');
const manifest = JSON.parse(read('publishing/2026-10-12/manifest.json'));

if (blogs.length !== 12) errors.push(`Expected 12 Blog posts; found ${blogs.length}`);
if (research.length !== 5) errors.push(`Expected 5 Research posts; found ${research.length}`);
if (manifest.items.length !== 17) errors.push(`Expected 17 manifest items; found ${manifest.items.length}`);
const all = [...blogs.map((post) => ({ ...post, section: 'Blog' })), ...research.map((post) => ({ ...post, section: 'Research' }))];
const slugs = new Set(); const titles = new Set(); const thumbnails = new Set(); const paragraphs = new Map();
for (const post of all) {
  if (post.publishedAt !== date) errors.push(`${post.slug}: wrong publication date`);
  if (/\b(?:2026|oct(?:ober)?\.?\s*12|10[/-]12)\b/i.test(post.title)) errors.push(`${post.slug}: date appears in title`);
  if (slugs.has(post.slug)) errors.push(`${post.slug}: duplicate slug`); slugs.add(post.slug);
  if (titles.has(post.title)) errors.push(`${post.slug}: duplicate title`); titles.add(post.title);
  if (!post.thumbnail || thumbnails.has(post.thumbnail)) errors.push(`${post.slug}: missing or duplicate thumbnail`); thumbnails.add(post.thumbnail);
  const thumbPath = `public${post.thumbnail}`;
  if (!fs.existsSync(path.join(root, thumbPath))) errors.push(`${post.slug}: missing thumbnail file`);
  else if (!read(thumbPath).includes(`<title id="title">${post.title.replaceAll('&', '&amp;')}</title>`)) errors.push(`${post.slug}: thumbnail title mismatch`);
  if (!Array.isArray(post.sections) || post.sections.length < 7) errors.push(`${post.slug}: insufficient article depth`);
  for (const section of post.sections ?? []) for (const paragraph of section.paragraphs ?? []) {
    const normalized = paragraph.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (normalized.length < 120) continue;
    if (paragraphs.has(normalized)) errors.push(`${post.slug}: duplicates substantive prose from ${paragraphs.get(normalized)}`);
    else paragraphs.set(normalized, post.slug);
  }
}
for (const post of research) {
  if (post.sources.length < 10) errors.push(`${post.slug}: expected at least 10 sources`);
  if (post.sources.some((source) => { try { return new URL(source.url).protocol !== 'https:'; } catch { return true; } })) errors.push(`${post.slug}: source is not a valid HTTPS URL`);
}
for (const required of ['lib/content.ts', 'app/blog/page.tsx', 'app/blog/[slug]/page.tsx', 'app/research/page.tsx', 'app/research/[slug]/page.tsx', 'components/ResearchSidebar.tsx']) {
  if (!fs.existsSync(path.join(root, required))) errors.push(`Missing integration path: ${required}`);
}
const content = read('lib/content.ts');
if (!content.includes('october12BlogPosts') || !content.includes('october12ResearchPosts')) errors.push('Content registry does not load both systems');
const blogRoute = read('app/blog/[slug]/page.tsx'); const researchRoute = read('app/research/[slug]/page.tsx');
if (!blogRoute.includes('related') || !blogRoute.includes('sidebar')) errors.push('Blog route lacks related/sidebar behavior');
if (!researchRoute.includes('ResearchSidebar') || !researchRoute.includes('post.sections')) errors.push('Research route lacks deep sections/sidebar behavior');

if (errors.length) { console.error(`FAIL (${errors.length})\n- ${errors.join('\n- ')}`); process.exit(1); }
console.log('PASS: TheMortgageAssistant October 12 publication validated (12 Blog, 5 Research, 17 exact-title thumbnails).');
