import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Team from "./components/Team"
import Projects from "./components/Projects"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

