# User Interview Synthesis: Andrea Zotelli
**Date:** March 6, 2026
**Interview Date:** February 26, 2026
**Participant:** Andrea Zotelli — Systems Requirements Engineer (Component-Level), Woven Planet
**Duration:** ~66 minutes
**Method:** Remote (Google Meet), Miro whiteboard walkthrough

---

## 🎯 Research Context
**Study Objectives:** Understand the requirements backlog problem — specifically the bottom-up work of writing component-level requirements for software that already exists without formal documentation (Woven Item 10 / Epic 1).
**Interview Protocol:**
1. Role and day-to-day responsibilities at Woven
2. High-level V-model walkthrough (Miro whiteboard)
3. Current state: how requirements are being gathered and written today
4. Future state: what the process should look like once backlog is cleared
5. Magic wand question: what would you immediately make better?

**Focus Areas:** Component-level requirements backlog, information discovery process, sources of truth, TBD parameters, stakeholder network, production deadline urgency.

---

## 📋 Executive Summary

- Andrea joined in October 2025 and was **hired specifically to address the requirements backlog** — software already deployed in test vehicles that has no formal component-level requirements documentation.
- Her daily reality is **information archaeology**: piecing together what the software actually does by reviewing outdated slide decks, spreadsheets, and presentations, then reaching out to developers to fill in TBDs — many of which even the developers cannot answer.
- The backlog is **massive and growing**: Andrea has no consolidated checklist of what needs to be documented, the sources are scattered and stale, and the software continues to evolve while she writes requirements for what it was doing previously.
- Her **magic wand is a single, consolidated source of information**: not necessarily automation, but a structured starting point so she isn't re-discovering the same components from scratch each time. The information problem precedes any automation problem.

---

## 👤 Participant Profile & Context
**Role:** Systems Requirements Engineer — writes component-level requirements (SCRDs) and SWRD-based test cases for lane change, merging, lane keeping, and related capabilities
**Experience:** ~4 months at Woven (joined October 2025); background in systems engineering; strong requirements methodology orientation; previously worked in environments with proper requirements-first processes
**Organization:** Woven Planet, Product Delivery / Systems V&V team under Julia Pralle
**User Segment:** Primary — the practitioner doing the bottom-up requirements backlog work; her pain points are the clearest window into the scale and nature of the documentation gap
**Environment:** Remote; tools are Google Docs/Slides (source documentation), Google Sheets (capabilities lists, scenarios), JAMA (destination), Slack (developer outreach), WOVI (limited use so far)

---

## 💡 Core Insights & Patterns

- **Working backwards from deployed software**: The conventional requirements process (define requirements → build software) is inverted. Andrea is reverse-engineering requirements from software that is already running in test vehicles. She described this without frustration as a deliberate starting condition — she was hired knowing this was the state.
  - *Evidence*: "The work that I have been doing is trying to put the requirements to represent what the software is doing... instead of me dictating what the software should do."
  - *Implication*: Any tool that assumes requirements precede code will not serve Andrea's workflow. The tool must support the reverse flow: code → infer requirements → formalize in JAMA.

- **The TBD problem compounds everything**: Source documents contain TBD (to be determined) parameters, scenarios, and thresholds — and often the people who wrote those documents no longer know what the TBDs should be either. This makes even the "read the document" step insufficient.
  - *Evidence*: "There are a lot of TBDs, and I need to reach out to people to know what that TBD is... but they don't even know what those TBDs are."
  - *Implication*: A tool that surfaces/aggregates documentation will unearth TBDs, not resolve them. Value still exists in making TBDs visible and structured, but the tool cannot eliminate the human resolution step.

- **Information is the first bottleneck, not authoring**: Andrea's constraint is not that writing requirements is slow — it's that she doesn't know what she needs to write, where to find the information, or who to ask. The authoring step is the smaller problem once information is in hand.
  - *Evidence*: "I wanted to have the information. That's the hardest part... a source, one source where I could go and see what I need to write about."
  - *Implication*: Tooling that helps discover and consolidate information (a structured capability inventory + document index) delivers more value than tooling that helps write faster.

