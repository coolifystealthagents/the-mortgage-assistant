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
  assert.match(primaryNav, /<details[^>]*className="nav-dropdown"[^>]*>[\s\S]*?<summary[\s\S]*?Insights/);
  assert.match(primaryNav, /Book a free call/);
  assert.match(chrome, /aria-expanded=\{mobileOpen\}/);
  assert.match(chrome, /aria-controls="primary-navigation"/);
  assert.match(css, /\.site-header\{position:sticky/);
  const mobileHeaderCss = css.match(/@media\(max-width:1100px\)\{\n([\s\S]*?)\n\}/)?.[1] ?? '';
  assert.ok(mobileHeaderCss);
  assert.match(mobileHeaderCss, /\.nav-toggle\{display:flex/);
  assert.match(mobileHeaderCss, /\.site-header \.primary-nav\{[^}]*max-height:calc\(100vh - 68px\)/);
});

test('navigation Escape handling closes the active menu and restores trigger focus', () => {
  assert.match(chrome, /event\.key !== 'Escape'/);
  assert.match(chrome, /insightsRef\.current/);
  assert.match(chrome, /details\.open = false/);
  assert.match(chrome, /querySelector<HTMLElement>\('summary'\)\?\.focus\(\)/);
  assert.match(chrome, /setMobileOpen\(false\)/);
  assert.match(chrome, /mobileToggleRef\.current\?\.focus\(\)/);
});

test('parent-company disclosure is a compact primary-navigation credential using the approved logo', () => {
  assert.doesNotMatch(chrome, /className="utility-strip"/);
  assert.match(chrome, /className="nav-attribution"[\s\S]*href="https:\/\/stealthagents\.com"/);
  assert.match(chrome, /className="nav-attribution"[\s\S]*src="\/images\/contact\/stealth-agents-logo-black\.png"[\s\S]*Powered by Stealth Agents/);
  assert.match(css, /\.nav-attribution\{/);
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
  assert.match(form, /<label className="honeypot" aria-hidden="true">/);
  assert.match(form, /name="website_url" tabIndex=\{-1\} autoComplete="off"/);
  assert.match(form, /window\.acrTracker\?\.trackLead/);
  assert.match(form, /data\.set\('_page_url', window\.location\.href\)/);
  assert.match(route, /if \(form\.get\('website_url'\)\)/);
  assert.match(route, /sendLeadFallbackToMattermost/);
  assert.match(route, /\/\^\\S\+@\\S\+\\\.\\S\+\$\//);
});
