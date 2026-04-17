import Link from 'next/link'
import { client, featuredProductsQuery, recentPostsQuery, siteSettingsQuery, urlFor } from '@/lib/sanity'

export const revalidate = 60

const CATEGORIES = [
  { name: 'Bespoke', desc: 'Custom pieces crafted to reflect your identity', href: '/bespoke' },
  { name: 'Corsets', desc: 'Structured silhouettes that command a room', href: '/collections' },
  { name: 'Cocktail Dresses', desc: 'Effortless elegance for every occasion', href: '/collections' },
  { name: 'Cameroonian Traditional', desc: 'Heritage reimagined in modern silhouettes', href: '/collections' },
]

const VALUES = [
  { icon: '◆', title: 'Customer Experience', desc: 'Every interaction is personal. You are not a transaction.' },
  { icon: '◇', title: 'Craftsmanship Excellence', desc: 'We obsess over details that others overlook.' },
  { icon: '✦', title: 'Empowerment Through Style', desc: 'Fashion is the language of confidence.' },
  { icon: '✧', title: 'Sustainability', desc: 'Intentional creation. Pieces made to last.' },
]

export default async function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let products: any[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let posts: any[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let settings: any = null

  try {
    ;[products, posts, settings] = await Promise.all([
      client.fetch(featuredProductsQuery),
      client.fetch(recentPostsQuery),
      client.fetch(siteSettingsQuery),
    ])
  } catch {
    // Sanity not yet configured
  }

  const waNumber = (settings?.whatsappNumber || '237682710405').replace(/\D/g, '')
  const waMsg = encodeURIComponent("Hi, I'd like to inquire about Moirai")

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(170deg, #050407 0%, #0d0b10 40%, #130f18 100%)',
      }}>
        {/* Left content */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 4rem 4rem', position: 'relative', zIndex: 2 }}>
          {/* Purple orb */}
          <div style={{ position: 'absolute', top: '20%', left: '-10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,63,160,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <p className="section-label" style={{ animation: 'fadeUp 0.8s 0.2s ease both', opacity: 0 }}>The House of Moirai</p>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 6vw, 7.5rem)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            lineHeight: 0.95,
            marginBottom: '1.5rem',
            animation: 'fadeUp 0.9s 0.4s ease both',
            opacity: 0,
          }}>
            <span style={{ display: 'block', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 60%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Destiny,</span>
            <span style={{ display: 'block', background: 'linear-gradient(135deg, #9B5DE5 0%, #E0AAFF 60%, #FAFAFA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tailored.</span>
          </h1>

          <div className="divider" style={{ margin: '1.5rem 0', animation: 'fadeIn 1s 0.8s ease both', opacity: 0 }} />

          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontStyle: 'italic', color: '#E0AAFF', marginBottom: '0.5rem', animation: 'fadeUp 0.9s 0.9s ease both', opacity: 0 }}>
            Not a Trend. IDENTITY.
          </p>
          <p style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#7A6B8A', marginBottom: '3rem', animation: 'fadeUp 0.9s 1s ease both', opacity: 0 }}>
            Made for who you are Becoming
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', animation: 'fadeUp 0.9s 1.1s ease both', opacity: 0 }}>
            <Link href="/collections" className="btn-primary">Explore Collections</Link>
            <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">Enquire Now</a>
          </div>
        </div>

        {/* Right — purple gradient panel */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(160deg, #1e1826 0%, #2D1B69 40%, #6B3FA0 100%)',
        }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3rem', opacity: 0.12 }}>
            {['Moirai.', '✦', 'Destiny, Tailored.', '◆', 'The House of Moirai', '◇', 'Not a Trend.', '✧'].map((t, i) => (
              <p key={i} style={{ fontFamily: i % 2 === 0 ? 'var(--font-display)' : 'inherit', fontSize: i === 0 ? '5rem' : i % 2 === 0 ? '1.2rem' : '2rem', letterSpacing: '0.2em', color: 'white', textAlign: 'center', fontWeight: 700 }}>{t}</p>
            ))}
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #050407 0%, transparent 30%)' }} />
          {/* Large glowing orb */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(155,93,229,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', zIndex: 2, animation: 'fadeIn 1s 2s ease both', opacity: 0 }}>
          <p style={{ fontSize: '9px', letterSpacing: '0.3em', color: '#7A6B8A', textTransform: 'uppercase' }}>Scroll</p>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #9B5DE5, transparent)' }} />
        </div>

        <style>{`@media(max-width:900px){section:first-of-type{grid-template-columns:1fr!important}section:first-of-type>div:last-of-type{display:none!important}section:first-of-type>div:first-of-type{padding:7rem 1.5rem 4rem!important}}`}</style>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid #2a2133', borderBottom: '1px solid #2a2133', padding: '1rem 0', background: '#0d0b10' }}>
        <div style={{ display: 'flex', gap: '3rem', animation: 'marqueeScroll 28s linear infinite', width: 'max-content' }}>
          {['Made for who you are Becoming', '✦', 'Destiny Tailored', '◆', 'Refined. Intentional. Eternal.', '◇', 'Not a Trend. IDENTITY', '✧',
            'Made for who you are Becoming', '✦', 'Destiny Tailored', '◆', 'Refined. Intentional. Eternal.', '◇', 'Not a Trend. IDENTITY', '✧'].map((t, i) => (
            <span key={i} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: i % 2 !== 0 ? '#9B5DE5' : '#7A6B8A', whiteSpace: 'nowrap' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── BRAND STATEMENT ── */}
      <section style={{ textAlign: 'center', padding: '7rem 2rem', background: '#130f18', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 750, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p className="section-label">Our Philosophy</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontStyle: 'italic', lineHeight: 1.25, marginBottom: '2rem' }}>
            &ldquo;Bold, Empowered,<br />and an endless moment.&rdquo;
          </h2>
          <div className="divider" style={{ marginBottom: '2rem' }} />
          <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, maxWidth: 580, margin: '0 auto 2.5rem' }}>
            Moirai draws from the Greek Fates — the ancient weavers of human destiny. We believe every silhouette tells a story, every stitch carries intention. Fashion is not decoration. It is the language of becoming.
          </p>
          <Link href="/about" className="btn-ghost">Discover Our Story</Link>
        </div>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section className="section" id="collections">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label">What We Create</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>The Collections</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {CATEGORIES.map(cat => (
              <Link key={cat.name} href={cat.href} style={{
                display: 'block',
                padding: '3rem 2rem',
                background: '#130f18',
                border: '1px solid #2a2133',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#6B3FA0'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 35px rgba(107,63,160,0.15)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2133'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                {/* Image placeholder — real photos replace these via Sanity */}
                <div style={{ width: '100%', aspectRatio: '4/3', background: 'linear-gradient(135deg, #1e1826, #2D1B69)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(155,93,229,0.2), transparent 60%)' }} />
                  <span style={{ fontSize: '2.5rem', opacity: 0.15 }}>✦</span>
                  <p style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', fontSize: '8px', letterSpacing: '0.2em', color: '#2a2133', textTransform: 'uppercase' }}>Photo via Admin</p>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginBottom: '0.5rem' }}>{cat.name}</p>
                <p style={{ fontSize: '12px', color: '#7A6B8A', lineHeight: 1.7 }}>{cat.desc}</p>
                <p style={{ fontSize: '10px', color: '#9B5DE5', letterSpacing: '0.2em', marginTop: '1.25rem', textTransform: 'uppercase' }}>Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS (from Sanity) ── */}
      {products.length > 0 && (
        <section className="section" style={{ background: '#0d0b10', borderTop: '1px solid #2a2133' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p className="section-label">Just Added</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Featured Pieces</h2>
              </div>
              <Link href="/shop" className="btn-outline">View All</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {products.map((p: any) => {
                const msg = encodeURIComponent(p.whatsappMessage || `Hi! I'm interested in ${p.name} from Moirai.`)
                return (
                  <div key={p._id} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', background: '#1e1826', border: '1px solid #2a2133' }}>
                    {p.image
                      ? <img src={urlFor(p.image).width(520).url()} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }} />
                      : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1e1826, #2D1B69)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '2rem', opacity: 0.1 }}>✦</span></div>
                    }
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,4,7,0.92) 0%, transparent 50%)', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginBottom: '0.25rem' }}>{p.name}</p>
                      {p.price && <p style={{ fontSize: '11px', color: '#C77DFF', marginBottom: '0.75rem' }}>{p.price}</p>}
                      <a href={`https://wa.me/${waNumber}?text=${msg}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.45rem 1rem', border: '1px solid #9B5DE5', color: '#C77DFF', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', width: 'fit-content', transition: 'all 0.3s' }}
                        onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#9B5DE5'; el.style.color = 'white' }}
                        onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.color = '#C77DFF' }}
                      >Enquire</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── BESPOKE HIGHLIGHT ── */}
      <section style={{ background: '#0d0b10', borderTop: '1px solid #2a2133' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
          {/* Purple gradient image side */}
          <div style={{ background: 'linear-gradient(160deg, #2D1B69 0%, #6B3FA0 50%, #9B5DE5 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
              {['Bespoke', '✦', 'Custom', '◆', 'Couture', '◇', 'Tailored', '✧'].map((t, i) => (
                <p key={i} style={{ fontFamily: i % 2 === 0 ? 'var(--font-display)' : 'inherit', fontSize: i % 2 === 0 ? '2rem' : '3rem', color: 'white', letterSpacing: '0.2em', padding: '1rem 2rem', fontWeight: 700 }}>{t}</p>
              ))}
            </div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,6vw,6rem)', fontWeight: 900, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em' }}>Bespoke.</p>
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, #0d0b10)' }} />
          </div>
          {/* Text side */}
          <div style={{ padding: '5rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="section-label">Our Specialty</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>Bespoke &<br />Couture Pieces</h2>
            <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '1.25rem' }}>
              Custom pieces crafted to reflect your identity. Every measurement, every fabric choice, every stitch is a conversation between your vision and our craft.
            </p>
            <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {['Consultation', 'Design', 'Fitting', 'Delivery'].map(s => (
                <span key={s} style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#9B5DE5', border: '1px solid #2a2133', padding: '0.35rem 0.9rem', textTransform: 'uppercase' }}>{s}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/bespoke" className="btn-primary">Start Your Order</Link>
              <a href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hi! I am interested in a bespoke piece from Moirai.')}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Us</a>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div[style*="grid-template-columns:1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── FASHION SCHOOL ── */}
      <section className="section" style={{ textAlign: 'center', borderTop: '1px solid #2a2133', background: '#130f18' }}>
        <div className="container" style={{ maxWidth: 700, margin: '0 auto' }}>
          <p className="section-label">Learn the Craft</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1.5rem' }}>Moirai Fashion School</h2>
          <div className="divider" style={{ marginBottom: '2rem' }} />
          <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '2.5rem' }}>
            Learn the art of craftsmanship. From foundational sewing techniques to advanced couture, our program is built for those who want to create — not just wear — the extraordinary.
          </p>
          <Link href="/fashion-school" className="btn-ghost">Explore the Program</Link>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ borderTop: '1px solid #2a2133', padding: '5rem 0', background: '#0d0b10' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label">What We Stand For</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '2px' }}>
            {VALUES.map((v, i) => (
              <div key={v.title} style={{ padding: '3rem 2rem', background: i % 2 === 0 ? '#130f18' : '#0d0b10', borderTop: '2px solid transparent', transition: 'border-color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#9B5DE5')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
              >
                <p style={{ fontSize: '1.5rem', color: '#9B5DE5', marginBottom: '1rem' }}>{v.icon}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#E0AAFF', marginBottom: '0.75rem' }}>{v.title}</p>
                <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 1.9 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNAL PREVIEW ── */}
      {posts.length > 0 && (
        <section className="section" style={{ background: '#0d0b10', borderTop: '1px solid #2a2133' }}>
          <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p className="section-label">Stories & Style</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>The Journal</h2>
              </div>
              <Link href="/blog" className="btn-outline">All Posts</Link>
            </div>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {posts.map((post: any) => (
              <Link key={post._id} href={`/blog/${post.slug?.current}`} style={{ display: 'block' }}>
                <article style={{ borderTop: '1px solid #2a2133', padding: '2.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', transition: 'padding-left 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.paddingLeft = '1rem')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.paddingLeft = '0')}
                >
                  <div>
                    <p style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#9B5DE5', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 400, color: '#F0EBF8', marginBottom: '0.5rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#C77DFF')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#F0EBF8')}
                    >{post.title}</h3>
                    {post.excerpt && <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 1.8 }}>{post.excerpt}</p>}
                  </div>
                  <span style={{ fontSize: '1.25rem', color: '#9B5DE5', flexShrink: 0 }}>→</span>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '9rem 2rem', textAlign: 'center', background: 'linear-gradient(170deg, #130f18, #050407)', borderTop: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(107,63,160,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p className="section-label">Ready to Begin?</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontStyle: 'italic', fontWeight: 400, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Made for who<br />you are Becoming.
          </h2>
          <div className="divider" style={{ marginBottom: '2rem' }} />
          <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '3rem' }}>
            Whether it is a bespoke piece, a cocktail dress, or your first lesson in the fashion school — your story starts here.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/bespoke" className="btn-primary">Start Your Journey</Link>
            <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">Chat With Us</a>
          </div>
        </div>
      </section>
    </>
  )
}
