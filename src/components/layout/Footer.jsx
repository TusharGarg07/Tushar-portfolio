import { useLanguage } from "../../contexts/LanguageContext.jsx"
import Container from './Container.jsx'

export default function Footer() {
  const { language } = useLanguage()
  const isJP = language === 'jp'

  return (
    <footer 
      className={`relative border-t py-10 overflow-hidden ${isJP ? 'border-white/10' : 'border-border'}`}
    >
      {isJP && (
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: 'rgba(25, 10, 5, 0.75)' }}
        />
      )}
      <Container className="relative z-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className={`text-sm ${isJP ? 'text-white/50' : 'text-muted'}`}>
            © {new Date().getFullYear()} Tushar Garg. {isJP ? '全著作権所有。' : 'All rights reserved.'}
          </p>
          <p className={`text-sm opacity-80 ${isJP ? 'text-white/50' : 'text-muted'}`}>
            {isJP ? 'React & Tailwind CSS で構築。' : 'Built with React & Tailwind CSS.'}
          </p>
        </div>
      </Container>
    </footer>
  )
}
