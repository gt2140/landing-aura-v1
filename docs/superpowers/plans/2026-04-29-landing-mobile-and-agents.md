# Landing Mobile And Agents Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tighten the landing page for mobile, shorten the agents section, and stop the orchestration demo from shifting page scroll while preserving the existing landing and dashboard-link behavior.

**Architecture:** Keep the change isolated to the existing landing components. Use CSS/layout adjustments for the hero, trim the visible agents list without changing the source content model, and gate the orchestration animation on viewport visibility so off-screen typing cannot reflow the page.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS

---

### Task 1: Mobile Hero Compaction

**Files:**
- Modify: `components/landing/hero-section.tsx`

- [ ] Reduce mobile-only spacing, background scale, and text sizes while preserving desktop layout.
- [ ] Keep the existing CTA structure and copy unchanged.

### Task 2: Shorter Agents Section

**Files:**
- Modify: `components/landing/agents-section.tsx`
- Modify: `components/landing/stacking-agent-cards.tsx`

- [ ] Limit the rendered specialized agent cards to four entries.
- [ ] Add a short login CTA below the cards so users can explore the rest inside the app.

### Task 3: Stable Orchestration Demo

**Files:**
- Modify: `components/landing/orchestration-section.tsx`

- [ ] Run the typing sequence only while the demo is visible in the viewport.
- [ ] Give the demo body a stable minimum height so message growth does not push the rest of the landing around.

### Task 4: Verification And Release

**Files:**
- Review: `components/landing/hero-section.tsx`
- Review: `components/landing/agents-section.tsx`
- Review: `components/landing/stacking-agent-cards.tsx`
- Review: `components/landing/orchestration-section.tsx`

- [ ] Run the landing build as the verification gate.
- [ ] Review the diff and commit only the intended landing updates.
