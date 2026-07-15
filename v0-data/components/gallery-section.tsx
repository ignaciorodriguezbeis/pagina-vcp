'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

const photos = [
  { src: '/images/hero-lago.png', alt: 'Lago San Roque al atardecer', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/galeria-sierras.png', alt: 'Sierras de Córdoba', span: '' },
  { src: '/images/reloj-cucu.png', alt: 'Reloj Cucú', span: '' },
  { src: '/images/galeria-costanera.png', alt: 'Costanera junto al río', span: '' },
  { src: '/images/aerosilla.png', alt: 'Aerosilla al Cerro de la Cruz', span: '' },
  { src: '/images/galeria-noche.png', alt: 'Villa Carlos Paz de noche', span: 'sm:col-span-2' },
]

export function GallerySection() {
  const { t } = useLanguage()

  return (
    <section id="galeria" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {t.gallery.eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground text-balance md:text-5xl">
          {t.gallery.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {t.gallery.subtitle}
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[12rem] grid-cols-2 gap-4 sm:grid-cols-4">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className={`group relative overflow-hidden rounded-2xl ${photo.span}`}
          >
            <Image
              src={photo.src || '/placeholder.svg'}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
