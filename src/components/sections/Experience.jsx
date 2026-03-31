import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from "../../content/en"
import jp from "../../content/jp"
import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function Experience() {
  const { language } = useLanguage()
  const isJP = language === 'jp'
  const content = isJP ? jp : en
  return (
    <section id="experience" className="relative section overflow-hidden">
      {/* JP Mode Overlay - Odd Section */}
      {isJP && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'rgba(5, 10, 20, 0.72)' }}
        />
      )}

      <Container className="relative z-10">
        <SectionTitle
          title={content.experience.heading}
          subtitle={content.experience.subtitle}
        />

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-gradient-to-b from-accent/50 via-accent/30 to-transparent md:left-[140px] md:block" />

          <div className="space-y-10">
            {content.experience.items.map((item) => (
              <div
                key={item.id}
                className="relative grid gap-4 md:grid-cols-[140px_1fr] md:gap-8"
              >
                {/* Duration - Left side */}
                <div className="flex items-center md:justify-end">
                  <span 
                    className={`text-sm font-medium md:text-right transition-colors duration-500 ${isJP ? 'text-white/92' : 'text-accent'}`}
                    style={{ color: isJP ? '#e85d3a' : undefined }}
                  >
                    {item.duration}
                  </span>
                </div>

                {/* Content - Right side */}
                <div className="relative md:pl-8">
                  {/* Timeline dot */}
                  <div 
                    className="absolute -left-[5px] top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full md:block transition-colors duration-500" 
                    style={{ backgroundColor: isJP ? '#e85d3a' : 'rgb(34 211 238)' }}
                  />

                  <Card 
                    className={`!border-l-[3px] shadow-none transition-all duration-500 ${isJP ? '!bg-[#080c1c]/90 !border-white/15' : '!bg-white/[0.04] !border-white/[0.08] hover:!bg-white/[0.06]'}`}
                    style={{ borderLeftColor: isJP ? '#e85d3a' : 'rgb(34 211 238)' }}
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className={`text-base font-semibold ${isJP ? 'text-white/92' : 'text-foreground'}`}>
                        {item.role}
                      </h3>
                      <p className={`text-sm ${isJP ? 'text-white/75' : 'text-muted'}`}>{item.company}</p>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {(item.points || []).map((bullet, index) => (
                        <li
                          key={index}
                          className={`flex gap-3 text-sm leading-relaxed ${isJP ? 'text-white/75' : 'text-muted'}`}
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full transition-colors duration-500" style={{ backgroundColor: isJP ? '#e85d3a' : 'rgb(34 211 238)' }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
