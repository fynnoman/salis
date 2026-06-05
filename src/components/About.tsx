"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight, Plus } from "lucide-react";
import Image from "next/image";
import { useContent } from "@/hooks/useContent";
import { RevealWords, useParallax } from "@/components/_design";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const { about } = useContent();
  const ref = useRef<HTMLElement>(null);
  const logoY = useParallax(ref, -120);

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-bone text-ink overflow-hidden border-y border-ink/15"
    >
      {/* HEADER */}
      <div className="border-b border-ink/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-2 marker-line text-ink/60">
              03 / Über uns
            </div>
            <div className="lg:col-span-10 min-w-0">
              <h2 className="font-display text-[clamp(2rem,6.5vw,6rem)] leading-[0.92] text-ink break-words">
                <RevealWords text={about.title.toUpperCase()} />
                <span className="block font-editorial italic font-normal text-voltage-dim tracking-tight mt-2" style={{ textTransform: "none" }}>
                  <RevealWords text={about.titleHighlight} delay={0.15} />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Logo side */}
          <motion.div
            style={{ y: logoY }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative aspect-square w-full max-w-xl border-2 border-ink bg-ink overflow-hidden grain">
              <Image
                src={about.logoImage}
                alt="Salif Gebäudeservice"
                fill
                className="object-contain scale-90 opacity-95"
                style={{ filter: "invert(1)" }}
              />
              <div className="absolute top-4 left-4 marker-line text-bone/60">
                A / Logo
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/40">
                v.2020
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <div className="lg:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease }}
              className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl leading-[1.15] text-ink"
            >
              {about.text1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="text-base sm:text-lg leading-relaxed text-ink/75 max-w-2xl"
            >
              {about.text2}
            </motion.p>

            {/* Key points as list with industrial markers */}
            <div className="border-t border-ink/15 pt-6 space-y-0">
              {about.keyPoints.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                  className="group flex items-center gap-5 py-4 border-b border-ink/10"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-ink/40 w-10 shrink-0">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <Plus className="w-4 h-4 text-voltage-dim shrink-0" />
                  <span className="text-base sm:text-lg text-ink group-hover:text-voltage-dim transition-colors">
                    {p}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STATS RIBBON */}
      {about.stats.length > 0 && (
        <div className="bg-ink text-bone border-t border-bone/10">
          <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
              {about.stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                  className="group relative"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/40">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-bone group-hover:text-voltage transition-colors mt-3 break-words">
                    {s.value}
                  </div>
                  <div className="mt-2 font-editorial italic text-base sm:text-lg text-bone/70">
                    {s.label}
                  </div>
                  <ArrowDownRight className="absolute top-0 right-0 w-4 h-4 text-bone/30 group-hover:text-voltage transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
