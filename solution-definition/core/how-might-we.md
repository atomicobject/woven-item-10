# How Might We Questions

**Project:** Woven Item 10 — Requirements Engineering Tooling  
**Date:** 2026-03-06  
**Sources:** Discovery interviews with Julia Pralle, Hannah Lane, Nick Carcione, Andrea Zotelli; multi-interview synthesis; stakeholder personas; journey maps

---

## Purpose

These "How Might We" (HMW) questions are derived from synthesis across all discovery interviews and artifacts. They are intended to frame the problem space for solution ideation — specific enough to be actionable, broad enough to allow creative responses.

**Prioritization criteria:**
- **Breadth** — how many participants confirmed and felt this pain
- **Severity** — how much this blocks delivery, creates rework, or erodes trust
- **Downstream impact** — whether solving this unlocks other problems or is a root cause

---

## Priority Summary

| # | Cluster | Tier | Participants |
|---|---|---|---|
| 1 | Silent Upstream Changes | 🔴 Critical | Julia, Hannah, Nick, Andrea |
| 2 | Manual Ingestion at Scale | 🔴 Critical | Hannah, Nick |
| 3 | Multi-System Fragmentation | 🔴 Critical | Julia, Hannah, Nick, Andrea |
| 4 | Feedback, Rejection & Change Management | 🟠 High | Julia, Hannah, Nick, Andrea |
| 5 | Traceability & Accountability | 🟠 High | Julia, Hannah |
| 6 | Legacy / ML-Incompatible Requirements | 🟠 High | Hannah, Nick, Julia |
| 7 | Bottom-Up / Reverse-Engineering | 🟡 Medium | Andrea |
| 8 | Knowledge Distribution & Team Resilience | 🟡 Medium | Nick, Andrea, Julia |
| 9 | Developer Culture & Adoption | 🟡 Medium | Andrea, Julia |

---

---

# 🔴 Critical

Problems confirmed across most or all participants, creating cascading downstream failures. Solving these is a prerequisite for everything else — they are root causes, not symptoms.

---

## 1. Silent Upstream Changes

> *"They actually listened, but they didn't tell me. I thought I was shouting into a void, and they ended up changing everything without letting me know."* — Hannah Lane

> *"There's no notification mechanism. I've received a specific version of a requirement, and I have no way of knowing if a new version has been released."* — Nick Carcione

The single most universally confirmed pain point across all four participants. CA modifies source requirements in Git and Google Docs without notifying Julia's team. Practitioners discover changes by accident — often after weeks of work on the prior version. The PDM layer is nominally responsible for tracking this, but manually checking hundreds of links per quarter is acknowledged as unrealistic at volume.

**Why this is #1:** It cascades into missed deadlines, invalidated test cases, and an inability for Julia to explain delays to leadership. Every other problem is made worse when the ground shifts without warning.

- **HMW** make practitioners the first to know when a source requirement changes, rather than the last?
- **HMW** give Hannah, Nick, and Julia confidence that what they've ingested today will still be current tomorrow?
- **HMW** surface the *delta* between requirement versions so practitioners don't have to re-read the whole document to find what changed?
- **HMW** transform requirement change detection from a quarterly manual audit into a continuous, automated alert?

---

## 2. Manual Ingestion at Scale

> *"I just had to do this 700 times."* — Hannah Lane (on SWQT generation)

> *"If that could be automated, it would save an enormous amount of time."* — Hannah Lane

The entire SWRD intake pipeline — reading source documents, copying them verbatim into JAMA, running LLM prompts for SWQTs, entering output into JAMA — is fully manual. LLMs have absorbed most of the cognitive work (~90% accuracy), but the orchestration is entirely clipboard loops at a scale of ~600 SWRDs and ~7,000 test cases per quarter for a single capability group. The JAMA Connect Python REST API exists but has never been used.

**Why this is #2:** The volume makes human error and inconsistency inevitable, and it consumes time that practitioners should spend on judgment — triage, applicability review, and developer alignment.

