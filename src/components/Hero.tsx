"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Desktop background image */}
      <Image
        src="/289A1875-2870-4AB3-9CCB-C4BC7C0E7DAA.png"
        alt="Salif Gebäudeservice – professionelle Reinigung und Hausmeisterservice in Pirmasens"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center hidden sm:block"
      />
      {/* Mobile background image */}
      <Image
        src="/5D43DF16-4B08-486D-8BDE-A09AE262B6FC.png"
        alt="Salif Gebäudeservice – professionelle Reinigung und Hausmeisterservice in Pirmasens"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center sm:hidden"
      />

      {/* Dark overlay for mobile readability */}
      <div className="absolute inset-0 bg-black/40 sm:bg-transparent" />

      {/* Mobile CTA overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:hidden w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-[#22c55e] font-semibold text-xs tracking-widest uppercase mb-3">
            Pirmasens & Umgebung
          </span>
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Reinigung &<br />Hausmeisterservice
          </h1>
          <p className="text-white/80 text-base mb-8 max-w-xs mx-auto">
            Professionell, zuverlässig und fair – Ihr lokaler Partner für alles rund ums Haus.
          </p>
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
            <a
              href="tel:015229043159"
              className="flex items-center justify-center gap-2 bg-[#22c55e] text-white py-3.5 rounded-full font-semibold text-sm shadow-lg"
            >
              Jetzt anrufen – 01522 904 3159
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white py-3.5 rounded-full font-semibold text-sm"
            >
              Leistungen entdecken
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-white/60" />
      </motion.div>
    </section>
  );
}
