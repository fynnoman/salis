"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";

/* =============================================================
 * MARQUEE — endless horizontal ticker
 * =============================================================*/
export function Marquee({
  items,
  duration = 28,
  reverse = false,
  className = "",
  itemClassName = "",
  separator = "★",
}: {
  items: (string | ReactNode)[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: string | ReactNode;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className={`shrink-0 inline-flex items-center gap-6 sm:gap-10 px-4 sm:px-6 ${itemClassName}`}
          >
            {it}
            <span aria-hidden className="text-voltage opacity-80">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* =============================================================
 * MAGNETIC BUTTON / LINK — cursor-pull effect
 * =============================================================*/
type MagneticProps = HTMLMotionProps<"a"> & {
  href: string;
  strength?: number;
  children: ReactNode;
};

export function MagneticLink({
  children,
  strength = 0.35,
  className,
  ...props
}: MagneticProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 230, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 230, damping: 18, mass: 0.4 });

  return (
    <motion.a
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}

/* =============================================================
 * REVEAL WORDS — scroll-triggered word-by-word reveal
 * =============================================================*/
export function RevealWords({
  text,
  className = "",
  delay = 0,
  staggerChildren = 0.04,
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      transition={{ staggerChildren, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-flex overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            variants={{
              hidden: { y: "110%" },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* =============================================================
 * LIVE CLOCK
 * =============================================================*/
export function LiveClock() {
  const [t, setT] = useState("--:--");
  useEffect(() => {
    const tick = () =>
      setT(
        new Date().toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{t}</span>;
}

/* =============================================================
 * ROTARY BADGE — spinning S badge with text on circle
 * =============================================================*/
export function RotaryBadge({
  label = "SALIF • GEBÄUDESERVICE • SEIT 2020 • ",
  size = 120,
  centerChar = "S",
  invert = false,
}: {
  label?: string;
  size?: number;
  centerChar?: string;
  invert?: boolean;
}) {
  return (
    <div
      className="relative inline-block animate-spin-slow"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <path
            id={`circle-${size}`}
            d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0"
          />
        </defs>
        <text
          fill={invert ? "#0a0a0a" : "#f5f4ef"}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <textPath href={`#circle-${size}`}>{label.repeat(2)}</textPath>
        </text>
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center font-display text-voltage"
        style={{ fontSize: size * 0.42 }}
      >
        {centerChar}
      </div>
    </div>
  );
}

/* =============================================================
 * CURSOR SPOTLIGHT — radial gradient following mouse
 * =============================================================*/
export function useCursorSpot(ref: React.RefObject<HTMLElement | null>) {
  const [pos, setPos] = useState({ x: 50, y: 50, active: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
        active: true,
      });
    };
    const onLeave = () => setPos((p) => ({ ...p, active: false }));
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
  return pos;
}

/* =============================================================
 * PARALLAX HOOK
 * =============================================================*/
export function useParallax(ref: React.RefObject<HTMLElement | null>, range = 200) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  return useTransform(scrollYProgress, [0, 1], [0, range]);
}
