# User Interview Synthesis: Julia Pralle
**Date:** March 6, 2026
**Interview Date:** March 2, 2026
**Participant:** Julia Pralle — Requirements Tooling Lead / Product Delivery Manager, Woven Planet
**Duration:** ~58 minutes
**Method:** Remote (Google Meet), screen share (Miro whiteboard)

---

## 🎯 Research Context
**Study Objectives:** Understand the requirements intake and assembly process to identify where tooling could reduce friction (Woven Item 10 / Epic 1).
**Interview Protocol:**
1. High-level overview of software development at Woven
2. Deep dive into product delivery's role in the lifecycle
3. Requirements intake pain points: current state vs. future state
4. Stakeholders and players in the ecosystem

**Focus Areas:** Requirements intake from PRD/CA/TMC, change management, traceability, and the gap between top-down (TMC legacy) and bottom-up (existing software backlog) requirements.

---

## 📋 Executive Summary

- Julia's team (Product Delivery / Systems V&V) is **caught between two broken intake streams**: top-down legacy SWRDs from TMC/CA that are poorly translated and constantly changing, and a bottom-up backlog of software already written with no requirements to match it.
- The **single biggest pain point is intake**: requirements arrive from multiple sources without a unified source of truth, without versioning, and without a notification mechanism when something changes. This prevents Julia from telling her director why deliverables are delayed.
- A **quarterly PRD alignment** was recently negotiated with the product team — a first step toward a single intake document — but it still only links to disparate sources and does not solve change detection.
- Julia's **primary ask** is one auditable, versioned source of requirements where changes surface automatically — not because she wants to automate everything, but because she needs to show traceability, defend timelines, and push back on requirements credibly.

---

## 👤 Participant Profile & Context
**Role:** Product Delivery Manager / Requirements Tooling Lead — responsible for requirements intake, test case creation (SWQTs), traceability reporting, and bridging product/developers
**Experience:** Long tenure at Woven (previously TRI — Toyota Research Institute), one of the few people who carries the full institutional history of how the process evolved
**Organization:** Woven Planet, Systems Verification & Validation team under Product Delivery
**User Segment:** Power user / process owner — sets the strategy for how the intake and assembly process should work, and is accountable for delivering the traceability report to TMC
**Environment:** Manages across Google Docs (PRDs), Confluence, JAMA, Slack, plus CA-managed sources (Git, various documents from Japan)

---

## 💡 Core Insights & Patterns

- **"Intake is crap" — and that's the root cause of all delays**: Julia's team is perpetually behind not because engineers are slow, but because the requirements they receive are vague, constantly changing, and tracked across disconnected systems with no change management.
  - *Evidence*: "The biggest pain point for us is the intake. It's something that we need to have in one source. Where I can show, this is everything that I got."
  - *Implication*: Any tool that does not address intake management (change detection, versioning, unified source) will not solve the core problem, even if it automates downstream steps.

- **Two distinct requirement streams require different handling, but both flow through the same broken intake**:
  - *Top-down* (TMC/CA): legacy SWRDs written for a rules-based vehicle system, copy-pasted and often inapplicable to an ML-based autonomous system
  - *Bottom-up* (existing Woven software): features already built and deployed without formal requirements; requirements need to be authored retroactively
  - *Evidence*: "One is we have a lot of legacy that does not fall so good into what we're trying to do... the other part is, we're also building an urban system that does not have definition at all."
  - *Implication*: The top-down stream is higher priority (Julia: "it's in our control" for bottom-up). Start there.

- **The PRD is a manifesto, not a solution**: The newly agreed-upon quarterly PRD process consolidates intake into one document, but it still just links to the same scattered sources without adding versioning, change alerts, or structured metadata.
  - *Evidence*: "The PRD for us is just a bucket. It's still linked to everything before."
  - *Implication*: A tool that can watch the sources linked from PRDs and surface changes is the right abstraction to build on top of the PRD process — not replace it.

