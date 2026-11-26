export interface Trip {
  id: string // unique, e.g. "zen-may-2027"
  shipId: string // must match an id in ships.json
  departureDate: string; returnDate: string // YYYY-MM-DD
  route: string
  coverImage: string
  itineraryPdf: string
}
export interface Testimonial { id: string; title: string; guest: string; description: string; trip?: string; thumbnail: string; videoUrl: string }
export interface Ship { id: string; name: string; image: string; cabins: number; guests: number; pdf: string }
