'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { label: 'Explore', href: '/explore' },
    { label: 'Creators', href: '/creator' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Studio', href: '/studio' },
  ]

  return (
    <nav style={{ background: 'rgba(255,255,255,0.92)', borderBottom: '0.5px solid rgba(0,0,0,0.08)', padding: '0 40px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky' as const, top: 0, zIndex: 100, backdropFilter: 'blur(20px)' }}>
      <Link href="/" style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.3px', textDecoration: 'none', color: '#1d1d1f' }}>
        monetais<span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#1d9e75', marginLeft: '2px', verticalAlign: 'super' }}/>
      </Link>
      <div style={{ display: 'flex', gap: '28px' }}>
        {links.map(item => (
          <Link key={item.href} href={item.href} style={{ fontSize: '13px', color: pathname === item.href ? '#1d1d1f' : '#6e6e73', fontWeight: pathname === item.href ? 500 : 400, cursor: 'pointer', textDecoration: 'none' }}>{item.label}</Link>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button style={{ fontSize: '13px', background: 'none', border: '0.5px solid rgba(0,0,0,0.13)', color: '#1d1d1f', padding: '6px 16px', borderRadius: '980px', cursor: 'pointer' }}>Sign in</button>
        <button style={{ fontSize: '13px', fontWeight: 500, background: '#1d1d1f', color: '#fff', border: 'none', padding: '7px 18px', borderRadius: '980px', cursor: 'pointer' }}>Get started</button>
      </div>
    </nav>
  )
}
