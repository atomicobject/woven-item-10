# Requirements Gathering

**Status:** In Progress

**Last Updated:** 2026-03-10

**Owner:** Gus Schissler (Delivery Lead, Atomic Object)

**Sources:** 2026-02-05_kickoff.md, 2026-02-23-1_release-tools-deepdive.md, 2026-02-26-1_andrea-interview.md, 2026-02-26-2_andrea-interview-debrief.md, 2026-02-27_gus-dan-alloy-assertion-mapping.md, 2026-03-02-1_julia-interview.md, 2026-03-02-2_julia-interview-debrief.md, 2026-03-03-1_hannah-interview.md, 2026-03-03-2_hannah-interview-debrief.md, 2026-03-04-1_standup.md, 2026-03-04-3_nick-user-interview.md, 2026-03-04-4_nick-debrief.md, 2026-03-05_discovery-sync.md, 2026-03-05_standup.md, 2026-03-06_solutioning.md, 2026-03-10-slide-deck-debrief.md

---

## 1. Overview

Atomic Object is building a system to automate and streamline the requirements intake and consolidation process for Woven by Toyota's SV&V (Verification and Validation) team. The core challenge: requirements originate from Toyota Motor Company (TMC) via a Customer Application liaison team, but they arrive scattered across Git, Google Docs, Confluence, JAMA, and other repositories with no centralized visibility. Manual consolidation into JAMA (Woven's requirements management platform) is labor-intensive, error-prone, and fails to surface requirement changes that occur mid-quarter. This project automates the pipeline from source requirements (primarily Git-based SWRDs—Software Requirements Documents) into structured JAMA entries, with change detection and notification to alert teams when upstream requirements evolve.

---

## 2. Business Context

### Problem

Woven faces two distinct requirements problems. **Bottom-up:** years of developed autonomous driving software exists in vehicles with minimal documented requirements — code was written before formal requirements were established, and the knowledge is tribal and scattered. **Top-down:** requirements flowing from Toyota (via the CA liaison team) into Woven are poorly structured, scattered across multiple tools, and change without notification. Julia Pralle (our primary stakeholder) directed the team to focus on the **top-down problem**, since the bottom-up problem is internal to Woven and has more available solutions, while the top-down intake process is the more urgent and externally-constrained challenge **(confirmed, 2026-03-02-1_julia-interview.md)**. The current top-down intake process is fundamentally broken:

- **Scattered sources:** Requirements live across Git repositories (as markdown/YAML), JAMA, Google Docs, Confluence, spreadsheets, and inline code comments with no single source of truth **(confirmed, 2026-02-26-1_andrea-interview.md; 2026-03-03-1_hannah-interview.md)**

- **Manual copy-paste workflow:** Systems engineers like Hannah Lane manually copy requirements from Git into JAMA, versioning each entry with timestamps to track what changed **(confirmed, 2026-03-03-1_hannah-interview.md)**

- **No change notification:** When Toyota (via CA team) updates requirements in the source repository, Woven's teams have no systematic way to detect these changes. Hannah's workaround is copying everything into JAMA with version numbers, but the Product Delivery Manager team's responsibility to flag changes often fails, leaving teams unaware of critical updates **(confirmed, 2026-03-03-1_hannah-interview.md, 2026-03-04-3_nick-user-interview.md)**

- **Incomplete requirements:** Many incoming SWRDs contain TBDs (To Be Determined) placeholders where the actual behavior is undefined. When Andrea Zotelli tries to resolve TBDs by asking developers, she often discovers developers themselves don't have explicit answers—the knowledge is tribal and unwritten **(confirmed, 2026-02-26-1_andrea-interview.md)**

- **Format translation challenges:** Requirements arrive from Toyota at system-of-systems scope but must be reinterpreted/rewritten for Woven's internal product (IPA block) scope. This translation is currently manual and ad-hoc **(confirmed, 2026-03-02-1_julia-interview.md)**

- **Misaligned requirement types:** Many incoming SWRDs are overly prescriptive (performance-driven, specific acceleration bounds) rather than interface-level, reflecting legacy rules-based thinking (TSS-4) that doesn't align with Woven's ML-centric implementation **(confirmed, 2026-03-04-3_nick-user-interview.md, 2026-03-05_discovery-sync.md)**

### Value

Successfully automating this pipeline will:

- **Reduce manual entry time:** Eliminate the copy-paste workflow; requirements flow from source into JAMA automatically **(proposed, 2026-03-06_solutioning.md)**

- **Surface changes immediately:** Change detection and notification ensure teams are never surprised by mid-quarter requirement updates **(identified as pain point, 2026-03-03-1_hannah-interview.md; 2026-03-05_discovery-sync.md)**

- **Enable faster requirements documentation:** Andrea estimates each component (e.g., Lane Change) takes "weeks" to document. Consolidating scattered information into one place and automating test case generation could reduce that to days **(estimated, 2026-02-26-1_andrea-interview.md)**

- **Improve traceability:** Automating the link between SWRDs, test cases (SWQTs), and implementations provides visibility into coverage and impact when changes occur **(confirmed pain point, 2026-03-05_discovery-sync.md)**

- **Support regulatory compliance:** Autonomous driving requires documented requirements for liability protection. An automated system improves auditability **(identified, 2026-02-26-2_andrea-interview-debrief.md)**

### Users

**Primary personas:**

