'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const reviews = [
  { name: 'Anna M.', initials: 'AM', color: '#D85A30', rating: 5, date: 'Mar 2026', text: 'Spart mir 8h/Woche bei der Lead-Qualifizierung. Die personalisierten Emails haben unsere Reply-Rate von 3% auf 11% gehoben.', role: 'Marketing Manager', company: 'E-Commerce, 5-10 MA', useCase: 'Lead Qualification', skillLevel: 'Beginner', since: '3 Monate', tags: ['Easy Setup', 'Great Value'] },
  { name: 'Tobias K.', initials: 'TK', color: '#378ADD', rating: 5, date: 'Feb 2026', text: 'Endlich ein Tool, das tatsächlich funktioniert. Die CRM-Integration war in 5 Minuten aufgesetzt. Output-Qualität ist konsistent hoch.', role: 'Head of Sales', company: 'SaaS, 20-50 MA', useCase: 'Sales Automation', skillLevel: 'Advanced', since: '2 Monate', tags: ['Great Support', 'Advanced'] },
  { name: 'Sarah L.', initials: 'SL', color: '#7F77DD', rating: 4, date: 'Feb 2026', text: 'Gutes Produkt. Scoring ist akkurat. Einziger Kritikpunkt: LinkedIn-Recherche funktioniert nur bei öffentlichen Profilen.', role: 'SDR', company: 'Agentur, 10-20 MA', useCase: 'Prospecting', skillLevel: 'Intermediate', since: '6 Wochen', tags: ['Good Value'] },
  { name: 'Felix R.', initials: 'FR', color: '#1D9E75', rating: 5, date: 'Jan 2026', text: 'ROI innerhalb der ersten Woche. 200 Leads qualifiziert in der Zeit, in der ich sonst 20 geschafft hätte. Max ist auch super responsive bei Support-Fragen.', role: 'Founder', company: 'B2B SaaS, 1-5 MA', useCase: 'Outbound Sales', skillLevel: 'Beginner', since: '4 Monate', tags: ['Easy Setup', 'Great Support'] },
]

const changelog = [
  { version: 'v2.3', date: 'Mar 15, 2026', changes: ['LinkedIn-Recherche verbessert (2x schneller)', 'Neues Scoring-Modell mit 12% höherer Genauigkeit', 'Bug fix: CRM-Sync bei großen Batches'] },
  { version: 'v2.2', date: 'Feb 28, 2026', changes: ['Slack-Integration hinzugefügt', 'Custom Scoring-Kriterien konfigurierbar', 'Export als CSV'] },
  { version: 'v2.1', date: 'Feb 10, 2026', changes: ['HubSpot CRM-Anbindung', 'Batch-Processing für bis zu 500 Leads', 'Mehrsprachige Email-Generierung (DE/EN)'] },
  { version: 'v2.0', date: 'Jan 20, 2026', changes: ['Komplett neues Scoring-Modell', 'API-Endpoint für Integration', 'Dashboard Redesign'] },
]

const similarProducts = [
  { icon: '📝', title: 'ProposalCraft', price: '€49', type: 'Template', rating: '4.8' },
  { icon: '🔍', title: 'RivalWatch AI', price: '€39/mo', type: 'AI Agent', rating: '4.7' },
  { icon: '🎙️', title: 'VoiceForge', price: '€59+€19/mo', type: 'AI Agent', rating: '4.9' },
]

