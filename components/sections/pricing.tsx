import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Foundational",
    tagline: "Precision programmed workouts.",
    price: "₹999",
    features: ["TrainingPeaks Access", "Weekly Plan Updates", "Basic Mobility Plan"],
    featured: false,
  },
  {
    name: "Championship",
    tagline: "1-on-1 performance management.",
    price: "₹2,999",
    features: [
      "Daily Bio-Feedback Review",
      "Bi-Weekly Strategy Calls",
      "Race Nutrition Strategy",
      "Video Form Analysis",
    ],
    featured: true,
  },
  {
    name: "Olympic",
    tagline: "White-glove executive coaching.",
    price: "₹4,999",
    features: [
      "All Championship Features",
      "Unlimited Text Coaching",
      "In-Person Clinic Access",
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="py-xxl px-margin-mobile md:px-xl max-w-container-max mx-auto">
      <div className="text-center mb-xl">
        <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
          Coaching Plans
        </span>
        <h2 className="font-display-sm text-display-sm mt-sm">
          Select your tier of mastery.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-6xl mx-auto items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "rounded-card p-lg flex flex-col",
              plan.featured
                ? "border-2 border-primary scale-105 shadow-xl bg-white relative"
                : "border border-outline-variant/30"
            )}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-md py-1 rounded-full text-label-sm uppercase tracking-widest whitespace-nowrap">
                Most Requested
              </div>
            )}
            <div className="mb-lg">
              <h3 className="font-headline-lg text-headline-lg">{plan.name}</h3>
              <p className="text-secondary mt-xs">{plan.tagline}</p>
              <div className="mt-md font-bold">
                <span className="font-display-sm text-display-sm">{plan.price}</span>
                <span className="font-label-md text-label-md font-normal text-secondary">
                  /mo
                </span>
              </div>
            </div>
            <ul className="space-y-md mb-xl flex-grow">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.featured ? "primary" : "secondary"}
              size="full"
              className={
                !plan.featured ? "hover:!bg-black hover:!text-white" : ""
              }
            >
              Apply Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
