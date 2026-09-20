import { cn } from '@/lib/utils'

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-sans font-semibold tracking-[0.24em] text-ivory',
        className,
      )}
    >
      CAT<span className="text-gold">Λ</span>LS
    </span>
  )
}
