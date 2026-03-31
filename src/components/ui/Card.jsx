import { useLanguage } from "../../contexts/LanguageContext.jsx"

export default function Card({ className = '', children, ...props }) {
  const { language } = useLanguage()
  const isJP = language === 'jp'

  return (
    <div
      className={`glass-card glass-card-hover p-6 transition-all duration-300 ${className}`}
      style={isJP ? {
        background: 'rgba(8, 12, 28, 0.90)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.5)'
      } : {}}
      {...props}
    >
      {children}
    </div>
  )
}
