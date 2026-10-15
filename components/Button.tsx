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
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0";
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
