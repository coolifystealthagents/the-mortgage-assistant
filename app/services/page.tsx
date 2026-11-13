import type { ComponentType } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ApprovalIcon, ArrowIcon, CalendarIcon, CalibrateIcon, DocumentIcon, MapIcon,
  MessageIcon, PartnerIcon, PipelineIcon, QueueIcon, ReviewIcon,
} from '@/components/Icons';
import { site } from '@/lib/site';
import '@/components/marketing/marketing.css';

export const metadata: Metadata = {
  title: 'Mortgage operations support services',
  description: 'Compare six clearly bounded support roles for mortgage file, borrower, pipeline, closing, partner, and marketing workflows.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: `Mortgage operations support services | ${site.name}`,
    description: 'Choose a defined mortgage operations queue, see what the role needs and produces, and keep every lending decision with your authorized team.',
    images: [{ url: '/images/mortgage/heroes/services-workflow.jpg', width: 1672, height: 941, alt: 'Mortgage operations team mapping an administrative workflow around a conference table' }],
  },
};

const serviceIcons: Record<string, ComponentType> = {
  'loan-file-coordination': QueueIcon,
  'borrower-follow-up': MessageIcon,
  'crm-pipeline-support': PipelineIcon,
  'closing-coordination': CalendarIcon,
  'real-estate-partner-support': PartnerIcon,
  'mortgage-marketing-support': ApprovalIcon,
};

const workflow = [
  { icon: MapIcon, title: 'Trace the queue', detail: 'Identify where work enters, which system controls the record, and which exceptions interrupt the handoff.' },
  { icon: DocumentIcon, title: 'Write the contract', detail: 'Define required inputs, allowed actions, output format, completion evidence, permissions, and prohibited decisions.' },
  { icon: ReviewIcon, title: 'Pilot with review', detail: 'Run a limited set of work while a named client owner checks outputs and resolves questions.' },
  { icon: CalibrateIcon, title: 'Calibrate the role', detail: 'Return incomplete work, record exceptions, and add adjacent work only when the first queue is stable.' },
];

const decisionPaths = [
  { need: 'The file is hard to reconstruct', role: 'Loan file coordination', href: '/services/loan-file-coordination', signal: 'Documents arrive through multiple channels or open items lose their source and owner.' },
  { need: 'Borrower responses are scattered', role: 'Borrower follow-up support', href: '/services/borrower-follow-up', signal: 'Routine reminders and borrower questions compete for licensed attention.' },
  { need: 'The operating view is stale', role: 'CRM and pipeline support', href: '/services/crm-pipeline-support', signal: 'Dates, tasks, owners, or administrative fields disagree across systems.' },
  { need: 'Closing logistics keep changing', role: 'Closing coordination support', href: '/services/closing-coordination', signal: 'Confirmations, schedules, and handoffs need one traceable logistics view.' },
  { need: 'Partner updates interrupt the day', role: 'Real estate partner support', href: '/services/real-estate-partner-support', signal: 'Approved status communication needs a consistent source and privacy check.' },
  { need: 'Content approvals are fragmented', role: 'Mortgage marketing support', href: '/services/mortgage-marketing-support', signal: 'Drafts, sources, disclosures, and final approvals separate across tools.' },
];

