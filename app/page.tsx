'use client'
import Link from 'next/link'
import Navbar from './components/Navbar'

const products = [
  { icon: '🔁', bg: '#fff8f0', creator: 'MK', handle: '@maxkoch_ai', title: 'ChatGPT Automation Stack', price: '€49', rating: '4.9', reviews: '312', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#1D9E75' },
  { icon: '👗', bg: '#fff0f5', creator: 'JL', handle: '@julialooks', title: 'AI Fashion Prompt Bible', price: '€29', rating: '4.7', reviews: '89', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', avatarBg: '#D85A30' },
  { icon: '🧠', bg: '#f5f0ff', creator: 'NS', handle: '@niklas.studio', title: 'Build Your Own AI Agent', price: '€79', rating: '5.0', reviews: '41', badge: 'Top', badgeBg: '#f5f0ff', badgeColor: '#5e35b1', avatarBg: '#7F77DD' },
  { icon: '📊', bg: '#f0fdf8', creator: 'LP', handle: '@lenaprompts', title: 'Notion + AI Business OS', price: 'Free', rating: '4.8', reviews: '204', badge: 'Free', badgeBg: '#e8f5e9', badgeColor: '#2e7d32', avatarBg: '#639922' },
  { icon: '🎬', bg: '#fef0f0', creator: 'TS', handle: '@tomstudio', title: 'Viral Shorts Script Generator', price: '€19', rating: '4.6', reviews: '57', avatarBg: '#D4537E' },
  { icon: '💼', bg: '#eff6ff', creator: 'AK', handle: '@alexki', title: 'Cold Outreach AI Playbook', price: '€39', rating: '4.8', reviews: '143', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#378ADD' },
  { icon: '🛠', bg: '#f5f5f7', creator: 'FR', handle: '@florianrai', title: 'Make.com Starter Bundle', price: '€35', rating: '4.5', reviews: '28', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', avatarBg: '#888780' },
  { icon: '✍️', bg: '#fffbf0', creator: 'KM', handle: '@ki_marie', title: 'GPT Copywriting Masterclass', price: '€59', rating: '4.9', reviews: '76', avatarBg: '#BA7517' },
]

export default function Home() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh', WebkitFontSmoothing: 'antialiased' as const }}>
      <Navbar />

      {/* HERO */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '96px 40px 80px', textAlign: 'center' as const }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: '11px', fontWeight: 500, letterSpacing: '0.4px', color: '#0a5c42', background: '#eaf7f2', padding: '5px 14px', borderRadius: '980px', marginBottom: '28px' }}>
          ✦ The AI knowledge marketplace
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: 600, letterSpacing: '-2.5px', lineHeight: 1.05, color: '#1d1d1f', marginBottom: '20px', margin: '0 0 20px' }}>
          Learn AI from the<br/>people who build with it.
        </h1>
        <p style={{ fontSize: '17px', color: '#6e6e73', fontWeight: 300, lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 40px' }}>
          Workflows, templates, courses and tools — created by top AI creators, sold in one place.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link href="/explore" style={{ fontSize: '15px', fontWeight: 500, background: '#1d1d1f', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '980px', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Explore marketplace</Link>
          <Link href="/studio" style={{ fontSize: '15px', background: 'none', border: '0.5px solid rgba(0,0,0,0.13)', color: '#1d1d1f', padding: '14px 28px', borderRadius: '980px', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Sell your knowledge</Link>
        </div>
      </div>

      {/* STATS */}
      <div style={{ background: '#fff', borderTop: '0.5px solid rgba(0,0,0,0.08)', borderBottom: '0.5px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'center' }}>
        {[{ num: '2,400+', label: 'AI products' }, { num: '380', label: 'Verified creators' }, { num: '€1.2M+', label: 'Creator earnings' }, { num: '48k', label: 'Active learners' }].map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            {i > 0 && <div style={{ width: '0.5px', height: '40px', background: 'rgba(0,0,0,0.08)' }}/>}
            <div style={{ padding: '24px 48px', textAlign: 'center' as const }}>
              <div style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.8px' }}>{stat.num}</div>
              <div style={{ fontSize: '12px', color: '#6e6e73', marginTop: '3px' }}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '28px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.6px', margin: 0 }}>Trending right now</h2>
          <Link href="/explore" style={{ fontSize: '13px', color: '#1d9e75', fontWeight: 500, textDecoration: 'none' }}>See all →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
          {products.map((p, i) => (
            <Link key={i} href="/product" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: '120px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
                  <span style={{ fontSize: '32px' }}>{p.icon}</span>
                  {p.badge && <div style={{ position: 'absolute' as const, top: '10px', right: '10px', fontSize: '10px', fontWeight: 500, padding: '3px 9px', borderRadius: '980px', background: p.badgeBg, color: p.badgeColor }}>{p.badge}</div>}
                </div>
                <div style={{ padding: '13px 14px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <div style={{ width: '19px', height: '19px', borderRadius: '50%', background: p.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 600, color: '#fff' }}>{p.creator}</div>
                    <span style={{ fontSize: '11px', color: '#6e6e73' }}>{p.handle}</span>
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

      {/* CTA */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 64px', padding: '0 40px' }}>
        <div style={{ background: '#1d1d1f', borderRadius: '24px', padding: '52px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#fff', marginBottom: '8px' }}>Monetize your AI knowledge.</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>Apply as a creator — free to list your first product.</div>
          </div>
          <Link href="/studio" style={{ fontSize: '14px', fontWeight: 500, background: '#1d9e75', color: '#fff', border: 'none', padding: '13px 28px', borderRadius: '980px', cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap' as const }}>Apply as creator →</Link>
        </div>
      </div>
    </main>
  )
}
