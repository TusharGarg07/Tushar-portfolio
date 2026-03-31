import Container from '../layout/Container.jsx'
import Card from '../ui/Card.jsx'
import SectionTitle from '../ui/SectionTitle.jsx'
import profile from "../../assets/images/profile.jpeg"
import { useLanguage } from "../../contexts/LanguageContext.jsx"
import en from "../../content/en"
import jp from "../../content/jp"

export default function About() {
  const { language } = useLanguage()
  const isJP = language === 'jp'
  const content = isJP ? jp : en
  return (
    <section id="about" className="relative section overflow-hidden">
      {/* JP Mode Overlay - Specific About Overlay */}
      {isJP && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'rgba(15, 8, 5, 0.68)' }}
        />
      )}

      <Container className="relative z-10">
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
            <div className={`${isJP ? '' : 'text-muted'}`}>
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
                <div className="space-y-8">
                  {/* Stylized Quote Block */}
                  <div 
                    className="border-l-[3px] pl-5 py-1 transition-all duration-500"
                    style={{ borderLeftColor: '#e85d3a' }}
                  >
                    <p className="text-[22px] font-light leading-relaxed tracking-wider text-white/90 italic">
                      「動くだけでは足りない。<br />
                      　現場で使えるものをつくる。」
                    </p>
                  </div>

                  {/* Concept Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: '⚙️', label: '専門領域', value: 'ERP・製造AI・環境分析・バイオ' },
                      { icon: '🔁', label: '開発スタイル', value: '試行錯誤と継続的な改善' },
                      { icon: '🎯', label: '目標', value: '日本で実用的なAI開発に貢献' }
                    ].map((card, i) => (
                      <div 
                        key={i}
                        className="bg-white/5 border border-white/10 border-t-2 rounded-lg p-4 transition-all duration-300 hover:bg-white/10"
                        style={{ borderTopColor: '#e85d3a' }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span>{card.icon}</span>
                          <span className="text-[10px] uppercase tracking-widest text-white/40">{card.label}</span>
                        </div>
                        <p className="text-xs font-bold text-white leading-tight">
                          {card.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Clean Closing Sentence */}
                  <p className="text-sm italic text-white/55">
                    データ処理からデプロイまで、一気通貫で開発できるエンジニアを目指しています。
                  </p>
                </div>
              )}
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className={`text-lg font-semibold flex items-center gap-2 ${isJP ? 'text-white/92' : 'text-foreground'}`}>
                <span className="h-px w-8 transition-colors duration-500" style={{ backgroundColor: isJP ? '#e85d3a' : 'rgb(34 211 238)' }} />
                {content.about.education.title}
              </h3>
              <div className="grid gap-4">
                {content.about.education.items.map((item, index) => (
                  <div key={index} className={`rounded-xl border p-4 backdrop-blur-sm transition-all hover:border-accent/40 ${isJP ? 'bg-[#080c1c]/90 border-white/15' : 'bg-card/50 border-border'}`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <p className={`font-medium ${isJP ? 'text-white/92' : 'text-foreground'}`}>{item.degree}</p>
                        <p className={`text-sm ${isJP ? 'text-white/75' : 'text-muted'}`}>{item.institution}</p>
                      </div>
                      <div className="text-right">
                        {item.duration && <p className="text-xs text-white/50">{item.duration}</p>}
                        <p className="text-xs font-medium transition-colors duration-500" style={{ color: isJP ? '#e85d3a' : 'rgb(34 211 238)' }}>{item.score}</p>
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
