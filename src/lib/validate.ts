import { allTrips } from './trips'
import { getShip } from './ships'
// Shown on the Trips page in dev mode only, to catch data mistakes while editing.
export function dataIssues(): string[] {
  const out: string[] = []; const seen = new Set<string>()
  allTrips.forEach((t, i) => {
    const n = `Trip #${i + 1} (${t.id ?? 'no id'})`
    if (!t.id) out.push(`${n}: missing id`); else if (seen.has(t.id)) out.push(`${n}: duplicate id`); seen.add(t.id)
    if (!getShip(t.shipId)) out.push(`${n}: shipId "${t.shipId}" not found in ships.json`)
    if (isNaN(Date.parse(t.departureDate)) || isNaN(Date.parse(t.returnDate))) out.push(`${n}: dates must be YYYY-MM-DD`)
  })
  return out
}
