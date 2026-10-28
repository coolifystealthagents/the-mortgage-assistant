import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Header, Footer } from '@/components/SiteChrome';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Mortgage operations support`, template: `%s | ${site.name}` },
  description: site.heroBody,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | Mortgage operations support`,
    description: site.heroBody,
    images: [{
      url: '/images/mortgage/social-card.png',
      width: 1200,
      height: 630,
      alt: 'The Mortgage Assistant, specialist support for mortgage operations',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Mortgage operations support`,
    description: site.heroBody,
    images: ['/images/mortgage/social-card.png'],
  },
  alternates: { canonical: '/' }
};

export const viewport: Viewport = {
  themeColor: '#6f2528',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-design={site.design}><body style={{ '--primary': site.primary, '--secondary': site.secondary, '--accent': site.accent, '--canvas': site.canvas, '--ink': site.ink, '--display': site.displayFont, '--body': site.bodyFont } as React.CSSProperties}><Header />{children}<Footer /><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'${site.siteId}',endpoint:'/ingest/track',debug:false};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" /></body></html>;
}
