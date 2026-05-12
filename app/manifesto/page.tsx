import Link from "next/link";

const manifestoBlocks = [
  {
    accent: true,
    text: "Money became programmable. Information became infinite. Intelligence is becoming abundant. Health must be next.",
  },
  {
    text: "For too long, access to high-quality medical intelligence has depended on geography, institutions, capital, bureaucracy, and closed systems.",
  },
  {
    text: "But the body is producing more signal than ever. Blood panels, medical imaging, biomarkers, wearables, genomics, protocols, symptoms, interventions, recovery patterns, cognitive signals, research, and outcomes are becoming part of the same living map of human health.",
  },
  {
    accent: true,
    text: "The problem is no longer the absence of data. The problem is the absence of intelligence that can hold it together.",
  },
  {
    text: "AURA is built for this next frontier: a private intelligence network for the future of health. Not only for personal tracking. Not only for diagnostics. Not only for research. For the full intelligence layer medicine is missing.",
  },
  {
    text: "A system where fragmented health signals become structured memory. Where medical reasoning becomes continuous. Where research is organized, compared, challenged, and made usable. Where information is not blindly trusted, but evaluated, scored, and improved.",
  },
  {
    text: "Where clinicians, researchers, builders, validators, and users can contribute to better health intelligence without surrendering privacy.",
  },
  {
    text: "Medical intelligence should not be biased by closed incentives, institutional bottlenecks, outdated systems, or whoever controls access to the data.",
  },
  {
    accent: true,
    text: "Private when it must be private. Open when it can be open. Verifiable when it matters. Accessible wherever people need it.",
  },
  {
    text: "AURA is not another wellness app. It is not a chatbot. It is not a closed medical record. It is an intelligence layer for advanced health.",
  },
  {
    text: "The future of medicine will not be built only inside hospitals, labs, or pharmaceutical companies. It will be built by networks: private, intelligent, open to contribution, and aligned around better health outcomes.",
  },
  {
    text: "AURA exists to make the best medical intelligence more accessible. To structure the signal. To remove the noise. To expand access. To reward useful work. To push medicine forward.",
  },
  {
    accent: true,
    text: "Build the intelligence layer for the future of health.",
  },
];

export default function ManifestoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[length:100%_4px] opacity-35" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,209,0.18),transparent_35%),radial-gradient(circle_at_85%_18%,rgba(255,0,128,0.12),transparent_30%)]" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="font-mono text-sm tracking-[0.45em] text-white/80 transition-colors hover:text-white">
          AURA
        </Link>
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.28em] text-white/50 transition-colors hover:text-white">
          Back
        </Link>
      </header>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-6xl flex-col justify-center px-6 pb-24 pt-12 md:px-10">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.5em] text-cyan-200/70">
          AURA Manifesto
        </p>
        <h1 className="max-w-5xl font-mono text-[clamp(2.7rem,9vw,8.5rem)] font-black uppercase leading-[0.82] tracking-normal text-white">
          Health must be next.
        </h1>
        <p className="mt-8 max-w-2xl font-mono text-sm uppercase leading-7 tracking-[0.18em] text-white/58 md:text-base">
          A private intelligence layer for advanced health. Built to structure the signal, remove the noise, and push medicine forward.
        </p>
      </section>

      <section className="relative z-10 border-t border-white/12 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.34fr_0.66fr]">
          <div className="font-mono text-xs uppercase tracking-[0.32em] text-white/35">
            Signal / Memory / Access
          </div>
          <div className="space-y-7">
            {manifestoBlocks.map((block, index) => (
              <p
                key={`${index}-${block.text}`}
                className={
                  block.accent
                    ? "font-mono text-[clamp(1.1rem,2vw,1.85rem)] font-semibold uppercase leading-[1.2] tracking-[0.08em] text-white"
                    : "font-mono text-[clamp(0.95rem,1.35vw,1.18rem)] uppercase leading-8 tracking-[0.08em] text-white/68"
                }
              >
                {block.text}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
