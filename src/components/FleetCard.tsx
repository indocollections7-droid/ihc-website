import { cta } from '../config'
import type { Ship } from '../types'
export default function FleetCard({ ship }: { ship: Ship }) {
  return (<a href={ship.pdf} download={`IHC-${ship.name}.pdf`} target="_blank" rel="noreferrer" className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-navy" aria-label={`${cta.ship}: ${ship.name}`}>
    <img src={ship.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/20 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
      <h3 className="text-2xl uppercase">{ship.name}</h3>
      <p className="text-xs text-white/75">{ship.cabins} cabins • up to {ship.guests} guests</p>
      <span className="mt-2 inline-block font-display text-sm font-bold text-warm">{cta.ship} ↓</span></div>
  </a>)
}
