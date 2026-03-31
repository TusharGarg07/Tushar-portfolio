const base =
  'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 active:scale-95'

const variants = {
  primary: 'bg-accent text-background hover:bg-accent/90 hover:shadow-accent-glow hover:-translate-y-0.5',
  outline:
    'border border-border bg-card/50 backdrop-blur-sm text-foreground hover:bg-card-hover hover:border-accent/40 hover:shadow-glass-hover hover:-translate-y-0.5',
  ghost: 'text-muted hover:text-foreground hover:bg-white/5',
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

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
