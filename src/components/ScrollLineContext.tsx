'use client';

import { createContext, useContext, useRef } from 'react';
import { useMotionValue, MotionValue } from 'framer-motion';

export const ScrollLineContext = createContext<MotionValue<number> | null>(null);

export function useScrollLineY() {
  return useContext(ScrollLineContext);
}

export function ScrollLineProvider({ children }: { children: React.ReactNode }) {
  const lineAbsoluteY = useMotionValue(0);
  return (
    <ScrollLineContext.Provider value={lineAbsoluteY}>
      {children}
    </ScrollLineContext.Provider>
  );
}
