'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

export function EventsSection() {
  const { t } = useLanguage()

  return (
    <section id="eventos" className="relative isolate overflow-hidden">
      <Image
        src="/images/eventos.png"
        alt="Festival y teatro al aire libre por la noche en Villa Carlos Paz"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/85" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t.events.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-background text-balance md:text-5xl">
            {t.events.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-background/85 text-pretty">
            {t.events.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-background/20 bg-background/20 sm:grid-cols-2 lg:grid-cols-4">
          {t.events.list.map((ev) => (
            <article key={ev.name} className="bg-foreground/40 p-6 backdrop-blur-sm">
              <span className="text-sm font-semibold uppercase tracking-wide text-accent">
                {ev.date}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-background">
                {ev.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/80">
                {ev.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
