import React from 'react';
import { Shield, Star, CheckCircle } from 'lucide-react';

export function Globe({ size = 600, opacity = 0.05 }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow"
        style={{ opacity }}
      />
      <div
        className="absolute inset-8 rounded-full border border-white/5 animate-spin-slow-reverse"
        style={{ opacity }}
      />
      <div
        className="absolute inset-20 rounded-full border border-repute-gold/10 animate-spin-slow"
        style={{ opacity: opacity * 2 }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-repute-gold/20 blur-[100px] rounded-full" />
      </div>
      {/* Network dots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <div
          key={deg}
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-repute-gold rounded-full shadow-[0_0_10px_#C9A84C]"
          style={{
            transform: `rotate(${deg}deg) translate(${size / 2}px) rotate(-${deg}deg)`,
            opacity: 0.4
          }}
        />
      ))}
    </div>
  );
}

export function NetworkNodes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
            <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M-100 100 L500 600 M1200 200 L800 800" stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="animate-pulse" />
        <circle cx="20%" cy="30%" r="2" fill="#C9A84C" className="animate-pulse" />
        <circle cx="80%" cy="70%" r="2" fill="#C9A84C" className="animate-pulse" />
        <circle cx="50%" cy="50%" r="1" fill="#38BDF8" className="animate-pulse" />
      </svg>
    </div>
  );
}

export function Phone() {
  return (
    <div className="w-[300px] h-[610px] bg-[#0B0C14] border-[10px] border-[#1A1B23] rounded-[54px] shadow-[0_50px_100px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden relative group">
      {/* Metallic Frame Shine */}
      <div className="absolute inset-[-2px] border border-white/10 rounded-[56px] pointer-events-none" />

      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-[#1A1B23] rounded-b-[24px] z-20 flex items-center justify-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-white/5" />
        <div className="w-8 h-1 rounded-full bg-white/5" />
      </div>

      {/* Screen Content */}
      <div className="p-7 pt-14">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-repute-gold/10 flex items-center justify-center">
            <Shield className="w-4 h-4 text-repute-gold" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Status</div>
            <div className="text-xs text-white font-bold">Firewall Active</div>
          </div>
        </div>

        {/* Notification Mock */}
        <div className="space-y-5">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 shadow-inner backdrop-blur-sm animate-pulse">
            <div className="flex items-center justify-between mb-2">
              <div className="flex text-repute-gold">
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
              </div>
              <span className="text-[8px] font-mono text-white/30">Just now</span>
            </div>
            <p className="text-[10px] text-white/60 leading-relaxed italic">"Best experience ever! Highly recommend."</p>
            <div className="mt-3 flex items-center gap-2 text-emerald-400">
              <CheckCircle size={10} />
              <span className="text-[8px] font-bold uppercase tracking-wider">Routed to Google</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex text-repute-gold">
                <Star size={10} fill="currentColor" />
                <Star size={10} />
                <Star size={10} />
                <Star size={10} />
                <Star size={10} />
              </div>
              <span className="text-[8px] font-mono text-white/30">2m ago</span>
            </div>
            <p className="text-[10px] text-white/60 leading-relaxed italic">"The wait was too long..."</p>
            <div className="mt-3 flex items-center gap-2 text-rose-400">
              <Shield size={10} />
              <span className="text-[8px] font-bold uppercase tracking-wider">Intercepted Privately</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-14">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Sentiment Analysis</div>
          <div className="h-28 w-full bg-white/[0.02] border border-white/5 rounded-xl flex items-end gap-2.5 p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-repute-gold/5 to-transparent opacity-50" />
            {[40, 70, 45, 90, 65, 85, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-repute-gold/30 rounded-t-md transition-all duration-1000 relative group/bar"
                style={{ height: `${h}%` }}
              >
                <div className="absolute inset-0 bg-repute-gold opacity-0 group-hover/bar:opacity-50 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gloss Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none opacity-50" />
    </div>
  );
}