- **Cultural resistance to requirements in engineering teams**: Andrea encountered some developer resistance to slowing down for requirements. She holds a systems engineering mindset but acknowledges she can't halt software development while catching up.
  - *Evidence*: "You cannot slow down the software development, because if you don't have them — yeah, I agree, but I think we would be building software faster and more efficiently if we had the requirements to begin with."
  - *Implication*: Any tool that creates friction for developers will face adoption resistance. The tool should either be developer-invisible or reduce developer workload (e.g., reduce the number of questions Andrea needs to ask them).

- **Production deadline creates hard urgency**: A 2028–2029 production target requires having formal requirements and traceability in place well before then. Andrea is acutely aware that the current pace of backlog reduction is likely insufficient given the volume.
  - *Evidence*: "My only concern is that it ends up taking way more time than it should, and we do have a deadline."
  - *Implication*: Speed of information discovery and requirements authoring is a strategic constraint, not just a quality-of-life issue.

---

## ⚠️ Pain Points & Current Workarounds

### Current Pain Points

- **No consolidated capability inventory**: Andrea does not have a master list of all components and capabilities that need requirements written. She discovers them incrementally.
  > "I don't have a list, like a consolidated list — you need to write this, this, for example, oh, lane change, you're gonna need to write for this scenario..."
  - *Context*: Routine discovery problem at the start of every new component effort
  - *Impact Level*: High — creates a treadmill effect where she never knows how far she is from done

- **Scattered, stale documentation**: Source materials are spread across Google Slides, spreadsheets, Confluence, and presentations from 2024 — often outdated because the software has continued to evolve.
  > "A lot of information. But it's not written in the formal way that you do requirements. There's some document, there's some presentation, there's some slides, there's scenarios."
  - *Impact Level*: High — every component requires a new discovery cycle

- **TBD parameters with no resolution path**: Even after finding a source document, many key parameters are marked TBD. The people who wrote the documents often cannot fill them in.
  > "Even in those documents that have TBD parameters... I need to reach out to the software people to know what that TBD is, and sometimes they don't even know."
  - *Impact Level*: High — blocks completion of individual requirements; stalls week-long efforts

- **Time zone communication gap**: Key stakeholders (CA team, TMC) are in Japan, making synchronous communication extremely difficult. Async channels (Slack, Google Doc comments) often go unanswered.
  > "I think I want to start working a few hours at night to be able to talk to them, because just Slack doesn't work. Comments on documents — the comments stay there forever, nobody replies."
  - *Impact Level*: High — blocks TBD resolution and requirements validation for upstream sources

- **No investigative pattern or playbook**: Andrea has no repeatable process for information discovery. Every new component starts from zero.
  > "No, because I don't even know where the things are... There's a lot of lack of clarity, you know."
  - *Impact Level*: Medium — slows ramp-up on each new component; creates dependence on tribal knowledge (Hannah, Julia)

### Existing Workarounds

- **Ask Hannah**: When Andrea hits a knowledge wall, she asks Hannah, who has more institutional context and can point to people or documents.
  - *Limitations*: Creates dependency on one person; does not scale; Hannah's time is finite
  - *Time/Effort Cost*: Indirect — delays Andrea's progress when Hannah is unavailable

- **Developer outreach for TBDs**: Andrea contacts software developers directly via Slack to clarify what's actually implemented.
  - *Limitations*: Asynchronous; developers are busy; they sometimes don't know either; creates perception of slowing down development
  - *Time/Effort Cost*: Each TBD resolution can add days to a requirement

- **Component-by-component iteration**: Andrea picks one component (e.g., lane change) and works through all available documentation before moving to the next.
  - *Limitations*: No visibility into which components have fewer TBDs or better documentation, making prioritization arbitrary

