# Julia Pralle

> **Discovery-Refined Profile** · Last Updated: 2026-03-06
> Source interviews: Release tools deep-dive (2026-02-23), User Interview (2026-03-02)
> Change level: **Significant** — profile substantially upgraded from pre-interview baseline.

## 1. Basic Information

- **Role/Title**: Product Delivery Manager / Requirements Tooling Lead
- **Department**: Product Delivery / Systems Verification & Validation
- **Location**: Not specified (global team; distributed across US and Japan time zones)
- **Tenure**: Long-tenured at Woven; previously at TRI (Toyota Research Institute) — carries full institutional history of how the requirements process evolved ➕
- **Reports To**: Not specified

## 2. Role Summary

Julia is the process owner for requirements intake and traceability across Julia's team (Product Delivery / Systems V&V). Her job has two dimensions:

1. **Strategic**: Sets the approach for how requirements flow from multiple sources (TMC/CA via SWRDs, internal product via PRDs, bottom-up backlog via SCRDs) into a single JAMA project with version control and traceability. She drives the SOW, epic-level scope, and acceptance criteria for Atomic Object's engagement.
2. **Accountability**: Ultimately responsible for delivering the TMC traceability report — a requirement-to-test-to-pass/fail coverage report that Toyota Motor Company requires. All tooling Julia builds toward feeds this report.

She does **not** do the hands-on JAMA assembly work herself — that is Hannah, Nick, and Andrea's domain. Julia works at the level of process design, stakeholder management, and intake architecture. ✓

> *"We're responsible to deliver, in the end, the overall pass rate, the implementation of measuring it, plus passing it. But we're not defining any of it."*

Three requirement types flow through her team's quarterly intake process:
- **SWRDs** — Software Work/Interface Requirements Documents (functional, from CA/TMC via Git)
- **SBRDs** — Scenario-Based Requirement Definitions (performance scenarios, from product team)
- **TPIDs** — Test Pattern IDs (closed-course TMC tests)

## 3. Project Involvement

- **Stake in Project**: Directly — she is accountable for the traceability report Julia's team cannot currently produce. She needs a single, versioned intake record with change detection to explain delays and satisfy TMC's compliance requirements.
- **Level of Influence**: High — owns scope, priorities, interview list, and definition of success for Epic 1
- **Decision Authority**: Requirements tooling strategy; JAMA structure and templates (approves changes Andrea proposes); what constitutes "done" for AO deliverables
- **Time Commitment**: High — daily standups (or two longer weekly sessions), overview sessions, ad hoc Slack; expects AO to be a collaborative co-design partner, not a fixed-spec vendor ➕

## 4. Goals and Success Criteria

### Primary Goal: Single Intake Source with Change Visibility ✓
A unified, versioned record of all requirements in scope for the quarter, regardless of where the originals live — with automatic notification when any source changes.

> *"I want to be able to show exactly when things within these requirements changed in the intake. Just one document I have to go to, basically — that makes it way easier."*

- **Success Criteria**: Julia can point her director or TMC to one JAMA project and show complete Q1 requirements, their status, and a timestamped log of mid-quarter changes.
- **Success Criteria**: No more "we have to go talk to 10 people to explain why we're delayed."

### Goal 2: Defensible Delay Attribution ✓
Be able to demonstrate — with data, not narrative — that delays are caused by upstream requirement quality or changes, not by Julia's team's execution failures.

> *"Telling my director why we screw up all the time is because the intake is crap. That's what we need to do."*

- **Success Criteria**: A visible, auditable log of scope changes mid-quarter that Julia can surface on demand.

### Goal 3: Traceability Report for TMC ✓
Deliver an end-to-end traceability report to Toyota Motor Company: requirement → test case (SWQT) → unit test → pass/fail status.

- **Success Criteria**: Coverage report showing % of SWRDs with test cases, % with linked unit tests, and pass/fail rates per release.
- **Timeline urgency**: Vehicle must be on public roads by ~2028–2029; requirements must be traceable for regulatory and liability reasons before production.

