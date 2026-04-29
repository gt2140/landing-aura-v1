"use client";

import { PixelIcon } from "@/components/landing/pixel-icon";
import { StackingAgentCards } from "@/components/landing/stacking-agent-cards";
import Link from "next/link";
import { getDashboardLoginHref } from "@/lib/dashboard-url";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black/[0.04] px-4 py-2 text-[11px] tracking-[0.22em] text-black/40">
      {children}
    </span>
  );
}

export function AgentsSection() {
  const dashboardLoginHref = getDashboardLoginHref();

  return (
    <section id="agents" className="border-t border-black/[0.06] px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <PixelIcon type="agents" size={40} />
            <div className="mt-4">
              <Tag>AGENT TYPES</Tag>
            </div>
            <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
              Specialized agents
              <br />
              ready to reason.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-black/45">
            Aura routes questions to scoped agents built for bloodwork, research, peptides, supplements, and
            cross-domain health workflows. Same Vault, better boundaries.
          </p>
        </div>

        <StackingAgentCards maxVisible={4} />

        <div className="mt-10 flex justify-center">
          <Link
            href={dashboardLoginHref}
            className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.02] px-5 py-3 text-xs tracking-[0.2em] text-black/45 transition-colors hover:border-black/20 hover:text-black/70"
          >
            LOG IN TO EXPLORE MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
