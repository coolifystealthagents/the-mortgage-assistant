import Link from 'next/link';
import type { ResearchPost } from '@/lib/types';

export function ResearchSidebar({ posts }: { posts: ResearchPost[] }) {
  return <aside className="sidebar"><p className="eyebrow">Related research</p><h3>Continue the evidence review.</h3>{posts.map((post) => <p key={post.slug}><Link href={`/research/${post.slug}`}>{post.title}</Link></p>)}<Link className="button" href="/research">View all research</Link></aside>;
}
