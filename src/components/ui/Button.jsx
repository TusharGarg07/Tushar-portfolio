const base =
  'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'bg-accent text-background hover:bg-accent/90',
  outline:
    'border border-border bg-card text-foreground hover:bg-card-hover',
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
