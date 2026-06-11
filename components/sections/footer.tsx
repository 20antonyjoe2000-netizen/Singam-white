const footerLinks = ["Privacy", "Terms", "Membership", "Contact"]

export function Footer() {
  return (
    <footer className="w-full px-lg py-xl flex flex-col md:flex-row justify-between items-center border-t border-outline-variant/30 bg-surface">
      <div className="mb-lg md:mb-0">
        <div className="font-headline-lg text-headline-lg text-primary">
          SINGAM ACADEMY
        </div>
        <p className="font-label-sm text-label-sm tracking-normal text-secondary mt-xs">
          © 2024 SINGAM ACADEMY. ENGINEERED FOR PERFORMANCE.
        </p>
      </div>
      <div className="flex gap-lg">
        {footerLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-on-secondary-fixed-variant font-label-sm text-label-sm tracking-normal hover:text-primary transition-colors uppercase"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}
