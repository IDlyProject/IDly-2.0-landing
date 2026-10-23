import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Agent from './components/sections/Agent.tsx'
import Faq from './components/sections/Faq.tsx'
import FinalCta from './components/sections/FinalCta.tsx'
import Hero from './components/sections/Hero.tsx'
import Pricing from './components/sections/Pricing.tsx'
import Security from './components/sections/Security.tsx'
import Subscription from './components/sections/Subscription.tsx'
import Trust from './components/sections/Trust.tsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Subscription />
        <Security />
        <Agent />
        <Pricing />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
