import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import profile from "../../assets/images/profile.jpg"

export default function About() {
  return (
    <section id="about" className="section">
      <Container>
        <SectionTitle
          title="About Me"
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
              <p>
                I am a Biotechnology student transitioning into AI and Data Analysis, focused on building real-world intelligent systems that <span className="text-accent font-medium">bridge data, software, and physical environments</span>. My work includes <span className="text-accent font-medium">AI-assisted manufacturing inspection systems</span> and <span className="text-accent font-medium">environmental risk intelligence platforms</span> that combine machine learning with practical deployment considerations.
              </p>

              <p>
                I am particularly interested in applying AI and data-driven approaches to <span className="text-foreground font-medium">industrial and environmental problems</span>, where software systems interact with real-world processes and decision-making.
              </p>

              <p>
                Alongside my technical work, I am actively learning <span className="text-foreground font-medium">Japanese (JLPT N3 level)</span> and preparing to work in international and cross-cultural engineering environments.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
