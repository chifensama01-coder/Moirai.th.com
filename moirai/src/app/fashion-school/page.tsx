import Link from 'next/link'

const MODULES = [
  { num: '01', title: 'Foundation of Fashion Design', desc: 'History, theory, and the language of fashion. Understanding what makes great design.' },
  { num: '02', title: 'Pattern Making & Cutting', desc: 'Translate designs from paper to fabric with precision and confidence.' },
  { num: '03', title: 'Sewing Techniques', desc: 'From basic stitches to advanced couture construction methods.' },
  { num: '04', title: 'Fabric & Material Knowledge', desc: 'Understanding textures, weights, and how different fabrics behave.' },
  { num: '05', title: 'Styling & Presentation', desc: 'How to dress the body, direct shoots, and present your work professionally.' },
  { num: '06', title: 'Business of Fashion', desc: 'Pricing, branding, clients, and building your own fashion business from scratch.' },
]

const WHO = [
  'Beginners with a passion for fashion and no prior experience',
  'Aspiring designers wanting structured, hands-on training',
  'Entrepreneurs starting their own fashion label',
  'Anyone wanting to create and understand their own wardrobe',
]

const WA = '237682710405'

export default function FashionSchoolPage() {
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent('Hi! I am interested in joining the Moirai Fashion School program. Can you share more details?')}`

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 2rem', background: 'linear-gradient(170deg, #0d0b10, #1e1826)', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 720, position: 'relative', zIndex: 1 }}>
          <p className="section-label">Education & Craft</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,7vw,5.5rem)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '1.5rem', lineHeight: 1.05, background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Moirai<br />Fashion School
          </h1>
          <div className="divider" style={{ marginBottom: '2rem' }} />
          <p style={{ color: '#B8A9C9', fontSize: '14px', lineHeight: 2, marginBottom: '3rem', maxWidth: 520, margin: '0 auto 3rem' }}>
            Learn the art of craftsmanship. Become the creator behind the garment.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Join the Program</a>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label">Curriculum</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>What You Will Learn</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {MODULES.map(m => (
              <div key={m.title} style={{ padding: '2.5rem', background: '#130f18', border: '1px solid #2a2133', transition: 'border-color 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#6B3FA0'; el.style.boxShadow = '0 0 25px rgba(107,63,160,0.12)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#2a2133'; el.style.boxShadow = 'none' }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 700, color: '#2a2133', lineHeight: 1, marginBottom: '1.25rem' }}>{m.num}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#E0AAFF', marginBottom: '0.75rem' }}>{m.title}</p>
                <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 1.9 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section" style={{ background: '#0d0b10', borderTop: '1px solid #2a2133', borderBottom: '1px solid #2a2133' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <p className="section-label">Is This For You?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '2.5rem', lineHeight: 1.2 }}>Who It&apos;s For</h2>
              {WHO.map(w => (
                <div key={w} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <span style={{ color: '#9B5DE5', marginTop: '0.1rem', flexShrink: 0 }}>✦</span>
                  <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 1.8 }}>{w}</p>
                </div>
              ))}
            </div>
            <div style={{ background: 'linear-gradient(135deg, #1e1826, #2D1B69)', aspectRatio: '4/5', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 60% 40%, rgba(155,93,229,0.2), transparent 60%)' }} />
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', opacity: 0.12, color: 'white', letterSpacing: '0.1em', fontWeight: 700 }}>✂</p>
                <p style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#2a2133', textTransform: 'uppercase', marginTop: '0.5rem' }}>Photo via Admin</p>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div>div[style*="grid-template-columns:1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Details + CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p className="section-label">Program Details</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '1.5rem' }}>Duration & Enrollment</h2>
          <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 2, marginBottom: '3rem' }}>
            Duration and schedule details are available on request. Intake is intentionally limited to ensure every student receives personal mentorship and hands-on time with the Moirai team.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Apply Now</a>
            <Link href="/contact" className="btn-ghost">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
