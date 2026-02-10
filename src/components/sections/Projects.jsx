import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from "../../content/en"
import jp from "../../content/jp"
import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function Projects() {
  const { language } = useLanguage()
  const content = language === 'jp' ? jp : en
  return (
    <section id="projects" className="section">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Selected AI and data projects focused on real-world systems, applied analytics, and production-minded engineering."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {content.projects.map((project) => (
            <Card key={project.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                  {project.type ? (
                    <div className="mt-3">
                      <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                        {project.type}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {project.impact ? (
                <p className="mt-3 text-sm leading-relaxed text-foreground">
                  <span className="text-accent">Impact:</span> {project.impact}
                </p>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {(project.technologies || []).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button variant="outline" href={project.githubUrl || '#'}>
                  GitHub
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
