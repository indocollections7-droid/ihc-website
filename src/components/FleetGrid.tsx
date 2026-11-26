import { ships } from '../lib/ships'
import FleetCard from './FleetCard'
export default function FleetGrid() { return <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">{ships.map(s => <FleetCard key={s.id} ship={s} />)}</div> }
