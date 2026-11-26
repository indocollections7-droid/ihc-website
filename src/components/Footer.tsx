import { Link } from 'react-router-dom'
import { company } from '../config'
export default function Footer() {
  return (
    <footer className="bg-deep py-12 text-white/70">
      <div className="wrap flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="shrink-0 rounded-lg bg-white px-2 py-1"><img src="/logo.png" alt="Indo Holiday Collections" className="h-9 w-auto max-w-none" /></span>
          <p className="max-w-xs text-sm">Official Representative of Maldives Legend in Indonesia. See you beneath the surface.</p>
        </div>
        <div className="flex gap-6 text-sm font-bold">
          <Link to="/about" className="hover:text-white">About</Link><Link to="/fleet" className="hover:text-white">Fleet</Link><Link to="/trips" className="hover:text-white">Trips</Link><Link to="/about" className="hover:text-white">About</Link>
        </div>
        <p className="text-sm">WhatsApp {company.whatsappDisplay}</p>
      </div>
      <p className="wrap mt-8 text-xs text-white/40">© {new Date().getFullYear()} PT {company.name}. All rights reserved.</p>
    </footer>)
}
