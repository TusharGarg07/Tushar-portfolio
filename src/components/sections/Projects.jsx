import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from "../../content/en"
import jp from "../../content/jp"
import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'

export default function Projects() {
  const { language } = useLanguage()
  const isJP = language === 'jp'
  const content = isJP ? jp : en
  return (
    <section id="projects" className="relative section overflow-hidden">
      {/* JP Mode Overlay - Even Section */}
      {isJP && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'rgba(8, 16, 35, 0.85)' }}
        />
      )}

      <Container className="relative z-10">
        <SectionTitle
          title={isJP ? "プロジェクト" : "Projects"}
          subtitle={isJP ? "実環境での動作、応用分析、および実用的なエンジニアリングに焦点を当てたAIおよびデータプロジェクトの選集。" : "Selected AI and data projects focused on real-world systems, applied analytics, and production-minded engineering."}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {content.projects.map((project) => (
            <Card key={project.id} className="transition-all duration-500 hover:border-accent/40">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className={`text-lg font-semibold leading-snug ${isJP ? 'text-white/92' : 'text-foreground'}`}>
                    {project.title}
                  </h3>
                  {project.type ? (
                    <div className="mt-3">
                      <span 
                        className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-all duration-500"
                        style={{ 
                          borderColor: isJP ? 'rgba(232, 93, 58, 0.3)' : 'rgb(34 211 238 / 0.3)',
                          backgroundColor: isJP ? 'rgba(232, 93, 58, 0.1)' : 'rgb(34 211 238 / 0.1)',
                          color: isJP ? '#e85d3a' : 'rgb(34 211 238)'
                        }}
                      >
                        {project.type}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>

              <p className={`mt-4 text-sm leading-relaxed ${isJP ? 'text-white/75' : 'text-muted'}`}>
                {project.description}
              </p>

              {project.impact ? (
                <p className={`mt-3 text-sm leading-relaxed ${isJP ? 'text-white/92' : 'text-foreground'}`}>
                  <span 
                    className="transition-colors duration-500"
                    style={{ color: isJP ? '#e85d3a' : 'rgb(34 211 238)' }}
                  >
                    Impact:
                  </span> {project.impact}
                </p>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {(project.technologies || []).map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border border-border bg-card px-2.5 py-1 text-xs transition-colors duration-500 hover:border-accent/40 ${isJP ? 'text-white/50' : 'text-muted'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button variant="outline" href={project.githubUrl || '#'} style={isJP ? { backgroundColor: 'rgba(5, 10, 20, 0.5)' } : {}}>
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