export default function Product() {
  const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'reviews' | 'changelog'>('overview')
  const [demoMessages, setDemoMessages] = useState([
    { role: 'system', text: 'Demo: LeadScore AI — Teste den Sales Qualifier' },
  ])
  const [demoInput, setDemoInput] = useState('')
  const [demoRuns, setDemoRuns] = useState(5)
  const [runsPerMonth, setRunsPerMonth] = useState(200)

  const runDemo = () => {
    if (demoRuns <= 0 || !demoInput.trim()) return
    setDemoMessages(prev => [...prev,
      { role: 'user', text: demoInput },
      { role: 'agent', text: `Researching "${demoInput}"...\n\nCompany: Tech SaaS, 50-200 MA, Series B\nKey Contact: VP Sales seit 2024\nScore: 82/100 (High Priority)\nReasoning: Schnelles Wachstum + passende ICP\n\nDraft Email generiert ✓\n\n⚠️ Demo — full version after purchase` },
    ])
    setDemoInput('')
    setDemoRuns(prev => prev - 1)
  }

  const monthlyCost = runsPerMonth <= 200 ? 49 : 49 + (runsPerMonth - 200) * 0.20

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 40px 64px' }}>
        {/* BREADCRUMB */}
        <div style={{ fontSize: '13px', color: '#6e6e73', marginBottom: '24px', display: 'flex', gap: '6px', alignItems: 'center' }}>
          <Link href="/explore" style={{ color: '#6e6e73', textDecoration: 'none' }}>Explore</Link>
          <span>/</span>
          <Link href="/explore" style={{ color: '#6e6e73', textDecoration: 'none' }}>Sales & Outreach</Link>
          <span>/</span>
          <span style={{ color: '#1d1d1f' }}>LeadScore AI</span>
        </div>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
          {/* LEFT */}
          <div style={{ flex: 1 }}>
            {/* HERO */}
            <div style={{ background: '#fff', borderRadius: '20px', border: '0.5px solid rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '20px' }}>
              <div style={{ height: '180px', background: '#fff8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
                <span style={{ fontSize: '56px' }}>🎯</span>
                <div style={{ position: 'absolute' as const, top: '14px', left: '14px', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '980px', background: 'rgba(255,255,255,0.9)', color: '#1d1d1f' }}>AI Agent</div>
                <div style={{ position: 'absolute' as const, top: '14px', right: '14px', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '980px', background: '#fff2e8', color: '#a85400' }}>Hot</div>
              </div>
              <div style={{ padding: '24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                  <span style={{ color: '#ff9500', fontSize: '13px' }}>★★★★★</span>
                  <span style={{ fontSize: '13px', color: '#6e6e73' }}>4.9 (312 reviews)</span>
                </div>
                <h1 style={{ fontSize: '26px', fontWeight: 600, letterSpacing: '-0.8px', color: '#1d1d1f', margin: '0 0 10px' }}>LeadScore AI</h1>
                <p style={{ fontSize: '15px', color: '#6e6e73', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                  Autonomer Agent, der Leads aus deinem CRM nimmt, die Company Website analysiert, LinkedIn-Profile der Entscheider recherchiert und einen Score (0–100) mit personalisierter Erstansprache generiert.
                </p>
              </div>
            </div>

            {/* TABS */}
            <div style={{ display: 'flex', gap: '0', borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: '20px' }}>
              {(['overview', 'demo', 'reviews', 'changelog'] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  fontSize: '13px', fontWeight: activeTab === tab ? 500 : 400, color: activeTab === tab ? '#1d1d1f' : '#6e6e73',
                  background: 'none', border: 'none', padding: '10px 18px', cursor: 'pointer',
                  borderBottom: activeTab === tab ? '2px solid #1d1d1f' : '2px solid transparent', textTransform: 'capitalize' as const,
                }}>{tab === 'demo' ? 'Live Demo' : tab}</button>
              ))}
            </div>

            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
                <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px 28px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.3px', margin: '0 0 14px', color: '#1d1d1f' }}>Problem</h3>
                  <p style={{ fontSize: '14px', color: '#6e6e73', lineHeight: 1.6, margin: 0 }}>SDRs verbringen 60% ihrer Zeit mit Recherche statt Verkaufen. Manuelle Lead-Qualifizierung ist langsam, inkonsistent und skaliert nicht.</p>
                </div>
                <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px 28px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.3px', margin: '0 0 14px', color: '#1d1d1f' }}>Was ist enthalten</h3>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
                    {['Automatische Company-Recherche (Website, LinkedIn, Crunchbase)', 'Lead Scoring (0–100) mit konfigurierbaren Kriterien', 'Personalisierte Email-Generierung (DE/EN)', 'CRM-Integration (HubSpot, Pipedrive)', 'Slack-Notifications bei High-Priority Leads', 'Batch-Processing bis 500 Leads', 'API-Endpoint für Custom Integrations', 'Priority Support + Community Access'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#1d1d1f' }}>
                        <div style={{ width: '17px', height: '17px', borderRadius: '50%', background: '#eaf7f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d9e75', fontSize: '9px', flexShrink: 0 }}>✓</div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px 28px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.3px', margin: '0 0 14px', color: '#1d1d1f' }}>Beispiel Output</h3>
                  <div style={{ background: '#f5f5f7', borderRadius: '12px', padding: '16px', fontSize: '13px', color: '#1d1d1f', lineHeight: 1.7, fontFamily: 'monospace' }}>
                    <div style={{ color: '#6e6e73', marginBottom: '8px' }}>Input: Company: &quot;Personio&quot;, Ansprechpartner: &quot;VP Sales&quot;</div>
                    <div>Company Summary: HR-Tech SaaS, 1.800 MA, Series E ($200M)</div>
                    <div>Key Decision Maker: Sarah Mueller, VP Sales seit 2024</div>
                    <div style={{ fontWeight: 600, color: '#1d9e75' }}>Score: 88/100 (High Priority)</div>
                    <div>Reasoning: Series E = Budget vorhanden, schnelles Wachstum = Pain bei Skalierung</div>
                    <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px dashed rgba(0,0,0,0.1)' }}>Draft Email: &quot;Hi Sarah, Personio&apos;s Wachstum von 1.200 auf 1.800 MA in 18 Monaten ist beeindruckend...&quot;</div>
                  </div>
                </div>
                {/* SIMILAR PRODUCTS */}
                <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px 28px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.3px', margin: '0 0 14px', color: '#1d1d1f' }}>Ähnliche Produkte</h3>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {similarProducts.map((sp, i) => (
                      <Link key={i} href="/product" style={{ textDecoration: 'none', flex: 1 }}>
                        <div style={{ background: '#f5f5f7', borderRadius: '12px', padding: '16px', cursor: 'pointer' }}>
                          <div style={{ fontSize: '24px', marginBottom: '8px' }}>{sp.icon}</div>
                          <div style={{ fontSize: '13px', fontWeight: 500, color: '#1d1d1f', marginBottom: '4px' }}>{sp.title}</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                            <span style={{ color: '#1d1d1f', fontWeight: 500 }}>{sp.price}</span>
                            <span style={{ color: '#6e6e73' }}>★ {sp.rating}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* DEMO TAB */}
            {activeTab === 'demo' && (
              <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.3px', margin: '0 0 4px', color: '#1d1d1f' }}>Live Sandbox</h3>
                    <div style={{ fontSize: '12px', color: '#6e6e73' }}>Teste den Sales Qualifier mit eigenen Daten.</div>
                  </div>
                  <div style={{ fontSize: '12px', color: demoRuns <= 1 ? '#c62828' : '#6e6e73', fontWeight: 500 }}>{demoRuns}/5 runs remaining</div>
                </div>
                <div style={{ background: '#f5f5f7', borderRadius: '14px', padding: '16px', minHeight: '260px', display: 'flex', flexDirection: 'column' as const, marginBottom: '12px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column' as const, gap: '10px', marginBottom: '12px' }}>
                    {demoMessages.map((msg, i) => (
                      <div key={i} style={{
                        padding: '10px 14px', borderRadius: '12px', fontSize: '13px', lineHeight: 1.6, whiteSpace: 'pre-wrap' as const, maxWidth: '85%',
                        ...(msg.role === 'user' ? { background: '#1d1d1f', color: '#fff', alignSelf: 'flex-end' as const } :
                          msg.role === 'agent' ? { background: '#eaf7f2', color: '#1d1d1f', alignSelf: 'flex-start' as const } :
                          { background: 'transparent', color: '#6e6e73', alignSelf: 'center' as const, fontSize: '12px', textAlign: 'center' as const }),
                      }}>{msg.text}</div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input type="text" placeholder='z.B. "Personio, VP Sales" oder "Stripe, CTO"' value={demoInput} onChange={e => setDemoInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && runDemo()}
                      style={{ flex: 1, padding: '10px 14px', fontSize: '13px', border: '0.5px solid rgba(0,0,0,0.1)', borderRadius: '10px', background: '#fff', outline: 'none' }}
                      disabled={demoRuns <= 0} />
                    <button onClick={runDemo} disabled={demoRuns <= 0}
                      style={{ fontSize: '13px', fontWeight: 500, background: demoRuns <= 0 ? '#d1d1d6' : '#1d9e75', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '10px', cursor: demoRuns <= 0 ? 'default' : 'pointer' }}>Send</button>
                  </div>
                </div>
                {demoRuns <= 0 && (
                  <div style={{ textAlign: 'center' as const, padding: '12px', background: '#fef0f0', borderRadius: '10px', fontSize: '13px', color: '#c62828' }}>
                    Demo-Limit erreicht. <span style={{ fontWeight: 500 }}>Kaufe das Produkt für unbegrenzten Zugang.</span>
                  </div>
                )}
              </div>
            )}

            {/* REVIEWS TAB */}
            {activeTab === 'reviews' && (
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                {reviews.map((r, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '20px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600, color: '#fff' }}>{r.initials}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '13px', fontWeight: 500, color: '#1d1d1f' }}>{r.name} <span style={{ fontWeight: 400, color: '#6e6e73' }}>— {r.role}, {r.company}</span></div>
                        <div style={{ fontSize: '11px', color: '#6e6e73' }}>{r.date} · Nutzt seit {r.since}</div>
                      </div>
                      <div style={{ fontSize: '12px', color: '#ff9500' }}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                    </div>
                    <p style={{ fontSize: '13px', color: '#1d1d1f', lineHeight: 1.6, margin: '0 0 10px' }}>{r.text}</p>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' as const }}>
                      <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '6px', background: '#f5f5f7', color: '#6e6e73' }}>Use Case: {r.useCase}</span>
                      <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '6px', background: '#f5f5f7', color: '#6e6e73' }}>Skill: {r.skillLevel}</span>
                      {r.tags.map(tag => (
                        <span key={tag} style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '6px', background: '#eaf7f2', color: '#0a5c42' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CHANGELOG TAB */}
            {activeTab === 'changelog' && (
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                {changelog.map((entry, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '20px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#1d1d1f' }}>{entry.version}</span>
                      <span style={{ fontSize: '11px', color: '#6e6e73' }}>{entry.date}</span>
                      {i === 0 && <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '980px', background: '#eaf7f2', color: '#0a5c42' }}>Latest</span>}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
                      {entry.changes.map((change, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#1d1d1f' }}>
                          <span style={{ color: '#1d9e75', fontSize: '8px' }}>●</span> {change}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div style={{ width: '310px', flexShrink: 0, position: 'sticky' as const, top: '68px', display: 'flex', flexDirection: 'column' as const, gap: '14px' }}>
            {/* PURCHASE */}
            <div style={{ background: '#fff', borderRadius: '18px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px' }}>
              <div style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f', marginBottom: '2px' }}>€49<span style={{ fontSize: '14px', fontWeight: 400, color: '#6e6e73' }}>/Monat</span></div>
              <div style={{ fontSize: '12px', color: '#6e6e73', marginBottom: '16px' }}>200 Leads inkl., danach €0.20/Lead</div>
              <button style={{ width: '100%', fontSize: '14px', fontWeight: 500, background: '#1d9e75', color: '#fff', border: 'none', padding: '13px', borderRadius: '12px', cursor: 'pointer', marginBottom: '8px' }}>Start plan — €49/mo</button>
              <button onClick={() => setActiveTab('demo')} style={{ width: '100%', fontSize: '14px', background: 'none', border: '0.5px solid rgba(0,0,0,0.13)', color: '#1d1d1f', padding: '13px', borderRadius: '12px', cursor: 'pointer', marginBottom: '16px' }}>Try demo free</button>
              {/* COST CALCULATOR */}
              <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)', paddingTop: '14px' }}>
                <div style={{ fontSize: '12px', fontWeight: 500, color: '#1d1d1f', marginBottom: '8px' }}>Kostenrechner</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6e6e73', marginBottom: '6px' }}>
                  <span>Leads/Monat</span>
                  <span style={{ fontWeight: 500, color: '#1d1d1f' }}>{runsPerMonth}</span>
                </div>
                <input type="range" min={50} max={1000} step={50} value={runsPerMonth} onChange={e => setRunsPerMonth(Number(e.target.value))}
                  style={{ width: '100%', marginBottom: '8px', accentColor: '#1d9e75' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span style={{ color: '#6e6e73' }}>Geschätzte Kosten</span>
                  <span style={{ fontWeight: 600, color: '#1d1d1f' }}>€{monthlyCost.toFixed(0)}/mo</span>
                </div>
              </div>
              {/* DETAILS */}
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px', marginTop: '16px', paddingTop: '14px', borderTop: '0.5px solid rgba(0,0,0,0.06)' }}>
                {[
                  { label: 'Typ', value: 'AI Agent' },
                  { label: 'Hosting', value: 'Hosted + BYOK' },
                  { label: 'Letztes Update', value: 'Mar 15, 2026' },
                  { label: 'Version', value: 'v2.3' },
                  { label: 'Zugang', value: 'Sofort nach Kauf' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: '#6e6e73' }}>{item.label}</span>
                    <span style={{ color: '#1d1d1f', fontWeight: 500 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TRANSPARENCY BOX */}
            <div style={{ background: '#fff', borderRadius: '18px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.3px', color: '#6e6e73', textTransform: 'uppercase' as const, marginBottom: '14px' }}>Transparenz</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
                {[
                  { label: 'AI-Modell', value: 'GPT-4o' },
                  { label: 'Avg. Kosten/Run', value: '~€0.03' },
                  { label: 'Avg. Latenz', value: '2.4s' },
                  { label: 'Erfolgsrate', value: '97.8%' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: '#6e6e73' }}>{item.label}</span>
                    <span style={{ color: '#1d1d1f', fontWeight: 500 }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '0.5px solid rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '11px', fontWeight: 500, color: '#6e6e73', marginBottom: '6px' }}>Limitierungen</div>
                <div style={{ fontSize: '11px', color: '#6e6e73', lineHeight: 1.5 }}>
                  • Max. 500 Leads pro Batch<br/>
                  • Englisch + Deutsch<br/>
                  • LinkedIn nur öffentliche Profile
                </div>
              </div>
            </div>

            {/* PERFORMANCE SCORE */}
            <div style={{ background: '#fff', borderRadius: '18px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.3px', color: '#6e6e73', textTransform: 'uppercase' as const }}>Quality Score</div>
                <div style={{ fontSize: '20px', fontWeight: 600, color: '#1d9e75' }}>92<span style={{ fontSize: '12px', color: '#6e6e73' }}>/100</span></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
                {[
                  { label: 'Funktionalität', score: 95, color: '#1d9e75' },
                  { label: 'Nutzerbewertung', score: 96, color: '#1d9e75' },
                  { label: 'Support', score: 90, color: '#1d9e75' },
                  { label: 'Update-Frequenz', score: 88, color: '#378ADD' },
                  { label: 'Refund-Rate', score: 98, color: '#1d9e75' },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '3px' }}>
                      <span style={{ color: '#6e6e73' }}>{item.label}</span>
                      <span style={{ color: '#1d1d1f', fontWeight: 500 }}>{item.score}</span>
                    </div>
                    <div style={{ height: '4px', background: '#f5f5f7', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${item.score}%`, background: item.color, borderRadius: '2px' }}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CREATOR CARD */}
            <div style={{ background: '#fff', borderRadius: '18px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.3px', color: '#6e6e73', textTransform: 'uppercase' as const, marginBottom: '12px' }}>Creator</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: '#fff' }}>MK</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#1d1d1f', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Max Koch
                    <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#1d9e75', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '7px' }}>✓</div>
                    <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 7px', borderRadius: '980px', background: '#f5f0ff', color: '#5e35b1' }}>Pro</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#6e6e73' }}>@maxkoch_ai</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                {[{ num: '5', label: 'Products' }, { num: '1.2k', label: 'Sales' }, { num: '4.9', label: 'Rating' }].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center' as const }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#1d1d1f' }}>{s.num}</div>
                    <div style={{ fontSize: '10px', color: '#6e6e73' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/creator" style={{ display: 'block', textAlign: 'center' as const, fontSize: '12px', fontWeight: 500, color: '#1d9e75', textDecoration: 'none', padding: '9px', border: '0.5px solid rgba(29,158,117,0.3)', borderRadius: '10px' }}>View profile →</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
