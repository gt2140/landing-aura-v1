"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Use",
    description: "Interact with Aura. Generate real health intelligence through repeated, disciplined use.",
  },
  {
    number: "02",
    title: "Contribute",
    description: "Builders improve agents. Validators score quality. Researchers synthesize frontier material. Specialists improve workflows and protocols.",
  },
  {
    number: "03",
    title: "Earn",
    description: "Useful contributions are rewarded through Aura's coordination layer.",
  },
];

const contributionTypes = [
  {
    title: "Agent improvements",
    description: "Refining prompts, tools, and behaviors so agents become more accurate, useful, and reliable.",
  },
  {
    title: "Workflow design",
    description: "Shaping better flows for how users move from question to reasoning to action.",
  },
  {
    title: "Protocol validation",
    description: "Stress-testing protocols against evidence, constraints, and real-world safety considerations.",
  },
  {
    title: "Research synthesis",
    description: "Turning scattered papers and competing claims into structured, usable understanding.",
  },
  {
    title: "Edge-case review",
    description: "Catching brittle outputs, ambiguous cases, and failure modes before they compound.",
  },
  {
    title: "Evaluation infrastructure",
    description: "Building the scoring, testing, and review systems that keep quality measurable.",
  },
  {
    title: "Specialist input",
    description: "Adding domain-specific judgment where general systems are not enough on their own.",
  },
  {
    title: "Structured health intelligence",
    description: "Organizing observations, context, and longitudinal signal into something the system can reason with.",
  },
];

export function NetworkSection() {
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
      id="network"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 text-center">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            From Product to Network
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Proof of
            <br />
            <span className="text-muted-foreground">Useful Work.</span>
          </h2>
        </div>

        <p className={`text-xl text-muted-foreground leading-relaxed mb-16 max-w-2xl mx-auto text-center transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          The network improves when people contribute. The token coordinates that. Aura begins as a product-first system. Over time, builders, validators, researchers, and specialists improve the network through useful work and participate in the value they help create.
        </p>

        <div className="mb-18 grid gap-4 md:grid-cols-3 lg:gap-5">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group relative overflow-hidden rounded-[24px] border border-foreground/10 bg-background/80 px-5 py-6 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/25 hover:shadow-[0_18px_48px_rgba(0,0,0,0.07)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-foreground/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/12 bg-foreground text-xs font-mono text-background transition-transform duration-500 group-hover:scale-105">
                  {step.number}
                </div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55 transition-colors duration-300 group-hover:text-muted-foreground">
                  Step
                </span>
              </div>
              <h3 className="mb-3 text-[1.45rem] font-display leading-none transition-transform duration-500 group-hover:translate-x-0.5">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground/80">{step.description}</p>
            </div>
          ))}
        </div>

        <div className={`border-t border-foreground/10 pt-16 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <h3 className="text-2xl lg:text-3xl font-display mb-6 text-center">What contribution looks like</h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            Contribution in Aura is not limited to code. The network should reward useful signal, not empty participation.
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-0 border-t border-foreground/10">
            {contributionTypes.map((type, index) => (
              <div
                key={type.title}
                className={`group relative flex items-start gap-5 border-b border-foreground/10 py-6 transition-all duration-500 hover:translate-x-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 40 + 550}ms` }}
              >
                <div className="relative mt-1 h-3 w-10 shrink-0">
                  <div className="absolute inset-y-1/2 left-0 h-px w-full -translate-y-1/2 bg-foreground/10" />
                  <div className="absolute inset-y-1/2 left-0 h-px w-4 -translate-y-1/2 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-transparent transition-all duration-500 group-hover:w-8" />
                </div>
                <div className="max-w-md">
                  <span className="block text-[1.08rem] text-foreground font-display leading-tight tracking-[-0.02em] mb-2 transition-transform duration-300 group-hover:translate-x-0.5">
                    {type.title}
                  </span>
                  <span className="block text-[14px] text-muted-foreground/65 leading-relaxed transition-colors duration-300 group-hover:text-muted-foreground/90">
                    {type.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
