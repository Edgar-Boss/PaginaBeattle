export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-brand-50 text-brand-700 ring-brand-100',
    dark: 'bg-white/10 text-brand-200 ring-white/10',
    success: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
