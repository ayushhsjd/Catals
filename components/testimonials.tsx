import { Quote } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

const reviewImages = [
  {
    src: '/reviews/review-1.jpg',
    alt: 'Customer WhatsApp message praising the structured outreach workbook and practical lead-generation system',
  },
  {
    src: '/reviews/review-2.jpg',
    alt: 'WhatsApp conversation showing positive feedback about the workbook',
  },
  {
    src: '/reviews/review-3.jpg',
    alt: 'Customer message describing the workbook as professional, structured, and useful for outreach',
  },
  {
    src: '/reviews/review-4.jpg',
    alt: 'WhatsApp conversation with positive feedback about implementing the workbook',
  },
  {
    src: '/reviews/review-5.jpg',
    alt: 'Customer message saying the workbook was helpful and the work was done well',
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">Reviews</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-ivory text-balance md:text-6xl">
            Reputation is earned, not written.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Real feedback from people who reviewed CATΛLS work. More customer stories will be added as the journey continues.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviewImages.map((review, index) => (
            <figure
              key={review.src}
              className={`overflow-hidden border border-gold/15 bg-charcoal/50 ${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <img
                src={review.src}
                alt={review.alt}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <figcaption className="flex items-center gap-3 border-t border-border px-4 py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <Quote className="h-4 w-4 shrink-0 text-gold/70" aria-hidden />
                Verified customer feedback
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
