'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const recentOrders = [
  { product: 'LeadScore AI', buyer: 'anna.m@gmail.com', amount: '€49', date: 'Mar 21, 2026', status: 'Completed', type: 'Abo' },
  { product: 'Make.com Advanced Workflows', buyer: 'tobias.k@outlook.de', amount: '€69', date: 'Mar 21, 2026', status: 'Completed', type: 'Einmalig' },
  { product: 'Custom GPT Builder Guide', buyer: 'sarah.l@web.de', amount: '€29', date: 'Mar 20, 2026', status: 'Completed', type: 'Einmalig' },
  { product: 'LeadScore AI', buyer: 'felix.r@icloud.com', amount: '€49', date: 'Mar 20, 2026', status: 'Completed', type: 'Abo' },
  { product: 'AI Email Automation Kit', buyer: 'maria.w@gmail.com', amount: 'Free', date: 'Mar 19, 2026', status: 'Completed', type: 'Free' },
  { product: 'ProposalCraft', buyer: 'jan.b@proton.me', amount: '€49', date: 'Mar 19, 2026', status: 'Refunded', type: 'Einmalig' },
]

const myProducts = [
  { icon: '🎯', title: 'LeadScore AI', status: 'Active', type: 'AI Agent', price: '€49/mo', sales: 312, revenue: '€15,288', version: 'v2.3' },
  { icon: '📝', title: 'ProposalCraft', status: 'Active', type: 'Template', price: '€49', sales: 87, revenue: '€4,263', version: 'v1.1' },
  { icon: '🛠', title: 'Make.com Advanced Workflows', status: 'Active', type: 'Automation', price: '€69', sales: 87, revenue: '€6,003', version: 'v1.4' },
  { icon: '🤖', title: 'Custom GPT Builder Guide', status: 'Active', type: 'Prompt Pack', price: '€29', sales: 128, revenue: '€3,712', version: 'v2.0' },
  { icon: '📧', title: 'AI Email Automation Kit', status: 'Active', type: 'Automation', price: 'Free', sales: 203, revenue: '€0', version: 'v1.2' },
]

const topProducts = [
  { title: 'LeadScore AI', sales: 312, revenue: '€15,288', trend: '+12%' },
  { title: 'Custom GPT Builder Guide', sales: 128, revenue: '€3,712', trend: '+8%' },
  { title: 'Make.com Advanced Workflows', sales: 87, revenue: '€6,003', trend: '+23%' },
  { title: 'ProposalCraft', sales: 87, revenue: '€4,263', trend: '+15%' },
]

