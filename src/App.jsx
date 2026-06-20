import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Problems from './components/sections/Problems'
import HowWeHelp from './components/sections/HowWeHelp'
import FeaturedProducts from './components/sections/FeaturedProducts'
import Benefits from './components/sections/Benefits'
import About from './components/sections/About'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import CTA from './components/sections/CTA'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <HowWeHelp />
        <FeaturedProducts />
        <Benefits />
        <About />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
