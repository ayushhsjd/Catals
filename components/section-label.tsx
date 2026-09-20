import { cn } from '@/lib/utils'

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-gold',
        className,
      )}
    >
      <span className="h-px w-8 bg-gold/50" aria-hidden />
      {children}
    </span>
  )
}
