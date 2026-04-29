"use client";

import { useEffect, useRef, useState } from "react";

const problems = [
  {
    number: "01",
    title: "Signal without structure",
    description: "Labs, wearables, notes, supplements, and protocols all exist, but they live in separate places. The full picture rarely stays coherent for long.",
  },
  {
    number: "02",
    title: "Context disappears",
    description: "Research, protocol notes, biomarker trends, and personal observations get rediscovered instead of reused. Each session starts with unnecessary reconstruction.",
  },
  {
    number: "03",
    title: "No operating system for autonomy",
    description: "People are becoming more capable and more proactive, but the software layer still lags behind. Nothing serious is built for disciplined, repeated, research-heavy health work.",
  },
];

const TOP_MARQUEE = [
  "Biomarkers",
  "Supplements",
  "Peptides",
  "Psychedelics",
  "Bloodwork",
  "Nutrition",
  "Research",
  "Protocol Notes",
];

const BOTTOM_MARQUEE = [
  "Vault Context",
  "Scoped Reasoning",
  "Hypothesis Testing",
  "Enhancement",
  "Recovery",
  "Cognition",
  "Protocol Review",
  "Evidence Synthesis",
];

function ProblemVisual() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      {/* Scattered fragments */}
      <g className="animate-pulse">
        <rect x="30" y="40" width="60" height="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" transform="rotate(-5 60 60)" />
        <rect x="120" y="80" width="50" height="35" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" transform="rotate(8 145 97)" />
        <rect x="200" y="30" width="70" height="45" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" transform="rotate(-3 235 52)" />
        <rect x="310" y="70" width="55" height="38" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" transform="rotate(6 337 89)" />
      </g>
      
      <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
        <rect x="50" y="130" width="45" height="50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" transform="rotate(4 72 155)" />
        <rect x="140" y="160" width="65" height="42" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" transform="rotate(-7 172 181)" />
        <rect x="250" y="140" width="52" height="48" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" transform="rotate(3 276 164)" />
        <rect x="330" y="180" width="48" height="36" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" transform="rotate(-4 354 198)" />
      </g>
      
      <g className="animate-pulse" style={{ animationDelay: '1s' }}>
        <rect x="70" y="220" width="58" height="44" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" transform="rotate(-6 99 242)" />
        <rect x="180" y="240" width="62" height="38" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" transform="rotate(5 211 259)" />
        <rect x="290" y="230" width="50" height="46" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" transform="rotate(-2 315 253)" />
      </g>
      
      {/* Disconnection lines */}
      <line x1="90" y1="60" x2="120" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />
      <line x1="170" y1="97" x2="200" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />
      <line x1="270" y1="52" x2="310" y2="89" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />
      
      {/* Question mark in center */}
      <text x="200" y="165" textAnchor="middle" fontSize="48" fill="currentColor" opacity="0.1" fontFamily="serif">?</text>
    </svg>
  );
}

function ProblemCard({ problem, index }: { problem: typeof problems[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-6 lg:p-7 border border-foreground/10 hover:border-foreground/20 hover:bg-muted/20 transition-all duration-500 h-full">
        {/* Number */}
        <span className="font-mono text-xs text-muted-foreground block mb-4">{problem.number}</span>
        
        <h3 className="text-xl lg:text-2xl font-display mb-3 group-hover:translate-x-1 transition-transform duration-500">
          {problem.title}
        </h3>
        <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed">
          {problem.description}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  animationName,
  textClassName,
}: {
  items: string[];
  animationName: string;
  textClassName: string;
}) {
  return (
    <div className="flex" style={{ animation: `${animationName} 22s linear infinite` }}>
      {[...Array(3)].map((_, repeatIndex) => (
        <div key={repeatIndex} className="flex shrink-0">
          {items.map((item) => (
            <div key={`${repeatIndex}-${item}`} className="flex shrink-0 items-center gap-6 border-r border-foreground/10 px-10 py-5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/20" />
              <span className={`whitespace-nowrap text-sm tracking-wide ${textClassName}`}>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            The Reality
          </span>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Higher-agency users.
              <br />
              <span className="text-muted-foreground">Still no serious system.</span>
            </h2>
            <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              A new class of user is emerging in health: more technical, more curious, more accountable, and far less passive. They order their own labs, track biomarkers, compare protocols, read papers, and make decisions with intent. The missing piece is software that can actually hold that complexity together.
            </p>
          </div>
        </div>

        {/* Visual + Cards */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Visual */}
          <div className="hidden lg:flex items-center justify-center text-foreground opacity-60">
            <ProblemVisual />
          </div>
          
          {/* Problem Cards */}
          <div className="grid gap-6">
            {problems.map((problem, index) => (
              <ProblemCard key={problem.number} problem={problem} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-16 overflow-hidden border-y border-foreground/10 bg-background/60">
          <MarqueeRow items={TOP_MARQUEE} animationName="marqueeLeft" textClassName="text-muted-foreground" />
          <div className="border-t border-foreground/10" />
          <MarqueeRow items={BOTTOM_MARQUEE} animationName="marqueeRight" textClassName="text-muted-foreground/70" />
        </div>
        
        {/* Thesis statement */}
        <div className={`max-w-3xl mx-auto text-center pt-16 border-t border-foreground/10 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <p className="text-2xl lg:text-3xl font-display leading-relaxed text-balance">
            The people operating at the edge of health need a private intelligence layer built for complexity.
          </p>
        </div>
      </div>
    </section>
  );
}
