# Woven Requirements Automation
**Product Requirements Document · 2026-03-09**

**Team:** Dan Maser, Gus Schissler, Nathan Papes
**Status:** In Progress
**Pilot Scope:** Lane Change SWRDs → JAMA
**Sources:** 16 stakeholder interviews & sessions

---

## The Problem

> Requirements arrive scattered, change without warning, and are consolidated entirely by hand.

---

### 03 — Two Requirements Problems at Woven

**Bottom-Up (Internal)**
Autonomous driving software was written before formal requirements were established. Knowledge is tribal and scattered inside Woven.
*Lower priority — internal to Woven, more available solutions.*

**Top-Down ← Our Focus**
Requirements flowing from Toyota via the CA liaison team into Woven are scattered across tools, poorly structured, and change without any notification reaching the right teams.
*Externally constrained, harder to solve. Confirmed priority by Julia Pralle.*

---

### 04 — Where Requirements Live Today

No single source of truth. No centralized visibility.

| Source | State |
|---|---|
| **Git Repositories** | SWRDs as markdown/YAML. Primary source for Lane Change. Not directly surfaced — accessed via PDM docs. |
| **JAMA** | Requirements management platform. Ground truth — but populated manually by copy-paste from Git. |
| **Google Docs** | PRD and URD documents from CA/PDM team. Nick reviews these daily alongside Git files. |
| **Confluence** | Additional documentation. No systematic connection to JAMA or change tracking. |
| **Spreadsheets** | URD spreadsheets from CA. Japanese + English descriptions — used for context only. |
| **Tribal Knowledge** | TBDs only resolvable by developers — who often don't know the answer either. |

---

### 05 — The Manual Burden

| | |
|---|---|
| **600+** | Lane change SWRDs managed manually by Hannah |
| **Weeks** | To document each component (e.g. Lane Change) — could be reduced to days |
| **0** | Automated notifications when Toyota updates requirements mid-quarter |
| **~90%** | LLM test case effectiveness — but still requires full manual curation |

---

### 06 — User Research

> "All I do is **copy things into JAMA**."
>
> — Hannah Lane, Systems & Validation Engineer, Woven

*Hyperbole — but telling. Said unprompted, before the interview even began.*

---

## Who's Affected

> Four personas. One broken pipeline.

---

### 08 — The People We're Building For

**Hannah Lane** — Systems & Validation Engineer, Lane Change
Primary user with the most acute pain. Manages 600+ lane change SWRDs, manually copying them into JAMA and tracking versions by hand. Uses Wovey (LLM) for test case drafting at ~90% effectiveness.
- Opens PRD → URD → Git docs → manually creates JAMA entry
- Tracks changes by maintaining version numbers in JAMA entries
- No automated alert when Toyota updates requirements mid-quarter

**Nick Carcione** — Systems V&V Engineer, In-Lane
Reviews SWRDs from three sources to assess usability. Rejects overly prescriptive requirements and feeds back to product/CA teams.
- Many SWRDs written for rules-based TSS-4, not Woven's ML approach
- No way to pre-filter TBD-heavy or low-quality SWRDs before review
- Relies entirely on manual change detection

**Andrea Zotelli** — SV&V Manager, Product Delivery
Reverse-engineering requirements from existing code. Struggling with scattered sources, Japan timezone barriers, and tribal knowledge gaps. Targeting production by early 2029.
- Asks developers to resolve TBDs — often they don't know either
- Searches Confluence, GitHub, Google Docs separately for every component

**Julia Pralle** — SV&V Manager, Product Management
Manages the overall requirements flow. Implementing a formal approval phase and Change Requirement Board (CRB) for mid-quarter changes. Confirmed top-down intake as the priority.
- Requirements change "every single day" mid-quarter
- Needs intake progress visibility across capability groups
- CRB process needs automated change data to function

---

### 09 — What the System Must Accomplish

| Job | Description |
|---|---|
| **Intake & Consolidation** | Gather requirements from scattered sources and structure them into JAMA with full context and version tracking. |
| **Change Detection & Notification** | Detect when Toyota updates requirements and alert systems engineers before the impact is missed. |
| **Test Case Generation** | Auto-generate SWQT structure from approved requirements using LLM, reducing manual drafting from hours to minutes. |
| **Requirement Filtering** *(Phase 2)* | Surface problematic SWRDs (TBDs, over-prescriptive, legacy TSS-4) to reduce wasted review time upstream. |
| **Visibility & Traceability** *(Phase 2)* | Trace requirements → test cases → implementation. Understand coverage and the blast radius of any change. |
| **Multi-Source** *(Phase 2+)* | Other capability groups, non-Git sources, SBRD handling. Deferred until pilot success is demonstrated. |

---

## The Solution

> Automate the pipeline from Git-based SWRDs into structured JAMA entries — with change detection and gated test case generation.

---

### 11 — The Opportunity

> "A year ago it got me about **70%** of the way there. Now I'd say it gets me about **90%**."
>
> — Hannah Lane, on LLM-assisted test case generation via Wovey