- **Hannah Lane** (Systems & Validation Engineer, Lane Change capability group) — Currently the most mature user with the most pain points. Manages 600+ lane change SWRDs; copies them into JAMA manually, writes test cases with LLM assistance (90% effective), and tracks changes by maintaining version numbers in JAMA **(primary contact, 2026-03-03-1_hannah-interview.md)**

- **Nick Carcione** (Systems V&V Engineer, In-Lane capability group) — Reviews SWRDs from three document sources (PRD Google Doc, URD spreadsheet, Git-hosted files) to assess usability; rejects overly prescriptive requirements and communicates feedback back to product/CA **(secondary contact, 2026-03-04-3_nick-user-interview.md)**

- **Andrea Zotelli** (SV&V Manager, Product Delivery) — Reverse-engineering requirements from existing code and documentation; struggling with scattered sources, timezone barriers (Japan teams), and tribal knowledge gaps; targeting production by early 2029 **(stakeholder, 2026-02-26-1_andrea-interview.md)**

- **Julia Pralle** (SV&V Manager, Product Management) — Manages the overall requirements flow; implementing formal approval phase and Change Requirement Board (CRB) process for mid-quarter changes **(stakeholder, 2026-03-02-1_julia-interview.md)**

**Secondary users:**

- **Behavior team developers** — Implement requirements; need clear, testable specifications and notification when requirements change mid-quarter **(implied, 2026-03-02-1_julia-interview.md)**

### Jobs to Be Done

1. **Intake and consolidation:** Gather requirements from multiple source formats (primarily Git-based SWRDs for pilot) and structure them into JAMA with full context and version tracking **(core job, all interviews)**

2. **Change detection and notification:** Identify when upstream requirements change and alert relevant teams (systems engineers, developers) so they can assess impact and update downstream tests/implementations **(pain point, 2026-03-03-1_hannah-interview.md; 2026-03-04-3_nick-user-interview.md)**

3. **Test case generation:** Automatically generate Software Work/Interface Qualification Tests (SWQTs) from requirements to reduce manual effort (currently Hannah does this with LLM assistance; 90% effectiveness, requiring manual curation) **(pain point, 2026-03-03-1_hannah-interview.md; 2026-03-04-3_nick-user-interview.md)**

4. **Requirement filtering and prioritization:** Surface which SWRDs are problematic (TBDs, over-prescriptive, legacy-based) and which are ready for development to reduce wasted review time **(pain point, 2026-03-04-3_nick-user-interview.md; 2026-03-05_discovery-sync.md)**

5. **Visibility and traceability:** Enable teams to trace requirements → test cases → implementation results and understand coverage **(pain point, 2026-03-05_discovery-sync.md)**

---

## 3. Scope

### In Scope (Pilot)

**Phase 1: Lane Change Requirements Consolidation (Pilot)**

The solution is structured as three independent systems in priority order. Each system is independently useful and buildable; Systems 2 and 3 unlock progressively as infrastructure access is established.

#### System 1 — Requirements Creation (first priority; POC already built, no access dependencies)

- **Structured JAMA requirements entry:** Parse SWRD content and structure it into JAMA-compatible format. Whether raw content is passed through as-is or transformed into plain English via LLM is an open question to confirm with Hannah **(core requirement, 2026-03-06_solutioning.md; open question, 2026-03-10-slide-deck-debrief.md)**

