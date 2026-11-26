import type { Trip } from '../types'
import { yearOf, yearsOf } from '../lib/trips'
import TripCard from './TripCard'
export default function TripGrid({ trips, groupByYear = true }: { trips: Trip[]; groupByYear?: boolean }) {
  const grid = (list: Trip[]) => <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map(t => <TripCard key={t.id} trip={t} />)}</div>
  if (!groupByYear) return grid(trips)
  return (<div className="space-y-14">{yearsOf(trips).map(y => (
    <section key={y} aria-labelledby={`y${y}`}>
      <h2 id={`y${y}`} className="mb-5 flex items-center gap-4 text-3xl text-ocean"><span>{y}</span><span className="h-px flex-1 bg-navy/15" /></h2>
      {grid(trips.filter(t => yearOf(t) === y))}
    </section>))}</div>)
}
