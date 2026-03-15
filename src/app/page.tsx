import { Nav } from "@/components/Nav";
import { Hero, Marquee } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Proof, Security, Waitlist, Footer } from "@/components/Proof";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06070D]">
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <Proof />
      <Security />
      <Waitlist />
      <Footer />
    </main>
  );
}