### Goal 4: Process Stability While Tooling Is Built ➕
Julia is simultaneously defining the business logic of requirements intake (PRD templates, JAMA structure for SBRDs, approval workflows) and building tooling with AO to support it. She sees AO as a co-design partner and expects the tool to flex as the process evolves.

> *"We don't have a full definition yet... it's still in progress."*

## 5. Concerns and Pain Points

### #1 — No Change Detection (Root Cause of All Delays) ✓
When CA updates an SWRD in Git or a Google Doc, Julia's team has no notification mechanism. They may spend weeks analyzing a requirement that has already been revised at the source.

> *"Things change all the time. They add more stuff, they change requirements. We don't know about anything. We always have to say, oh, we're delayed, we're delayed, and then it's why, and then you have to go back and talk to 10 people."*

- *Impact*: Sprint delays, inability to explain timelines to leadership, wasted effort on outdated requirements.
- *Current workaround*: Monitoring CA Slack channels for file drops (ad hoc, unreliable); team maintains manual spreadsheets.

### #2 — No Single Source of Truth ✓
Requirements arrive from Slack file drops, Google Doc links, JAMA folders, CA-managed Git repos, PDM spreadsheets — with no central registry. Upstream teams have no intention of consolidating.

> *"They have it all in different places, and they will not change that fact. So all we can do is somehow still need to know when things change in the source itself."*

- *Current workaround*: Quarterly PRD now acts as the intake hub (newly negotiated), but it's still "just a bucket of links" — it doesn't solve versioning or change detection.

### #3 — Accountability Mismatch (No Approval Phase) ➕
Product sets quarterly requirement targets without consulting Julia's team. Julia's team is responsible for meeting those targets but had no voice in scoping them.

> *"We have to meet it in order to get our bonuses... there's no approval phase, but we still have to meet it."*

### #4 — No Formal Pushback Mechanism ✓
When a practitioner identifies a problematic requirement (TBD, over-prescriptive, ML-incompatible), there is no formal change board or structured rejection workflow.

> *"If we want to change something, there's no real process for developers or my team to say, hey, this requirement needs to be written differently."*

- *Julia's response*: Actively building a Change Management Board process; sees JAMA review workflows as the mechanism.

### #5 — Legacy Requirements Written for TSS-4 (Rules-Based System) ✓
A significant portion of SWRDs from CA originate from Toyota's legacy rules-based TSS-4 system and prescribe thresholds and boolean logic incompatible with Woven's ML implementation. Julia has been pushing back on this for over a year.

> *"Last year a bunch of requirements feedback was: they're not written for our system, we can't use them in an ML-based system. And then we communicated this back to CA, and therefore also TMC."*

## 6. Workflow (Current State) ➕

```text
Quarterly intake cycle:
  PRD published by product team (Google Doc with links to SWRDs, SBRDs, TPIDs)
      ↓
  Julia's team identifies in-scope requirements for the quarter
      ↓
  Practitioners (Hannah, Nick, Andrea) review each requirement in source system
      ↓
  Accepted requirements → JAMA ingestion (manual copy-paste + SWQT authoring)
  Rejected requirements → comment in source doc → informal feedback to CA via PDM
      ↓
  SWQTs drafted with LLM (WOVI/Gemini) → entered into JAMA
      ↓
  Developer team implements unit tests against SWQTs
      ↓
  Julia's team generates TMC traceability report (requirement → SWQT → unit test → pass/fail)
```

**Key fragmentation**: Requirements live in Git (CA-managed), Google Docs (PRD, some SWRDs), Google Sheets (URD spreadsheet), Confluence, and JAMA. No single system shows the full picture.

## 7. Jobs to Be Done ➕

**Functional Jobs:**
- Maintain an auditable, versioned record of every requirement Woven received for the quarter
- Surface upstream requirement changes to practitioners before they waste effort on stale work
- Produce the TMC traceability report on demand (requirement → test → pass/fail)

