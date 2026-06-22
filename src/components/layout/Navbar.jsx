import Container from './Container.jsx'
import Button from '../ui/Button.jsx'
import { useLanguage } from "../../contexts/LanguageContext.jsx"
import { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', labelJp: 'ホーム', href: '#hero' },
  { label: 'Projects', labelJp: 'プロジェクト', href: '#projects' },
  { label: 'Experience', labelJp: '職歴', href: '#experience' },
  { label: 'Skills', labelJp: 'スキル', href: '#skills' },
  { label: 'About', labelJp: '自己紹介', href: '#about' },
  { label: 'Certifications', labelJp: '資格', href: '#certifications' },
  { label: 'Languages', labelJp: '言語', href: '#languages' },
  { label: 'Contact', labelJp: 'お問い合わせ', href: '#contact' },
]

export default function Navbar({ activeSection = 'home', setActiveSection = () => {} }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const { language, toggleLanguage } = useLanguage()
  const isJP = language === 'jp'
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isJP 
            ? 'border-b border-white/10 bg-[#050a14]/92 backdrop-blur-[16px]' 
            : 'border-b border-border backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
      style={{
        ...(isScrolled && isJP ? { borderBottom: '1px solid rgba(255,255,255,0.08)' } : {}),
        ...(isScrolled && !isJP ? {
          background: 'linear-gradient(180deg, rgba(8,12,28,0.98) 0%, rgba(8,12,28,0.85) 100%)',
          borderBottom: '1px solid rgba(45,212,191,0.15)'
        } : {})
      }}
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
                  {!isJP && <span className="text-xs text-muted">Software Engineer</span>}
                  {isJP && <span className="text-[10px] text-muted whitespace-nowrap">ソフトウェアエンジニア</span>}
          </a>

          <nav className="hidden items-center gap-2 md:flex lg:gap-3">
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
                  className={`transition-colors whitespace-nowrap ${
                    isJP ? 'text-[13px]' : 'text-sm'
                  } ${
                    isActive
                      ? 'text-foreground font-medium'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  <span className="relative">
                    {isJP ? link.labelJp : link.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-px w-full transition-all duration-300 ease-out ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ backgroundColor: isJP ? '#e85d3a' : 'rgb(34 211 238)' }}
                    />
                  </span>
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <div className="hidden xl:flex items-center gap-3 mr-1">
              <a
                href="https://www.linkedin.com/in/tushargarg25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-all duration-300 hover:scale-115"
                style={{ color: undefined }} // Let hover state handle it if not JP
                onMouseEnter={(e) => e.currentTarget.style.color = isJP ? '#e85d3a' : 'rgb(34 211 238)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/TusharGarg07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-all duration-300 hover:scale-115"
                onMouseEnter={(e) => e.currentTarget.style.color = isJP ? '#e85d3a' : 'rgb(34 211 238)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>

            <button
              onClick={toggleLanguage}
              className="flex min-w-[70px] lg:min-w-[80px] items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 text-xs lg:text-sm transition-all hover:bg-accent/10 whitespace-nowrap"
            >
              <span className={`transition-colors ${
                language === 'en' ? 'text-foreground font-bold' : 'text-muted'
              }`}>
                EN
              </span>
              <span className="text-muted">|</span>
              <span className={`transition-colors ${
                language === 'jp' ? 'text-foreground font-bold' : 'text-muted'
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
              className="hidden sm:inline-flex px-3 lg:px-5"
              style={{ 
                borderColor: isJP ? '#e85d3a40' : undefined,
                backgroundColor: isJP ? 'rgba(5, 10, 20, 0.5)' : undefined
              }}
            >
              {isJP ? '連絡' : 'Contact'}
            </Button>
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
                {isJP ? link.labelJp : link.label}
              </a>
            )
          })}
        </nav>
      </Container>
    </header>
  )
}