---

### 12 — AI Awareness ≠ AI Adoption

The tooling exists — but informal, person-to-person. The solution can change that.

**Hannah — Fully Integrated**
Built her own Wovey prompt for SWQT generation. Uses it on every requirement. Getting ~90% of the way there — then manually curates the rest.
> "I didn't type all of this by hand. It's not 2019 anymore."

**Nick — Aware, Not Adopted**
Knows the tool exists because a teammate built it. Would use *Hannah's* prompt — doesn't have his own workflow. Still in review phase; hasn't generated a test case yet.
> "I know that one of my teammates had written a prompt in Wovey."

**The implication:** AI-assisted requirements work is spreading person-to-person, not systematically. A built-in LLM pipeline removes the adoption barrier — every user gets the same capability automatically, not just those who know Hannah.

---

### 13 — What We Can't Change

| Constraint | Detail |
|---|---|
| **CA Authorship Is Out of Scope** | Hannah and Nick can highlight issues with incoming requirements, but cannot fix them at the source. The quality of what CA writes is outside Woven's control. |
| **Quarterly Release Cadence** | Requirements lock per quarter. Mid-quarter changes go through the emerging CRB (Change Requirement Board) process. |
| **Teams Won't Move Their Docs** | Established practices exist for where requirements live. The solution must work with existing sources, not ideal organization. |
| **Intake Only — Not Authorship** | The tool structures what Toyota and CA have already written. It does not generate, author, or invent requirements. |
| **Process Still Being Defined** | Woven is implementing the CRB process now. The target workflow is not yet stable — but that's an opportunity to shape it. |

---

### 14 — Core Functionality

Two subsystems: the basic SWRD-to-JAMA intake flow, and a monitor that keeps requirements current when Toyota changes them.

**SWRD → JAMA Pipeline**

`Fetch Raw SWRD Data` → `Generate Requirements` → `Generate Test Case(s)`

- **Fetch Raw SWRD Data** — Pull from Git by paste, link, or automated polling.
- **Generate Requirements** — LLM structures raw SWRD text into plain-English JAMA-ready entries.
- **Generate Test Case(s)** — Once approved, auto-draft SWQT candidates for human review and JAMA submission.

**Requirements Monitor**

`Poll Git for Changes` → `Diff Old vs. New` → `Alert the Team`

- **Poll Git for Changes** — Job watches SWRD files against the last-processed version.
- **Diff Old vs. New** — Identifies what changed at section level — interface, specification, or reason.
- **Alert the Team** — Digest to Hannah & engineers — which SWRDs changed, what changed, link to diff.

---

### 15 — Input–Output Map

*[SVG diagram — core path: how a requirement moves from SWRD into JAMA]*

Three swimlanes: User Input → Tooling → Output Destination.
- User provides input via paste link or direct paste
- Git Access gate unlocks fetching
- Requirement Fetcher → Requirements Generator → Test Generator
- Requirements Monitor handles change detection
- Output: copy-paste into JAMA (always available) or auto-post via JAMA API (with access)

---

### 16 — Input–Output Map — With Add-ons

*[SVG diagram — the full vision]*

The full vision — additional capabilities unlocked as access and trust are established. Dashed nodes are ideal iterations.

Adds to the core map:
- **PRD Fetcher** *(dashed — ideal)* — Batch import via Google Doc link
- **Requirement Quality Identifier** *(dashed — ideal)* — Flags poor data before review
- **Multiple Test Case Suggestion** *(dashed — ideal)* — Suggests ideal test case count per SWRD

---

### 17 — Access Unlocks Automation

Every input and output path has a minimum viable baseline — no access needed to start. Additional access expands what the tool can do automatically.

**Input — How requirements enter the tool**

| Tier | Requirement | Description |
|---|---|---|
| ✓ Guaranteed | None | **Paste Raw Text** — User pastes SWRD text directly into the tool. Works on day one. |
| Enhancement | GitHub Access | **Paste a Link** — User pastes a GitHub or doc URL. Tool fetches content automatically. |
| Enhancement | GitHub + PRD Access | **Batch Import via PRD** — Tool reads the PRD, discovers all linked SWRDs, and imports them in bulk. |

**Output — How results reach JAMA**

| Tier | Requirement | Description |
|---|---|---|
| ✓ Guaranteed | None | **Manual Copy from Tool** — User reviews generated content and pastes into JAMA manually. |
| Enhancement | JAMA API Access | **Auto-Post via API** — Tool writes directly to JAMA using the existing Python REST client. |

> **Key principle:** The paste-text → manual-copy path is useful immediately, with zero access dependencies. Every layer of access we obtain makes it faster and more automatic — but it's never blocked.

---

### 18 — How It Works

