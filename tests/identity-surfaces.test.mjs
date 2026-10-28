import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const bytes = (path) => readFileSync(new URL(path, root));

function pngDimensions(path) {
  const data = bytes(path);
  assert.deepEqual([...data.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], `${path} must be a PNG`);
  return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
}

const layout = read('app/layout.tsx');
const chrome = read('components/SiteChrome.tsx');
const logo = read('public/logo.svg');

const iconPath = 'app/icon.png';
const appleIconPath = 'app/apple-icon.png';
const socialCardPath = 'public/images/mortgage/social-card.png';
const socialCardSourcePath = 'public/images/mortgage/social-card.svg';

test('primary mark retains the house and adds a concrete operations checklist cue', () => {
  assert.match(logo, /viewBox="0 0 64 64"/);
  assert.match(logo, /id="house"/);
  assert.match(logo, /id="operations-checklist"/);
  assert.doesNotMatch(logo, /<text|>TMA</);
  assert.match(chrome, /src="\/logo\.svg"[\s\S]*<span>\{site\.name\}<\/span>/);
});

test('browser icons are explicit raster derivatives with appropriate intrinsic sizes', () => {
  assert.equal(existsSync(new URL(iconPath, root)), true);
  assert.equal(existsSync(new URL(appleIconPath, root)), true);
  assert.deepEqual(pngDimensions(iconPath), { width: 512, height: 512 });
  assert.deepEqual(pngDimensions(appleIconPath), { width: 180, height: 180 });
});

test('Open Graph and Twitter metadata use a branded large raster card', () => {
  assert.equal(existsSync(new URL(socialCardPath, root)), true);
  assert.equal(existsSync(new URL(socialCardSourcePath, root)), true);
  assert.deepEqual(pngDimensions(socialCardPath), { width: 1200, height: 630 });
  assert.match(layout, /`\$\{site\.name\} \| Mortgage operations support`/);
  assert.match(layout, /url: '\/images\/mortgage\/social-card\.png'/);
  assert.match(layout, /width: 1200/);
  assert.match(layout, /height: 630/);
  assert.match(layout, /twitter:\s*\{[\s\S]*card: 'summary_large_image'[\s\S]*images: \['\/images\/mortgage\/social-card\.png'\]/);
  assert.match(layout, /themeColor: '#6f2528'/);
});

test('official parent company identity remains a subordinate shared-footer credential', () => {
  assert.match(chrome, /className="parent-mark"[\s\S]*href="https:\/\/stealthagents\.com"/);
  assert.match(chrome, /src="\/images\/contact\/stealth-agents-logo-black\.png"/);
  assert.match(chrome, /A Stealth Agents Company/);
});
