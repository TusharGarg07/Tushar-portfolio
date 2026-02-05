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
              href="mailto:tushar@example.com"
              className="text-base font-medium text-accent hover:text-accent/80 transition-colors"
            >
              tushar@example.com
            </a>
            
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/tushargarg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/tushargarg"
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
