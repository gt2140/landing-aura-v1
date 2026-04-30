"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "For curious users exploring Aura for the first time.",
    priceLabel: "Free",
    features: [
      "Generalist access",
      "Light Vault usage",
      "Basic memory continuity",
      "Intro access to biomarker workflows",
      "Personal experimentation sandbox",
    ],
    cta: "Start free",
    href: "#early-access",
    popular: false,
  },
  {
    name: "Plus",
    description: "For serious operators working repeatedly with advanced health context.",
    priceLabel: "$16",
    priceSuffix: "/month",
    features: [
      "Full multi-agent access",
      "Longitudinal Vault memory",
      "Bloodwork, peptides, supplements, research",
      "Priority routing and better context windows",
      "Advanced protocol reasoning",
      "Whitepaper and roadmap access",
    ],
    cta: "Get Plus",
    href: "#early-access",
    popular: true,
  },
  {
    name: "Custom",
    description: "For clinics, laboratories, enterprise teams, and institutional deployments.",
    priceLabel: "Custom",
    features: [
      "Clinic and laboratory workflows",
      "Custom onboarding and support",
      "Private deployments and security review",
      "Custom integrations",
      "Team access controls",
      "Operational and enterprise agreements",
    ],
    cta: "Talk to us",
    href: "#early-access",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative border-t border-foreground/10 py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-14 lg:mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-5">
            Access Plans
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-foreground mb-6 leading-[0.96]">
            Choose the layer
            <br />
            <span className="text-muted-foreground">that fits your workflow.</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Aura can start as a personal intelligence layer and scale into serious operational infrastructure for
            clinics, laboratories, and enterprise health teams.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3 lg:gap-4">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-[24px] border bg-background px-5 py-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(0,0,0,0.07)] lg:px-6 lg:py-7 ${
                plan.popular ? "border-foreground/25 shadow-[0_18px_60px_rgba(0,0,0,0.08)]" : "border-foreground/10"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-5 top-5 rounded-full bg-foreground px-2.5 py-1 text-[9px] font-mono uppercase tracking-[0.24em] text-primary-foreground">
                  Recommended
                </span>
              )}

              <div className="mb-6">
                <span className="font-mono text-xs text-muted-foreground/70">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-2 text-[2rem] text-foreground">{plan.name}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground lg:text-sm">{plan.description}</p>
              </div>

              <div className="mb-6 border-b border-foreground/10 pb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl tracking-tight text-foreground lg:text-5xl">
                    {plan.priceLabel}
                  </span>
                  {"priceSuffix" in plan && plan.priceSuffix ? (
                    <span className="text-xs text-muted-foreground lg:text-sm">{plan.priceSuffix}</span>
                  ) : null}
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground" />
                    <span className="text-[13px] text-muted-foreground lg:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`group flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Free gets people in. Plus is the main individual plan. Custom is for clinical and enterprise deployment.
        </p>
      </div>
    </section>
  );
}
