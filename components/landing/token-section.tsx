"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Coins, Users, Package, Clock } from "lucide-react";

const tokenPrinciples = [
  {
    icon: Coins,
    title: "Fixed supply",
    description: "100M max supply. No hidden expansion.",
  },
  {
    icon: Users,
    title: "Contribution-based",
    description: "Ownership follows useful work, not empty participation.",
  },
  {
    icon: Package,
    title: "Product-first",
    description: "The token sits behind the product, not in front of it.",
  },
  {
    icon: Clock,
    title: "Long-term alignment",
    description: "Designed for builders, validators, researchers, and serious operators improving the network over time.",
  },
];

export function TokenSection() {
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
      id="token"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] gap-12 lg:gap-10 items-start mb-16 lg:mb-20">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              The Economic Layer
            </span>
            
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 max-w-3xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              AURA Token
            </h2>
            
            <p
              className={`mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              A fixed-supply coordination layer for a private intelligence network in health.
            </p>

            <div className={`mt-10 max-w-3xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aura begins as a product-first system. The token is not the product. It is the long-term economic layer that aligns useful work across the network.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It is designed to reward contribution that improves the system: better agents, stronger evaluation, validated research, higher-quality protocol reasoning, more useful infrastructure for serious users.
              </p>
              <p className="text-xl font-display mt-8 text-foreground">
                The goal is not speculation. The goal is alignment.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 lg:sticky lg:top-24">
            {tokenPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className={`group p-6 border border-foreground/10 bg-background/70 hover:border-foreground/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-foreground/20 mb-5 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <principle.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display mb-3">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group">
            <Link href="/whitepaper">
              Read Whitepaper
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5">
            <Link href="/whitepaper">Token Design</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
