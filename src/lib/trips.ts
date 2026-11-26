import raw from '../data/trips.json'
import type { Trip } from '../types'
export const allTrips = (raw as Trip[]).slice().sort((a, b) => a.departureDate.localeCompare(b.departureDate))
const fmt = (iso: string, o: Intl.DateTimeFormatOptions) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { ...o, timeZone: 'UTC' })
export const yearOf = (t: Trip) => Number(t.departureDate.slice(0, 4))
export const nightsOf = (t: Trip) => Math.round((Date.parse(t.returnDate) - Date.parse(t.departureDate)) / 864e5)
export const durationOf = (t: Trip) => `${nightsOf(t) + 1} DAYS / ${nightsOf(t)} NIGHTS`
export const isPast = (t: Trip) => Date.parse(t.returnDate) < Date.now()
export const dateRange = (t: Trip) =>
  `${fmt(t.departureDate, { day: '2-digit', month: 'short' })} – ${fmt(t.returnDate, { day: '2-digit', month: 'short', year: 'numeric' })}`.toUpperCase().replace(' – ', ' — ')
export const longRange = (t: Trip) =>
  `${fmt(t.departureDate, { day: 'numeric', month: 'long' })} – ${fmt(t.returnDate, { day: 'numeric', month: 'long', year: 'numeric' })}`
export const upcomingTrips = () => allTrips.filter(t => !isPast(t))
export const pastTrips = () => allTrips.filter(isPast)
export const yearsOf = (list: Trip[]) => [...new Set(list.map(yearOf))].sort()
