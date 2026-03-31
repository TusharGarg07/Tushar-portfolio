import Container from '../layout/Container.jsx'
import Button from '../ui/Button.jsx'
import Card from '../ui/Card.jsx'
import useScrollFadeIn from '../../hooks/useScrollFadeIn.js'
import { useLanguage } from "../../contexts/LanguageContext.jsx"
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import en from "../../content/en"
import jp from "../../content/jp"

export default function Hero() {
  const ref = useScrollFadeIn()
  const { language } = useLanguage()
  const content = language === 'jp' ? jp : en
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
  return (
    <section id="hero" className="scroll-mt-24" ref={ref}>
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        </div>

        <Container className="relative flex min-h-screen items-center py-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="animate-fade-up">
                <div className="animate-fade-up-delayed translate-y-0 animate-fade-up duration-700 ease-out">
                  <p className="text-sm font-medium tracking-wide text-muted">
                    {content.hero.greeting}
                  </p>

                  <h2 className="mt-3 font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
                    <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent animate-gradient-slow bg-[length:200%_auto] md:whitespace-nowrap">
                      {nameParts[0]}
                    </span>
                    {nameParts[1] && (
                      <span className="text-foreground md:whitespace-nowrap"> {nameParts[1]}</span>
                    )}
                  </h2>
                  
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
                      🇯🇵 {language === 'jp' ? '日本での就職希望' : 'Seeking Opportunities in Japan'}
                    </div>
                  </div>
                </div>

                <div className="mt-6 h-8 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={roleIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="text-lg font-semibold text-accent"
                    >
                      {content.hero.roles[roleIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                  {content.hero.headline}
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {content.hero.subline}
                </p>

                {/* Animated Stats Row */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {content.hero.stats.map((stat, i) => (
                    <motion.span
                      key={stat}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent-secondary"
                    >
                      {stat}
                    </motion.span>
                  ))}
                </div>

                {/* Hero Adaptive Micro Context */}
                {adaptiveContext && (
                  <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted/70">
                    {language === 'jp' ? (
                      adaptiveContext === 'technical_focus' && '技術評価に最適化されています'
                      || adaptiveContext === 'career_focus' && '実践的な業界貢献に焦点を当てています'
                      || adaptiveContext === 'japan_focus' && '日本ベースの連携に準備済み'
                      || ''
                    ) : (
                      adaptiveContext === 'technical_focus' && 'Optimized for technical evaluation'
                      || adaptiveContext === 'career_focus' && 'Focused on practical industry contribution'
                      || adaptiveContext === 'japan_focus' && 'Prepared for Japan-based collaboration'
                      || ''
                    )}
                  </p>
                )}

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                  {content.hero.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href="#projects" className="transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    {content.hero.buttons.viewProjects}
                  </Button>
                  <Button 
                    variant="outline" 
                    href={language === 'jp' ? '/resume/履歴書_トゥシャール・ガルグ_JN.pdf' : '/resume/Resume_TusharGarg.pdf'} 
                    download={language === 'jp' ? '履歴書_トゥシャール・ガルグ_JN.pdf' : 'Resume_TusharGarg.pdf'}
                    className="transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                  >
                    {content.hero.buttons.downloadResume}
                  </Button>
                  <Button variant="outline" href="#contact" className="transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    {content.hero.buttons.contactMe}
                  </Button>
                </div>

                <p className="mt-6 text-sm text-muted">
                  {content.hero.availability}
                </p>
              </div>

              <div className="animate-fade-up-delayed mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
                <Card>
                  <p className="text-xs font-medium tracking-wide text-muted">
                    {content.hero.cards.focus.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {content.hero.cards.focus.text}
                  </p>
                </Card>
                <Card>
                  <p className="text-xs font-medium tracking-wide text-muted">
                    {content.hero.cards.domains.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {content.hero.cards.domains.text}
                  </p>
                </Card>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md">
                <div
                  className="pointer-events-none absolute -inset-10 rounded-[32px] bg-gradient-to-br from-accent/25 via-transparent to-accent/10 blur-2xl opacity-80 animate-gradient-slow"
                  style={{ backgroundImage: 'linear-gradient(135deg, rgba(34,211,238,0.25), rgba(11,17,32,0), rgba(34,211,238,0.10))' }}
                />

                <div className="relative animate-float-slow rounded-[28px] border border-border/50 bg-card/60 p-8 shadow-glass backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent/80">
                      {language === 'jp' ? 'システム概要' : 'System Overview'}
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
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider">{content.hero.systemStatus.title}</p>
                    <p className="mt-3 text-lg font-bold text-foreground">
                      {content.hero.systemStatus.deployed}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs font-medium text-muted">
                        {content.hero.systemStatus.activeProjects}
                      </p>
                      <span className="h-px flex-1 mx-4 bg-border" />
                      <p className="text-xs font-bold text-accent">
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