export default function ServicesPage() {
  return <main className="mortgage-page services-index-page">
    <header className="services-visual-hero" aria-labelledby="services-title">
      <Image src="/images/mortgage/heroes/services-workflow.jpg" alt="Mortgage operations team mapping an administrative workflow around a conference table" fill priority sizes="100vw" />
      <div className="services-visual-shade" />
      <div className="services-visual-copy">
        <p className="mortgage-folio">Mortgage operations support</p>
        <h1 id="services-title">Choose the queue. Keep the decision.</h1>
        <p className="mortgage-deck">Six focused support roles help mortgage brokers, lenders, and loan teams prepare records, maintain approved communication, and coordinate handoffs. Your authorized team keeps credit judgment, approvals, advice, and every regulated decision.</p>
        <div className="mortgage-page-actions">
          <Link id="cta-services-hero-roles" className="mortgage-button" href="#role-briefs">Compare the role briefs <ArrowIcon /></Link>
          <Link id="cta-services-hero-consultation" className="mortgage-button mortgage-button-light" href="/contact-us">Discuss your workflow <ArrowIcon /></Link>
        </div>
      </div>
    </header>

    <section className="services-purpose" aria-labelledby="services-purpose-title">
      <div><p className="mortgage-folio">A useful first scope</p><h2 id="services-purpose-title">Do not delegate a department. Stabilize one handoff.</h2></div>
      <div>
        <p>Begin where repeatable preparation is consuming licensed or borrower-facing time. The strongest first scope has a known source, a concrete output, an available reviewer, and an unambiguous route for exceptions.</p>
        <dl className="services-purpose-register">
          <div><dt>Known source</dt><dd>The role can point to the record behind each update.</dd></div>
          <div><dt>Reviewable output</dt><dd>A named owner can inspect what complete work looks like.</dd></div>
          <div><dt>Visible boundary</dt><dd>Questions and decisions return to an accountable professional.</dd></div>
        </dl>
      </div>
    </section>

    <section id="role-briefs" className="services-role-accordions" aria-labelledby="role-briefs-title">
      <header><p className="mortgage-folio">Compare by operating bottleneck</p><h2 id="role-briefs-title">Six roles. Six different handoff problems.</h2><p>Open a role to see its intended problem and output. Each full brief includes audience, inputs, scope, workflow, scenarios, controls, boundaries, questions, and related services.</p></header>
      <div className="services-accordion-row">
        {site.services.map((service, index) => {
          const Icon = serviceIcons[service.slug] ?? QueueIcon;
          return <details className="services-role-panel" key={service.slug} open={index === 0}>
            <summary><span className="services-role-icon"><Icon /></span><span>{service.name}</span></summary>
            <div className="services-role-panel-body">
              <div className="services-panel-media"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 900px) 90vw, 44vw" /></div>
              <div><p className="mortgage-kicker">The problem</p><p>{service.problem}</p><p className="mortgage-kicker">Designed outcome</p><p>{service.outcome}</p><Link className="mortgage-text-link" href={`/services/${service.slug}`}>Open the complete role brief <ArrowIcon /></Link></div>
            </div>
          </details>;
        })}
      </div>
    </section>

    <section className="services-decision" aria-labelledby="decision-title">
      <header><p className="mortgage-folio">Decision support</p><h2 id="decision-title">Start from the symptom your team can observe.</h2><p>A role name matters less than the evidence of a recurring handoff problem. These are routing cues, not promises of fit.</p></header>
      <div className="services-decision-list">
        {decisionPaths.map((path) => <article key={path.role}><p>{path.need}</p><h3>{path.role}</h3><span>{path.signal}</span><Link href={path.href} aria-label={`Review ${path.role}`}>Review this role <ArrowIcon /></Link></article>)}
      </div>
    </section>

    <section className="services-workflow" aria-labelledby="workflow-title">
      <div className="services-workflow-heading"><p className="mortgage-folio">From queue to controlled scope</p><h2 id="workflow-title">A launch workflow your team can inspect.</h2><p>Capacity is useful only when source, ownership, review, and exception handling remain visible.</p></div>
      <ol className="services-workflow-rail">
        {workflow.map(({ icon: Icon, title, detail }) => <li key={title}><span className="services-workflow-icon"><Icon /></span><div><h3>{title}</h3><p>{detail}</p></div></li>)}
      </ol>
    </section>

    <section className="services-boundary-grid" aria-labelledby="services-boundary-title">
      <div className="services-boundary-feature"><p className="mortgage-folio">Operating boundary</p><h2 id="services-boundary-title">Preparation can move. Authority does not.</h2><p>Remote staff may organize records, prepare factual summaries, maintain permitted administrative fields, send approved routine communication, and surface exceptions.</p></div>
      <div className="services-boundary-decision"><h3>Your team decides</h3><p>Underwriting, credit, eligibility, pricing, disclosures, approvals, legal or financial advice, and every licensed or regulated matter stay with appropriately authorized client personnel.</p></div>
      <div className="services-boundary-control"><h3>Your team governs</h3><p>Your organization remains responsible for access, supervision, policies, privacy, security, retention, compliance, and the acceptance of every output.</p></div>
    </section>

    <section className="mortgage-closing services-closing" aria-labelledby="services-closing-title">
      <p className="mortgage-folio">Frame the first handoff</p><h2 id="services-closing-title">Bring one queue your team keeps reconstructing.</h2><p>We can use the source, output, reviewer, boundary, and exception path to identify a practical first role scope.</p><Link id="cta-services-final-consultation" className="mortgage-button" href="/contact-us">Discuss the workflow <ArrowIcon /></Link>
    </section>
  </main>;
}
