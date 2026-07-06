'use client'

import { Car, Plane, Bus, MapPin } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const icons = [Car, Plane, Bus]

export function GettingHereSection() {
  const { t } = useLanguage()

  return (
    <section id="como-llegar" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.getHere.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground text-balance md:text-5xl">
            {t.getHere.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.getHere.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.getHere.ways.map((way, i) => {
            const Icon = icons[i] || MapPin
            return (
              <article
                key={way.mode}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/30 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-card-foreground">
                  {way.mode}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {way.desc}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
