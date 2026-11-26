import { Link } from 'react-router-dom'
import { company } from '../config'
interface P { title: string; sub: React.ReactNode; ctaLabel?: string; ctaTo?: string; image?: string; video?: string; kicker?: React.ReactNode; children?: React.ReactNode; tall?: boolean }
export default function Hero({ kicker, title, sub, ctaLabel, ctaTo, image = company.placeholder, video, children, tall }: P) {
  return (
    <section className={`relative isolate overflow-hidden bg-deep ${tall ? 'min-h-[88vh]' : 'min-h-[60vh]'} flex items-end`}>
      {video ? <video src={video} poster={image} autoPlay muted loop playsInline className="absolute inset-0 -z-20 h-full w-full object-cover" />
        : <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/50 to-deep/10" />
      <div className="wrap pb-14 pt-32 text-white">
        {kicker && <div className="mb-4">{kicker}</div>}
        <h1 className="max-w-3xl text-4xl uppercase sm:text-5xl lg:text-7xl">{title}</h1>
        <div className="mt-5 max-w-xl text-lg text-white/85">{sub}</div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {ctaLabel && ctaTo && <Link to={ctaTo} className="btn-warm">{ctaLabel}</Link>}{children}
        </div>
      </div>
    </section>)
}
