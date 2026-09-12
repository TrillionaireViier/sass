"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Home() {
  const totalDesigns = 23;
  const designs = Array.from({ length: totalDesigns }, (_, i) => i + 1);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium tracking-wide uppercase">Design Gallery</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Web Studio <span className="text-blue-500">Daniel</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Explore 23 unique, fully-functional design systems. Each design now includes 8 complete sections.
          </motion.p>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {designs.map((id) => (
            <Link key={id} href={`/design/${id}`}>
              <div className="group relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-colors flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-2xl font-bold z-10 group-hover:scale-110 transition-transform">
                  Design {id}
                </h2>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
