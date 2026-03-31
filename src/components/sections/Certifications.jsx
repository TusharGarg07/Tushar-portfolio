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
            <Card key={cert.id} className="hover:border-accent/40 transition-colors duration-500" style={{ borderLeftColor: isJP ? '#e85d3a' : 'rgb(34 211 238)', borderLeftWidth: '2px' }}>
              <h3 className={`text-base font-semibold ${isJP ? 'text-white/92' : 'text-foreground'}`}>
                {cert.title}
              </h3>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
