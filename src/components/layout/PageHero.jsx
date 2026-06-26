import Badge from '../ui/Badge'

export default function PageHero({ badge, title, description }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {badge && <Badge className="mb-6">{badge}</Badge>}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.1]">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
