import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import Projects from './components/sections/Projects.jsx'
import Experience from './components/sections/Experience.jsx'
import Skills from './components/sections/Skills.jsx'
import About from './components/sections/About.jsx'
import Certifications from './components/sections/Certifications.jsx'
import Languages from './components/sections/Languages.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'
import { LanguageProvider } from "./contexts/LanguageContext"

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Certifications />
          <Languages />
          <Contact />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  )
}
