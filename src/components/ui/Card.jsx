export default function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`group rounded-2xl border border-border bg-card p-6 shadow-glass backdrop-blur transition-all duration-200 hover:bg-card-hover hover:shadow-glass-hover ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
