import Container from '../layout/Container.jsx'
import Button from '../ui/Button.jsx'
import Card from '../ui/Card.jsx'
import useScrollFadeIn from "../../hooks/useScrollFadeIn"

export default function Hero() {
  const ref = useScrollFadeIn()
  return (
    <section id="hero" className="scroll-mt-24" ref={ref}>
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        </div>

        <Container className="relative flex min-h-screen items-center py-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="animate-fade-up">
                <div className="animate-fade-up-delayed translate-y-0 animate-fade-up duration-700 ease-out">
                  <p className="text-sm font-medium tracking-wide text-muted">
                    Hi, I’m
                  </p>

                  <h2 className="mt-3 text-4xl font-bold tracking-tight bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.15)] sm:text-6xl">
                    Tushar Garg
                  </h2>
                </div>

                <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                  Building AI Systems for <span className="text-accent">Manufacturing</span> & <span className="text-accent">Environmental Intelligence</span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  <span className="text-foreground">AI & Data Analysis Intern</span>
                  <span className="mx-2 text-muted">|</span>
                  <span className="text-foreground">Full-Stack Developer</span>
                  <span className="mx-2 text-muted">|</span>
                  <span className="text-foreground">Bioinformatics Background</span>
                </p>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                  Building <span className="text-foreground">AI-driven systems</span> for
                  <span className="text-accent"> manufacturing inspection</span>,
                  <span className="text-accent"> environmental analytics</span>, and
                  real-world data applications.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href="#projects" className="transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">View Projects</Button>
                  <Button variant="outline" href="#" className="transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    Download Resume
                  </Button>
                  <Button variant="outline" href="#contact" className="transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    Contact Me
                  </Button>
                </div>

                <p className="mt-6 text-sm text-muted">
                  Currently open to AI, Data, and Industrial Technology opportunities.
                </p>
              </div>

              <div className="animate-fade-up-delayed mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
                <Card>
                  <p className="text-xs font-medium tracking-wide text-muted">
                    Focus
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Production-minded ML, analytics workflows, and pragmatic engineering.
                  </p>
                </Card>
                <Card>
                  <p className="text-xs font-medium tracking-wide text-muted">
                    Domains
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Manufacturing AI, environmental data, bioinformatics, and full-stack.
                  </p>
                </Card>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md">
                <div
                  className="pointer-events-none absolute -inset-10 rounded-[32px] bg-gradient-to-br from-accent/25 via-transparent to-accent/10 blur-2xl opacity-80 animate-gradient-slow"
                  style={{ backgroundImage: 'linear-gradient(135deg, rgba(34,211,238,0.25), rgba(11,17,32,0), rgba(34,211,238,0.10))' }}
                />

                <div className="relative animate-float-slow rounded-[28px] border border-border bg-card p-6 shadow-glass backdrop-blur">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium tracking-wide text-muted">
                      Abstract Signal
                    </p>
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="h-2 w-4/5 rounded-full bg-white/10" />
                    <div className="h-2 w-3/5 rounded-full bg-white/10" />
                    <div className="h-2 w-2/3 rounded-full bg-white/10" />
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-2xl border border-border bg-white/5" />
                    <div className="h-16 rounded-2xl border border-border bg-white/5" />
                    <div className="h-16 rounded-2xl border border-border bg-white/5" />
                  </div>

                  <div className="mt-8 rounded-2xl border border-border bg-white/5 p-4">
                    <p className="text-xs text-muted">System Status</p>
                    <p className="mt-2 text-sm font-medium text-foreground">
                      AI Systems Deployed
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Active Projects: 4
                    </p>
                    <p className="mt-1 text-xs text-accent">
                      Focus: Industrial & Environmental AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
