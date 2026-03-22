'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const allProducts = [
  { icon: '🔁', bg: '#fff8f0', creator: 'MK', handle: '@maxkoch_ai', title: 'ChatGPT Automation Stack', price: '€49', rating: '4.9', reviews: '312', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#1D9E75', category: 'Automation' },
  { icon: '👗', bg: '#fff0f5', creator: 'JL', handle: '@julialooks', title: 'AI Fashion Prompt Bible', price: '€29', rating: '4.7', reviews: '89', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', avatarBg: '#D85A30', category: 'Prompts' },
  { icon: '🧠', bg: '#f5f0ff', creator: 'NS', handle: '@niklas.studio', title: 'Build Your Own AI Agent', price: '€79', rating: '5.0', reviews: '41', badge: 'Top', badgeBg: '#f5f0ff', badgeColor: '#5e35b1', avatarBg: '#7F77DD', category: 'Courses' },
  { icon: '📊', bg: '#f0fdf8', creator: 'LP', handle: '@lenaprompts', title: 'Notion + AI Business OS', price: 'Free', rating: '4.8', reviews: '204', badge: 'Free', badgeBg: '#e8f5e9', badgeColor: '#2e7d32', avatarBg: '#639922', category: 'Templates' },
  { icon: '🎬', bg: '#fef0f0', creator: 'TS', handle: '@tomstudio', title: 'Viral Shorts Script Generator', price: '€19', rating: '4.6', reviews: '57', avatarBg: '#D4537E', category: 'Prompts' },
  { icon: '💼', bg: '#eff6ff', creator: 'AK', handle: '@alexki', title: 'Cold Outreach AI Playbook', price: '€39', rating: '4.8', reviews: '143', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#378ADD', category: 'Courses' },
  { icon: '🛠', bg: '#f5f5f7', creator: 'FR', handle: '@florianrai', title: 'Make.com Starter Bundle', price: '€35', rating: '4.5', reviews: '28', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', avatarBg: '#888780', category: 'Automation' },
  { icon: '✍️', bg: '#fffbf0', creator: 'KM', handle: '@ki_marie', title: 'GPT Copywriting Masterclass', price: '€59', rating: '4.9', reviews: '76', avatarBg: '#BA7517', category: 'Courses' },
  { icon: '🤖', bg: '#f0f8ff', creator: 'DW', handle: '@datawiz', title: 'AI Data Pipeline Toolkit', price: '€89', rating: '4.8', reviews: '62', badge: 'Top', badgeBg: '#f5f0ff', badgeColor: '#5e35b1', avatarBg: '#2E86AB', category: 'Automation' },
  { icon: '📱', bg: '#fef5ff', creator: 'SM', handle: '@socialmax', title: 'AI Social Media Calendar', price: '€25', rating: '4.6', reviews: '118', avatarBg: '#9B59B6', category: 'Templates' },
  { icon: '🎨', bg: '#fff5f0', creator: 'CA', handle: '@creative_ai', title: 'Midjourney Style Guide Pro', price: '€45', rating: '4.9', reviews: '231', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#E67E22', category: 'Prompts' },
  { icon: '📈', bg: '#f0fff4', creator: 'GR', handle: '@growthlab', title: 'AI SEO Masterplan', price: 'Free', rating: '4.7', reviews: '89', badge: 'Free', badgeBg: '#e8f5e9', badgeColor: '#2e7d32', avatarBg: '#27AE60', category: 'Courses' },
]

const categories = ['All', 'Automation', 'Prompts', 'Courses', 'Templates']
const priceRanges = ['All prices', 'Free', 'Under €30', '€30–€60', 'Over €60']
const ratings = ['Any rating', '4.5+', '4.7+', '4.9+']

export default function Explore() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [priceRange, setPriceRange] = useState('All prices')
  const [ratingFilter, setRatingFilter] = useState('Any rating')

  const filtered = allProducts.filter(p => {
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.handle.toLowerCase().includes(search.toLowerCase())) return false
    if (category !== 'All' && p.category !== category) return false
    if (priceRange === 'Free' && p.price !== 'Free') return false
    if (priceRange === 'Under €30') {
      const num = parseInt(p.price.replace('€', ''))
      if (p.price === 'Free' || isNaN(num) || num >= 30) return false
    }
    if (priceRange === '€30–€60') {
      const num = parseInt(p.price.replace('€', ''))
      if (isNaN(num) || num < 30 || num > 60) return false
    }
    if (priceRange === 'Over €60') {
      const num = parseInt(p.price.replace('€', ''))
      if (isNaN(num) || num <= 60) return false
    }
    if (ratingFilter !== 'Any rating') {
      const min = parseFloat(ratingFilter.replace('+', ''))
      if (parseFloat(p.rating) < min) return false
    }
    return true
  })

  const labelStyle = { fontSize: '11px', fontWeight: 500 as const, letterSpacing: '0.3px', color: '#6e6e73', textTransform: 'uppercase' as const, marginBottom: '10px' }
  const optionStyle = (active: boolean) => ({
    fontSize: '13px', padding: '7px 14px', borderRadius: '10px', cursor: 'pointer' as const, border: 'none',
    background: active ? '#1d1d1f' : 'transparent', color: active ? '#fff' : '#1d1d1f', fontWeight: active ? 500 : 400 as const,
    textAlign: 'left' as const, width: '100%', display: 'block',
  })

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh' }}>
      <Navbar />

      {/* HEADER */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 40px 0' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 600, letterSpacing: '-1.5px', color: '#1d1d1f', margin: '0 0 8px' }}>Explore</h1>
        <p style={{ fontSize: '15px', color: '#6e6e73', fontWeight: 300, margin: '0 0 32px' }}>Discover AI products from verified creators.</p>

        {/* SEARCH */}
        <div style={{ position: 'relative' as const, marginBottom: '32px' }}>
          <span style={{ position: 'absolute' as const, left: '18px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', color: '#6e6e73' }}>⌕</span>
          <input
            type="text"
            placeholder="Search products, creators, categories..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', padding: '14px 18px 14px 44px', fontSize: '15px', border: '0.5px solid rgba(0,0,0,0.1)', borderRadius: '14px', background: '#fff', outline: 'none', boxSizing: 'border-box' as const }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px 64px', display: 'flex', gap: '32px' }}>

        {/* SIDEBAR */}
        <div style={{ width: '200px', flexShrink: 0 }}>
          <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '20px' }}>
            <div style={labelStyle}>Category</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2px', marginBottom: '24px' }}>
              {categories.map(c => (
                <button key={c} onClick={() => setCategory(c)} style={optionStyle(category === c)}>{c}</button>
              ))}
            </div>

            <div style={labelStyle}>Price</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2px', marginBottom: '24px' }}>
              {priceRanges.map(r => (
                <button key={r} onClick={() => setPriceRange(r)} style={optionStyle(priceRange === r)}>{r}</button>
              ))}
            </div>

            <div style={labelStyle}>Rating</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2px' }}>
              {ratings.map(r => (
                <button key={r} onClick={() => setRatingFilter(r)} style={optionStyle(ratingFilter === r)}>{r}</button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '13px', color: '#6e6e73', marginBottom: '16px' }}>{filtered.length} product{filtered.length !== 1 ? 's' : ''}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
            {filtered.map((p, i) => (
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
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center' as const, padding: '64px 0', color: '#6e6e73' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🔍</div>
              <div style={{ fontSize: '15px', fontWeight: 500, color: '#1d1d1f', marginBottom: '4px' }}>No products found</div>
              <div style={{ fontSize: '13px' }}>Try adjusting your filters or search terms.</div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
