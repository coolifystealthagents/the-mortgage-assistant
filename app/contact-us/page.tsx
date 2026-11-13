import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { CalibrateIcon, DocumentIcon, MapIcon, ReviewIcon } from '@/components/Icons';
import { site } from '@/lib/site';
import './contact.css';

export const metadata:Metadata={
  title:'Mortgage operations staffing consultation',
  description:'Discuss a clearly bounded support workflow for loan files, borrower follow up, pipeline records, closing coordination, partner communication, or mortgage marketing.',
  alternates:{canonical:'/contact-us'},
  openGraph:{
    title:`Mortgage operations staffing consultation | ${site.name}`,
    description:'Bring one recurring mortgage operations queue and define its inputs, outputs, review owner, decision boundary, and escalation path.',
    images:[{url:'/images/mortgage/heroes/contact-consultation.jpg',width:1672,height:941,alt:'Mortgage operations lead and staffing advisor reviewing a workflow brief during a consultation'}],
  },
};

const steps=[
  {icon:MapIcon,title:'Workflow discovery',copy:'Map the recurring mortgage operations work, current owner, systems, and escalation points.'},
  {icon:DocumentIcon,title:'Role design',copy:'Define a focused support role with clear inputs, outputs, access, and review boundaries.'},
  {icon:ReviewIcon,title:'Candidate matching',copy:'Review remote professionals whose strengths fit the approved workflow and communication needs.'},
  {icon:CalibrateIcon,title:'Controlled launch',copy:'Start with documented tasks, measured handoffs, and accountable oversight from your team.'},
];
const faqs=[['What can a mortgage assistant support?','A remote assistant can help coordinate document requests, maintain approved pipeline records, send approved follow ups, prepare status summaries, and organize closing milestones.'],['Can an assistant make lending or underwriting decisions?','No. Loan qualification, underwriting, disclosures, pricing, compliance interpretation, approvals, and other regulated decisions stay with authorized mortgage professionals.'],['Can we begin with one recurring workflow?','Yes. A narrow first workflow makes ownership, access, review, and escalation easier to test before the role expands.'],['How do you approach borrower information?','The consultation covers least privilege access, approved systems, documented handling rules, and escalation paths. Your organization remains responsible for its privacy, security, retention, and regulatory obligations.']];

