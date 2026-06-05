"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Wrench } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Marquee, RevealWords } from "@/components/_design";

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICE_ROUTES: Record<string, string> = {
  "gebäudereinigung": "/gebaeudereinigung-pirmasens",
  "unterhaltsreinigung": "/unterhaltsreinigung-pirmasens",
  "grundreinigung": "/grundreinigung-pirmasens",
  "büroreinigung": "/bueroreinigung-pirmasens",
  "praxisreinigung": "/bueroreinigung-pirmasens",
  "treppenhausreinigung": "/treppenhausreinigung-pirmasens",
  "fensterreinigung": "/fensterreinigung-pirmasens",
  "glasreinigung": "/glasreinigung-pirmasens",
  "wintergartenreinigung": "/wintergartenreinigung-pirmasens",
  "dachrinnenreinigung": "/dachrinnenreinigung-pirmasens",
  "hausmeisterservice": "/hausmeisterservice-pirmasens",
  "kleinreparaturen": "/hausmeisterservice-pirmasens",
  "entrümpelung": "/entruempelung-pirmasens",
  "wohnungsauflösung": "/entruempelung-pirmasens",
  "umzüge": "/entruempelung-pirmasens",
  "kleintransporte": "/entruempelung-pirmasens",
  "winterdienst": "/winterdienst-pirmasens",
  "streudienst": "/winterdienst-pirmasens",
};

function findRouteFor(label: string): string | null {
  const lower = label.toLowerCase();
  for (const key in SERVICE_ROUTES) {
    if (lower.includes(key)) return SERVICE_ROUTES[key];
  }
  return null;
}

function StickyCard({
  index,
  total,
  label,
  href,
}: {
  index: number;
  total: number;
  label: string;
  href: string | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * 0.025]
  );
  const numStr = String(index + 1).padStart(2, "0");

  const inner = (
    <motion.div
      style={{ scale }}
      className="origin-top group relative bg-ink text-bone border-t border-bone/15 px-5 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 hatch-bg-light opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-voltage scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

      <div className="relative grid grid-cols-12 gap-4 items-end">
        <div className="col-span-2 sm:col-span-1 font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-bone/40 self-start pt-2">
          {numStr}
        </div>
        <div className="col-span-10 sm:col-span-9 min-w-0">
          <h3 className="font-display text-[clamp(1.5rem,4.5vw,4.5rem)] leading-[0.95] text-bone group-hover:text-voltage transition-colors break-words hyphens-auto">
            {label}
          </h3>
        </div>
        <div className="col-span-12 sm:col-span-2 flex justify-end items-end">
          {href ? (
            <span className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-bone/60 group-hover:text-voltage transition-colors">
              <span className="hidden sm:inline">Mehr</span>
              <ArrowUpRight className="w-7 h-7 group-hover:rotate-45 transition-transform duration-500" />
            </span>
          ) : (
            <ArrowUpRight className="w-7 h-7 text-bone/30" />
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `calc(4rem + ${index * 8}px)` }}
    >
      {href ? (
        <Link href={href} className="block">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </div>
  );
}

export default function Services() {
  const { services } = useContent();
  const items = services.items.slice(0, 12);

  return (
    <section id="services" className="relative bg-bone text-ink overflow-hidden">
      <div className="border-b border-ink/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-2">
              <div className="marker-line text-ink/60">02 / Leistungen</div>
            </div>
            <div className="lg:col-span-7 min-w-0">
              <h2 className="font-display text-[clamp(2.25rem,6.5vw,6rem)] leading-[0.9] text-ink break-words">
                <RevealWords text={services.title.toUpperCase()} />
              </h2>
            </div>
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease, delay: 0.2 }}
                className="font-editorial text-xl sm:text-2xl leading-snug text-ink/70"
              >
                Zwölf Disziplinen. Eine Nummer. Alles aus einer Hand — von der Wochenpflege bis zur kompletten Wohnungsauflösung.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        {items.map((label, i) => (
          <StickyCard
            key={label + i}
            index={i}
            total={items.length}
            label={label}
            href={findRouteFor(label)}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease }}
        className="relative bg-rust text-bone py-16 sm:py-24"
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-2 font-mono text-xs uppercase tracking-[0.22em] text-bone/80">
            + Extra
          </div>
          <div className="lg:col-span-7 min-w-0">
            <h3 className="font-display text-[clamp(1.75rem,4.5vw,4rem)] leading-[0.95] text-bone break-words">
              {services.highlightTitle}
            </h3>
            <p className="mt-4 font-editorial text-xl sm:text-2xl leading-snug text-bone/95 max-w-2xl">
              {services.highlightText}
            </p>
          </div>
          <div className="lg:col-span-3 flex lg:justify-end">
            <motion.div
              whileHover={{ rotate: 25 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
              className="w-20 h-20 sm:w-28 sm:h-28 border-2 border-bone flex items-center justify-center"
            >
              <Wrench className="w-10 h-10 sm:w-14 sm:h-14 text-bone" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="bg-ink text-bone border-y border-bone/10 py-2">
        <Marquee
          items={items.map((s) => s.split(" ")[0])}
          duration={42}
          itemClassName="font-display text-bone text-3xl sm:text-5xl py-2 whitespace-nowrap"
        />
      </div>
    </section>
  );
}
