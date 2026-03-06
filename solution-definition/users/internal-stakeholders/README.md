# Internal Stakeholder Map — Systems Engineering Tooling Support

Stakeholder profiles for the Woven/Atomic engagement on systems engineering tooling (requirements → JAMA, dynamic architecture diagram). Use for project planning and relationship management.

**Last updated**: 2026-03-06
**Profile fidelity**: Discovery-Refined (Level 3) for Julia, Andrea, Hannah, Nick. Pre-interview (Level 2) for Sanjiv. Early-stage (Level 1) for Eric.

## Project Context

Pilot (Q4 into Q1): systems engineering tooling to automate requirements intake and traceability. Key outcomes: SWRD ingestion from upstream sources (Git, Google Docs) into JAMA with change detection and version control; traceability chain from requirement → test case (SWQT) → unit test → pass/fail; dynamic architecture diagram from IP codebase (Epic 2). Primary pain point validated across all interviews: **silent upstream requirement changes** that invalidate weeks of work without notification.

## Stakeholder Index

| Stakeholder | Role Focus | Influence | Interview Status | Key For |
|-------------|------------|-----------|-----------------|---------|
| [Julia Pralle](Julia_Pralle_Requirements_Tooling_Lead.md) | Requirements tooling lead / process owner | High | ✅ Interviewed 2026-03-02 | Scope, strategy, TMC traceability report |
| [Andrea Zotelli](Andrea_Zotelli_Systems_Requirements.md) | Systems requirements — bottom-up backlog (SCRDs) | High | ✅ Interviewed 2026-02-26 | Component-level requirements, JAMA structure |
| [Hannah Lane](Hannah_Lane_Systems.md) | Systems & Validation — lane change (SWRDs, SWQTs) | High | ✅ Interviewed 2026-03-03 | Top-down intake workflow, process reference |
| [Nick Carcione](Nick_Carcione_Systems_V_and_V.md) | Systems V&V — in-lane capabilities (SWRDs, SWQTs) | Medium–High | ✅ Interviewed 2026-03-04 | Top-down intake (second practitioner perspective) |
| [Sanjiv Valsan](Sanjiv_Valsan_TMC_R.md) | TMC R; workshop chart owner | Medium–High | ⏳ Not yet interviewed | Workshop context, intake view |
| [Eric Keranen](Eric_Keranen_Architecture_Tooling.md) | Prior architecture tooling | Medium | ⏳ Not yet interviewed | Epic 2 reuse/adaptation |

## User Segments

Two distinct practitioner segments have emerged from discovery:

### Segment A: Top-Down Intake Practitioners (Hannah, Nick)
Work from quarterly PRD → review upstream SWRDs → ingest into JAMA → author SWQTs. Core pain: manual copy-paste at scale, no change notifications, multi-system navigation overhead. Hannah is the senior reference; Nick is a second function lead with a different (more conservative) intake posture.

### Segment B: Bottom-Up Backlog Practitioner (Andrea)
Reverse-engineers component-level requirements (SCRDs) from deployed software with no formal documentation. Core pain: no consolidated capability inventory, scattered/stale documentation, TBD parameters that even developers can't resolve. Distinct from the top-down stream but both feed JAMA.

### Segment C: Process Owner / Manager (Julia)
Sets strategy, owns TMC traceability report accountability. Does not do hands-on JAMA assembly. Core pain: cannot defend delays without a visible change record; intake is the root cause of all team delays. Accountable for deliverables she has no voice in scoping.

## Cross-Cutting Themes (Validated Across All Interviews)

1. **Silent requirement changes** — Requirements in upstream sources change without any notification reaching Julia's team. Confirmed by all 4 interviewed participants.
2. **Multi-system fragmentation** — Requirements live in Git, Google Docs, Google Sheets, Confluence, and JAMA. Upstream teams will not consolidate. Tool must adapt to existing sources.
3. **Legacy requirements (TSS-4)** — Many SWRDs were written for Toyota's rules-based system and are not directly applicable to Woven's ML implementation.
4. **Manual scale at enormous volume** — SWRD ingestion + SWQT authoring is entirely manual at ~600–7,000 items per capability group per quarter.

## Source Materials

- **User Interview: Julia Pralle** (`discovery-framing/03-discovery/2026-03-02-julia-pralle-interview-synthesis.md`) — 2026-03-02
- **User Interview: Andrea Zotelli** (`discovery-framing/03-discovery/2026-02-26-andrea-zotelli-interview-synthesis.md`) — 2026-02-26
- **User Interview: Hannah Lane** (`discovery-framing/03-discovery/2026-03-05-hannah-lane-interview-synthesis.md`) — 2026-03-03
- **User Interview: Nick Carcione** (`discovery-framing/03-discovery/2026-03-04-nick-carcione-interview-synthesis.md`) — 2026-03-04
- **Multi-Interview Synthesis** (`discovery-framing/03-discovery/2026-03-05-multi-interview-synthesis.md`) — covers Julia, Hannah, Nick
- **Release tools deep-dive** (`_raw-data/2026-02-23-1_release-tools-deepdive.md`) — Julia/Andrea session; original profile source
- **Andrea interview debrief** (`_raw-data/2026-02-26-2_andrea-interview-debrief.md`) — original Andrea profile source
- **Atomic Object–Project Details** (`_raw-data/Context/Atomic Object-Project Details.md`) — SOW, Epic 1 & 2, contacts

*Profiles follow the Level 3 (Discovery-Refined) format from `atomic-ai-prompt-toolkit/project-teams/solution-definition/users/generate-persona.md`. Update to Level 4 (Research-Validated) upon completion of all interviews and cross-validation.*
