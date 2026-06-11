import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-xxl px-margin-mobile md:px-xl min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-[1000px] w-full mb-lg overflow-hidden rounded-card relative group">
        <Image
          src="/photos/563078644_18317029069244543_4058199573077167125_n.webp"
          alt="Elite performance coach Sivabalan Elango racing at Delhi Half Marathon"
          width={1000}
          height={700}
          className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="max-w-4xl px-md">
        <h1 className="font-display-lg text-display-lg mb-md leading-tight">
          Pain is temporary.{" "}
          <br className="hidden md:block" />
          Finishing isn&apos;t.
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-lg">
          A data-driven performance sanctuary designed for those who refuse to
          compromise. We specialize in transforming raw effort into elite results
          through science, grit, and discipline.
        </p>
        <div className="flex flex-col md:flex-row gap-sm justify-center">
          <Button variant="primary">Start Your Journey</Button>
          <Button variant="secondary">View Curriculum</Button>
        </div>
      </div>
    </section>
  )
}
