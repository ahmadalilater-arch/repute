"use client";

import React from 'react';
import { T, Tag, Btn } from './ui';
import { Globe, Phone } from './canvas';
import { useWaitlist } from '@/hooks/use-waitlist';

export function W({ c, delay = 0, children }: any) {
  return (
    <span
      className="inline-block translate-y-8 opacity-0 animate-fadeUp py-1"
      style={{ animationDelay: `${delay}s`, color: c }}
    >
      {children}
    </span>
  );
}

export function Hero() {
  const { email, setEmail, status, submit } = useWaitlist();
  const done = status === "success";
  const loading = status === "loading";

  return (
    <section className="min-h-screen w-full flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden relative bg-[#06070D]">
      {/* Animated SVG Grid */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="fade" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="mask">
              <rect width="100%" height="100%" fill="url(#fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" mask="url(#mask)" />
        </svg>
      </div>

      {/* Background Glows */}
      <div className="absolute w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.05)_0%,transparent_70%)] -top-[10%] -left-[10%] pointer-events-none blur-3xl animate-pulse" />
      <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.04)_0%,transparent_70%)] -bottom-[10%] -right-[10%] pointer-events-none blur-3xl animate-pulse" />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10 mx-auto">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
          <div className="mb-10 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
            <Tag color="gold" dot pulse className="bg-white/5 border-white/10 px-4 py-1.5 rounded-full">
              Reputation Firewall · v2.4
            </Tag>
          </div>

          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.1] tracking-tight mb-10 text-white">
            <span className="block mb-2 overflow-visible">
              <W delay={0.2}>The</W> <W delay={0.3} c={T.gold}>Reputation</W>
            </span>
            <span className="block mb-2 overflow-visible">
              <W delay={0.4}>Firewall</W> <W delay={0.5}>for</W>
            </span>
            <span className="block overflow-visible">
              <W delay={0.6} c={T.sky}>Local</W> <W delay={0.7}>Shops.</W>
            </span>
          </h1>

          <p className="text-[18px] text-white/60 leading-relaxed mb-12 max-w-[540px] animate-fadeUp font-light" style={{ animationDelay: '1s' }}>
            Don't let one bad day ruin your business. We catch unhappy customers privately so you can fix the issue, while sending your happy fans straight to Google Maps.
          </p>

          {/* email CTA */}
          <div className="animate-fadeUp w-full max-w-[540px]" style={{ animationDelay: '1.2s' }}>
            {done ? (
              <div className="px-8 py-6 border border-emerald-500/20 bg-emerald-500/5 rounded-2xl font-mono text-[15px] text-emerald-400 flex items-center gap-3 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                You&apos;re on the list! We&apos;ll reach out soon.
              </div>
            ) : (
              <form onSubmit={submit} className="group relative p-1 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] focus-within:border-[#C9A84C]/50 focus-within:bg-[#C9A84C]/5 focus-within:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-500 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="Enter your business email"
                    className="flex-1 px-6 py-5 bg-transparent border-none text-[16px] text-white placeholder:text-white/20 group-hover:placeholder:text-white/30 focus:ring-0 transition-all disabled:opacity-50 outline-none"
                  />
                  <Btn
                    v="gold"
                    sz="lg"
                    type="submit"
                    loading={loading}
                    className="sm:w-auto w-full justify-center px-10 py-5 rounded-xl"
                  >
                    {status === "error" ? "Try Again" : "Secure My Business"}
                  </Btn>
                </div>
              </form>
            )}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-6">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#06070D] bg-white/10 overflow-hidden">
                    <img src={`https://picsum.photos/seed/repute${i}/32/32`} alt="user" />
                  </div>
                ))}
              </div>
              <span className="font-mono text-[11px] text-white/30 tracking-widest uppercase">
                Trusted by 1,200+ luxury brands
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center items-center animate-fadeScale mt-16 lg:mt-0" style={{ animationDelay: '0.8s' }}>
          {/* Decorative Rings */}
          <div className="absolute w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none animate-spin-slow" />
          <div className="absolute w-[140%] h-[140%] border border-white/[0.02] rounded-full pointer-events-none animate-spin-slow-reverse" />

          <div className="absolute -right-[15%] top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block">
            <Globe size={600} opacity={0.05} />
          </div>

          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none transform hover:scale-[1.02] transition-transform duration-700">
            <Phone />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = ["Google Business Profile","Review Firewall","CSV Import","SMS · Email · WhatsApp","Sentiment Routing","Private Inbox","Funnel Analytics","Rating Boost Tracking","Multi-Location","Auto-Reply Templates"];
  return (
    <div className="overflow-hidden border-y border-white/10 py-5 bg-white/[0.015] backdrop-blur-sm">
      <div className="flex gap-16 w-max animate-mq hover:[animation-play-state:paused]">
        {[...items,...items].map((item,i) => (
          <span key={i} className="flex items-center gap-3 font-mono text-[11px] tracking-[0.15em] text-white/30 whitespace-nowrap uppercase">
            <span className="text-[#C9A84C] text-[12px]">✦</span>{item}
          </span>
        ))}
      </div>
    </div>
  );
}
