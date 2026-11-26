import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import OfficialRep from '../components/OfficialRep'
import SectionTitle from '../components/SectionTitle'
import TestimonialRow from '../components/TestimonialRow'
import WhatsAppButton from '../components/WhatsAppButton'
import brand from '../data/brand.json'
const chain = [['Indo Holiday Collections', 'Your Indonesian contact point.'], ['Maldives Legend', 'Your Maldives liveaboard trip. Scuba, freedive, mermaid and fun cruises.']]
export default function About() {
  return (<><Hero title="About Indo Holiday Collections" kicker={<OfficialRep />} sub="The Indonesian gateway to Maldives Legend." />
    <section className="wrap grid gap-12 py-16 md:grid-cols-2">
      <div className="space-y-4 text-lg">
        <p>Indo Holiday Collections connects Indonesian travelers with Maldives Legend, a locally operated Maldives liveaboard experience built around diving, ocean adventures, and life at sea.</p>
        <p>As the official representative of Maldives Legend in Indonesia, we help travelers discover the right trip, understand the route and liveaboard experience, and get directly connected with the team for their journey.</p>
        <ul className="space-y-2 pt-2 text-base">{brand.ihcRole.map(r => <li key={r} className="border-l-4 border-cyan pl-4">{r}</li>)}</ul>
        <div className="flex flex-wrap gap-3 pt-4"><Link to="/fleet" className="btn bg-deep text-white hover:bg-navy">SEE THE FLEET</Link><Link to="/trips" className="btn bg-deep text-white hover:bg-navy">EXPLORE TRIPS</Link><WhatsAppButton label="TALK TO OUR TEAM" /></div></div>
      <ol className="space-y-2">{chain.map(([t, d], i) => (<li key={t}><div className={`rounded-2xl p-5 ${i === 0 ? 'bg-deep text-white' : 'bg-white shadow-sm'}`}><p className="font-display text-xl font-bold">{t}</p><p className={`text-sm ${i === 0 ? 'text-white/70' : 'text-navy/70'}`}>{d}</p></div>
        {i < chain.length - 1 && <p className="py-1 text-center text-2xl text-cyan" aria-hidden>↓</p>}</li>))}</ol>
    </section>
    <section className="bg-deep py-16"><div className="wrap"><SectionTitle light title="They've been there." sub="Every trip leaves a story. Hear what guests had to say after experiencing Maldives with Maldives Legend." />
      <TestimonialRow />
      <div className="mt-12 text-center"><p className="mb-4 font-display text-xl font-bold text-white">Found your trip? Talk to our team and start planning your journey.</p><WhatsAppButton label="TALK TO OUR TEAM" /></div></div></section></>)
}
