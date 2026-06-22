import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from "../../content/en"
import jp from "../../content/jp"
import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function WhatIBuild() {
  const { language } = useLanguage()
  const isJP = language === 'jp'
  const content = isJP ? jp : en
  return (
    <section id="what-i-build" className="relative section overflow-hidden">
      {/* JP Mode Overlay - Even Section */}
      {isJP && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'rgba(12, 8, 5, 0.85)' }}
        />
      )}

      <Container className="relative z-10">
        <SectionTitle
          title={content.whatIBuild.heading}
          subtitle={content.whatIBuild.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {content.whatIBuild.items.map((item) => (
            <Card 
              key={item.id} 
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
              <h3 className={`text-lg font-semibold ${isJP ? 'text-white/92' : 'text-foreground'}`}>
                {item.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {(item.tech || []).map((tech, index) => (
                  <span
                    key={index}
                    className={`rounded-full border px-2.5 py-1 text-xs transition-colors duration-500 hover:border-accent/40 ${
                      isJP 
                        ? 'text-white/65' 
                        : 'text-muted hover:bg-accent/10'
                    }`}
                    style={{
                      ...(isJP ? {
                        borderColor: 'rgba(232, 93, 58, 0.2)',
                        backgroundColor: 'rgba(232, 93, 58, 0.08)'
                      } : {
                        borderColor: 'rgba(45, 212, 191, 0.18)',
                        backgroundColor: 'rgba(45, 212, 191, 0.07)'
                      })
                    }}
                  >
                    {tech}
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
