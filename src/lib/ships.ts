import raw from '../data/ships.json'
import type { Ship } from '../types'
export const ships = raw as Ship[]
export const getShip = (id: string) => ships.find(s => s.id.toLowerCase() === String(id).toLowerCase())
