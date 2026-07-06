'use client'

import { useState } from 'react'
import { Menu, X, Globe, Mountain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#lugares', label: t.nav.places },
    { href: '#gastronomia', label: t.nav.food },
    { href: '#alojamiento', label: t.nav.stay },
    { href: '#eventos', label: t.nav.events },
    { href: '#como-llegar', label: t.nav.getHere },
    { href: '#galeria', label: t.nav.gallery },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Mountain className="h-5 w-5" />
          </span>
          <span className="font-serif text-lg font-semibold leading-tight text-foreground">
            Villa Carlos Paz
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Cambiar idioma / Switch language"
          >
            <Globe className="h-4 w-4" />
            {lang === 'es' ? 'ES' : 'EN'}
          </button>

          <Button asChild className="hidden sm:inline-flex">
            <a href="#como-llegar">{t.nav.cta}</a>
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="my-3">
              <a href="#como-llegar" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
