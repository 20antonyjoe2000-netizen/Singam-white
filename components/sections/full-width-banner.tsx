export function FullWidthBanner() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover grayscale brightness-75"
        style={{
          backgroundImage:
            "url('/photos/581298331_18322985206244543_2709068831253750549_n.webp')",
        }}
      />
      <div className="relative z-10 text-center text-white px-md">
        <h2 className="font-display-lg text-display-lg mb-md">
          Transcend your limits.
        </h2>
        <p className="font-body-lg text-body-lg max-w-xl mx-auto opacity-90">
          Join the elite athletes of Singam Academy on the roads and in the
          facility.
        </p>
      </div>
    </section>
  )
}
