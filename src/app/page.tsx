import Navbar from "@/src/app/components/layout/Navbar"
import Hero from "@/src/app/components/sections/Hero"
import Services from "@/src/app/components/sections/Services"
import Portfolio from "./components/sections/Portfolio"
import Process from "./components/sections/Process"
import About from "./components/sections/About"
import CTA from "./components/sections/CTA"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import WhatsAppButton from "./components/ui/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}