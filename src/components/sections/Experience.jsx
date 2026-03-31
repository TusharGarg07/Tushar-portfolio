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
    <section id="experience" className="section">
      <Container>
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
                    className="text-sm font-medium md:text-right transition-colors duration-500"
                    style={{ color: isJP ? '#e85d3a' : 'rgb(34 211 238)' }}
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
                    className="!bg-white/[0.04] !border-white/[0.08] border-l-[3px] shadow-none hover:!bg-white/[0.06] transition-all duration-500"
                    style={{ borderLeftColor: isJP ? '#e85d3a' : 'rgb(34 211 238)' }}
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted">{item.company}</p>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {(item.points || []).map((bullet, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
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
