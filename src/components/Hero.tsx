"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useContent } from "@/hooks/useContent";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Hero() {
  const { hero } = useContent();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f2440]"
    >
      {/* Background image */}
      <Image
        src="/Gemini_Generated_Image_lr33hilr33hilr33.png"
        alt="Salif Gebäudeservice – professionelle Reinigung und Hausmeisterservice in Pirmasens"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -scale-x-100"
      />

      {/* Left-side dark gradient for text readability on desktop */}
      <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#0f2440]/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen py-20">
          {/* Left side – text content, max 50% width */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
            >
              {/* Big brand heading */}
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] tracking-tight uppercase">
                {hero.title1}<br />
                <span className="text-[#22c55e]">{hero.title2}</span>{hero.title3}
              </h1>
              <p className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl lg:text-2xl font-medium text-white/60 mt-4 tracking-wide uppercase">
                {hero.subtitle.split("\n").map((line, i) => (
                  <span key={i}>{line}{i < hero.subtitle.split("\n").length - 1 && <br />}</span>
                ))}
              </p>
              <span className="sr-only">
                {hero.srText}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
