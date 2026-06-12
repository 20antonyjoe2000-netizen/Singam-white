export function Location() {
  const lat = 9.79888009399749
  const lng = 78.48296736883948
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`

  return (
    <section className="py-xxl px-margin-mobile md:px-xl max-w-container-max mx-auto">
      <div className="text-center mb-xl">
        <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
          Find Us
        </span>
        <h2 className="font-display-sm text-display-sm mt-sm">
          Visit the Academy.
        </h2>
      </div>
      <div className="rounded-card overflow-hidden border border-outline-variant/30 shadow-lg w-full h-[420px]">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Singam Academy Location"
        />
      </div>
    </section>
  )
}
