import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
import { headingId } from '@/components/editorial/headingId';
import styles from '@/app/blog/editorial.module.css';

export const metadata: Metadata = {
  title: 'Mortgage Operations Research',
  description: 'Source-led operational briefs for mortgage leaders reviewing evidence, controls, and specialist support roles.',
  alternates: { canonical: '/research' },
};

const clusters = [...new Set(researchPosts.map((post) => post.cluster))];

export default function ResearchPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>The evidence desk · Research library</p>
          <h1>Evidence for better operating decisions.</h1>
          <p className={styles.deck}>
            Source-led briefs that connect public guidance with practical review questions for mortgage workflows, controls, and handoffs.
          </p>
        </div>
      </header>

      <div className={styles.indexWrap}>
        <nav className={styles.indexNav} aria-label="Browse research by evidence cluster">
          {clusters.map((cluster) => {
            const count = researchPosts.filter((post) => post.cluster === cluster).length;
            return <a key={cluster} href={`#${headingId(cluster)}`}>{cluster} · {count}</a>;
          })}
        </nav>

        {clusters.map((cluster) => {
          const posts = researchPosts.filter((post) => post.cluster === cluster);
          return (
            <section className={styles.indexGroup} id={headingId(cluster)} key={cluster}>
              <header className={styles.groupHeader}>
                <h2>{cluster}</h2>
                <p>{posts.length} {posts.length === 1 ? 'evidence brief' : 'evidence briefs'}</p>
              </header>
              <div className={styles.cardGrid}>
                {posts.map((post) => (
                  <Link className={styles.card} href={`/research/${post.slug}`} key={post.slug}>
                    {post.thumbnail && (
                      <Image
                        className={styles.cardImage}
                        src={post.thumbnail}
                        alt={`Research brief cover for “${post.title}”`}
                        width={1200}
                        height={630}
                      />
                    )}
                    <p className={styles.folio}>{post.cluster}</p>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <p className={styles.cardMeta}>Published <time dateTime={post.publishedAt}>{post.publishedAt}</time></p>
                    <span className={styles.cardAction}>Review “{post.title}”</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
