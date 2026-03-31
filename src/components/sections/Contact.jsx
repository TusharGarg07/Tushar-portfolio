import { useLanguage } from "../../contexts/LanguageContext.jsx"
import { useEffect, useState } from 'react'
import en from "../../content/en"
import jp from "../../content/jp"
import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import Button from '../ui/Button.jsx'

export default function Contact() {
  const { language } = useLanguage()
  const isJP = language === 'jp'
  const content = isJP ? jp : en
  const resumePath = isJP 
    ? '/resume/履歴書_トゥシャール・ガルグ_JN.pdf'
    : '/resume/Resume_TusharGarg.pdf'
  const [resumeRecommended, setResumeRecommended] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const recommended = localStorage.getItem('portfolio_resume_recommended') === 'true'
        setResumeRecommended(recommended)
      } catch {
        // ignore localStorage errors
      }
    }
  }, [])

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log('Resume path:', resumePath)
  }
  return (
    <section id="contact" className="section">
      <Container>
        <SectionTitle
          title={content.contact.heading}
          subtitle={isJP ? "コラボレーション、機会、または技術的な議論についてのご連絡をお待ちしております。" : "Get in touch for collaboration, opportunities, or technical discussions."}
        />

        <div className="mt-12 text-center">
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-muted">
              {content.contact.message}
            </p>
            
            <a
              href="mailto:tushargarg2425@gmail.com?subject=Portfolio%20Inquiry"
              className="text-base font-medium transition-colors duration-500"
              style={{ color: isJP ? '#e85d3a' : 'rgb(34 211 238)' }}
            >
              tushargarg2425@gmail.com
            </a>
            
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/tushargarg25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/TusharGarg07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted mb-4">
              {content.contact.closing}
            </p>
            <Button
              href={resumePath}
              download={
                isJP
                  ? '履歴書_トゥシャール・ガルグ_JN.pdf'
                  : 'Resume_TusharGarg.pdf'
              }
              className={`px-6 transition-all duration-500 ${
                resumeRecommended
                  ? `animate-pulse shadow-[0_0_20px_${isJP ? 'rgba(232,93,58,0.4)' : 'rgba(34,211,238,0.4)'}]`
                  : ''
              }`}
              style={{
                backgroundColor: isJP ? '#e85d3a' : undefined,
                color: isJP ? '#0b1120' : undefined,
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
