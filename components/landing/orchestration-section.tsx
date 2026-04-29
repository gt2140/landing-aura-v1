"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const chatSequence = [
  {
    id: "user-1",
    kind: "message" as const,
    role: "U",
    roleClassName: "bg-muted-foreground/20 text-foreground/80",
    textClassName: "text-foreground/80",
    text: "I want to start BPC-157. What should I consider given my recent bloodwork?",
  },
  {
    id: "route-1",
    kind: "routing" as const,
    text: "routing to peptides + bloodwork agents",
  },
  {
    id: "agent-1",
    kind: "message" as const,
    role: "P",
    roleClassName: "bg-foreground/10 text-foreground/60",
    textClassName: "text-foreground/70",
    text: "Based on your Vault: your inflammatory markers (CRP, IL-6) are elevated. BPC-157 may help, but consider addressing root causes first. Your last protocol note mentioned gut issues...",
  },
  {
    id: "user-2",
    kind: "message" as const,
    role: "U",
    roleClassName: "bg-muted-foreground/20 text-foreground/80",
    textClassName: "text-foreground/80",
    text: "Cross-check this with my nutrition and recovery data.",
  },
  {
    id: "route-2",
    kind: "routing" as const,
    text: "orchestrating: peptides + bloodwork + nutrition + recovery",
  },
  {
    id: "agent-2",
    kind: "message" as const,
    role: "A",
    roleClassName: "bg-foreground/10 text-foreground/60",
    textClassName: "text-foreground/70",
    text: "Coordinated analysis from 4 agents: Your sleep quality has declined (Recovery), protein intake is low (Nutrition), which correlates with the elevated markers (Bloodwork). Consider optimizing these before adding peptides...",
  },
];

const typingSpeeds = {
  message: 11,
  routing: 7,
} as const;

function TypingLine({
  text,
  active,
  visible,
  className,
  speed,
}: {
  text: string;
  active: boolean;
  visible: boolean;
  className: string;
  speed: number;
}) {
  const [displayText, setDisplayText] = useState(visible && !active ? text : "");
  const effectKey = `${active}-${visible}-${speed}-${text}`;

  useEffect(() => {
    if (!visible) {
      setDisplayText("");
      return;
    }

    if (!active) {
      setDisplayText(text);
      return;
    }

    let frame = 0;
    setDisplayText("");

    const interval = window.setInterval(() => {
      frame += 1;
      setDisplayText(text.slice(0, frame));
      if (frame >= text.length) {
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [effectKey]);

  return (
    <p className={className}>
      {displayText}
      {active ? <span className="ml-0.5 inline-block h-[1em] w-px animate-pulse bg-current align-[-0.15em]" /> : null}
    </p>
  );
}

function ChatDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);
  const sequenceDurations = useMemo(
    () =>
      chatSequence.map((item) => {
        const speed = item.kind === "routing" ? typingSpeeds.routing : typingSpeeds.message;
        return item.text.length * speed + 520;
      }),
    []
  );

  useEffect(() => {
    const node = demoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const timeouts: number[] = [];

    const scheduleSequence = () => {
      let elapsed = 0;

      chatSequence.forEach((item, index) => {
        const timeoutId = window.setTimeout(() => {
          setActiveIndex(index);
        }, elapsed);
        timeouts.push(timeoutId);

        elapsed += sequenceDurations[index];
      });

      const restartId = window.setTimeout(() => {
        setActiveIndex(0);
        scheduleSequence();
      }, elapsed + 700);
      timeouts.push(restartId);
    };

    scheduleSequence();

    return () => {
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [isInView, sequenceDurations]);

  return (
    <div ref={demoRef} className="bg-background/5 border border-foreground/10 rounded-lg p-6 font-mono text-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-foreground/10">
        <div className="w-3 h-3 rounded-full bg-foreground/20" />
        <div className="w-3 h-3 rounded-full bg-foreground/20" />
        <div className="w-3 h-3 rounded-full bg-foreground/20" />
        <span className="ml-4 text-xs text-muted-foreground">AURA Orchestration</span>
      </div>
      
      {/* Chat messages */}
      <div className="min-h-[26rem] space-y-4 sm:min-h-[24rem]">
        {chatSequence.map((item, index) => {
          const isVisible = index <= activeIndex;
          const isActive = index === activeIndex;

          if (item.kind === "routing") {
            return (
              <div
                key={item.id}
                className={`pl-9 text-xs text-muted-foreground/60 flex items-center gap-2 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <span className="w-4 h-px bg-muted-foreground/30" />
                <TypingLine
                  text={item.text}
                  active={isActive}
                  visible={isVisible}
                  className="text-xs text-muted-foreground/60"
                  speed={typingSpeeds.routing}
                />
              </div>
            );
          }

          return (
            <div
              key={item.id}
              className={`flex gap-3 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center text-xs shrink-0 ${item.roleClassName}`}>
                {item.role}
              </div>
              <div>
                <TypingLine
                  text={item.text}
                  active={isActive}
                  visible={isVisible}
                  className={`${item.textClassName} leading-relaxed`}
                  speed={typingSpeeds.message}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Caption */}
      <div className="mt-6 pt-4 border-t border-foreground/10">
        <p className="text-xs text-muted-foreground/50">A peptide question becomes more useful when cross-checked against bloodwork, nutrition, and prior context from the Vault.</p>
      </div>
    </div>
  );
}

export function OrchestrationSection() {
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
      id="orchestration"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            How Aura Works
          </span>
          
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 max-w-4xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Orchestration
            <br />
            <span className="text-muted-foreground">Collaborate, build, and reason across health intelligence.</span>
          </h2>
          
          <p
            className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Aura is a system where specialized agents work across the same Vault and produce better decisions than a generic interface.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Explanation */}
          <div>
            <div className={`mb-12 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Serious health workflows are rarely one-dimensional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A peptide question may depend on bloodwork, nutrition, recovery, prior protocols, research, and Vault context.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aura routes those decisions to the right agents and keeps the reasoning connected.
              </p>
              <p className="text-xl font-display text-foreground">
                The result is not just an answer. It is coordinated intelligence with memory.
              </p>
            </div>

            {/* Support line */}
            <p className={`mt-10 text-muted-foreground/60 text-sm leading-relaxed transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              The point is not just answering faster. The point is reasoning with better boundaries, better memory, and better follow-through.
            </p>

            {/* CTAs */}
            <div className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 text-sm rounded-full border-foreground/20 hover:bg-foreground/5">
                <Link href="/whitepaper">
                  Read Whitepaper
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="h-12 px-6 text-sm rounded-full hover:bg-foreground/5"
              >
                Explore Agents
              </Button>
            </div>
          </div>

          {/* Right: Chat demo */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <ChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
