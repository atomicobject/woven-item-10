# How Might We Questions

**Project:** Woven Item 10 — Requirements Engineering Tooling  
**Date:** 2026-03-06  
**Sources:** Discovery interviews with Julia Pralle, Hannah Lane, Nick Carcione, Andrea Zotelli; multi-interview synthesis; stakeholder personas; journey maps

---

## Purpose

These "How Might We" (HMW) questions are derived from synthesis across all discovery interviews and artifacts. They are intended to frame the problem space for solution ideation — specific enough to be actionable, broad enough to allow creative responses. They are organized by theme, roughly ordered from highest to lowest severity based on research findings.

---

## Silent Upstream Changes

> *"They actually listened, but they didn't tell me. I thought I was shouting into a void, and they ended up changing everything without letting me know."* — Hannah Lane

The single most universally confirmed pain point: CA modifies source requirements in Git and Google Docs without notifying Julia's team. Practitioners discover changes by accident, often after weeks of work on the prior version.

- **HMW** make practitioners the first to know when a source requirement changes, rather than the last?
- **HMW** give Hannah, Nick, and Julia confidence that what they've ingested today will still be current tomorrow?
- **HMW** surface the *delta* between requirement versions so practitioners don't have to re-read the whole document to find what changed?
- **HMW** transform requirement change detection from a quarterly manual audit into a continuous, automated alert?

---

## Multi-System Fragmentation

> *"At this point I'm on the third website: I have the PRD document, the URD spreadsheet, and now this site that hosts all the SWRDs."* — Nick Carcione (during screen share)

Requirements for different capabilities live across Git repos, Google Docs, Google Sheets, Confluence, and JAMA. Upstream teams have no intention of consolidating. Practitioners navigate 3–4 systems per individual requirement.

- **HMW** let practitioners review everything they need about a single SWRD without opening three separate websites?
- **HMW** make JAMA feel like "the one place to go" even when source documents live in Git, Google Docs, and Confluence?
- **HMW** reduce the cognitive overhead of navigating between PRD → URD → SWRD on a per-requirement basis?
- **HMW** create a stable intake record that still reflects the reality of fragmented upstream systems?

---

## Manual Ingestion at Scale

> *"I just had to do this 700 times."* — Hannah Lane (on SWQT generation)

The entire SWRD intake pipeline — reading source documents, copying them verbatim into JAMA, running LLM prompts for SWQTs, entering output into JAMA — is fully manual. LLMs have absorbed much of the cognitive work, but the orchestration is entirely clipboard loops at a scale of ~600 SWRDs and ~7,000 test cases per quarter for a single capability group.

- **HMW** help Hannah ingest 700 requirements without doing 700 copy-paste cycles?
- **HMW** automate the mechanical parts of SWRD intake — fetching, copying verbatim, logging a version and permalink — so practitioners can focus on the judgment calls?
- **HMW** make "getting it all into JAMA" a background process rather than a quarterly sprint?
- **HMW** preserve the legal/contractual integrity of verbatim ingestion while eliminating manual effort?

---

## Legacy & ML-Incompatible Requirements

> *"It's time-consuming to read through a requirement and spend the effort trying to understand what it's doing, only to realize it's not something we even want to pursue."* — Nick Carcione

A significant share of SWRDs originate from Toyota's legacy TSS-4 rules-based system and prescribe specific numerical thresholds, timing windows, and boolean logic that is incompatible with Woven's ML approach. Practitioners invest full review cycles before discovering a requirement is inapplicable.

- **HMW** help Nick and Hannah quickly identify "rules-based rejects" before they invest time reading them in full?
- **HMW** make the triage decision (ML-applicable vs. legacy/prescriptive) faster and more consistent across the team?
- **HMW** flag requirements that prescribe specific thresholds, timing windows, or boolean logic as likely inapplicable — before they enter the review queue?
- **HMW** give practitioners a way to formally reject a requirement, with a reason code, rather than silently skipping it?

---

## Feedback, Rejection & Change Management

> *"If we want to change something, there's no real process for developers or my team to say, hey, this requirement needs to be written differently."* — Julia Pralle

When a requirement is incomplete, contradictory, or inapplicable, the only recourse is a Slack message or a document comment. There is no formal channel, no acknowledgment mechanism, and no way to confirm whether feedback was ever received or acted on.

