import { useLanguage } from '../contexts/LanguageContext.jsx'
import en from '../content/en.js'
import jp from '../content/jp.js'
import Container from '../layout/Container.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function Languages() {
  const { language } = useLanguage()
  const content = language === 'jp' ? jp : en
  return (
    <section id="languages" className="section">
      <Container>
        <SectionTitle
          title="Languages"
          subtitle="Professional language proficiency for international collaboration."
        />

        <div className="mt-12 space-y-4">
          {content.languages.map((language) => (
            <div
              key={language.id}
              className="flex items-center justify-between border-b border-border/50 pb-3"
            >
              <span className="text-base font-medium text-foreground">
                {language.name}
              </span>
              <span className="text-sm text-muted">{language.level}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
