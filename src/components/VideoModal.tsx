import { useEffect } from 'react'
const yt = (u: string) => { const m = u.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/); return m ? `https://www.youtube.com/embed/${m[1]}?autoplay=1` : null }
export default function VideoModal({ url, title, onClose }: { url: string; title: string; onClose: () => void }) {
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' } }, [onClose])
  const embed = yt(url)
  return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-deep/95 p-4" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
    <button className="absolute right-4 top-4 p-2 text-3xl text-white" aria-label="Close video" onClick={onClose}>✕</button>
    <div className="aspect-video max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-xl bg-black" onClick={e => e.stopPropagation()}>
      {embed ? <iframe src={embed} title={title} allow="autoplay; encrypted-media; fullscreen" className="h-full w-full" />
        : <video src={url} controls autoPlay playsInline className="h-full w-full object-contain" />}
    </div></div>)
}
