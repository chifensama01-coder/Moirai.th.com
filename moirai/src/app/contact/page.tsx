'use client'
import { useState } from 'react'

const WA = '237682710405'
const SUBJECTS = ['General Enquiry', 'Bespoke Order', 'Fashion School', 'Collaboration', 'Press', 'Other']

export default function ContactPage() {
  const [subject, setSubject] = useState('General Enquiry')

  const waDefault = `https://wa.me/${WA}?text=${encodeURIComponent("Hi, I'd like to inquire about Moirai")}`

  const handleSubmit = () => {
    const name = (document.getElementById('cname') as HTMLInputElement)?.value || ''
    const msg = (document.getElementById('cmsg') as HTMLTextAreaElement)?.value || ''
    const text = `Hi Moirai! I'm ${name}.\n\nSubject: ${subject}\n\n${msg}`
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Header */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', background: 'linear-gradient(170deg, #0d0b10, #1e1826)', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">Get In Touch</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,7vw,5rem)', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Contact</h1>
          <div className="divider" />
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>

            {/* Info side */}
            <div>
              <p className="section-label">Reach Out</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', marginBottom: '3rem', lineHeight: 1.2 }}>
                Let&apos;s create<br />something together.
              </h2>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#9B5DE5', marginBottom: '0.6rem' }}>WhatsApp (Fastest)</p>
                <a href={waDefault} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#F0EBF8', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C77DFF')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#F0EBF8')}
                >+237 682 710 405</a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#9B5DE5', marginBottom: '0.6rem' }}>Social Media</p>
                <a href="https://instagram.com/Moirai.th" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '13px', color: '#B8A9C9', marginBottom: '0.5rem' }}>Instagram: @Moirai.th</a>
                <a href="https://tiktok.com/@MOIRAI" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '13px', color: '#B8A9C9' }}>TikTok: @MOIRAI</a>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <p style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#9B5DE5', marginBottom: '0.6rem' }}>Payment</p>
                <p style={{ fontSize: '13px', color: '#B8A9C9', lineHeight: 1.8 }}>
                  We accept Mobile Money (MoMo).<br />
                  Payment details provided upon order confirmation.
                </p>
              </div>

              <a href={waDefault} target="_blank" rel="noopener noreferrer" className="btn-primary">Chat on WhatsApp Now</a>
            </div>

            {/* Form side */}
            <div>
              <p className="section-label">Send a Message</p>
              <p style={{ color: '#7A6B8A', fontSize: '12px', marginBottom: '2rem', lineHeight: 1.8 }}>
                Fill in the form and we&apos;ll open a WhatsApp conversation with your message pre-filled — so our team can respond immediately.
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9B5DE5', marginBottom: '0.5rem' }}>Your Name</label>
                <input id="cname" type="text" placeholder="e.g. Amara" style={{ width: '100%', padding: '0.9rem 1rem', background: '#130f18', border: '1px solid #2a2133', color: '#F0EBF8', fontSize: '13px', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#6B3FA0')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#2a2133')}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9B5DE5', marginBottom: '0.75rem' }}>Subject</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {SUBJECTS.map(s => (
                    <button key={s} onClick={() => setSubject(s)} style={{
                      padding: '0.4rem 0.9rem',
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      border: '1px solid',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s',
                      borderColor: subject === s ? '#9B5DE5' : '#2a2133',
                      color: subject === s ? '#C77DFF' : '#7A6B8A',
                      background: subject === s ? 'rgba(155,93,229,0.1)' : 'transparent',
                    }}>{s}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9B5DE5', marginBottom: '0.5rem' }}>Message</label>
                <textarea id="cmsg" rows={5} placeholder="Tell us what you're looking for..." style={{ width: '100%', padding: '0.9rem 1rem', background: '#130f18', border: '1px solid #2a2133', color: '#F0EBF8', fontSize: '13px', outline: 'none', fontFamily: 'inherit', resize: 'vertical', lineHeight: 1.8, transition: 'border-color 0.2s' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#6B3FA0')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#2a2133')}
                />
              </div>

              <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%', cursor: 'pointer' }}>
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div>div[style*="grid-template-columns:1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>
    </div>
  )
}
