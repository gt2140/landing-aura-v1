"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Eye, Database, RefreshCw } from "lucide-react";

const trustPrinciples = [
  {
    icon: Shield,
    title: "Not mined",
    description: "Your data is not sold, shared, or used to train models.",
  },
  {
    icon: Eye,
    title: "Not noisy",
    description: "No wellness fluff. No generic health advice.",
  },
  {
    icon: Database,
    title: "Not reset",
    description: "Context persists so each session builds on the last.",
  },
  {
    icon: RefreshCw,
    title: "Not casual",
    description: "Built for disciplined, research-heavy health work.",
  },
];

export function TrustSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="relative overflow-hidden bg-foreground/[0.02] py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.9fr)] lg:gap-16">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="mb-5 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
              <span className="w-8 h-px bg-foreground/30" />
              Trust
            </span>
            <h2 className="mb-6 text-4xl font-display tracking-tight lg:text-[4.4rem]">
              Trust is not
              <br />
              a footnote.
            </h2>
            <p className="mb-10 max-w-[520px] text-lg leading-relaxed text-muted-foreground lg:text-[1.1rem]">
              Trust is built into the product. Aura is designed for people who expect serious tools for serious health work.
            </p>

            {/* Technical specs */}
            <div className="flex flex-wrap gap-2.5">
              {["E2E Encrypted", "Zero-Knowledge", "HIPAA Ready", "SOC 2"].map((spec, index) => (
                <span
                  key={spec}
                  className={`rounded-full border border-foreground/10 px-3.5 py-1.5 text-xs font-mono transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Principles */}
          <div className="grid gap-4">
            {trustPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className={`group relative overflow-hidden rounded-[22px] border border-foreground/10 bg-background/75 px-5 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_16px_36px_rgba(0,0,0,0.05)] ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-background transition-all duration-300 group-hover:scale-105 group-hover:bg-foreground group-hover:text-background">
                    <principle.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-[1rem] font-medium group-hover:translate-x-0.5 transition-transform duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
