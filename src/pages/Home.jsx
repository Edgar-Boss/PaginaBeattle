import Hero from '../components/sections/Hero'
import Problems from '../components/sections/Problems'
import HowWeHelp from '../components/sections/HowWeHelp'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import Benefits from '../components/sections/Benefits'
import WhoWeAre from '../components/sections/WhoWeAre'
import About from '../components/sections/About'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <HowWeHelp />
      <FeaturedProducts />
      <Benefits />
      <WhoWeAre />
      <About />
      <FAQ />
      <Contact />
      <CTA />
    </>
  )
}