### Unmet Needs

- **A structured capability + component inventory**: A master list of all capabilities Woven needs to document, with what's known, what's TBD, and what sources exist for each.
  - *Desired Outcome*: "A source of information where I should have everything that I need to put in the requirements."

- **Prioritization signal**: Some way to know which components have better documentation coverage (fewer TBDs) so Andrea can make faster progress on those first.
  - *Desired Outcome*: Pick the "10% TBD" component before the "90% TBD" one; build momentum and demonstrate progress.

---

## 🎯 Needs, Goals & Motivations

### Functional Requirements

- **Information aggregation**: A consolidated index of what documentation exists for each capability/component, where it lives, and how current it is.
  - *Success Criteria*: Andrea can look up "lane keeping" and find all known source documents with metadata on freshness and TBD density

- **TBD visibility**: A structured way to track TBD parameters across requirements — who is responsible for resolving them, current status, and which ones are blocking completion.
  - *Success Criteria*: Andrea can show Julia a clear count of unresolved TBDs per component and the resolution path for each

- **Review and approval workflow in JAMA**: Once requirements are written, Andrea needs a structured review cycle (product delivery peers, product team, developers) to formally approve and close requirements.
  - *Success Criteria*: Requirements can be marked as reviewed and approved; no ambiguity about whether a requirement is "done"

### Success Metrics

- **Component coverage rate**: What percentage of known components have at least one approved requirement in JAMA. Currently very low.
- **TBD resolution rate**: Of all TBD parameters found in source documentation, what percentage have been resolved and formalized.
- **Time-to-approved per requirement**: Currently measured in weeks for a single component. Desired: meaningful compression toward days.

### Motivational Drivers

- **Production deadline**: The ~2029 production target creates real urgency. Andrea joined knowing the backlog was large, but the size and complexity has become clearer as she works through it.
  > "My only concern is that it ends up taking way more time than it should, and we do have a deadline."
- **Systems engineering pride**: Andrea is an experienced systems engineer who believes in requirements-first development. She is motivated to do it right, not just fast.
  > "I like systems engineering, and I like to do it the proper way."
- **Regulatory and safety imperative**: Andrea understands that production vehicles require formal requirements for liability and regulatory reasons. Every week of delay on the backlog is a week closer to an impossible crunch.
  > "If any issue happened on the street, like an accident, the first thing investigators ask is: where are the requirements?"

---

## 🛠️ Technical & Workflow Requirements

### Session Workflows

- **Per-component discovery cycle** (current):
  1. Identify component to work on (ad hoc, no priority signal)
  2. Search across Google Drive, Confluence, Slack for any documentation related to that component
  3. Review each document; extract what the software should do
  4. Identify TBD parameters; reach out to developers or Hannah for resolution
  5. Write component-level requirements in JAMA
  6. Mark requirements as pending review; await review cycle (not yet formalized)

- **Duration**: Weeks per component (currently blocked by TBDs)
- **Frequency**: Continuous; working through backlog sequentially

### Multi-User Coordination

- **Developers (e.g., Sho for lane change)**: Primary source for clarifying what the software actually does; Andrea reaches out via Slack
- **Hannah Lane**: Go-to for institutional knowledge and document pointers; has ~1 year more context than Andrea
- **Julia Pralle**: Manager; ultimate source of truth for process direction and priority
- **Clifton (JAMA process)**: Colleague supporting JAMA structure setup and traceability tool evaluation (Rectify demo pending)
- **CA team / Japan developers**: Needed for resolving upstream TBDs; nearly inaccessible due to time zone gap
- **Wei (PDM staff engineer)**: Contact for product management context on requirements

### Technical Constraints

