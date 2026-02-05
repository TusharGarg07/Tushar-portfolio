export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-14 bg-accent/80" />
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
