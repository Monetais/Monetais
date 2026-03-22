'use client'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const creatorProducts = [
  { icon: '🎯', bg: '#fff8f0', title: 'LeadScore AI', price: '€49/mo', rating: '4.9', reviews: '312', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', type: 'AI Agent', sales: '1,247' },
  { icon: '📝', bg: '#fff5f0', title: 'ProposalCraft', price: '€49', rating: '4.8', reviews: '87', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', type: 'Template', sales: '342' },
  { icon: '🛠', bg: '#f5f5f7', title: 'Make.com Advanced Workflows', price: '€69', rating: '4.8', reviews: '87', type: 'Automation', sales: '198' },
  { icon: '🤖', bg: '#f0f8ff', title: 'Custom GPT Builder Guide', price: '€29', rating: '4.9', reviews: '128', badge: 'Top', badgeBg: '#f5f0ff', badgeColor: '#5e35b1', type: 'Prompt Pack', sales: '521' },
  { icon: '📧', bg: '#fffbf0', title: 'AI Email Automation Kit', price: 'Free', rating: '4.6', reviews: '203', badge: 'Free', badgeBg: '#e8f5e9', badgeColor: '#2e7d32', type: 'Automation', sales: '2,103' },
]

export default function Creator() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh' }}>
      <Navbar />

      {/* PROFILE HEADER */}
      <div style={{ background: '#fff', borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '28px' }}>
            <div style={{ width: '96px', height: '96px', borderRadius: '50%', background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 600, color: '#fff', flexShrink: 0 }}>MK</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f', margin: 0 }}>Max Koch</h1>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#1d9e75', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>✓</div>
                <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '980px', background: '#f5f0ff', color: '#5e35b1' }}>Pro Creator</span>
              </div>
              <div style={{ fontSize: '14px', color: '#6e6e73', marginBottom: '12px' }}>@maxkoch_ai</div>
              <p style={{ fontSize: '15px', color: '#6e6e73', lineHeight: 1.6, fontWeight: 300, margin: '0 0 20px', maxWidth: '520px' }}>
                AI automation expert und Make.com Ambassador. Hilft Unternehmen, ihre Workflows mit ChatGPT und No-Code Tools zu automatisieren. Featured in AI Weekly, ProductHunt.
              </p>
              <div style={{ display: 'flex', gap: '32px' }}>
                {[
                  { num: '5', label: 'Products' },
                  { num: '4,411', label: 'Total sales' },
                  { num: '4.9', label: 'Avg. rating' },
                  { num: '€62k', label: 'Revenue' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.5px', color: '#1d1d1f' }}>{stat.num}</div>
                    <div style={{ fontSize: '12px', color: '#6e6e73', marginTop: '2px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <button style={{ fontSize: '14px', fontWeight: 500, background: '#1d1d1f', color: '#fff', border: 'none', padding: '11px 28px', borderRadius: '980px', cursor: 'pointer', flexShrink: 0 }}>Follow</button>
          </div>
        </div>
      </div>

      {/* BADGE INFO + SOCIAL */}
      <div style={{ background: '#fff', borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', height: '48px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[
              { label: 'Twitter', value: '@maxkoch_ai' },
              { label: 'YouTube', value: '12k subscribers' },
              { label: 'Website', value: 'maxkoch.ai' },
            ].map((link, i) => (
              <span key={i} style={{ fontSize: '12px', color: '#6e6e73', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 500, color: '#1d1d1f' }}>{link.label}</span> {link.value}
              </span>
            ))}
          </div>
          {/* BADGE EXPLANATION */}
          <div style={{ display: 'flex', gap: '12px', fontSize: '11px' }}>
            <span style={{ color: '#6e6e73' }}>50+ Sales</span>
            <span style={{ color: '#6e6e73' }}>4.5+ Rating</span>
            <span style={{ color: '#6e6e73' }}>&lt;2% Refund</span>
            <span style={{ color: '#5e35b1', fontWeight: 500 }}>= Pro Badge</span>
          </div>
        </div>
      </div>

      {/* CREATOR VERIFICATION LEVELS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
          {[
            { badge: 'Verified', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', desc: 'Identität geprüft + 1 funktionierendes Produkt', icon: '✓' },
            { badge: 'Pro', badgeBg: '#f5f0ff', badgeColor: '#5e35b1', desc: '50+ Sales, 4.5+ Rating, <2% Refund Rate', icon: '★', active: true },
            { badge: 'Expert', badgeBg: '#fff2e8', badgeColor: '#a85400', desc: '500+ Sales, eingeladen/kuratiert', icon: '◆' },
          ].map((level, i) => (
            <div key={i} style={{ background: level.active ? '#fff' : '#fafafa', borderRadius: '14px', border: level.active ? '2px solid #5e35b1' : '0.5px solid rgba(0,0,0,0.08)', padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 9px', borderRadius: '980px', background: level.badgeBg, color: level.badgeColor }}>{level.icon} {level.badge}</span>
                {level.active && <span style={{ fontSize: '10px', color: '#5e35b1', fontWeight: 500 }}>Current level</span>}
              </div>
              <div style={{ fontSize: '12px', color: '#6e6e73', lineHeight: 1.5 }}>{level.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.6px', margin: 0 }}>Products</h2>
          <span style={{ fontSize: '13px', color: '#6e6e73' }}>{creatorProducts.length} products</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
          {creatorProducts.map((p, i) => (
            <Link key={i} href="/product" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: '110px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
                  <span style={{ fontSize: '30px' }}>{p.icon}</span>
                  {p.badge && <div style={{ position: 'absolute' as const, top: '10px', right: '10px', fontSize: '10px', fontWeight: 500, padding: '3px 9px', borderRadius: '980px', background: p.badgeBg, color: p.badgeColor }}>{p.badge}</div>}
                  <div style={{ position: 'absolute' as const, top: '10px', left: '10px', fontSize: '10px', fontWeight: 500, padding: '3px 9px', borderRadius: '980px', background: 'rgba(255,255,255,0.9)', color: '#1d1d1f' }}>{p.type}</div>
                </div>
                <div style={{ padding: '12px 14px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 600, color: '#fff' }}>MK</div>
                    <span style={{ fontSize: '11px', color: '#6e6e73' }}>@maxkoch_ai</span>
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#1d9e75', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '7px' }}>✓</div>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '-0.2px', lineHeight: 1.35, marginBottom: '4px', color: '#1d1d1f' }}>{p.title}</div>
                  <div style={{ fontSize: '11px', color: '#6e6e73', marginBottom: '8px' }}>{p.sales} sales</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: p.price === 'Free' ? '#1d9e75' : '#1d1d1f' }}>{p.price}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: '#6e6e73' }}>
                      <span style={{ color: '#ff9500' }}>★</span> {p.rating} ({p.reviews})
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px 64px' }}>
        <div style={{ background: '#fff', borderRadius: '20px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '32px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.3px', margin: '0 0 12px', color: '#1d1d1f' }}>About Max</h3>
          <p style={{ fontSize: '14px', color: '#6e6e73', lineHeight: 1.7, margin: '0 0 16px' }}>
            Ich habe 2023 angefangen, meine Freelance-Workflows zu automatisieren, und innerhalb von 6 Monaten über 20 Stunden pro Woche gespart.
            Heute helfe ich anderen Creatorn und Unternehmen dabei, das Gleiche zu tun — mit ChatGPT, Make.com und Custom API Integrations.
          </p>
          <p style={{ fontSize: '14px', color: '#6e6e73', lineHeight: 1.7, margin: 0 }}>
            Meine Produkte sind für Leute gebaut, die Ergebnisse wollen, keine Theorie. Jeder Workflow ist getestet, dokumentiert und funktioniert out of the box. Bei Fragen bin ich immer in der Community erreichbar.
          </p>
        </div>
      </div>
    </main>
  )
}
