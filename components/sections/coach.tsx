import Image from "next/image"

export function Coach() {
  return (
    <section className="py-xxl px-margin-mobile md:px-xl max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        <div className="relative">
          <Image
            src="/photos/coach.png"
            alt="Sivabalan Elango — Head Coach, Singam Academy"
            width={600}
            height={750}
            className="rounded-card w-full object-cover object-top shadow-2xl"
          />
        </div>
        <div className="space-y-md">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
            The Coach
          </span>
          <h2 className="font-display-sm text-display-sm leading-tight">
            Sivabalan Elango
          </h2>
          <p className="font-body-lg text-body-lg text-secondary">
            Elite endurance athlete and performance coach. Sivabalan has raced the Delhi Half Marathon, Tata Steel World 25K, and Kangayam Marathon — competing at the sharp end, not the sidelines.
          </p>
          <p className="font-body-lg text-body-lg text-secondary">
            His coaching philosophy is built on one principle: data removes excuses. Every training block is precision-engineered around your physiology, schedule, and race goal.
          </p>
          <div className="flex gap-lg pt-md">
            <div>
              <div className="font-headline-lg text-headline-lg font-black">8+</div>
              <div className="font-label-sm text-label-sm uppercase text-secondary">Years Coaching</div>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg font-black">200+</div>
              <div className="font-label-sm text-label-sm uppercase text-secondary">Athletes Trained</div>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg font-black">15+</div>
              <div className="font-label-sm text-label-sm uppercase text-secondary">Races Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
