import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import profile from "../../assets/images/profile.jpeg"
import { useLanguage } from '../contexts/LanguageContext.jsx'
import en from '../content/en.js'
import jp from '../content/jp.js'

export default function About() {
  const { language } = useLanguage()
  const content = language === 'jp' ? jp : en
  return (
    <section id="about" className="section">
      <Container>
        <SectionTitle
          title={content.about.heading}
          subtitle="Professional introduction and background in AI and Data Analysis."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Profile visual */}
          <div className="flex items-center justify-center">
            <img
              src={profile}
              alt="Tushar Garg"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          {/* Right side - Text content */}
          <div className="flex items-center">
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              {content.about.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
