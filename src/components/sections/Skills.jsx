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
          style={{ background: 'rgba(12, 8, 5, 0.78)' }}
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
                className={`text-base font-bold mb-2 transition-colors duration-500 ${
                  isJP 
                    ? 'text-white/92' 
                    : ''
                }`}
                style={{ 
                  color: isJP ? '#e85d3a' : undefined,
                  ...(isJP ? {} : {
                    background: 'linear-gradient(135deg, #ffffff 0%, #2dd4bf 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  })
                }}
              >
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(skillCategory.items || []).map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-2.5 py-1 text-xs transition-all duration-500 hover:border-accent/40 ${
                      isJP 
                        ? 'text-white/75' 
                        : 'text-muted hover:bg-accent/15'
                    }`}
                    style={{ 
                      ...(isJP ? {
                        borderColor: 'rgba(232, 93, 58, 0.1)',
                      } : {
                        borderColor: 'rgba(45,212,191,0.18)',
                        backgroundColor: 'rgba(45,212,191,0.07)'
                      })
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
