import Link from "next/link";
import type { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors";
  const variants = {
    primary: "bg-gold text-navy hover:bg-gold-light",
    secondary: "bg-navy text-cream hover:bg-blue",
    outline: "border border-cream/60 text-cream hover:bg-cream/10",
  } as const;

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