- **HMW** help Hannah ingest 700 requirements without doing 700 copy-paste cycles?
- **HMW** automate the mechanical parts of SWRD intake — fetching, copying verbatim, logging a version and permalink — so practitioners can focus on the judgment calls?
- **HMW** make "getting it all into JAMA" a background process rather than a quarterly sprint?
- **HMW** preserve the legal/contractual integrity of verbatim ingestion while eliminating manual effort?
- **HMW** close the loop between LLM-generated SWQT output and JAMA — without a human clipboard in the middle?

---

## 3. Multi-System Fragmentation

> *"At this point I'm on the third website: I have the PRD document, the URD spreadsheet, and now this site that hosts all the SWRDs."* — Nick Carcione (during screen share)

> *"The information is scattered, like, it's everywhere... many times you get a spreadsheet that has a lot of links to tons of other documents, and oh my goodness, it's so confusing."* — Andrea Zotelli

Requirements for different capabilities live across Git repos, Google Docs, Google Sheets, Confluence, and JAMA. Upstream teams have stated they will not consolidate. Practitioners currently navigate 3–4 systems per individual requirement.

**Why this is #3:** It multiplies the cost of every other task — triage, ingestion, change detection — and creates a situation where "the one place to go" simply does not exist. Julia's minimum viable improvement was stated as: *"just one document I have to go to."*

- **HMW** let practitioners review everything they need about a single SWRD without opening three separate websites?
- **HMW** make JAMA feel like "the one place to go" even when source documents live in Git, Google Docs, and Confluence?
- **HMW** reduce the cognitive overhead of navigating between PRD → URD → SWRD on a per-requirement basis?
- **HMW** create a stable intake record that still reflects the reality of fragmented upstream systems?

---

---

# 🟠 High

Problems with significant delivery or compliance impact, felt strongly by key stakeholders — but either narrower in scope or partially dependent on solving Critical problems first.

---

## 4. Feedback, Rejection & Change Management

> *"If we want to change something, there's no real process for developers or my team to say, hey, this requirement needs to be written differently."* — Julia Pralle

> *"My feedback to the PDM team is: 'I don't get it. Please finish it.' What happened six months ago when I raised this was — they actually listened, but they didn't tell me."* — Hannah Lane

When a requirement is incomplete, contradictory, or inapplicable, the only recourse is a Slack message or a document comment. There is no formal channel, no acknowledgment mechanism, no way to confirm whether feedback was ever received or acted on. Rejection is currently invisible — practitioners either skip requirements silently or leave comments in source docs that may go unread for months.

- **HMW** ensure that when Hannah flags a bad requirement, she knows whether anyone heard her?
- **HMW** create a lightweight channel for practitioners to flag incomplete, contradictory, or inapplicable requirements — without requiring a full change board meeting?
- **HMW** give Julia the evidence trail she needs to explain delays to leadership, even when those delays were caused upstream?
- **HMW** make "requirement rejected" a visible, auditable event rather than a silent omission?
- **HMW** route a rejected requirement back to the right person — PDM, product, or CA — without Julia having to manually chase it?

---

## 5. Traceability & Accountability

> *"We're responsible to deliver, in the end, the overall pass rate, the implementation of measuring it, plus passing it. But we're not defining any of it."* — Julia Pralle

> *"If I can pull up JAMA and show 'zero out of 7,000 test cases passing,' that drives urgency much faster."* — Hannah Lane

Julia's team is accountable for the TMC traceability report — requirement → test case → unit test → pass/fail — but has no voice in setting quarterly scope and no automated way to produce the report. The compliance pressure is real and non-negotiable: a ~2028–2029 production vehicle target creates hard regulatory and liability requirements for formal documentation.

- **HMW** help Julia produce the TMC traceability report without manually assembling it from three separate tools?
- **HMW** make the gap between "requirements in JAMA" and "passing test cases in Git" visible to leadership in real time?
- **HMW** give practitioners credit for the upstream blockers they're absorbing — so accountability matches actual responsibility?
- **HMW** make traceability completeness something anyone can see, not something Julia has to go looking for and manually assemble each quarter?

