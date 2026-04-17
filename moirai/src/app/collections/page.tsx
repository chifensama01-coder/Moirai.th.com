import Link from 'next/link'
import { client, allProductsQuery, siteSettingsQuery, urlFor } from '@/lib/sanity'

export const revalidate = 60

const CATEGORY_LIST = ['Bespoke', 'Corsets', 'Cocktail Dresses', 'Cameroonian Traditional']

const DESCS: Record<string, string> = {
  'Bespoke': 'Custom pieces crafted around your measurements, vision and identity.',
  'Corsets': 'Structured silhouettes designed to command every room you enter.',
  'Cocktail Dresses': 'From intimate gatherings to grand entrances — effortless elegance.',
  'Cameroonian Traditional': 'Heritage textiles reimagined through a modern, intentional lens.',
}

export default async function CollectionsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let products: any[] = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let settings: any = null

  try {
    ;[products, settings] = await Promise.all([
      client.fetch(allProductsQuery),
      client.fetch(siteSettingsQuery),
    ])
  } catch {
    // Sanity not yet configured
  }

  const waNumber = (settings?.whatsappNumber || '237682710405').replace(/\D/g, '')

  // Group products by collection
  const grouped: Record<string, typeof products> = {}
  CATEGORY_LIST.forEach(c => { grouped[c] = [] })
  products.forEach(p => {
    const cat = p.collection?.title || 'Other'
    if (grouped[cat]) grouped[cat].push(p)
  })

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Header */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', background: 'linear-gradient(170deg, #0d0b10, #130f18)', borderBottom: '1px solid #2a2133', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, rgba(107,63,160,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label">The House of Moirai</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #FAFAFA 0%, #E0AAFF 50%, #9B5DE5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Collections</h1>
          <div className="divider" style={{ marginBottom: '2rem' }} />
          {/* Category jump links */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {CATEGORY_LIST.map(cat => (
              <a key={cat} href={`#${cat.toLowerCase().replace(/ /g, '-')}`} style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.5rem 1.25rem', border: '1px solid #2a2133', color: '#7A6B8A', transition: 'all 0.25s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#9B5DE5'; el.style.color = '#C77DFF' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#2a2133'; el.style.color = '#7A6B8A' }}
              >{cat}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections per category */}
      {CATEGORY_LIST.map((cat, ci) => {
        const catProducts = grouped[cat] || []
        return (
          <section key={cat} id={cat.toLowerCase().replace(/ /g, '-')} className="section" style={{ background: ci % 2 === 0 ? '#050407' : '#0d0b10', borderBottom: '1px solid #2a2133' }}>
            <div className="container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <p className="section-label">0{ci + 1}</p>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '0.5rem' }}>{cat}</h2>
                  <p style={{ color: '#7A6B8A', fontSize: '13px', maxWidth: 500 }}>{DESCS[cat]}</p>
                </div>
                {cat === 'Bespoke' && (
                  <Link href="/bespoke" className="btn-ghost">Learn About Bespoke</Link>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                {catProducts.length === 0
                  ? [1, 2, 3].map(n => (
                    <div key={n} style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #130f18, #1e1826)', border: '1px solid #2a2133', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '2rem', opacity: 0.07 }}>✦</span>
                      <p style={{ fontSize: '8px', letterSpacing: '0.25em', color: '#2a2133', textTransform: 'uppercase' }}>Coming Soon</p>
                      <p style={{ fontSize: '8px', letterSpacing: '0.15em', color: '#2a2133', textTransform: 'uppercase' }}>Add via Admin</p>
                    </div>
                  ))
                  : catProducts.map(p => {
                    const msg = encodeURIComponent(p.whatsappMessage || `Hi! I'm interested in ${p.name} from Moirai.`)
                    return (
                      <div key={p._id} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', background: '#1e1826', border: '1px solid #2a2133' }}>
                        {p.image
                          ? <img src={urlFor(p.image).width(480).url()} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }} />
                          : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1e1826, #2D1B69)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '2rem', opacity: 0.1 }}>✦</span></div>
                        }
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,4,7,0.92) 0%, transparent 50%)', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '0.25rem', color: '#F0EBF8' }}>{p.name}</p>
                          {p.price && <p style={{ fontSize: '11px', color: '#C77DFF', marginBottom: '0.75rem' }}>{p.price}</p>}
                          {p.available !== false && (
                            <a href={`https://wa.me/${waNumber}?text=${msg}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.4rem 0.9rem', border: '1px solid #9B5DE5', color: '#C77DFF', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', width: 'fit-content', transition: 'all 0.25s' }}
                              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = '#9B5DE5'; el.style.color = 'white' }}
                              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'transparent'; el.style.color = '#C77DFF' }}
                            >Enquire</a>
                          )}
                          {p.available === false && (
                            <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: '#7A6B8A', textTransform: 'uppercase' }}>Sold Out</span>
                          )}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
        )
      })}

      {/* MoMo note + Shop link */}
      <div style={{ padding: '2.5rem 2rem', textAlign: 'center', background: '#0d0b10', borderTop: '1px solid #2a2133' }}>
        <p style={{ fontSize: '12px', color: '#7A6B8A', lineHeight: 2, marginBottom: '1.25rem' }}>
          Payment via <span style={{ color: '#C77DFF' }}>Mobile Money (MoMo)</span>. Enquire via WhatsApp to place your order.
        </p>
        <Link href="/shop" className="btn-ghost" style={{ fontSize: '10px' }}>Browse the Full Shop →</Link>
      </div>
    </div>
  )
}
