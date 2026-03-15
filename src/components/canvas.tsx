import React from 'react';
import { Shield, MessageSquare, Star, ArrowUpRight, CheckCircle } from 'lucide-react';

export function Globe({ size = 600, opacity = 0.05 }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow"
        style={{ opacity }}
      />
      <div
        className="absolute inset-4 rounded-full border border-white/5 animate-spin-slow-reverse"
        style={{ opacity }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-repute-gold/20 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}

export function Phone() {
  return (
    <div className="w-[280px] h-[580px] bg-[#0B0C14] border-[8px] border-[#1A1B23] rounded-[48px] shadow-2xl overflow-hidden relative group">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1A1B23] rounded-b-3xl z-20" />

      {/* Screen Content */}
      <div className="p-6 pt-12">
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
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 animate-pulse">
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
        <div className="mt-12">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Sentiment Analysis</div>
          <div className="h-24 w-full bg-white/[0.02] border border-white/5 rounded-xl flex items-end gap-2 p-3">
            {[40, 70, 45, 90, 65, 85, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-repute-gold/20 rounded-t-sm transition-all duration-1000"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gloss Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}
