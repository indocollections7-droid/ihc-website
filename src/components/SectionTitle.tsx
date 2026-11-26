export default function SectionTitle({ title, sub, light }: { title: string; sub?: string; light?: boolean }) {
  return (<div className="mb-8 max-w-2xl"><h2 className={`text-3xl uppercase md:text-4xl ${light ? 'text-white' : 'text-deep'}`}>{title}</h2>
    {sub && <p className={`mt-3 ${light ? 'text-white/70' : 'text-navy/70'}`}>{sub}</p>}</div>)
}
