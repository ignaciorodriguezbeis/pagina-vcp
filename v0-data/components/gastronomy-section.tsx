'use client'

import Image from 'next/image'
import { UtensilsCrossed } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function GastronomySection() {
  const { t } = useLanguage()

  return (
    <section id="gastronomia" className="bg-secondary/50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <div className="relative order-2 h-80 overflow-hidden rounded-3xl md:order-1 md:h-[30rem]">
          <Image
            src="/images/gastronomia.png"
            alt="Asado argentino a la parrilla con empanadas y vino tinto"
            fill
            className="object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.food.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground text-balance md:text-5xl">
            {t.food.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.food.subtitle}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.food.dishes.map((dish) => (
              <li
                key={dish.name}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="font-semibold text-card-foreground">{dish.name}</p>
                <span className="mt-1 inline-block text-sm text-primary">
                  {dish.tag}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-4 rounded-2xl bg-accent/25 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <UtensilsCrossed className="h-5 w-5" />
            </span>
            <div>
              <p className="font-serif text-lg font-semibold text-foreground">
                {t.food.cardTitle}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {t.food.cardText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
