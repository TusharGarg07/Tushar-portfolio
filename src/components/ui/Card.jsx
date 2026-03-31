import { useLanguage } from "../../contexts/LanguageContext.jsx"

export default function Card({ className = '', children, ...props }) {
  const { language } = useLanguage()
  const isJP = language === 'jp'

  return (
    <div
      className={`glass-card glass-card-hover p-6 transition-all duration-300 ${className}`}
      style={isJP ? {
        background: 'rgba(35, 15, 8, 0.55)',
        border: '1px solid rgba(232, 93, 58, 0.15)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.5)'
      } : {}}
      {...props}
    >
      {children}
    </div>
  )
}
