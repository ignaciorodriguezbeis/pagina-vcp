'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

const images = [
  '/images/alojamiento.png',
  '/images/galeria-sierras.png',
  '/images/galeria-costanera.png',
]

export function LodgingSection() {
  const { t } = useLanguage()

  return (
    <section id="alojamiento" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {t.stay.eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground text-balance md:text-5xl">
          {t.stay.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {t.stay.subtitle}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {t.stay.options.map((opt, i) => (
          <article
            key={opt.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative h-52">
              <Image
                src={images[i] || '/placeholder.svg'}
                alt={opt.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                {opt.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {opt.desc}
              </p>
              <p className="mt-4 font-semibold text-primary">{opt.price}</p>
              <Button asChild variant="outline" className="mt-5 w-full">
                <a href="#como-llegar">
                  {t.stay.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