- **JAMA structure still being defined**: Andrea is actively building out the JAMA project structure for component-level requirements — templates, fields, and folder hierarchies are not finalized
- **No component-level architecture exists yet**: Andrea cannot trace component requirements to system-level SWRDs until Nate's architecture work is complete
- **Source documents are not version-controlled**: Google Slides and Sheets used as source documents have no formal version history; changes are not tracked
- **Multi-company, multi-language environment**: Woven + Denso + TMC (Japan) are all contributing; Japanese-language documentation and translation ambiguity add friction

---

## 💬 Key Quotes & Evidence

### Pain Point Quotes
> "I wanted to have the information. That's the hardest part... a source, one source where I could go and see what I need to write about."
> *Context: Magic wand question — describing her primary wish*
> *Significance: The core problem is information access, not authoring velocity*

> "There are a lot of TBDs, and I need to reach out to people to know what that TBD is, and sometimes they don't even know."
> *Context: Describing the lane change component effort*
> *Significance: TBDs are not just documentation gaps — they represent genuinely unresolved design decisions*

> "The information is scattered, like, it's everywhere, and I have to keep finding documents, and many times you get a spreadsheet that has a lot of links to tons of other documents, and oh my goodness, it's so confusing."
> *Context: Describing daily discovery experience*
> *Significance: Direct evidence that a structured information index would have immediate impact*

### Need/Goal Quotes
> "As long as we are putting some requirements there, it's... we're progressing."
> *Context: Responding to whether she has to work in a specific order*
> *Significance: Andrea is pragmatic about progress; no hard ordering constraint means prioritization signal is possible*

> "We need to be able to expedite this."
> *Context: Discussing the production deadline*
> *Significance: Speed is a strategic requirement, not just a nice-to-have*

### Insight Quotes
> "You cannot have a problem... that's why the ARIN team, they are farther ahead, because they already have the software deployed in the vehicles that's going to the market, so they have the requirements."
> *Context: Explaining why Woven needs requirements now*
> *Significance: The ARIN team (Arene platform) is the positive benchmark — they have requirements because they went to market. Woven needs to replicate that foundation for autonomous driving.*

> "I think we would be building software faster and more efficiently if we had the requirements to begin with."
> *Context: Responding to developer resistance to requirements process*
> *Significance: Andrea holds a systems engineering worldview that is under cultural pressure; she needs tooling that validates this approach rather than creating more friction*

### Notable Examples & Stories
- **Lane change component**: Andrea worked for weeks gathering information from a 2024 presentation and spreadsheet, only to discover many parameters were still TBD — and the developers she reached out to (including Sho) couldn't fill them in either. This is her most concrete current example of the TBD problem.
- **ARIN team benchmarking**: Andrea proactively reached out to the ARIN (Arene) team in Japan to understand their JAMA structure, trying to avoid reinventing the wheel. This shows a disposition toward knowledge-sharing and standardization.

---

## 🎯 Design & Product Implications

### High Priority Recommendations

- **Capability/component inventory as the foundation**: Before any automation or authoring tooling, create a structured inventory of all capabilities Woven needs to document, with known source documents, TBD density, and staleness metadata.
  - *Evidence*: Andrea's magic wand answer is explicitly a structured source list, not faster authoring
  - *Impact*: Eliminates the "I don't even know what I need to do" problem; enables prioritization; creates denominator for progress measurement
  - *Implementation*: Could start as a structured spreadsheet or JAMA folder scaffold; AI could help catalog known sources from Drive/Confluence
  - *Success Measure*: Andrea can pull up a complete list of components and their documentation status without asking anyone

- **TBD tracking and resolution workflow**: Surface TBD parameters as structured items with ownership, status, and resolution path — not buried text in documents.
  - *Evidence*: TBDs are the #1 blocker for individual requirement completion; some are unresolvable by Andrea alone
  - *Impact*: Reduces week-long stalls on single components; creates visibility into what's blocked vs. what can progress
  - *Implementation*: Annotate TBDs during document ingestion; create a TBD tracker linked to JAMA requirements

### Medium Priority Considerations