**Social Jobs:**
- Credibly explain to leadership why timelines slip without appearing to make excuses
- Demonstrate to TMC that Woven has formal engineering discipline in place

**Emotional Jobs:**
- Stop feeling like delays are her team's fault when the root cause is upstream intake quality
- Have a defensible answer when a director asks "why are you behind?"

## 8. Communication Preferences

- **Preferred Channels**: Shared documents (Google Docs with SOW, examples, notes), Slack, video calls (standups, overviews)
- **Frequency**: Daily standups or two longer sessions per week; responsive on Slack
- **Detail Level**: High-level flow and goals; delegates detailed JAMA format/transfer guidance to Andrea and detailed practitioner workflow to Hannah
- **Best Times**: Flexible; moved standups to 10 a.m. her time to accommodate Andrea's conflicts

## 9. Key Relationships

- **Andrea Zotelli**: Owns JAMA structure and transfer logic; primary implementor for Epic 1. Julia relies on Andrea for "how" while she sets "what."
- **Hannah Lane**: Senior practitioner; most advanced on intake/assembly. Julia defers to Hannah's framing of the PDM layer (even though Hannah disagrees with it). ✓
- **Nick Carcione**: In-lane capabilities practitioner; represents a different (more cautious) intake posture than Hannah. Julia manages toward consistency. ➕
- **Sanjiv Valsan**: Workshop insights and chart owner; aligned on organizational goals.
- **CA Team (Japan)**: Upstream requirement authors. Julia communicates back to them via PDM team as intermediary; built a feedback channel over the past year.
- **Product Team**: Authors PRD, sets quarterly targets. Key tension: product sets targets without Julia's team's input, creating accountability mismatch.
- **TMC**: End customer for traceability report; the external compliance driver for all of this work.
- **Nate Papes (AO)**: Leads Epic 2 (architecture diagram); Julia will clarify Eric Keranen's prior tool with Nate.

## 10. Engagement Strategy

- Use her as the primary point for scope, strategic vision, and "what good looks like" for requirements tooling.
- **She is co-designing the process** — treat every AO tooling decision as a potential input to her process thinking, not just an execution item.
- Watch for process decisions being made in real time; stay close so tooling can adapt when formats or templates change.
- Keep her informed of what AO learns from practitioners (Hannah, Nick, Andrea) — she values the ground-level perspective even when it differs from her own.
- Don't anchor only on her framing of the PDM layer as "the right process" — Hannah's counter-perspective is valid and design-relevant.

## 11. Key Quotes

> *"The biggest pain point for us is the intake. It's something that we need to have in one source. Where I can show, this is everything that I got."*

> *"We don't know about anything. We always have to say, oh, we're delayed, we're delayed, and then it's why, and then you have to go back and talk to 10 people."*

> *"Telling my director why we screw up all the time is because the intake is crap. That's what we need to do."*

> *"They have it all in different places, and they will not change that fact. So all we can do is... somehow still need to know when things change in the source itself."*

> *"We're responsible to deliver, in the end, the overall pass rate, the implementation of measuring it, plus passing it. But we're not defining any of it."*

## 12. Notes and Context

- Julia is the primary client contact and must be kept in the loop on all major decisions and design directions.
- Production vehicle deadline (~2028–2029) creates genuine urgency — this is not just an internal tooling project, it has regulatory and liability implications.
- She acknowledges the process is being defined simultaneously with the tooling — this is intentional, not a gap.
- The newly-negotiated quarterly PRD process is fragile and recent; treat it as the stable intake mechanism without undermining it.
- Lean on Julia to validate whether the "0-of-N test cases passing" failure dashboard is the accountability mechanism she envisions for the TMC traceability report.

*Source: Release tools deep-dive (2026-02-23), Project Details, Andrea interview debrief (2026-02-26), User Interview synthesis (2026-03-02). Profile substantially upgraded from pre-interview baseline.*
