"use client";

import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";

export default function Template({ children }: { children: React.ReactNode }) {
  const calculateRandomBlockDelay = (rowIndex: number, totalRows: number) => {
    const blockDelay = Math.random() * 0.5;
    const rowDelay = (totalRows - rowIndex - 1) * 0.05;
    return blockDelay + rowDelay;
  };

  return (
    <div>
      {children}
      <AnimatePresence mode="wait">
        <div className="blocks-container transition-in">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {Array.from({ length: 11 }).map((_, blockIndex) => (
                <motion.div
                  key={blockIndex}
                  className="box"
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 0 }}
                  exit={{ scaleY: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: calculateRandomBlockDelay(rowIndex, 10),
                  }}
                ></motion.div>
              ))}
            </div>
          ))}
        </div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <div className="blocks-container transition-out">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {Array.from({ length: 11 }).map((_, blockIndex) => (
                <motion.div
                  key={blockIndex}
                  className="box"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 0 }}
                  exit={{ scaleY: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: calculateRandomBlockDelay(rowIndex, 10),
                  }}
                ></motion.div>
              ))}
            </div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