- **HMW** ensure that when Hannah flags a bad requirement, she knows whether anyone heard her?
- **HMW** create a lightweight channel for practitioners to flag incomplete, contradictory, or inapplicable requirements — without requiring a full change board meeting?
- **HMW** give Julia the evidence trail she needs to explain delays to leadership, even when those delays were caused upstream?
- **HMW** make "requirement rejected" a visible, auditable event rather than a silent omission?

---

## Traceability & Accountability

> *"We're responsible to deliver, in the end, the overall pass rate, the implementation of measuring it, plus passing it. But we're not defining any of it."* — Julia Pralle

Julia's team is accountable for the TMC traceability report — requirement → test case → unit test → pass/fail — but has no voice in setting quarterly scope. The gap between what's been ingested and what's passing is currently invisible to leadership.

- **HMW** help Julia produce the TMC traceability report without manually assembling it from three separate tools?
- **HMW** make the gap between "requirements in JAMA" and "passing test cases in Git" visible to leadership in real time?
- **HMW** turn Hannah's "zero out of 7,000 passing" into a live dashboard that drives action rather than a stat she has to go looking for?
- **HMW** give practitioners credit for the upstream blockers they're absorbing — so accountability matches actual responsibility?

---

## Bottom-Up / Reverse-Engineering

> *"I wanted to have the information. That's the hardest part... a source, one source where I could go and see what I need to write about."* — Andrea Zotelli

Andrea works the inverse direction from Hannah and Nick: reverse-engineering component-level requirements from already-deployed software that has no formal documentation. She has no master list of what needs to be documented, no reliable source map, and TBD parameters that even the original authors can't resolve.

- **HMW** give Andrea a finite, prioritized list of what needs to be documented — so she knows when she's done?
- **HMW** help her discover what source documentation exists for a component before she starts searching blind?
- **HMW** surface TBD parameters as trackable items with owners, rather than buried strings in documents?
- **HMW** make it easier for developers to resolve TBDs without requiring synchronous meetings across a 9-hour time zone gap?
- **HMW** design tooling that works equally well for requirements that come *before* code and requirements that describe code that *already exists*?

---

## Knowledge Distribution & Team Resilience

> *"It's not 2019 anymore."* — Hannah Lane

Nick uses Hannah's LLM prompt. Andrea asks Hannah for document pointers when she hits walls. Hannah is the de facto process lead for a workflow with no documented playbook. Her personal optimizations — her prompt, her version-checking habits, her JAMA structure — are not formalized anywhere.

- **HMW** capture Hannah's LLM prompt, JAMA structure, and quality heuristics so the whole team can use them — not just Hannah?
- **HMW** ensure Nick can triage a SWRD with the same confidence as Hannah, even without her guidance?
- **HMW** make the team's intake playbook legible to someone who joins mid-quarter?
- **HMW** reduce the team's dependency on any single person's knowledge of where documents live and how to navigate them?

---

## Developer Culture & Adoption

> *"I think we would be building software faster and more efficiently if we had the requirements to begin with."* — Andrea Zotelli

Development teams are under pressure to ship quickly and view requirements documentation as overhead. Developers currently bypass the formal process by going directly to CA because the formal channel is too slow. Any additional friction for developers will face resistance.

- **HMW** make the requirements process feel like it reduces developer burden rather than adding to it?
- **HMW** keep developers out of Andrea's way — so they get fewer clarification requests, not more?
- **HMW** design tooling that is developer-invisible but still produces the formal documentation Julia's team needs?

---

## Priority Reference

Severity ratings drawn from multi-interview synthesis and cross-participant frequency:

| Cluster | Severity | Participants Affected |
|---|---|---|
| Silent Upstream Changes | Critical | Julia, Hannah, Nick, Andrea |
| Manual Ingestion at Scale | Critical | Hannah, Nick |
| Multi-System Fragmentation | Critical | Julia, Hannah, Nick, Andrea |
| Feedback & Rejection Workflow | High | Julia, Hannah, Nick, Andrea |
| Traceability & Accountability | High | Julia, Hannah |
| Legacy / ML-Incompatible Requirements | High | Hannah, Nick, Julia |
| Bottom-Up / Reverse-Engineering | Medium | Andrea |
| Knowledge Distribution | Medium | Nick, Andrea, (Julia) |
| Developer Culture & Adoption | Medium | Andrea, (Julia) |
