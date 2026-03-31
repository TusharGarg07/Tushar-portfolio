import { useLanguage } from "../../contexts/LanguageContext.jsx"

export default function SectionTitle({ title, subtitle }) {
  const { language } = useLanguage()
  const isJP = language === 'jp'

  return (
    <div>
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${isJP ? 'text-white/92' : 'text-foreground'}`}>
        {title}
      </h2>
      <div 
        className="mt-3 h-px w-14 transition-colors duration-500" 
        style={{ backgroundColor: isJP ? '#e85d3a' : 'rgb(34 211 238 / 0.8)' }}
      />
      {subtitle ? (
        <p className={`mt-4 max-w-2xl text-sm leading-relaxed ${isJP ? 'text-white/50' : 'text-muted'}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
