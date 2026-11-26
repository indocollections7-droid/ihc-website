import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { waLink, generalMessage } from '../lib/whatsapp'
const links = [['/', 'HOME'], ['/about', 'ABOUT'], ['/fleet', 'FLEET'], ['/trips', 'TRIPS']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const cls = ({ isActive }: { isActive: boolean }) => `font-display text-sm font-bold tracking-wide transition ${isActive ? 'text-ocean' : 'text-white/80 hover:text-white'}`
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-white/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}><span className="rounded-lg bg-white px-2 py-1"><img src="/logo.png" alt="Indo Holiday Collections" className="h-9 w-auto" /></span><span className="font-display text-xs font-bold uppercase leading-tight tracking-wide text-deep md:hidden lg:block lg:text-sm">Indo Holiday<br />Collections</span></Link>
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map(([to, t]) => <NavLink key={to} to={to} end={to === '/'} className={cls}>{t}</NavLink>)}
          <a href={waLink(generalMessage)} target="_blank" rel="noreferrer" className="btn-warm !py-2">CONTACT US</a>
        </nav>
        <button className="p-2 text-2xl text-deep md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-deep px-5 pb-5 pt-2 md:hidden">
          {links.map(([to, t]) => <NavLink key={to} to={to} end={to === '/'} className={cls} onClick={() => setOpen(false)}><span className="block py-3">{t}</span></NavLink>)}
          <a href={waLink(generalMessage)} target="_blank" rel="noreferrer" className="btn-warm mt-2">CONTACT US</a>
        </nav>)}
    </header>)
}
