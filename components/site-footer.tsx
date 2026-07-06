'use client'

import { Mountain, Share2, Send, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function SiteFooter() {
  const { t } = useLanguage()

  const links = [
    { href: '#lugares', label: t.nav.places },
    { href: '#gastronomia', label: t.nav.food },
    { href: '#alojamiento', label: t.nav.stay },
    { href: '#eventos', label: t.nav.events },
    { href: '#galeria', label: t.nav.gallery },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Mountain className="h-5 w-5" />
            </span>
            <span className="font-serif text-lg font-semibold">
              {t.footer.tagline}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
            {t.footer.description}
          </p>
          <div className="mt-6 flex gap-3">
            {[Share2, Send, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:border-primary hover:text-primary"
                aria-label="Red social"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-background/60">
            {t.footer.explore}
          </h3>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-background/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-background/60">
            {t.footer.contact}
          </h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-background/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Villa Carlos Paz, Córdoba, Argentina
          </p>
          <p className="mt-4 text-sm text-background/80">{t.footer.newsletter}</p>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder={t.footer.emailPlaceholder}
              className="w-full rounded-md border border-background/20 bg-background/10 px-3 py-2 text-sm text-background placeholder:text-background/50 focus:border-primary focus:outline-none"
            />
            <Button type="submit" size="sm">
              {t.footer.subscribe}
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-background/60 md:px-6">
          © {new Date().getFullYear()} {t.footer.tagline}. {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
