"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, Layers, History, Key } from "lucide-react";

const vaultFeatures = [
  {
    icon: Lock,
    title: "Private by default",
    description: "End-to-end encrypted. Your health data remains yours. No selling, no silent training, no hidden sharing.",
  },
  {
    icon: Layers,
    title: "Structured context",
    description: "Labs, biomarkers, protocols, notes, papers, supplements, peptides, and related observations organized into reusable context.",
  },
  {
    icon: History,
    title: "Longitudinal memory",
    description: "The system remembers prior sessions, previous reasoning, and changing signals over time so decisions can build instead of reset.",
  },
  {
    icon: Key,
    title: "Scoped access",
    description: "Different agents reason over different slices of the Vault, so outputs stay specialized, relevant, and disciplined.",
  },
];

function VaultVisual() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      {/* Outer vault circle */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      
      {/* Inner protected area */}
      <circle cx="200" cy="200" r="100" fill="currentColor" opacity="0.03">
        <animate attributeName="opacity" values="0.03;0.06;0.03" dur="4s" repeatCount="indefinite" />
      </circle>
      
      {/* Lock icon in center */}
      <g transform="translate(170, 165)">
        <rect x="5" y="25" width="50" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M 15 25 L 15 15 Q 15 0 30 0 Q 45 0 45 15 L 45 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="42" r="5" fill="currentColor" />
        <line x1="30" y1="47" x2="30" y2="55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
      
      {/* Data points orbiting */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const radian = (angle * Math.PI) / 180;
        const radius = 130;
        const x = 200 + Math.cos(radian) * radius;
        const y = 200 + Math.sin(radian) * radius;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill="currentColor" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            <line x1={x} y1={y} x2="200" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />
          </g>
        );
      })}
      
      {/* Encryption indicator */}
      <text x="200" y="300" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.4" fontFamily="monospace">E2E ENCRYPTED</text>
    </svg>
  );
}

export function VaultSection() {
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
      id="vault"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 60px,
            currentColor 60px,
            currentColor 61px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            The Vault
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 max-w-4xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Your private health memory layer.
            <br />
            <span className="text-background/50">Actually usable over time.</span>
          </h2>
          <p
            className={`mt-8 text-xl text-background/60 leading-relaxed max-w-2xl transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Vault is where labs, biomarkers, protocol notes, supplements, research, and longitudinal observations become structured context instead of scattered history.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual */}
          <div className={`flex items-center justify-center text-background transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <div className="w-full max-w-md">
              <VaultVisual />
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-8">
            {vaultFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`group flex items-start gap-6 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-background/20 group-hover:bg-background group-hover:text-foreground transition-colors duration-300">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-background/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className={`mt-20 pt-12 border-t border-background/10 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <p className="text-background/70 text-lg max-w-2xl leading-relaxed">
            The Vault is not a feature added to the product. It is the foundation that allows Aura to function as a serious private intelligence system.
          </p>
          <p className="text-background/40 text-sm font-mono mt-6 max-w-xl">
            Especially for users working across supplements, peptides, enhancement, psychedelics, and research-heavy protocols, memory and structure are not optional. They are the whole point.
          </p>
        </div>
      </div>
    </section>
  );
}
