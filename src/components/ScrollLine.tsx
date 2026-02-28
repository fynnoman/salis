'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useScrollLineY } from './ScrollLineContext';

export default function ScrollLine() {
  const grayRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [pathD, setPathD] = useState('');
  const [totalLen, setTotalLen] = useState(0);
  const [endPoint, setEndPoint] = useState<{ x: number; y: number } | null>(null);

  const progress = useMotionValue(0);
  const lineAbsoluteY = useScrollLineY();

  const dashOffset = useTransform(progress, (v: number) => {
    if (totalLen <= 0) return 99999;
    return totalLen * (1 - v);
  });

  useEffect(() => {
    const handler = () => {
      const svg = svgRef.current;
      if (!svg) return;
      const sy = window.scrollY;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      svg.setAttribute('viewBox', `0 ${sy} ${vw} ${vh}`);

      const viewCenter = sy + vh * 0.55;
      const { startY, endY } = svg.dataset as { startY: string; endY: string };
      const sY = parseFloat(startY || '0');
      const eY = parseFloat(endY || '0');

      if (eY > sY) {
        const p = Math.max(0, Math.min(1, (viewCenter - sY) / (eY - sY)));
        progress.set(p);
        if (lineAbsoluteY) lineAbsoluteY.set(sY + p * (eY - sY));
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [progress, lineAbsoluteY]);

  const recalc = useCallback(() => {
    const section = document.querySelector<HTMLElement>('#services');
    if (!section) return;

    const sy = window.scrollY;
    const vw = window.innerWidth;

    const r = section.getBoundingClientRect();
    // Linie beginnt weiter unten (nach dem Heading)
    const startY = r.top + sy + 220;
    const endY = r.bottom + sy - 180;
    const x = vw * 0.72;

    const d = `M ${x} ${startY} L ${x} ${endY}`;
    setPathD(d);
    setEndPoint({ x, y: endY });

    if (svgRef.current) {
      svgRef.current.dataset.startY = String(startY);
      svgRef.current.dataset.endY = String(endY);
    }

    requestAnimationFrame(() => {
      if (grayRef.current) {
        setTotalLen(grayRef.current.getTotalLength());
      }
      if (svgRef.current) {
        svgRef.current.setAttribute('viewBox', `0 ${window.scrollY} ${vw} ${window.innerHeight}`);
      }
    });
  }, []);

  useEffect(() => {
    recalc();
    const timers = [100, 300, 800, 2000].map((ms) => setTimeout(recalc, ms));
    window.addEventListener('resize', recalc);
    window.addEventListener('load', recalc);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', recalc);
      window.removeEventListener('load', recalc);
    };
  }, [recalc]);

  return (
    <div
      className="hidden lg:block"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'visible',
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMinYMin slice"
        fill="none"
        style={{ overflow: 'visible' }}
      >
        {pathD && (
          <>
            {/* Graue Basislinie */}
            <path
              ref={grayRef}
              d={pathD}
              stroke="#d1d5db"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
            />
            {/* Neon-grüne animierte Linie */}
            {totalLen > 0 && (
              <motion.path
                d={pathD}
                stroke="#39ff14"
                strokeWidth={3}
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: totalLen,
                  strokeDashoffset: dashOffset,
                  filter: 'drop-shadow(0 0 6px #39ff14)',
                }}
              />
            )}
            {/* Neon-Punkt am Ende */}
            {endPoint && (
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
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