- **Three requirement types all flow through PRD now**: SWRDs (functional, from CA/TMC), SBRDs (scenario-based performance, from product), and TPIDs (closed-course test IDs, from TMC). Each has different format and testing methodology but shares the same broken intake problem.

---

## ⚠️ Pain Points & Current Workarounds

### Current Pain Points

- **No change detection**: When CA updates an SWRD, Julia's team has no way to know. They may spend a week analyzing a requirement that has already been changed at the source.
  > "Things change all the time. They add more stuff, they change requirements. We don't know about anything. We always have to say, oh, we're delayed, we're delayed, and then it's why, and then you have to go back and talk to 10 people."
  - *Impact Level*: High — directly causes sprint delays and prevents accurate status reporting to leadership

- **No single source of truth**: Requirements arrive via Slack file drops, links to various Google Docs, separate JAMA folders per team, CA-managed Git repos, and PDM spreadsheets — with no central registry.
  > "We tried a long, long time to push for within the intake that we get from product, CA, and TMC, to say, just put it on one project, one Java folder. But they have it all in different places, and they will not change that fact."
  - *Impact Level*: High — forces manual reconciliation and prevents automation

- **No approval/pushback mechanism**: Product delivers quarterly targets (requirements) without a negotiation phase. Julia's team can't formally reject or flag problematic requirements until they're already overdue.
  > "We have to meet it in order to get our bonuses... there's no approval phase, but we still have to meet it."
  - *Impact Level*: High — creates accountability mismatch; team is responsible for requirements they had no voice in scoping

- **No change management process for outbound changes**: If Julia's team wants to challenge a threshold or flag that a requirement is untestable, there is no formal change board or review workflow.
  > "If we want to change something, there's no real process for developers or my team to say, hey, this requirement needs to be written differently."
  - *Impact Level*: Medium — secondary to the intake problem but creates risk downstream

### Existing Workarounds

- **Excel/spreadsheet tracking**: Team maintains their own spreadsheet of requirements with manual links to sources.
  - *Limitations*: Links break, data goes stale, no version history, no alerting
  - *Time/Effort Cost*: Significant ongoing maintenance burden

- **PRD as intake hub (new)**: Product now produces quarterly PRDs consolidating requirement links.
  - *Limitations*: Still just a bucket of links; doesn't solve change detection or source-level versioning

- **Slack monitoring**: Team monitors CA Slack channels for new file drops.
  - *Limitations*: Ad hoc, unreliable, no structured notification

### Unmet Needs

- **Change notification**: When any source document linked in the PRD is updated, Julia's team needs to know — automatically, not via Slack.
  - *Desired Outcome*: "I want to be able to show exactly when things within these requirements changed in the intake."

- **Versioned intake record**: An immutable log showing what requirements were in scope at the start of a quarter, with a diff if anything changed mid-quarter.
  - *Desired Outcome*: Be able to show leadership a clear, auditable picture of scope changes to explain delays without having to interview 10 people.

---

## 🎯 Needs, Goals & Motivations

### Functional Requirements

- **Single intake source**: One place that aggregates all requirements (SWRDs, SBRDs, TPIDs) for a given quarter, regardless of where the originals live.
  - *Success Criteria*: "I have one source of truth, one place, this is what I have — that's my list for Q1."

- **Change detection**: Automatic alerting when upstream source documents change between the time they are ingested and the end of the quarter.
  - *Success Criteria*: Immediate notification when a CA doc changes; ability to compare old vs. new version.

- **Versioned PRD support**: The quarterly PRD itself should be versioned, with a clear changelog showing scope changes.

### Success Metrics

- **Traceability report quality**: End-goal artifact is a TMC-facing report showing coverage (which requirements are addressed), test pass/fail rates, and linkage from test cases back to requirements. Everything Julia builds feeds this report.
- **Time to detect change**: Currently days or weeks (if ever). Desired: same day or within hours.

