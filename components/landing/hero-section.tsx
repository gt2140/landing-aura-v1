"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";
import { getDashboardLoginHref } from "@/lib/dashboard-url";

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
  const dashboardLoginHref = getDashboardLoginHref();

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
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden md:min-h-screen">
      {/* Animated sphere background */}
      <div className="pointer-events-none absolute right-[-30%] top-[18%] h-[320px] w-[320px] opacity-25 sm:right-[-18%] sm:top-1/2 sm:h-[460px] sm:w-[460px] sm:-translate-y-1/2 sm:opacity-35 lg:right-0 lg:h-[800px] lg:w-[800px] lg:opacity-40">
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
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-24 sm:py-28 lg:px-12 lg:py-40">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-mono text-muted-foreground sm:gap-3 sm:text-sm">
            <span className="h-px w-6 bg-foreground/30 sm:w-8" />
            Private intelligence for advanced health
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-12">
          <h1 
            className={`text-[clamp(2.2rem,11vw,6rem)] font-display leading-[0.92] tracking-tight transition-all duration-1000 sm:text-[clamp(2.5rem,8vw,6rem)] ${
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
                style={{ width: "min(18ch, 100%)" }}
              >
                {displayText}
                <span className={`ml-1 inline-block h-[0.9em] w-px animate-pulse ${isDeleting ? "bg-fuchsia-400" : "bg-cyan-300"}`} />
              </span>
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <p 
          className={`max-w-xl text-base leading-relaxed text-muted-foreground sm:max-w-2xl sm:text-lg lg:text-2xl transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Aura helps users reason across labs, biomarkers, protocols, and research with memory, context, and continuity.
        </p>
        
        {/* CTAs - positioned below description on all screens */}
        <div 
          className={`mt-10 flex flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-start sm:gap-4 lg:mt-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
          >
            <Link href={dashboardLoginHref}>
              Enter App
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5">
            <Link href="/whitepaper">Read Whitepaper</Link>
          </Button>
         </div>
       </div>

      {/* Stats - conceptual, not marketing */}
      <div 
        className={`relative mt-10 px-6 sm:mt-14 lg:px-0 lg:absolute lg:bottom-24 lg:left-0 lg:right-0 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto lg:px-12">
          <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-10 lg:gap-24">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-display sm:text-3xl lg:text-4xl">6</span>
              <span className="text-sm text-muted-foreground">Specialized agents</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-display sm:text-3xl lg:text-4xl">E2E</span>
              <span className="text-sm text-muted-foreground">Private vault</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-display font-mono tracking-tighter sm:text-3xl lg:text-4xl">---</span>
              <span className="text-sm text-muted-foreground">Longitudinal context</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
