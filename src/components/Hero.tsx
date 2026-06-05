"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Phone,
  MessageCircle,
  ArrowDownRight,
  MapPin,
} from "lucide-react";
import { useRef } from "react";
import { useContent } from "@/hooks/useContent";
import {
  Marquee,
  MagneticLink,
  LiveClock,
  RotaryBadge,
  useCursorSpot,
} from "@/components/_design";

const services = [
  "Gebäudereinigung",
  "Unterhaltsreinigung",
  "Fensterreinigung",
  "Hausmeisterservice",
  "Entrümpelung",
  "Winterdienst",
  "Wintergartenreinigung",
  "Dachrinnenreinigung",
  "Grundreinigung",
  "Büroreinigung",
];

export default function Hero() {
  const { hero, contact } = useContent();
  const ref = useRef<HTMLElement>(null);
  const spot = useCursorSpot(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen bg-ink text-bone overflow-hidden grain"
    >
      {/* parallax background image */}
      <motion.div
        className="absolute inset-0 opacity-[0.5]"
        style={{ y: imageY }}
      >
        <Image
          src={hero.backgroundImage}
          alt="Salif Gebäudeservice"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center -scale-x-100"
        />
      </motion.div>

      {/* grid overlay */}
      <div className="absolute inset-0 grid-bg-light pointer-events-none" />

      {/* cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(0,255,136,0.18), transparent 45%)`,
          opacity: spot.active ? 1 : 0.4,
        }}
      />

      {/* scanline */}
      <div className="absolute inset-x-0 h-[2px] bg-voltage/40 animate-scan pointer-events-none" />

      {/* TOP STATUS BAR */}
      <div className="relative z-20 border-b border-bone/15">
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em]">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2 text-voltage">
              <span className="relative inline-flex w-1.5 h-1.5 bg-voltage rounded-full">
                <span className="absolute inset-0 rounded-full bg-voltage animate-ping" />
              </span>
              Verfügbar
            </span>
            <span className="hidden sm:inline text-bone/50">
              Pirmasens · Kaiserslautern · Westpfalz
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-bone/50">
            <span className="hidden sm:inline">Mo – Sa · 07 – 20</span>
            <span className="text-bone/80">
              <LiveClock />
            </span>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 px-5 sm:px-8 lg:px-12 pt-10 sm:pt-16 pb-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT — marker + massive type */}
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="marker-line text-bone/60 mb-6 sm:mb-10"
            >
              01 / Gebäudeservice — seit 2020
            </motion.div>

            {/* MASSIVE TITLE */}
            <motion.h1
              style={{ y: titleY, opacity: titleOpacity }}
              className="font-display text-bone leading-[0.88] tracking-tight break-words hyphens-auto"
              aria-label={`${hero.title1} ${hero.title2}${hero.title3}`}
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="block text-[clamp(2.75rem,11vw,12rem)]"
                >
                  {hero.title1}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                  className="block text-[clamp(2.75rem,11vw,12rem)] text-voltage"
                >
                  {hero.title2}
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.41 }}
                  className="block text-[clamp(2.75rem,11vw,12rem)] text-outline"
                >
                  {hero.title3}.
                </motion.span>
              </span>
            </motion.h1>

            {/* subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
              className="mt-8 sm:mt-12 max-w-xl font-editorial text-2xl sm:text-3xl leading-[1.15] text-bone/85"
            >
              {hero.subtitle.split("\n").map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </motion.p>
          </div>

          {/* RIGHT — badge + meta */}
          <div className="lg:col-span-3 flex flex-col gap-8 lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.7,
              }}
            >
              <RotaryBadge size={140} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 lg:text-right space-y-2"
            >
              <div className="flex lg:justify-end items-center gap-2">
                <MapPin className="w-3 h-3 text-voltage" />
                <span>49.2 N · 7.6 E</span>
              </div>
              <div>Emilienstraße 5a</div>
              <div>66955 Pirmasens</div>
            </motion.div>
          </div>
        </div>

        {/* CTA ROW */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-12 sm:mt-20 flex flex-wrap items-center gap-3 sm:gap-5"
        >
          <MagneticLink
            href={`tel:${contact.phoneRaw}`}
            className="group relative inline-flex items-center gap-4 px-7 sm:px-9 py-4 sm:py-5 bg-voltage text-ink font-display text-xl sm:text-3xl uppercase tracking-tight border-2 border-voltage hover:bg-bone hover:border-bone transition-colors"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>{contact.phone}</span>
            <span
              aria-hidden
              className="absolute -top-2 -right-2 w-4 h-4 bg-rust rounded-full animate-voltage-pulse"
            />
          </MagneticLink>

          <MagneticLink
            href={`https://wa.me/49${contact.phoneRaw.replace(/^0/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 sm:px-7 py-4 sm:py-5 border-2 border-bone/30 text-bone font-display text-lg sm:text-2xl uppercase hover:border-voltage hover:text-voltage transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </MagneticLink>

          <div className="hidden sm:flex items-center gap-2 ml-auto font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
            Scroll
            <ArrowDownRight className="w-3.5 h-3.5 animate-ticker-arrow text-voltage" />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM MARQUEE */}
      <div className="relative z-10 border-t border-bone/15 bg-ink mt-8">
        <Marquee
          items={services}
          duration={36}
          itemClassName="font-display text-bone text-4xl sm:text-6xl lg:text-7xl py-4 sm:py-5 whitespace-nowrap"
        />
      </div>
    </section>
  );
}
