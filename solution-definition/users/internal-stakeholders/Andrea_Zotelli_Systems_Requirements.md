# Andrea Zotelli

> **Discovery-Refined Profile** · Last Updated: 2026-03-06
> Source interviews: Andrea interview debrief (2026-02-26), User Interview (2026-02-26)
> Change level: **Significant** — profile substantially upgraded from pre-interview debrief baseline.

## 1. Basic Information

- **Role/Title**: Systems Requirements Engineer — Component-Level Requirements (SCRDs) and SWRD-based test cases
- **Department**: Product Delivery / Systems Verification & Validation
- **Location**: Not specified (global; recurring schedule conflicts Mon/Thu 1–2 p.m. — avoid standups in that window)
- **Tenure**: Started October 2025 (~4 months as of March 2026) — **hired specifically to address the requirements backlog** ➕
- **Reports To**: Julia Pralle

## 2. Role Summary

Andrea's work is the **inverse** of Hannah and Nick's. Where Hannah and Nick work top-down (CA/TMC SWRDs → JAMA), Andrea works bottom-up: software has already been deployed in test vehicles at Woven, and her job is to reverse-engineer formal component-level requirements (SCRDs) to represent what that software actually does.

She describes this as **information archaeology**: piecing together what the system does by reviewing 2024 slide decks, spreadsheets, scenario documents, and presentations — then reaching out to developers to fill in TBDs that are often unknown even to the people who wrote the original documents.

> *"The work that I have been doing is trying to put the requirements to represent what the software is doing... instead of me dictating what the software should do."*

Her lane change and related capability documentation is her current primary focus. She also assists with SWRD-based SWQTs (test cases) where her function groups overlap with Hannah and Nick's top-down intake.

## 3. Project Involvement

- **Stake in Project**: Direct — her backlog work is the "bottom-up" stream that complements the top-down SWRD intake. The requirements tooling must serve both.
- **Level of Influence**: High on execution (JAMA structure, format, transfer logic); medium on scope. She is the hands-on implementor for the component-level JAMA project.
- **Decision Authority**: JAMA structure and template design for component-level requirements; access to JAMA and source documents; "who to ask" for specific component information. Julia approves strategy; Andrea defines how to execute it.
- **Time Commitment**: High — daily standups, overview sessions, ad hoc Slack for access/discovery questions.

## 4. Goals and Success Criteria

### Primary Goal: A Consolidated Source of Information ✓
Andrea's magic wand answer is not faster authoring — it's a structured starting point so she isn't re-discovering the same components from scratch each time.

> *"I wanted to have the information. That's the hardest part... a source, one source where I could go and see what I need to write about."*

- **Success Criteria**: Can look up any capability/component and find a structured list of what documentation exists, where it lives, how current it is, and what's still TBD.

### Goal 2: Capability / Component Inventory ➕
A master list of all capabilities and components that need requirements written, with known documentation sources and TBD density — so Andrea can know what the "denominator" is.

> *"I don't have a list, like a consolidated list — you need to write this, this, for example, oh, lane change, you're gonna need to write for this scenario..."*

- **Success Criteria**: Complete inventory of components with documentation status, enabling prioritization by "fewest blockers" rather than arbitrary selection.

### Goal 3: TBD Visibility and Resolution Tracking ➕
Surface TBD parameters as structured items with ownership and resolution path — not buried text in documents.

- **Success Criteria**: Can show Julia a count of unresolved TBDs per component and the resolution path for each.

### Goal 4: Review and Approval Workflow in JAMA ✓
Once requirements are written, Andrea needs a structured review cycle (peer review, product, developers) to formally approve and close requirements. This workflow doesn't exist yet.

- **Success Criteria**: Requirements can be marked as reviewed and approved; no ambiguity about whether a requirement is "done."
- **Production deadline urgency**: *"My only concern is that it ends up taking way more time than it should, and we do have a deadline."* (~2028–2029 production target) ➕

## 5. Concerns and Pain Points

