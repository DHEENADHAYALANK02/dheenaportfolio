"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CONTACT } from "@/lib/data";

/* ---------- Tech stack data for the ticker ---------- */
const TECH_STACK = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
  { name: "React Native", icon: "📱" },
  { name: "Docker", icon: "🐳" },
];

/* ---------- Animation variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } },
};

const socialFade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ROLES = [
  "Full Stack Developer",
  "UI & UX Designer",
  "Digital Marketer",
  "Cloud Engineer",
  "Software Developer",
  "SEO Specialist"
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showMuteBtn, setShowMuteBtn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // First time user check
    const hasPlayed = localStorage.getItem("introPlayed");

    if (!hasPlayed) {
      // First time user - play with sound once
      setIsMuted(false);
      localStorage.setItem("introPlayed", "true");
      
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.loop = false; // Don't loop so we catch onEnded
        videoRef.current.play().catch(() => {
          // If browser blocks autoplay with sound, fallback to muted & show button
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.loop = true;
            videoRef.current.play().catch(() => {});
            setIsMuted(true);
            setShowMuteBtn(true);
          }
        });
      }
    } else {
      // Returning user - start muted, looping, and show button immediately
      setIsMuted(true);
      setShowMuteBtn(true);
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.loop = true;
        videoRef.current.play().catch(() => {});
      }
    }

    const handler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.play();
      setIsMuted(true);
      setShowMuteBtn(true);
    }
  };

  return (
    <section
      id="home"
      className="hero-section relative min-h-screen overflow-hidden bg-white"
    >
      {/* ─── FULL-SCREEN VIDEO BACKGROUND ─── */}
      <div className="absolute inset-0 z-0 bg-white">
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          onEnded={handleVideoEnded}
          poster="/poster.jpg"
          aria-label="Animated portrait of Dheenadhayalan K"
          className="h-full w-full object-cover object-center md:object-[85%_center]"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Fades & Overlays to blend with the white theme and ensure text readability */}
        {/* Left-to-right white gradient ONLY for text legibility on the left side, leaving the right side 100% clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent w-full md:w-[55%] lg:w-[45%]" />
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 px-6 pt-28 pb-8 lg:grid-cols-2 min-h-[calc(100vh-3.5rem)]">
        
        {/* LEFT COLUMN — Text content */}
        <div className="max-w-lg lg:max-w-xl">
          {/* Tagline */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xs font-bold uppercase tracking-[0.35em] text-black/80"
            style={{ letterSpacing: "0.35em" }}
          >
            Building ideas into real products
          </motion.p>

          {/* Main heading */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 font-display leading-[0.92]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4.2rem)" }}
          >
            <span className="block text-black">Hi, I&apos;m</span>
            <span className="block text-red whitespace-nowrap" style={{ textShadow: "0 0 60px rgba(225,6,0,0.4)" }}>
              Dheenadhayalan K
            </span>
          </motion.h1>

          {/* Sub-heading with dynamic role change */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-2 font-display text-[clamp(1.4rem,3.5vw,2.8rem)] leading-tight text-black font-semibold h-9 lg:h-14 overflow-hidden flex items-end"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="inline-block"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-md text-[15px] leading-relaxed text-black/90 font-medium"
          >
            I build fast, scalable and modern web &amp; mobile applications using
            React, Next.js, Node.js and modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 rounded-lg bg-red px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-red-deep hover:shadow-[0_0_30px_rgba(225,6,0,.4)]"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2.5 rounded-lg border border-black/20 bg-white/50 px-7 py-3.5 text-sm font-bold text-black backdrop-blur-sm transition-all duration-300 hover:border-red hover:bg-red/5 hover:text-red hover:shadow-[0_0_20px_rgba(225,6,0,.1)]"
            >
              Contact Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </a>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 flex items-center gap-2.5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-sm text-black/80 font-medium">
              Available for freelance &amp; full-time opportunities
            </span>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mt-7 flex items-center gap-3"
          >
            {[
              { href: CONTACT.github, label: "GitHub", icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
              { href: CONTACT.linkedin, label: "LinkedIn", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></> },
              { href: "https://instagram.com", label: "Instagram", icon: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
              { href: `mailto:${CONTACT.email}`, label: "Email", icon: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></> },
            ].map((s) => (
              <motion.a
                key={s.label}
                variants={socialFade}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-black/10 text-black/80 transition-all duration-300 hover:border-red hover:bg-red/10 hover:text-red hover:shadow-[0_0_15px_rgba(225,6,0,.15)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>

      {/* Mute/Unmute Video Button - Floating over entire Hero */}
      <AnimatePresence>
        {showMuteBtn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-20 right-6 z-30 flex flex-col items-center gap-2 lg:bottom-16"
          >
            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = !videoRef.current.muted;
                  setIsMuted(videoRef.current.muted);
                }
              }}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/40 text-black backdrop-blur-md border border-white/40 transition-all hover:scale-110 hover:bg-white/60 hover:text-red shadow-lg"
              aria-label={isMuted ? "Unmute Video" : "Mute Video"}
            >
              {isMuted ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </button>
            <span className="text-[10px] font-bold text-black/70 bg-white/40 backdrop-blur-md px-2 py-0.5 rounded-full uppercase tracking-widest hidden lg:block">
              {isMuted ? "Unmute" : "Mute"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      {/* ─── TECH STACK TICKER BAR ─── */}
      <div className="relative z-20 border-t border-black/10 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center">
          {/* Label */}
          <div className="hidden shrink-0 border-r border-black/10 px-6 py-4 sm:block">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/80">
              Tech Stack
            </span>
          </div>

          {/* Scrolling ticker */}
          <div className="ticker-wrapper relative flex-1 overflow-hidden py-3.5">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />

            <div className="ticker-track flex items-center gap-8">
              {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="flex shrink-0 items-center gap-2 text-sm text-black font-semibold transition-colors duration-200 hover:text-red"
                >
                  <span className="text-base">{tech.icon}</span>
                  <span className="whitespace-nowrap font-bold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow button */}
          <a
            href="#skills"
            className="hidden shrink-0 border-l border-black/10 px-6 py-4 text-black/40 transition-colors hover:text-red sm:block"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
