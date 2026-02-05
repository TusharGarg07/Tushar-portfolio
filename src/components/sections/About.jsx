import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

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
            <div className="h-64 w-64 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-border/50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
            </div>
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
