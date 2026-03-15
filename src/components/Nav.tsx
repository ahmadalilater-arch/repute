"use client";

import React, { useState, useEffect } from 'react';
import { Gem, Btn } from './ui';

export function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const f = () => setStuck(window.scrollY > 44);
    window.addEventListener("scroll", f, { passive:true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-500 ${stuck ? 'py-3 px-6 md:px-12 bg-[#06070D]/90 backdrop-blur-xl border-b border-white/10' : 'py-5 px-6 md:px-12 bg-transparent border-b border-transparent'}`}>
      <div className="flex items-center gap-2.5 font-serif text-xl md:text-2xl tracking-wide text-white cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
        <Gem /><span>Repute</span>
      </div>
      <div className="hidden md:flex gap-7 items-center">
        {["Features","Proof","Security"].map(l => (
          <button
            key={l}
            onClick={() => scrollToSection(l.toLowerCase())}
            className="text-sm font-medium text-white/60 no-underline transition-colors hover:text-white"
          >
            {l}
          </button>
        ))}
      </div>
      <div className="flex gap-2.5 items-center">
        <Btn v="ghost" sz="sm" className="hidden sm:flex">Sign In</Btn>
        <Btn v="gold" sz="sm" onClick={() => scrollToSection('waitlist')}>Join Waitlist</Btn>
      </div>
    </nav>
  );
}
