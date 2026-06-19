import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Services from "./components/Services"
import WhyWorkWithMe from "./components/WhyWorkWithMe"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
