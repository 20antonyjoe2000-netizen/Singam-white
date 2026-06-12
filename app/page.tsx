import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { Principles } from "@/components/sections/principles"
import { Coach } from "@/components/sections/coach"
import { FullWidthBanner } from "@/components/sections/full-width-banner"
import { Pricing } from "@/components/sections/pricing"
import { Gallery } from "@/components/sections/gallery"
import { Location } from "@/components/sections/location"
import { CTAForm } from "@/components/sections/cta-form"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Principles />
        <Coach />
        <FullWidthBanner />
        <Pricing />
        <Gallery />
        <Location />
        <section className="py-xxl px-margin-mobile md:px-xl max-w-container-max mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display-sm text-display-sm mb-md">
              Find your finish line.
            </h2>
            <p className="text-body-lg text-secondary mb-xl">
              Tell us where you are, and where you want to go. We&apos;ll build
              the road in between.
            </p>
            <CTAForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
