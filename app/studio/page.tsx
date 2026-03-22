'use client'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const recentOrders = [
  { product: 'ChatGPT Automation Stack', buyer: 'anna.m@gmail.com', amount: '€49', date: 'Mar 21, 2026', status: 'Completed' },
  { product: 'Make.com Advanced Workflows', buyer: 'tobias.k@outlook.de', amount: '€69', date: 'Mar 21, 2026', status: 'Completed' },
  { product: 'Custom GPT Builder Guide', buyer: 'sarah.l@web.de', amount: '€29', date: 'Mar 20, 2026', status: 'Completed' },
  { product: 'ChatGPT Automation Stack', buyer: 'felix.r@icloud.com', amount: '€49', date: 'Mar 20, 2026', status: 'Completed' },
  { product: 'AI Email Automation Kit', buyer: 'maria.w@gmail.com', amount: 'Free', date: 'Mar 19, 2026', status: 'Completed' },
  { product: 'AI Analytics Dashboard Setup', buyer: 'jan.b@proton.me', amount: '€39', date: 'Mar 19, 2026', status: 'Refunded' },
]

const topProducts = [
  { title: 'ChatGPT Automation Stack', sales: 312, revenue: '€15,288', trend: '+12%' },
  { title: 'Custom GPT Builder Guide', sales: 128, revenue: '€3,712', trend: '+8%' },
  { title: 'Make.com Advanced Workflows', sales: 87, revenue: '€6,003', trend: '+23%' },
  { title: 'AI Email Automation Kit', sales: 203, revenue: 'Free', trend: '+5%' },
]

export default function Studio() {
  const statCards = [
    { label: 'Total Revenue', value: '€62,430', change: '+14%', changeColor: '#1d9e75' },
    { label: 'Total Sales', value: '1,247', change: '+8%', changeColor: '#1d9e75' },
    { label: 'Page Views', value: '24.3k', change: '+21%', changeColor: '#1d9e75' },
    { label: 'Conversion', value: '5.1%', change: '-0.3%', changeColor: '#d4537e' },
  ]

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 40px 64px' }}>
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f', margin: '0 0 4px' }}>Creator Studio</h1>
            <p style={{ fontSize: '15px', color: '#6e6e73', fontWeight: 300, margin: 0 }}>Welcome back, Max. Here&apos;s your overview.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link href="/creator" style={{ fontSize: '13px', background: 'none', border: '0.5px solid rgba(0,0,0,0.13)', color: '#1d1d1f', padding: '9px 18px', borderRadius: '980px', cursor: 'pointer', textDecoration: 'none' }}>View storefront</Link>
            <button style={{ fontSize: '13px', fontWeight: 500, background: '#1d9e75', color: '#fff', border: 'none', padding: '9px 20px', borderRadius: '980px', cursor: 'pointer' }}>+ New product</button>
          </div>
        </div>

        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '24px' }}>
          {statCards.map((stat, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '22px 24px' }}>
              <div style={{ fontSize: '12px', color: '#6e6e73', marginBottom: '8px' }}>{stat.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <div style={{ fontSize: '26px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', fontWeight: 500, color: stat.changeColor }}>{stat.change}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CHART PLACEHOLDER + TOP PRODUCTS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '14px', marginBottom: '24px' }}>
          {/* CHART */}
          <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px 28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
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
            {/* SIMPLE CHART BARS */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '160px', paddingBottom: '24px', borderBottom: '0.5px solid rgba(0,0,0,0.06)' }}>
              {[35, 42, 28, 55, 48, 62, 45, 70, 58, 75, 68, 82, 72, 88, 65, 90, 78, 95, 82, 68, 74, 85, 92, 78, 88, 95, 82, 98, 88, 105].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: i >= 27 ? '#1d9e75' : '#e8e8ed', borderRadius: '3px' }}/>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px' }}>
              <span style={{ fontSize: '11px', color: '#6e6e73' }}>Feb 21</span>
              <span style={{ fontSize: '11px', color: '#6e6e73' }}>Mar 21</span>
            </div>
          </div>

          {/* TOP PRODUCTS */}
          <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px' }}>
            <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f', marginBottom: '20px' }}>Top products</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '14px' }}>
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
        </div>

        {/* RECENT ORDERS */}
        <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '0.5px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f' }}>Recent orders</div>
            <span style={{ fontSize: '12px', color: '#1d9e75', fontWeight: 500, cursor: 'pointer' }}>View all</span>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
            <thead>
              <tr style={{ borderBottom: '0.5px solid rgba(0,0,0,0.06)' }}>
                {['Product', 'Buyer', 'Amount', 'Date', 'Status'].map(h => (
                  <th key={h} style={{ textAlign: 'left' as const, padding: '10px 24px', fontSize: '11px', fontWeight: 500, color: '#6e6e73', letterSpacing: '0.3px', textTransform: 'uppercase' as const }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr key={i} style={{ borderBottom: i < recentOrders.length - 1 ? '0.5px solid rgba(0,0,0,0.04)' : 'none' }}>
                  <td style={{ padding: '12px 24px', fontSize: '13px', fontWeight: 500, color: '#1d1d1f' }}>{order.product}</td>
                  <td style={{ padding: '12px 24px', fontSize: '13px', color: '#6e6e73' }}>{order.buyer}</td>
                  <td style={{ padding: '12px 24px', fontSize: '13px', fontWeight: 500, color: order.amount === 'Free' ? '#1d9e75' : '#1d1d1f' }}>{order.amount}</td>
                  <td style={{ padding: '12px 24px', fontSize: '13px', color: '#6e6e73' }}>{order.date}</td>
                  <td style={{ padding: '12px 24px' }}>
                    <span style={{
                      fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '980px',
                      background: order.status === 'Completed' ? '#eaf7f2' : '#fef0f0',
                      color: order.status === 'Completed' ? '#0a5c42' : '#c62828',
                    }}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* QUICK ACTIONS */}
        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
          {[
            { title: 'Create product', desc: 'List a new digital product', icon: '✦' },
            { title: 'Payout settings', desc: 'Manage your earnings', icon: '◎' },
            { title: 'Analytics', desc: 'Deep-dive into your data', icon: '◈' },
          ].map((action, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '22px 24px', cursor: 'pointer' }}>
              <div style={{ fontSize: '20px', marginBottom: '10px' }}>{action.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#1d1d1f', marginBottom: '4px' }}>{action.title}</div>
              <div style={{ fontSize: '12px', color: '#6e6e73' }}>{action.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
