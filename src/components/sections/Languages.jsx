import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from "../../content/en"
import jp from "../../content/jp"
import Container from '../layout/Container.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function Languages() {
  const { language } = useLanguage()
  const isJP = language === 'jp'
  const content = isJP ? jp : en
  return (
    <section id="languages" className="relative section overflow-hidden">
      {/* JP Mode Overlay - Odd Section */}
      {isJP && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'rgba(5, 10, 20, 0.72)' }}
        />
      )}

      <Container className="relative z-10">
        <SectionTitle
          title={isJP ? "言語" : "Languages"}
          subtitle={isJP ? "国際的なコラボレーションのための専門的な言語能力。" : "Professional language proficiency for international collaboration."}
        />

        <div className="mt-12 space-y-4">
          {content.languages.map((lang, index) => (
            <div
              key={lang.id || index}
              className={`flex items-center justify-between border-b pb-3 ${isJP ? 'border-white/10' : 'border-border/50'}`}
            >
              <span className={`text-base font-medium ${isJP ? 'text-white/92' : 'text-foreground'}`}>
                {lang.name}
              </span>
              <span className={`text-sm ${isJP ? 'text-white/50' : 'text-muted'}`}>{lang.level}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
