import Container from './Container.jsx'
import Button from '../ui/Button.jsx'
import { useLanguage } from "../../contexts/LanguageContext.jsx"
import { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ activeSection = 'home', setActiveSection = () => {} }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const { language, toggleLanguage } = useLanguage()
  const [adaptiveContext, setAdaptiveContext] = useState(null)

  useEffect(() => {
    setActiveId(activeSection)
  }, [activeSection])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const context = localStorage.getItem('portfolio_adaptive_context')
        setAdaptiveContext(context)
      } catch {
        // ignore localStorage errors
      }
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'border-b border-border bg-background/70 backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#hero"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault()
              setActiveId('home')
              setActiveSection('home')
            }}
          >
            <span className="text-sm font-semibold tracking-wide text-foreground">
              Portfolio
            </span>
            <span className="text-xs text-muted">AI/Data Engineer</span>
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const sectionKey = id === 'hero' ? 'home' : id
              const isActive = sectionKey && sectionKey === activeId

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveId(sectionKey)
                    setActiveSection(sectionKey)
                  }}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-foreground'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-px w-full bg-accent transition-all duration-300 ease-out ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </span>
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3 mr-2">
              <a
                href="https://www.linkedin.com/in/tushargarg25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-all duration-300 hover:scale-115"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/TusharGarg07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-all duration-300 hover:scale-115"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm transition-all hover:bg-accent/10"
            >
              <span className={`transition-colors ${
                language === 'en' ? 'text-foreground font-medium' : 'text-muted'
              }`}>
                EN
              </span>
              <span className="text-muted">|</span>
              <span className={`transition-colors ${
                language === 'jp' ? 'text-foreground font-medium' : 'text-muted'
              }`}>
                日本語
              </span>
            </button>
            <Button
              variant="outline"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                setActiveId('contact')
                setActiveSection('contact')
              }}
              className="hidden sm:inline-flex"
            >
              Contact
            </Button>
            
            {/* Navbar Adaptive Focus Label */}
            {adaptiveContext && (
              <div className="hidden lg:block text-xs text-muted">
                {language === 'jp' ? (
                  <span>● 現在のフォーカス：{adaptiveContext}</span>
                ) : (
                  <span>● Active Focus: {adaptiveContext}</span>
                )}
              </div>
            )}
          </div>
        </div>

        <nav className="-mt-1 flex flex-wrap gap-x-4 gap-y-2 pb-3 md:hidden">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const sectionKey = id === 'hero' ? 'home' : id
            const isActive = sectionKey && sectionKey === activeId

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveId(sectionKey)
                  setActiveSection(sectionKey)
                }}
                className={`text-xs transition-colors ${
                  isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </Container>
    </header>
  )
}
