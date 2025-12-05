import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Dashboard } from './sections/Dashboard'
import { Features } from './sections/Features'
import { TargetAudience } from './sections/TargetAudience'
import { HowItWorks } from './sections/HowItWorks'
import { Benefits } from './sections/Benefits'
import { Pricing } from './sections/Pricing'
import { Testimonials } from './sections/Testimonials'
import { CTA } from './sections/CTA'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Dashboard />
      <Features />
      <TargetAudience />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
