import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from "../../content/en"
import jp from "../../content/jp"
import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function Skills() {
  const { language } = useLanguage()
  const isJP = language === 'jp'
  const content = isJP ? jp : en
  return (
    <section id="skills" className="relative section overflow-hidden">
      {/* JP Mode Overlay - Even Section */}
      {isJP && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'rgba(8, 16, 35, 0.85)' }}
        />
      )}

      <Container className="relative z-10">
        <SectionTitle
          title={isJP ? "スキル" : "Skills"}
          subtitle={isJP ? "AI、データ分析、フルスタック開発、バイオインフォマティクスにおける技術的専門知識。" : "Technical expertise across AI, data analysis, full stack development, and bioinformatics."}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.skills.map((skillCategory) => (
            <Card key={skillCategory.id}>
              <h3 
                className={`text-base font-bold mb-2 transition-colors duration-500 ${isJP ? 'text-white/92' : 'text-accent'}`}
                style={{ color: isJP ? '#e85d3a' : undefined }}
              >
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(skillCategory.items || []).map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border border-border bg-card px-2.5 py-1 text-xs transition-all duration-500 hover:border-accent/40 ${isJP ? 'text-white/75' : 'text-muted'}`}
                    style={{ 
                      borderColor: isJP ? 'rgba(232, 93, 58, 0.1)' : undefined,
                    }}
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
