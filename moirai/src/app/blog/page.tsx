import Link from 'next/link'
import { client, allPostsQuery, urlFor } from '@/lib/sanity'

export const revalidate = 60

const PREVIEW_POSTS = [
  { title: 'The Meaning Behind Moirai', excerpt: 'Why we named our brand after the Greek Fates — and what it means for how we design.' },
  { title: 'Why Bespoke Fashion Matters', excerpt: 'In a world of fast fashion, choosing custom is a radical act of self-expression.' },
  { title: 'How to Choose the Perfect Corset', excerpt: 'A guide to finding the silhouette, structure, and style that speaks to you.' },
  { title: 'Heritage Reimagined: The Cameroonian Collection', excerpt: 'How we draw from tradition to create pieces that feel both ancient and entirely new.' },
]

export default async function BlogPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let posts: any[] = []
  try {
    posts = await client.fetch(allPostsQuery)
  } catch {
    // Sanity not yet configured
  }

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Header */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', background: 'linear-gradient(170deg, #0d0b10, #1e1826)', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">Stories & Style</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>The Journal</h1>
          <div className="divider" />
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          {posts.length > 0 ? (
            posts.map(post => (
              <Link key={post._id} href={`/blog/${post.slug?.current}`} style={{ display: 'block' }}>
                <article style={{ display: 'grid', gridTemplateColumns: post.coverImage ? '1fr 200px' : '1fr', gap: '2rem', alignItems: 'center', borderBottom: '1px solid #2a2133', padding: '3rem 0', transition: 'padding-left 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.paddingLeft = '1rem')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.paddingLeft = '0')}
                >
                  <div>
                    <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#9B5DE5', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                    </p>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,3vw,2rem)', fontWeight: 400, color: '#F0EBF8', marginBottom: '0.75rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#C77DFF')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#F0EBF8')}
                    >{post.title}</h2>
                    {post.excerpt && <p style={{ color: '#7A6B8A', fontSize: '13px', lineHeight: 1.8 }}>{post.excerpt}</p>}
                    <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#9B5DE5', textTransform: 'uppercase', marginTop: '1rem' }}>Read More →</p>
                  </div>
                  {post.coverImage && (
                    <div style={{ aspectRatio: '4/3', overflow: 'hidden', border: '1px solid #2a2133' }}>
                      <img src={urlFor(post.coverImage).width(400).url()} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                    </div>
                  )}
                </article>
              </Link>
            ))
          ) : (
            <>
              <p style={{ color: '#7A6B8A', fontSize: '13px', textAlign: 'center', marginBottom: '3rem' }}>
                The journal is coming soon. Add posts from the admin panel at <Link href="/studio" style={{ color: '#9B5DE5' }}>/studio</Link>. Here&apos;s a preview of what&apos;s coming:
              </p>
              {PREVIEW_POSTS.map(p => (
                <article key={p.title} style={{ borderBottom: '1px solid #2a2133', padding: '3rem 0', opacity: 0.4 }}>
                  <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#9B5DE5', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Coming Soon</p>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,3vw,1.8rem)', fontWeight: 400, color: '#F0EBF8', marginBottom: '0.5rem' }}>{p.title}</h2>
                  <p style={{ color: '#7A6B8A', fontSize: '13px', lineHeight: 1.8 }}>{p.excerpt}</p>
                </article>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
