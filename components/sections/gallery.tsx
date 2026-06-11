import Image from "next/image"

export function Gallery() {
  return (
    <section className="py-xxl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-xl grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
        <div className="order-2 md:order-1">
          <Image
            src="/photos/604344481_18326351719244543_6720992223840369289_n.webp"
            alt="Sivabalan Elango finishes Tata Steel World 25K with medal"
            width={800}
            height={1000}
            className="rounded-card w-full h-[600px] object-cover shadow-2xl"
          />
        </div>
        <div className="order-1 md:order-2 space-y-md">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
            Proof of Concept
          </span>
          <h2 className="font-display-sm text-display-sm leading-tight">
            The finish line is the only objective data point.
          </h2>
          <p className="text-body-lg text-secondary">
            Our athletes consistently dominate regional and national events. We
            don&apos;t just coach runners; we build finishers.
          </p>
          <div className="flex gap-md pt-md">
            <div className="text-center">
              <div className="font-headline-lg text-headline-lg font-black">400+</div>
              <div className="font-label-sm text-label-sm uppercase text-secondary">
                Personal Bests
              </div>
            </div>
            <div className="text-center">
              <div className="font-headline-lg text-headline-lg font-black">12</div>
              <div className="font-label-sm text-label-sm uppercase text-secondary">
                Podiums 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
