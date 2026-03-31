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
          style={{ background: 'rgba(12, 8, 5, 0.78)' }}
        />
      )}

      <Container className="relative z-10">
        <SectionTitle
          title={isJP ? "プロジェクト" : "Projects"}
          subtitle={isJP ? "実環境での動作、応用分析、および実用的なエンジニアリングに焦点を当てたAIおよびデータプロジェクトの選集。" : "Selected AI and data projects focused on real-world systems, applied analytics, and production-minded engineering."}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {content.projects.map((project) => {
            const projectLinks = {
              'ZenKensa': 'https://zenkensa-ai.onrender.com',
              'FinKizuna ERP': 'https://fin-kizuna-erp-i5o9.vercel.app/',
              'VERITAS': 'https://veritas-ai-system.onrender.com/'
            }
            const liveUrl = projectLinks[project.title]
            const hasLiveDemo = !!liveUrl
            
            return (
              <Card 
                key={project.id} 
                className={`transition-all duration-500 ${
                  isJP 
                    ? 'hover:border-[#e85d3a]/40' 
                    : 'hover:border-accent/40 hover:-translate-y-6 hover:shadow-[0_20px_40px_rgba(45,212,191,0.1)]'
                }`}
                style={{
                  ...(isJP ? {} : {
                    background: 'linear-gradient(135deg, rgba(15,20,40,0.9) 0%, rgba(20,28,55,0.9) 100%)',
                    borderTop: '2px solid rgba(45,212,191,0.4)'
                  })
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className={`text-lg font-semibold leading-snug ${isJP ? 'text-white/92' : 'text-foreground'}`}>
                      {hasLiveDemo ? (
                        <a 
                          href={liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 transition-all duration-200"
                          style={{
                            color: 'inherit',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#2dd4bf'
                            e.target.style.textDecoration = 'underline'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = 'inherit'
                            e.target.style.textDecoration = 'none'
                          }}
                        >
                          {project.title}
                          <span 
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            style={{
                              fontSize: '0.7em',
                              marginLeft: '6px',
                              color: '#2dd4bf'
                            }}
                          >
                            ↗
                          </span>
                        </a>
                      ) : (
                        project.title
                      )}
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
                    className={`rounded-full border px-2.5 py-1 text-xs transition-colors duration-500 hover:border-accent/40 ${
                      isJP 
                        ? 'text-white/50' 
                        : 'text-muted hover:bg-accent/15'
                    }`}
                    style={{
                      ...(isJP ? {
                        borderColor: 'rgba(232, 93, 58, 0.3)',
                        backgroundColor: 'rgba(232, 93, 58, 0.1)',
                        color: '#e85d3a'
                      } : {
                        borderColor: 'rgba(45,212,191,0.2)',
                        backgroundColor: 'rgba(45,212,191,0.08)',
                        color: 'rgba(255,255,255,0.8)'
                      })
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {hasLiveDemo ? (
                  <>
                    <Button 
                      href={liveUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={isJP ? { backgroundColor: 'rgba(5, 10, 20, 0.5)' } : {}}
                    >
                      {isJP ? 'デモを見る →' : 'Live Demo →'}
                    </Button>
                    <Button 
                      variant="outline" 
                      href={project.githubUrl || '#'} 
                      className="text-sm"
                      style={isJP ? { backgroundColor: 'rgba(5, 10, 20, 0.5)' } : {}}
                    >
                      GitHub
                    </Button>
                  </>
                ) : (
                  <Button 
                    variant="outline" 
                    href={project.githubUrl || '#'} 
                    style={isJP ? { backgroundColor: 'rgba(5, 10, 20, 0.5)' } : {}}
                  >
                    GitHub
                  </Button>
                )}
              </div>
            </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
