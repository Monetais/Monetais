'use client'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '€0',
      period: 'forever',
      desc: 'Perfekt zum Starten. Verkaufe deine ersten Produkte.',
      features: [
        '2 Produkte',
        'Basic Analytics (Revenue, Sales)',
        'Standard Listing',
        'Stripe Payouts',
        'Email Support',
      ],
      takeRate: '12%',
      cta: 'Get started free',
      ctaBg: '#1d1d1f',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '€29',
      period: '/Monat',
      desc: 'Für ambitionierte Creator mit mehreren Produkten.',
      features: [
        'Unlimited Produkte',
        'Advanced Analytics + Conversion Funnel',
        'Priority Support (<4h)',
        'Custom Branding',
        'Rabatt-Codes + Bundles',
        'Promoted Listing Zugang',
        'Performance Scores',
      ],
      takeRate: '10%',
      cta: 'Start Pro',
      ctaBg: '#1d9e75',
      highlight: true,
    },
    {
      name: 'Business',
      price: '€99',
      period: '/Monat',
      desc: 'Für Teams und Creator mit hohem Volumen.',
      features: [
        'Alles aus Pro',
        'Team-Accounts (5 Seats)',
        'API Access',
        'White-Label Option',
        'Geo-Pricing',
        'Priority Placement',
        'Dedicated Account Manager',
      ],
      takeRate: '8%',
      cta: 'Start Business',
      ctaBg: '#1d1d1f',
      highlight: false,
    },
  ]

  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh' }}>
      <Navbar />

      {/* HERO */}
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '72px 40px 56px', textAlign: 'center' as const }}>
        <h1 style={{ fontSize: '42px', fontWeight: 600, letterSpacing: '-1.8px', color: '#1d1d1f', margin: '0 0 12px' }}>Creator Pricing</h1>
        <p style={{ fontSize: '17px', color: '#6e6e73', fontWeight: 300, lineHeight: 1.6, margin: 0 }}>
          Keine versteckten Kosten. Kein Lock-in. Je mehr du verkaufst, desto niedriger deine Take Rate.
        </p>
      </div>

      {/* PLANS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px 48px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {plans.map((plan, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: '20px',
            border: plan.highlight ? '2px solid #1d9e75' : '0.5px solid rgba(0,0,0,0.08)',
            padding: '32px 28px', position: 'relative' as const,
          }}>
            {plan.highlight && (
              <div style={{ position: 'absolute' as const, top: '-11px', left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: 500, color: '#fff', background: '#1d9e75', padding: '3px 14px', borderRadius: '980px' }}>Most popular</div>
            )}
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#1d1d1f', marginBottom: '4px' }}>{plan.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '4px' }}>
              <span style={{ fontSize: '36px', fontWeight: 600, letterSpacing: '-1.5px', color: '#1d1d1f' }}>{plan.price}</span>
              <span style={{ fontSize: '14px', color: '#6e6e73' }}>{plan.period}</span>
            </div>
            <div style={{ fontSize: '13px', color: '#6e6e73', lineHeight: 1.5, marginBottom: '20px' }}>{plan.desc}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', padding: '8px 12px', background: '#f5f5f7', borderRadius: '10px' }}>
              <span style={{ fontSize: '12px', color: '#6e6e73' }}>Take Rate:</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#1d1d1f' }}>{plan.takeRate}</span>
              <span style={{ fontSize: '11px', color: '#6e6e73' }}>pro Verkauf</span>
            </div>
            <button style={{ width: '100%', fontSize: '14px', fontWeight: 500, background: plan.ctaBg, color: '#fff', border: 'none', padding: '12px', borderRadius: '12px', cursor: 'pointer', marginBottom: '20px' }}>{plan.cta}</button>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
              {plan.features.map((f, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#1d1d1f' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#eaf7f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d9e75', fontSize: '9px', flexShrink: 0 }}>✓</div>
                  {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* TAKE RATE COMPARISON */}
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 40px 48px' }}>
        <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '28px 32px' }}>
          <div style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f', marginBottom: '20px' }}>Take Rate im Vergleich</div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
            {[
              { name: 'Apple App Store', rate: '30%', width: '100%', color: '#d1d1d6' },
              { name: 'Whop', rate: '15%', width: '50%', color: '#d1d1d6' },
              { name: 'monetais (Free)', rate: '12%', width: '40%', color: '#1d9e75' },
              { name: 'Gumroad', rate: '10%', width: '33%', color: '#d1d1d6' },
              { name: 'monetais (Pro)', rate: '10%', width: '33%', color: '#1d9e75' },
              { name: 'monetais (Business)', rate: '8%', width: '27%', color: '#1d9e75' },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                  <span style={{ color: '#1d1d1f', fontWeight: 500 }}>{item.name}</span>
                  <span style={{ color: '#6e6e73' }}>{item.rate}</span>
                </div>
                <div style={{ height: '6px', background: '#f5f5f7', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: item.width, background: item.color, borderRadius: '3px' }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REVENUE STREAMS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px 48px' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '32px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f', margin: '0 0 8px' }}>Pricing-Modelle für deine Produkte</h2>
          <p style={{ fontSize: '15px', color: '#6e6e73', fontWeight: 300, margin: 0 }}>Wähle das Modell, das zu deinem Produkt passt.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px' }}>
          {[
            { title: 'Einmalig', desc: 'Einmal zahlen, dauerhaft Zugriff.', example: '€9–299', ideal: 'Prompt Packs, Templates' },
            { title: 'Abo', desc: 'Monatliches Recurring Revenue.', example: '€9–199/mo', ideal: 'Agents, API Tools' },
            { title: 'Usage-based', desc: 'Pro Run, pro API-Call, pro Token.', example: '€0.01–2/run', ideal: 'APIs, Agents' },
            { title: 'Hybrid', desc: 'Basis-Abo + Usage für Mehrverbrauch.', example: '€29/mo + €0.05', ideal: 'High-Volume Tools' },
            { title: 'Freemium', desc: 'Gratis-Tier mit Upgrade-Pfad.', example: 'Free + Pro', ideal: 'User-Akquise' },
          ].map((m, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '14px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '20px' }}>
              <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.2px', color: '#1d1d1f', marginBottom: '6px' }}>{m.title}</div>
              <div style={{ fontSize: '12px', color: '#6e6e73', lineHeight: 1.5, marginBottom: '12px' }}>{m.desc}</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#1d9e75', marginBottom: '4px' }}>{m.example}</div>
              <div style={{ fontSize: '11px', color: '#6e6e73' }}>Ideal: {m.ideal}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ENTERPRISE */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px 64px' }}>
        <div style={{ background: '#1d1d1f', borderRadius: '24px', padding: '52px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#fff', marginBottom: '8px' }}>Enterprise</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', fontWeight: 300, lineHeight: 1.6, maxWidth: '480px' }}>
              Kuratierte AI-Lösungen als Paket. monetais übernimmt Auswahl, Setup und Support. Custom Pricing ab €499/Monat.
            </div>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              {['Dedicated Support', 'Custom Integrations', 'SLA', 'Revenue Share'].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#1d9e75' }}>✓</span> {f}
                </div>
              ))}
            </div>
          </div>
          <Link href="/studio" style={{ fontSize: '14px', fontWeight: 500, background: '#1d9e75', color: '#fff', border: 'none', padding: '13px 28px', borderRadius: '980px', cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap' as const }}>Contact sales →</Link>
        </div>
      </div>
    </main>
  )
}
