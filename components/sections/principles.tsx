import { Clock, Zap, BarChart2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

const principles: Array<{ Icon: LucideIcon; title: string; body: string }> = [
  {
    Icon: Clock,
    title: "Built around your life",
    body: "Customized periodization that flows with your career, family, and travel. No excuses, just adaptation.",
  },
  {
    Icon: Zap,
    title: "Recovery is training",
    body: "Sophisticated protocols including mobility work and sleep optimization are non-negotiable pillars of our strategy.",
  },
  {
    Icon: BarChart2,
    title: "Metrics over moods",
    body: "Every session is tracked, every physiological marker measured. We don't guess; we know your capacity.",
  },
]

export function Principles() {
  return (
    <section className="py-xxl px-margin-mobile md:px-xl max-w-container-max mx-auto">
      <div className="mb-xl">
        <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
          The Singam Way
        </span>
        <h2 className="font-display-sm text-display-sm mt-sm">
          Built for the obsessive.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {principles.map(({ Icon, title, body }) => (
          <Card key={title} className="flex flex-col justify-between h-80">
            <Icon className="w-9 h-9" strokeWidth={1.5} />
            <div>
              <h3 className="font-headline-lg text-headline-lg mb-sm">{title}</h3>
              <p className="text-secondary">{body}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
