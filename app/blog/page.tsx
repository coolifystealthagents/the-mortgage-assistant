import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import { headingId } from '@/components/editorial/headingId';
import styles from './editorial.module.css';

export const metadata: Metadata = {
  title: 'Mortgage Operations Blog',
  description: 'Practical field notes for mortgage teams designing clear roles, controlled handoffs, and reviewable support workflows.',
  alternates: { canonical: '/blog' },
};

const categories = [...new Set(blogPosts.map((post) => post.category))];

export default function BlogPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>The operations ledger · Field notes</p>
          <h1>Clearer roles. Better handoffs.</h1>
          <p className={styles.deck}>
            Practical guides for mortgage owners and managers who want to delegate recurring work without losing visibility, evidence, or decision control.
          </p>
        </div>
      </header>

      <div className={styles.indexWrap}>
        <nav className={styles.indexNav} aria-label="Browse articles by topic">
          {categories.map((category) => {
            const count = blogPosts.filter((post) => post.category === category).length;
            return <a key={category} href={`#${headingId(category)}`}>{category} · {count}</a>;
          })}
        </nav>

        {categories.map((category) => {
          const posts = blogPosts.filter((post) => post.category === category);
          return (
            <section className={styles.indexGroup} id={headingId(category)} key={category}>
              <header className={styles.groupHeader}>
                <h2>{category}</h2>
                <p>{posts.length} {posts.length === 1 ? 'field note' : 'field notes'}</p>
              </header>
              <div className={styles.cardGrid}>
                {posts.map((post) => (
                  <Link className={styles.card} href={`/blog/${post.slug}`} key={post.slug}>
                    {post.thumbnail && (
                      <Image
                        className={styles.cardImage}
                        src={post.thumbnail}
                        alt={`Editorial cover for “${post.title}”`}
                        width={1200}
                        height={630}
                      />
                    )}
                    <p className={styles.folio}>{post.category}</p>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p className={styles.cardMeta}>
                      <time dateTime={post.publishedAt}>{post.publishedAt}</time> · {post.readTime}
                    </p>
                    <span className={styles.cardAction}>Read “{post.title}”</span>
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
