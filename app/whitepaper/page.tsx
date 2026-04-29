import Link from "next/link";

const tocLinks = [
  { id: "abstract", label: "Abstract" },
  { id: "part-i", label: "Part I: The Problem" },
  { id: "centralization", label: "1. The Centralization of Health" },
  { id: "bureaucracy", label: "2. Bureaucracy, Lobbying, and the Innovation Gap" },
  { id: "ai-health", label: "3. The Promise of AI in Health" },
  { id: "part-ii", label: "Part II: The Solution" },
  { id: "vault", label: "4. The Vault: Encrypted Health Memory" },
  { id: "agents", label: "5. Agent Ecosystem: Specialized Intelligence" },
  { id: "orchestration", label: "6. Orchestration: The Intelligence Router" },
  { id: "part-iii", label: "Part III: Technology & Inspirations" },
  { id: "architecture", label: "7. Technical Architecture" },
  { id: "inspirations", label: "8. Inspirations: Venice AI and Bittensor" },
  { id: "private-design", label: "9. Private by Design" },
  { id: "part-iv", label: "Part IV: Tokenomics" },
  { id: "token-design", label: "10. Token Design" },
  { id: "distribution", label: "11. Distribution & Emissions" },
  { id: "utility-demand", label: "12. Utility & Demand" },
  { id: "burn", label: "13. Burn Mechanisms" },
  { id: "staking", label: "14. Staking & Governance" },
  { id: "part-v", label: "Part V: Go-to-Market" },
  { id: "medvie", label: "15. The Medvie Marketing Model" },
  { id: "community-growth", label: "16. Community & Physician-Led Growth" },
  { id: "partnerships", label: "17. Partnerships & Integrations" },
  { id: "part-vi", label: "Part VI: The AURA Agents" },
  { id: "agent-specs", label: "18. Agent Specifications" },
  { id: "evaluation", label: "19. Evaluation & Quality Scoring" },
  { id: "pouw", label: "20. Proof of Useful Work (PoUW)" },
  { id: "part-vii", label: "Part VII: Roadmap & Conclusion" },
  { id: "roadmap", label: "21. Roadmap" },
  { id: "conclusion", label: "22. Conclusion" },
];

