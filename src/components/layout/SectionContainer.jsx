export default function SectionContainer({
  id,
  children,
  className = '',
  dark = false,
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 sm:py-24 lg:py-28 ${dark ? 'bg-surface-950 text-white' : ''} ${className}`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHeader({ badge, title, description, dark = false, centered = true }) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}>
      {badge && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-wider ${dark ? 'text-brand-400' : 'text-brand-600'}`}
        >
          {badge}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
