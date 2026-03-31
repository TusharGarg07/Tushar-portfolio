import { useLanguage } from "../../contexts/LanguageContext.jsx"

const base =
  'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 active:scale-95'

const variants = {
  primary: 'bg-accent text-background hover:bg-accent/90 hover:shadow-accent-glow hover:-translate-y-0.5',
  outline:
    'border border-border bg-card/50 backdrop-blur-sm text-foreground hover:bg-card-hover hover:border-accent/40 hover:shadow-glass-hover hover:-translate-y-0.5',
  ghost: 'text-muted hover:text-foreground hover:bg-white/5',
}

const jpVariants = {
  primary: 'bg-[#e85d3a] text-[#0b1120] hover:bg-[#e85d3a]/90 hover:shadow-[0_0_20px_rgba(232,93,58,0.4)] hover:-translate-y-0.5',
  outline:
    'border border-white/10 bg-[#050a14]/50 backdrop-blur-sm text-white/92 hover:bg-white/5 hover:border-[#e85d3a]/40 hover:shadow-[0_0_20px_rgba(232,93,58,0.2)] hover:-translate-y-0.5',
  ghost: 'text-white/50 hover:text-white/92 hover:bg-white/5',
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}) {
  const { language } = useLanguage()
  const isJP = language === 'jp'
  
  const currentVariants = isJP ? jpVariants : variants
  const classes = `${base} ${currentVariants[variant] || currentVariants.primary} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
