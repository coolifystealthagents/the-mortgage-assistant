import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('blog and research detail routes share stable heading ids and a table of contents', async () => {
  const [blog, research, toc, slug] = await Promise.all([
    read('app/blog/[slug]/page.tsx'),
    read('app/research/[slug]/page.tsx'),
    read('components/editorial/ArticleToc.tsx'),
    read('components/editorial/headingId.ts'),
  ]);

  for (const route of [blog, research]) {
    assert.match(route, /<ArticleToc items=\{tocItems\}/);
    assert.match(route, /id=\{headingId\(/);
    assert.match(route, /id="article-top"/);
  }
  assert.match(toc, /aria-label="On this page"/);
  assert.match(toc, /headingId\(item\.label\)/);
  assert.match(slug, /\.normalize\('NFKD'\)/);
  assert.match(slug, /replace\(\/\[\^a-z0-9\]\+\/g, '-'\)/);
});

test('detail routes include truthful metadata, bylines, sources, contextual links, and lower CTAs', async () => {
  const [blog, research] = await Promise.all([
    read('app/blog/[slug]/page.tsx'),
    read('app/research/[slug]/page.tsx'),
  ]);

  for (const route of [blog, research]) {
    assert.match(route, /alternates: \{ canonical:/);
    assert.match(route, /openGraph:/);
    assert.match(route, /application\/ld\+json/);
    assert.match(route, /Editorial Team/);
    assert.match(route, /<time dateTime=/);
    assert.match(route, /className=\{styles\.finalCta\}/);
    assert.match(route, /href="\/contact-us"/);
  }

  assert.match(blog, /href=\{post\.internalService\}/);
  assert.match(blog, /href=\{post\.internalSibling\}/);
  assert.match(blog, /href=\{post\.source\.url\}/);
  assert.match(blog, /FAQPage/);
  assert.match(research, /href=\{service\.href\}/);
  assert.match(research, /href=\{source\.url\}/);
  assert.match(research, /related\[0\]\.slug/);
});

test('editorial CSS provides a three-column desk and safe responsive stacking', async () => {
  const css = await read('app/blog/editorial.module.css');

  assert.match(css, /grid-template-columns: minmax\(150px, 210px\) minmax\(0, 720px\) minmax\(210px, 280px\)/);
  assert.match(css, /position: sticky/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(css, /\.articleShell,\s*\n\s*\.sidebar \{\s*\n\s*display: block/);
  assert.match(css, /min-width: 0/);
  assert.match(css, /@supports \(animation-timeline: scroll\(\)\)/);
  assert.doesNotMatch(css, /gradient\(/i);
  assert.doesNotMatch(css, /border-radius/);
});

test('indexes are grouped and provide descriptive destination labels', async () => {
  const [blog, research] = await Promise.all([
    read('app/blog/page.tsx'),
    read('app/research/page.tsx'),
  ]);

  assert.match(blog, /Browse articles by topic/);
  assert.match(blog, /Read “\{post\.title\}”/);
  assert.match(research, /Browse research by evidence cluster/);
  assert.match(research, /Review “\{post\.title\}”/);
  for (const route of [blog, research]) {
    assert.match(route, /id=\{headingId\(/);
    assert.match(route, /alt=\{`[^`]+“\$\{post\.title\}”`\}/);
  }
});
