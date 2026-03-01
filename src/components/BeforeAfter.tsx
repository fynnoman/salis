'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const pairs = [
  {
    label: 'Reinigung',
    before: '/4217c760-c23b-44fe-94b1-765ab7d80154.JPG',
    after: '/4686ff1c-1973-46b4-85f8-c118fd319087.JPG',
  },
  {
    label: 'Entrümpelung',
    before: '/5230b468-5b76-4488-8abf-36743fe3922e.JPG',
    after: '/a998c5e8-6c48-4a0f-8b93-87a3f5254594.JPG',
  },
];

function SliderCard({ pair }: { pair: typeof pairs[0] }) {
  const [pos, setPos] = useState(50);
  const [touched, setTouched] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  // Mouse
  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updatePos(e.clientX);
    const onMove = (ev: MouseEvent) => { if (dragging.current) updatePos(ev.clientX); };
    const onUp = () => {
      dragging.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  // Touch — preventDefault to block page scroll while dragging horizontally
  const onTouchStart = (e: React.TouchEvent) => {
    setTouched(true);
    const startX = e.touches[0].clientX;
    const startY = e.touches[0].clientY;
    let isHorizontal: boolean | null = null;

    const onMove = (ev: TouchEvent) => {
      const dx = Math.abs(ev.touches[0].clientX - startX);
      const dy = Math.abs(ev.touches[0].clientY - startY);

      // Decide direction on first significant move
      if (isHorizontal === null && (dx > 4 || dy > 4)) {
        isHorizontal = dx >= dy;
      }

      if (isHorizontal) {
        ev.preventDefault(); // block scroll only when dragging sideways
        updatePos(ev.touches[0].clientX);
      }
    };

    const onEnd = () => {
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };

    // NOT passive so we can call preventDefault
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Slider */}
      <div
        ref={containerRef}
        className="relative w-full rounded-2xl overflow-hidden select-none cursor-col-resize touch-pan-y"
        style={{ aspectRatio: '4/3' }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* After image (full) */}
        <div className="absolute inset-0">
          <Image
            src={pair.after}
            alt={`${pair.label} – Nachher`}
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-accent/20 text-accent border border-accent/40 backdrop-blur-sm z-10">
            Nachher
          </span>
        </div>

        {/* Before image (clipped left side) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={pair.before}
            alt={`${pair.label} – Vorher`}
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/30 text-white/90 border border-white/20 backdrop-blur-sm z-10">
            Vorher
          </span>
        </div>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)] z-20 pointer-events-none"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M5 1L1 7L5 13" stroke="#1a3a5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 1L17 7L13 13" stroke="#1a3a5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Swipe hint — shown until first touch */}
        {!touched && (
          <div className="absolute inset-x-0 bottom-3 flex justify-center z-20 pointer-events-none sm:hidden">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-white/70 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
              ← Schieben →
            </span>
          </div>
        )}
      </div>

      {/* Label */}
      <p className="text-center text-sm font-semibold text-gray-500 tracking-wide">{pair.label}</p>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="vorher-nachher" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34,197,94,0.04) 0%, transparent 60%),
                            radial-gradient(circle at 80% 20%, rgba(26,58,92,0.04) 0%, transparent 60%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-14"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Ergebnisse
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-4">
            Vorher &{' '}
            <span className="bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
              Nachher
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Schieben Sie den Regler und sehen Sie selbst – echte Ergebnisse unserer Arbeit.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {pairs.map((pair, i) => (
            <motion.div
              key={pair.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease, delay: i * 0.07 }}
            >
              <SliderCard pair={pair} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
