import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { dataIssues } from '../lib/validate'
import { ships } from '../lib/ships'
import Hero from '../components/Hero'
import MaldivesMap from '../components/MaldivesMap'
import YearFilter from '../components/YearFilter'
import TripGrid from '../components/TripGrid'
import { allTrips, pastTrips, upcomingTrips, yearOf, yearsOf } from '../lib/trips'
export default function Trips() {
  const [year, setYear] = useState<number | 'ALL'>('ALL')
  const shipId = useSearchParams()[0].get('ship'); const ship = ships.find(s => s.id === shipId)
  const by = (l: typeof allTrips) => l.filter(t => (year === 'ALL' || yearOf(t) === year) && (!ship || t.shipId.toLowerCase() === ship.id))
  const up = by(upcomingTrips()), past = by(pastTrips())
  return (<>
    <Hero title="Find your next adventure" sub="Explore upcoming Maldives Legend departures, choose your date, discover the route, and find the trip that feels right for you." />
    <section className="wrap py-10">
      {import.meta.env.DEV && dataIssues().length > 0 && <div className="mb-6 rounded-xl border-2 border-gold bg-gold/10 p-4 text-sm"><p className="font-bold">Data check (dev only):</p><ul className="list-disc pl-5">{dataIssues().map(m => <li key={m}>{m}</li>)}</ul></div>}
      {ship && <p className="mb-4">Showing departures on <strong>{ship.name}</strong>. <Link to="/trips" className="font-bold text-ocean">Show all trips</Link></p>}
      <YearFilter years={yearsOf(allTrips)} value={year} onChange={setYear} />
      <div className="mt-8">{up.length ? <TripGrid trips={up} /> : <p>No departures listed for this year yet. Ask our team on WhatsApp.</p>}</div>
      {past.length > 0 && (<div className="mt-16"><h2 className="mb-5 text-3xl uppercase text-navy/60">Past trips</h2><TripGrid trips={past} groupByYear={false} /></div>)}
    </section>
    <MaldivesMap /></>)
}
