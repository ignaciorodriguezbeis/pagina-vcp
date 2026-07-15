'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: t.hero.stat1Value, label: t.hero.stat1 },
    { value: t.hero.stat2Value, label: t.hero.stat2 },
    { value: t.hero.stat3Value, label: t.hero.stat3 },
  ]

  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-lago.png"
        alt="Vista aérea del Lago San Roque rodeado de sierras al atardecer en Villa Carlos Paz"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/45 to-foreground/25" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 md:px-6 md:pb-20">
        <p className="mb-4 inline-flex w-fit items-center rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-sm font-medium text-background backdrop-blur-sm">
          {t.hero.eyebrow}
        </p>
        <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.05] text-background text-balance md:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-background/90 text-pretty">
          {t.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#lugares">
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-background/40 bg-background/10 text-background backdrop-blur-sm hover:bg-background/20 hover:text-background"
          >
            <a href="#galeria">{t.hero.secondaryCta}</a>
          </Button>
        </div>

        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-background/25 pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-serif text-2xl font-semibold text-background md:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-xs text-background/80 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
