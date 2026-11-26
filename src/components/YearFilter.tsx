export default function YearFilter({ years, value, onChange }: { years: number[]; value: number | 'ALL'; onChange: (v: number | 'ALL') => void }) {
  return (<div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2" role="tablist" aria-label="Filter by year">
    {(['ALL', ...years] as const).map(y => (
      <button key={y} role="tab" aria-selected={value === y} onClick={() => onChange(y)}
        className={`shrink-0 rounded-full px-6 py-2 font-display text-sm font-bold transition ${value === y ? 'bg-deep text-white' : 'bg-white text-navy hover:bg-aqua/50'}`}>{y}</button>))}
  </div>)
}
