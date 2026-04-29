"use client";

import { LiveAgentCounter, LiveAgentFeed } from "@/components/landing/live-agent-feed";
import { PixelIcon } from "@/components/landing/pixel-icon";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black/[0.04] px-4 py-2 text-[11px] tracking-[0.22em] text-black/40">
      {children}
    </span>
  );
}

export function LiveRightNowSection() {
  return (
    <section id="live" className="border-t border-black/[0.06] px-6 py-20 md:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-[460px]">
            <PixelIcon type="agents" size={40} />
            <div className="mt-5">
              <Tag>LIVE RIGHT NOW</Tag>
            </div>
            <h2 className="mt-7 text-[clamp(2.45rem,5vw,4.15rem)] leading-[0.98] tracking-[-0.05em] text-black/92">
              Agents working
              <br />
              24 / 7,
              <br />
              autonomously.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-black/45 lg:text-[1rem]">
              At any moment, specialized Aura agents are running across labs, biomarkers, protocol notes, supplements,
              and research context with memory carried forward.
            </p>
            <div className="mt-9 flex items-end gap-3">
              <LiveAgentCounter />
              <span className="mb-2 text-sm tracking-wide text-black/30">agents active globally</span>
            </div>
          </div>

          <div className="max-w-[560px] lg:max-w-none lg:self-stretch">
            <LiveAgentFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
