import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const chrome = read('components/SiteChrome.tsx');
const layout = read('app/layout.tsx');
const css = read('app/globals.css');
const contact = read('app/contact-us/page.tsx');
const thankYou = read('app/thank-you/page.tsx');
const form = read('components/LeadForm.tsx');
const route = read('app/api/submit-lead/route.ts');

test('shared chrome has a sticky responsive four-item primary navigation', () => {
  const primaryNav = chrome.match(/<nav id="primary-navigation"[\s\S]*?<\/nav>/)?.[0] ?? '';
  assert.ok(primaryNav);
  assert.match(primaryNav, />Services<\/Link>/);
  assert.match(primaryNav, />About<\/Link>/);
  assert.match(primaryNav, /<details className="nav-dropdown">[\s\S]*?<summary[\s\S]*?Insights/);
  assert.match(primaryNav, /Book a free call/);
  assert.match(chrome, /aria-expanded=\{mobileOpen\}/);
  assert.match(chrome, /aria-controls="primary-navigation"/);
  assert.match(css, /\.site-header\{position:sticky/);
  assert.match(css, /@media\(max-width:900px\)[\s\S]*?\.nav-toggle\{display:flex/);
});

test('parent-company disclosure is visible, linked, and uses no unverified logo asset', () => {
  assert.match(chrome, /href="https:\/\/stealthagents\.com"[^>]*>A Stealth Agents Company<\/a>/);
  assert.equal(existsSync(new URL('../public/images/chrome-or-reviews/stealth-agents-logo-black.png', import.meta.url)), false);
});

test('unverified review claims and the timed global modal are absent', () => {
  assert.doesNotMatch(chrome, /verifiedReviews|review-marquee|blockquote/);
  assert.doesNotMatch(layout, /TimedLeadModal/);
  assert.doesNotMatch(chrome, /setTimeout|sessionStorage|role="dialog"/);
});

test('contact submission precedes scheduling, which exists only on thank-you', () => {
  assert.match(contact, /<LeadForm source="contact-page-consultation"/);
  assert.doesNotMatch(contact, /oncehub|booking-frame|iframe/);
  assert.match(thankYou, /<iframe[^>]*className="booking-frame"/);
  assert.match(thankYou, /go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(form, /router\.push\('\/thank-you'\)/);
});

test('personal email is accepted while required fields, tracking, honeypot, and fallback remain', () => {
  assert.doesNotMatch(form + route, /personalDomains|business email address|personal email providers are not accepted/i);
  assert.match(form, /Work or personal email addresses are welcome/);
  for (const field of ['first_name', 'last_name', 'email', 'company', 'company_size', 'positions_to_fill', 'referral_source']) {
    assert.match(form, new RegExp(`name="${field}"[^>]*required|required[^>]*name="${field}"`));
  }
  assert.match(form, /name="website_url"/);
  assert.match(form, /window\.acrTracker\?\.trackLead/);
  assert.match(form, /data\.set\('_page_url', window\.location\.href\)/);
  assert.match(route, /if \(form\.get\('website_url'\)\)/);
  assert.match(route, /sendLeadFallbackToMattermost/);
  assert.match(route, /\/\^\\S\+@\\S\+\\\.\\S\+\$\//);
});
