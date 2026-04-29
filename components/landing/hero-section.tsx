"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const rotatingTitles = [
  "health workflows",
  "biohackers",
  "scientists",
  "researchers",
  "laboratories",
  "athletes",
  "operators",
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(rotatingTitles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentTitle = rotatingTitles[titleIndex];
    const typingSpeed = isDeleting ? 45 : 85;
    const holdDelay = isDeleting ? 180 : 1400;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setTitleIndex((currentIndex) => (currentIndex + 1) % rotatingTitles.length);
        return;
      }

      const nextText = isDeleting
        ? currentTitle.slice(0, displayText.length - 1)
        : currentTitle.slice(0, displayText.length + 1);

      setDisplayText(nextText);
    }, displayText === currentTitle || displayText.length === 0 ? holdDelay : typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            Private intelligence for advanced health
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-12">
          <h1 
            className={`text-[clamp(2.5rem,8vw,6rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">A private intelligence</span>
            <span className="block">system for high-agency</span>
            <span className="block text-muted-foreground">
              <span
                className={`inline-flex min-h-[1.1em] items-center bg-clip-text text-transparent transition-all duration-500 ${
                  isDeleting
                    ? "bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-500 drop-shadow-[0_0_18px_rgba(99,102,241,0.22)]"
                    : "bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 drop-shadow-[0_0_22px_rgba(56,189,248,0.24)]"
                }`}
                style={{ width: "18ch" }}
              >
                {displayText}
                <span className={`ml-1 inline-block h-[0.9em] w-px animate-pulse ${isDeleting ? "bg-fuchsia-400" : "bg-cyan-300"}`} />
              </span>
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <p 
          className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Aura helps users navigate labs, biomarkers, supplements, peptides, psychedelics, and research-heavy protocols with more context, continuity, and disciplined reasoning.
        </p>
        
        {/* CTAs - positioned below description on all screens */}
        <div 
          className={`mt-12 lg:mt-16 flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
          >
            Request early access
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5">
            <Link href="/whitepaper">Read Whitepaper</Link>
          </Button>
         </div>
       </div>

      {/* Stats - conceptual, not marketing */}
      <div 
        className={`relative mt-10 px-6 lg:px-0 lg:absolute lg:bottom-24 lg:left-0 lg:right-0 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto lg:px-12">
          <div className="flex flex-wrap gap-6 lg:gap-24">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl lg:text-4xl font-display">6</span>
              <span className="text-sm text-muted-foreground">Specialized agents</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl lg:text-4xl font-display">E2E</span>
              <span className="text-sm text-muted-foreground">Private vault</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl lg:text-4xl font-display font-mono tracking-tighter">---</span>
              <span className="text-sm text-muted-foreground">Longitudinal context</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
