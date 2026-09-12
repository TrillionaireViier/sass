"use client";

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import * as Designs from "@/components/designs/Designs";
import { SharedBlocks, ThemeConfig } from "@/components/SharedBlocks";
import { ArrowLeft } from 'lucide-react';

const themes: Record<number, ThemeConfig> = {
  1: { bg: "bg-slate-950", text: "text-slate-200", accent: "text-blue-400", cardBg: "bg-white/5", borderColor: "border-white/10" },
  2: { bg: "bg-slate-900", text: "text-white", accent: "text-purple-400", cardBg: "bg-white/5", borderColor: "border-white/10" },
  3: { bg: "bg-white", text: "text-black", accent: "text-black", cardBg: "bg-gray-100", borderColor: "border-black" },
  4: { bg: "bg-fuchsia-600", text: "text-white", accent: "text-yellow-300", cardBg: "bg-white/10", borderColor: "border-white/20" },
  5: { bg: "bg-[#f0f0f0]", text: "text-black", accent: "text-red-500", cardBg: "bg-yellow-400", borderColor: "border-black" },
  6: { bg: "bg-blue-900", text: "text-white", accent: "text-blue-300", cardBg: "bg-white/10", borderColor: "border-blue-700" },
  7: { bg: "bg-black", text: "text-[#00ff00]", accent: "text-[#00ff00]", cardBg: "bg-[#003300]", borderColor: "border-[#00ff00]" },
  8: { bg: "bg-pink-50", text: "text-gray-600", accent: "text-pink-400", cardBg: "bg-white", borderColor: "border-pink-200" },
  9: { bg: "bg-[#2C3E2D]", text: "text-[#E8DCC4]", accent: "text-white", cardBg: "bg-[#4A5D4B]", borderColor: "border-[#E8DCC4]/30" },
  10: { bg: "bg-[#111]", text: "text-[#D4AF37]", accent: "text-[#D4AF37]", cardBg: "bg-[#222]", borderColor: "border-[#D4AF37]" },
  11: { bg: "bg-indigo-900", text: "text-cyan-400", accent: "text-pink-500", cardBg: "bg-indigo-800", borderColor: "border-pink-500" },
  12: { bg: "bg-slate-950", text: "text-blue-500", accent: "text-blue-300", cardBg: "bg-blue-950/20", borderColor: "border-blue-900" },
  13: { bg: "bg-stone-100", text: "text-stone-800", accent: "text-stone-500", cardBg: "bg-white", borderColor: "border-stone-300" },
  14: { bg: "bg-amber-100", text: "text-amber-900", accent: "text-amber-500", cardBg: "bg-white", borderColor: "border-amber-200" },
  15: { bg: "bg-purple-600", text: "text-purple-100", accent: "text-white", cardBg: "bg-purple-700", borderColor: "border-purple-400" },
  16: { bg: "bg-white", text: "text-black", accent: "text-yellow-500", cardBg: "bg-gray-100", borderColor: "border-black" },
  17: { bg: "bg-gray-900", text: "text-white", accent: "text-indigo-400", cardBg: "bg-gray-800", borderColor: "border-gray-700" },
  18: { bg: "bg-slate-900", text: "text-white", accent: "text-blue-400", cardBg: "bg-white/10", borderColor: "border-white/20" },
  19: { bg: "bg-gray-800", text: "text-gray-300", accent: "text-green-400", cardBg: "bg-gray-900", borderColor: "border-gray-700" },
  20: { bg: "bg-teal-500", text: "text-white", accent: "text-teal-200", cardBg: "bg-white/10", borderColor: "border-white/20" },
  21: { bg: "bg-[#faf9f8]", text: "text-[#242424]", accent: "text-[#0f6cbd]", cardBg: "bg-white", borderColor: "border-gray-200" },
  22: { bg: "bg-[#faf9f8] dark:bg-[#11100f]", text: "text-[#242424] dark:text-white", accent: "text-[#0f6cbd]", cardBg: "bg-white/70 dark:bg-[#292929]/70", borderColor: "border-black/5 dark:border-white/5" },
  23: { bg: "bg-[#faf9f8]", text: "text-[#242424]", accent: "text-[#0f6cbd]", cardBg: "bg-white", borderColor: "border-gray-200" },
};

export default function DesignPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const id = parseInt(unwrappedParams.id, 10);

  if (isNaN(id) || id < 1 || id > 23) {
    return <div className="p-10 text-center">Design not found</div>;
  }

  const DesignComponent = (Designs as any)[`Design${id}`];
  const theme = themes[id] || themes[1];

  return (
    <main className="flex-1 w-full relative">
      {/* Back button */}
      <button 
        onClick={() => router.push('/')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl text-white hover:bg-black/80 transition-colors border border-white/20"
      >
        <ArrowLeft size={16} /> Back to Gallery
      </button>

      {/* 1st Block: The original Hero/Design */}
      <DesignComponent />

      {/* Blocks 2-8: The Shared Sections configured with the theme */}
      <SharedBlocks theme={theme} />
    </main>
  );
}
