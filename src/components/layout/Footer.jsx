import { useLanguage } from "../../contexts/LanguageContext.jsx"
import Container from './Container.jsx'

export default function Footer() {
  const { language } = useLanguage()
  const isJP = language === 'jp'

  return (
    <footer className={`border-t py-10 ${isJP ? 'border-white/10' : 'border-border'}`}>
      <Container>
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
