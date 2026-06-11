import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav bg-surface/80">
      <div className="max-w-container-max mx-auto px-lg py-md flex justify-between items-center">
        <div className="flex items-center gap-sm">
          <Image
            src="/photos/lion.png"
            alt="Singam Academy lion logo"
            width={48}
            height={48}
            className="object-contain -scale-x-100"
          />
          <span className="text-body-lg font-black tracking-tighter text-primary">
            SINGAM ACADEMY
          </span>
        </div>
        <div className="hidden md:flex gap-lg items-center">
          <a
            className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold border-b-2 border-primary pb-1"
            href="#"
          >
            Programs
          </a>
          {["Trainers", "Facilities", "Journal"].map((link) => (
            <a
              key={link}
              className="font-label-md text-label-md uppercase tracking-widest text-secondary hover:text-primary transition-colors"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
        <Button variant="primary" size="sm">
          Join Elite
        </Button>
      </div>
    </nav>
  )
}
