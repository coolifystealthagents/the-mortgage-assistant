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

test('shared chrome has sticky three-item primary navigation', () => {
  const primaryNav = chrome.match(/<nav id="primary-navigation"[\s\S]*?<\/nav>/)?.[0] ?? '';
  assert.ok(primaryNav);
  for (const title of ['Home','Services','Contact Us']) assert.ok(primaryNav.includes('>'+title+'</Link>'));
  assert.equal((primaryNav.match(/<Link /g)||[]).length,3);
  assert.match(chrome, /aria-expanded=\{mobileOpen\}/);
  assert.match(css, /\.site-header\{position:sticky/);
});

test('navigation Escape handling closes the active menu and restores trigger focus', () => {
  assert.match(chrome, /event\.key !== 'Escape'/);
  assert.match(chrome, /insightsRef\.current/);
  assert.match(chrome, /details\.open = false/);
  assert.match(chrome, /querySelector<HTMLElement>\('summary'\)\?\.focus\(\)/);
  assert.match(chrome, /setMobileOpen\(false\)/);
  assert.match(chrome, /mobileToggleRef\.current\?\.focus\(\)/);
});

test('parent attribution sits underneath the site title', () => {
  assert.match(chrome, /site.name\}<small className="standard-brand-credit">Powered by Stealth Agents/);
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
  assert.match(form, /type="email"/);
  for (const field of ['first_name', 'last_name', 'email', 'company', 'company_size', 'positions_to_fill', 'referral_source']) {
    assert.match(form, new RegExp(`name="${field}"[^>]*required|required[^>]*name="${field}"`));
  }
  assert.match(form, /<label className="honeypot" aria-hidden="true">/);
  assert.match(form, /name="website_url" tabIndex=\{-1\} autoComplete="off"/);
  assert.match(form, /ACR captures the native submit event once/);
  assert.match(layout, /window\.ACR_TRACKER_CONFIG/);
  assert.match(layout, /acrtracking\.stealthagents\.us\/v1\/tracker\.js/);
  assert.match(form, /data\.set\('_page_url', window\.location\.href\)/);
  assert.match(route, /if \(form\.get\('website_url'\)\)/);
  assert.match(route, /sendLeadFallbackToMattermost/);
  assert.match(route, /\/\^\\S\+@\\S\+\\\.\\S\+\$\//);
});
