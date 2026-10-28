import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const digest = (path) => createHash('sha256').update(readFileSync(new URL(path, root))).digest('hex');

const page = read('app/contact-us/page.tsx');
const css = read('app/contact-us/contact.css');

const teamPath = 'public/images/contact/team-bacolod.jpg';
const logoPath = 'public/images/contact/stealth-agents-logo-black.png';

test('contact page uses verified official team assets immediately after the form composition', () => {
  assert.equal(existsSync(new URL(teamPath, root)), true);
  assert.equal(existsSync(new URL(logoPath, root)), true);

  const provenance = JSON.parse(read('app/contact-asset-provenance.json'));
  assert.deepEqual(provenance.teamPhoto, {
    source: 'https://stealthagents.com/team-bacolod.jpg',
    width: 953,
    height: 540,
    sha256: 'e80f0e94a80f5ddceba7fbcf723774689e47089bce7981c9f2bdb4205ea52767',
  });
  assert.deepEqual(provenance.logo, {
    source: 'https://stealthagents.com/stealth-agents-logo-black.png',
    width: 149,
    height: 50,
    sha256: 'bc5b225c1bf37d71ab282bc6d59b519e717263a8ecddd2423225a56d47416e45',
  });

  assert.equal(digest(teamPath), provenance.teamPhoto.sha256);
  assert.equal(digest(logoPath), provenance.logo.sha256);
  assert.match(page, /<LeadForm source="contact-page-consultation" \/>/);
  assert.match(page, /<\/section>\s*<section className="contact-section credibility"/);
  assert.match(page, /src="\/images\/contact\/team-bacolod\.jpg" width=\{953\} height=\{540\}/);
  assert.match(page, /src="\/images\/contact\/stealth-agents-logo-black\.png" width=\{149\} height=\{50\}/);
  assert.match(page, />Official team, Bacolod\.</);
  assert.match(page, /Stealth Agents supports[\s\S]*The Mortgage Assistant/);
  assert.match(css, /\.credibility-image img\{[^}]*width:100%[^}]*height:auto[^}]*object-fit:contain/);
  assert.doesNotMatch(css, /\.credibility-image img\{[^}]*object-fit:cover/);
});