1. **Provide Input** — User opens tool and provides SWRD — paste text, paste a link, or batch import via PRD
2. **Parse & Translate** — Tool structures the raw SWRD and converts it to plain English simultaneously — no separate step
3. **Review & Curate** — User reviews the output, flags issues, and approves or edits before anything is written
4. **Submit Requirement to JAMA** — Approved SWRD entry goes into JAMA — manually or via API — with source link and version timestamp
5. **Generate Test Cases** — After CA/product approval, LLM generates SWQT candidates — user reviews and curates
6. **Submit Test Case to JAMA** — Curated SWQT is written to JAMA linked to its parent SWRD — completing the traceability chain

> **Build philosophy — Read-Only First:** The system starts by reading and surfacing — change detection, notifications, translations — before it ever writes anything to JAMA. Humans validate before automation takes over. Test case generation is gated by upstream CA/product sign-off; the tool never creates tests for SWRDs that haven't been approved. This sequencing builds trust before it builds dependency.

---

### 19 — What the Tool Looks Like

A three-column view — requirement in, plain English in the middle, test case draft on the right. One click to send to JAMA.

```
┌─────────────────┬──────────────────┬──────────────────┐
│   Raw SWRD      │  Plain English   │   SWQT Draft     │
├─────────────────┼──────────────────┼──────────────────┤
│ ## SWRD-0142    │ When the vehicle │ TC-001           │
│ ### Reason      │ detects a lane   │ Verify system    │
│ Lane changes    │ change via CAN   │ response ≤ 100ms │
│ must be         │ bus, it must     │                  │
│ detected...     │ react in under   │ TC-002           │
│ ### Interface   │ 100 ms.          │ Verify both      │
│ CAN bus signal  │                  │ active and       │
│ ID 0x3A2...     │                  │ passive modes    │
│ ### Spec        │                  │ respond to       │
│ The system      │                  │ signal 0x3A2     │
│ shall respond   │                  │                  │
│ within 100ms... │                  │                  │
└─────────────────┴──────────────────┴──────────────────┘
                          [ Send to JAMA ↑ ]
```

---

## Next Steps

> Resolve infrastructure unknowns first. Then build the sandbox POC.

---

### 21 — What's In and What's Out

**✓ In Scope (Pilot)**
- Lane change SWRDs from Git repository
- Automated SWRD extraction and JAMA population
- Change detection via polling (daily cadence)
- Change notification to Hannah and systems engineers
- Gated test case (SWQT) generation via LLM
- JAMA source linkage and version history
- Sandbox POC with mock data before production integration

**✗ Out of Scope (Pilot)**
- SBRDs and TPIDs (separate workflow)
- Multi-source consolidation beyond Git
- SWRD quality filtering or upstream prioritization
- Scope translation: system-of-systems → IPA
- Integration with CA/Toyota upstream systems
- Architecture diagram generation (separate PRD)
- Bottom-up requirements backfilling from existing code

---

### 22 — Must Answer Before Building

| Question | Status |
|---|---|
| **Source integration layer:** Can we access Git repositories directly for SWRDs, or must we go through Woven's documentation layer (PRD Google Docs from PDM team)? | 🔴 Blocking — no infrastructure access confirmed yet |
| **JAMA structure and import configuration:** How is JAMA configured for this project? What are its data validation rules? How does automation target the correct container in the hierarchy? | 🔴 Blocking — hierarchy known, containers undefined |
| **AI service API access:** Can the system call external AI APIs (Claude, ChatGPT, OpenAI) inside Woven's environment? | 🔴 Blocking — no evidence this has been explored |
| **GitHub/Stargate access for Atomic team:** Will the team be granted access to Woven's requirements repositories? Access request planned for week of 2026-03-09. | 🔴 Blocking — access not yet requested |
| **Solution interface model:** Is this a UI, a CLI, or a fully automatic background service? How does Hannah manually trigger test case generation when ready? | 🟡 Open — no UX/interface decisions made yet |

---

## Appendix

---

### Glossary

| Term | Definition |
|---|---|
| **SWRD** | Software Requirements Document. Functional requirements from Toyota. Must be reinterpreted for Woven's IPA scope. |
| **SWQT** | Software Work/Interface Qualification Test. Test case derived from an SWRD, stored in JAMA with preconditions and test steps. |
| **JAMA** | Woven's requirements management system. Authoritative record for internal requirements and test cases. |
| **CA** | Customer Applications. Toyota's Japan-based liaison team that translates requirements from TMC to Woven. |
| **CRB** | Change Requirement Board. Emerging formal process at Woven to handle and track mid-quarter requirement changes. |
| **URD** | User Requirements Document. Parent-level requirement from Toyota; translated into SWRDs by the CA and product teams. |
| **PRD** | Product Requirements Document. Quarterly scoped doc listing which SWRDs are in scope for development that quarter. |
| **IPA** | Internal Product. Woven's internal product boundary/scope; SWRDs from Toyota must be reinterpreted for IPA level. |
| **Wovey** | Woven's internal LLM tool. Hannah uses it for test case drafting (~90% effectiveness, manual curation required). |
| **TSS-4** | Toyota Safety System 4. Legacy rules-based production system; its outdated prescriptive requirements still appear in incoming SWRDs despite Woven's ML approach. |
