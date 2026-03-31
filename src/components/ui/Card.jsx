export default function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`glass-card glass-card-hover p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