### Motivational Drivers

- **Accountability clarity**: Julia needs to be able to show that delays are caused by intake problems, not her team's execution.
  > "Telling my director why we screw up all the time is because the intake is crap. That's what we need to do."
- **Production deadline pressure**: Vehicle needs to be on public roads by ~2028–2029. Requirements must be traceable for regulatory and liability reasons before production.

---

## 🛠️ Technical & Workflow Requirements

### Session Workflows

- **Quarterly intake cycle**: PRD is released by product; Julia's team reviews, flags problematic requirements, begins translating SWRDs into SWQTs in JAMA.
  - *Duration*: Ongoing throughout the quarter
  - *Frequency*: Quarterly cadence, but with weekly change turbulence
  - *Participants*: Julia's team (product delivery / V&V engineers), product managers, CA team (Japan-based), developers

### Multi-User Coordination

- **CA team (Japan)**: Source of SWRDs and change updates; communicates asynchronously via Slack file drops; time zone gap makes real-time coordination difficult
- **Product team**: Owns PRD and roadmap; assigns quarterly targets; currently does not consult product delivery before setting targets
- **Developers**: Receive test cases (SWQTs) from Julia's team; supposed to implement unit tests based on them; some teams started earlier but process is being rationalized through PRD
- **Julia's V&V team**: Middle layer — receives from CA/product, creates SWQTs, tracks coverage, generates traceability report for TMC

### Technical Constraints

- **Cannot force CA/TMC to change their document storage**: All teams will continue storing things wherever they always have. Tool must adapt to current storage locations, not the other way around.
- **JAMA as destination**: All accepted requirements and test cases should eventually live in JAMA. Tool must output in JAMA-compatible format or write directly to JAMA.
- **Multiple requirement types in same workflow**: SWRDs, SBRDs, and TPIDs each have different structures and testing methodologies but share the intake process.

---

## 💬 Key Quotes & Evidence

### Pain Point Quotes
> "Intake is crap. That's what we need to do."
> *Context: Explaining to Atomic why deliverables are always delayed*
> *Significance: The core problem statement in Julia's own words — not tooling, not testing, but intake*

> "We don't know about anything. We always have to say, oh, we're delayed, we're delayed, and then it's why, and then you have to go back and talk to 10 people."
> *Context: Describing the cascading effect of having no change detection*
> *Significance: Change blindness is the operational manifestation of the intake problem*

> "Yeah, 100%. So we will get a new document that lists a list with all the requirements, but it still lists everything, you know, it's just linkage."
> *Context: Responding to Dan's question about whether PRD solves the change detection problem*
> *Significance: Even with the new PRD process, the core problem (change detection) remains unsolved*

### Need/Goal Quotes
> "I want to be able to show exactly when things within these requirements changed in the intake."
> *Context: Describing the ideal tool*
> *Significance: The most specific, actionable product requirement Julia articulated*

> "Just one document I have to go to, basically, and that makes it way easier."
> *Context: Describing the minimum viable improvement*
> *Significance: Single source of truth is the baseline, not the ceiling*

### Insight Quotes
> "We're responsible to deliver, in the end, the overall pass rate, the implementation of measuring it, plus passing it. But we're not defining any of it."
> *Context: Describing the accountability/authority mismatch*
> *Significance: Julia's team owns the outcome but has no power over inputs — a systemic org problem the tool cannot fully solve but can make visible*

---

## 🎯 Design & Product Implications

### High Priority Recommendations

- **Build change detection into whatever source-watching mechanism we create**: This is Julia's #1 request and the pain point that cascades into all other problems.
  - *Evidence*: Change blindness causes delays, credibility problems, and inability to defend the team's performance
  - *Impact*: High — would immediately reduce the "10 people interview" overhead and allow proactive scope management
  - *Implementation*: Poll or webhook against CA-managed source documents; surface diffs in a unified change log
  - *Success Measure*: Julia can pull up a timestamped log of what changed and when, without asking anyone

