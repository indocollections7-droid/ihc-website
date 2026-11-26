import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import OfficialRep from '../components/OfficialRep'
import SectionTitle from '../components/SectionTitle'
import WhyLegend from '../components/WhyLegend'
import MaldivesMap from '../components/MaldivesMap'
import ActivityStrip from '../components/ActivityStrip'
import FleetGrid from '../components/FleetGrid'
import TripGrid from '../components/TripGrid'
import TestimonialRow from '../components/TestimonialRow'
import WhatsAppButton from '../components/WhatsAppButton'
import brand from '../data/brand.json'
import { upcomingTrips } from '../lib/trips'
export default function Home() {
  return (<>
    <Hero tall title="Escape to the Maldives with Us."
      kicker={<><p className="mb-3 font-display text-sm font-bold tracking-widest text-mist">MALDIVES LIVEABOARD BY MALDIVES LEGEND</p><OfficialRep /></>}
      sub="Explore Maldives liveaboard adventures with Maldives Legend, represented officially in Indonesia by Indo Holiday Collections." ctaLabel="EXPLORE TRIPS" ctaTo="/trips">
      <WhatsAppButton ghost label="TALK TO OUR TEAM" /></Hero>
    <section className="wrap grid gap-10 py-16 md:grid-cols-2">
      <div><h2 className="text-3xl uppercase text-deep md:text-4xl">About Indo Holiday Collections</h2>
        <p className="mt-4 text-lg">Indo Holiday Collections connects Indonesian travelers with Maldives Legend, a locally operated Maldives liveaboard experience built around diving, ocean adventures, and life at sea.</p>
        <p className="mt-3">As the official representative of Maldives Legend in Indonesia, we help you find the right trip, understand the route, and get connected with the team.</p>
        <Link to="/about" className="mt-4 inline-block font-display font-bold text-ocean">MORE ABOUT IHC →</Link></div>
      <ul className="space-y-3 self-center">{brand.ihcRole.map(r => <li key={r} className="flex gap-3 border-l-4 border-cyan pl-4 font-medium text-deep">{r}</li>)}</ul>
    </section>
    <WhyLegend />
    <ActivityStrip />
    <section className="bg-white py-16"><div className="wrap"><SectionTitle title="The fleet" sub="What you can sail on." /><FleetGrid />
      <Link to="/fleet" className="mt-8 inline-block font-display font-bold text-ocean">SEE THE FULL FLEET →</Link></div></section>
    <section className="wrap py-16"><SectionTitle title="Find the trip that fits your next escape." sub="Check the dates, then dive into the details." />
      <TripGrid trips={upcomingTrips().slice(0, 3)} groupByYear={false} />
      <Link to="/trips" className="mt-8 inline-block font-display font-bold text-ocean">VIEW ALL TRIPS →</Link></section>
    <MaldivesMap />
    <section className="bg-deep py-16"><div className="wrap"><SectionTitle light title="They've been there." sub="Every trip leaves a story. Hear what guests had to say after experiencing Maldives with Maldives Legend." /><TestimonialRow limit={3} />
      <Link to="/about" className="mt-4 inline-block font-display font-bold text-warm">WATCH MORE STORIES →</Link></div></section>
    <section className="bg-navy py-16 text-center text-white"><div className="wrap"><h2 className="text-3xl uppercase md:text-5xl">Ready to dive?</h2>
      <p className="mx-auto mt-4 max-w-lg text-white/75">Found your trip? Talk to our team and start planning your journey.</p><WhatsAppButton className="mt-8" /></div></section>
  </>)
}
