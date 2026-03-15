import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const T = {
  gold: "#C9A84C",
  sky: "#38BDF8",
  green: "#10B981",
  red: "#EF4444",
  purple: "#A855F7",
};

export function Gem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6 text-repute-gold", className)}
    >
      <path d="M6 3h12l4 6-10 13L2 9z" />
      <path d="M11 3 8 9l3 13 3-13-3-6Z" />
      <path d="M2 9h20" />
    </svg>
  );
}

export function Tag({ children, color = "gold", dot, pulse, className, sz = "md" }: any) {
  const colors: any = {
    gold: "text-repute-gold border-repute-gold/30",
    sky: "text-repute-sky border-repute-sky/30",
    green: "text-emerald-400 border-emerald-400/30",
    red: "text-rose-400 border-rose-400/30",
  };

  const sizes: any = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-[12px]",
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 rounded-full border font-mono tracking-widest uppercase font-bold",
      colors[color],
      sizes[sz],
      className
    )}>
      {dot && <div className={cn("w-1 h-1 rounded-full bg-current", pulse && "animate-pulse")} />}
      {children}
    </div>
  );
}

export function Btn({ children, v = "gold", sz = "md", className, onClick, loading, disabled }: any) {
  const variants: any = {
    gold: "bg-repute-gold text-repute-dark hover:bg-[#d9b85c] shadow-[0_10px_30px_rgba(201,168,76,0.2)]",
    ghost: "bg-transparent text-white border border-white/10 hover:bg-white/5",
    sky: "bg-repute-sky text-repute-dark hover:bg-[#4cc9f8]",
  };

  const sizes: any = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-12 py-5 text-base",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 disabled:opacity-50 active:scale-95",
        variants[v],
        sizes[sz],
        className
      )}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : children}
    </button>
  );
}

export function Reveal({ children, delay = 0, cls }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: Number(delay) * 0.1 }}
      className={cls}
    >
      {children}
    </motion.div>
  );
}

export function H2({ children, sx, className }: any) {
  return (
    <h2
      className={cn("font-serif text-white tracking-tight leading-[1.2]", className)}
      style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", ...sx }}
    >
      {children}
    </h2>
  );
}

export function Eyebrow({ children, color = "gold" }: any) {
  return (
    <Tag color={color} className="mb-6">{children}</Tag>
  );
}

export function Card({ children, className, hover, glow, glowColor = T.gold }: any) {
  return (
    <div className={cn(
      "relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500",
      hover && "hover:bg-white/[0.04] hover:border-white/10",
      className
    )}>
      {glow && (
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at center, ${glowColor}20 0%, transparent 70%)` }}
        />
      )}
      {children}
    </div>
  );
}

export function Bar({ pct, color, h = 8, glow }: any) {
  return (
    <div className="w-full bg-white/5 rounded-full overflow-hidden" style={{ height: h }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-full rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: glow ? `0 0 20px ${color}60` : 'none'
        }}
      />
    </div>
  );
}

export function Counter({ to, suf }: { to: number; suf?: string }) {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    let start = 0;
    const end = to;
    const duration = 2000;
    let timer: any;

    const animate = (currentTime: number) => {
      if (!start) start = currentTime;
      const progress = Math.min((currentTime - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        timer = requestAnimationFrame(animate);
      }
    };

    timer = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(timer);
  }, [to]);

  return (
    <span ref={nodeRef}>{count.toLocaleString()}{suf}</span>
  );
}
