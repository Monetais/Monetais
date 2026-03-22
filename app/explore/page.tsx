'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const allProducts = [
  { icon: '🎯', bg: '#fff8f0', creator: 'MK', handle: '@maxkoch_ai', title: 'LeadScore AI', desc: 'Autonomer Agent für Lead-Qualifizierung mit CRM-Anbindung und personalisierter Erstansprache.', price: '€49/mo', priceNum: 49, priceModel: 'Abo', rating: '4.9', reviews: '312', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#1D9E75', type: 'AI Agent', category: 'Sales & Outreach', integrations: ['HubSpot', 'Slack'], aiModel: 'OpenAI' },
  { icon: '♻️', bg: '#f0fdf8', creator: 'SB', handle: '@socialbee', title: 'RepurposeBot', desc: 'Blog-Post → 5 LinkedIn-Posts, 10 Tweets, Newsletter, Instagram-Captions automatisch.', price: '€39', priceNum: 39, priceModel: 'Einmalig', rating: '4.8', reviews: '204', badge: 'Top', badgeBg: '#f5f0ff', badgeColor: '#5e35b1', avatarBg: '#27AE60', type: 'Automation', category: 'Marketing & Content', integrations: ['Make.com'], aiModel: 'Anthropic' },
  { icon: '📋', bg: '#f5f0ff', creator: 'HR', handle: '@hireiq', title: 'HireIQ Screener', desc: 'Upload 50–500 CVs + Job Description → Ranking, Zusammenfassung, Interview-Fragen.', price: '€79/mo', priceNum: 79, priceModel: 'Abo', rating: '5.0', reviews: '41', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', avatarBg: '#7F77DD', type: 'AI Agent', category: 'Recruiting & HR', integrations: ['Notion'], aiModel: 'Anthropic' },
  { icon: '🎨', bg: '#fff0f5', creator: 'AC', handle: '@adcraft', title: 'AdCraft AI', desc: 'Produkt-URL → 10 Ad-Varianten für Meta, Google, TikTok. A/B-Test-ready.', price: '€0.15/run', priceNum: 0.15, priceModel: 'Usage-based', rating: '4.7', reviews: '89', avatarBg: '#D85A30', type: 'API Tool', category: 'E-Commerce', integrations: ['Shopify'], aiModel: 'OpenAI' },
  { icon: '🧠', bg: '#eff6ff', creator: 'MM', handle: '@meetingmind', title: 'MeetingMind', desc: 'Meeting-Transkripte → Action Items, Entscheidungen, Follow-Ups via Slack/Email.', price: '€19/mo', priceNum: 19, priceModel: 'Abo', rating: '4.8', reviews: '143', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#378ADD', type: 'AI Agent', category: 'Operations & Productivity', integrations: ['Slack', 'Google Sheets'], aiModel: 'Anthropic' },
  { icon: '💬', bg: '#fef0f0', creator: 'SP', handle: '@supportpilot', title: 'SupportPilot', desc: 'Trainierbar auf deine Knowledge Base. Beantwortet Kundenanfragen, eskaliert automatisch.', price: '€99/mo', priceNum: 99, priceModel: 'Abo', rating: '4.9', reviews: '231', badge: 'Top', badgeBg: '#f5f0ff', badgeColor: '#5e35b1', avatarBg: '#D4537E', type: 'AI Agent', category: 'E-Commerce', integrations: ['Slack', 'Shopify'], aiModel: 'Anthropic' },
  { icon: '🔗', bg: '#f5f5f7', creator: 'CG', handle: '@clustergenius', title: 'ClusterGenius', desc: 'Hauptkeyword → Pillar Page, 15 Cluster-Artikel, Verlinkungsstruktur, Briefings.', price: '€29', priceNum: 29, priceModel: 'Einmalig', rating: '4.6', reviews: '57', avatarBg: '#888780', type: 'Prompt Pack', category: 'Marketing & Content', integrations: [], aiModel: 'OpenAI' },
  { icon: '🧾', bg: '#fffbf0', creator: 'IP', handle: '@invoiceparser', title: 'InvoiceParser AI', desc: 'PDF/Bild-Rechnung → strukturierte Daten. Export als JSON, CSV oder Buchhaltungs-Import.', price: '€0.08/run', priceNum: 0.08, priceModel: 'Usage-based', rating: '4.8', reviews: '76', avatarBg: '#BA7517', type: 'API Tool', category: 'Operations & Productivity', integrations: ['Google Sheets'], aiModel: 'Anthropic' },
  { icon: '🎙️', bg: '#f0f8ff', creator: 'VF', handle: '@voiceforge', title: 'VoiceForge', desc: 'Beispieltexte hochladen → Brand Voice analysiert → Content in exakt deinem Stil generieren.', price: '€59+€19/mo', priceNum: 59, priceModel: 'Hybrid', rating: '4.9', reviews: '128', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#2E86AB', type: 'AI Agent', category: 'Marketing & Content', integrations: ['Notion'], aiModel: 'Anthropic' },
  { icon: '🔍', bg: '#fef5ff', creator: 'RW', handle: '@rivalwatch', title: 'RivalWatch AI', desc: 'Wettbewerber-URLs → Weekly Briefing: Pricing, Features, Hiring, Content, Strategie.', price: '€39/mo', priceNum: 39, priceModel: 'Abo', rating: '4.7', reviews: '62', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', avatarBg: '#9B59B6', type: 'AI Agent', category: 'Data & Analytics', integrations: ['Slack', 'Notion'], aiModel: 'OpenAI' },
  { icon: '📝', bg: '#fff5f0', creator: 'PC', handle: '@proposalcraft', title: 'ProposalCraft', desc: 'Projekt-Briefing → fertige Proposal mit Scope, Timeline, Pricing, Team, Case Studies.', price: '€49', priceNum: 49, priceModel: 'Einmalig', rating: '4.8', reviews: '87', avatarBg: '#E67E22', type: 'Template', category: 'Sales & Outreach', integrations: ['Notion'], aiModel: 'Anthropic' },
  { icon: '🧹', bg: '#f0fff4', creator: 'CS', handle: '@cleansheet', title: 'CleanSheet AI', desc: 'CSV/Excel → Duplikate, Formatfehler, fehlende Werte automatisch bereinigt + Protokoll.', price: '€0.10/1k', priceNum: 0.10, priceModel: 'Usage-based', rating: '4.7', reviews: '45', avatarBg: '#27AE60', type: 'API Tool', category: 'Data & Analytics', integrations: ['Google Sheets', 'Airtable'], aiModel: 'Anthropic' },
]

const categories = ['All', 'Marketing & Content', 'Sales & Outreach', 'Recruiting & HR', 'E-Commerce', 'Operations & Productivity', 'Data & Analytics', 'Development & No-Code', 'Education & Coaching']
const productTypes = ['All types', 'AI Agent', 'Prompt Pack', 'Automation', 'API Tool', 'Template', 'Knowledge Base']
const priceModels = ['All prices', 'Kostenlos', 'Einmalig', 'Abo', 'Usage-based', 'Hybrid']
const integrationsList = ['Slack', 'Notion', 'Make.com', 'HubSpot', 'Google Sheets', 'Shopify', 'Airtable', 'Zapier', 'n8n']
const aiModels = ['All models', 'OpenAI', 'Anthropic', 'Open Source', 'Hosted (kein Key)']
const ratings = ['Any rating', '4.0+', '4.5+', '4.8+']
const sortOptions = ['Trending', 'Bestseller', 'Newest', 'Highest Rated']

export default function Explore() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [type, setType] = useState('All types')
  const [priceModel, setPriceModel] = useState('All prices')
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([])
  const [aiModel, setAiModel] = useState('All models')
  const [ratingFilter, setRatingFilter] = useState('Any rating')
  const [sort, setSort] = useState('Trending')

  const toggleIntegration = (integ: string) => {
    setSelectedIntegrations(prev => prev.includes(integ) ? prev.filter(i => i !== integ) : [...prev, integ])
  }

  const filtered = allProducts.filter(p => {
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.desc.toLowerCase().includes(search.toLowerCase()) && !p.handle.toLowerCase().includes(search.toLowerCase())) return false
    if (category !== 'All' && p.category !== category) return false
    if (type !== 'All types' && p.type !== type) return false
    if (priceModel !== 'All prices' && p.priceModel !== priceModel) return false
    if (selectedIntegrations.length > 0 && !selectedIntegrations.some(i => p.integrations.includes(i))) return false
    if (aiModel !== 'All models' && p.aiModel !== aiModel) return false
    if (ratingFilter !== 'Any rating') {
      const min = parseFloat(ratingFilter.replace('+', ''))
      if (parseFloat(p.rating) < min) return false
    }
    return true
  }).sort((a, b) => {
    if (sort === 'Highest Rated') return parseFloat(b.rating) - parseFloat(a.rating)
    if (sort === 'Bestseller') return parseInt(b.reviews) - parseInt(a.reviews)
    return 0
  })

  const labelStyle = { fontSize: '11px', fontWeight: 500 as const, letterSpacing: '0.3px', color: '#6e6e73', textTransform: 'uppercase' as const, marginBottom: '10px' }
  const optionBtn = (active: boolean) => ({
    fontSize: '12px', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer' as const, border: 'none',
    background: active ? '#1d1d1f' : 'transparent', color: active ? '#fff' : '#1d1d1f', fontWeight: active ? 500 : 400 as const,
    textAlign: 'left' as const, width: '100%', display: 'block',
  })
  const chipStyle = (active: boolean) => ({
    fontSize: '11px', padding: '5px 10px', borderRadius: '980px', cursor: 'pointer' as const, border: 'none',
    background: active ? '#1d1d1f' : '#f5f5f7', color: active ? '#fff' : '#6e6e73', fontWeight: 500 as const,
  })

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh' }}>
      <Navbar />

      {/* HEADER */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 40px 0' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 600, letterSpacing: '-1.5px', color: '#1d1d1f', margin: '0 0 8px' }}>Explore</h1>
        <p style={{ fontSize: '15px', color: '#6e6e73', fontWeight: 300, margin: '0 0 24px' }}>Entdecke AI-Produkte von verifizierten Creatorn.</p>

        {/* SEARCH */}
        <div style={{ position: 'relative' as const, marginBottom: '16px' }}>
          <span style={{ position: 'absolute' as const, left: '18px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', color: '#6e6e73' }}>⌕</span>
          <input type="text" placeholder="Suche nach Produkten, Creatorn, Use Cases..." value={search} onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', padding: '14px 18px 14px 44px', fontSize: '15px', border: '0.5px solid rgba(0,0,0,0.1)', borderRadius: '14px', background: '#fff', outline: 'none', boxSizing: 'border-box' as const }} />
        </div>

        {/* CATEGORY TABS */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto' as const, paddingBottom: '4px', marginBottom: '24px' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setCategory(c)} style={{
              fontSize: '12px', fontWeight: category === c ? 500 : 400, padding: '7px 14px', borderRadius: '980px', cursor: 'pointer', border: 'none', whiteSpace: 'nowrap' as const,
              background: category === c ? '#1d1d1f' : '#fff', color: category === c ? '#fff' : '#6e6e73',
            }}>{c}</button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px 64px', display: 'flex', gap: '24px' }}>

        {/* SIDEBAR */}
        <div style={{ width: '220px', flexShrink: 0 }}>
          <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '20px' }}>
            {/* Product Type */}
            <div style={labelStyle}>Produkttyp</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2px', marginBottom: '20px' }}>
              {productTypes.map(t => (
                <button key={t} onClick={() => setType(t)} style={optionBtn(type === t)}>{t}</button>
              ))}
            </div>

            {/* Price Model */}
            <div style={labelStyle}>Preismodell</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2px', marginBottom: '20px' }}>
              {priceModels.map(m => (
                <button key={m} onClick={() => setPriceModel(m)} style={optionBtn(priceModel === m)}>{m}</button>
              ))}
            </div>

            {/* AI Model */}
            <div style={labelStyle}>AI-Modell</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2px', marginBottom: '20px' }}>
              {aiModels.map(m => (
                <button key={m} onClick={() => setAiModel(m)} style={optionBtn(aiModel === m)}>{m}</button>
              ))}
            </div>

            {/* Integrations */}
            <div style={labelStyle}>Integrationen</div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '4px', marginBottom: '20px' }}>
              {integrationsList.map(integ => (
                <button key={integ} onClick={() => toggleIntegration(integ)} style={chipStyle(selectedIntegrations.includes(integ))}>{integ}</button>
              ))}
            </div>

            {/* Rating */}
            <div style={labelStyle}>Bewertung</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2px' }}>
              {ratings.map(r => (
                <button key={r} onClick={() => setRatingFilter(r)} style={optionBtn(ratingFilter === r)}>{r}</button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div style={{ flex: 1 }}>
          {/* SORT + COUNT */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', color: '#6e6e73' }}>{filtered.length} Produkt{filtered.length !== 1 ? 'e' : ''}</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {sortOptions.map(s => (
                <button key={s} onClick={() => setSort(s)} style={{
                  fontSize: '11px', fontWeight: sort === s ? 500 : 400, padding: '5px 10px', borderRadius: '8px', cursor: 'pointer', border: 'none',
                  background: sort === s ? '#1d1d1f' : 'transparent', color: sort === s ? '#fff' : '#6e6e73',
                }}>{s}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
            {filtered.map((p, i) => (
              <Link key={i} href="/product" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}>
                  <div style={{ height: '110px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
                    <span style={{ fontSize: '30px' }}>{p.icon}</span>
                    {p.badge && <div style={{ position: 'absolute' as const, top: '10px', right: '10px', fontSize: '10px', fontWeight: 500, padding: '3px 9px', borderRadius: '980px', background: p.badgeBg, color: p.badgeColor }}>{p.badge}</div>}
                    <div style={{ position: 'absolute' as const, top: '10px', left: '10px', fontSize: '10px', fontWeight: 500, padding: '3px 9px', borderRadius: '980px', background: 'rgba(255,255,255,0.9)', color: '#1d1d1f' }}>{p.type}</div>
                  </div>
                  <div style={{ padding: '12px 14px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: p.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 600, color: '#fff' }}>{p.creator}</div>
                      <span style={{ fontSize: '11px', color: '#6e6e73' }}>{p.handle}</span>
                      <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#1d9e75', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '7px' }}>✓</div>
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '-0.2px', lineHeight: 1.35, marginBottom: '4px', color: '#1d1d1f' }}>{p.title}</div>
                    <div style={{ fontSize: '11px', color: '#6e6e73', lineHeight: 1.4, marginBottom: '10px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>{p.desc}</div>
                    {p.integrations.length > 0 && (
                      <div style={{ display: 'flex', gap: '3px', marginBottom: '8px', flexWrap: 'wrap' as const }}>
                        {p.integrations.slice(0, 3).map(integ => (
                          <span key={integ} style={{ fontSize: '9px', padding: '2px 6px', borderRadius: '4px', background: '#f5f5f7', color: '#6e6e73' }}>{integ}</span>
                        ))}
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#1d1d1f' }}>{p.price}</span>
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
              <div style={{ fontSize: '15px', fontWeight: 500, color: '#1d1d1f', marginBottom: '4px' }}>Keine Produkte gefunden</div>
              <div style={{ fontSize: '13px' }}>Passe deine Filter oder Suchbegriffe an.</div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
