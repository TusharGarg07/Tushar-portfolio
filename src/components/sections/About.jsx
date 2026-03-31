import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import profile from "../../assets/images/profile.jpeg"
import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from "../../content/en"
import jp from "../../content/jp"

export default function About() {
  const { language } = useLanguage()
  const content = language === 'jp' ? jp : en
  return (
    <section id="about" className="section">
      <Container>
        <SectionTitle
          title={content.about.heading}
          subtitle={content.about.subtitle}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Profile visual */}
          <div className="flex items-center justify-center">
            <img
              src={profile}
              alt="Tushar Garg"
              className="rounded-2xl object-cover w-full h-full shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className={`text-muted`}>
              {language === 'en' ? (
                <ul className="space-y-[12px]">
                  {content.about.paragraphs.map((paragraph, index) => (
                    <li key={index} className="flex gap-3 text-base leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-colors duration-500" style={{ backgroundColor: isJP ? '#e85d3a' : 'rgb(34 211 238)' }} />
                      <span>{paragraph}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-[16px] text-[16px] leading-[1.75]">
                  {content.about.paragraphs.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="h-px w-8 bg-accent" />
                {content.about.education.title}
              </h3>
              <div className="grid gap-4">
                {content.about.education.items.map((item, index) => (
                  <div key={index} className="rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-accent/40">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <p className="font-medium text-foreground">{item.degree}</p>
                        <p className="text-sm text-muted">{item.institution}</p>
                      </div>
                      <div className="text-right">
                        {item.duration && <p className="text-xs text-muted">{item.duration}</p>}
                        <p className="text-xs font-medium text-accent">{item.score}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
