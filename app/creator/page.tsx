'use client'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const creatorProducts = [
  { icon: '🔁', bg: '#fff8f0', title: 'ChatGPT Automation Stack', price: '€49', rating: '4.9', reviews: '312', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400' },
  { icon: '🛠', bg: '#f5f5f7', title: 'Make.com Advanced Workflows', price: '€69', rating: '4.8', reviews: '87', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42' },
  { icon: '📊', bg: '#f0fdf8', title: 'AI Analytics Dashboard Setup', price: '€39', rating: '4.7', reviews: '54' },
  { icon: '🤖', bg: '#f0f8ff', title: 'Custom GPT Builder Guide', price: '€29', rating: '4.9', reviews: '128', badge: 'Top', badgeBg: '#f5f0ff', badgeColor: '#5e35b1' },
  { icon: '📧', bg: '#fffbf0', title: 'AI Email Automation Kit', price: 'Free', rating: '4.6', reviews: '203', badge: 'Free', badgeBg: '#e8f5e9', badgeColor: '#2e7d32' },
]

export default function Creator() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh' }}>
      <Navbar />

      {/* PROFILE HEADER */}
      <div style={{ background: '#fff', borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '28px' }}>
            {/* AVATAR */}
            <div style={{ width: '96px', height: '96px', borderRadius: '50%', background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 600, color: '#fff', flexShrink: 0 }}>MK</div>

            {/* INFO */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f', margin: 0 }}>Max Koch</h1>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#1d9e75', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>✓</div>
              </div>
              <div style={{ fontSize: '14px', color: '#6e6e73', marginBottom: '12px' }}>@maxkoch_ai</div>
              <p style={{ fontSize: '15px', color: '#6e6e73', lineHeight: 1.6, fontWeight: 300, margin: '0 0 20px', maxWidth: '520px' }}>
                AI automation expert and Make.com ambassador. Helping businesses automate their workflows with ChatGPT and no-code tools. Featured in AI Weekly, ProductHunt.
              </p>

              {/* STATS */}
              <div style={{ display: 'flex', gap: '32px' }}>
                {[
                  { num: '5', label: 'Products' },
                  { num: '1,247', label: 'Total sales' },
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

            {/* FOLLOW BUTTON */}
            <button style={{ fontSize: '14px', fontWeight: 500, background: '#1d1d1f', color: '#fff', border: 'none', padding: '11px 28px', borderRadius: '980px', cursor: 'pointer', flexShrink: 0 }}>Follow</button>
          </div>
        </div>
      </div>

      {/* SOCIAL LINKS */}
      <div style={{ background: '#fff', borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', display: 'flex', gap: '20px', height: '48px', alignItems: 'center' }}>
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
      </div>

      {/* PRODUCTS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 40px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.6px', margin: 0 }}>Products</h2>
          <span style={{ fontSize: '13px', color: '#6e6e73' }}>{creatorProducts.length} products</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
          {creatorProducts.map((p, i) => (
            <Link key={i} href="/product" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: '120px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
                  <span style={{ fontSize: '32px' }}>{p.icon}</span>
                  {p.badge && <div style={{ position: 'absolute' as const, top: '10px', right: '10px', fontSize: '10px', fontWeight: 500, padding: '3px 9px', borderRadius: '980px', background: p.badgeBg, color: p.badgeColor }}>{p.badge}</div>}
                </div>
                <div style={{ padding: '13px 14px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <div style={{ width: '19px', height: '19px', borderRadius: '50%', background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 600, color: '#fff' }}>MK</div>
                    <span style={{ fontSize: '11px', color: '#6e6e73' }}>@maxkoch_ai</span>
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#1d9e75', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '7px' }}>✓</div>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '-0.2px', lineHeight: 1.35, marginBottom: '10px', color: '#1d1d1f' }}>{p.title}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: p.price === 'Free' ? '#1d9e75' : '#1d1d1f' }}>{p.price}</span>
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
            I started automating my freelance workflow in 2023, and within 6 months I had saved over 20 hours per week.
            Now I help other creators and businesses do the same — using ChatGPT, Make.com, and custom API integrations.
          </p>
          <p style={{ fontSize: '14px', color: '#6e6e73', lineHeight: 1.7, margin: 0 }}>
            My products are built for people who want results, not theory. Every workflow is tested, documented, and designed
            to work right out of the box. If you get stuck, I&apos;m always available in the community.
          </p>
        </div>
      </div>
    </main>
  )
}
