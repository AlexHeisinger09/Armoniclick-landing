import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Dashboard } from './sections/Dashboard'
import { Features } from './sections/Features'
import { Benefits } from './sections/Benefits'
import { Pricing } from './sections/Pricing'
import { Testimonials } from './sections/Testimonials'
import { CTA } from './sections/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Dashboard />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
