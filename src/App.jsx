import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import WhatIBuild from './components/sections/WhatIBuild.jsx'
import Projects from './components/sections/Projects.jsx'
import Experience from './components/sections/Experience.jsx'
import Skills from './components/sections/Skills.jsx'
import About from './components/sections/About.jsx'
import Certifications from './components/sections/Certifications.jsx'
import Languages from './components/sections/Languages.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext.jsx"
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function GlobalBackground() {
  const { language } = useLanguage()
  const isJP = language === 'jp'

  return (
    <div 
      className="fixed inset-0 -z-50 transition-[background] duration-700 ease-in-out"
      style={{
        backgroundImage: isJP ? "url('/japan-bg.png')" : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0b1120',
        ...(isJP ? {} : {
          backgroundImage: 'radial-gradient(rgba(45,212,191,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        })
      }}
    >
      <AnimatePresence>
        {isJP && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
            style={{
              background: 'rgba(15, 8, 5, 0.4)' // Reduced global overlay to let individual section overlays work
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  const mainRef = useRef(null)
  const timerRef = useRef(null)
  const sectionStartRef = useRef(Date.now())

  // Phase-8: Intelligent Session Memory
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const sessionStart = localStorage.getItem('portfolio_session_start')
        if (!sessionStart) {
          localStorage.setItem('portfolio_session_start', String(Date.now()))
        } else {
          // Phase-9: Returning recruiter detection
          localStorage.setItem('portfolio_returning_reviewer', 'true')
        }
      } catch {
        // ignore localStorage errors
      }
    }
  }, [])

  // Phase-8: Check for engaged session (>90 seconds)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkEngagement = () => {
        try {
          const sessionStart = Number(localStorage.getItem('portfolio_session_start')) || 0
          const sessionDuration = (Date.now() - sessionStart) / 1000
          
          if (sessionDuration > 90) {
            localStorage.setItem('portfolio_engaged_session', 'true')
          }
          
          // Phase-9: Detect serious reviewer
          if (sessionDuration > 120) {
            const viewedRaw = localStorage.getItem('portfolio_sections_viewed')
            const viewed = viewedRaw ? JSON.parse(viewedRaw) : []
            if (Array.isArray(viewed) && viewed.length >= 3) {
              localStorage.setItem('portfolio_serious_reviewer', 'true')
            }
          }
        } catch {
          // ignore localStorage errors
        }
      }

      const intervalId = window.setInterval(checkEngagement, 30000) // check every 30 seconds
      return () => window.clearInterval(intervalId)
    }
  }, [])

  const getInitialSection = () => {
    if (typeof window === 'undefined') return 'home'

    const hasVisited = localStorage.getItem('portfolio_has_visited')
    if (!hasVisited) {
      localStorage.setItem('portfolio_has_visited', 'true')
      return 'home'
    }

    const hash = window.location.hash.replace('#', '')
    if (hash) return hash

    // High Interest Priority: use high-interest section as secondary default
    const highInterest = localStorage.getItem('portfolio_high_interest_section')
    if (highInterest) return highInterest

    // Phase-8: Adaptive Default Section based on recruiter type
    const recruiterType = localStorage.getItem('portfolio_recruiter_type')
    if (recruiterType) {
      if (recruiterType === 'technical_reviewer') return 'projects'
      if (recruiterType === 'japan_recruiter') return 'languages'
      if (recruiterType === 'hr_scanner') return 'experience'
    }

    const saved = localStorage.getItem('portfolio_active_section')
    const lastVisit = localStorage.getItem('portfolio_last_visit')
    const now = Date.now()

    if (saved && lastVisit && now - Number(lastVisit) < 86400000) {
      return saved
    }

    try {
      const countsRaw = localStorage.getItem('portfolio_section_view_counts')
      const counts = countsRaw ? JSON.parse(countsRaw) : null
      if (counts && typeof counts === 'object') {
        const entries = Object.entries(counts).filter(
          ([k, v]) => typeof k === 'string' && typeof v === 'number'
        )
        if (entries.length) {
          entries.sort((a, b) => b[1] - a[1])
          const mostViewed = entries[0][0]
          if (mostViewed) return mostViewed
        }
      }
    } catch {
      // ignore invalid JSON
    }

    return 'home'
  }

  const [activeSection, setActiveSection] = useState(getInitialSection)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Stop previous timer and accumulate time
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }

      const now = Date.now()
      const elapsed = (now - sectionStartRef.current) / 1000

      try {
        const raw = localStorage.getItem('portfolio_section_time_spent')
        const existing = raw ? JSON.parse(raw) : {}
        const times = typeof existing === 'object' && existing !== null ? existing : {}
        const prev = Number(times[activeSection]) || 0
        times[activeSection] = prev + elapsed
        localStorage.setItem('portfolio_section_time_spent', JSON.stringify(times))

        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.log('Time spent:', times)
        }
      } catch {
        // ignore JSON/localStorage errors
      }

      // Start new timer for current section
      sectionStartRef.current = now
      timerRef.current = window.setInterval(() => {
        // Timer will be stopped on section change
      }, 60000) // dummy interval, just to keep ref alive

      localStorage.setItem('portfolio_active_section', activeSection)

      localStorage.setItem('portfolio_last_visit', String(Date.now()))

      try {
        const raw = localStorage.getItem('portfolio_sections_viewed')
        const existing = raw ? JSON.parse(raw) : []
        const viewed = Array.isArray(existing) ? existing : []

        if (!viewed.includes(activeSection)) {
          viewed.push(activeSection)
        }

        localStorage.setItem('portfolio_sections_viewed', JSON.stringify(viewed))

        const countsRaw = localStorage.getItem('portfolio_section_view_counts')
        const countsExisting = countsRaw ? JSON.parse(countsRaw) : {}
        const counts =
          countsExisting && typeof countsExisting === 'object'
            ? countsExisting
            : {}

        counts[activeSection] = (Number(counts[activeSection]) || 0) + 1
        localStorage.setItem('portfolio_section_view_counts', JSON.stringify(counts))

        // High-interest detection after 3+ section visits
        try {
          const viewedRaw = localStorage.getItem('portfolio_sections_viewed')
          const viewed = viewedRaw ? JSON.parse(viewedRaw) : []
          if (Array.isArray(viewed) && viewed.length >= 3) {
            const countsRaw = localStorage.getItem('portfolio_section_view_counts')
            const counts = countsRaw ? JSON.parse(countsRaw) : {}
            const timesRaw = localStorage.getItem('portfolio_section_time_spent')
            const times = timesRaw ? JSON.parse(timesRaw) : {}

            const mostViewed = Object.entries(counts)
              .filter(([k, v]) => typeof k === 'string' && typeof v === 'number')
              .sort((a, b) => b[1] - a[1])[0]?.[0]

            const longestViewed = Object.entries(times)
              .filter(([k, v]) => typeof k === 'string' && typeof v === 'number')
              .sort((a, b) => b[1] - a[1])[0]?.[0]

            const highInterest = mostViewed === longestViewed ? mostViewed : mostViewed
            if (highInterest) {
              localStorage.setItem('portfolio_high_interest_section', highInterest)
            }
          }
        } catch {
          // ignore JSON/localStorage errors
        }

        // Engagement score
        try {
          const viewCount = viewed.length
          const totalTimeRaw = localStorage.getItem('portfolio_section_time_spent')
          const totalTimeObj = totalTimeRaw ? JSON.parse(totalTimeRaw) : {}
          const totalTime = Object.values(totalTimeObj)
            .filter((v) => typeof v === 'number')
            .reduce((sum, v) => sum + v, 0)
          const score = viewCount * 10 + totalTime / 5
          localStorage.setItem('portfolio_engagement_score', String(score))

          if (import.meta.env.DEV) {
            // eslint-disable-next-line no-console
            console.log('Engagement Score:', score)
          }
        } catch {
          // ignore JSON/localStorage errors
        }

        // DEV-only resume signal
        if (import.meta.env.DEV) {
          try {
            const timesRaw = localStorage.getItem('portfolio_section_time_spent')
            const times = timesRaw ? JSON.parse(timesRaw) : {}
            const projectsTime = Number(times.projects) || 0
            const experienceTime = Number(times.experience) || 0
            const hasVisitedContact = viewed.includes('contact')

            if ((projectsTime > 45 || experienceTime > 45) && !hasVisitedContact) {
              // eslint-disable-next-line no-console
              console.log('Recruiter likely evaluating candidate → Resume recommended')
            }
          } catch {
            // ignore JSON/localStorage errors
          }
        }

        // Phase-7: Dynamic Hero Context
        try {
          const highInterest = localStorage.getItem('portfolio_high_interest_section')
          let heroContext = 'general'
          if (highInterest === 'projects') heroContext = 'projects'
          else if (highInterest === 'experience') heroContext = 'experience'
          localStorage.setItem('portfolio_hero_context', heroContext)
        } catch {
          // ignore localStorage errors
        }

        // Phase-7: Resume Priority Signal
        try {
          const engagementScore = Number(localStorage.getItem('portfolio_engagement_score')) || 0
          const hasVisitedContact = viewed.includes('contact')
          if (engagementScore > 120 && !hasVisitedContact) {
            localStorage.setItem('portfolio_resume_priority', 'true')
            if (import.meta.env.DEV) {
              // eslint-disable-next-line no-console
              console.log('Resume Priority: High engagement, Contact not visited')
            }
          }
        } catch {
          // ignore localStorage errors
        }

        // Phase-7: Recruiter Type Detection
        try {
          const timesRaw = localStorage.getItem('portfolio_section_time_spent')
          const times = timesRaw ? JSON.parse(timesRaw) : {}
          const projectsTime = Number(times.projects) || 0
          const hasVisitedLanguages = viewed.includes('languages')
          const hasVisitedContact = viewed.includes('contact')
          
          let recruiterType = null
          if (projectsTime > 40) {
            recruiterType = 'technical_reviewer'
          } else if (hasVisitedLanguages && hasVisitedContact) {
            recruiterType = 'japan_recruiter'
          } else {
            // Fast navigation detection: check average time per section
            const totalTime = Object.values(times)
              .filter((v) => typeof v === 'number')
              .reduce((sum, v) => sum + v, 0)
            const avgTime = viewed.length > 0 ? totalTime / viewed.length : 0
            if (avgTime < 5) {
              recruiterType = 'hr_scanner'
            }
          }
          
          if (recruiterType) {
            localStorage.setItem('portfolio_recruiter_type', recruiterType)
            if (import.meta.env.DEV) {
              // eslint-disable-next-line no-console
              console.log('Recruiter Type detected:', recruiterType)
            }
          }
        } catch {
          // ignore JSON/localStorage errors
        }

        // Phase-8: Hero Intelligence Context Upgrade
        try {
          const highInterest = localStorage.getItem('portfolio_high_interest_section')
          const recruiterType = localStorage.getItem('portfolio_recruiter_type')
          
          let adaptiveContext = 'general'
          if (highInterest === 'projects' && recruiterType === 'technical_reviewer') {
            adaptiveContext = 'technical_focus'
          } else if (highInterest === 'experience' && recruiterType === 'hr_scanner') {
            adaptiveContext = 'career_focus'
          } else if (highInterest === 'languages' && recruiterType === 'japan_recruiter') {
            adaptiveContext = 'japan_focus'
          }
          
          localStorage.setItem('portfolio_adaptive_context', adaptiveContext)
        } catch {
          // ignore localStorage errors
        }

        // Phase-8: Resume Conversion Signal
        try {
          const engagementScore = Number(localStorage.getItem('portfolio_engagement_score')) || 0
          const hasVisitedContact = viewed.includes('contact')
          if (engagementScore > 150 && !hasVisitedContact) {
            localStorage.setItem('portfolio_resume_recommended', 'true')
            if (import.meta.env.DEV) {
              // eslint-disable-next-line no-console
              console.log('Adaptive Hint: Resume recommended')
            }
          }
        } catch {
          // ignore localStorage errors
        }

        // Phase-9: Resume Conversion Readiness
        try {
          const engagementScore = Number(localStorage.getItem('portfolio_engagement_score')) || 0
          const hasVisitedContact = viewed.includes('contact')
          const sessionStart = Number(localStorage.getItem('portfolio_session_start')) || 0
          const sessionDuration = (Date.now() - sessionStart) / 1000
          
          if (engagementScore > 180 && !hasVisitedContact && sessionDuration > 120) {
            localStorage.setItem('portfolio_conversion_ready', 'true')
            if (import.meta.env.DEV) {
              // eslint-disable-next-line no-console
              console.log('Conversion Ready: High engagement, no contact, long session')
            }
          }
        } catch {
          // ignore localStorage errors
        }

        // Phase-9: Recommended Section Engine
        try {
          const recruiterType = localStorage.getItem('portfolio_recruiter_type')
          const engagementScore = Number(localStorage.getItem('portfolio_engagement_score')) || 0
          
          let recommendedSection = null
          if (recruiterType === 'technical_reviewer' && engagementScore > 100) {
            recommendedSection = 'projects'
          } else if (recruiterType === 'hr_scanner' && engagementScore > 80) {
            recommendedSection = 'experience'
          } else if (recruiterType === 'japan_recruiter' && engagementScore > 90) {
            recommendedSection = 'languages'
          } else if (engagementScore > 120) {
            recommendedSection = 'contact'
          }
          
          if (recommendedSection) {
            localStorage.setItem('portfolio_recommended_section', recommendedSection)
            if (import.meta.env.DEV) {
              // eslint-disable-next-line no-console
              console.log('Recommended Section:', recommendedSection)
            }
          }
        } catch {
          // ignore localStorage errors
        }

        // Phase-9: Interaction Depth Score
        try {
          const viewCount = viewed.length
          const timesRaw = localStorage.getItem('portfolio_section_time_spent')
          const timesObj = timesRaw ? JSON.parse(timesRaw) : {}
          const totalTime = Object.values(timesObj)
            .filter((v) => typeof v === 'number')
            .reduce((sum, v) => sum + v, 0)
          
          const depthScore = viewCount * 15 + totalTime / 3
          localStorage.setItem('portfolio_interaction_depth', String(depthScore))
          
          if (import.meta.env.DEV) {
            // eslint-disable-next-line no-console
            console.log('Interaction Depth Score:', depthScore)
          }
        } catch {
          // ignore JSON/localStorage errors
        }

        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.log('Visited Sections:', viewed)
        }
      } catch {
        // ignore invalid JSON/localStorage
      }

      window.history.replaceState(null, '', `#${activeSection}`)

      const titles = {
        home: 'Tushar Garg | Portfolio',
        'what-i-build': 'What I Build | Tushar Garg',
        projects: 'Projects | Tushar Garg',
        experience: 'Experience | Tushar Garg',
        skills: 'Skills | Tushar Garg',
        about: 'About | Tushar Garg',
        certifications: 'Certifications | Tushar Garg',
        languages: 'Languages | Tushar Garg',
        contact: 'Contact | Tushar Garg',
      }

      document.title = titles[activeSection] || titles.home

      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.log('Section Viewed:', activeSection)
      }

      window.scrollTo(0, 0)
      mainRef.current?.focus()
    }
  }, [activeSection])

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!import.meta.env.DEV) return
    if (typeof window === 'undefined') return

    let timerId

    const reset = () => {
      if (timerId) {
        window.clearTimeout(timerId)
      }
      timerId = window.setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log('Recruiter Hint: Resume available in Contact section')
      }, 60000)
    }

    reset()

    window.addEventListener('mousemove', reset)
    window.addEventListener('keydown', reset)
    window.addEventListener('click', reset)

    return () => {
      if (timerId) {
        window.clearTimeout(timerId)
      }
      window.removeEventListener('mousemove', reset)
      window.removeEventListener('keydown', reset)
      window.removeEventListener('click', reset)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const sections = [
      'home',
      'what-i-build',
      'projects',
      'experience',
      'skills',
      'about',
      'certifications',
      'languages',
      'contact',
    ]

    const onKeyDown = (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return

      setActiveSection((current) => {
        const currentIndex = sections.indexOf(current)
        if (currentIndex === -1) return current

        const nextIndex =
          e.key === 'ArrowRight'
            ? Math.min(sections.length - 1, currentIndex + 1)
            : Math.max(0, currentIndex - 1)

        return sections[nextIndex]
      })
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const onHashChange = () => {
      const next = window.location.hash.replace('#', '') || 'home'
      setActiveSection(next)
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <LanguageProvider>
      <GlobalBackground />
      <div className="min-h-screen bg-transparent text-foreground relative z-0">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              ref={mainRef}
              tabIndex={-1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {activeSection === 'home' && (
                <>
                  <Hero />
                  <WhatIBuild />
                </>
              )}
              {activeSection === 'what-i-build' && <WhatIBuild />}
              {activeSection === 'projects' && <Projects />}
              {activeSection === 'experience' && <Experience />}
              {activeSection === 'skills' && <Skills />}
              {activeSection === 'about' && <About />}
              {activeSection === 'certifications' && <Certifications />}
              {activeSection === 'languages' && <Languages />}
              {activeSection === 'contact' && <Contact />}
            </motion.div>
          </AnimatePresence>
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  )
}