const sections = [
  {
    id: "abstract",
    title: "Abstract",
    paragraphs: [
      "AURA Network is a decentralized private intelligence network purpose-built for advanced health workflows. It combines end-to-end encrypted health memory (the Vault), a multi-agent intelligence layer optimized for biomarkers, peptides, psychedelics, and supplements, and a tokenized incentive model that rewards verified contributions to collective health knowledge.",
      "This paper outlines the motivation, architecture, agent ecosystem, tokenomics, distribution strategy, and roadmap for AURA. It is intended for researchers, biohackers, clinicians, developers, and investors who believe that the future of health intelligence should be private, participatory, and open.",
    ],
  },
  { id: "part-i", title: "Part I: The Problem", paragraphs: [] },
  {
    id: "centralization",
    title: "1. The Centralization of Health",
    paragraphs: [
      "The global health system is a paradox. Never before has humanity had access to so much medical knowledge, diagnostic technology, and therapeutic innovation. Yet never before have individuals felt so disconnected from the decisions that determine their wellbeing.",
      "Health data is concentrated in a handful of institutions: hospitals, insurers, pharmaceutical conglomerates, and government agencies. These intermediaries extract value from the data while the individuals who generate it remain largely powerless. Electronic health records are fragmented across incompatible systems. Diagnostic insights are siloed. Research findings are trapped behind paywalls. And the most promising frontier therapies — peptides, psychedelics, longevity protocols — exist in a gray zone between underground experimentation and institutional acceptance.",
      "The result is a system optimized for the middle of the bell curve, where the most advanced and the most underserved are equally neglected.",
      "For the biohacker tracking twenty biomarkers monthly, the clinician exploring off-label peptide therapies, and the patient seeking alternatives to standard-of-care protocols, the current system offers little. Either they navigate fragmented forums and anecdotal reports, or they pay concierge prices for access to specialists who themselves lack systematic tools.",
      "AURA Network was conceived to address this gap: a private, decentralized intelligence layer for health workflows that exist at the frontier of human optimization and therapeutic innovation.",
    ],
  },
  {
    id: "bureaucracy",
    title: "2. Bureaucracy, Lobbying, and the Innovation Gap",
    paragraphs: [
      "The gap between scientific discovery and clinical practice is not accidental. It is structural.",
      "These dynamics create what researchers call the innovation gap: the space between what science knows and what medicine does. In this gap, patients and practitioners are left to fend for themselves. Online communities emerge to fill the void, but they lack structure, quality control, and longitudinal memory.",
      "AURA does not seek to replace regulators or institutions. It seeks to equip individuals with the intelligence tools to navigate complexity with greater autonomy, and to create a participatory knowledge layer that captures what the formal system misses.",
    ],
    bullets: [
      "Regulatory capture: Large pharmaceutical firms invest more in lobbying than in R&D, shaping FDA policy to protect incumbent revenue streams against disruptive therapies.",
      "Incentive misalignment: Clinicians are rewarded for throughput, not outcomes. Insurance systems reimburse disease management, not prevention or optimization.",
      "Knowledge gatekeeping: Peer review, while valuable, has become a bottleneck. Novel findings can take years to reach practitioners, and negative results are systematically underpublished.",
      "The psychedelic paradox: Compounds with decades of safety data and mounting clinical evidence remain Schedule I, while novel synthetic molecules with inferior profiles receive fast-track designation.",
    ],
  },
  {
    id: "ai-health",
    title: "3. The Promise of AI in Health",
    paragraphs: [
      "Artificial intelligence presents a unique opportunity to compress the innovation gap. Large language models, when properly constrained and prompted, can synthesize vast literatures, identify patterns across heterogeneous data, and generate hypotheses that human experts might miss.",
      "AURA addresses these limitations through a purpose-built architecture: private-by-design infrastructure, specialized agent models, persistent encrypted memory, and a curation philosophy that prioritizes evidence over consensus.",
    ],
    bullets: [
      "Data privacy: Most health AI tools require users to surrender sensitive information to centralized servers, creating exposure to breaches, subpoenas, and commercial exploitation.",
      "Generic training: General-purpose models lack domain depth in specialized areas like peptide pharmacology, psychedelic therapy protocols, or micronutrient interactions.",
      "No longitudinal memory: Each conversation starts from zero. There is no persistent, structured health context that enables increasingly personalized advice over time.",
      "Alignment risks: Models optimized for broad appeal are trained to avoid controversy, which in health means avoiding anything that has not achieved consensus — precisely the frontier where the most significant innovations live.",
    ],
  },
  { id: "part-ii", title: "Part II: The Solution", paragraphs: [] },
  {
    id: "vault",
    title: "4. The Vault: Encrypted Health Memory",
    paragraphs: [
      "The Vault is AURA's foundational data layer: an end-to-end encrypted container for structured health information. Unlike conventional health records, the Vault is owned by the user, readable only by the user, and accessible to AURA agents only through explicit, scoped decryption.",
      "Data enters the Vault through multiple channels: direct user entry, wearable API integrations, lab result uploads, and structured extraction from agent conversations. All data is encrypted client-side with keys the user controls.",
      "The Vault solves the cold-start problem that plagues generic health AI. Because AURA has persistent access to a user's longitudinal health context, every conversation builds on the last. Agents do not ask redundant questions. Recommendations improve over time. Patterns emerge that would be invisible in isolated consultations.",
    ],
    note: "Tables from the original document are omitted in this web edition, but the structure and narrative are preserved.",
  },
  {
    id: "agents",
    title: "5. Agent Ecosystem: Specialized Intelligence",
    paragraphs: [
      "AURA does not rely on a single general-purpose model. Instead, it orchestrates a network of specialized agents, each optimized for a distinct domain of health intelligence.",
      "Each agent is more than a system prompt. Agents have structured knowledge bases, evaluation criteria, authorized tool access, and quality scoring histories. They compete for routing based on demonstrated performance.",
      "The agent model enables a form of vertical specialization that general-purpose models cannot match. A peptide agent can track the evolving research on BPC-157, TB-500, and CJC-1295. A psychedelics agent can monitor clinical trial results, contraindication databases, and integration protocols. A bloodwork agent can interpret specific biomarker patterns against population norms and functional medicine thresholds.",
      "Specialization at the agent level produces higher-quality outputs than generalization at the model level.",
    ],
  },
  {
    id: "orchestration",
    title: "6. Orchestration: The Intelligence Router",
    paragraphs: [
      "The orchestration layer is the intelligence router that coordinates agent selection, prompt construction, output validation, and feedback loops.",
      "The router is itself an agent, trained on routing decisions and evaluated by outcome quality. Over time, it learns which agents excel at which tasks, which Vault contexts produce better outputs, and which prompt structures yield the most useful responses.",
      "The orchestration layer is extensible. As the agent ecosystem grows, the router becomes more sophisticated. New agents can be registered, evaluated, and promoted based on their quality scores and user satisfaction.",
    ],
    bullets: [
      "Classifies the query intent and domain (peptide, psychedelic, bloodwork, nutrition, etc.)",
      "Retrieves relevant Vault context scoped to the domain",
      "Selects the best-performing agent(s) for the task",
      "Constructs a structured prompt with Vault context, evaluation criteria, and output schema",
      "Calls the agent and validates the structured output",
      "Returns a structured, evidence-aware response with sources and caveats",
      "Logs the reasoning chain for longitudinal continuity",
    ],
  },
  { id: "part-iii", title: "Part III: Technology & Inspirations", paragraphs: [] },
  {
    id: "architecture",
    title: "7. Technical Architecture",
    paragraphs: [
      "AURA is built as a modern web application with a clear separation between product, intelligence, and economic layers.",
      "The architecture prioritizes flexibility. LLM providers can be swapped. Agents can be added or upgraded. Evaluation rules can be iterated. The system is designed to evolve without requiring fundamental redesign.",
    ],
    bullets: [
      "Application Layer (Next.js): The frontend provides chat, Vault management, dashboard visualization, and agent selection. The backend handles authentication, encryption key management, Vault operations, and agent orchestration.",
      "Intelligence Layer: The router analyzes queries, selects agents, constructs prompts with Vault context, calls external LLM providers, validates structured outputs, and logs reasoning chains. The LLM is swappable; the architecture is not vendor-locked.",
      "Economic Layer: A scoring engine tracks contributions, a reward allocator distributes tokens via Merkle claims, staking contracts align long-term holders, and burn mechanics protect supply integrity.",
    ],
  },
  {
    id: "inspirations",
    title: "8. Inspirations: Venice AI and Bittensor",
    paragraphs: [
      "AURA draws inspiration from two pioneering projects in decentralized intelligence.",
      "The fusion of Venice's privacy philosophy and Bittensor's incentive architecture creates a unique position: a health intelligence network that is simultaneously private, competitive, and self-improving.",
    ],
    bullets: [
      "Venice AI: Venice demonstrated that private, uncensored AI interfaces can attract serious users who value sovereignty over convenience. AURA extends this philosophy into health, where privacy is not a preference but a requirement.",
      "Bittensor: Bittensor's subnet model proved that decentralized networks can coordinate specialized intelligence work through tokenized incentives. AURA adapts this model for health-specific agent work, creating a marketplace where better agents earn more, worse agents are starved of rewards, and the network continuously elevates its own quality.",
    ],
  },
  {
    id: "private-design",
    title: "9. Private by Design",
    paragraphs: [
      "Privacy in AURA is structural, not decorative.",
      "For frontier health users — those experimenting with peptides, psychedelics, and optimization protocols — privacy is not optional. It is foundational. AURA treats it as such.",
    ],
    bullets: [
      "Client-side encryption: All Vault data is encrypted on the user's device before transmission.",
      "Zero-knowledge architecture: AURA servers store ciphertext only. They cannot decrypt user data.",
      "Scoped inference: Agent prompts include only the Vault context the agent is authorized to see.",
      "No data mining: User data is never used to train models, never sold, never shared.",
      "Export and deletion: Users can export their complete Vault or cryptographically delete it at any time.",
      "HIPAA-ready design: The architecture supports HIPAA compliance workflows for institutional adoption.",
    ],
  },
  { id: "part-iv", title: "Part IV: Tokenomics", paragraphs: [] },
  {
    id: "token-design",
    title: "10. Token Design",
    paragraphs: [
      "The AURA token is the native economic unit of the network. It serves three primary functions.",
      "The token is not a security. It does not represent equity, profit share, or investment contract. It is a utility and coordination mechanism for a decentralized intelligence network.",
    ],
    bullets: [
      "Utility access: Token holdings determine access tiers to agent capabilities, Vault storage limits, and premium features.",
      "Contribution rewards: Verified contributions to the knowledge layer earn tokens through the Proof of Useful Work mechanism.",
      "Governance rights: Staked tokens confer voting power on protocol parameters, agent acceptance, emission schedules, and treasury allocation.",
    ],
  },
  {
    id: "distribution",
    title: "11. Distribution & Emissions",
    paragraphs: [
      "AURA has a fixed total supply of 100,000,000 tokens. The distribution follows a dual-phase model.",
      "The Genesis Allocation is distributed among early contributors, builders, ecosystem partners, and the community treasury. The Emissions Pool is released over 10 years through the Proof of Useful Work mechanism, creating a predictable, transparent supply schedule that rewards ongoing participation.",
      "This model ensures that active participants in the network's knowledge layer are consistently incentivized, while preventing the concentration of supply among passive holders. The network rewards work, not waiting.",
    ],
  },
  {
    id: "utility-demand",
    title: "12. Utility & Demand",
    paragraphs: [
      "Token demand derives from functional utility within the network, not speculative holding. Primary demand drivers include:",
      "As network usage grows, token demand scales with functional utility. This creates a natural alignment between network health and token value: a larger, more active knowledge layer requires more tokens to operate, while simultaneously generating more value for contributors.",
    ],
    bullets: [
      "Agent access fees: Premium agents and high-volume usage require token payment or staking.",
      "Vault storage: Expanded storage tiers are denominated in and paid with AURA tokens.",
      "Data marketplace: Contributors who produce validated datasets, protocols, or evaluation frameworks earn tokens from buyers.",
      "Institutional licensing: Enterprises and clinics that deploy AURA infrastructure for patient populations purchase tokens for service credits.",
      "Governance staking: Active participants stake tokens to vote on protocol evolution, agent acceptance, and treasury disbursement.",
    ],
  },
  {
    id: "burn",
    title: "13. Burn Mechanisms",
    paragraphs: [
      "AURA employs three complementary burn mechanisms to ensure supply discipline and reward active participants.",
      "Burn mechanics are not punitive. They are evolutionary. They ensure that the token supply reflects active, high-quality participation rather than historical accumulation or passive holding.",
    ],
    bullets: [
      "Unclaimed burns: Rewards that remain unclaimed beyond a defined window are burned, preventing dead-weight accumulation in the supply and ensuring that only active contributors retain economic rights.",
      "Quality-gate burns: Agents that fail to meet minimum quality thresholds for sustained periods have their accumulated emission rights burned, protecting the network from low-quality participants and maintaining competitive pressure.",
      "Revenue buyback burns: A percentage of protocol revenue is used to purchase tokens from the open market and burn them, creating a direct economic link between network commercial success and supply reduction.",
    ],
  },
  {
    id: "staking",
    title: "14. Staking & Governance",
    paragraphs: [
      "Staking aligns long-term incentives across the network. Staked tokens confer governance rights proportional to stake size and duration.",
      "Governance is deliberately constrained. The protocol core — privacy architecture, encryption standards, supply cap — is immutable. Adjustable parameters are limited to operational parameters that require community calibration.",
      "This design prevents governance capture while enabling the network to adapt to changing conditions, new scientific evidence, and evolving user needs.",
    ],
    bullets: [
      "Agent acceptance and graduation criteria",
      "Emission schedule adjustments within predefined bounds",
      "Treasury allocation for grants, partnerships, and development",
      "Protocol parameter changes (evaluation weights, quality thresholds, burn rates)",
    ],
  },
  { id: "part-v", title: "Part V: Go-to-Market", paragraphs: [] },
  {
    id: "medvie",
    title: "15. The Medvie Marketing Model",
    paragraphs: [
      "AURA's go-to-market strategy draws from a proven playbook in health consumer engagement: the physician-led content model that has driven adoption in telehealth, supplements, and functional medicine.",
      "This model is capital-efficient because it leverages existing trust networks. A recommendation from a physician with a dedicated following converts at rates that traditional advertising cannot match. And because the content is authentic — real practitioners using real tools for real patients — it builds trust rather than eroding it.",
    ],
    bullets: [
      "Identify credible physicians, researchers, and practitioners who are already creating content in target domains (peptides, psychedelics, biohacking, longevity).",
      "Equip them with AURA Pro access, enabling them to demonstrate the platform's capabilities in their content.",
      "Encourage authentic user-generated content: physicians showing how they use AURA to interpret bloodwork, design protocols, or track patient outcomes.",
      "Distribute content across TikTok, Instagram, YouTube, and podcasts — channels where health-conscious consumers already seek information.",
      "Convert viewers to users through frictionless onboarding, trial access, and community invitation.",
    ],
  },
  {
    id: "community-growth",
    title: "16. Community & Physician-Led Growth",
    paragraphs: [
      "Beyond individual creators, AURA invests in community infrastructure.",
      "Community growth is measured not by vanity metrics but by engagement depth: active Vault users, agent interaction frequency, contribution volume, and retention rates. A smaller, highly engaged community outperforms a large, passive user base in network value generation.",
    ],
    bullets: [
      "Discord and Telegram communities for peer support, protocol sharing, and agent feedback.",
      "Monthly community calls with the core team, agent developers, and researchers.",
      "Grant programs for developers building on the AURA infrastructure.",
      "Bounty programs for data contributors who expand the knowledge layer.",
      "Regional ambassador programs for non-English-speaking markets.",
    ],
  },
  {
    id: "partnerships",
    title: "17. Partnerships & Integrations",
    paragraphs: [
      "Strategic partnerships accelerate adoption and expand the knowledge layer. Priority categories include:",
      "Each partnership is evaluated against a single criterion: does it increase the quality, quantity, or accessibility of health intelligence for AURA users? Partnerships that do not serve this mission are declined regardless of commercial appeal.",
    ],
    bullets: [
      "Wearable and lab integration partners: Continuous glucose monitors, sleep trackers, comprehensive metabolic panels, hormone tests.",
      "Research institutions: Collaborative studies on AI-assisted health optimization, peptide safety profiling, psychedelic integration outcomes.",
      "Clinic networks: White-label deployment for functional medicine practices, longevity clinics, and optimization centers.",
      "Protocol developers: Partnerships with peptide manufacturers, supplement formulators, and psychedelic therapy training programs.",
    ],
  },
  { id: "part-vi", title: "Part VI: The AURA Agents", paragraphs: [] },
  {
    id: "agent-specs",
    title: "18. Agent Specifications",
    paragraphs: [
      "Each AURA agent is defined by a specification document that includes structured scope, tools, evaluation rules, and safety boundaries.",
      "Agents are not static. They evolve through a structured lifecycle: proposal, sandbox testing, limited deployment, full deployment, and graduation. Each transition requires meeting quality thresholds and community review.",
    ],
  },
  {
    id: "evaluation",
    title: "19. Evaluation & Quality Scoring",
    paragraphs: [
      "Agent quality is not subjective. It is measured through a multi-dimensional scoring system.",
      "Scores are computed algorithmically where possible, supplemented by human expert review for edge cases and new agent types. The scoring system itself is open to governance adjustment, but the principle is fixed: agents must demonstrate quality to earn rewards.",
    ],
    bullets: [
      "Accuracy: Factual correctness against reference corpora and peer-reviewed sources.",
      "Completeness: Coverage of relevant considerations, contraindications, and alternatives.",
      "Structure: Adherence to output schemas, citation formats, and reasoning transparency.",
      "Safety: Appropriate caveats, contraindication flags, and escalation triggers for high-risk queries.",
      "User satisfaction: Post-interaction ratings, follow-up engagement, and reported outcomes.",
    ],
  },
  {
    id: "pouw",
    title: "20. Proof of Useful Work (PoUW)",
    paragraphs: [
      "Proof of Useful Work is AURA's contribution mechanism. Unlike Proof of Work, which burns energy for security, or Proof of Stake, which weights influence by capital, PoUW rewards verifiable contributions to the network's knowledge layer.",
      "Contributions are scored, ranked, and rewarded through the emissions pool. The scoring algorithm weights accuracy, impact, and novelty. A contribution that corrects a widely propagated error scores higher than one that adds marginal detail to a well-covered topic.",
      "PoUW creates a direct, transparent link between value creation and value capture. Contributors who improve the network earn tokens. Token holders who stake support the network's governance. The incentives align.",
    ],
    bullets: [
      "Agent development: Creating, improving, or maintaining agents that meet quality thresholds.",
      "Data curation: Structuring, validating, and annotating health datasets that agents consume.",
      "Evaluation work: Running benchmarks, scoring agent outputs, and maintaining reference standards.",
      "Protocol documentation: Writing, reviewing, and updating structured health protocols and best practices.",
      "Vault integrations: Building connectors for wearables, labs, and external health data sources.",
    ],
  },
  { id: "part-vii", title: "Part VII: Roadmap & Conclusion", paragraphs: [] },
  {
    id: "roadmap",
    title: "21. Roadmap",
    paragraphs: ["AURA development follows a phased approach, with each phase building on the previous and expanding the network's capabilities."],
    bullets: [
      "Phase 1: Foundation (Q2 2025) — Vault MVP, agent router, community launch, and token contract deployment.",
      "Phase 2: Expansion (Q3–Q4 2025) — full agent ecosystem, wearable and lab integrations, Proof of Useful Work engine, and governance portal.",
      "Phase 3: Network Effect (2026) — agent marketplace, institutional partnerships, cross-chain integrations, and advanced Vault features.",
      "Phase 4: Ecosystem Maturity (2027+) — decentralized inference infrastructure, global expansion, research network, and protocol standardization.",
    ],
  },
  {
    id: "conclusion",
    title: "22. Conclusion",
    paragraphs: [
      "AURA Network is a bet on the future of health intelligence: private, participatory, and specialized. It is built for the practitioners, researchers, and self-experimenters who operate at the frontier of human optimization and therapeutic innovation.",
      "The network does not replace doctors, regulators, or institutions. It augments them. It gives individuals tools to navigate complexity. It gives researchers a platform to distribute knowledge. It gives clinicians a systematic way to track, interpret, and act on patient data.",
      "The token economics are designed to reward genuine contribution, not speculation. The privacy architecture is designed to protect users, not exploit them. The agent ecosystem is designed to compete on quality, not marketing.",
      "If successful, AURA becomes the intelligence layer for a new kind of health practice: one that is data-rich, privacy-preserving, collectively built, and individually empowering. The infrastructure for this future does not yet exist. AURA is building it.",
    ],
  },
];

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="sticky top-0 z-20 border-b border-black/10 bg-white/92 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-sm tracking-[0.28em] text-black/70 transition-colors hover:text-black">
            AURA
          </Link>
          <div className="flex items-center gap-6">
            <a href="#abstract" className="hidden text-sm text-black/45 transition-colors hover:text-black md:inline">
              Start reading
            </a>
            <Link href="/" className="text-sm text-black/50 transition-colors hover:text-black">
              Back to site
            </Link>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="border-b border-black/10 pb-10">
          <div className="mb-6 inline-flex rounded-full border border-black/10 px-4 py-1.5 text-[11px] tracking-[0.24em] text-black/42">
            WHITEPAPER • Q2 2025
          </div>
          <div className="text-[0.8rem] tracking-[0.34em] text-black/70">AURA NETWORK</div>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[0.95] tracking-[-0.05em] md:text-6xl">
            Decentralized Private Intelligence for Advanced Health Workflows
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/60 md:text-lg">
            Web edition of the uploaded document. The original layout tables are simplified here into a clean reading
            page with a white background.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/55">Private by design</span>
            <span className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/55">Agent ecosystem</span>
            <span className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/55">Tokenomics</span>
            <span className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/55">Go-to-market</span>
          </div>
        </div>

        <div className="grid gap-12 pt-10 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <div className="mb-4 text-xs tracking-[0.24em] text-black/40">CONTENTS</div>
              <nav className="space-y-2">
                {tocLinks.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm leading-relaxed text-black/55 transition-colors hover:text-black"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-black/8 pb-10 last:border-b-0">
                <h2 className="text-2xl leading-tight tracking-[-0.03em] md:text-3xl">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-[15px] leading-8 text-black/72 md:text-base">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[15px] leading-7 text-black/72 md:text-base">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-black/45" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.note ? <p className="mt-5 text-sm italic text-black/45">{section.note}</p> : null}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
