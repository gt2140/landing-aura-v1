const manifestoParagraphs = [
  "Money became programmable. Information became infinite. Intelligence is becoming abundant. Health must be next.",
  "For too long, access to high-quality medical intelligence has depended on geography, institutions, capital, bureaucracy, and closed systems.",
  "But the body is producing more signal than ever.",
  "Blood panels, medical imaging, biomarkers, wearables, genomics, protocols, symptoms, interventions, recovery patterns, cognitive signals, research, and outcomes are all becoming part of the same living map of human health.",
  "The problem is no longer the absence of data. The problem is the absence of intelligence that can hold it together.",
  "AURA is built for this next frontier.",
  "A private intelligence network for the future of health.",
  "Not only for personal tracking. Not only for diagnostics. Not only for research.",
  "But for the full intelligence layer medicine is missing.",
  "A system where fragmented health signals become structured memory. Where medical reasoning becomes more continuous. Where research is organized, compared, challenged, and made usable. Where agents help detect patterns across complex biological context. Where information is not blindly trusted, but evaluated, scored, and improved. Where clinicians, researchers, builders, validators, and users can contribute to better health intelligence without surrendering privacy.",
  "We believe medical intelligence should not be biased by closed incentives, institutional bottlenecks, outdated systems, or whoever controls access to the data.",
  "It should be private when it must be private. Open when it can be open. Verifiable when it matters. Accessible wherever people need it.",
  "AURA is not another wellness app. It is not a chatbot. It is not a closed medical record.",
  "It is an intelligence layer for advanced health.",
  "A network where useful work improves agents, datasets, models, evaluations, and workflows. Where contributors are rewarded for building better health intelligence. Where private context becomes the foundation for better decisions, earlier detection, deeper research, and more personalized care.",
  "The future of medicine will not be built only inside hospitals, labs, or pharmaceutical companies.",
  "It will be built by networks.",
  "Private. Intelligent. Open to contribution. Aligned around better health outcomes.",
  "AURA exists to make the best medical intelligence more accessible.",
  "Not only for those with the best doctors. Not only for the richest cities. Not only for the institutions with the most resources.",
  "With internet, AI, private memory, specialized agents, and aligned contributors, advanced health intelligence can reach more people, more places, and more contexts than ever before.",
  "AURA is built to help make that possible.",
  "To structure the signal. To remove the noise. To expand access. To reward useful work. To push medicine forward.",
  "Build the intelligence layer for the future of health.",
];

export function ManifestoSection() {
  return (
    <section id="manifesto" className="border-t border-foreground/10 px-6 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="h-px w-8 bg-foreground/30" />
            AURA Manifesto
          </span>
          <h2 className="mt-6 max-w-xl text-4xl font-display leading-[0.98] tracking-tight md:text-6xl">
            Build the intelligence layer for the future of health.
          </h2>
        </div>

        <div className="space-y-6 border-l border-foreground/10 pl-6 md:pl-10">
          {manifestoParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-foreground/72 md:text-lg md:leading-9">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
