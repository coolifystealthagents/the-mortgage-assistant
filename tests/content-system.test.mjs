import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFile(path.join(root, file), 'utf8');

const expectedSlugs = [
  'loan-file-coordination',
  'borrower-follow-up',
  'crm-pipeline-support',
  'closing-coordination',
  'real-estate-partner-support',
  'mortgage-marketing-support',
];

test('all six mortgage service records contain the complete role brief contract', async () => {
  const source = await read('lib/site.ts');
  const serviceSource = source.slice(source.indexOf('const services:'), source.indexOf('export const site'));
  const foundSlugs = [...serviceSource.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]);
  assert.deepEqual(foundSlugs, expectedSlugs);

  for (const [index, slug] of expectedSlugs.entries()) {
    const start = serviceSource.indexOf(`slug: '${slug}'`);
    const end = index + 1 < expectedSlugs.length ? serviceSource.indexOf(`slug: '${expectedSlugs[index + 1]}'`) : serviceSource.length;
    const record = serviceSource.slice(start, end);
    for (const field of ['short', 'outcome', 'problem', 'image', 'imageAlt', 'idealFor', 'scenarios', 'tasks', 'clientInputs', 'outputs', 'qualityControls', 'boundaries', 'launchSteps', 'faq', 'relatedRoles', 'relatedContent']) {
      assert.match(record, new RegExp(`\\b${field}:`), `${slug} is missing ${field}`);
    }
    assert.ok((record.match(/question:/g) ?? []).length >= 3, `${slug} needs at least three FAQs`);
  }
});

test('service template renders every required decision-ready section and CTA', async () => {
  const page = await read('app/services/[slug]/page.tsx');
  for (const marker of ['Problem and audience', 'Ideal use cases', 'Responsibilities', 'Inputs and outputs', 'Operating scenarios', 'Quality controls', 'Decision boundaries', 'Launch workflow', 'Frequently asked questions', 'Related roles and field notes', 'Plan a workflow consultation']) {
    assert.ok(page.includes(marker), `service template is missing ${marker}`);
  }
  for (const binding of ['service.problem', 'service.image', 'service.imageAlt', 'service.idealFor', 'service.scenarios', 'service.tasks', 'service.clientInputs', 'service.outputs', 'service.qualityControls', 'service.boundaries', 'service.launchSteps', 'service.faq', 'service.relatedRoles', 'service.relatedContent']) {
    assert.ok(page.includes(binding), `service template does not render ${binding}`);
  }
});

test('mortgage marketing system is imported, responsive, and avoids disallowed treatments', async () => {
  const [home, about, services, service, css] = await Promise.all([
    read('components/Marketing.tsx'),
    read('app/about/page.tsx'),
    read('app/services/page.tsx'),
    read('app/services/[slug]/page.tsx'),
    read('components/marketing/marketing.css'),
  ]);
  for (const route of [home, about, services, service]) assert.match(route, /marketing\/marketing\.css/);
  assert.match(css, /@media\(max-width:800px\)/);
  assert.match(css, /@media\(max-width:520px\)/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.doesNotMatch(css, /(?:linear|radial|conic)-gradient\s*\(/i);
  assert.doesNotMatch(home, /service-number/);
});

test('photographic homepage and service assets have accessible alternatives and provenance', async () => {
  const [site, provenanceSource] = await Promise.all([read('lib/site.ts'), read('app/mortgage-image-provenance.json')]);
  const provenance = JSON.parse(provenanceSource);
  assert.match(site, /heroImage: '\/images\/mortgage\/heroes\/home-operations\.jpg'/);
  assert.match(site, /heroAlt: '[^']{30,}'/);
  assert.equal(provenance.generator, 'OpenAI built-in image generation tool');
  for (const slug of expectedSlugs) {
    const imagePath = path.join(root, 'public/images/mortgage/services', `${slug}.jpg`);
    assert.ok((await stat(imagePath)).size > 100_000, `${slug} needs a production-size service image`);
    const publicPath = `/images/mortgage/services/${slug}.jpg`;
    const digest = createHash('sha256').update(await readFile(imagePath)).digest('hex');
    assert.equal(digest, provenance.assets[publicPath].sha256);
  }
});

test('affected marketing routes publish no unsupported review or rating schema and no decorative counters', async () => {
  const [home, services, detail, contact, marketingCss, editorialCss] = await Promise.all([
    read('components/Marketing.tsx'),
    read('app/services/page.tsx'),
    read('app/services/[slug]/page.tsx'),
    read('app/contact-us/page.tsx'),
    read('components/marketing/marketing.css'),
    read('app/blog/editorial.module.css'),
  ]);
  const surfaces = [home, services, detail, contact].join('\n');
  assert.doesNotMatch(surfaces, /aggregateRating|ratingValue|reviewCount|testimonial|★|★★★★★/i);
  assert.doesNotMatch(marketingCss + editorialCss, /decimal-leading-zero|counter\(/);
  assert.doesNotMatch(contact, /0\{index|index\s*\+\s*1/);
});

test('static and service routes own their canonicals and publish no invented email', async () => {
  const [about, services, detail, privacy, terms] = await Promise.all([
    read('app/about/page.tsx'),
    read('app/services/page.tsx'),
    read('app/services/[slug]/page.tsx'),
    read('app/privacy/page.tsx'),
    read('app/terms/page.tsx'),
  ]);
  assert.match(about, /canonical: '\/about'/);
  assert.match(services, /canonical: '\/services'/);
  assert.match(detail, /canonical: `\/services\/\$\{service\.slug\}`/);
  assert.match(privacy, /canonical:'\/privacy'/);
  assert.match(terms, /canonical:'\/terms'/);
  assert.doesNotMatch(privacy, /hello@/);
  assert.match(privacy, /contact form/);
  assert.match(about, /Stealth Agents company/);
});
