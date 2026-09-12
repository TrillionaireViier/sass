"use client";

import React from "react";
import { useDesign } from "@/context/DesignContext";
import { 
  Settings2, 
  Layout, Layers, Grid, Box, Square, Circle, 
  Hexagon, Octagon, Triangle, Pentagon, Diamond, 
  Star, Sun, Moon, Cloud, Wind, Droplets, Flame, 
  Zap, Sparkles, Crown, Palette
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const DESIGN_ICONS = [
  Layout, Layers, Grid, Box, Square, Circle, 
  Hexagon, Octagon, Triangle, Pentagon, Diamond, 
  Star, Sun, Moon, Cloud, Wind, Droplets, Flame, 
  Zap, Sparkles, Crown, Palette
];

export function DesignSwitcher() {
  const { activeDesign, setActiveDesign } = useDesign();
  const [isOpen, setIsOpen] = useState(false);

  const totalDesigns = 22;
  const availableDesigns = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 p-4 rounded-2xl shadow-2xl flex flex-col gap-2 min-w-[240px]"
          >
            <h3 className="text-sm font-semibold text-white mb-2">Select Design</h3>
            <div className="grid grid-cols-4 gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {Array.from({ length: totalDesigns }).map((_, i) => {
                const id = i + 1;
                const isAvailable = availableDesigns.includes(id);
                const IconComponent = DESIGN_ICONS[i] || Box;

                return (
                  <button
                    key={id}
                    onClick={() => {
                      if (isAvailable) {
                        setActiveDesign(id);
                        setIsOpen(false);
                      }
                    }}
                    disabled={!isAvailable}
                    title={`Design ${id}`}
                    className={`
                      w-10 h-10 rounded-xl flex items-center justify-center transition-all
                      ${
                        activeDesign === id
                          ? "bg-blue-500 text-white ring-2 ring-blue-300 ring-offset-2 ring-offset-zinc-900 shadow-lg shadow-blue-500/30"
                          : isAvailable
                          ? "bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                          : "bg-black/40 text-zinc-600 cursor-not-allowed"
                      }
                    `}
                  >
                    <IconComponent size={20} strokeWidth={activeDesign === id ? 2.5 : 2} />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105 ml-auto block"
      >
        <Settings2 size={24} />
      </button>
    </div>
  );
}