export default function Studio() {
  const [activeSection, setActiveSection] = useState<'overview' | 'products' | 'customers'>('overview')

  const statCards = [
    { label: 'Total Revenue', value: '€62,430', change: '+14%', changeColor: '#1d9e75' },
    { label: 'Total Sales', value: '1,247', change: '+8%', changeColor: '#1d9e75' },
    { label: 'Page Views', value: '24.3k', change: '+21%', changeColor: '#1d9e75' },
    { label: 'Conversion', value: '5.1%', change: '-0.3%', changeColor: '#d4537e' },
  ]

  const funnelSteps = [
    { label: 'Views', value: '2,100', pct: '100%', width: '100%' },
    { label: 'Demo Started', value: '340', pct: '16.2%', width: '60%' },
    { label: 'Purchase', value: '87', pct: '25.6%', width: '35%' },
    { label: 'Active Use', value: '72', pct: '82.8%', width: '28%' },
  ]

  const trafficSources = [
    { source: 'monetais Search', pct: 42, color: '#1d9e75' },
    { source: 'Direct Link', pct: 28, color: '#378ADD' },
    { source: 'Twitter', pct: 18, color: '#7F77DD' },
    { source: 'Google', pct: 12, color: '#D85A30' },
  ]

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 40px 64px' }}>
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f', margin: '0 0 4px' }}>Creator Studio</h1>
            <p style={{ fontSize: '15px', color: '#6e6e73', fontWeight: 300, margin: 0 }}>Welcome back, Max. Here&apos;s your overview.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link href="/creator" style={{ fontSize: '13px', background: 'none', border: '0.5px solid rgba(0,0,0,0.13)', color: '#1d1d1f', padding: '9px 18px', borderRadius: '980px', cursor: 'pointer', textDecoration: 'none' }}>View storefront</Link>
            <button style={{ fontSize: '13px', fontWeight: 500, background: '#1d9e75', color: '#fff', border: 'none', padding: '9px 20px', borderRadius: '980px', cursor: 'pointer' }}>+ New product</button>
          </div>
        </div>

        {/* SECTION TABS */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
          {(['overview', 'products', 'customers'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveSection(tab)} style={{
              fontSize: '13px', fontWeight: activeSection === tab ? 500 : 400, padding: '8px 16px', borderRadius: '10px', cursor: 'pointer', border: 'none',
              background: activeSection === tab ? '#1d1d1f' : 'transparent', color: activeSection === tab ? '#fff' : '#6e6e73', textTransform: 'capitalize' as const,
            }}>{tab}</button>
          ))}
        </div>

        {activeSection === 'overview' && (
          <>
            {/* STATS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '20px' }}>
              {statCards.map((stat, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '20px 22px' }}>
                  <div style={{ fontSize: '12px', color: '#6e6e73', marginBottom: '6px' }}>{stat.label}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f' }}>{stat.value}</div>
                    <div style={{ fontSize: '12px', fontWeight: 500, color: stat.changeColor }}>{stat.change}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* REVENUE CHART + CONVERSION FUNNEL */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '14px', marginBottom: '20px' }}>
              {/* CHART */}
              <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '22px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f' }}>Revenue</div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {['7D', '30D', '90D', 'All'].map((period, i) => (
                      <button key={i} style={{
                        fontSize: '11px', fontWeight: i === 1 ? 500 : 400, padding: '5px 10px', borderRadius: '8px', cursor: 'pointer', border: 'none',
                        background: i === 1 ? '#1d1d1f' : 'transparent', color: i === 1 ? '#fff' : '#6e6e73',
                      }}>{period}</button>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '140px', paddingBottom: '20px', borderBottom: '0.5px solid rgba(0,0,0,0.06)' }}>
                  {[35, 42, 28, 55, 48, 62, 45, 70, 58, 75, 68, 82, 72, 88, 65, 90, 78, 95, 82, 68, 74, 85, 92, 78, 88, 95, 82, 98, 88, 105].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: i >= 27 ? '#1d9e75' : '#e8e8ed', borderRadius: '2px' }}/>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '6px' }}>
                  <span style={{ fontSize: '11px', color: '#6e6e73' }}>Feb 21</span>
                  <span style={{ fontSize: '11px', color: '#6e6e73' }}>Mar 21</span>
                </div>
              </div>

              {/* CONVERSION FUNNEL */}
              <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '22px 24px' }}>
                <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f', marginBottom: '20px' }}>Conversion Funnel</div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                  {funnelSteps.map((step, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                        <span style={{ color: '#1d1d1f', fontWeight: 500 }}>{step.label}</span>
                        <span style={{ color: '#6e6e73' }}>{step.value} <span style={{ color: i > 0 ? '#1d9e75' : '#6e6e73', fontWeight: 500 }}>{i > 0 ? step.pct : ''}</span></span>
                      </div>
                      <div style={{ height: '8px', background: '#f5f5f7', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: step.width, background: '#1d9e75', borderRadius: '4px', transition: 'width 0.3s' }}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TOP PRODUCTS + TRAFFIC SOURCES */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '14px', marginBottom: '20px' }}>
              <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '22px 24px' }}>
                <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f', marginBottom: '16px' }}>Top products</div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                  {topProducts.map((p, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 500, color: '#1d1d1f', marginBottom: '2px' }}>{p.title}</div>
                        <div style={{ fontSize: '11px', color: '#6e6e73' }}>{p.sales} sales</div>
                      </div>
                      <div style={{ textAlign: 'right' as const }}>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#1d1d1f' }}>{p.revenue}</div>
                        <div style={{ fontSize: '11px', color: '#1d9e75', fontWeight: 500 }}>{p.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TRAFFIC SOURCES */}
              <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '22px 24px' }}>
                <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f', marginBottom: '16px' }}>Traffic Sources</div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                  {trafficSources.map((src, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                        <span style={{ color: '#1d1d1f', fontWeight: 500 }}>{src.source}</span>
                        <span style={{ color: '#6e6e73' }}>{src.pct}%</span>
                      </div>
                      <div style={{ height: '6px', background: '#f5f5f7', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${src.pct}%`, background: src.color, borderRadius: '3px' }}/>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '0.5px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span style={{ color: '#6e6e73' }}>Avg. CLV</span>
                  <span style={{ fontWeight: 600, color: '#1d1d1f' }}>€47.20</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '6px' }}>
                  <span style={{ color: '#6e6e73' }}>Churn Rate</span>
                  <span style={{ fontWeight: 600, color: '#1d1d1f' }}>4.2%</span>
                </div>
              </div>
            </div>

            {/* RECENT ORDERS */}
            <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', borderBottom: '0.5px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f' }}>Recent orders</div>
                <span style={{ fontSize: '12px', color: '#1d9e75', fontWeight: 500, cursor: 'pointer' }}>View all</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
                <thead>
                  <tr style={{ borderBottom: '0.5px solid rgba(0,0,0,0.06)' }}>
                    {['Product', 'Buyer', 'Type', 'Amount', 'Date', 'Status'].map(h => (
                      <th key={h} style={{ textAlign: 'left' as const, padding: '9px 24px', fontSize: '11px', fontWeight: 500, color: '#6e6e73', letterSpacing: '0.3px', textTransform: 'uppercase' as const }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, i) => (
                    <tr key={i} style={{ borderBottom: i < recentOrders.length - 1 ? '0.5px solid rgba(0,0,0,0.04)' : 'none' }}>
                      <td style={{ padding: '11px 24px', fontSize: '13px', fontWeight: 500, color: '#1d1d1f' }}>{order.product}</td>
                      <td style={{ padding: '11px 24px', fontSize: '13px', color: '#6e6e73' }}>{order.buyer}</td>
                      <td style={{ padding: '11px 24px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '6px', background: '#f5f5f7', color: '#6e6e73' }}>{order.type}</span>
                      </td>
                      <td style={{ padding: '11px 24px', fontSize: '13px', fontWeight: 500, color: order.amount === 'Free' ? '#1d9e75' : '#1d1d1f' }}>{order.amount}</td>
                      <td style={{ padding: '11px 24px', fontSize: '13px', color: '#6e6e73' }}>{order.date}</td>
                      <td style={{ padding: '11px 24px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '980px', background: order.status === 'Completed' ? '#eaf7f2' : '#fef0f0', color: order.status === 'Completed' ? '#0a5c42' : '#c62828' }}>{order.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeSection === 'products' && (
          <div>
            {/* PRODUCT MANAGEMENT */}
            <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', borderBottom: '0.5px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f' }}>My Products</div>
                <button style={{ fontSize: '12px', fontWeight: 500, background: '#1d9e75', color: '#fff', border: 'none', padding: '7px 16px', borderRadius: '980px', cursor: 'pointer' }}>+ New product</button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
                <thead>
                  <tr style={{ borderBottom: '0.5px solid rgba(0,0,0,0.06)' }}>
                    {['Product', 'Type', 'Price', 'Sales', 'Revenue', 'Version', 'Status', ''].map(h => (
                      <th key={h} style={{ textAlign: 'left' as const, padding: '9px 20px', fontSize: '11px', fontWeight: 500, color: '#6e6e73', letterSpacing: '0.3px', textTransform: 'uppercase' as const }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {myProducts.map((p, i) => (
                    <tr key={i} style={{ borderBottom: i < myProducts.length - 1 ? '0.5px solid rgba(0,0,0,0.04)' : 'none' }}>
                      <td style={{ padding: '12px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '20px' }}>{p.icon}</span>
                          <span style={{ fontSize: '13px', fontWeight: 500, color: '#1d1d1f' }}>{p.title}</span>
                        </div>
                      </td>
                      <td style={{ padding: '12px 20px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '6px', background: '#f5f5f7', color: '#6e6e73' }}>{p.type}</span>
                      </td>
                      <td style={{ padding: '12px 20px', fontSize: '13px', fontWeight: 500, color: p.price === 'Free' ? '#1d9e75' : '#1d1d1f' }}>{p.price}</td>
                      <td style={{ padding: '12px 20px', fontSize: '13px', color: '#1d1d1f' }}>{p.sales}</td>
                      <td style={{ padding: '12px 20px', fontSize: '13px', fontWeight: 500, color: '#1d1d1f' }}>{p.revenue}</td>
                      <td style={{ padding: '12px 20px', fontSize: '12px', color: '#6e6e73' }}>{p.version}</td>
                      <td style={{ padding: '12px 20px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '980px', background: '#eaf7f2', color: '#0a5c42' }}>{p.status}</span>
                      </td>
                      <td style={{ padding: '12px 20px' }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '6px', border: '0.5px solid rgba(0,0,0,0.1)', background: 'none', color: '#1d1d1f', cursor: 'pointer' }}>Edit</button>
                          <button style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '6px', border: '0.5px solid rgba(0,0,0,0.1)', background: 'none', color: '#6e6e73', cursor: 'pointer' }}>Pause</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PRODUCT CREATION WIZARD PREVIEW */}
            <div style={{ marginTop: '20px', background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '28px' }}>
              <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f', marginBottom: '8px' }}>Product Creation Wizard</div>
              <div style={{ fontSize: '13px', color: '#6e6e73', marginBottom: '20px' }}>Erstelle ein neues Produkt in 4 Schritten.</div>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { step: '1', label: 'Typ wählen', desc: 'Agent, Prompt Pack, Automation, API, Template, Knowledge Base' },
                  { step: '2', label: 'Beschreibung', desc: 'Titel, Description, Screenshots, Tags' },
                  { step: '3', label: 'Pricing', desc: 'Preismodell, Betrag, Rabatt-Codes' },
                  { step: '4', label: 'Demo & Publish', desc: 'Demo-Szenario, Preview, Live schalten' },
                ].map((s, i) => (
                  <div key={i} style={{ flex: 1, background: '#f5f5f7', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#1d9e75', marginBottom: '6px' }}>Step {s.step}</div>
                    <div style={{ fontSize: '13px', fontWeight: 500, color: '#1d1d1f', marginBottom: '4px' }}>{s.label}</div>
                    <div style={{ fontSize: '11px', color: '#6e6e73', lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'customers' && (
          <div>
            {/* CUSTOMER STATS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '20px' }}>
              {[
                { label: 'Total Customers', value: '847' },
                { label: 'Active Subscribers', value: '312' },
                { label: 'Support Tickets (Open)', value: '3' },
                { label: 'Refund Rate', value: '1.2%' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '20px 22px' }}>
                  <div style={{ fontSize: '12px', color: '#6e6e73', marginBottom: '6px' }}>{s.label}</div>
                  <div style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f' }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* CUSTOMER LIST */}
            <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '20px' }}>
              <div style={{ padding: '18px 24px', borderBottom: '0.5px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f' }}>Customers</div>
                <button style={{ fontSize: '12px', fontWeight: 500, background: '#1d1d1f', color: '#fff', border: 'none', padding: '7px 16px', borderRadius: '980px', cursor: 'pointer' }}>Send bulk message</button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
                <thead>
                  <tr style={{ borderBottom: '0.5px solid rgba(0,0,0,0.06)' }}>
                    {['Customer', 'Products', 'Total Spent', 'Since', 'Status'].map(h => (
                      <th key={h} style={{ textAlign: 'left' as const, padding: '9px 24px', fontSize: '11px', fontWeight: 500, color: '#6e6e73', letterSpacing: '0.3px', textTransform: 'uppercase' as const }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { email: 'anna.m@gmail.com', products: 2, spent: '€98', since: 'Jan 2026', status: 'Active' },
                    { email: 'tobias.k@outlook.de', products: 3, spent: '€147', since: 'Dec 2025', status: 'Active' },
                    { email: 'sarah.l@web.de', products: 1, spent: '€29', since: 'Feb 2026', status: 'Active' },
                    { email: 'felix.r@icloud.com', products: 2, spent: '€118', since: 'Nov 2025', status: 'Active' },
                    { email: 'maria.w@gmail.com', products: 1, spent: '€0', since: 'Mar 2026', status: 'Free' },
                    { email: 'jan.b@proton.me', products: 1, spent: '€0', since: 'Mar 2026', status: 'Refunded' },
                  ].map((c, i) => (
                    <tr key={i} style={{ borderBottom: '0.5px solid rgba(0,0,0,0.04)' }}>
                      <td style={{ padding: '11px 24px', fontSize: '13px', color: '#1d1d1f' }}>{c.email}</td>
                      <td style={{ padding: '11px 24px', fontSize: '13px', color: '#6e6e73' }}>{c.products}</td>
                      <td style={{ padding: '11px 24px', fontSize: '13px', fontWeight: 500, color: '#1d1d1f' }}>{c.spent}</td>
                      <td style={{ padding: '11px 24px', fontSize: '13px', color: '#6e6e73' }}>{c.since}</td>
                      <td style={{ padding: '11px 24px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '980px', background: c.status === 'Active' ? '#eaf7f2' : c.status === 'Free' ? '#f5f5f7' : '#fef0f0', color: c.status === 'Active' ? '#0a5c42' : c.status === 'Free' ? '#6e6e73' : '#c62828' }}>{c.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SUPPORT TICKETS */}
            <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '22px 24px' }}>
              <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f', marginBottom: '16px' }}>Open Support Tickets</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
                {[
                  { from: 'tobias.k@outlook.de', subject: 'HubSpot sync issue', product: 'LeadScore AI', time: '2h ago', priority: 'High' },
                  { from: 'anna.m@gmail.com', subject: 'Can I upgrade mid-cycle?', product: 'LeadScore AI', time: '5h ago', priority: 'Normal' },
                  { from: 'sarah.l@web.de', subject: 'Template variable not working', product: 'Custom GPT Builder Guide', time: '1d ago', priority: 'Normal' },
                ].map((ticket, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#f5f5f7', borderRadius: '10px' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: '#1d1d1f', marginBottom: '2px' }}>{ticket.subject}</div>
                      <div style={{ fontSize: '11px', color: '#6e6e73' }}>{ticket.from} · {ticket.product}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '6px', background: ticket.priority === 'High' ? '#fef0f0' : '#f5f5f7', color: ticket.priority === 'High' ? '#c62828' : '#6e6e73' }}>{ticket.priority}</span>
                      <span style={{ fontSize: '11px', color: '#6e6e73' }}>{ticket.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* QUICK ACTIONS (always visible) */}
        <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
          {[
            { title: 'Create product', desc: 'List a new digital product', icon: '✦' },
            { title: 'Payout settings', desc: 'Manage your earnings', icon: '◎' },
            { title: 'Rabatt-Codes', desc: 'Erstelle Discount Codes', icon: '⬡' },
            { title: 'Analytics', desc: 'Deep-dive into your data', icon: '◈' },
          ].map((action, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '20px 22px', cursor: 'pointer' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>{action.icon}</div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#1d1d1f', marginBottom: '3px' }}>{action.title}</div>
              <div style={{ fontSize: '11px', color: '#6e6e73' }}>{action.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
