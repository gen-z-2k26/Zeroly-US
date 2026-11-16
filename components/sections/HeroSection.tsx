import Image from "next/image";
import { IntentLink as Link } from "@/components/IntentLink";
import { ArrowRight } from "lucide-react";
import type { StoreSettings } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { pageContainer } from "@/lib/layout";
import { cn } from "@/lib/utils";

const collections = [
  { label: "Gaming and electronics", href: "/products" },
  { label: "Home and kitchen", href: "/products" },
  { label: "Beauty and personal care", href: "/products" },
  { label: "Power and outdoor", href: "/products" },
];

export function HeroSection({ settings }: { settings: StoreSettings }) {
  const headline = settings.hero?.headline || settings.name;
  const support = settings.hero?.support || settings.tagline;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate h-[calc(100svh-3.5rem)] overflow-hidden bg-[#07080B] text-white sm:h-[calc(100svh-4rem)]"
    >
      <Image
        src="/brand/home-hero.jpg"
        alt="Living room with a game console and television, opening onto a kitchen with a range and refrigerator"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#07080B]/92 via-[#07080B]/70 to-[#07080B]/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#07080B]/85 via-[#07080B]/20 to-[#07080B]/25"
      />

      <div
        className={pageContainer(
          "relative flex h-full min-h-0 flex-col justify-between gap-[clamp(0.75rem,2svh,2rem)] py-[clamp(1rem,3svh,2.5rem)]",
        )}
      >
        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase sm:text-sm">
              {settings.name}
            </p>
            <h1
              id="hero-heading"
              className="font-display mt-[clamp(0.4rem,1.1svh,0.85rem)] max-w-3xl text-balance text-[clamp(2.35rem,min(5vw,8svh),5rem)] leading-[1.02] text-white"
            >
              {headline}
            </h1>
            <p className="mt-[clamp(0.55rem,1.4svh,1.1rem)] max-w-xl text-pretty text-[clamp(1.0625rem,min(1.35vw,2.5svh),1.35rem)] leading-snug text-white/80">
              {support}
            </p>
            <div className="mt-[clamp(0.75rem,1.8svh,1.5rem)]">
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-accent text-accent-foreground hover:bg-accent/90 sm:min-w-40",
                )}
              >
                Shop all
              </Link>
            </div>
          </div>
        </div>

        <nav aria-label="Shop by need" className="shrink-0">
          <p className="mb-[clamp(0.35rem,0.8svh,0.75rem)] text-[11px] font-medium tracking-[0.16em] text-white/70 uppercase">
            Shop by need
          </p>
          <ul className="grid grid-cols-2 gap-2 xl:grid-cols-4">
            {collections.map((item, index) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex h-full items-center justify-between gap-3 rounded-xl border border-white/25 bg-[#07080B]/55 px-3 py-[clamp(0.45rem,1.1svh,0.75rem)] text-white backdrop-blur-md transition-colors hover:bg-[#07080B]/75 sm:px-4"
                >
                  <span className="min-w-0">
                    <span className="block text-[11px] tracking-[0.14em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium">
                      {item.label}
                    </span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-white/80" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
