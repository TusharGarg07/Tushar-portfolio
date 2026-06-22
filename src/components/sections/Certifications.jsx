import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from "../../content/en"
import jp from "../../content/jp"
import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function Certifications() {
  const { language } = useLanguage()
  const isJP = language === 'jp'
  const content = isJP ? jp : en
  return (
    <section id="certifications" className="relative section overflow-hidden">
      {/* JP Mode Overlay - Even Section */}
      {isJP && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'rgba(8, 16, 35, 0.85)' }}
        />
      )}

      <Container className="relative z-10">
        <SectionTitle
          title={isJP ? "資格・認定" : "Certifications"}
          subtitle={isJP ? "AI、データサイエンス、Web開発、およびテクニカルスキルの専門資格。" : "Professional certifications in AI, data science, web development, and technical skills."}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.certifications.map((cert) => (
            <Card 
              key={cert.id} 
              className={`hover:border-accent/40 transition-all duration-500 ${
                isJP 
                  ? '' 
                  : 'hover:shadow-[0_4px_20px_rgba(45,212,191,0.15)] hover:-translate-y-1'
              }`}
              style={{ 
                borderLeftColor: isJP ? '#e85d3a' : '#2dd4bf', 
                borderLeftWidth: '2px'
              }}
            >
              <h3 className={`text-base font-semibold ${isJP ? 'text-white/92' : 'text-foreground'}`}>
                {cert.title}
              </h3>
              <p className={`text-sm mt-1 ${isJP ? 'text-white/65' : 'text-muted'}`}>
                {cert.issuer}
              </p>
              <p className={`text-xs mt-0.5 ${isJP ? 'text-white/50' : 'text-muted/70'}`}>
                {cert.year}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
