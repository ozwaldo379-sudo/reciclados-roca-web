import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import CircularitySection from './components/CircularitySection'
import Industries from './components/Industries'
import Compliance from './components/Compliance'
import Benefits from './components/Benefits'
import Coverage from './components/Coverage'
import Clients from './components/Clients'
import LeadForm from './components/LeadForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <CircularitySection />
        <Industries />
        <Compliance />
        <Benefits />
        <Coverage />
        <Clients />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
