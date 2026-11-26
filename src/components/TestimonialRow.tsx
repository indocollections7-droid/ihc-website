import { useState } from 'react'
import data from '../data/testimonials.json'
import type { Testimonial } from '../types'
import TestimonialCard from './TestimonialCard'
import VideoModal from './VideoModal'
export default function TestimonialRow({ limit }: { limit?: number }) {
  const [active, setActive] = useState<Testimonial | null>(null)
  const items = (data as Testimonial[]).slice(0, limit)
  return (<>
    <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4">{items.map(t => <TestimonialCard key={t.id} item={t} onPlay={setActive} />)}</div>
    {active && <VideoModal url={active.videoUrl} title={active.title} onClose={() => setActive(null)} />}
  </>)
}
