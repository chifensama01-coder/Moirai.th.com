import Link from 'next/link'

const SLOGANS = [
  'Refined. Intentional. Eternal.',
  'Made for who you are Becoming.',
  'Destiny, Tailored.',
  'Bold, Empowered, and an endless moment.',
]

const VALUES = [
  { icon: '◆', title: 'Customer Experience', desc: 'Every interaction is personal. You are not a transaction — you are someone we are creating a piece of destiny for.' },
  { icon: '◇', title: 'Craftsmanship Excellence', desc: 'We obsess over details that others overlook. A seam, a hem, a finish — it all matters.' },
  { icon: '✦', title: 'Empowerment Through Style', desc: 'Fashion is the language of confidence. When you wear Moirai, you wear intention.' },
  { icon: '✧', title: 'Sustainability', desc: 'We create intentionally. Pieces designed to outlast trends and be worn for years.' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 2rem', background: 'linear-gradient(170deg, #0d0b10, #1e1826)', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, position: 'relative', zIndex: 1 }}>
          <p className="section-label">Our Story</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 700, marginBottom: '1.5rem', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            About Moirai.
          </h1>
          <div className="divider" />
        </div>
      </section>

      {/* The name */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <p className="section-label">The Name</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,2.8rem)', marginBottom: '2rem', lineHeight: 1.2 }}>
                Woven by the Fates.<br />Worn by You.
              </h2>
              <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '1.5rem' }}>
                Moirai takes its name from the ancient Greek Fates — the three goddesses who spun, measured, and cut the thread of every human life. Clotho spun the thread of life. Lachesis measured it. Atropos cut it.
              </p>
              <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '1.5rem' }}>
                We believe fashion is not accidental. Every piece you choose to wear is a deliberate act — of defining who you are and who you are becoming. That intentionality is the spirit of Moirai.
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontStyle: 'italic', color: '#E0AAFF', lineHeight: 1.7, borderLeft: '2px solid #9B5DE5', paddingLeft: '1.25rem' }}>
                &ldquo;Not a Trend. IDENTITY.&rdquo;
              </p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #1e1826, #2D1B69)', aspectRatio: '3/4', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 60% 40%, rgba(155,93,229,0.2), transparent 60%)' }} />
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 700, color: 'rgba(255,255,255,0.08)', letterSpacing: '0.15em', position: 'relative', zIndex: 1 }}>Moirai.</p>
              <p style={{ fontSize: '8px', letterSpacing: '0.3em', color: '#2a2133', textTransform: 'uppercase', marginTop: '1rem', position: 'relative', zIndex: 1 }}>Brand Photo via Admin</p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div>div[style*="grid-template-columns:1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Values */}
      <section className="section" style={{ background: '#0d0b10', borderTop: '1px solid #2a2133', borderBottom: '1px solid #2a2133' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label">What Drives Us</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ padding: '2.5rem 2rem', background: '#130f18', border: '1px solid #2a2133', transition: 'border-color 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#6B3FA0'; el.style.boxShadow = '0 0 25px rgba(107,63,160,0.12)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#2a2133'; el.style.boxShadow = 'none' }}
              >
                <p style={{ fontSize: '1.5rem', color: '#9B5DE5', marginBottom: '1rem' }}>{v.icon}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#E0AAFF', marginBottom: '0.75rem' }}>{v.title}</p>
                <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 1.9 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slogans */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderBottom: '1px solid #2a2133' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '3rem' }}>The Moirai Way</p>
          {SLOGANS.map(s => (
            <p key={s} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontStyle: 'italic', color: '#B8A9C9', marginBottom: '2rem', lineHeight: 1.4 }}>{s}</p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center', background: '#0d0b10' }}>
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.2 }}>
            Ready to wear your destiny?
          </h2>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/collections" className="btn-primary">View Collections</Link>
            <Link href="/bespoke" className="btn-ghost">Start Bespoke</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
