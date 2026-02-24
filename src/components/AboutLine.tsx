'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';

interface AboutLineProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  textRef: React.RefObject<HTMLParagraphElement | null>;
}

export default function AboutLine({ sectionRef, contentRef, headingRef, textRef }: AboutLineProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const grayRef = useRef<SVGPathElement>(null);

  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });
  const [pathD, setPathD] = useState('');
  const [totalLen, setTotalLen] = useState(0);
  const [dotPos, setDotPos] = useState<{ x: number; y: number } | null>(null);
  const [ready, setReady] = useState(false);

  // useScroll driven by the passed-in section ref
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const dashOffset = useTransform(scrollYProgress, (v: number) => {
    if (totalLen <= 0) return 99999;
    return totalLen * (1 - v);
  });

  const recalc = useCallback(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // All coordinates relative to section's top-left corner
    const sr = section.getBoundingClientRect();
    const cr = content.getBoundingClientRect();

    const sectionH = sr.height;
    const sectionW = sr.width;

    const pad = 32;

    // Relative to section
    const boxLeft = cr.left - sr.left - pad;
    const boxRight = cr.right - sr.left + pad;
    const boxTop = cr.top - sr.top - pad;
    const boxBottom = cr.bottom - sr.top + pad;

    const x = boxLeft;

    // Notch 1: unter dem Heading
    let notch1Y: number | null = null;
    if (headingRef.current) {
      const hr = headingRef.current.getBoundingClientRect();
      notch1Y = hr.bottom - sr.top + 8;
    }

    // Notch 2: unter dem zweiten Absatz
    let notch2Y: number | null = null;
    if (textRef.current) {
      const tr = textRef.current.getBoundingClientRect();
      notch2Y = tr.bottom - sr.top + 8;
    }

    const notchLen1 = 200;
    const notchLen2 = 120;
    const notchLens = [notchLen1, notchLen2];

    // Pfad aufbauen (y=0 = section top)
    const segments: string[] = [
      `M ${x} ${0}`,
      `L ${x} ${boxTop}`,
      `L ${boxRight} ${boxTop}`,
    ];

    const notches = [notch1Y, notch2Y]
      .map((n, i) => ({ y: n, len: notchLens[i] }))
      .filter((n): n is { y: number; len: number } => n.y !== null && n.y > boxTop && n.y < boxBottom)
      .sort((a, b) => a.y - b.y);

    for (const { y: ny, len } of notches) {
      segments.push(`L ${boxRight} ${ny}`);
      segments.push(`L ${boxRight - len} ${ny}`);
      segments.push(`L ${boxRight} ${ny}`);
    }

    segments.push(`L ${boxRight} ${boxBottom}`);
    segments.push(`L ${x} ${boxBottom}`);
    segments.push(`L ${x} ${sectionH}`);

    const d = segments.join(' ');
    setPathD(d);
    setDotPos({ x, y: sectionH });
    setSvgSize({ w: sectionW, h: sectionH });

    requestAnimationFrame(() => {
      if (grayRef.current) {
        setTotalLen(grayRef.current.getTotalLength());
      }
    });
  }, [sectionRef, contentRef, headingRef, textRef]);

  useEffect(() => {
    const timers = [50, 200, 500, 1000, 1500, 2500].map((ms, i) =>
      setTimeout(() => {
        recalc();
        if (i === 5) setReady(true);
      }, ms)
    );
    window.addEventListener('resize', recalc);
    window.addEventListener('load', recalc);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', recalc);
      window.removeEventListener('load', recalc);
    };
  }, [recalc]);

  if (!svgSize.w || !svgSize.h) return null;

  return (
    <div
      className="hidden lg:block"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}
    >
      <svg
        ref={svgRef}
        width={svgSize.w}
        height={svgSize.h}
        viewBox={`0 0 ${svgSize.w} ${svgSize.h}`}
        fill="none"
        style={{ overflow: 'visible', display: 'block' }}
      >
        {pathD && (
          <>
            <path
              ref={grayRef}
              d={pathD}
              stroke="#d1d5db"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {totalLen > 0 && (
              <motion.path
                d={pathD}
                stroke="#39ff14"
                strokeWidth={3}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: totalLen,
                  strokeDashoffset: dashOffset,
                  filter: 'drop-shadow(0 0 6px #39ff14)',
                }}
              />
            )}
            {dotPos && (
              <circle
                cx={dotPos.x}
                cy={dotPos.y}
                r={4}
                fill="#39ff14"
                style={{ filter: 'drop-shadow(0 0 6px #39ff14)' }}
              />
            )}
          </>
        )}
      </svg>
    </div>
  );
}
