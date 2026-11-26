import { company } from '../config'
import type { Trip } from '../types'
import { longRange } from './trips'
import { getShip } from './ships'
export const waLink = (message?: string) =>
  `https://wa.me/${company.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`
// Dynamic message built from trip data — edit the wording here.
export const tripMessage = (t: Trip) =>
  `Hi Indo Holiday Collections, I'm interested in the ${(getShip(t.shipId)?.name ?? t.shipId)} trip (${t.route}) on ${longRange(t)}. Could you share the details and availability?`
export const generalMessage = "Hi Indo Holiday Collections, I'd like to know more about Maldives Legend trips from Indonesia."
