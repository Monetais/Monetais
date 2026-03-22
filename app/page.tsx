import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      background: '#f5f5f7',
      minHeight: '100vh',
      WebkitFontSmoothing: 'antialiased'
    }}>

      {/* NAV */}
      <nav style={{
        background: 'rgba(255,255,255,0.9)',
        borderBottom: '0.5px solid rgba(0,0,0,0.08)',
        padding: '0 40px',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.3px' }}>
          monetais
          <span style={{
            display: 'inline-block', width: '6px', height: '6px',
            borderRadius: '50%', background: '#1d9e75',
            marginLeft: '2px', verticalAlign: 'super'
          }}/>
        </div>
        <div style={{ display: 'flex', gap: '28px' }}>
          {['Explore', 'Creators', 'Categories', 'Pricing'].map(item => (
            <span key={item} style={{ fontSize: '13px', color: '#6e6e73', cursor: 'pointer' }}>
              {item}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{
            fontSize: '13px', background: 'none',
            border: '0.5px solid rgba(0,0,0,0.13)',
            color: '#1d1d1f', padding: '6px 16px', borderRadius: '980px', cursor: 'pointer'
          }}>Sign in</button>
          <button style={{
            fontSize: '13px', fontWeight: 500,
            background: '#1d1d1f', color: '#fff',
            border: 'none', padding: '7px 18px', borderRadius: '980px', cursor: 'pointer'
          }}>Get started</button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{
        maxWidth: '780px', margin: '0 auto',
        padding: '96px 40px 80px', textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '11px', fontWeight: 500, letterSpacing: '0.4px',
          color: '#0a5c42', background: '#eaf7f2',
          padding: '5px 14px', borderRadius: '980px', marginBottom: '28px'
        }}>
          ✦ The AI knowledge marketplace
        </div>
        <h1 style={{
          fontSize: '56px', fontWeight: 600,
          letterSpacing: '-2.5px', lineHeight: 1.05,
          color: '#1d1d1f', marginBottom: '20px'
        }}>
          Learn AI from the<br/>people who build with it.
        </h1>
        <p style={{
          fontSize: '17px', color: '#6e6e73',
          fontWeight: 300, lineHeight: 1.6,
          maxWidth: '480px', margin: '0 auto 40px'
        }}>
          Workflows, templates, courses and tools — created by top AI creators, sold in one place.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button style={{
            fontSize: '15px', fontWeight: 500,
            background: '#1d1d1f', color: '#fff',
            border: 'none', padding: '14px 32px',
            borderRadius: '980px', cursor: 'pointer'
          }}>Explore marketplace</button>
          <button style={{
            fontSize: '15px', background: 'none',
            border: '0.5px solid rgba(0,0,0,0.13)',
            color: '#1d1d1f', padding: '14px 28px',
            borderRadius: '980px', cursor: 'pointer'
          }}>Sell your knowledge</button>
        </div>
      </div>

      {/* STATS */}
      <div style={{
        background: '#fff',
        borderTop: '0.5px solid rgba(0,0,0,0.08)',
        borderBottom: '0.5px solid rgba(0,0,0,0.08)',
        display: 'flex', justifyContent: 'center',
        gap: '0', padding: '0'
      }}>
        {[
          { num: '2,400+', label: 'AI products' },
          { num: '380', label: 'Verified creators' },
          { num: '€1.2M+', label: 'Creator earnings' },
          { num: '48k', label: 'Active learners' },
        ].map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            {i > 0 && <div style={{ width: '0.5px', height: '40px', background: 'rgba(0,0,0,0.08)' }}/>}
            <div style={{ padding: '24px 48px', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.8px' }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '12px', color: '#6e6e73', marginTop: '3px' }}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 40px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'baseline', marginBottom: '28px'
        }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.6px' }}>
            Trending right now
          </h2>
          <span style={{ fontSize: '13px', color: '#1d9e75', cursor: 'pointer', fontWeight: 500 }}>
            See all →
          </span>
        </div>

        {/* CATEGORY PILLS */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {[
            { icon: '⚡', label: 'All', active: true },
            { icon: '🔁', label: 'Workflows' },
            { icon: '📚', label: 'Courses' },
            { icon: '🛠', label: 'Templates' },
            { icon: '🎨', label: 'Design' },
            { icon: '👗', label: 'Fashion' },
            { icon: '🎬', label: 'Content' },
            { icon: '💼', label: 'Business' },
          ].map((cat) => (
            <div key={cat.label} style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px', borderRadius: '980px',
              border: cat.active ? 'none' : '0.5px solid rgba(0,0,0,0.13)',
              background: cat.active ? '#1d1d1f' : '#fff',
              color: cat.active ? '#fff' : '#6e6e73',
              fontSize: '13px', cursor: 'pointer',
              fontWeight: cat.active ? 500 : 400
            }}>
              <span style={{ fontSize: '13px' }}>{cat.icon}</span>
              {cat.label}
            </div>
          ))}
        </div>

        {/* CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '14px'
        }}>
          {[
            { icon: '🔁', bg: '#fff8f0', creator: 'MK', name: 'Max Koch', handle: '@maxkoch_ai', title: 'ChatGPT Automation Stack', price: '€49', rating: '4.9', reviews: '312', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#1D9E75' },
            { icon: '👗', bg: '#fff0f5', creator: 'JL', name: 'Julia Looks', handle: '@julialooks', title: 'AI Fashion Prompt Bible', price: '€29', rating: '4.7', reviews: '89', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', avatarBg: '#D85A30' },
            { icon: '🧠', bg: '#f5f0ff', creator: 'NS', name: 'Niklas Studio', handle: '@niklas.studio', title: 'Build Your Own AI Agent', price: '€79', rating: '5.0', reviews: '41', badge: 'Top', badgeBg: '#f5f0ff', badgeColor: '#5e35b1', avatarBg: '#7F77DD' },
            { icon: '📊', bg: '#f0fdf8', creator: 'LP', name: 'Lena Prompts', handle: '@lenaprompts', title: 'Notion + AI Business OS', price: 'Free', rating: '4.8', reviews: '204', badge: 'Free', badgeBg: '#e8f5e9', badgeColor: '#2e7d32', avatarBg: '#639922' },
            { icon: '🎬', bg: '#fef0f0', creator: 'TS', name: 'Tom Studio', handle: '@tomstudio', title: 'Viral Shorts Script Generator', price: '€19', rating: '4.6', reviews: '57', avatarBg: '#D4537E' },
            { icon: '💼', bg: '#eff6ff', creator: 'AK', name: 'Alex Ki', handle: '@alexki', title: 'Cold Outreach AI Playbook', price: '€39', rating: '4.8', reviews: '143', badge: 'Hot', badgeBg: '#fff2e8', badgeColor: '#a85400', avatarBg: '#378ADD' },
            { icon: '🛠', bg: '#f5f5f7', creator: 'FR', name: 'Florian Rai', handle: '@florianrai', title: 'Make.com Starter Bundle', price: '€35', rating: '4.5', reviews: '28', badge: 'New', badgeBg: '#eaf7f2', badgeColor: '#0a5c42', avatarBg: '#888780' },
            { icon: '✍️', bg: '#fffbf0', creator: 'KM', name: 'Ki Marie', handle: '@ki_marie', title: 'GPT Copywriting Masterclass', price: '€59', rating: '4.9', reviews: '76', avatarBg: '#BA7517' },
          ].map((p, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '0.5px solid rgba(0,0,0,0.08)',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              <div style={{
                height: '120px', background: p.bg,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', position: 'relative'
              }}>
                <span style={{ fontSize: '32px' }}>{p.icon}</span>
                {p.badge && (
                  <div style={{
                    position: 'absolute', top: '10px', right: '10px',
                    fontSize: '10px', fontWeight: 500,
                    padding: '3px 9px', borderRadius: '980px',
                    background: p.badgeBg, color: p.badgeColor
                  }}>{p.badge}</div>
                )}
              </div>
              <div style={{ padding: '13px 14px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <div style={{
                    width: '19px', height: '19px', borderRadius: '50%',
                    background: p.avatarBg, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '8px', fontWeight: 600, color: '#fff'
                  }}>{p.creator}</div>
                  <span style={{ fontSize: '11px', color: '#6e6e73' }}>{p.handle}</span>
                  <div style={{
                    width: '11px', height: '11px', borderRadius: '50%',
                    background: '#1d9e75', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '7px'
                  }}>✓</div>
                </div>
                <div style={{
                  fontSize: '13px', fontWeight: 500,
                  letterSpacing: '-0.2px', lineHeight: 1.35,
                  marginBottom: '10px', color: '#1d1d1f'
                }}>{p.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontSize: '15px', fontWeight: 600,
                    letterSpacing: '-0.3px',
                    color: p.price === 'Free' ? '#1d9e75' : '#1d1d1f'
                  }}>{p.price}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: '#6e6e73' }}>
                    <span style={{ color: '#ff9500', fontSize: '10px' }}>★</span>
                    {p.rating} ({p.reviews})
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}