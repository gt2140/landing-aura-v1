"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const AGENTS = [
  {
    label: "GENERALIST",
    title: "Cross-domain health reasoning",
    desc: "Works across your full Vault to connect labs, biomarkers, protocol notes, supplements, research, and prior sessions into one coherent line of reasoning.",
    stats: [{ v: "Full", l: "vault access" }, { v: "9", l: "domains coordinated" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/researcher-CvhqOuV6irGwBOnJoTGFlXdbyYBRjb.png",
  },
  {
    label: "BLOODWORK",
    title: "Labs & biomarker interpretation",
    desc: "Interprets lab panels, tracks biomarker trends, and compares longitudinal signal so blood data becomes usable context instead of isolated snapshots.",
    stats: [{ v: "Trend", l: "analysis ready" }, { v: "Long", l: "memory window" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coder-9bItvCegU6TXUqbX3tUXGBAtvkBkXp.png",
  },
  {
    label: "PEPTIDES",
    title: "Protocol review & dosing context",
    desc: "Cross-checks peptide protocols against bloodwork, recovery, prior experiments, and evidence so protocol decisions stay disciplined.",
    stats: [{ v: "Scoped", l: "reasoning layer" }, { v: "E2E", l: "private context" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analyst-Ysxnqg7Fpy2cfA56PiIttv1KximMhT.png",
  },
  {
    label: "RESEARCH",
    title: "Papers, mechanisms & evidence synthesis",
    desc: "Synthesizes literature, competing claims, and mechanistic evidence into structured takeaways that can be revisited and tested over time.",
    stats: [{ v: "Paper", l: "synthesis" }, { v: "Claim", l: "comparison" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/executor-o1q6509qMLXMtpBIGo49vcgOu34sI1.png",
  },
  {
    label: "SUPPLEMENTS",
    title: "Supplement stack review",
    desc: "Checks supplement stacks against goals, biomarker context, interactions, and prior notes so changes stay structured instead of improvised.",
    stats: [{ v: "Stack", l: "clarity layer" }, { v: "Risk", l: "flags surfaced" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analyst-Ysxnqg7Fpy2cfA56PiIttv1KximMhT.png",
  },
  {
    label: "NUTRITION",
    title: "Nutrition & recovery context",
    desc: "Connects nutrition signals, recovery trends, and day-to-day adherence so food and performance context become part of the same reasoning loop.",
    stats: [{ v: "Macro", l: "context aware" }, { v: "Recovery", l: "linked signal" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coder-9bItvCegU6TXUqbX3tUXGBAtvkBkXp.png",
  },
  {
    label: "PSYCHEDELICS",
    title: "Preparation & integration support",
    desc: "Frames psychedelic workflows with preparation notes, recovery context, contraindications, and integration memory carried forward over time.",
    stats: [{ v: "Prep", l: "safety framing" }, { v: "Memory", l: "integration log" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/researcher-CvhqOuV6irGwBOnJoTGFlXdbyYBRjb.png",
  },
  {
    label: "PROTOCOL REVIEW",
    title: "Protocol notes & decision hygiene",
    desc: "Compares protocol notes against bloodwork, supplements, research, and prior experiments so decisions stay disciplined and easier to revisit.",
    stats: [{ v: "Notes", l: "made reusable" }, { v: "Cross", l: "domain checked" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/executor-o1q6509qMLXMtpBIGo49vcgOu34sI1.png",
  },
];

const STICKY_TOP = 80;
const STICKY_STEP = 16;
const SCALE_STEP = 0.04;
const OFFSET_STEP = 8;

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black/[0.04] px-3 py-1 text-[11px] tracking-widest text-black/40">
      {children}
    </span>
  );
}

export function StackingAgentCards({ maxVisible = AGENTS.length }: { maxVisible?: number }) {
  const visibleAgents = useMemo(() => AGENTS.slice(0, maxVisible), [maxVisible]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [depth, setDepth] = useState<number[]>(visibleAgents.map(() => 0));

  useEffect(() => {
    setDepth(visibleAgents.map(() => 0));
    cardRefs.current = visibleAgents.map((_, index) => cardRefs.current[index] ?? null);
  }, [visibleAgents]);

  useEffect(() => {
    function onScroll() {
      const nextDepth = visibleAgents.map((_, index) => {
        let count = 0;

        for (let compareIndex = index + 1; compareIndex < visibleAgents.length; compareIndex += 1) {
          const element = cardRefs.current[compareIndex];
          if (!element) continue;
          const rect = element.getBoundingClientRect();
          const stickyTop = STICKY_TOP + compareIndex * STICKY_STEP;
          if (rect.top <= stickyTop + 2) count += 1;
        }

        return count;
      });

      setDepth(nextDepth);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [visibleAgents]);

  return (
    <div className="flex flex-col" style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}>
      {visibleAgents.map((agent, index) => {
        const currentDepth = depth[index];
        const scale = 1 - currentDepth * SCALE_STEP;
        const translateY = currentDepth * OFFSET_STEP;

        return (
          <div
            key={agent.label}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className="sticky mb-2.5"
            style={{ top: `${STICKY_TOP + index * STICKY_STEP}px`, zIndex: 10 + index }}
          >
            <div
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                willChange: "transform",
              }}
            >
              <div className="group relative overflow-hidden rounded-[20px] border border-black/[0.07] bg-[#faf9f7]">
                {agent.img && (
                  <div className="relative h-32 w-full pointer-events-none md:hidden">
                    <img
                      src={agent.img}
                      alt={agent.label}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 85%)",
                      }}
                    />
                  </div>
                )}

                {agent.img && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[43%] md:block">
                    <img src={agent.img} alt={agent.label} className="h-full w-full object-cover object-center" />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to right, #faf9f7 0%, transparent 55%)",
                      }}
                    />
                  </div>
                )}

                <div className="relative z-10 p-5 md:p-5">
                  <div className="md:max-w-[60%]">
                    <div className="mb-4 flex items-start justify-between">
                      <span className="scale-95 origin-left md:scale-100">
                        <Tag>{agent.label}</Tag>
                      </span>
                    </div>
                    <h3 className="mb-2 text-[0.98rem] font-light leading-snug md:text-[1.08rem]">{agent.title}</h3>
                    <p className="mb-5 text-[12px] leading-relaxed text-black/45 md:text-[13px]">{agent.desc}</p>
                  </div>
                  <div className="flex gap-5 border-t border-black/[0.06] pt-3.5">
                    {agent.stats.map((stat) => (
                      <div key={stat.l}>
                        <div className="text-[1.28rem] font-light leading-none md:text-[1.45rem]">{stat.v}</div>
                        <div className="mt-1 text-[9px] tracking-[0.16em] text-black/35 md:text-[9.5px]">{stat.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="h-[10vh] md:h-[16vh]" />
    </div>
  );
}
