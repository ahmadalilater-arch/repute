"use client";

import React from 'react';
import { T, Tag, Reveal, Eyebrow, H2, Bar } from './ui';

export function Features() {
  return (
    <section id="features" className="flex flex-col bg-[#06070D]">
      <div className="min-h-[70vh] flex flex-col justify-center px-6 md:px-24 py-32">
        <Eyebrow>Core System</Eyebrow>
        <H2 sx={{ fontSize: "clamp(3.5rem, 7vw, 6rem)", marginTop: 24, lineHeight: 1.2 }}>The complete reputation firewall.</H2>
        <p className="text-[20px] md:text-[24px] text-white/40 leading-relaxed mt-8 max-w-2xl font-sans">Four precision tools. One system. Built for operators who refuse to let a bad day become a bad review.</p>
      </div>

      <div className="flex flex-col">
        <FeatureBlock num="01" tag="⬡ Firewall" title="Route happy. Intercept unhappy." desc="4+ stars go to Google. Under 4 get intercepted privately. Simple logic, powerful results.">
          <div className="flex flex-col md:flex-row gap-12 mt-16">
            <RouteBox c={T.green} arrow="↗" top="4–5 Stars" bot="→ Google Maps" />
            <RouteBox c={T.red}   arrow="↘" top="1–3 Stars" bot="→ Private Inbox" />
          </div>
        </FeatureBlock>

        <FeatureBlock num="02" tag="✦ The Intercept" title="Handle it before it goes public." desc="When a customer has a bad experience, our AI intercepts their feedback privately. You solve the problem; the public never sees the 1-star review.">
           <div className="flex flex-col gap-8 mt-16">
            {[["⭐","David M.",'"Food arrived cold…"',"red","New"],["⭐⭐","Anna K.",'"Room wasn\'t clean…"',"green","Resolved"]].map(([s,n,p,b,l]) => (
              <div key={n} className="flex flex-col gap-4 pb-8 border-b border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-[32px]">{s}</span>
                  <Tag color={b} sz="sm">{l}</Tag>
                </div>
                <div className="text-[18px] text-white/40 leading-relaxed font-sans">
                  <strong className="text-white/90 font-semibold block mb-2 text-[22px] font-serif">{n}</strong>
                  {p}
                </div>
              </div>
            ))}
          </div>
        </FeatureBlock>

        <FeatureBlock num="03" tag="📥 The Route" title="Automated Credibility." desc="Happy customers are automatically identified and sent a direct link to your Google, Yelp, or TripAdvisor page.">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            {[["🏢","Profile",false],["📋","Import",false],["✍️","Template",true],["🚀","Launch",false]].map(([ic,lb,act]) => (
              <div key={lb as string} className="text-center p-8 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-[64px] mb-6">{ic}</div>
                <div className={`text-[14px] font-mono tracking-[0.3em] uppercase font-bold ${act ? 'text-[#C9A84C]' : 'text-white/20'}`}>{lb}</div>
              </div>
            ))}
          </div>
        </FeatureBlock>

        <FeatureBlock num="04" tag="📊 Intelligence" title="AI Sentiment Analysis." desc="Predict 'Review Risk' in real-time. Consistent, keyword-rich replies signal activity and care.">
          <div className="flex flex-col gap-12 mt-16">
            {[["Sent",100,T.sky],["Opened",68,T.purple],["Responded",42,T.gold],["Reviewed",31,T.green]].map(([l,p,c]) => (
              <div key={l as string} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[12px] text-white/20 uppercase tracking-[0.3em] font-bold">{l}</span>
                  <span className="font-mono text-[48px] leading-none font-bold" style={{ color: c as string }}>{p}</span>
                </div>
                <Bar pct={p as number} color={c as string} h={8} glow />
              </div>
            ))}
          </div>
        </FeatureBlock>
      </div>
    </section>
  );
}

export function FeatureBlock({ num, tag, title, desc, children }: any) {
  return (
    <div className="min-h-screen flex flex-col justify-center py-32 px-6 md:px-24 border-t border-white/5">
      <Reveal>
        <div className="flex items-center gap-6 mb-12">
          <span className="font-mono text-[48px] text-white/10 leading-none font-bold">{num}</span>
          <Tag color="gold" sz="md">{tag}</Tag>
        </div>
        <h3 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-white mb-8 leading-tight">{title}</h3>
        <p className="text-[18px] md:text-[22px] text-white/40 leading-relaxed mb-16 max-w-2xl font-sans">{desc}</p>
        <div className="w-full">
          {children}
        </div>
      </Reveal>
    </div>
  );
}

export function RouteBox({ c, arrow, top, bot }: any) {
  return (
    <div className="flex-1 flex flex-col gap-6 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
      <span className="text-[64px] leading-none" style={{ color:c }}>{arrow}</span>
      <span className="text-[32px] md:text-[42px] font-bold tracking-tight font-serif" style={{ color:c }}>{top}</span>
      <span className="text-[12px] text-white/30 font-mono uppercase tracking-[0.3em] font-medium">{bot}</span>
    </div>
  );
}
