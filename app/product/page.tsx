'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const reviews = [
  { name: 'Anna M.', initials: 'AM', color: '#D85A30', rating: 5, date: 'Mar 2026', text: 'This completely transformed how I use ChatGPT for my business. The automation workflows saved me hours every week. Highly recommended!' },
  { name: 'Tobias K.', initials: 'TK', color: '#378ADD', rating: 5, date: 'Feb 2026', text: 'Very well structured. Max clearly knows his stuff. The Make.com integrations are especially useful.' },
  { name: 'Sarah L.', initials: 'SL', color: '#7F77DD', rating: 4, date: 'Feb 2026', text: 'Great content overall. Could use a bit more detail on the API setup parts, but the templates alone are worth the price.' },
  { name: 'Felix R.', initials: 'FR', color: '#1D9E75', rating: 5, date: 'Jan 2026', text: 'Bought this after seeing Max\'s Twitter thread. Did not disappoint. Already automated 3 workflows in my agency.' },
]

export default function Product() {
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews'>('overview')

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 40px 64px' }}>
        {/* BREADCRUMB */}
        <div style={{ fontSize: '13px', color: '#6e6e73', marginBottom: '32px', display: 'flex', gap: '6px', alignItems: 'center' }}>
          <Link href="/explore" style={{ color: '#6e6e73', textDecoration: 'none' }}>Explore</Link>
          <span>/</span>
          <span style={{ color: '#1d1d1f' }}>ChatGPT Automation Stack</span>
        </div>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
          {/* LEFT — PRODUCT INFO */}
          <div style={{ flex: 1 }}>
            {/* PRODUCT HERO */}
            <div style={{ background: '#fff', borderRadius: '20px', border: '0.5px solid rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '24px' }}>
              <div style={{ height: '200px', background: '#fff8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '64px' }}>🔁</span>
              </div>
              <div style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                  <span style={{ color: '#ff9500', fontSize: '13px' }}>★★★★★</span>
                  <span style={{ fontSize: '13px', color: '#6e6e73' }}>4.9 (312 reviews)</span>
                </div>
                <h1 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f', margin: '0 0 8px' }}>ChatGPT Automation Stack</h1>
                <div style={{ display: 'inline-block', fontSize: '10px', fontWeight: 500, padding: '3px 9px', borderRadius: '980px', background: '#fff2e8', color: '#a85400', marginBottom: '16px' }}>Hot</div>
                <p style={{ fontSize: '15px', color: '#6e6e73', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                  The complete automation toolkit for ChatGPT power users. Includes 12 ready-to-use Make.com workflows,
                  custom API integrations, prompt chains, and a step-by-step video course. Go from manual to automated in a weekend.
                </p>
              </div>
            </div>

            {/* TABS */}
            <div style={{ display: 'flex', gap: '0', borderBottom: '0.5px solid rgba(0,0,0,0.08)', marginBottom: '24px' }}>
              {(['overview', 'reviews'] as const).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  fontSize: '14px', fontWeight: activeTab === tab ? 500 : 400, color: activeTab === tab ? '#1d1d1f' : '#6e6e73',
                  background: 'none', border: 'none', padding: '12px 20px', cursor: 'pointer',
                  borderBottom: activeTab === tab ? '2px solid #1d1d1f' : '2px solid transparent', textTransform: 'capitalize' as const,
                }}>{tab}</button>
              ))}
            </div>

            {activeTab === 'overview' && (
              <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '28px 32px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.3px', margin: '0 0 16px', color: '#1d1d1f' }}>What&apos;s included</h3>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px', marginBottom: '28px' }}>
                  {[
                    '12 pre-built Make.com automation workflows',
                    'Custom ChatGPT API integration templates',
                    '3-hour video course with walkthrough',
                    'Prompt chain library (50+ tested prompts)',
                    'Private community access',
                    'Lifetime updates',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#1d1d1f' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#eaf7f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d9e75', fontSize: '10px', flexShrink: 0 }}>✓</div>
                      {item}
                    </div>
                  ))}
                </div>

                <h3 style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.3px', margin: '0 0 12px', color: '#1d1d1f' }}>Requirements</h3>
                <p style={{ fontSize: '14px', color: '#6e6e73', lineHeight: 1.7, margin: 0 }}>
                  Basic understanding of ChatGPT. A Make.com account (free tier works). No coding experience required.
                </p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                {reviews.map((r, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '20px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600, color: '#fff' }}>{r.initials}</div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 500, color: '#1d1d1f' }}>{r.name}</div>
                        <div style={{ fontSize: '11px', color: '#6e6e73' }}>{r.date}</div>
                      </div>
                      <div style={{ marginLeft: 'auto', fontSize: '12px', color: '#ff9500' }}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                    </div>
                    <p style={{ fontSize: '14px', color: '#1d1d1f', lineHeight: 1.6, margin: 0 }}>{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — SIDEBAR */}
          <div style={{ width: '320px', flexShrink: 0, position: 'sticky' as const, top: '72px' }}>
            {/* PURCHASE CARD */}
            <div style={{ background: '#fff', borderRadius: '20px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '28px', marginBottom: '16px' }}>
              <div style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f', marginBottom: '4px' }}>€49</div>
              <div style={{ fontSize: '13px', color: '#6e6e73', marginBottom: '20px' }}>One-time purchase · Instant access</div>
              <button style={{ width: '100%', fontSize: '15px', fontWeight: 500, background: '#1d9e75', color: '#fff', border: 'none', padding: '14px', borderRadius: '14px', cursor: 'pointer', marginBottom: '10px' }}>Buy now</button>
              <button style={{ width: '100%', fontSize: '15px', background: 'none', border: '0.5px solid rgba(0,0,0,0.13)', color: '#1d1d1f', padding: '14px', borderRadius: '14px', cursor: 'pointer' }}>Add to wishlist</button>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px', marginTop: '20px', paddingTop: '20px', borderTop: '0.5px solid rgba(0,0,0,0.08)' }}>
                {[
                  { label: 'Format', value: 'Videos + Templates' },
                  { label: 'Duration', value: '3 hours' },
                  { label: 'Last updated', value: 'Mar 2026' },
                  { label: 'Access', value: 'Lifetime' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#6e6e73' }}>{item.label}</span>
                    <span style={{ color: '#1d1d1f', fontWeight: 500 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CREATOR CARD */}
            <div style={{ background: '#fff', borderRadius: '20px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.3px', color: '#6e6e73', textTransform: 'uppercase' as const, marginBottom: '14px' }}>Creator</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 600, color: '#fff' }}>MK</div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 500, color: '#1d1d1f', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Max Koch
                    <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#1d9e75', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '8px' }}>✓</div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#6e6e73' }}>@maxkoch_ai</div>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#6e6e73', lineHeight: 1.6, margin: '0 0 16px' }}>AI automation expert. Building tools for the next wave of creators.</p>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                {[
                  { num: '5', label: 'Products' },
                  { num: '1.2k', label: 'Sales' },
                  { num: '4.9', label: 'Avg rating' },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: 'center' as const }}>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#1d1d1f' }}>{s.num}</div>
                    <div style={{ fontSize: '11px', color: '#6e6e73' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/creator" style={{ display: 'block', textAlign: 'center' as const, fontSize: '13px', fontWeight: 500, color: '#1d9e75', textDecoration: 'none', padding: '10px', border: '0.5px solid rgba(29,158,117,0.3)', borderRadius: '10px' }}>View profile →</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
