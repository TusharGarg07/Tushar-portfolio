import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from '../content/en.js'
import jp from '../content/jp.js'
import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function Skills() {
  const { language } = useLanguage()
  const content = language === 'jp' ? jp : en
  return (
    <section id="skills" className="section">
      <Container>
        <SectionTitle
          title="Skills"
          subtitle="Technical expertise across AI, data analysis, full stack development, and bioinformatics."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.skills.map((skillCategory) => (
            <Card key={skillCategory.id}>
              <h3 className="text-base font-bold text-accent mb-2">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(skillCategory.items || []).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
