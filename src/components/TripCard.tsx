import { cta } from '../config'
import type { Trip } from '../types'
import { dateRange, nightsOf, isPast } from '../lib/trips'
import { getShip } from '../lib/ships'
// Hierarchy: 1 ship name → 2 date → 3 route → 4 trip info → hook
export default function TripCard({ trip: t }: { trip: Trip }) {
  const past = isPast(t); const ship = getShip(t.shipId) ?? { name: `Unknown ship (${t.shipId})` }
  return (
    <a href={t.itineraryPdf} download={`IHC-${ship.name}-${t.departureDate}.pdf`} target="_blank" rel="noreferrer" className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-navy/10 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy">
        <img src={t.coverImage} alt={ship.name} loading="lazy" className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${past ? 'grayscale' : ''}`} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-3xl uppercase text-deep">{ship.name}</h3>
        <p className="mt-2 font-display text-base font-bold text-ocean">{dateRange(t)}</p>
        <p className="mt-1 text-sm font-bold uppercase text-deep">{t.route}</p>
        <p className="mt-1 text-sm text-navy/70">{nightsOf(t)} nights • Liveaboard</p>
        <span className="mt-auto pt-4 font-display text-sm font-bold text-ocean">{cta.trip} ↓</span>
      </div>
    </a>)
}
