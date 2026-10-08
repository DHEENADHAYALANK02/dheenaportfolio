"use client";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const s = () => setSolid(scrollY > 40);
    s();
    addEventListener("scroll", s, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n);
      el && io.observe(el);
    });
    return () => {
      removeEventListener("scroll", s);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/90 backdrop-blur-lg border-b border-black/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo with red dot */}
        <a
          href="#home"
          className="flex items-center gap-1.5 text-xl font-semibold tracking-tight text-black"
          style={{ 
            fontFamily: "'Archivo', sans-serif",
            textShadow: !solid ? "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,1)" : "none" 
          }}
        >
          Dheenadhayalan K
          <span className="inline-block h-2 w-2 rounded-full bg-red" />
        </a>

        {/* Center nav links */}
        <nav aria-label="Primary" className="hidden gap-8 text-sm lg:flex">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n}`}
              className={`capitalize transition-colors duration-200 hover:text-red ${
                active === n ? "text-red font-semibold" : "text-black/80 font-medium"
              }`}
              style={{
                textShadow: !solid ? "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,1)" : "none"
              }}
            >
              {n}
            </a>
          ))}
        </nav>

        {/* Hire Me CTA */}
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-red px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-deep hover:shadow-[0_0_20px_rgba(225,6,0,.3)]"
        >
          Hire Me
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </header>
  );
}
