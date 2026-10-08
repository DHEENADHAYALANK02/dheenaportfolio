"use client";
import { motion } from "framer-motion";
import { PROJECTS, STACK, CONTACT } from "@/lib/data";
import Magnetic from "./Magnetic";

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] },
};

/* ────────────────────────────────────────────────────────────────────────
 * 1. ABOUT SECTION (Light Theme)
 * ──────────────────────────────────────────────────────────────────────── */
export function About() {
  return (
    <section id="about" className="relative bg-[#0a0a0a] pt-24 pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-start lg:gap-16">
        <div className="flex-1">
          <motion.p {...fade} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            About Me
          </motion.p>
          <motion.h2 {...fade} className="mt-4 font-display text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
            More Than a Developer,<br />I&apos;m a <span className="text-red">Problem Solver</span>
          </motion.h2>
          <motion.p {...fade} className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70 font-medium">
            Full-Stack Software Engineer with 2 years of experience shipping production web and mobile applications, including Google Play apps with 10K+ and 5K+ downloads. Strong in TypeScript, React, Next.js, Node.js, and relational databases, with hands-on AWS deployment, REST API design, authentication, and Google Play / App Store release experience.
          </motion.p>

          <motion.div {...fade} className="mt-8 flex flex-wrap gap-4">
            <a href="/resume.pdf" download="Dheenadhayalan_K_Resume.pdf" className="flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-bold text-white transition-all hover:bg-red-deep">
              Download Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            </a>
            <a href="#contact" className="flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-3 text-sm font-bold text-white transition-all hover:border-red hover:text-red">
              Let&apos;s Talk
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </a>
          </motion.div>

          <motion.div {...fade} className="mt-12 grid grid-cols-2 gap-y-8 gap-x-4 border-t border-white/10 pt-8 sm:grid-cols-2 max-w-xl">
            <div className="flex gap-3">
              <svg className="mt-0.5 shrink-0 text-white/40" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              <div>
                <p className="text-xs font-bold uppercase text-white/50">Name</p>
                <p className="mt-0.5 font-bold text-white/90">Dheenadhayalan K</p>
              </div>
            </div>
            <div className="flex gap-3">
              <svg className="mt-0.5 shrink-0 text-white/40" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <div>
                <p className="text-xs font-bold uppercase text-white/50">Based In</p>
                <p className="mt-0.5 font-bold text-white/90">Trichy, India</p>
              </div>
            </div>
            <div className="flex gap-3">
              <svg className="mt-0.5 shrink-0 text-white/40" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <div>
                <p className="text-xs font-bold uppercase text-white/50">Email</p>
                <p className="mt-0.5 font-bold text-white/90">{CONTACT.email}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <svg className="mt-0.5 shrink-0 text-white/40" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              <div>
                <p className="text-xs font-bold uppercase text-white/50">Availability</p>
                <p className="mt-0.5 font-bold text-white/90">Open to Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div {...fade} className="mt-16 lg:mt-0 lg:w-[45%] flex-shrink-0 relative">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(225,6,0,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-t from-red/20 to-transparent z-10 mix-blend-overlay pointer-events-none" />
            <img 
              src="/about_coder.png" 
              alt="Dheenadhayalan K" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * 2. STATS SECTION (Dark Theme)
 * ──────────────────────────────────────────────────────────────────────── */
export function Stats() {
  const stats = [
    { num: "10+", label: "Projects Completed", icon: "🚀" },
    { num: "2+", label: "Years Learning", icon: "📚" },
    { num: "50K+", label: "Lines of Code", icon: "💻" },
    { num: "100%", label: "Passion for Building", icon: "❤️" },
  ];
  return (
    <section className="bg-[#0a0a0a] pt-12 pb-24 border-t border-white/5 relative z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 rounded-2xl bg-[#111] p-6 border border-white/5 shadow-2xl">
          {stats.map((s, i) => (
            <motion.div key={i} {...fade} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 border-r border-white/5 last:border-0 px-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red/10 text-xl text-red">
                {s.icon}
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white">{s.num}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * 3. SKILLS SECTION (Dark Theme)
 * ──────────────────────────────────────────────────────────────────────── */
export function Skills() {
  const flattenedSkills = Object.entries(STACK).flatMap(([category, skills]) => 
    skills.map(skill => ({ name: skill, category }))
  );

  return (
    <section id="skills" className="bg-[#0a0a0a] py-24 relative overflow-hidden">
      {/* Red glow background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red/20 rounded-full blur-[150px] opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.p {...fade} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red">
          <span className="h-1.5 w-1.5 rounded-full bg-red shadow-[0_0_10px_rgba(225,6,0,1)]" />
          My Expertise
        </motion.p>
        <motion.h2 {...fade} className="mt-4 font-display text-4xl text-white md:text-5xl">
          Skills &amp; Technologies
        </motion.h2>
        <motion.p {...fade} className="mt-4 max-w-2xl text-[15px] text-white/60">
          I work with modern tools and technologies to build scalable, high performance applications.
        </motion.p>

        {/* Categories (Static UI for visual match) */}
        <div className="mt-10 flex flex-wrap gap-2">
          {["All", "Frontend", "Backend", "Mobile", "Database", "Cloud", "Tools"].map((c, i) => (
            <button key={c} className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${i === 0 ? "bg-red text-white shadow-[0_0_15px_rgba(225,6,0,0.4)]" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {flattenedSkills.map((s, i) => (
            <motion.div
              key={i}
              {...fade}
              transition={{ delay: (i % 8) * 0.05 }}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#111] p-4 transition-all hover:-translate-y-1 hover:border-red hover:shadow-[0_0_20px_rgba(225,6,0,0.15)]"
            >
              <div className="text-3xl opacity-80">{s.name.charAt(0)}</div> {/* Placeholder icon */}
              <span className="text-center text-[10px] font-semibold text-white/70">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * 4. PROJECTS SECTION (Dark Theme)
 * ──────────────────────────────────────────────────────────────────────── */
export function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-24 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p {...fade} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red">
              <span className="h-[1px] w-4 bg-red" />
              Featured Projects
            </motion.p>
            <motion.h2 {...fade} className="mt-4 font-display text-4xl text-white md:text-5xl">
              Projects I&apos;ve Built
            </motion.h2>
            <motion.p {...fade} className="mt-4 max-w-2xl text-[15px] text-white/60">
              A collection of my recent work — from web applications to mobile apps. Each project is built with real world use cases in mind.
            </motion.p>
          </div>
          <motion.a {...fade} href="#" className="shrink-0 rounded-lg bg-red px-6 py-3 text-sm font-bold text-white transition-all hover:bg-red-deep">
            View All Projects &rarr;
          </motion.a>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={i}
              {...fade}
              href={p.href}
              target="_blank"
              className="group block rounded-3xl border border-white/10 bg-[#111] overflow-hidden hover:border-red transition-all duration-500"
            >
              <div className="h-[250px] w-full bg-white/5 p-8 flex items-center justify-center relative overflow-hidden">
                {/* Mockup Placeholder */}
                <div className="w-[80%] h-[120%] bg-[#1a1a1a] rounded-t-2xl border border-white/10 shadow-2xl relative translate-y-10 group-hover:translate-y-6 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-8 border-t border-white/10">
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-red transition-colors">{p.name}</h3>
                <p className="mt-2 text-sm text-white/50">{p.kind}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.split(',').map(s => (
                    <span key={s} className="rounded-md bg-white/5 px-3 py-1 text-[10px] font-bold text-white/70">
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * 5. PROCESS SECTION (Dark Theme)
 * ──────────────────────────────────────────────────────────────────────── */
export function Process() {
  const steps = [
    { num: "01", title: "Understand", desc: "I analyze the problem and define clear goals." },
    { num: "02", title: "Plan", desc: "I create a strategy and choose the right tech stack." },
    { num: "03", title: "Build", desc: "I develop, test and iterate with a focus on quality." },
    { num: "04", title: "Deploy", desc: "I launch and maintain for real world impact." },
  ];
  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p {...fade} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red">
          <span className="h-[1px] w-4 bg-red" />
          My Process
        </motion.p>
        <motion.h2 {...fade} className="mt-4 font-display text-4xl text-white md:text-5xl">
          How I Turn Ideas into Real Products
        </motion.h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-[1px] bg-gradient-to-r from-red/50 via-white/10 to-transparent" />
          
          {steps.map((s, i) => (
            <motion.div key={i} {...fade} transition={{ delay: i * 0.1 }} className="relative z-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-red/30 bg-[#111] text-red shadow-[0_0_30px_rgba(225,6,0,0.15)]">
                <span className="font-display text-3xl font-bold">{s.num}</span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * 6. EXPERIENCE SECTION (Light Theme)
 * ──────────────────────────────────────────────────────────────────────── */
export function Experience() {
  const experiences = [
    { year: "2024 - Present", title: "Rategle Technologies", role: "Founder & Developer", desc: "Building digital products and leading development." },
    { year: "2024", title: "Adventure Technologies", role: "Embedded Systems & IoT Intern", desc: "Worked on embedded systems and IoT design." },
    { year: "2023 - Present", title: "Self Learning", role: "Full Stack Development", desc: "Continuous learning and building real world projects." },
  ];
  return (
    <section id="experience" className="bg-white py-24 border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:gap-16">
        <div className="flex-1">
          <motion.p {...fade} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            My Journey
          </motion.p>
          <motion.h2 {...fade} className="mt-4 font-display text-4xl text-black md:text-5xl">
            Experience &amp; Learning
          </motion.h2>

          <div className="mt-16 space-y-12 pl-4 border-l-2 border-black/5 relative">
            {experiences.map((e, i) => (
              <motion.div key={i} {...fade} className="relative">
                <span className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full bg-red shadow-[0_0_10px_rgba(225,6,0,0.5)]" />
                <p className="text-sm font-bold text-red">{e.year}</p>
                <h3 className="mt-2 text-xl font-bold text-black">{e.title}</h3>
                <p className="font-semibold text-black/60">{e.role}</p>
                <p className="mt-2 text-sm text-black/70">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * 7. CONTACT SECTION (Dark Theme)
 * ──────────────────────────────────────────────────────────────────────── */
export function Contact() {
  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 relative overflow-hidden">
      {/* Red glow background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red/20 rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.p {...fade} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red">
            <span className="h-[1px] w-4 bg-red" />
            Get In Touch
          </motion.p>
          <motion.h2 {...fade} className="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
            Let&apos;s Work Together
          </motion.h2>
          <motion.p {...fade} className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            I&apos;m always open to discussing new projects, opportunities or just having a conversation about technology.
          </motion.p>

          <div className="mt-12 space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red/10 text-red"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg></div>
              <div>
                <p className="text-xs font-bold uppercase text-white/50">Email</p>
                <p className="mt-1 font-bold text-white">{CONTACT.email}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red/10 text-red"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
              <div>
                <p className="text-xs font-bold uppercase text-white/50">Location</p>
                <p className="mt-1 font-bold text-white">Trichy, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div {...fade} className="mt-16 lg:mt-0 relative z-10 rounded-3xl border border-white/10 bg-[#111] p-8 lg:p-12 shadow-2xl">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/70">Your Name</label>
                <input type="text" className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-red focus:outline-none focus:ring-1 focus:ring-red transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/70">Your Email</label>
                <input type="email" className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-red focus:outline-none focus:ring-1 focus:ring-red transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/70">Your Message</label>
              <textarea rows={4} className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-red focus:outline-none focus:ring-1 focus:ring-red transition-all" placeholder="Tell me about your project..." />
            </div>
            <button type="button" className="w-full rounded-lg bg-red py-4 text-sm font-bold text-white transition-all hover:bg-red-deep hover:shadow-[0_0_30px_rgba(225,6,0,0.4)]">
              Send Message &rarr;
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-6 py-10 relative z-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 text-sm">
        <div>
          <p className="font-display text-xl font-bold text-white tracking-widest">DHEENADHAYALAN K</p>
          <p className="text-white/40 font-semibold uppercase tracking-wider mt-1 text-[10px]">
            FULL-STACK DEVELOPER
          </p>
        </div>
        <div className="flex gap-6 font-semibold text-white/50">
          <a className="transition-colors hover:text-red" href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="transition-colors hover:text-red" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="transition-colors hover:text-red" href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
