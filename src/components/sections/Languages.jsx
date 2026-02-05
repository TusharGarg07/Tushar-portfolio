import languages from '../../data/languages.js'
import Container from '../layout/Container.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function Languages() {
  return (
    <section id="languages" className="section">
      <Container>
        <SectionTitle
          title="Languages"
          subtitle="Professional language proficiency for international collaboration."
        />

        <div className="mt-12 space-y-4">
          {languages.map((language) => (
            <div
              key={language.id}
              className="flex items-center justify-between border-b border-border/50 pb-3"
            >
              <span className="text-base font-medium text-foreground">
                {language.name}
              </span>
              <span className="text-sm text-muted">{language.proficiency}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
