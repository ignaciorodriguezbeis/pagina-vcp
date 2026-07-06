import { LanguageProvider } from '@/components/language-provider'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { PlacesSection } from '@/components/places-section'
import { GastronomySection } from '@/components/gastronomy-section'
import { LodgingSection } from '@/components/lodging-section'
import { EventsSection } from '@/components/events-section'
import { GettingHereSection } from '@/components/getting-here-section'
import { GallerySection } from '@/components/gallery-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <PlacesSection />
          <GastronomySection />
          <LodgingSection />
          <EventsSection />
          <GettingHereSection />
          <GallerySection />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  )
}
