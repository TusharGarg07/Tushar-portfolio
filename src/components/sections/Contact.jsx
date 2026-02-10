import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from '../content/en.js'
import jp from '../content/jp.js'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import Button from '../ui/Button.jsx'

export default function Contact() {
  const { language } = useLanguage()
  const content = language === 'jp' ? jp : en
  const resumePath = language === 'jp' 
    ? '/resume/Tushar_Garg_Resume_JP.pdf'
    : '/resume/Tushar_Garg_Resume_EN.pdf'
  return (
    <section id="contact" className="section">
      <Container>
        <SectionTitle
          title={content.contact.heading}
          subtitle="Get in touch for collaboration, opportunities, or technical discussions."
        />

        <div className="mt-12 text-center">
          <div className="space-y-4">
            <p className="text-base leading-relaxed text-muted">
              {content.contact.message}
            </p>
            
            <a
              href="mailto:phenominal0525@gmail.com?subject=Portfolio%20Inquiry"
              className="text-base font-medium text-accent hover:text-accent/80 transition-colors"
            >
              phenominal0525@gmail.com
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
            <a href={resumePath} download className="px-6">
              Download Resume
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
