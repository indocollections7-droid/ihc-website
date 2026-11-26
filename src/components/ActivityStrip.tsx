import brand from '../data/brand.json'
export default function ActivityStrip() {
  const a = brand.activities
  return (<section className="wrap py-16"><div className="mb-8 max-w-2xl"><h2 className="text-3xl uppercase text-deep md:text-4xl">{a.title}</h2><p className="mt-3 text-navy/80">{a.intro}</p></div>
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{a.items.map(i => (
      <article key={i.title} className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-navy">
        <img src={i.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white"><h3 className="text-xl uppercase sm:text-2xl">{i.title}</h3><p className="mt-1 text-xs text-white/80 sm:text-sm">{i.text}</p></div>
      </article>))}</div></section>)
}