### #1 — No Consolidated Capability Inventory (Biggest Issue) ➕
Andrea has no master list of all components and capabilities that need requirements written. She discovers them incrementally as she works — creating a treadmill effect where she never knows how far she is from done.

> *"I don't have a list, like a consolidated list — you need to write this, this, for example, oh, lane change, you're gonna need to write for this scenario..."*

- *Impact*: Arbitrary prioritization; no progress measurement; impossible to estimate backlog size.
- *Current workaround*: Component-by-component iteration with no prioritization signal.

### #2 — Scattered, Stale Documentation ✓
Source materials are spread across Google Slides, spreadsheets, Confluence, and presentations from 2024 — often outdated because the software has continued to evolve since the documents were written.

> *"The information is scattered, like, it's everywhere, and I have to keep finding documents, and many times you get a spreadsheet that has a lot of links to tons of other documents, and oh my goodness, it's so confusing."*

- *Impact*: Every component requires a new discovery cycle from scratch; Andrea never knows when she's found all the relevant sources.

### #3 — TBD Parameters With No Resolution Path ✓
Source documents contain TBD parameters and scenarios — and often the developers who wrote those documents cannot fill them in either. This blocks completion of individual requirements for weeks.

> *"There are a lot of TBDs, and I need to reach out to people to know what that TBD is, and sometimes they don't even know."*

- *Specific example*: Worked for weeks on lane change component documentation from a 2024 presentation and spreadsheet — many parameters still TBD; the developer (Sho) couldn't resolve them either.
- *Impact*: Single TBDs can block a component for days or weeks; no visibility into which TBDs are resolvable vs. structurally unknown.

### #4 — Time Zone Communication Gap With Japan Teams ➕
Key upstream stakeholders (CA team, TMC) are in Japan. Synchronous communication is nearly impossible, and async channels (Slack, Google Doc comments) often go unanswered for days.

> *"I think I want to start working a few hours at night to be able to talk to them, because just Slack doesn't work. Comments on documents — the comments stay there forever, nobody replies."*

- *Impact*: TBD resolution from upstream sources is effectively blocked without a structured async process.

### #5 — No Repeatable Discovery Playbook ➕
Andrea has no structured process for information discovery. Every new component starts from scratch — searching Google Drive, Confluence, Slack for anything relevant.

- *Current workaround*: Asks Hannah when she hits a knowledge wall. This creates a dependency on Hannah's availability and institutional memory.

### #6 — JAMA Structure Still in Flux ✓
Andrea is actively designing the JAMA project structure for component-level requirements (templates, fields, folder hierarchies) — at the same time she is trying to populate it. She has reached out to the ARIN/Arene team in Japan as a reference implementation. ➕

## 6. Workflow (Current State) ➕

```text
Per-component discovery cycle (current — weeks per component):

  Identify component to work on (ad hoc; no priority signal)
      ↓
  Search Google Drive, Confluence, Slack for any documentation
  (slide decks, spreadsheets, presentations, scenario docs)
      ↓
  Review each document; extract what the software should do
      ↓
  Identify TBD parameters → reach out to developers via Slack
  (Often async; developers in Japan; TBDs sometimes unresolvable)
      ↓
  Write component-level requirements (SCRDs) in JAMA
      ↓
  Mark as pending review → await review cycle (not yet formalized)
```

**Key tools**: Google Drive/Slides/Sheets (source documents), Confluence (additional documentation), JAMA (destination), Slack (developer outreach), WOVI (building familiarity; not yet central to her workflow)

**Duration**: Weeks per component for the first pass; accelerates with better information access.

## 7. Jobs to Be Done ➕

**Functional Jobs:**
- Reverse-engineer formal component requirements from deployed software that has no formal documentation
- Track and resolve TBD parameters across all in-scope components
- Build and maintain the JAMA project structure for component-level requirements

**Social Jobs:**
- Demonstrate credible systems engineering practice to Julia's team and upstream stakeholders
- Establish that formal requirements are worth the investment (countering developer resistance)

**Emotional Jobs:**
- Know what the full scope of the backlog is — have a sense of the denominator, not just endless discovery
- Feel like she's making measurable progress toward a known goal

