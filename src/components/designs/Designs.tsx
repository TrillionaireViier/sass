import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Monitor, Rocket, Star, Code, Layers, Zap, Hexagon, Box, Globe, Shield, Activity, Cpu, Camera, Smartphone, Cloud, Sun, Moon, Wind, Settings, Search, Bell, ChevronDown, Check, BookOpen, Heart, MessageSquare, Target } from 'lucide-react';

const BaseLayout = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }} 
    className={`min-h-screen flex items-center justify-center p-8 ${className}`}
  >
    {children}
  </motion.div>
);

export const Design1 = () => (
  <BaseLayout className="bg-slate-950 text-slate-200 overflow-hidden relative">
    {/* Background Glows */}
    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none"></div>
    
    <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center justify-center text-center py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
      >
        <Sparkles className="w-4 h-4 text-blue-400" />
        <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">Web Studio Daniel</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-7xl md:text-8xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-500"
      >
        Crafting Digital<br />Masterpieces.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        We build fast, beautiful, and scalable web applications that elevate your brand and drive results.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
      >
        <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group">
          Start a Project
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 w-full sm:w-auto rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all backdrop-blur-md">
          View Portfolio
        </button>
      </motion.div>

      {/* Feature Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full text-left"
      >
        {[
          { icon: <Monitor className="w-6 h-6 text-blue-400" />, title: "Modern Design", desc: "Pixel-perfect interfaces that captivate users." },
          { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "Lightning Fast", desc: "Optimized for speed and performance." },
          { icon: <Code className="w-6 h-6 text-purple-400" />, title: "Clean Code", desc: "Scalable and maintainable architecture." }
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </BaseLayout>
);

export const Design2 = () => (
  <BaseLayout className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob"></div>
    <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000"></div>
    <div className="z-10 max-w-5xl mx-auto text-center backdrop-blur-2xl bg-white/5 p-16 rounded-3xl border border-white/10 shadow-2xl">
      <Monitor className="w-20 h-20 mx-auto mb-8 text-purple-300" />
      <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">Glassmorphism</h1>
      <p className="text-2xl text-gray-300 mb-10">Deep space and frosted glass.</p>
      <button className="px-10 py-5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-lg font-semibold backdrop-blur-md flex items-center gap-2 mx-auto">Get Started <ArrowRight size={20} /></button>
    </div>
  </BaseLayout>
);

export const Design3 = () => (
  <BaseLayout className="bg-white text-black">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-8xl font-black mb-8 tracking-tighter leading-none">LESS<br/>IS<br/>MORE.</h1>
        <p className="text-2xl text-gray-600 mb-10 max-w-md">Absolute minimalism. Focus on what truly matters.</p>
        <button className="px-8 py-4 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors">DISCOVER</button>
      </div>
      <div className="h-[600px] bg-gray-100 flex items-center justify-center">
        <div className="w-64 h-64 border-4 border-black rounded-full"></div>
      </div>
    </div>
  </BaseLayout>
);

export const Design4 = () => (
  <BaseLayout className="bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-7xl font-extrabold mb-6 drop-shadow-lg">Vibrant Energy</h1>
      <p className="text-2xl font-medium mb-12 drop-shadow-md">Unleash the full spectrum of colors.</p>
      <button className="px-10 py-4 bg-white text-fuchsia-600 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl">Join the vibe</button>
    </div>
  </BaseLayout>
);

export const Design5 = () => (
  <BaseLayout className="bg-[#f0f0f0] text-black">
    <div className="border-[8px] border-black p-12 bg-yellow-400 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto text-center transform -rotate-1">
      <h1 className="text-7xl font-black uppercase tracking-tighter border-b-[8px] border-black pb-4 mb-8">Brutalism</h1>
      <p className="text-3xl font-bold mb-10">Raw. Unpolished. Bold.</p>
      <button className="px-12 py-4 bg-black text-white text-2xl font-black uppercase hover:bg-red-500 hover:text-black border-4 border-black transition-colors">Click Me</button>
    </div>
  </BaseLayout>
);

export const Design6 = () => (
  <BaseLayout className="bg-blue-900 text-white">
    <div className="max-w-6xl mx-auto text-center">
      <Rocket className="w-24 h-24 mx-auto mb-8 text-blue-300" />
      <h1 className="text-6xl font-serif mb-6">Corporate Excellence</h1>
      <p className="text-xl text-blue-200 mb-10 font-light max-w-2xl mx-auto">Trust, reliability, and enterprise-grade solutions for your business needs.</p>
      <div className="flex justify-center gap-4">
        <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded hover:bg-blue-50 transition-colors">Our Services</button>
        <button className="px-8 py-3 border border-white text-white font-semibold rounded hover:bg-blue-800 transition-colors">Contact Us</button>
      </div>
    </div>
  </BaseLayout>
);

export const Design7 = () => (
  <BaseLayout className="bg-black text-[#00ff00] font-mono">
    <div className="max-w-4xl mx-auto border border-[#00ff00] p-12 shadow-[0_0_30px_rgba(0,255,0,0.3)]">
      <Code className="w-16 h-16 mb-6" />
      <h1 className="text-5xl font-bold mb-4 animate-pulse">CYBERPUNK_SYS</h1>
      <p className="text-xl mb-8 opacity-80">{`> INITIALIZING NEURAL NETWORK... OK`}</p>
      <button className="px-6 py-3 bg-[#00ff00] text-black font-bold hover:bg-black hover:text-[#00ff00] border border-[#00ff00] transition-colors">{`[ ACCESS TERMINAL ]`}</button>
    </div>
  </BaseLayout>
);

export const Design8 = () => (
  <BaseLayout className="bg-pink-50 text-gray-600">
    <div className="max-w-3xl mx-auto text-center">
      <div className="w-32 h-32 bg-pink-200 rounded-full mx-auto mb-8 flex items-center justify-center">
        <Star className="w-12 h-12 text-pink-400" />
      </div>
      <h1 className="text-6xl font-medium mb-6 text-gray-800">Soft & Gentle</h1>
      <p className="text-xl mb-10 font-light">A welcoming, pastel environment that puts users at ease.</p>
      <button className="px-8 py-3 bg-pink-300 text-white rounded-full font-medium hover:bg-pink-400 transition-colors">Embrace</button>
    </div>
  </BaseLayout>
);

export const Design9 = () => (
  <BaseLayout className="bg-[#2C3E2D] text-[#E8DCC4]">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-6xl font-serif italic mb-6">Organic Roots</h1>
        <p className="text-lg mb-8 opacity-90 leading-relaxed">Inspired by nature, designed for humanity. Discover the perfect balance.</p>
        <button className="px-8 py-4 border border-[#E8DCC4] rounded-sm hover:bg-[#E8DCC4] hover:text-[#2C3E2D] transition-colors">Explore Collection</button>
      </div>
      <div className="h-96 bg-[#4A5D4B] rounded-t-full rounded-b-xl flex justify-center items-center">
        <Globe className="w-32 h-32 opacity-50" />
      </div>
    </div>
  </BaseLayout>
);

export const Design10 = () => (
  <BaseLayout className="bg-[#111] text-[#D4AF37]">
    <div className="max-w-4xl mx-auto text-center border-y border-[#D4AF37] py-16">
      <h1 className="text-6xl font-serif tracking-[0.2em] uppercase mb-6">Luxuria</h1>
      <p className="text-sm tracking-[0.3em] uppercase mb-12 opacity-80">Premium Quality • Established 2024</p>
      <button className="px-10 py-3 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111] transition-colors uppercase tracking-widest text-sm">Exclusive Entry</button>
    </div>
  </BaseLayout>
);

export const Design11 = () => (
  <BaseLayout className="bg-indigo-900 text-cyan-400">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-yellow-500 drop-shadow-[0_5px_5px_rgba(255,0,255,0.5)] mb-8">RETRO WAVE</h1>
      <p className="text-2xl font-mono mb-12 text-pink-400">Welcome to the future of 1985.</p>
      <button className="px-8 py-4 bg-cyan-500 text-indigo-900 font-black text-xl hover:bg-pink-500 hover:text-white transition-colors border-b-4 border-cyan-700 hover:border-pink-700 active:border-b-0 active:mt-1">START GAME</button>
    </div>
  </BaseLayout>
);

export const Design12 = () => (
  <BaseLayout className="bg-slate-950 text-blue-500 font-mono">
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
      <div className="col-span-3 lg:col-span-2 border border-blue-900 bg-blue-950/20 p-8 rounded">
        <Activity className="w-10 h-10 mb-4 text-blue-400" />
        <h1 className="text-4xl font-bold mb-4 text-blue-100">SYSTEM.DASHBOARD</h1>
        <p className="text-blue-300">Monitoring all active nodes and subroutines.</p>
      </div>
      <div className="border border-blue-900 bg-blue-950/20 p-8 rounded flex flex-col justify-between">
        <h3 className="text-sm text-blue-400 mb-2">STATUS</h3>
        <div className="text-6xl font-light text-blue-100">99.9%</div>
      </div>
    </div>
  </BaseLayout>
);

export const Design13 = () => (
  <BaseLayout className="bg-stone-100 text-stone-800">
    <div className="max-w-4xl mx-auto text-center py-20 border-x border-stone-300 px-12">
      <h1 className="text-5xl font-serif italic mb-8">The Editorial</h1>
      <div className="h-px w-32 bg-stone-400 mx-auto mb-8"></div>
      <p className="text-lg font-serif leading-relaxed mb-10">A classic approach to modern typography. Elegant, readable, and timeless.</p>
      <button className="px-6 py-2 border-b border-stone-800 font-serif italic hover:text-stone-500 hover:border-stone-500 transition-colors">Read the story</button>
    </div>
  </BaseLayout>
);

export const Design14 = () => (
  <BaseLayout className="bg-amber-100 text-amber-900">
    <div className="max-w-4xl mx-auto text-center bg-white p-16 rounded-[4rem] shadow-xl">
      <Sun className="w-20 h-20 mx-auto mb-6 text-amber-500" />
      <h1 className="text-5xl font-extrabold mb-6">Playful & Happy</h1>
      <p className="text-xl mb-10 font-medium opacity-80">Rounded corners and warm colors to make you smile.</p>
      <button className="px-10 py-5 bg-amber-500 text-white font-bold rounded-full text-lg shadow-lg hover:scale-110 transition-transform">Say Hello 👋</button>
    </div>
  </BaseLayout>
);

export const Design15 = () => (
  <BaseLayout className="bg-purple-600 text-purple-100">
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-7xl font-black mb-8 text-white">Monochromatic.</h1>
      <p className="text-2xl mb-12 text-purple-200 max-w-2xl mx-auto">Sometimes one color is all you need to make a bold statement.</p>
      <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded shadow-lg hover:bg-purple-100 transition-colors">Experience Purple</button>
    </div>
  </BaseLayout>
);

export const Design16 = () => (
  <BaseLayout className="bg-white text-black p-0">
    <div className="w-full flex h-screen">
      <div className="w-1/2 p-20 flex flex-col justify-center border-r-8 border-black">
        <h1 className="text-8xl font-black uppercase mb-6 leading-none">MAG<br/>AZI<br/>NE.</h1>
        <p className="text-xl font-bold">Issue No. 01</p>
      </div>
      <div className="w-1/2 bg-yellow-400 p-20 flex flex-col justify-between">
        <div className="text-right text-4xl font-black">2026</div>
        <button className="self-end px-6 py-3 bg-black text-white font-bold uppercase hover:bg-white hover:text-black transition-colors">Subscribe</button>
      </div>
    </div>
  </BaseLayout>
);

export const Design17 = () => (
  <BaseLayout className="bg-gray-900 text-white p-0">
    <div className="flex w-full h-screen">
      <div className="w-1/2 flex items-center justify-center p-12 bg-indigo-600">
        <Shield className="w-32 h-32 text-indigo-200" />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center p-20">
        <h1 className="text-5xl font-bold mb-6">Split Screen</h1>
        <p className="text-lg text-gray-400 mb-8">Perfect balance of imagery and typography.</p>
        <button className="px-8 py-3 bg-white text-gray-900 rounded font-semibold hover:bg-gray-200 transition-colors">Learn More</button>
      </div>
    </div>
  </BaseLayout>
);

export const Design18 = () => (
  <BaseLayout className="bg-slate-900 text-white relative">
    <div className="absolute inset-0 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover opacity-40" />
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
      <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">Cinematic Hero</h1>
      <p className="text-xl mb-10 max-w-xl mx-auto drop-shadow-md">Let the visuals speak for themselves with a stunning full-screen background.</p>
      <button className="px-8 py-3 backdrop-blur-md bg-white/20 border border-white/50 rounded hover:bg-white/30 transition-colors">Watch Reel</button>
    </div>
  </BaseLayout>
);

export const Design19 = () => (
  <BaseLayout className="bg-gray-800 text-gray-300 font-mono">
    <div className="max-w-3xl mx-auto w-full bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-gray-950 px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-xs text-gray-500">terminal - bash</div>
      </div>
      <div className="p-8">
        <p className="text-green-400 mb-2">$ ./start_business.sh</p>
        <h1 className="text-4xl font-bold text-white mb-6">Developer First.</h1>
        <p className="mb-8">Build tools that developers actually want to use.</p>
        <div className="animate-pulse text-green-400">_</div>
      </div>
    </div>
  </BaseLayout>
);

export const Design20 = () => (
  <BaseLayout className="bg-gradient-to-r from-teal-400 to-blue-500 text-white">
    <div className="max-w-5xl mx-auto text-center perspective-1000">
      <div className="transform rotate-x-12 rotate-y-12 bg-white/10 p-16 rounded-3xl backdrop-blur-sm border border-white/20 shadow-[20px_20px_0px_rgba(0,0,0,0.1)]">
        <Hexagon className="w-24 h-24 mx-auto mb-8 text-teal-200" />
        <h1 className="text-6xl font-black mb-6">3D Isometric</h1>
        <p className="text-xl mb-10 opacity-90">Adding depth and perspective to flat interfaces.</p>
        <button className="px-8 py-3 bg-white text-teal-600 font-bold rounded shadow-lg hover:translate-y-1 transition-transform">Enter Dimension</button>
      </div>
    </div>
  </BaseLayout>
);

export const Design21 = () => (
  <BaseLayout className="bg-[#f3f2f1] text-[#242424] font-sans p-0 w-full">
    {/* Fluent 2 is characterized by neutral backgrounds, clean typography (Segoe UI/San-serif), 
        distinct elevation shadows, rounded corners, and a signature blue accent color. */}
    <div className="w-full h-screen flex flex-col bg-[#faf9f8] overflow-hidden">
      
      {/* Top Header */}
      <header className="h-12 bg-white flex items-center justify-between px-4 border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-[#0f6cbd] flex items-center justify-center text-white font-bold">
            <Box size={18} />
          </div>
          <span className="font-semibold text-sm">Fluent Dashboard</span>
        </div>
        
        <div className="flex-1 max-w-lg mx-4 hidden md:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-500" />
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full py-1.5 pl-10 pr-3 bg-[#f3f2f1] border-b border-gray-400 hover:border-gray-500 focus:border-[#0f6cbd] focus:bg-white focus:outline-none focus:ring-0 text-sm transition-colors rounded-t"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
            <Bell size={18} className="text-gray-600" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
            <Settings size={18} className="text-gray-600" />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#0f6cbd] text-white flex items-center justify-center text-xs font-semibold ml-2 cursor-pointer shadow-sm">
            FL
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-64 bg-[#f3f2f1] border-r border-gray-200 flex flex-col p-2 hidden sm:flex shrink-0">
          <nav className="flex-1 flex flex-col gap-1">
            {['Home', 'Recent', 'Favorites', 'Shared with me'].map((item, i) => (
              <button 
                key={item}
                className={`flex items-center gap-3 px-3 py-2 rounded text-sm w-full text-left transition-colors
                  ${i === 0 ? 'bg-white font-semibold shadow-sm' : 'hover:bg-gray-200/50 text-gray-700'}`}
              >
                {i === 0 ? <Activity size={16} className="text-[#0f6cbd]" /> : <Cloud size={16} />}
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6 lg:p-8 bg-[#faf9f8]">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h1 className="text-2xl font-semibold mb-1 text-[#242424]">Welcome back</h1>
                <p className="text-sm text-[#616161]">Here's what is happening with your projects today.</p>
              </div>
              <button className="bg-[#0f6cbd] hover:bg-[#115ea3] active:bg-[#0f548c] text-white px-4 py-1.5 rounded-md text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm">
                <Sparkles size={16} />
                New Project
              </button>
            </div>

            {/* Fluent Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { title: 'Total Revenue', value: '$45,231.89', trend: '+20.1%' },
                { title: 'Active Users', value: '2,350', trend: '+15.2%' },
                { title: 'System Status', value: 'Healthy', trend: '99.9% Uptime' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.08),0_0_2px_rgba(0,0,0,0.08)] border border-transparent hover:border-gray-200 transition-colors cursor-pointer">
                  <h3 className="text-xs font-semibold text-[#616161] uppercase tracking-wider mb-2">{stat.title}</h3>
                  <div className="text-2xl font-semibold text-[#242424] mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-green-600">{stat.trend}</div>
                </div>
              ))}
            </div>

            {/* Data Table Area */}
            <div className="bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.08),0_0_2px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-base font-semibold text-[#242424]">Recent Documents</h2>
                <button className="text-[#0f6cbd] text-sm font-semibold hover:underline">View all</button>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { name: 'Q3 Financial Report.xlsx', date: 'Oct 24, 2026', author: 'Daniel' },
                  { name: 'Marketing Campaign 2027.docx', date: 'Oct 23, 2026', author: 'Sarah' },
                  { name: 'Design System V2.fig', date: 'Oct 21, 2026', author: 'Mike' },
                ].map((doc, i) => (
                  <div key={i} className="px-5 py-3 flex items-center justify-between hover:bg-[#f3f2f1]/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
                        <Box size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#242424] group-hover:text-[#0f6cbd] transition-colors">{doc.name}</p>
                        <p className="text-xs text-[#616161]">Modified {doc.date}</p>
                      </div>
                    </div>
                    <div className="text-sm text-[#616161] hidden sm:block">{doc.author}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  </BaseLayout>
);

export const Design22 = () => (
  <BaseLayout className="bg-[#faf9f8] dark:bg-[#11100f] text-[#242424] dark:text-[#ffffff] overflow-hidden relative font-sans transition-colors duration-300">
    {/* Fluent 2 Mica-like Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#0f6cbd]/10 dark:bg-[#0f6cbd]/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#2886de]/10 dark:bg-[#2886de]/15 rounded-full blur-[120px]"></div>
    </div>
    
    <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center justify-center py-20 px-4 md:px-8">
      
      {/* Header/Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/60 dark:bg-black/40 border border-black/5 dark:border-white/10 backdrop-blur-xl mb-12 shadow-sm"
      >
        <Sparkles className="w-4 h-4 text-[#0f6cbd] dark:text-[#479ef5]" />
        <span className="text-[12px] font-semibold text-[#242424] dark:text-[#ffffff] tracking-wide uppercase">Web Studio Daniel</span>
      </motion.div>

      {/* Hero Copy */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-semibold mb-6 tracking-tight text-[#242424] dark:text-[#ffffff]"
        >
          Crafting Digital<br />Masterpieces.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-[#616161] dark:text-[#d2d0ce] max-w-2xl mx-auto leading-relaxed font-normal"
        >
          We build fast, beautiful, and scalable web applications that elevate your brand and drive results.
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full sm:w-auto mb-24"
      >
        <button className="px-6 py-2.5 w-full sm:w-auto rounded-[4px] bg-[#0f6cbd] hover:bg-[#115ea3] active:bg-[#0f548c] text-white font-semibold transition-colors shadow-sm flex items-center justify-center gap-2 group">
          Start a Project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <button className="px-6 py-2.5 w-full sm:w-auto rounded-[4px] bg-white/60 hover:bg-white/80 dark:bg-[#ffffff]/10 dark:hover:bg-[#ffffff]/15 text-[#242424] dark:text-white font-semibold border border-black/5 dark:border-white/10 transition-colors backdrop-blur-xl shadow-sm">
          View Portfolio
        </button>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left"
      >
        {/* Feature 1 */}
        <div className="p-6 rounded-[8px] bg-white/70 dark:bg-[#292929]/70 border border-black/5 dark:border-white/5 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-[4px] bg-[#0f6cbd]/10 dark:bg-[#0f6cbd]/20 flex items-center justify-center mb-5">
            <Monitor className="w-5 h-5 text-[#0f6cbd] dark:text-[#479ef5]" />
          </div>
          <h3 className="text-[20px] font-semibold text-[#242424] dark:text-white mb-2 leading-tight">Modern Design</h3>
          <p className="text-[#616161] dark:text-[#d2d0ce] text-[14px] leading-relaxed font-normal">
            Pixel-perfect interfaces that captivate users.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 rounded-[8px] bg-white/70 dark:bg-[#292929]/70 border border-black/5 dark:border-white/5 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-[4px] bg-[#0f6cbd]/10 dark:bg-[#0f6cbd]/20 flex items-center justify-center mb-5">
            <Zap className="w-5 h-5 text-[#0f6cbd] dark:text-[#479ef5]" />
          </div>
          <h3 className="text-[20px] font-semibold text-[#242424] dark:text-white mb-2 leading-tight">Lightning Fast</h3>
          <p className="text-[#616161] dark:text-[#d2d0ce] text-[14px] leading-relaxed font-normal">
            Optimized for speed and performance.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 rounded-[8px] bg-white/70 dark:bg-[#292929]/70 border border-black/5 dark:border-white/5 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-[4px] bg-[#0f6cbd]/10 dark:bg-[#0f6cbd]/20 flex items-center justify-center mb-5">
            <Code className="w-5 h-5 text-[#0f6cbd] dark:text-[#479ef5]" />
          </div>
          <h3 className="text-[20px] font-semibold text-[#242424] dark:text-white mb-2 leading-tight">Clean Code</h3>
          <p className="text-[#616161] dark:text-[#d2d0ce] text-[14px] leading-relaxed font-normal">
            Scalable and maintainable architecture.
          </p>
        </div>
      </motion.div>

    </div>
  </BaseLayout>
);

export const Design23 = () => (
  <BaseLayout className="bg-[#faf9f8] text-[#242424] overflow-hidden relative font-sans w-full p-0 block">
    <div className="w-full min-h-screen flex flex-col relative z-10">
      {/* Background meshes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-20%] w-[150vw] md:w-[800px] h-[150vw] md:h-[800px] bg-gradient-to-br from-[#0f6cbd]/20 to-[#c239b3]/20 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[120vw] md:w-[600px] h-[120vw] md:h-[600px] bg-gradient-to-tr from-[#115ea3]/15 to-transparent rounded-full blur-[80px] md:blur-[100px]"></div>
      </div>
      
      {/* Navigation */}
      <nav className="w-full h-16 bg-white/70 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 md:px-8 relative z-50 shrink-0">
        <div className="flex items-center gap-6">
          <div className="font-semibold text-lg flex items-center gap-2">
            <Monitor className="text-[#0f6cbd]" size={20} />
            <span className="hidden sm:inline">Daniel Studio</span>
            <span className="sm:hidden">DS</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Услуги</a>
            <a href="#" className="hover:text-black transition-colors">Портфолио</a>
            <a href="#" className="hover:text-black transition-colors">О нас</a>
          </div>
        </div>
        <div className="text-sm font-medium bg-[#0f6cbd] text-white px-4 py-2 rounded-lg shadow-sm hover:bg-[#115ea3] transition-colors cursor-pointer">
          Связаться с нами
        </div>
      </nav>

      <div className="max-w-7xl w-full mx-auto relative z-10 px-4 sm:px-8 py-16 md:py-24 flex-1">
        {/* Hero Section */}
        <div className="mb-16 md:mb-24">
          <p className="text-lg md:text-xl text-gray-600 mb-2 font-medium">Диджитал Агентство</p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold mb-8 md:mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
            Мы Создаем<br/>Будущее.
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
            <div className="group cursor-pointer bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center justify-between">
                Веб-дизайн <ArrowRight className="text-[#0f6cbd] opacity-100 md:opacity-0 md:group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </h2>
              <p className="text-gray-600 text-sm md:text-base">Потрясающие, доведенные до идеала интерфейсы, созданные для вовлечения и конверсии.</p>
            </div>
            <div className="group cursor-pointer bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 flex items-center justify-between">
                Разработка <ArrowRight className="text-[#0f6cbd] opacity-100 md:opacity-0 md:group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </h2>
              <p className="text-gray-600 text-sm md:text-base">Быстрые, масштабируемые и безопасные современные веб-приложения.</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Наша Экспертиза</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {['E-Commerce', 'Корпоративные Сайты', 'Веб-приложения', 'SEO Оптимизация'].map((service) => (
              <div key={service} className="bg-white/50 backdrop-blur-md p-4 md:p-6 rounded-xl border border-gray-200/50 hover:bg-white transition-colors cursor-pointer text-center font-semibold text-gray-700 hover:text-[#0f6cbd] text-sm md:text-base">
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Последние Проекты</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "Финтех Платформа", desc: "Современный банковский дашборд для криптостартапа." },
              { title: "Магазин Одежды", desc: "Высококонверсионный интернет-магазин с уникальным дизайном." },
              { title: "Медицинский Портал", desc: "Доступная и безопасная система для онлайн-клиник." }
            ].map((project, i) => (
              <div key={i} className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-full h-32 md:h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 overflow-hidden relative">
                  <Box size={32} className="relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50"></div>
                </div>
                <h4 className="font-semibold text-lg mb-1 md:mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
);
