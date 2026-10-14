import Image from "next/image";
import Link from "next/link";

// Static on purpose -- a dynamic new Date() here would block prerendering.
// Bump this each January.
const COPYRIGHT_YEAR = 2026;

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/donate", label: "Donate" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <Image
              src="/images/icon.jpg"
              alt="Created To Shine Ministries icon"
              width={56}
              height={56}
              className="shrink-0"
            />
            <div>
              <p className="font-serif text-lg font-semibold">Created To Shine Ministries</p>
              <p className="mt-1 text-sm text-cream/80">
                A Christ-centered educational ministry equipping individuals with
                disabilities and their families. Serving Wayne County, Michigan.
              </p>
              <p className="mt-2 text-sm text-cream/80">
                37706 Colonial Dr S
                <br />
                Westland, MI 48185
              </p>
            </div>
          </div>

          <div>
            <p className="font-serif text-base font-semibold text-gold-light">Site</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/80 transition-colors hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif text-base font-semibold text-gold-light">Nonprofit status</p>
            <ul className="mt-2 space-y-1.5 text-sm text-cream/80">
              <li>EIN: 42-4268107</li>
              <li>501(c)(3) tax-exempt organization as of July 17, 2026</li>
              <li>Public charity status: 170(b)(1)(A)(vi)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-cream/20 pt-6 text-xs text-cream/60">
          &copy; {COPYRIGHT_YEAR} Created To Shine Ministries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