- **Document staleness signals**: When Andrea is working from a 2024 slide deck, she needs to know if the underlying software has changed since that document was created.
  - *Evidence*: "They make changes sometimes in the software, and that's not reflected in the documentation I'm using."
  - *Timeline*: Requires some integration with development activity signals (Git commits, changelog entries)
  - *Dependencies*: Access to development team repositories or activity logs

- **Prioritization assist**: Some lightweight signal (TBD count, documentation coverage) to help Andrea decide which component to work on next.
  - *Evidence*: No ordering constraint exists; prioritization by "fewest blockers" would improve velocity
  - *Timeline*: Could be implemented as metadata in the capability inventory

### Future Exploration Areas

- **Bottom-up architecture-to-requirement inference**: Once Nate's component architecture is defined, explore whether code analysis or documentation parsing can suggest initial requirement drafts for components with no existing documentation. This is higher-effort but directly addresses Andrea's "writing from scratch" problem.
- **Async Japan communication infrastructure**: The time zone gap with CA/TMC is a structural blocker for TBD resolution. Better async tooling (structured question routing, SLA tracking) might help, but this is largely a process/org concern.

### Technical Considerations

- **JAMA structure is still in flux**: Any tooling that writes to JAMA should be flexible — Andrea's template and folder structure will change as she learns what fields are needed.
- **Arene team as reference**: The ARIN/Arene team in Japan has a functioning JAMA structure. Before building from scratch, get access to their schema as a starting point.
- **Google Drive + Confluence as primary source repositories**: Tool needs connectors or indexing for both. No GitHub-based source documentation appears to be primary for Andrea's workflow (unlike Nick's SWRD review).

---

## 📝 Additional Context & Follow-Up

### Organizational Context

- Andrea is working in an area with a lot of institutional knowledge still in people's heads (Julia, long-tenured engineers) rather than written down. Her job requires continuous knowledge transfer from people to documents.
- The developer culture predates the requirements culture. There is soft resistance that manifests as "we can't slow down" — though this appears to be improving as production pressure increases.
- The Woven + Denso + TMC multi-company structure adds translation, coordination, and access friction that amplifies every documentation problem.

### Cross-Interview Connections

- **Hannah Lane**: More experienced in the same role; has developed LLM-assisted workflows Andrea has not yet adopted; useful model for Andrea's future state
- **Julia Pralle**: Provides strategic direction and institutional memory that Andrea relies on heavily; Julia has more clarity on what the backlog scope actually is
- **Nick Carcione**: Parallel role but working top-down (SWRD intake) rather than bottom-up (component backlog); their work will eventually need to converge in JAMA
- **Nate Papes (AO)**: His component architecture work is a prerequisite for Andrea being able to create traceable component-to-system linkages

### Follow-Up Questions

- Can Andrea share an example of a completed requirement she's written, along with the source documents she used? (Gus noted this as a follow-up action during the debrief.)
- What does the ARIN team's JAMA structure look like? Can we get access to it or a summary?
- Who is the definitive owner of the capabilities list (if one exists)? Where does it live?
- Is there any way to estimate the total number of components that need requirements written?

---

## 🔖 Analysis Tags

**User Segment:** Practitioner (bottom-up backlog) — writes component-level requirements from existing software; most affected by information access problems
**Experience Level:** Intermediate systems engineer; new to Woven (4 months); deep requirements methodology background
**Organization Type:** Large enterprise (Toyota autonomous vehicle subsidiary), multi-company (Woven + Denso + TMC)
**Use Case:** Component-level requirements authoring, information discovery, TBD resolution, JAMA structure setup
**Key Themes:** Information archaeology, TBD problem, inverted V-model, capability inventory gap, production deadline urgency, time zone communication barrier
**Pain Points:** No consolidated capability inventory, scattered stale documentation, unresolvable TBDs, async Japan communication, no review process yet
**Technical Sophistication:** Strong systems engineering methodology; moderate JAMA experience; building LLM/WOVI familiarity; pragmatic about tooling
