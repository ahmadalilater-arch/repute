"use client";

import React from 'react';
import { T, Btn, Reveal, Card, Eyebrow, H2, Gem } from './ui';
import { Shield, Lock, CheckCircle } from 'lucide-react';
import { useWaitlist } from '@/hooks/use-waitlist';

export function Proof() {
  const data = [
    { q:"Went from 3.8 to 4.7 on Google in 8 weeks. The intercept rate alone saved us from at least 40 bad reviews.", name:"Marco T.", role:"Restaurant Owner · NYC" },
    { q:"Our competitor has 400 reviews. We have 900. Repute basically printed us a full page of 5-star credibility.", name:"Sarah K.", role:"Salon Director · Los Angeles" },
    { q:"Managing 14 locations is now actually possible. The centralized inbox is the single best feature I've seen in any tool.", name:"James R.", role:"Franchise GM · Chicago" },
  ];
  return (
    <section id="proof" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <Reveal><Eyebrow color="sky">Social Proof</Eyebrow></Reveal>
        <Reveal delay="1"><H2>Real operators.<br /><em className="text-white/60 not-italic">Real results.</em></H2></Reveal>
      </div>

      {/* Bento Grid layout as requested */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <Reveal delay="2">
          <Card className="p-8 h-full flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-repute-gold/10 flex items-center justify-center mb-6">
              <Shield className="text-repute-gold" />
            </div>
            <div className="text-3xl font-serif text-white mb-2">Firewall Active</div>
            <div className="text-sm font-mono text-white/40 uppercase tracking-widest">24/7 Monitoring</div>
          </Card>
        </Reveal>
        <Reveal delay="3">
          <Card className="p-8 h-full flex flex-col items-center text-center border-repute-gold/20 bg-repute-gold/[0.02]">
            <div className="text-5xl font-serif text-repute-gold mb-4">+0.9</div>
            <div className="text-xl text-white mb-2">Avg Rating Boost</div>
            <div className="text-sm font-mono text-white/40 uppercase tracking-widest">Proven ROI</div>
          </Card>
        </Reveal>
        <Reveal delay="4">
          <Card className="p-8 h-full flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
              <CheckCircle className="text-emerald-500" />
            </div>
            <div className="text-3xl font-serif text-white mb-2">100% Private</div>
            <div className="text-sm font-mono text-white/40 uppercase tracking-widest">Resolution Rate</div>
          </Card>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((t,i) => (
          <Reveal key={i} delay={i + 5}>
            <Card hover glow glowColor={T.gold} className="p-7 h-full">
              <div className="absolute -top-1 right-3.5 font-serif text-8xl text-[#C9A84C]/5 leading-none pointer-events-none">&quot;</div>
              <div className="text-[13px] mb-3">⭐⭐⭐⭐⭐</div>
              <p className="font-serif text-[15px] leading-[1.72] text-white/70 mb-5 italic">&quot;{t.q}&quot;</p>
              <div className="text-sm font-bold text-white">{t.name}</div>
              <div className="text-[10px] text-white/40 mt-1 font-mono tracking-widest uppercase">{t.role}</div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Security() {
  return (
    <section id="security" className="py-24 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-3">
             <Lock className="w-5 h-5" />
             <span className="font-mono text-xs tracking-[0.2em] uppercase text-white">GDPR Compliant</span>
           </div>
           <div className="flex items-center gap-3">
             <Shield className="w-5 h-5" />
             <span className="font-mono text-xs tracking-[0.2em] uppercase text-white">SOC2 Ready</span>
           </div>
           <div className="flex items-center gap-3">
             <Gem className="w-5 h-5" />
             <span className="font-mono text-xs tracking-[0.2em] uppercase text-white">256-bit Encryption</span>
           </div>
        </div>
      </div>
    </section>
  );
}

export function Waitlist() {
  const { email, setEmail, status, submit } = useWaitlist();
  const done = status === "success";
  const loading = status === "loading";

  return (
    <section id="waitlist" className="relative py-32 px-6 md:px-12 text-center overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:`repeating-linear-gradient(0deg,transparent,transparent 54px,rgba(255,255,255,.01) 54px,rgba(255,255,255,.01) 55px),repeating-linear-gradient(90deg,transparent,transparent 54px,rgba(255,255,255,.01) 54px,rgba(255,255,255,.01) 55px)` }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <Reveal>
          <Eyebrow color="gold">Final Opportunity</Eyebrow>
          <H2 className="mb-8">Your next 1-star review<br />doesn&apos;t have to happen.</H2>
          <p className="text-lg text-white/50 leading-relaxed mx-auto mb-12 max-w-xl">
            Join 1,240+ luxury businesses using Repute to build their reputation while protecting it from the inside.
          </p>

          <div className="max-w-md mx-auto">
            {done ? (
              <div className="p-8 rounded-2xl bg-repute-gold/5 border border-repute-gold/20 backdrop-blur-md">
                <div className="text-repute-gold font-serif text-2xl mb-2">You&apos;re on the list.</div>
                <p className="text-white/40 text-sm">We&apos;ll reach out when your industry is ready for deployment.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="Enter your business email"
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-xl text-white focus:border-repute-gold/50 outline-none transition-all"
                />
                <Btn v="gold" sz="xl" type="submit" loading={loading} className="w-full">
                  {status === "error" ? "Try Again" : "Secure My Business →"}
                </Btn>
                <p className="font-mono text-[10px] text-white/15 tracking-widest uppercase">
                  Founding member spots are limited
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 md:px-12 bg-[#06070D]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3 font-serif text-2xl text-white">
          <Gem /><span>Repute</span>
        </div>
        <p className="font-mono text-[11px] text-white/30 tracking-widest uppercase">
          © 2026 Repute · Reputation Firewall System
        </p>
        <button
          onClick={() => window.scrollTo({top:0,behavior:"smooth"})}
          className="font-mono text-[11px] text-white/30 tracking-widest uppercase bg-transparent border border-white/10 py-2 px-5 rounded-full cursor-pointer transition-all duration-300 hover:text-repute-gold hover:border-repute-gold/30 hover:bg-white/5"
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
}