## 8. Communication Preferences

- **Preferred Channels**: Slack (very responsive), meetings (standups, overviews); first point of contact for access and links
- **Frequency**: Daily standups when possible; ad hoc as needed for permissions and format questions
- **Detail Level**: Can go deep on Git vs. JAMA format and transfer; needs concrete examples ("show me a good example of a requirement you've written")
- **Best Times**: Avoid Mon/Thu 1–2 p.m.; standups moved to 10 a.m. Julia's time

## 9. Key Relationships

- **Julia Pralle**: Manager; ultimate source of truth for process direction and priority. Andrea depends on Julia for institutional context she doesn't yet have.
- **Hannah Lane**: Go-to for institutional knowledge and document pointers. Andrea's primary internal resource when she hits knowledge walls. This dependency will not scale if Hannah's capacity is constrained.
- **Nick Carcione**: Parallel role but working top-down (SWRD intake) rather than bottom-up (component backlog). Their work converges in JAMA.
- **Sho (Developer, lane change)**: Primary developer contact for resolving lane change TBDs; Andrea's main technical source for current software behavior.
- **Clifton (JAMA Process)**: Colleague supporting JAMA structure setup and traceability tool evaluation (Reqtify demo pending). ➕
- **Wei (PDM Staff Engineer)**: Contact for product management context on requirements. ➕
- **CA Team / Japan developers**: Needed for upstream TBD resolution; nearly inaccessible due to time zone gap.
- **ARIN/Arene team (Japan)**: Andrea proactively reached out to get their JAMA structure as a reference implementation — shows disposition toward standardization over reinvention. ➕

## 10. Engagement Strategy

- Treat her as the primary SME for JAMA structure, component-level format, and "how requirements get built from scratch."
- **Follow up on the capabilities spreadsheet / component inventory** — establishing even a rough checklist of what needs to be documented would unblock her immediately and inform AO's scope understanding.
- Help her get access to documents she can't find; if AO has visibility into sources she doesn't, share them.
- Ask for an example of a completed requirement she's written, along with the source documents she used — this is the most concrete thing AO can get from her.
- Avoid overloading her; any tooling that reduces information-hunting overhead will directly reduce her most painful work.
- Be mindful that her JAMA structure is still evolving — don't build tooling that hard-codes a template she's about to change.

## 11. Key Quotes

> *"I wanted to have the information. That's the hardest part... a source, one source where I could go and see what I need to write about."*

> *"There are a lot of TBDs, and I need to reach out to people to know what that TBD is, and sometimes they don't even know."*

> *"The information is scattered, like, it's everywhere, and I have to keep finding documents, and many times you get a spreadsheet that has a lot of links to tons of other documents, and oh my goodness, it's so confusing."*

> *"My only concern is that it ends up taking way more time than it should, and we do have a deadline."*

> *"I think we would be building software faster and more efficiently if we had the requirements to begin with."*

> *"If any issue happened on the street, like an accident, the first thing investigators ask is: where are the requirements?"*

## 12. Notes and Context

- Andrea was hired into a situation she was aware of — the backlog was known and large. What became clearer as she started is the *depth* of the information problem (TBDs unresolvable even by original authors).
- The developer culture predates the requirements culture; there is soft resistance that manifests as "we can't slow down." Andrea holds her ground on systems engineering practice but is pragmatic about it.
- The ARIN/Arene team (Arene platform) is the positive benchmark she references — they went to market and therefore have formal requirements. Woven needs to replicate that foundation.
- Andrea is building JAMA from scratch for component-level work. She needs a flexible tool, not one that locks her into an unfinished structure.
- A tool that helps discover and consolidate information delivers more immediate value to Andrea than a tool that helps write faster — the bottleneck is *information*, not authoring velocity.

*Source: Project Details, Release tools deep-dive (2026-02-23), Andrea interview debrief (2026-02-26), User Interview synthesis (2026-02-26). Profile substantially upgraded from pre-interview debrief baseline.*
