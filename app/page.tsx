'use client'
import Link from 'next/link'
import Navbar from './components/Navbar'

const featuredProducts = [
  { icon: '🎯', bg: '#fff8f0', creator: 'MK', handle: '@maxkoch_ai', title: 'LeadScore AI', price: '€49/mo', rating: '4.9', reviews: '312', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#1D9E75', type: 'AI Agent' },
  { icon: '♻️', bg: '#f0fdf8', creator: 'SB', handle: '@socialbee', title: 'RepurposeBot', price: '€39', rating: '4.8', reviews: '204', badge: 'Top', badgeBg: '#f5f0ff', badgeColor: '#5e35b1', avatarBg: '#27AE60', type: 'Automation' },
  { icon: '📋', bg: '#f5f0ff', creator: 'HR', handle: '@hireiq', title: 'HireIQ Screener', price: '€79/mo', rating: '5.0', reviews: '41', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', avatarBg: '#7F77DD', type: 'AI Agent' },
  { icon: '🎨', bg: '#fff0f5', creator: 'AC', handle: '@adcraft', title: 'AdCraft AI', price: '€0.15/run', rating: '4.7', reviews: '89', avatarBg: '#D85A30', type: 'API Tool' },
  { icon: '🧠', bg: '#eff6ff', creator: 'MM', handle: '@meetingmind', title: 'MeetingMind', price: '€19/mo', rating: '4.8', reviews: '143', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#378ADD', type: 'AI Agent' },
  { icon: '💬', bg: '#fef0f0', creator: 'SP', handle: '@supportpilot', title: 'SupportPilot', price: '€99/mo', rating: '4.9', reviews: '231', badge: 'Top', badgeBg: '#f5f0ff', badgeColor: '#5e35b1', avatarBg: '#D4537E', type: 'AI Agent' },
  { icon: '🔗', bg: '#f5f5f7', creator: 'CG', handle: '@clustergenius', title: 'ClusterGenius', price: '€29', rating: '4.6', reviews: '57', avatarBg: '#888780', type: 'Prompt Pack' },
  { icon: '🔍', bg: '#fffbf0', creator: 'RW', handle: '@rivalwatch', title: 'RivalWatch AI', price: '€39/mo', rating: '4.8', reviews: '76', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', avatarBg: '#BA7517', type: 'AI Agent' },
]

const productTypes = [
  { icon: '🤖', title: 'AI Agents', desc: 'Autonome Systeme, die komplette Aufgaben erledigen — mit Tool-Nutzung und mehrstufiger Logik.', examples: 'Sales Qualifier, Support Bot, CV Screener', pricing: 'Ab €19/mo' },
  { icon: '✍️', title: 'Prompt Packs', desc: 'Kuratierte, getestete Prompt-Sammlungen mit Variablen-Slots — direkt im Interface nutzbar.', examples: 'Copy Suite, SEO Cluster, Ad Generator', pricing: 'Ab €9' },
  { icon: '⚡', title: 'Automationen', desc: 'Mehrstufige Workflows, die AI mit Tools verbinden — Make.com, n8n, Zapier Blueprints.', examples: 'Content Pipeline, Data Sync, Lead Flow', pricing: 'Ab €19' },
  { icon: '🔌', title: 'API Tools', desc: 'Micro-Services mit REST-API — eine spezifische AI-Funktion, sofort integrierbar.', examples: 'Invoice Parser, Categorizer, Translator', pricing: 'Ab €0.01/call' },
  { icon: '📐', title: 'Templates', desc: 'Notion, Airtable, Sheets — mit eingebauter AI-Funktionalität und Automationen.', examples: 'Hiring OS, Project Tracker, CRM', pricing: 'Ab €9' },
  { icon: '📚', title: 'Knowledge Bases', desc: 'Kuratierte Datensätze für RAG-Systeme, Fine-Tuning oder Recherche.', examples: 'SaaS Database, Industry Reports, Contacts', pricing: 'Ab €29' },
]

export default function Home() {
  return (
    <main style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#f5f5f7', minHeight: '100vh', WebkitFontSmoothing: 'antialiased' as const }}>
      <Navbar />

      {/* HERO */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '96px 40px 80px', textAlign: 'center' as const }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: '11px', fontWeight: 500, letterSpacing: '0.4px', color: '#0a5c42', background: '#eaf7f2', padding: '5px 14px', borderRadius: '980px', marginBottom: '28px' }}>
          ✦ Der App Store für AI
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: 600, letterSpacing: '-2.5px', lineHeight: 1.05, color: '#1d1d1f', margin: '0 0 20px' }}>
          AI kaufen, testen und<br/>sofort einsetzen.
        </h1>
        <p style={{ fontSize: '17px', color: '#6e6e73', fontWeight: 300, lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 40px' }}>
          Fertige AI-Agents, Automationen und Workflows — von verifizierten Creatorn gebaut, in Minuten deployed. Keine PDFs, sondern funktionierende Systeme.
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

      {/* HOW IT WORKS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 40px 0' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '-1.2px', color: '#1d1d1f', margin: '0 0 8px' }}>So funktioniert&apos;s</h2>
          <p style={{ fontSize: '15px', color: '#6e6e73', fontWeight: 300, margin: 0 }}>Von Problem zu Lösung in unter 5 Minuten.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {[
            { step: '01', title: 'Entdecken', desc: 'Suche nach Use Case, Kategorie oder Integration. Filter nach Preis, AI-Modell und Rating.', color: '#1d9e75' },
            { step: '02', title: 'Testen', desc: 'Jedes Produkt hat eine Live-Demo. Teste den Agent, probiere Prompts, sieh echte Outputs.', color: '#378ADD' },
            { step: '03', title: 'Kaufen', desc: 'Einmalig, Abo oder Usage-based. Checkout in 30 Sekunden via Stripe.', color: '#7F77DD' },
            { step: '04', title: 'Einsetzen', desc: '1-Click-Setup: API-Key verbinden, Integrationen aktivieren, fertig. Monitoring inklusive.', color: '#D85A30' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '28px 24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: s.color, marginBottom: '12px', letterSpacing: '0.5px' }}>{s.step}</div>
              <div style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f', marginBottom: '8px' }}>{s.title}</div>
              <div style={{ fontSize: '13px', color: '#6e6e73', lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCT TYPES */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 40px 0' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '-1.2px', color: '#1d1d1f', margin: '0 0 8px' }}>6 Produkt-Typen</h2>
          <p style={{ fontSize: '15px', color: '#6e6e73', fontWeight: 300, margin: 0 }}>Nicht nur Prompts — sondern funktionierende Systeme.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
          {productTypes.map((t, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{t.icon}</div>
              <div style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f', marginBottom: '6px' }}>{t.title}</div>
              <div style={{ fontSize: '13px', color: '#6e6e73', lineHeight: 1.6, marginBottom: '14px' }}>{t.desc}</div>
              <div style={{ fontSize: '11px', color: '#6e6e73', marginBottom: '4px' }}>
                <span style={{ fontWeight: 500, color: '#1d1d1f' }}>Beispiele:</span> {t.examples}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 500, color: '#1d9e75' }}>{t.pricing}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '28px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.6px', margin: 0 }}>Trending right now</h2>
          <Link href="/explore" style={{ fontSize: '13px', color: '#1d9e75', fontWeight: 500, textDecoration: 'none' }}>See all →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
          {featuredProducts.map((p, i) => (
            <Link key={i} href="/product" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: '120px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
                  <span style={{ fontSize: '32px' }}>{p.icon}</span>
                  {p.badge && <div style={{ position: 'absolute' as const, top: '10px', right: '10px', fontSize: '10px', fontWeight: 500, padding: '3px 9px', borderRadius: '980px', background: p.badgeBg, color: p.badgeColor }}>{p.badge}</div>}
                  <div style={{ position: 'absolute' as const, top: '10px', left: '10px', fontSize: '10px', fontWeight: 500, padding: '3px 9px', borderRadius: '980px', background: 'rgba(255,255,255,0.9)', color: '#1d1d1f' }}>{p.type}</div>
                </div>
                <div style={{ padding: '13px 14px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <div style={{ width: '19px', height: '19px', borderRadius: '50%', background: p.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 600, color: '#fff' }}>{p.creator}</div>
                    <span style={{ fontSize: '11px', color: '#6e6e73' }}>{p.handle}</span>
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#1d9e75', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '7px' }}>✓</div>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '-0.2px', lineHeight: 1.35, marginBottom: '10px', color: '#1d1d1f' }}>{p.title}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#1d1d1f' }}>{p.price}</span>
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

      {/* TRUST & TRANSPARENCY */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 40px 0' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '-1.2px', color: '#1d1d1f', margin: '0 0 8px' }}>Transparency first</h2>
          <p style={{ fontSize: '15px', color: '#6e6e73', fontWeight: 300, margin: 0 }}>Jedes Produkt zeigt genau, was drin steckt.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
          {[
            { icon: '◎', title: 'Performance Scores', desc: 'Automatisch berechnet: Erfolgsrate, Latenz, Support-Qualität, Update-Frequenz. Kein Produkt kann schlechte Leistung verstecken.' },
            { icon: '◈', title: 'Transparenz-Box', desc: 'Auf jeder Produktseite: Welches AI-Modell, Kosten pro Run, Limitierungen, letzes Update. Volle Klarheit vor dem Kauf.' },
            { icon: '✦', title: 'Verifizierte Creator', desc: 'Drei Badge-Level: Verified (Identität geprüft), Pro (50+ Sales, 4.5+ Rating), Expert (500+ Sales, kuratiert).' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '28px 24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#eaf7f2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: '#1d9e75', marginBottom: '16px' }}>{item.icon}</div>
              <div style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.3px', color: '#1d1d1f', marginBottom: '8px' }}>{item.title}</div>
              <div style={{ fontSize: '13px', color: '#6e6e73', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LIVE DEMO SHOWCASE */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 40px 0' }}>
        <div style={{ background: '#fff', borderRadius: '24px', border: '0.5px solid rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex' }}>
          <div style={{ flex: 1, padding: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: '10px', fontWeight: 500, letterSpacing: '0.4px', color: '#0a5c42', background: '#eaf7f2', padding: '4px 12px', borderRadius: '980px', marginBottom: '20px' }}>LIVE SANDBOX</div>
            <h3 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#1d1d1f', margin: '0 0 12px' }}>Kein Kauf ohne Test.</h3>
            <p style={{ fontSize: '15px', color: '#6e6e73', lineHeight: 1.6, fontWeight: 300, margin: '0 0 24px' }}>
              Jedes Produkt bietet eine Live-Demo: Chatte mit Agents, teste Prompts mit eigenem Input, sieh echte API-Responses. 10 Demo-Credits gratis für jeden neuen User.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
              {[
                { type: 'AI Agent', demo: 'Chat-Interface, 3–5 Nachrichten' },
                { type: 'Prompt Pack', demo: '2–3 Prompts testbar' },
                { type: 'API Tool', demo: 'Playground, 5 API-Calls' },
                { type: 'Automation', demo: 'Video + simulierter Run' },
              ].map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#eaf7f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d9e75', fontSize: '10px', flexShrink: 0 }}>✓</div>
                  <span style={{ fontWeight: 500, color: '#1d1d1f' }}>{d.type}:</span>
                  <span style={{ color: '#6e6e73' }}>{d.demo}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ width: '360px', background: '#f5f5f7', padding: '32px', display: 'flex', flexDirection: 'column' as const, justifyContent: 'center' }}>
            <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid rgba(0,0,0,0.08)', padding: '16px', fontSize: '13px' }}>
              <div style={{ fontWeight: 500, color: '#1d1d1f', marginBottom: '12px' }}>🎯 LeadScore AI — Demo</div>
              <div style={{ background: '#f5f5f7', borderRadius: '10px', padding: '10px 12px', marginBottom: '8px', color: '#1d1d1f', lineHeight: 1.5 }}>
                <span style={{ fontSize: '11px', color: '#6e6e73' }}>You</span><br/>
                Qualify: Personio, VP Sales
              </div>
              <div style={{ background: '#eaf7f2', borderRadius: '10px', padding: '10px 12px', color: '#1d1d1f', lineHeight: 1.5 }}>
                <span style={{ fontSize: '11px', color: '#1d9e75' }}>Agent</span><br/>
                HR-Tech SaaS, 1.800 MA, Series E<br/>
                <span style={{ fontWeight: 500 }}>Score: 88/100</span> — High Priority<br/>
                <span style={{ fontSize: '11px', color: '#6e6e73' }}>Draft email generated ✓</span>
              </div>
              <div style={{ textAlign: 'center' as const, marginTop: '10px', fontSize: '11px', color: '#6e6e73' }}>2/5 demo runs remaining</div>
            </div>
          </div>
        </div>
      </div>

      {/* DIFFERENZIERUNG */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 40px 0' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '-1.2px', color: '#1d1d1f', margin: '0 0 8px' }}>Warum monetais?</h2>
          <p style={{ fontSize: '15px', color: '#6e6e73', fontWeight: 300, margin: 0 }}>Nicht noch ein Checkout-Tool. Eine echte Plattform.</p>
        </div>
        <div style={{ background: '#fff', borderRadius: '20px', border: '0.5px solid rgba(0,0,0,0.08)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
            <thead>
              <tr style={{ borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
                {['', 'PromptBase', 'Gumroad', 'Whop', 'monetais'].map((h, i) => (
                  <th key={i} style={{ textAlign: 'left' as const, padding: '14px 20px', fontSize: '13px', fontWeight: i === 4 ? 600 : 500, color: i === 4 ? '#1d9e75' : '#1d1d1f', background: i === 4 ? '#f0fdf8' : 'transparent' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Live Demo / Sandbox', values: ['—', '—', '—', '✓'] },
                { feature: '1-Click Deployment', values: ['—', '—', '—', '✓'] },
                { feature: 'Performance Scores', values: ['—', '—', '—', '✓'] },
                { feature: 'AI Agents hosten', values: ['—', '—', '—', '✓'] },
                { feature: 'Usage-based Pricing', values: ['—', '—', '—', '✓'] },
                { feature: 'Transparenz-Box', values: ['—', '—', '—', '✓'] },
                { feature: 'Monitoring Dashboard', values: ['—', '—', '—', '✓'] },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '0.5px solid rgba(0,0,0,0.04)' }}>
                  <td style={{ padding: '12px 20px', fontSize: '13px', fontWeight: 500, color: '#1d1d1f' }}>{row.feature}</td>
                  {row.values.map((v, j) => (
                    <td key={j} style={{ padding: '12px 20px', fontSize: '13px', color: v === '✓' ? '#1d9e75' : '#d1d1d6', fontWeight: v === '✓' ? 600 : 400, background: j === 3 ? '#f0fdf8' : 'transparent' }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: '1100px', margin: '72px auto 64px', padding: '0 40px' }}>
        <div style={{ background: '#1d1d1f', borderRadius: '24px', padding: '52px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-1px', color: '#fff', marginBottom: '8px' }}>Monetize your AI knowledge.</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>12% Take Rate. Kein monatlicher Fee. Dein erstes Produkt ist in 10 Minuten live.</div>
          </div>
          <Link href="/studio" style={{ fontSize: '14px', fontWeight: 500, background: '#1d9e75', color: '#fff', border: 'none', padding: '13px 28px', borderRadius: '980px', cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap' as const }}>Apply as creator →</Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#fff', borderTop: '0.5px solid rgba(0,0,0,0.08)', padding: '40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '13px', color: '#6e6e73' }}>
            <span style={{ fontWeight: 600, color: '#1d1d1f' }}>monetais</span><span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: '#1d9e75', marginLeft: '1px', verticalAlign: 'super' }}/> — Der App Store für AI
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: '#6e6e73' }}>
            <Link href="/explore" style={{ color: '#6e6e73', textDecoration: 'none' }}>Explore</Link>
            <Link href="/pricing" style={{ color: '#6e6e73', textDecoration: 'none' }}>Pricing</Link>
            <Link href="/creator" style={{ color: '#6e6e73', textDecoration: 'none' }}>Creators</Link>
            <Link href="/studio" style={{ color: '#6e6e73', textDecoration: 'none' }}>Studio</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
