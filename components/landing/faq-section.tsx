"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  // Original 10
  {
    question: "What is Aura?",
    answer: "Aura is a private intelligence system for advanced health workflows. It helps serious users work through labs, biomarkers, protocols, supplements, peptides, psychedelics, and research-heavy decisions with more continuity, structure, and specialized reasoning."
  },
  {
    question: "Who is Aura built for?",
    answer: "Aura is built for high-agency users who already take an active role in their health. People ordering labs, tracking biomarkers, reading research, testing protocols, and making repeated decisions with context."
  },
  {
    question: "Is Aura a health chatbot?",
    answer: "No. Aura uses conversational workflows, but it is designed as a system, not a generic chatbot. The product is built around private context, scoped agents, and longitudinal use."
  },
  {
    question: "What is the Vault?",
    answer: "The Vault is Aura's private memory layer. It stores labs, notes, biomarkers, protocols, research, and other health context so it can be reused across future reasoning instead of disappearing after one session."
  },
  {
    question: "Why does Aura need specialized agents?",
    answer: "Different health workflows require different reasoning boundaries. Bloodwork, nutrition, supplements, peptides, psychedelics, enhancement, and research interpretation should not all be flattened into one generic assistant."
  },
  {
    question: "Does Aura support peptides and psychedelics?",
    answer: "Aura can help structure reasoning around peptide protocols, psychedelic preparation, safety framing, and integration support. The goal is disciplined decision support, not hype or reckless experimentation."
  },
  {
    question: "What about enhancement, cognition, and recovery workflows?",
    answer: "Aura is designed for serious users working across advanced health workflows, including cognition, recovery, performance, supplements, peptides, and research-heavy experimentation. These are treated as real workflows requiring context and rigor."
  },
  {
    question: "How does Aura handle privacy?",
    answer: "Aura is built around private context. The Vault is end-to-end encrypted, agent access is scoped, and user data is not meant to be mined, sold, or reused as generic training exhaust."
  },
  {
    question: "Where does the token fit in?",
    answer: "The token is not the product. Aura starts as a product-first system. Over time, the token acts as a coordination layer for useful contribution across builders, validators, researchers, and specialists."
  },
  {
    question: "What is early access for?",
    answer: "Early access is for serious users who want to use the product repeatedly and help shape it through real feedback. The goal is to improve the system with high-signal usage before broader rollout."
  },
  // New 10 FAQs
  {
    question: "What kind of users is Aura not built for?",
    answer: "Aura is not built as casual wellness software. It is designed for users doing serious, repeated, context-heavy work across labs, protocols, supplements, biomarkers, and research."
  },
  {
    question: "Can Aura reason across multiple domains at once?",
    answer: "Yes. Some questions span bloodwork, nutrition, supplements, peptides, recovery, and prior protocols. Aura is designed to orchestrate across specialized agents when needed."
  },
  {
    question: "Why does longitudinal memory matter so much?",
    answer: "Because advanced health workflows are cumulative. The usefulness of the system increases when prior sessions, previous reasoning, and changing signals remain available across time."
  },
  {
    question: "Can Aura help with research-heavy protocols?",
    answer: "Yes. Aura is intended for research-heavy workflows where users need help organizing frontier material, comparing evidence, and reasoning with more structure and continuity."
  },
  {
    question: "How does Aura handle supplements, peptides, and enhancement workflows?",
    answer: "These are treated as serious workflows requiring context, evidence-aware reasoning, and disciplined tracking — not as gimmicks or hype categories."
  },
  {
    question: "Does Aura replace clinical judgment?",
    answer: "No. Aura is a private intelligence system for structured reasoning and better follow-through. It is not a replacement for licensed medical care."
  },
  {
    question: "Can users contribute to improve Aura?",
    answer: "Over time, yes. Builders, validators, researchers, and specialists can contribute workflows, agent improvements, validation, and structured knowledge that strengthen the network."
  },
  {
    question: "What kinds of contributions are likely to matter most?",
    answer: "High-signal contributions such as agent improvements, research synthesis, validation, workflow design, protocol interpretation, and better evaluation infrastructure."
  },
  {
    question: "How does Aura avoid rewarding low-quality participation?",
    answer: "The network is designed around useful work, not noise. Contribution quality is expected to be evaluated through impact, consistency, and validation rather than raw activity."
  },
  {
    question: "Why introduce a token at all?",
    answer: "Because if Aura evolves into a real contribution network, it needs a way to coordinate incentives, align useful work, and let contributors participate in the value they help create."
  },
];

function FaqItem({ 
  faq, 
  isOpen, 
  onClick, 
  index,
  isVisible 
}: { 
  faq: typeof faqs[0]; 
  isOpen: boolean; 
  onClick: () => void;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div 
      className={`border-b border-foreground/10 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${Math.min(index, 10) * 50}ms` }}
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-lg font-display group-hover:translate-x-1 transition-transform duration-300">
          {faq.question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 shrink-0 mt-1 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground leading-relaxed pr-12">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      id="faq"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            FAQ
          </span>
          
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 max-w-3xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
          <div>
            {faqs.slice(0, 10).map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
          <div>
            {faqs.slice(10).map((faq, index) => (
              <FaqItem
                key={index + 10}
                faq={faq}
                isOpen={openIndex === index + 10}
                onClick={() => setOpenIndex(openIndex === index + 10 ? null : index + 10)}
                index={index + 10}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
