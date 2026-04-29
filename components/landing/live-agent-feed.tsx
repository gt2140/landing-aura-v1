"use client";

import { useEffect, useRef, useState } from "react";

const AGENT_NAMES = [
  "psychedelics-6b3e",
  "nutrition-5a3d",
  "generalist-9d4e",
  "hypothesis-4f2c",
  "bloodwork-7f2a",
  "research-2c8f",
];

const TASKS = [
  "Preparing integration notes from prior psychedelic session",
  "Reviewing supplement stack for interaction risk",
  "Comparing protocol note against current bloodwork",
  "Mapping biomarker drift across four lab panels",
  "Synthesizing three papers on recovery signaling",
  "Updating longitudinal context inside the Vault",
];

const REGIONS = ["us-west", "ap-south", "eu-central", "us-east"];
const STATUSES = [
  { label: "running", color: "#4ade80" },
  { label: "running", color: "#4ade80" },
  { label: "queued", color: "#facc15" },
  { label: "complete", color: "#60a5fa" },
];

type AgentRow = {
  id: string;
  name: string;
  task: string;
  region: string;
  status: (typeof STATUSES)[number];
  progress: number;
  key: number;
};

const INITIAL_ROWS: AgentRow[] = [
  {
    id: "4MC4SN",
    name: "psychedelics-6b3e",
    task: "Preparing integration notes from prior psychedelic session",
    region: "us-west",
    status: STATUSES[0],
    progress: 44,
    key: 0,
  },
  {
    id: "56ECJM",
    name: "nutrition-5a3d",
    task: "Preparing integration notes from prior psychedelic session",
    region: "ap-south",
    status: STATUSES[0],
    progress: 52,
    key: 1,
  },
  {
    id: "46M5NM",
    name: "psychedelics-6b3e",
    task: "Reviewing supplement stack for interaction risk",
    region: "eu-central",
    status: STATUSES[3],
    progress: 99,
    key: 2,
  },
  {
    id: "BDAA4U",
    name: "generalist-9d4e",
    task: "Mapping biomarker drift across four lab panels",
    region: "us-east",
    status: STATUSES[2],
    progress: 22,
    key: 3,
  },
  {
    id: "WW2SRG",
    name: "hypothesis-4f2c",
    task: "Reviewing supplement stack for interaction risk",
    region: "eu-central",
    status: STATUSES[1],
    progress: 68,
    key: 4,
  },
  {
    id: "9ZCJUU",
    name: "hypothesis-4f2c",
    task: "Comparing protocol note against current bloodwork",
    region: "eu-central",
    status: STATUSES[0],
    progress: 61,
    key: 5,
  },
];

function randomRow(key: number): AgentRow {
  const name = AGENT_NAMES[Math.floor(Math.random() * AGENT_NAMES.length)];
  const task = TASKS[Math.floor(Math.random() * TASKS.length)];
  const region = REGIONS[Math.floor(Math.random() * REGIONS.length)];
  const status = STATUSES[Math.floor(Math.random() * STATUSES.length)];
  const progress = status.label === "complete" ? 99 : Math.floor(Math.random() * 70 + 20);

  return {
    id: Math.random().toString(36).slice(2, 8).toUpperCase(),
    name,
    task,
    region,
    status,
    progress,
    key,
  };
}

function ProgressBar({ initial }: { initial: number }) {
  const [percent, setPercent] = useState(initial);
  const percentRef = useRef(initial);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      percentRef.current = Math.min(99, percentRef.current + 0.015);
      setPercent(Math.round(percentRef.current));
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div style={{ width: "100%", height: 2, background: "rgba(0,0,0,0.08)", borderRadius: 999 }}>
      <div
        style={{
          height: "100%",
          width: `${percent}%`,
          borderRadius: 999,
          background: "rgba(0,0,0,0.34)",
          transition: "width 0.5s linear",
        }}
      />
    </div>
  );
}

export function LiveAgentFeed() {
  const [rows, setRows] = useState<AgentRow[]>(INITIAL_ROWS);
  const keyRef = useRef(100);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      keyRef.current += 1;
      setRows((previous) => [...previous.slice(1), randomRow(keyRef.current)]);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden rounded-[22px] border border-black/[0.08] bg-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-md">
      <div className="grid grid-cols-[92px_minmax(0,1fr)_72px_68px] border-b border-black/[0.06] bg-black/[0.03] px-4 py-3 md:grid-cols-[104px_minmax(0,1fr)_88px_80px] md:px-6">
        {["AGENT", "TASK", "REGION", "STATUS"].map((heading) => (
          <span key={heading} className="text-[9px] tracking-[0.24em] text-black/30">
            {heading}
          </span>
        ))}
      </div>

      <div className="overflow-hidden">
        {rows.map((row, index) => (
          <div
            key={row.key}
            className="grid grid-cols-[92px_minmax(0,1fr)_72px_68px] items-center gap-2 border-b border-black/[0.04] px-4 py-4 last:border-b-0 md:grid-cols-[104px_minmax(0,1fr)_88px_80px] md:px-6"
            style={{
              animation: index === rows.length - 1 ? "rowSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both" : "none",
            }}
          >
            <div className="min-w-0">
              <div className="truncate font-mono text-[10px] text-black/70 md:text-[11px]">{row.name}</div>
              <div className="mt-1 font-mono text-[9px] text-black/25">#{row.id}</div>
            </div>

            <div className="min-w-0">
              <div className="mb-2 line-clamp-2 text-[10px] leading-[1.35] text-black/50 md:truncate md:text-[12px]">{row.task}</div>
              <ProgressBar initial={row.progress} />
            </div>

            <div className="font-mono text-[9px] text-black/30 md:text-[10px]">{row.region}</div>

            <div className="flex items-center gap-2">
              <span
                className="h-[6px] w-[6px] rounded-full"
                style={{
                  background: row.status.color,
                  boxShadow: row.status.label === "running" ? `0 0 8px ${row.status.color}` : "none",
                  animation: row.status.label === "running" ? "statusPulse 2s ease-in-out infinite" : "none",
                }}
              />
              <span className="font-mono text-[9px] text-black/35 md:text-[10px]">{row.status.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LiveAgentCounter() {
  const [count, setCount] = useState(3840);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCount((value) => value + Math.floor(Math.random() * 3 - 1));
    }, 1200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <span className="text-[clamp(2.35rem,4vw,3.85rem)] font-light leading-none tracking-[-0.04em] text-black/85">
      {count.toLocaleString("en-US")}
    </span>
  );
}
