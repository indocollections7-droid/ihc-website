import brand from '../data/brand.json'
export default function OfficialRep({ className = '' }: { className?: string }) {
  return <span className={`inline-flex items-center gap-2 rounded-full border border-gold/50 bg-deep/40 px-4 py-1.5 text-xs font-bold text-gold backdrop-blur ${className}`}><span aria-hidden>✦</span>{brand.officialRep}</span>
}
