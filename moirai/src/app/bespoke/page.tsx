import Link from 'next/link'

const PROCESS = [
  { num: '01', title: 'Consultation', desc: 'We start with a conversation. Your vision, your measurements, your story. Every detail matters. Done via WhatsApp or in person.' },
  { num: '02', title: 'Design', desc: 'Our team sketches your piece and selects fabrics aligned with your identity and the occasion you\'re dressing for.' },
  { num: '03', title: 'Fitting', desc: 'A fitting session ensures the piece sits perfectly on your body — because you are the standard, not a mannequin.' },
  { num: '04', title: 'Delivery', desc: 'Your finished piece arrives ready for the moment it was made for. Ready to be worn, photographed, and remembered.' },
]

const FAQS = [
  { q: 'How long does a bespoke piece take?', a: 'Typically 2–4 weeks depending on complexity. Rush orders can be discussed and accommodated where possible.' },
  { q: 'How do I start a bespoke order?', a: 'Simply reach out via WhatsApp at +237 682 710 405 or use the button below. We\'ll schedule a consultation immediately.' },
  { q: 'Do you offer custom sizing?', a: 'Every bespoke piece is made to your exact measurements. No standard sizing. You are the standard.' },
  { q: 'What is the price range?', a: 'Prices vary by design complexity and fabric selected. Contact us and we\'ll discuss what works within your budget.' },
  { q: 'Can I see examples of previous bespoke work?', a: 'Yes! Follow @Moirai.th on Instagram to see previous pieces, or ask our team to share a portfolio when you reach out.' },
  { q: 'What if I don\'t know exactly what I want?', a: 'That\'s completely fine. The consultation is exactly where we work that out together. Bring any inspiration or just a feeling.' },
]

const WA = '237682710405'

export default function BespokePage() {
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent('Hi! I am interested in a bespoke piece from Moirai. I would like to schedule a consultation.')}`

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 2rem', background: 'linear-gradient(170deg, #0d0b10, #1e1826)', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, position: 'relative', zIndex: 1 }}>
          <p className="section-label">Couture & Custom</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,9vw,7rem)', fontWeight: 700, marginBottom: '1.5rem', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Bespoke.</h1>
          <div className="divider" style={{ marginBottom: '2rem' }} />
          <p style={{ color: '#B8A9C9', fontSize: '14px', lineHeight: 2, marginBottom: '3rem', maxWidth: 520, margin: '0 auto 3rem' }}>
            Your identity, tailored to perfection. A bespoke piece from Moirai is not just clothing — it is a statement of who you are becoming.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Start Your Bespoke Order</a>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p className="section-label">How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>The Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0' }}>
            {PROCESS.map((step, i) => (
              <div key={step.num} style={{
                padding: '3rem 2.5rem',
                border: '1px solid #2a2133',
                marginLeft: i === 0 ? 0 : '-1px',
                position: 'relative',
                transition: 'border-color 0.3s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#6B3FA0'; (e.currentTarget as HTMLElement).style.zIndex = '2' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2133'; (e.currentTarget as HTMLElement).style.zIndex = 'auto' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #2D1B69, #9B5DE5)', opacity: 0, transition: 'opacity 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                />
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 700, color: '#2a2133', lineHeight: 1, marginBottom: '1.5rem' }}>{step.num}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#E0AAFF', marginBottom: '0.75rem' }}>{step.title}</p>
                <p style={{ color: '#7A6B8A', fontSize: '12px', lineHeight: 1.9 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="section" style={{ background: '#0d0b10', borderTop: '1px solid #2a2133', borderBottom: '1px solid #2a2133' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label">Our Work</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Bespoke Gallery</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{ aspectRatio: i % 3 === 0 ? '2/3' : '3/4', background: 'linear-gradient(135deg, #130f18, #2D1B69)', border: '1px solid #2a2133', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem', opacity: 0.08 }}>✦</span>
                <p style={{ fontSize: '8px', letterSpacing: '0.2em', color: '#2a2133', textTransform: 'uppercase' }}>Photo via Admin</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '12px', color: '#7A6B8A' }}>
            Follow <a href="https://instagram.com/Moirai.th" target="_blank" rel="noopener noreferrer" style={{ color: '#9B5DE5' }}>@Moirai.th</a> on Instagram to see real pieces in the meantime.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="section-label">Questions</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Frequently Asked</h2>
          </div>
          {FAQS.map(faq => (
            <div key={faq.q} style={{ borderBottom: '1px solid #2a2133', padding: '2rem 0' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#E0AAFF', marginBottom: '0.75rem' }}>{faq.q}</p>
              <p style={{ color: '#B8A9C9', fontSize: '13px', lineHeight: 1.9 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid #2a2133', background: 'linear-gradient(170deg, #130f18, #050407)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(107,63,160,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 500, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.2 }}>
            Ready to begin your<br />bespoke journey?
          </h2>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Chat With Us on WhatsApp</a>
        </div>
      </section>
    </div>
  )
}