---

## 6. Legacy & ML-Incompatible Requirements

> *"It's time-consuming to read through a requirement and spend the effort trying to understand what it's doing, only to realize it's not something we even want to pursue."* — Nick Carcione

> *"Having overly prescriptive requirements from a rules-based system is very limiting for an ML approach."* — Hannah Lane

A significant share of SWRDs originate from Toyota's legacy TSS-4 rules-based system and prescribe specific numerical thresholds, timing windows, and boolean logic incompatible with Woven's ML approach. Practitioners invest full review cycles before discovering inapplicability. Nick articulated a clear, potentially automatable heuristic: requirements that prescribe specific acceleration bounds, timing windows, or boolean thresholds are likely legacy rejects.

- **HMW** help Nick and Hannah identify "rules-based rejects" before they invest time reading them in full?
- **HMW** make the ML-applicable vs. legacy/prescriptive triage decision faster and more consistent across the team?
- **HMW** flag requirements that prescribe specific thresholds, timing windows, or boolean logic as likely inapplicable — automatically, before they enter the review queue?
- **HMW** formalize the triage heuristic Nick uses mentally into something the whole team can apply consistently?

---

---

# 🟡 Medium

Real, confirmed pain — but narrower in scope, limited to specific participants, or partially addressable through process rather than tooling.

---

## 7. Bottom-Up / Reverse-Engineering

> *"I wanted to have the information. That's the hardest part... a source, one source where I could go and see what I need to write about."* — Andrea Zotelli

> *"If any issue happened on the street, like an accident, the first thing investigators ask is: where are the requirements?"* — Andrea Zotelli

Andrea works the inverse of Hannah and Nick: reverse-engineering component-level requirements from already-deployed software with no formal documentation. She has no master list of what needs to be documented, no reliable source map, and TBD parameters that even the original authors cannot resolve. This workflow inverts every assumption conventional requirements tooling makes — any tool that assumes requirements precede code will fail her entirely.

- **HMW** give Andrea a finite, prioritized list of what needs to be documented — so she knows when she's done?
- **HMW** help her discover what source documentation exists for a component before she starts searching blind?
- **HMW** surface TBD parameters as trackable items with owners, rather than buried strings in documents?
- **HMW** make it easier for developers to resolve TBDs without requiring synchronous meetings across a 9-hour time zone gap?
- **HMW** design tooling that works equally well for requirements that come *before* code and requirements that describe code that *already exists*?

---

## 8. Knowledge Distribution & Team Resilience

> *"It's not 2019 anymore."* — Hannah Lane

Nick uses Hannah's LLM prompt. Andrea asks Hannah for document pointers when she hits walls. Hannah is the de facto process lead for a workflow with no documented playbook. Her personal optimizations — her prompt, her version-checking habits, her JAMA structure conventions — are not formalized anywhere. The team cannot scale or onboard new members without passing through Hannah.

- **HMW** capture Hannah's LLM prompt, JAMA structure, and quality heuristics so the whole team can use them — not just Hannah?
- **HMW** ensure Nick can triage a SWRD with the same confidence as Hannah, even without her guidance?
- **HMW** make the team's intake playbook legible to someone who joins mid-quarter?
- **HMW** reduce the team's dependency on any single person's knowledge of where documents live and how to navigate them?

---

## 9. Developer Culture & Adoption

> *"I think we would be building software faster and more efficiently if we had the requirements to begin with."* — Andrea Zotelli

Development teams are under pressure to ship quickly and view requirements documentation as overhead that slows them down. Developers currently bypass the formal process by going directly to CA because the formal channel is too slow. Any additional friction for developers will face resistance; the ideal tool is either developer-invisible or reduces their workload.

- **HMW** make the requirements process feel like it reduces developer burden rather than adding to it?
- **HMW** keep developers out of Andrea's way — so they get fewer clarification requests, not more?
- **HMW** design tooling that is developer-invisible but still produces the formal documentation Julia's team needs?
- **HMW** give developers a faster path through the formal requirements channel, so they stop going around it?
