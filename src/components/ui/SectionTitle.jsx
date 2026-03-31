import { useLanguage } from "../../contexts/LanguageContext.jsx"

export default function SectionTitle({ title, subtitle }) {
  const { language } = useLanguage()
  const isJP = language === 'jp'

  return (
    <div>
      <h2 
        className={`text-3xl font-bold tracking-tight sm:text-4xl transition-all duration-500 ${
          isJP ? 'text-white/92' : ''
        }`}
        style={{
          ...(isJP ? {} : {
            background: 'linear-gradient(135deg, #ffffff 0%, #2dd4bf 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          })
        }}
      >
        {title}
      </h2>
      <div 
        className="mt-2 rounded-full transition-all duration-500" 
        style={{ 
          width: '48px',
          height: '3px',
          background: isJP 
            ? '#e85d3a' 
            : 'linear-gradient(90deg, #2dd4bf, #6366f1)',
          borderRadius: '2px'
        }}
      />
      {subtitle ? (
        <p className={`mt-4 max-w-2xl text-sm leading-relaxed ${isJP ? 'text-white/50' : 'text-muted'}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
