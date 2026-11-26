// Route map section. Image: public/images/maldives-map.jpg (tall infographic, 1400×7000).
const routes = ['Far North & Many More', 'The Great North', 'Hanifaru + N. Ari', 'The Best of Maldives', 'The Central South', 'The Deep South']
export default function MaldivesMap() {
  return (<section className="bg-white py-16"><div className="wrap grid gap-10 lg:grid-cols-[1fr_480px]">
    <div className="lg:sticky lg:top-24 lg:self-start">
      <h2 className="text-3xl uppercase text-deep md:text-4xl">The Maldives, route by route</h2>
      <p className="mt-3 max-w-md text-navy/80">From the Great North to the Deep South, see where each trip takes you. Scroll the map from north to south.</p>
      <ol className="mt-6 space-y-2">{routes.map(r => <li key={r} className="border-l-4 border-cyan pl-4 font-display font-bold text-deep">{r}</li>)}</ol>
    </div>
    <img src="/images/maldives-map.jpg" alt="Map of the Maldives showing the routes from Far North to Deep South" width={1400} height={7000} loading="lazy" className="w-full rounded-2xl" />
  </div></section>)
}
