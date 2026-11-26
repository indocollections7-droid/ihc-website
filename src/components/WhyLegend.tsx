import brand from '../data/brand.json'
export default function WhyLegend() {
  const w = brand.why
  return (<section className="bg-deep py-20 text-white"><div className="wrap grid gap-12 lg:grid-cols-[1fr_1.4fr]">
    <div><h2 className="text-3xl uppercase md:text-5xl">{w.headline}</h2><p className="mt-4 max-w-md text-white/75">{w.intro}</p>
      <p className="mt-10 font-display text-8xl font-extrabold leading-none text-gold md:text-9xl">{w.ranking}</p>
      <p className="mt-2 font-display text-xl font-bold uppercase text-aqua">{w.rankingLabel}</p></div>
    <ol className="divide-y divide-white/10 border-y border-white/10">{w.points.map((p, i) => (
      <li key={p.title} className="flex gap-5 py-5"><span className="font-display text-2xl font-extrabold text-cyan">{String(i + 1).padStart(2, '0')}</span>
        <div><h3 className="text-lg font-bold">{p.title}</h3><p className="mt-1 text-sm text-white/70">{p.text}</p></div></li>))}</ol>
  </div></section>)
}
