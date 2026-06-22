import Container from '../layout/Container.jsx'
import Button from '../ui/Button.jsx'
import Card from '../ui/Card.jsx'
import useScrollFadeIn from '../../hooks/useScrollFadeIn.js'
import { useLanguage } from "../../contexts/LanguageContext.jsx"
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import profile from "../../assets/images/profile.jpeg"
import en from "../../content/en"
import jp from "../../content/jp"

function CountUp({ end, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const endNum = parseInt(end)
      if (isNaN(endNum)) {
        setCount(end)
        return
      }
      const totalMiliseconds = duration * 1000
      const incrementTime = totalMiliseconds / endNum
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= endNum) clearInterval(timer)
      }, incrementTime)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{isNaN(parseInt(end)) ? end : count}{suffix}</span>
}

export default function Hero() {
  const ref = useScrollFadeIn()
  const { language } = useLanguage()
  const isJP = language === 'jp'
  const content = isJP ? jp : en
  const nameParts = content.hero.name.split(' ')
  const [adaptiveContext, setAdaptiveContext] = useState(null)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % content.hero.roles.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [content.hero.roles.length])

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

  if (isJP) {
    return (
      <section 
        id="hero" 
        className="relative scroll-mt-24 min-h-screen flex items-center" 
        ref={ref}
      >
        {/* JP Mode Overlay */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'rgba(15, 8, 5, 0.70)' }}
        />

        <div className="relative z-10 w-full">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
          </div>

          <Container className="relative z-10 py-20 lg:py-32">
            <div className="grid w-full items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="animate-fade-up">
                  <div className="animate-fade-up-delayed translate-y-0 animate-fade-up duration-700 ease-out">
                    <p className="text-sm font-medium tracking-wide text-white/50">
                      {content.hero.greeting}
                    </p>

                    <h2 className="mt-3 font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
                      <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent animate-gradient-slow bg-[length:200%_auto] md:whitespace-nowrap">
                        {nameParts[0]}
                      </span>
                      {nameParts[1] && (
                        <span className="text-white/92 md:whitespace-nowrap"> {nameParts[1]}</span>
                      )}
                    </h2>
                    
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <div 
                        className="inline-flex items-center rounded-full border px-3 py-1 text-xs transition-colors duration-500"
                        style={{ 
                          borderColor: '#e85d3a',
                          color: '#e85d3a'
                        }}
                      >
                        🇯🇵 日本での就職希望
                      </div>
                    </div>
                  </div>

                  {/* Primary Identity: Software Engineer (Japanese) */}
                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-white/92 sm:text-6xl">
                    {content.hero.headline}
                  </h1>

                  {/* Rotating Roles (Supporting Info) */}
                  <div className="mt-4 h-8 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={roleIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg font-semibold transition-colors duration-500"
                        style={{ color: '#e85d3a' }}
                      >
                        {content.hero.roles[roleIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Tagline */}
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                    {content.hero.subline}
                  </p>

                  {/* Animated Stats Row */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {content.hero.stats.map((stat, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="inline-flex items-center rounded-full border bg-white/5 px-3 py-1 text-xs font-medium transition-colors duration-500"
                        style={{ 
                          borderColor: '#e85d3a40',
                          color: '#e85d3a'
                        }}
                      >
                        {typeof stat === 'string' ? stat : `${stat.number}${stat.suffix || ''} ${stat.label}`}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hero Adaptive Micro Context */}
                  {adaptiveContext && (
                    <p className="mt-4 max-w-2xl text-[10px] uppercase tracking-widest text-white/50">
                      {adaptiveContext === 'technical_focus' && '技術評価に最適化されています'
                      || adaptiveContext === 'career_focus' && '実践的な業界貢献に焦点を当てています'
                      || adaptiveContext === 'japan_focus' && '日本ベースの連携に準備済み'
                      || ''}
                    </p>
                  )}

                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
                    {content.hero.description}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <Button href="#projects" className="transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                      {content.hero.buttons.viewProjects}
                    </Button>
                    <Button 
                      variant="outline" 
                      href='/resume/履歴書_ガルグ・トゥシャール7.pdf' 
                      download='履歴書_ガルグ・トゥシャール7.pdf'
                      className="transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                      style={{ backgroundColor: 'rgba(5, 10, 20, 0.5)' }}
                    >
                      {content.hero.buttons.downloadResume}
                    </Button>
                    <Button variant="outline" href="#contact" className="transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]" style={{ backgroundColor: 'rgba(5, 10, 20, 0.5)' }}>
                      {content.hero.buttons.contactMe}
                    </Button>
                  </div>

                  <p className="mt-6 text-sm text-white/50">
                    {content.hero.availability}
                  </p>
                  {/* Technologies Row */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {content.hero.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-white/75 border border-white/10 rounded-full"
                        style={{ borderColor: '#e85d3a40' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative mx-auto w-full max-w-md">
                  <div
                    className="pointer-events-none absolute -inset-10 rounded-[32px] bg-gradient-to-br from-accent/25 via-transparent to-accent/10 blur-2xl opacity-80 animate-gradient-slow"
                    style={{ backgroundImage: 'linear-gradient(135deg, rgba(34,211,238,0.25), rgba(11,17,32,0), rgba(34,211,238,0.10))' }}
                  />

                  <div className="relative animate-float-slow rounded-[28px] border border-white/10 bg-[#080c1c]/90 p-8 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-widest text-accent/80">
                        システム概要
                      </p>
                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary animate-pulse [animation-delay:200ms]" />
                      </div>
                    </div>

                    <div className="mt-8 space-y-5">
                      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                        <div className="h-full w-4/5 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
                      </div>
                      <div className="h-2 w-3/4 rounded-full bg-white/5 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%', animationDelay: '400ms' }} />
                        <div className="h-full w-3/5 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
                      </div>
                      <div className="h-2 w-5/6 rounded-full bg-white/5 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%', animationDelay: '800ms' }} />
                        <div className="h-full w-2/3 bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
                      </div>
                    </div>

                    <div className="mt-10 grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-20 rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-accent/40 hover:bg-accent/5 group overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%', animationDelay: `${i * 300}ms` }} />
                          <div className="h-full w-full flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity">
                            <div className="h-8 w-8 rounded-lg bg-accent/20 border border-accent/20" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 rounded-2xl border border-accent/20 bg-accent/5 p-5 transition-all duration-300 hover:bg-accent/10">
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{content.hero.systemStatus.title}</p>
                      <p className="mt-3 text-lg font-bold text-white/92">
                        {content.hero.systemStatus.deployed}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-xs font-medium text-white/50">
                          {content.hero.systemStatus.activeProjects}
                        </p>
                        <span className="h-px flex-1 mx-4 bg-white/10" />
                        <p 
                          className="text-xs font-bold transition-colors duration-500"
                          style={{ color: '#e85d3a' }}
                        >
                          {content.hero.systemStatus.focus}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    )
  }

  // Redesigned EN Mode
  return (
    <section id="hero" className="scroll-mt-24" ref={ref}>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Blobs */}
        <div className="pointer-events-none absolute inset-0">
          {/* EN Mode: Add radial gradient glows */}
          {!isJP && (
            <>
              <div 
                className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-100"
                style={{
                  background: 'radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />
              <div 
                className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full opacity-100"
                style={{
                  background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />
            </>
          )}
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <Container className="relative flex min-h-screen flex-col justify-center py-20 lg:py-32">
          <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-center">
            {/* LEFT COLUMN: Photo + Name + Role + CTA */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Photo with floating animation */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                  className="relative inline-block"
                >
                  <div className="absolute -inset-1 rounded-[2.5rem] bg-accent/20 blur-xl opacity-50" />
                  <img
                    src={profile}
                    alt="Tushar Garg"
                    className="relative h-48 w-48 rounded-[2.5rem] border-2 border-accent/30 object-cover shadow-2xl lg:h-64 lg:w-64"
                  />
                  <div className="absolute -bottom-2 -right-2 rounded-full bg-background/80 p-2 backdrop-blur-sm border border-border">
                    <span className="text-xl">🇯🇵</span>
                  </div>
                </motion.div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted">
                    {content.hero.greeting}
                  </p>
                  <h2 className="text-5xl font-extrabold tracking-tight text-foreground lg:text-7xl">
                    {content.hero.name}
                  </h2>
                  {/* Primary Identity: Software Engineer */}
                  <h3 className="text-3xl font-bold text-foreground lg:text-4xl">
                    {content.hero.headline}
                  </h3>
                </div>

                {/* Rotating Roles (Supporting Info) */}
                <div className="h-8 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={roleIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="text-lg font-semibold text-accent lg:text-xl"
                    >
                      {content.hero.roles[roleIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Tagline */}
                <p className="text-base text-muted max-w-xl">
                  {content.hero.subline}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button href="#projects" className="px-8 shadow-accent-glow">
                    {content.hero.buttons.viewProjects}
                  </Button>
                  <Button variant="outline" href="/resume/TusharGarg_Resume.pdf" download="TusharGarg_Resume.pdf">
                    {content.hero.buttons.downloadResume}
                  </Button>
                  
                  <div className="flex items-center gap-4 ml-2">
                    {content.hero.socialLinks.map((link) => (
                      <a
                        key={link.platform}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-all hover:scale-110"
                        title={link.platform}
                      >
                        {link.platform === 'LinkedIn' && <FaLinkedin className="h-5 w-5" />}
                        {link.platform === 'GitHub' && <FaGithub className="h-5 w-5" />}
                        {link.platform === 'Email' && <FaEnvelope className="h-5 w-5" />}
                      </a>
                    ))}
                  </div>
                </div>
                {/* Technologies Row */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {content.hero.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-muted border border-border rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Quick Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {content.hero.quickCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  <Card className="hover:-translate-y-1 transition-all duration-300 border-accent/5 hover:border-accent/20">
                    <p className="text-[10px] font-bold tracking-widest text-accent uppercase mb-2">
                      {card.label}
                    </p>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted mb-4">
                      {card.text}
                    </p>
                    <a
                      href={card.linkHref}
                      className="text-xs font-bold text-accent hover:underline inline-flex items-center"
                    >
                      {card.linkText}
                    </a>
                  </Card>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-2"
              >
                <p className="text-[10px] font-bold tracking-widest text-muted uppercase mb-4">
                  FOLLOW ME
                </p>
                <div className="flex gap-4">
                  {content.hero.socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 text-muted transition-all hover:border-accent/40 hover:text-accent hover:shadow-accent-glow"
                    >
                      {link.platform === 'LinkedIn' && <FaLinkedin className="h-5 w-5" />}
                      {link.platform === 'GitHub' && <FaGithub className="h-5 w-5" />}
                      {link.platform === 'Email' && <FaEnvelope className="h-5 w-5" />}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* STATS BAR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 lg:mt-32 w-full border-t border-border pt-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {content.hero.stats.map((stat, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {stat}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
