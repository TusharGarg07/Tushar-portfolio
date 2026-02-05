import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import Button from '../ui/Button.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Get in touch for collaboration, opportunities, or technical discussions."
        />

        <div className="mt-12 text-center">
          <div className="space-y-4">
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
            <Button href="/Tushar_Garg_Resume.pdf" download className="px-6">
              Download Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
