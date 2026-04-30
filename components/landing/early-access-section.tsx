"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const criteria = [
  "Doctors, scientists, technologists, biohackers, nutritionists, labs, and serious operators",
  "Experience with health data, biomarkers, protocols, research, or real-world workflows",
  "Willingness to collaborate, test ideas, and help shape the system",
  "Serious intent to improve how private health intelligence should work",
];

const onboardingSteps = [
  {
    number: "01",
    label: "Reach out",
    description: "Share your background or use case",
  },
  {
    number: "02",
    label: "Fit",
    description: "We assess where you can contribute",
  },
  {
    number: "03",
    label: "Onboarding",
    description: "Access, context, and calibration",
  },
  {
    number: "04",
    label: "Build",
    description: "Help improve the product together",
  },
];

export function EarlyAccessSection() {
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
    <section id="early-access" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Early Access
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-8">
              Built with
              <br />
              serious collaborators.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Early access is for people who want to use, stress-test, and help shape Aura. We want strong operators and domain experts involved before broader rollout.
            </p>

            <div className="space-y-4 mb-10">
              {criteria.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 75 + 200}ms` }}
                >
                  <span className="shrink-0 w-1.5 h-1.5 mt-2.5 bg-foreground rounded-full" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
            >
              Apply to collaborate
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right: Visual */}
          <div
            className={`hidden lg:block transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border border-foreground/10 p-10">
              <div className="space-y-4">
                {onboardingSteps.map((step, index) => (
                  <div key={step.number}>
                    <div
                      className={`group flex items-center gap-4 rounded-2xl px-3 py-3 transition-all duration-500 hover:bg-muted/30 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                      }`}
                      style={{ transitionDelay: `${index * 120 + 180}ms` }}
                    >
                      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-foreground/20 font-mono text-sm transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-foreground/35 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                        <div className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        {step.number}
                      </div>
                      <div>
                        <span className="text-sm font-mono text-muted-foreground">{step.label}</span>
                        <p className="text-foreground transition-transform duration-500 group-hover:translate-x-0.5">{step.description}</p>
                      </div>
                    </div>
                    {index < onboardingSteps.length - 1 ? (
                      <div className="ml-9 h-6 w-px bg-foreground/10" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