- **Design around the PRD as the intake hub**: The quarterly PRD is now the agreed-upon entry point for all requirement types. Tool should treat the PRD as the source of record for "what we're working on this quarter" and track all linked sources from there.
  - *Evidence*: "We will get the PRD as IPA completely — that's the intake we get from product."
  - *Impact*: High — aligns with the process change already in progress; doesn't require additional org alignment
  - *Implementation*: Parse PRD to extract links to SWRDs/SBRDs/TPIDs; register those sources for change monitoring

### Medium Priority Considerations

- **Versioning the PRD itself**: Product is not currently versioning PRDs. Tool could maintain its own snapshot of each PRD at the time of intake, enabling comparison when scope changes.
  - *Evidence*: "We also ask for versioning. We don't have that as well."
  - *Timeline*: Should be addressed alongside source change detection

- **Triage/filtering support for SWRDs**: Many incoming SWRDs are inapplicable to an ML system (written for rules-based TSS-4). A lightweight classification or flagging step could reduce review time.
  - *Evidence*: "90% of the stuff we get, it's like, I don't know how to do this."
  - *Dependencies*: Requires a clear definition of what "applicable" means for Woven's ML context

### Future Exploration Areas

- **Change management / pushback workflow**: Julia described wanting a formal change request board. This may be a tool feature (JAMA review workflow) or a process change. Worth exploring after intake is stabilized.
- **Bottom-up backlog (component-level requirements)**: Lower priority than top-down intake per Julia, but still a major volume of work. Better understood after talking to Andrea (who owns this work).

### Technical Considerations

- **Cannot change source document locations**: Build watchers/connectors to existing sources rather than migrating content.
- **JAMA as output system**: Understand JAMA's API and import formats before committing to an ingestion architecture.
- **Japanese-language documents**: Some source documents are in Japanese with poor translations. LLM-assisted translation (already used by Hannah) is a viable pattern.

---

## 📝 Additional Context & Follow-Up

### Organizational Context

- Julia's team is in a process transition — the PRD workflow is new (post-workshop, early 2026) and not fully established. Some development teams still have direct CA relationships from the old process.
- The production deadline (~2028–2029) creates urgency but also risk: if intake doesn't improve quickly, the requirements backlog will be too large to clear.
- Woven's org is highly distributed (US + Japan), creating communication lag that amplifies every intake problem.

### Cross-Interview Connections

- **Hannah Lane**: Shares Julia's frustration with change detection; has already built LLM tooling for SWQT drafting; is the most advanced practitioner of the intake/assembly process on Julia's team
- **Nick Carcione**: More skeptical of working through problematic SWRDs; tends to halt rather than proceed; represents a different adoption posture that tooling needs to accommodate
- **Andrea Zotelli**: Owns the bottom-up backlog (component-level requirements); newer to the role and still discovering what she needs; dependent on Julia for institutional context

### Follow-Up Questions

- What does the current PRD format look like in detail? Can we get an example?
- What APIs or integrations does JAMA support for bulk ingestion?
- Can we get access to one of the CA-managed SWRD sources to understand the change frequency?

---

## 🔖 Analysis Tags

**User Segment:** Process owner / manager — sets strategy, accountable for TMC deliverables
**Experience Level:** Expert — longest tenure, carries institutional history
**Organization Type:** Large enterprise (Toyota autonomous vehicle subsidiary), matrix org structure
**Use Case:** Requirements intake management, traceability reporting, stakeholder alignment
**Key Themes:** Intake chaos, change detection, single source of truth, accountability mismatch, production urgency
**Pain Points:** No change detection, no single source of truth, no formal pushback mechanism
**Technical Sophistication:** High process sophistication; moderate technical depth; relies on team for tool implementation
