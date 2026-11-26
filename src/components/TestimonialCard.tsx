import type { Testimonial } from '../types'
export default function TestimonialCard({ item, onPlay }: { item: Testimonial; onPlay: (t: Testimonial) => void }) {
  return (<button onClick={() => onPlay(item)} className="group relative block aspect-[3/4] w-72 shrink-0 snap-center overflow-hidden rounded-2xl bg-navy text-left sm:w-80" aria-label={`Play: ${item.title}`}>
    <img src={item.thumbnail} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-warm pl-1 text-2xl text-deep transition group-hover:scale-110">▶</span>
    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
      <p className="font-display text-lg font-bold leading-tight">{item.title}</p>
      <p className="mt-1 text-sm text-white/80">{item.description}</p>
      <p className="mt-2 text-xs font-bold text-aqua">{item.guest}{item.trip ? ` — ${item.trip}` : ''}</p>
    </div></button>)
}
