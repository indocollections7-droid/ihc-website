import { waLink, generalMessage } from '../lib/whatsapp'
const Icon = () => (<svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden><path d="M16 3a13 13 0 0 0-11 19.8L3 29l6.4-2A13 13 0 1 0 16 3Zm0 23.7a10.6 10.6 0 0 1-5.4-1.5l-.4-.2-3.8 1.2 1.2-3.7-.3-.4A10.7 10.7 0 1 1 16 26.700Zm5.900-8c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.2-.8 1-1 1.200-.4.200-.7 0a8.700 8.700 0 0 1-4.300-3.800c-.3-.600.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.600-.5-.5-.7-.5h-.6a1.200 1.200 0 0 0-.9.400 3.700 3.700 0 0 0-1.100 2.700c0 1.600 1.200 3.200 1.300 3.400s2.300 3.600 5.600 5c2 .9 2.800.9 3.800.8.600-.1 1.900-.8 2.200-1.500s.3-1.400.2-1.500-.3-.2-.6-.4Z"/></svg>)
interface P { message?: string; label?: string; floating?: boolean; ghost?: boolean; className?: string }
export default function WhatsAppButton({ message = generalMessage, label = 'CONTACT US ON WHATSAPP', floating, ghost, className = '' }: P) {
  if (floating) return (
    <a href={waLink(message)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105"><Icon /></a>)
  return (<a href={waLink(message)} target="_blank" rel="noreferrer" className={`${ghost ? 'btn-ghost' : 'btn-warm'} ${className}`}><Icon />{label}</a>)
}
