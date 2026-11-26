import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Trips from './pages/Trips'
import Fleet from './pages/Fleet'
import About from './pages/About'

function ScrollTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0) }, [pathname]); return null }

export default function App() {
  return (<>
    <ScrollTop /><Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/testimonials" element={<Navigate to="/about" replace />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <Footer /><WhatsAppButton floating />
  </>)
}