- **Gated test case generation:** Use LLM-based approach (similar to Hannah's existing Wovey prompt) to generate SWQT structure from SWRD; output to JAMA for manual curation. Test cases generated only after upstream approval/agreement (CA or product sign-off) **(proposed, 2026-03-06_solutioning.md; clarified, 2026-03-05_standup.md)**

- **JAMA source linkage and version history:** Maintain source linkage (source location, version/commit, timestamp) in JAMA for traceability; support version history tracking **(core requirement, 2026-03-03-1_hannah-interview.md)**

#### System 2 — Automated Gathering (needs Git + Google Drive access)

- **Lane change SWRDs from Git repository (pilot scope):** SWRDs are stored in Git repositories but accessed by Hannah's team through an intermediate documentation layer (PRD documents from the PDM team). Whether the system can integrate directly with Git or must work through the documentation layer is an **open infrastructure question** **(2026-03-03-2_hannah-interview-debrief.md)**

- **Automated SWRD discovery and batch import from PRD:** Rather than one-by-one manual hunt, read the quarterly PRD to discover all in-scope SWRD links and batch-import them into System 1 for processing **(proposed, 2026-03-06_solutioning.md; 2026-03-10-slide-deck-debrief.md)**

#### System 3 — Change Management (extends System 2's access layer; scope may narrow depending on Reqtify)

- **Change detection (polling-based):** Poll the Git repository on a set cadence (TBD with Hannah) to detect SWRD version changes; diff old vs. new; surface what specifically changed by section **(proposed architecture, 2026-02-23-1_release-tools-deepdive.md)**

- **Change notification:** Alert designated stakeholders (Hannah, systems engineers) when changes are detected; surface which SWRDs changed and provide diff summary. Notification channel (Slack, email, JAMA flag) TBD **(core capability, 2026-03-06_solutioning.md)**

**Phase 1 Deliverables:**

- Proof-of-concept demonstrating source-to-JAMA pipeline (sandbox environment with mock data) **(2026-03-06_solutioning.md)**

- Automated change detection and notification mechanism **(2026-03-06_solutioning.md)**

- Integration with JAMA API for automated requirement entry **(verified feasible, 2026-03-03-2_hannah-interview-debrief.md)**

- Documentation of workflow for Hannah's team **(2026-03-06_solutioning.md)**

### Out of Scope (Pilot)

- **SBRDs (Scenario-Based Requirements Documents) and TPIDs:** These represent a separate requirement methodology focused on performance evaluation (on-road/closed-course testing). Explicitly out of scope; separate workflow. **(2026-03-05_discovery-sync.md)**

- **Multi-source consolidation (beyond Git):** Pilot focuses on Git-based lane change SWRDs. Other capability groups may use JAMA directly or Google Docs as sources; multi-source aggregation is deferred to Phase 2 **(2026-03-05_standup.md)**

- **Automated SWRD filtering and prioritization (blocking):** The system will not block or auto-reject SWRDs based on quality signals. That decision remains with the user. However, a **Requirement Quality Identifier** add-on (see Section 8) is designed to surface quality issues to the user before test case generation — flagging TBD-heavy language, over-prescriptive specification written for legacy TSS-4's rules-based approach, and other signals — so the user can decide whether to proceed. This is planned as an ideal iteration beyond the pilot. **(2026-03-04-4_nick-debrief.md)**

- **Requirement translation/reinterpretation:** System will not translate SWRDs from system-of-systems scope to internal product (IPA) scope. That translation remains a human task (Julia's team responsibility) **(2026-03-02-1_julia-interview.md)**

- **Integration with Customer Applications (CA) team:** The system focuses on Woven's intake process, not on improving upstream requirements from Toyota/CA. However, better visibility into what CA sent may eventually improve feedback loops **(out of scope for pilot, per 2026-03-02-1_julia-interview.md)**

- **Architecture diagram generation:** Covered in separate PRD (architecture-diagram-generation.md). These projects are parallel but distinct **(2026-03-04-2_standup-debrief.md)**

- **Bottom-up requirements backfilling:** Reverse-engineering requirements from existing Woven code that was written without formal specs. Julia identified this as lower priority because it is internal to Woven and has more available solutions; the top-down intake from Toyota/CA is the harder, externally-constrained problem **(confirmed, 2026-03-02-1_julia-interview.md)**

- **Organizational process change:** The system enables but does not enforce the shift from "build software then document" to "write requirements then build." That is an organizational/process change requiring executive buy-in beyond Atomic Object's scope **(2026-02-26-2_andrea-interview-debrief.md)**

### Dependencies

**Upstream dependencies (must be in place before implementation):**

- **Requirements source access:** The team needs to request access to Woven's requirements repositories (target: week of 2026-03-09). It is unclear whether direct Git integration is feasible or whether the system must work through Woven's documentation layer (PRD documents from the PDM team that link to Git). This is a **key open question** that shapes the integration architecture **(2026-03-06_solutioning.md)**

- **JAMA API access and configuration:** Must understand JAMA's data import rules, field structure, validation requirements, and how to programmatically post requirements. Python REST API client exists (last updated 3 years ago) **(verified, 2026-03-03-2_hannah-interview-debrief.md)**

- **AI service API availability:** Solution depends on access to external AI APIs (Claude, ChatGPT, or OpenAI) for automated test case generation. Unclear if Woven's environment permits this; requires investigation **(2026-03-06_solutioning.md)**

- **GitHub Actions infrastructure clarity:** Understanding what automation triggers are available in Woven's CI/CD pipeline to support change detection (push vs. pull model) **(2026-03-06_solutioning.md)**

- **Architecture diagram generation (downstream dependency):** Component-level architecture (SCRD-level) is missing from Woven. Julia needs this for IPA-level requirements mapping. Nate's architecture diagram generation work is a dependency for full requirements traceability **(2026-03-02-2_julia-interview-debrief.md)**

**Downstream enablements:**

- Enables faster SWRD-to-SWQT-to-implementation pipeline, reducing time-to-completion for requirements cycles **(2026-02-26-1_andrea-interview.md)**

- Enables Change Requirement Board (CRB) process by providing automated visibility into what changed **(enables, 2026-03-02-1_julia-interview.md)**

- Enables future multi-capability-group scaling once pilot success is demonstrated with lane change **(2026-03-04-1_standup.md)**

---

## 4. User Stories

| ID | Story | Priority | Acceptance Criteria |
|----|-------|----------|-------------------|
| RG-001 | As Hannah (systems engineer), I want to be notified when lane change SWRDs change at the source, so I can assess impact and update my JAMA entries and tests accordingly | Must | Given an SWRD has been updated at the source, when the polling/detection mechanism runs, then Hannah receives a notification with a summary of what changed (SWRD identifier, changed sections, link to source) |
| RG-002 | As Hannah, I want lane change SWRDs to be automatically structured and entered into JAMA, so I don't have to manually copy and reformat them | Must | Given a SWRD exists in standard format at the source, when the ingestion pipeline runs, then the SWRD is created in JAMA with title, description, interface, specification, and version link populated; JAMA entry links back to source |
| RG-003 | As Hannah, I want the system to automatically generate initial SWQT (test case) structure from an SWRD, so I can curate and finalize tests faster than writing from scratch | Should | Given an SWRD is in JAMA with product/CA approval, when I request test generation, then the system outputs 3-5 candidate test cases covering inputs, edge cases, state transitions; I can select/edit/finalize before saving to JAMA |
| RG-004 | As Nick (systems engineer), I want to see which SWRDs contain incomplete specs (TBDs) before I review them, so I can prioritize reviewable requirements and avoid wasting time on obviously-incomplete ones | Should | Given 50+ SWRDs are pending review, when I access the JAMA dashboard, then I see a count or indicator of TBDs per SWRD; I can sort/filter by TBD density to work on highest-completion items first |
| RG-005 | As Julia (Product Manager), I want visibility into which lane change SWRDs have been automatically ingested vs. still pending review, so I can track requirements intake progress | Should | Given the monthly PRD release, when the ingestion pipeline completes, then Julia sees a dashboard showing SWRD count by status (ingested, pending review, rejected, approved for development) |
| RG-006 | As a developer, I want notification when an SWRD I'm implementing is updated after I've started work, so I can assess if the change affects my implementation | Must | Given a developer is assigned to an SWRD, when that SWRD changes at the source (mid-quarter), then the developer and their manager are notified with a link to the change and a flag in JAMA marking the requirement as modified |
| RG-007 | As Andrea (Product Delivery Manager), I want to consolidate requirements from multiple scattered documents into one place during reverse-engineering, so I can see all relevant information about a component while writing requirements | Could | Given a component (e.g., Lane Change), when I search the consolidated knowledge base, then I see all relevant design docs, code comments, tests, Slack threads, and existing partial requirements indexed and linked; I don't have to search Confluence, GitHub, Google Docs separately |
| RG-008 | As Gus (Atomic Object), I want to understand which parts of the intake workflow can be automated vs. which require human judgment, so I can scope the solution realistically | Must | Given stakeholder interviews are complete, when I map Hannah's and Nick's workflows, then I document the step-by-step process, identify automation opportunities, and flag which steps require human review/approval |

---

## 5. Decision Log

| Date | Decision | Rationale | Source |
|------|----------|-----------|--------|
| 2026-03-02 | Focus on top-down (Toyota→Woven intake) problem, not bottom-up (code without requirements) | Julia identified two distinct requirements problems: bottom-up (existing code lacks documented requirements) and top-down (Toyota requirements via CA are scattered and untracked). Julia directed focus to top-down because it is externally constrained and harder to solve; bottom-up is internal to Woven with more available solutions | 2026-03-02-1_julia-interview.md, 2026-03-02-2_julia-interview-debrief.md |
| 2026-02-26 | Lane change (Hannah's capability) is the pilot starting point | Most mature capability with well-defined requirements, most existing work, and Hannah has strongest pain point understanding and willingness to participate | 2026-03-03-2_hannah-interview-debrief.md, 2026-03-04-1_standup.md |
| 2026-02-27 | Solution will focus on intake process, not code-level reverse-engineering | Confirmed through assertion mapping that Andrea's work is intake-focused (gathering pre-existing requirements from multiple sources) not bottom-up code analysis | 2026-02-27_gus-dan-alloy-assertion-mapping.md |
| 2026-03-02 | JAMA will be ground truth; Git will be source with version linking | Hannah's workflow confirmed that JAMA is authoritative for internal requirements record; Git provides traceability link for external source | 2026-03-02-1_julia-interview.md, 2026-03-03-1_hannah-interview.md |
| 2026-03-05 | SBRDs and TPIDs are explicitly out of scope; separate workflow | Hannah confirmed she does not work with SBRDs (Scenario-Based Requirements Documents); they are a separate requirement methodology outside this project's scope | 2026-03-05_discovery-sync.md |
| 2026-03-06 | Eliminate manual overlay step; automate source-to-JAMA flow | Manual overlay was identified as non-value-added step; direct integration simplifies pipeline. **Note:** Whether the source is Git directly or Woven's documentation layer remains an open infrastructure question | 2026-03-06_solutioning.md |
| 2026-03-06 | Conditional test case generation gated by upstream approval | Test cases should only be created after CA or product sign-off on the requirement; avoids writing tests for problematic SWRDs that will be rejected | 2026-03-05_standup.md |
| 2026-03-06 | Prioritize answering infrastructure questions before detailed design | Rather than build in isolation, research actual constraints (GitHub integration points, JAMA configuration, API access, Hannah's manual process structure) to ensure realistic solution | 2026-03-06_solutioning.md |
| 2026-03-10 | Solution framed as three independent systems in priority order | Each system is independently useful and buildable. System 1 has no access dependencies and a working POC; Systems 2 and 3 unlock progressively as Git, Google Drive, and JAMA API access is established | 2026-03-10-slide-deck-debrief.md |
| 2026-03-10 | System 1 (Requirements Creation) is first priority | POC already built; does not require any infrastructure access beyond a working LLM call. Delivers value immediately and validates the translation/structuring approach before committing to the full pipeline | 2026-03-10-slide-deck-debrief.md |
| 2026-03-10 | System 3 scope contingent on Reqtify demo | Reqtify may already handle change-tracking and traceability well. Before fully scoping System 3, get a Reqtify demo to determine how much overlap exists | 2026-03-10-slide-deck-debrief.md |
| 2026-03-10 | Core System 1 question is transformation depth, not just plain-English toggle | The question is whether the tool faithfully copies SWRD content into JAMA (copy-paste automation) or actively improves it (translates jargon, reformats, fills in structure). Hannah currently does this manually; her preference determines the core pipeline behavior | 2026-03-10-slide-deck-debrief.md |

---

## 6. Key Constraints & Considerations

### Technical Constraints

- **Change detection approach (polling vs. webhooks):** Polling is simpler to implement (no infrastructure changes needed to Woven's systems) but has up to 24-hour latency. Webhooks would require GitHub Actions infrastructure access and configuration. Polling is the recommended MVP approach **(2026-02-23-1_release-tools-deepdive.md)**

- **SWRD format consistency:** Lane change SWRDs follow a consistent structure (header, reason, description, interface, specification sections) across capability groups. Solution can assume fixed schema for SWRDs, but format may differ depending on whether accessed via Git directly or through the documentation layer. Non-Git sources (JAMA-native, Google Docs) may have different structures; deferred to Phase 2 **(2026-03-04-3_nick-user-interview.md, 2026-03-05_standup.md)**

- **Agent authentication and document access:** Critical unknown—does Woven have MCP (Model Context Protocol) servers or patterns for AI agent authentication? What access can an automated agent obtain? This is a potential blocker **(2026-03-02-2_julia-interview-debrief.md, 2026-03-06_solutioning.md)**

- **JAMA API limitations:** Must verify JAMA's data import/validation rules, field structures, and whether automated population will accept the volume/frequency of entries **(2026-03-03-2_hannah-interview-debrief.md)**

- **GitHub Actions availability:** Solution concept assumes GitHub Actions can be configured with API keys to trigger automated requirement generation. Unclear what automation Woven already has in place or what restrictions exist **(2026-03-06_solutioning.md)**

### Process Constraints

- **Human review/approval step is irreplaceable:** Even with full automation, a human review/approval step will always be necessary (Julia, CA, or product must validate that ingested requirements are correct). The solution can make this review faster and more visible but not eliminate it **(2026-03-04-4_nick-debrief.md, 2026-03-06_solutioning.md)**

- **Requirements cannot be created from scratch; only consolidated and formatted:** The solution gathers and structures pre-existing requirements. If information doesn't exist or is truly tribal knowledge (in developers' heads), the system cannot create it **(2026-02-27_gus-dan-alloy-assertion-mapping.md)**

- **Quarterly PRD release cadence is a hard boundary:** Requirements are locked to specific versions per quarter. Mid-quarter changes are tracked via Change Requirement Board (CRB) process (emerging/not fully implemented). Solution design must account for this cadence **(2026-03-02-1_julia-interview.md)**

- **Teams won't change where they put documentation:** Woven's teams have established practices for where requirements live (Git for some, JAMA for others, Google Docs for others). The solution must work with existing sources, not assume ideal organization **(2026-03-02-2_julia-interview-debrief.md)**

### Organizational Constraints

- **Requirements flow is still being defined:** Woven is currently implementing formal approval phase and CRB process. This is advantageous—Atomic Object's tool can shape the emerging process rather than bolt onto something fixed. However, it means the target workflow is not yet stable **(2026-03-02-2_julia-interview-debrief.md)**

- **Multi-team scope variation:** Different capability groups (lane change, in-lane, urban) may have different requirement formats from Toyota, different levels of maturity, and different team structures. Lane change is the pilot; scaling to others requires validation of format consistency **(2026-03-04-1_standup.md)**

- **Timezone and distributed teams:** Teams span US and Japan; synchronous communication is limited. The solution must not depend on real-time back-and-forth **(2026-02-26-1_andrea-interview.md)**

### Quality and Acceptance Constraints

- **LLM-generated test cases require human curation:** Hannah's current LLM-assisted approach (Wovey/Gemini) is ~90% effective; she must manually review and curate output rather than accepting all generated cases **(2026-03-03-1_hannah-interview.md, 2026-03-04-3_nick-user-interview.md)**

- **Over-prescriptiveness for ML implementation:** Many incoming SWRDs are written for rules-based systems (legacy TSS-4) and are overly prescriptive for Woven's ML-centric approach. The system cannot fix upstream requirements quality; it can only surface the mismatch **(2026-03-04-3_nick-user-interview.md, 2026-03-05_discovery-sync.md)**

- **TBD prevalence:** Many components have TBDs (To Be Determined) where behavior is undefined. The system should identify TBD density but cannot resolve TBDs without developer input. Incomplete data should be flagged, not hidden **(2026-02-26-1_andrea-interview.md, 2026-02-26-2_andrea-interview-debrief.md)**

---

## 7. Open Questions

> **Cross-reference note (2026-03-09):** Questions below have been cross-referenced against the FigJam Solutioning board (Solution Scope stickies) and all interview summaries/assertions. Status reflects evidence found across the full KB but has **not been validated with stakeholders** — "hypothesis" status means we have supporting evidence from interviews but the answer has not been confirmed.
>
> **Updated 2026-03-10:** Questions reorganized by system following slide deck debrief. Per-system priority order reflects the three-system solution model.

### System 1 — Requirements Creation

1. **Copy-paste automation or intelligent transcription?** Is the tool's job to faithfully move SWRD content into JAMA as-is — just faster — or should it actively improve what lands there: translating jargon, reformatting for readability, filling in structure? This also determines whether there's a gate: does everything flow in automatically, or does Hannah review before anything lands in JAMA? Hannah currently does this transformation manually, but she may prefer to keep that control rather than trust an LLM to interpret intent **(2026-03-06_solutioning.md; 2026-03-10-slide-deck-debrief.md)**
   - **Status: Open — key question to validate with Hannah usability test.**
   - **Hypothesis (pre-debrief):** The "translate to plain English" step is a core pipeline requirement — the system must not only extract raw content from Git but also run LLM-based clarification/translation before populating JAMA. This is distinct from raw extraction. However, debrief raised the broader question of whether the transformation should happen at all versus faithful transcription.

2. **Do we even need a front end?** Is this a standalone UI, a CLI, or something that lives inside JAMA as a widget? Julia has flagged a preference for fewer tools — if JAMA supports extensions or widget capability, building inside JAMA rather than alongside it may be the right call **(FigJam Solution Scope sticky; 2026-03-10-slide-deck-debrief.md)**
   - **Status: Open.** No UX/interface decisions made. Explore JAMA widget capability before building a standalone UI.

3. **JAMA structure, containers, and import configuration:** How is JAMA configured for this project? What format should automated requirements follow? Can the system programmatically post/update JAMA entries? How does automation target the correct location in the hierarchy? **(2026-03-06_solutioning.md)**
   - **Status: Partially answered.** JAMA hierarchy documented as project → component → set → folder → item (Andrea interview). But the process for creating containers for a new quarter/feature — and how automation targets the correct location — remains undefined.
   - **Hypothesis:** Automation must know the target set/folder to populate correctly; this requires either a configuration step or a naming convention the system can follow.

4. **AI service API access:** Can the system access external AI APIs (Claude, ChatGPT, OpenAI) for LLM-based structuring and test case generation? Are there restrictions, approval processes, or alternative services Woven prefers? **(2026-03-06_solutioning.md)**
   - **Status: Open.** No evidence in any interview that this has been resolved.

### System 2 — Automated Gathering

1. **Can an automated agent access Git and Google Drive?** This is distinct from whether the Atomic team has access — what can a deployed tool or agent access inside Woven's environment? What approval process exists for granting a system (not a person) read access to internal repos and Drive? **(2026-03-06_solutioning.md; 2026-03-10-slide-deck-debrief.md)**
   - **Status: Open — blocking for System 2.** No infrastructure access confirmed yet. Access request planned for week of 2026-03-09.

2. **How do we get access to new PRDs each quarter?** The PRD is a Google Doc that gets replaced every quarter. The tool needs a way to discover and read each new one automatically — not just the current one we can find manually **(2026-03-10-slide-deck-debrief.md)**
   - **Status: Open — blocking for batch import.**

3. **Does Wovey already have access to Git and Google Drive?** Wovey is already deployed inside Woven and likely has access to many internal systems. If it exposes an API, that's a single integration point that sidesteps every individual access request. Who does Julia point us to? **(FigJam Solution Scope sticky; 2026-03-10-slide-deck-debrief.md)**
   - **Status: Open.** Julia is the contact; worth asking before requesting access separately. The specific repo may be `bev_document` (referenced on FigJam board; needs validation).

4. **Agent authentication patterns:** Does Woven have MCP (Model Context Protocol) server implementations or patterns for AI agent authentication across their tools? **(2026-03-02-2_julia-interview-debrief.md)**
   - **Status: Open.** No evidence in any interview that this has been explored.

### System 3 — Change Management

1. **What polling cadence does Hannah want?** Julia said requirements change "every single day" mid-quarter — but nightly alerts may create noise. Nightly, weekly, or something else? TBD with Hannah based on what's actually manageable for her team **(2026-03-06_solutioning.md; 2026-03-10-slide-deck-debrief.md)**
   - **Status: Open.** Both polling and webhook (PR merge trigger) models are viable; polling is the safer MVP.

2. **What notification channel?** Where does the change digest go — Slack, email, or surfaced directly inside JAMA? Who needs to be notified: Hannah, systems engineers, developers — and at what point in the change? **(2026-03-06_solutioning.md; 2026-03-10-slide-deck-debrief.md)**
    - **Status: Open.** No channel decision made yet.

3. **Does Reqtify's change tracking cover enough that we don't need to build System 3?** Reqtify handles suspicious-link detection and change tracking across 100+ connectors. Before fully scoping System 3, get a demo — if Reqtify already covers this well and isn't expensive, System 3 may narrow significantly **(FigJam Solution Scope sticky; 2026-02-23-1_release-tools-deepdive.md; 2026-03-10-slide-deck-debrief.md)**
    - **Status: Open.** Andrea hasn't deeply investigated Reqtify yet. Clifton (Woven) works on process, JAMA structure, and traceability and was noted as a contact for this tool.

### Important (Should be answered during implementation)

1. **SWRD format consistency and headings:** Do all lane change SWRDs share a consistent format? What are the section headings to extract? **(FigJam Solution Scope sticky — Dan)**
    - **Status: Hypothesis (largely answered, needs validation for non-Git sources).** Nick confirmed a consistent format for Git-sourced SWRDs: header block → reason → description → interface (if applicable) → specification. But some capability groups use JAMA directly with potentially different formats.

2. **What is "agreement" for gating test case creation?** Julia clarified that test cases should only be created after upstream "agreement" on the requirement. What entity grants this approval (CA, product team, behavior team)? What is the mechanism or signal? **(2026-03-05_standup.md)**
    - **Status: Open.**

3. **SBRD and SWRD overlap and deduplication:** If SBRDs and SWRDs specify the same requirement/scenario, how should they be managed together? **(2026-03-05_discovery-sync.md)**
    - **Status: Open.**

4. **Non-Git SWRD sources and field structures:** Some capability groups use JAMA directly or Google Docs as SWRD sources. What are the exact field structures for these non-Git sources? **(2026-03-05_standup.md)**
    - **Status: Open.**

5. **Behavior team maturity and availability:** The in-lane behavior team has no assigned developer yet (as of 2026-03-04). Will developers be available to review/approve SWRDs and test cases? **(2026-03-04-3_nick-user-interview.md)**
    - **Status: Open.**

### Future (Can be deferred to later iterations)

17. **Multi-source consolidation strategy:** Once lane change (Git-sourced) is complete, what is the approach for capability groups using JAMA-native or Google Docs sources? Modular source connectors? Unified import interface? **(2026-03-05_discovery-sync.md)**

18. **Scaling across capability groups:** Will the solution work for in-lane, urban, and other capabilities without modification? Are there expected format differences, team structure differences, or process differences that require specialized handling? **(2026-03-04-1_standup.md)**

19. **Communication loop improvement:** Can the consolidated requirements system inadvertently solve communication barriers by giving teams a single reference point for requirements status? **(identified as potential benefit, 2026-02-26-1_andrea-interview.md)**

---

## 8. Solution Architecture (Conceptual)

The solution is structured as three independent systems in priority order. System 1 delivers value immediately with no infrastructure dependencies. Systems 2 and 3 unlock progressively as Git, Google Drive, and JAMA API access is established.

### Architecture: System 1 — Requirements Creation

**Inputs:** Raw SWRD content (pasted or fetched by System 2)

**Process:**

1. **Structure:** Parse SWRD sections (reason, description, interface, specification) into JAMA-compatible format
2. **Transform (open question):** Optionally run LLM to translate/reformat content — faithful copy-paste vs. intelligent transcription TBD with Hannah
3. **JAMA population:** Programmatically create JAMA requirement entries with source link, version/commit, and timestamp
4. **Test case generation (gated):** Once upstream approval is granted, use LLM to generate initial SWQT structure; output to JAMA for manual curation

**Outputs:** Structured JAMA requirements with source linkage; SWQT drafts for manual review

### Architecture: System 2 — Automated Gathering

**Inputs:** Git link (single SWRD) or PRD Google Doc link (batch)

**Process:**

1. **Single SWRD fetch:** User pastes a Git link; tool fetches content directly from repo and queues for System 1
2. **Batch import from PRD:** Tool reads the quarterly PRD, follows every SWRD link into Git, queues all for System 1 — a full quarter's intake in one action
3. **Auto-triggered batch (ideal):** When PRD moves to "approved" in Google Drive, batch import kicks off automatically

**Outputs:** SWRD content queue for System 1

### Architecture: System 3 — Change Management

**Inputs:** Git repository (same access as System 2)

**Process:**

1. **Polling:** Background job checks Git on a set cadence (TBD with Hannah) for SWRD changes
2. **Diff:** Old vs. new comparison; surfaces what changed by section
3. **Notification:** Change digest to designated stakeholders (channel TBD — Slack, email, or JAMA flag)
4. **Re-trigger:** Changed SWRD can re-queue through System 1 for updated JAMA entries

**Outputs:** Change digests; flagged JAMA requirements; re-queued SWRDs

> **Note:** System 3 scope may narrow depending on what Reqtify already handles. Get a demo before fully speccing this system.

### Problem & Solution Flow (Legacy — pre three-system framing)

**Inputs (Discrete):**
- **PRD (Product Requirements Document):** Quarterly scoped document (Google Doc or Git-hosted) listing which SWRDs will be developed this quarter
- **SWRD repository:** Git-hosted SWRDs in standard format (header, reason, description, interface, specification sections)
- **URD context:** Spreadsheet or Git-hosted parent-level User Requirements Documents for context

**Process:**
1. **Change detection (daily polling):** Query Git repository for lane change SWRDs; compare against previously-processed version
2. **Automated ingestion:** For new or changed SWRDs, parse and validate structure; extract metadata
3. **JAMA population:** Programmatically create or update JAMA requirement entries with full context, source link, timestamp
4. **Notification:** Send digest to Hannah/systems engineers summarizing new and modified SWRDs
5. **Test case generation (gated):** Once upstream approval is granted, use LLM to generate initial SWQT structure; output to JAMA for manual curation
6. **Change propagation:** If a requirement changes mid-quarter, flag affected test cases and notify developers

**Outputs (Discrete):**
- **JAMA requirements:** Structured SWRD entries linked to Git source with version history
- **Change notifications:** Slack/email digests to stakeholders
- **Test case candidates:** SWQT templates in JAMA for manual review/finalization

### High-Level Components

- **Git polling service:** Daily job that checks for SWRD changes
- **Change diff engine:** Compares old vs. new versions; surfaces what changed
- **SWRD parser:** Extracts metadata from SWRD source (Git YAML/markdown or documentation-layer format, depending on available integration point)
- **JAMA API client:** Programmatically creates/updates requirements in JAMA
- **Notification system:** Sends digests to stakeholders (Slack, email)
- **LLM integration:** Calls AI service to generate test case structure
- **Requirement Quality Identifier** *(ideal add-on, post-pilot):* Sits between the Requirements Generator and Test Generator in the pipeline. Before test cases are generated, this component analyzes the structured requirement and surfaces potential quality issues to the user: TBD density, over-prescriptive language written for TSS-4's rules-based system rather than Woven's ML approach, ambiguous scope, or missing interface/specification sections. The user sees the flags and can decide to proceed to test generation, revise the requirement, or override. This prevents low-quality requirements from producing misleading test cases and gives reviewers a systematic early-warning layer. It does not block or reject — it informs.
- **Validation & error handling:** Ensures data quality; surfaces issues for manual review

### Proof-of-Concept Plan

*Decision: Build sandbox POC before full production integration* **(2026-03-06_solutioning.md)**

1. **Mock Git repository:** Create test SWRD files in standard format
2. **Polling script:** Demonstrate change detection without accessing Woven's actual infrastructure
3. **Parsed output:** Show structured SWRD data that would be sent to JAMA
4. **Test case generation:** Mock LLM output showing what SWQTs would look like
5. **Learning:** Test conceptual flow independently of infrastructure constraints

---

## Appendix: Notable Quotes

> **"All I do is copy things into JAMA."**
> — Hannah Lane, unprompted, when introduced as "someone who knows everything" *(2026-03-03-1_hannah-interview.md, ~06:46)*

> **"These test cases were defined mostly with the help of LLMs — I didn't type all of this by hand. It's not 2019 anymore."**
> — Hannah Lane, describing her SWQT workflow *(2026-03-03-1_hannah-interview.md, ~21:00)*

> **"A year ago it got me about 70% of the way there. Now I'd say it gets me about 90%."**
> — Hannah Lane, on LLM-assisted test case generation via Wovey *(2026-03-03-1_hannah-interview.md, ~30:00)*

> **"I haven't done a lot of this recently — I mostly got as far as the review part. But I know that one of my teammates had written a prompt in our internal AI tool, WOVI."**
> — Nick Carcione, when asked to demonstrate test case generation *(2026-03-04-3_nick_user_interview.md, ~25:09)*
> *Note: Nick references using "Hannah's prompt" rather than having his own workflow — illustrating that AI adoption in this team is informal and person-to-person, not systematic.*

> **"My strategy right now... is to just get everything into JAMA. Then I can say, 'We're passing zero out of 7,000 test cases,' which I think will drive action faster than trying to describe the problem in words."**
> — Hannah Lane, on her approach to incomplete requirements *(2026-03-03-1_hannah-interview.md, ~49:00)*

---

## Appendix: Glossary

- **SWRD:** Software Requirements Document. Functional requirements from Toyota, typically at system-of-systems scope. Must be reinterpreted for Woven's internal product (IPA) scope.
- **SWQT:** Software Work/Interface Qualification Test. Test case derived from an SWRD; stored in JAMA with preconditions, postconditions, test steps.
- **JAMA:** Woven's requirements management system. Authoritative record for internal requirements, test cases, and traceability.
- **Git overlay:** (Deprecated concept) Manual intermediate step where metadata was extracted from Git and represented visually before entering JAMA. Being eliminated in favor of automated source-to-JAMA integration.
- **Change Requirement Board (CRB):** Emerging formal process at Woven to handle mid-quarter requirement changes; tracks approvals and impacts.
- **SBRDs:** Scenario-Based Requirements Documents. Performance/behavioral requirements evaluated through on-road/closed-course testing; separate workflow, explicitly out of scope.
- **TBD (To Be Determined):** Placeholder in documentation where behavior/requirement is undefined. High TBD density signals incomplete component documentation.
- **CA (Customer Applications):** Toyota's liaison team (Japan-based) that translates requirements to Woven. Bridge between TMC and Woven.
- **TMC:** Toyota Motor Company. Source of high-level User Requirements Documents (URDs).
- **URD:** User Requirements Document. Parent-level requirement from Toyota; translated into SWRDs by CA and product teams.
- **IPA:** Internal Product (or API). Woven's internal product boundary/scope; SWRDs must be reinterpreted for this scope.
- **Wovey:** Woven's internal LLM tool. Hannah uses it to generate test cases from requirements (~90% effectiveness).
- **PRD:** Product Requirements Document. Quarterly scoped document listing which SWRDs will be developed that quarter.
- **Lane change:** Out-of-lane maneuver where vehicle changes lanes. Most mature Woven capability; pilot starting point.
- **In-lane:** Capability group including lane keeping, vehicle following, cut-ins. Secondary focus after lane change.
- **V-Structure:** Toyota's organizational framework for requirements decomposition (multiple levels of abstraction).
- **TSS-4:** Toyota Safety System 4. Legacy rules-based production system; many outdated requirements from TSS-4 persist in incoming SWRDs despite Woven's ML approach.
- **Rectify:** Third-party traceability tool being evaluated by Woven; may aggregate requirements and enable cross-requirement linkage.
- **MCP (Model Context Protocol):** Standardized way to provision AI agent access to tools/documents. Availability at Woven is unclear.
- **Polling:** Change detection approach where the system periodically queries Git for updates (vs. webhooks that require event-based triggers).
- **Sandbox POC:** Proof-of-concept built with mock data/infrastructure before full production integration.
