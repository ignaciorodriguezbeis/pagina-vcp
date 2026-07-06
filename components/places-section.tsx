'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

const images = [
  '/images/reloj-cucu.png',
  '/images/galeria-noche.png',
  '/images/aerosilla.png',
  '/images/galeria-costanera.png',
]

export function PlacesSection() {
  const { t } = useLanguage()

  return (
    <section id="lugares" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {t.places.eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground text-balance md:text-5xl">
          {t.places.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {t.places.subtitle}
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {t.places.items.map((item, i) => (
          <article
            key={item.name}
            className={`group relative overflow-hidden rounded-2xl border border-border ${
              i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
            }`}
          >
            <div className={`relative ${i === 0 ? 'h-72 lg:h-full lg:min-h-[22rem]' : 'h-64'}`}>
              <Image
                src={images[i] || '/placeholder.svg'}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-serif text-xl font-semibold text-background md:text-2xl">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/85">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