export default function ContactPage(){
  const schema={'@context':'https://schema.org','@type':'ContactPage',name:`Contact ${site.name}`,url:`https://${site.domain}/contact-us`,description:'Mortgage operations staffing consultation.',breadcrumb:{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:`https://${site.domain}`},{'@type':'ListItem',position:2,name:'Contact Us',item:`https://${site.domain}/contact-us`}]}};
  return <main className="contact-page">
    <section className="contact-hero"><Image src="/images/mortgage/heroes/contact-consultation.jpg" alt="Mortgage operations lead and staffing advisor reviewing a workflow brief during a consultation" fill priority sizes="100vw" /><div className="contact-hero-overlay" /><div className="contact-container contact-hero-copy"><p className="eyebrow">Mortgage operations consultation</p><h1>Bring the workflow that keeps returning to your desk.</h1><p>Build dependable administrative capacity around loan files, borrower communication, pipeline records, and closing handoffs while your licensed team keeps every lending decision.</p></div></section>

    <section className="contact-section"><div className="contact-container consultation-grid"><div className="consultation-copy"><p className="eyebrow">Mortgage operations consultation</p><h2>Turn a pressured workflow into a clear support role.</h2><p>Bring the process that repeatedly pulls licensed team members away from borrower relationships and accountable decisions. We will help define what can be delegated, what stays in house, and what a controlled launch should look like.</p><h3>What to Expect</h3><ul><li>A practical conversation about the workflow and its current owner.</li><li>Clear role boundaries, access needs, and review points.</li><li>A candidate matching path based on the work, not a generic task list.</li><li>A focused next step based on your current operating needs.</li></ul><p className="contact-note"><strong>First, send your brief.</strong> After the form is accepted, you can choose a consultation time. Please do not include borrower financial details or nonpublic personal information.</p></div><div id="consultation-form" className="contact-form-card"><p className="form-step">Step 1 of 2 · Your staffing brief</p><h2>Start Your Free Consultation</h2><p>Share enough context for a useful conversation. Scheduling follows on the confirmation page.</p><LeadForm source="contact-page-consultation" /></div></div></section>

    <section className="contact-section credibility"><div className="contact-container credibility-grid"><div className="credibility-image"><Image src="/images/contact/team-bacolod.jpg" width={953} height={540} alt="Stealth Agents team gathered in front of the City of Bacolod landmark" sizes="(max-width: 900px) 90vw, 55vw" /></div><div className="credibility-copy"><p className="eyebrow">Managed service team</p><h2>Mortgage focus, backed by Stealth Agents.</h2><p>Stealth Agents supports the workflow scoping, candidate matching, onboarding, and managed staffing operations behind The Mortgage Assistant. Your mortgage team keeps every lending decision, while this service stays focused on clearly documented administrative support.</p><div className="official-team-plate"><Image src="/images/contact/stealth-agents-logo-black.png" width={149} height={50} alt="Stealth Agents" /><strong>Official team, Bacolod.</strong></div><p><strong>{site.name} is a subsidiary of Stealth Agents.</strong></p><Link className="button primary" href="#consultation-form">Send your staffing brief</Link></div></div></section>

    <section className="contact-section"><div className="contact-container"><p className="eyebrow">A controlled path forward</p><h2>After you reach out</h2><ol className="step-grid">{steps.map(({icon:Icon,title,copy})=><li key={title} className="step-card"><span className="step-icon"><Icon /></span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>

    <section className="contact-section prep"><div className="contact-container"><p className="eyebrow">Make the conversation specific</p><h2>Prepare for a useful call</h2><div className="prep-grid"><article><h3>Recurring work</h3><p>Identify the tasks that recur across intake, document collection, pipeline updates, and closing coordination.</p></article><article><h3>Current ownership</h3><p>Note who completes, reviews, approves, and escalates each part of the workflow today.</p></article><article><h3>Systems and access</h3><p>List the approved systems involved and the minimum access a support role would need.</p></article><article><h3>Service standard</h3><p>Define what timely, accurate, documented completion looks like for your team and borrowers.</p></article></div></div></section>

    <section className="contact-section boundaries"><div className="contact-container narrow"><p className="eyebrow">Accountability stays clear</p><h2>Responsibility and boundaries</h2><p>Remote assistants can prepare, coordinate, update approved records, send approved communications, and flag exceptions. They do not originate or approve loans, make credit or underwriting decisions, set rates or terms, interpret regulations, give legal or financial advice, approve disclosures, move funds, verify wire changes, or replace licensed and authorized personnel.</p><p>Your mortgage business retains responsibility for supervision, borrower privacy, information security, fair lending, required disclosures, record retention, vendor management, and every regulated decision. Sensitive borrower data should only be handled inside approved systems with least privilege access and documented review.</p></div></section>

    <section className="contact-section"><div className="contact-container"><p className="eyebrow">Explore focused roles</p><h2>Common starting points</h2><div className="path-grid"><Link href="/services/loan-file-coordination"><h3>Loan file coordination</h3><p>Organize requests, status records, and review ready notes.</p></Link><Link href="/services/borrower-follow-up"><h3>Borrower follow up</h3><p>Keep approved reminders, response status, and question routing clear.</p></Link><Link href="/services/crm-pipeline-support"><h3>CRM and pipeline support</h3><p>Maintain approved fields, ownership, and pipeline visibility.</p></Link><Link href="/services/closing-coordination"><h3>Closing coordination support</h3><p>Track milestones, checklists, reminders, and schedule exceptions.</p></Link></div><Link className="text-link all-services" href="/services">View the full services collection</Link></div></section>

    <section className="contact-section faq"><div className="contact-container narrow"><p className="eyebrow">Mortgage staffing questions</p><h2>Frequently asked questions</h2>{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  </main>;
}
