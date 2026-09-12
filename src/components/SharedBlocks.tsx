import React from 'react';
import { motion } from 'framer-motion';

export interface ThemeConfig {
  bg: string;          // Main background color (e.g. "bg-slate-900")
  text: string;        // Main text color (e.g. "text-white")
  accent: string;      // Accent color for buttons/highlights (e.g. "bg-blue-500", "text-blue-500")
  cardBg: string;      // Background for cards (e.g. "bg-white/10")
  borderColor: string; // Border color (e.g. "border-white/20")
}

export const SharedBlocks = ({ theme }: { theme: ThemeConfig }) => {
  return (
    <div className={`w-full ${theme.bg} ${theme.text}`}>
      
      {/* Block 2: About */}
      <section className={`py-20 px-8 border-t ${theme.borderColor}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl font-bold mb-6">About the Project</h2>
            <p className="text-lg opacity-80 leading-relaxed mb-6">
              We focus on delivering high-performance, visually stunning digital experiences. Our methodology ensures that every pixel serves a purpose, bridging the gap between aesthetics and functionality.
            </p>
            <button className={`px-6 py-3 rounded font-medium ${theme.accent.replace('text-', 'bg-')} text-white hover:opacity-80 transition-opacity`}>
              Learn More
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className={`flex-1 h-80 rounded-2xl ${theme.cardBg} ${theme.borderColor} border flex items-center justify-center`}
          >
            <span className="opacity-50">Image Placeholder</span>
          </motion.div>
        </div>
      </section>

      {/* Block 3: Features */}
      <section className={`py-20 px-8 border-t ${theme.borderColor}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Scalability', 'Security', 'Performance'].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl ${theme.cardBg} ${theme.borderColor} border`}
              >
                <h3 className={`text-2xl font-semibold mb-4 ${theme.accent}`}>{feat}</h3>
                <p className="opacity-80">
                  Built from the ground up to ensure absolute reliability and cutting-edge performance.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 4: Stats */}
      <section className={`py-20 px-8 border-t ${theme.borderColor}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around text-center gap-8">
          {[
            { value: "1M+", label: "Lines of Code" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
              <div className={`text-5xl font-black mb-2 ${theme.accent}`}>{stat.value}</div>
              <div className="text-lg font-medium opacity-80 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Block 5: Gallery */}
      <section className={`py-20 px-8 border-t ${theme.borderColor}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Showcase Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className={`aspect-square rounded-xl ${theme.cardBg} border ${theme.borderColor} flex items-center justify-center`}
              >
                <span className="opacity-30">Image {item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 6: Donate/CTA */}
      <section className={`py-24 px-8 border-t ${theme.borderColor} text-center`}>
        <div className={`max-w-4xl mx-auto p-12 rounded-3xl ${theme.cardBg} border ${theme.borderColor}`}>
          <h2 className="text-4xl font-bold mb-6">Support the Development</h2>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Your contributions help us maintain the servers, build new features, and continue providing top-tier digital experiences.
          </p>
          <button className={`px-8 py-4 rounded-full font-bold text-lg ${theme.accent.replace('text-', 'bg-')} text-white shadow-lg hover:scale-105 transition-transform`}>
            Contribute Now
          </button>
        </div>
      </section>

      {/* Block 7: FAQ */}
      <section className={`py-20 px-8 border-t ${theme.borderColor}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {[
              { q: "Is this responsive?", a: "Yes, every component is designed mobile-first." },
              { q: "How do I change the theme?", a: "The theme dynamically adapts to the selected parent design context." },
              { q: "Is it open source?", a: "Parts of our architecture are available for the community." }
            ].map((faq, i) => (
              <details key={i} className={`p-6 rounded-xl ${theme.cardBg} border ${theme.borderColor} group`}>
                <summary className={`text-xl font-semibold cursor-pointer list-none flex justify-between ${theme.accent}`}>
                  {faq.q}
                  <span className="group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 opacity-80">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Block 8: Footer */}
      <footer className={`py-12 px-8 border-t ${theme.borderColor} text-center`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Web Studio Daniel</h2>
          <p className="opacity-60 mb-6">info@webstudio-daniel.com | +1 234 567 890</p>
          <p className="opacity-40 text-sm">© 2026 Web Studio Daniel. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};
