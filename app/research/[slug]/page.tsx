import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ResearchSidebar } from '@/components/ResearchSidebar';
import { researchPosts, researchBySlug } from '@/lib/content';
import { site } from '@/lib/site';

export function generateStaticParams() { return researchPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = researchBySlug(slug); return post ? { title: post.title, description: post.summary, alternates: { canonical: `/research/${post.slug}` } } : {}; }

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = researchBySlug(slug); if (!post) notFound(); const related = researchPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  return <main><header className="page-hero"><p className="eyebrow">Home / Research / {post.cluster}</p><h1>{post.title}</h1><p>{post.summary}</p><p className="meta">{site.name} Editorial Team · Published {post.publishedAt}</p></header><section className="content-wrap article-layout"><article className="prose">{post.thumbnail && <Image src={post.thumbnail} alt={post.title} width={1200} height={630} priority />}<p className="research-finding">{post.finding}</p>{post.sections?.map((section) => <section key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<div className="sources"><h2>Sources</h2><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ol></div><Link id="cta-research-final-bookcall" className="button primary" href="/contact-us">Discuss your workflow in a free call</Link></article><ResearchSidebar posts={related} /></section></main>;
}
