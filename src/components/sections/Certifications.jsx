import certifications from '../../data/certifications.js'
import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <Container>
        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications in AI, data science, web development, and technical skills."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.id}>
              <h3 className="text-base font-semibold text-foreground">
                {cert.title}
              </h3>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
