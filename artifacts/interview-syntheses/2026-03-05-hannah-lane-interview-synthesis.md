# User Interview Synthesis: Hannah Lane
**Date:** March 5, 2026
**Interview Date:** March 3, 2026
**Participant:** Hannah Lane — Systems & Validation Engineer, Woven Planet
**Duration:** ~61 minutes
**Method:** Remote (Google Meet), screen share

---

## 🎯 Research Context
**Study Objectives:** Understand the requirements intake and assembly process to identify where tooling could reduce friction (Woven Item 10 / Epic 1).
**Interview Protocol:**
1. Role at Woven and day-to-day responsibilities
2. Walk through the JAMA assembly workflow in practice (screenshare)
3. Magic wand: how would you change the process?

**Focus Areas:** Requirements intake from upstream sources, JAMA assembly workflow, SWQT authoring, version control, and tooling pain points.

---

## 📋 Executive Summary

- Hannah's core work is a **manual, repetitive intake loop**: copy SWRDs verbatim from Git into JAMA, then draft test cases (SWQTs) with LLM assistance — approximately 600 SWRDs and ~7,000 SWQTs for lane change alone.
- **Version control / change detection is the #1 pain point**: requirements in Git are silently updated by CA with no notification mechanism. Hannah only knows something changed if she manually checks.
- Hannah has already partially automated the hardest cognitive step (test case drafting) using WOVI/Gemini, but the **bottleneck is orchestration** — she's doing 700+ copy-paste-and-prompt cycles manually.
- Her strategic priority is pragmatic: **get everything into JAMA first**, even imperfect requirements, so that a visible pass/fail count ("0 out of 7,000 test cases passing") creates organizational urgency more effectively than verbal descriptions.

---

## 👤 Participant Profile & Context
**Role:** Systems & Validation Engineer — function lead for out-of-lane maneuvers (lane change, merge, branch)
**Experience:** Several years in automotive requirements engineering; previously at GM; has worked with both rules-based and ML-based vehicle systems
**Organization:** Woven Planet (Toyota's autonomous driving subsidiary), Palo Alto; ~1.5 years in role
**User Segment:** Primary — the person doing the intake/assembly work daily; the core use case for Epic 1 tooling
**Environment:** Remote-heavy work; tools are Git (Chrome browser), JAMA (browser), Google Docs (PRDs from PDM team), WOVI/Gemini for LLM assistance

---

## 💡 Core Insights & Patterns

- **LLMs are already doing the hard cognitive work**: Hannah uses WOVI/Gemini to (a) translate poorly-translated Japanese requirements into plain English and (b) draft initial SWQTs. She estimates LLMs now get her ~90% of the way there vs. ~70% a year ago. She is not waiting for tooling to help her think — she needs tooling to help her *orchestrate*.
  - *Evidence*: "If you copy and paste the requirement and say 'can you rewrite this in plain English,' it does a great job... It's not 2019 anymore."
  - *Implication*: The tooling opportunity is not AI-augmented drafting — she already has that. The opportunity is reducing or eliminating the copy-paste loop and wiring change detection into it.

- **Metrics as leverage**: Hannah's strategy of deliberately logging even broken requirements is not about completeness for its own sake — it's about creating a visible, undeniable number she can show to leadership.
  - *Evidence*: "If I can pull up JAMA and show 'zero out of 7,000 test cases passing,' that drives urgency much faster" than describing the problem in words.
  - *Implication*: Tooling that surfaces traceability gaps visually (dashboard, count of unlinked SWRDs, test pass/fail ratio) will resonate immediately with her and her leadership.

- **"Copy-paste is negligible" vs. 700 manual iterations**: Hannah described JAMA ingestion as "kind of negligible work, just a copy-and-paste job" — but elsewhere described having to do it 700 times. She may be minimizing the aggregate effort, or she's compartmentalizing it as overhead she has accepted.
  - *Evidence*: "Copying them into JAMA is not something I necessarily need to track — it should be kind of negligible work." vs. "If that could be automated, it would save an enormous amount of time."
  - *Implication*: Don't let her minimization anchor the team's view. The aggregate cost is real. Automation of ingestion has high value even if each individual step feels small to her.

- **The organizational problem creates a tooling opportunity**: CA won't talk directly to Woven, PDM is inserted as buffer, and Masutani-san is manually responsible for tracking all requirement version changes. This process will reliably produce late or missed change notifications. Tooling can compensate by watching Git directly — bypassing the human notification chain entirely.
  - *Evidence*: "Requirements will change and we won't be told about it... They actually listened, but they didn't tell me. I thought I was shouting into a void."
  - *Implication*: A Git-watching change-detection hook is not a nice-to-have — it's filling a gap that the organizational structure has structurally failed to address.

---

## ⚠️ Pain Points & Current Workarounds

### Current Pain Points

- **No change notification (stated #1 issue)**: CA updates SWRDs in Git without alerting anyone downstream. Masutani-san is theoretically responsible for catching this, but manually checking hundreds of requirement links per quarter is unrealistic.
  > "Requirements will change and we won't be told about it... I thought I was shouting into a void, and they ended up changing everything without letting me know."
  - *Context*: Happens at any time in the quarter when CA makes an update; there is no alert, email, or diff surfaced to Hannah
  - *Impact Level*: High — creates downstream work and invalidates already-authored test cases silently

- **Manual, high-volume ingestion loop**: Each SWRD must be opened, read, copy-pasted verbatim into JAMA with a Git link and version number, then have SWQTs authored one-by-one. ~600 SWRDs for lane change.
  > "I just had to do this 700 times."
  - *Impact Level*: High (cumulative) — each step is small but the scale makes it a major time sink

- **Poor upstream requirement quality**: SWRDs arrive with TBD sections, mistranslations from Japanese, internal logical inconsistencies, and rules-based logic inappropriate for an ML implementation.
  > "Either huge translation issues, or it's just incomplete... 'Regarding the regulations for section settings, it is TBD.'"
  - *Impact Level*: High — forces rework, delays PRD sign-off, and creates debate with behavior team

- **Priority misalignment with behavior team**: PDM-authored PRD priorities don't reflect what the behavior team can or wants to implement. Example: highest-priority item was an HMI interface requirement, but Woven runs on dev vehicles with no HMI.
  - *Impact Level*: High — currently blocking PRD sign-off for the quarter

- **V-structure rigidity**: Toyota's model mandates SWRDs define only interfaces (inputs/outputs), but CA sends performance requirements, functional requirements, and mixed content all labeled as SWRDs. Trying to force-fit everything creates organizational confusion about where non-interface requirements should live.
  - *Impact Level*: Medium — downstream organizational problem; Julia is working to resolve

### Existing Workarounds

- **Timestamped copy-paste with Git links**: Hannah copies SWRD content verbatim with version number and Git permalink, creating a paper trail for accountability.
  - *Process*: Open SWRD in Git → copy text → paste into JAMA item → add Git link + version number
  - *Limitations*: Creates a snapshot but does not detect future drift; version in JAMA can silently become stale
  - *Time/Effort Cost*: ~1-2 minutes per SWRD × 600 = significant

- **LLM-assisted SWQT drafting**: Pastes requirement text into WOVI (Gemini) to get plain-English translation and initial test case draft, then reviews and refines.
  - *Process*: Copy SWRD → paste to WOVI → prompt for plain English → prompt for test case draft → review edge cases manually → paste result into JAMA
  - *Limitations*: Each iteration is still manual; 700+ repetitions; no automatic re-generation when requirement changes

### Unmet Needs

- **Requirement change alerts**: Needs to be notified — with diff context — when a SWRD she's tracking in JAMA is updated in Git.
  - *Current Gap*: No mechanism exists; PDM is supposed to track it but doesn't reliably
  - *Desired Outcome*: "Hey, requirement X changed — here's what changed. Your SWQT may be affected."

- **Completion tracking for SWQT authoring**: No clear mechanism to track which SWRDs have associated SWQTs and which don't, or to signal when a function area is fully processed.
  - *Current Gap*: JAMA state transitions exist but haven't been configured for this use case
  - *Desired Outcome*: A view showing per-SWRD status: ingested / SWQT drafted / SWQT approved / unit test linked / passing

---

## 🎯 Needs, Goals & Motivations

### Functional Requirements

- **Verbatim ingestion**: SWRD content must be copied exactly as written — not paraphrased — because the text is the contractual record. Any tool must preserve this.
  - *Why Important*: Hannah's copy is the version-controlled record Woven can point to when disputes arise about what was implemented against which version
  - *Success Criteria*: JAMA item contains exact SWRD text + Git permalink + version at time of ingestion

- **Traceability completeness**: Every SWRD must have: at minimum one SWQT in JAMA, and ideally a linked unit test in Git.
  - *Why Important*: Traceability is the core deliverable of her role — requirements without tests are unverifiable
  - *Success Criteria*: Automated check: "SWRD X — SWQT exists: ✓ — unit test linked: ✓ — passing: ✗"

- **Change detection**: When a tracked SWRD in Git is updated, something must surface that change to Hannah with enough context to act.
  - *Why Important*: Silent requirement drift is the #1 source of invalid test cases and wasted effort
  - *Success Criteria*: Notification with before/after diff when CA commits a change to a tracked SWRD

### Success Metrics
- **Traceability coverage**: % of SWRDs with at least one SWQT → wants to go from near-zero to 100%
- **Test pass rate**: % of linked unit tests passing per release → currently unknown/near-zero; surfacing this number is itself a goal
- **PRD sign-off**: Successfully completing quarterly PRD approval with behavior team alignment → currently blocked

### Motivational Drivers
- **Organizational leverage through metrics**: Wants concrete, undeniable numbers to motivate action from stakeholders above her.
  > "If I can pull up JAMA and show 'zero out of 7,000 test cases passing,' that drives urgency much faster."
- **Pragmatic progress over perfection**: Would rather have a complete-but-imperfect JAMA with everything in it than a perfect-but-sparse one. "Get it all in first."
- **Skeptical but collaborative**: She will tell you exactly what she thinks. She disagrees with parts of the current process (PDM layer) but works within it because Julia decided to go that direction.

---

## 🛠️ Technical & Workflow Requirements

### Session Workflows

- **Typical SWRD ingestion session**:
  - *Process*: Open PRD (Google Doc) → click SWRD link → open Git page → copy requirement text → open JAMA → create new item under SWRD parent node → paste text → add Git link + version → create associated SWQT item → paste LLM-generated test cases → review
  - *Frequency*: Ongoing throughout the quarter; concentrated effort at quarter start
  - *Tools in play simultaneously*: Browser tab (Git), Browser tab (JAMA), Browser tab (WOVI/Gemini), Google Doc (PRD)

- **Behavior team alignment sessions**:
  - *Process*: Separate from ingestion — review requirements with behavior team to confirm implementability before PRD sign-off
  - *Frequency*: Quarterly, pre-sign-off; ad hoc when new requirements are unclear
  - *Participants*: Hannah + behavior team members (multiple, function-specific)

### Multi-User Coordination

- **PDM team (Masutani-san)**: Responsible for PRD maintenance and version change tracking; Hannah depends on him to flag SWRD updates. Currently unreliable at scale.
- **Behavior team**: Consumers of JAMA requirements; must align with Hannah before PRD sign-off. Currently going around the process by talking directly to CA.
- **CA team**: Upstream authors of SWRDs; not directly accessible to Hannah. Woven cannot edit their requirements directly.
- **Handoff bottleneck**: The PRD sign-off step is where all three parties (PDM, Hannah's team, behavior team) must align — this is the current blocking point.

### Technical Constraints

- **JAMA**: Central requirements management system; supports item hierarchies, state workflows, and traceability links. Hannah is using it at a basic level — there's headroom for state machine configuration she hasn't implemented yet.
- **Git**: CA's requirement source; public within the company. All lane change SWRDs are here; not all teams use Git (perception was in Google Docs, mapping was in JAMA directly).
- **WOVI (Gemini)**: Internal LLM tool; Hannah uses it for translation and test case drafting. Already embedded in her workflow.
- **Data fragmentation**: Requirements across the organization live in Git, Google Docs, and JAMA — there is no single source of truth. Consolidating into JAMA is the stated goal.

---

## 💬 Key Quotes & Evidence

### Pain Point Quotes
> "Requirements will change and we won't be told about it... They actually listened, but they didn't tell me. I thought I was shouting into a void, and they ended up changing everything without letting me know."
> *Context: Describing an instance where she gave feedback to the PDM team about incomplete requirements, they updated them, and never notified her*
> *Significance: Establishes that both upstream responsiveness AND notification are broken; fixes exist but the communication loop doesn't close*

> "Now we have two groups between us and the ultimate Toyota requirement. It's weird."
> *Context: Explaining the Toyota → CA → PDM → Systems team chain after PDM was inserted*
> *Significance: She has reservations about the PDM layer that differ from Julia's — important counter-perspective*

> "'Regarding the regulations for section settings, it is TBD.' Either huge translation issues, or it's just incomplete."
> *Context: Showing a live example of a problematic requirement during screenshare*
> *Significance: Upstream quality is not improving on its own — tooling needs to accommodate incomplete/flagged requirements, not just clean ones*

### Need/Goal Quotes
> "If I can pull up JAMA and show 'zero out of 7,000 test cases passing,' that drives urgency much faster."
> *Context: Explaining why she wants to get all requirements into JAMA even before they're good*
> *Significance: Her mental model of tooling value is organizational leverage, not just personal productivity*

> "If that could be automated, it would save an enormous amount of time. And if a requirement changes, having the system automatically flag or even update the associated test case would be really cool."
> *Context: Magic wand response, specifically about LLM-assisted test case generation*
> *Significance: She already believes in AI-assisted generation — the request is for it to be automatic and change-aware*

### Insight Quotes
> "It's not 2019 anymore."
> *Context: Explaining her LLM-assisted SWQT drafting approach*
> *Significance: She's pragmatic about AI tools, already using them, and expects any new tooling to leverage AI as a matter of course*

> "My strategy right now — and I don't know if it'll work out, I've been wrong half my life — is to just get everything into JAMA."
> *Context: Explaining her approach to handling even broken/TBD requirements*
> *Significance: Self-aware, empirical approach to process improvement — she thinks in hypotheses, not certainties*

### Notable Examples & Stories
- **The "they changed everything without telling me" incident**: Hannah flagged incomplete requirements to the PDM team ~6 months ago, believed she was being ignored, then discovered they had updated everything — silently. She only found out by chance. This is the origin of her version-control-first strategy.
  - *Lessons*: The feedback loop exists but the notification loop doesn't. Any tooling must close this gap, not just the upstream process.
- **The HMI interface priority deadlock**: PDM labeled HMI interface requirements as the highest priority for the quarter. The behavior team develops on vehicles with no HMI. They ignored it and moved on. PRD is now unsigned.
  - *Lessons*: Priority setting is done by PDM without behavior team input. This is a process problem that tooling can surface (priority ≠ feasibility) but not fully solve.
- **Lane change validity inconsistency**: A requirement calculated minimum following distance differently in the first and second half of a lane change — producing a scenario where a lane change could be valid on entry and invalid on completion. Caught by Hannah, sent back to CA.
  - *Lessons*: Requirement logic validation is currently done by human review. There may be an opportunity for automated consistency checking.

---

## 🎯 Design & Product Implications

### High Priority Recommendations

- **Git-watching change detection**: Automatically detect when a SWRD in Git is updated and surface a notification with diff context to the responsible engineer in JAMA.
  - *Evidence*: Stated #1 pain point, described as "the biggest issue we have right now"; current human notification chain has demonstrably failed
  - *Impact*: Eliminates the most critical silent-failure mode in the workflow
  - *Implementation*: Watch Git repo for changes to tracked SWRD files; diff against last-ingested version; trigger JAMA comment + notification to item owner
  - *Success Measure*: Hannah learns about a requirement change within 24 hours of it being committed, with a diff

- **Automated SWRD ingestion**: Pull SWRD content from Git into JAMA automatically, pre-filling the item with text, Git link, and version number.
  - *Evidence*: Hannah describes ingesting ~600 SWRDs per quarter, one at a time. She already describes each step exactly — it's deterministic and scriptable.
  - *Impact*: Eliminates the copy-paste loop entirely; frees her for higher-value work (behavior team alignment, requirement quality review)
  - *Implementation*: Given a PRD with SWRD links, fetch content from each linked Git file, create/update JAMA items with verbatim text + metadata
  - *Success Measure*: Hannah can ingest a new quarterly PRD in minutes instead of days

- **Traceability completeness view**: A dashboard or JAMA report showing per-SWRD status: ingested / SWQT drafted / unit test linked / passing.
  - *Evidence*: Hannah explicitly requested this and described the "0/7000 passing" number as her primary tool for driving organizational action
  - *Impact*: Directly enables her leadership strategy; creates visible accountability for all parties
  - *Implementation*: Query JAMA hierarchy for SWRDs without child SWQTs; query Git for linked unit tests; surface pass/fail from CI runs
  - *Success Measure*: Hannah can show a live traceability coverage number to stakeholders on demand

### Medium Priority Considerations

- **LLM-assisted SWQT generation (automated)**: Auto-generate SWQT drafts from ingested SWRD content as part of the ingestion flow — not a separate manual step.
  - *Evidence*: Hannah already does this manually with 90% accuracy; the bottleneck is doing it 700 times
  - *Timeline*: After ingestion automation is working — this is the logical next layer on top of ingestion
  - *Dependencies*: Reliable SWRD ingestion must be in place; SWQT format and templates must be well-defined

- **Requirement change → SWQT cascade**: When a SWRD is updated, automatically flag or re-draft the associated SWQT and notify the unit test owner in Git.
  - *Evidence*: Hannah described this explicitly as the "full automation" vision: "Sending an automated email to the person who owns the unit test in Git — 'Hey, just a heads up...'"
  - *Timeline*: Phase 2 after change detection and ingestion are working
  - *Dependencies*: Change detection, SWRD-to-SWQT linkage, Git unit test ownership metadata

- **JAMA state workflow configuration**: Configure JAMA item states to reflect requirement quality (e.g., Draft / In Review / Approved / Flagged-TBD) rather than using default states.
  - *Evidence*: Hannah had this idea in her most recent meeting — "we have a button to transition an item from 'new' to 'review'" — but hasn't implemented it yet
  - *Timeline*: Quick win; can be done in parallel with other work by Hannah herself if she has the time
  - *Dependencies*: None technical; requires alignment with Julia on workflow states

### Future Exploration Areas

- **Requirement quality/consistency checking**: Could LLM analysis detect internal inconsistencies (like the lane change validity example) before requirements reach JAMA?
  - *Why Important*: Human review catches these now, but at scale it's unreliable; automating early detection could reduce rework
  - *Next Steps*: Collect examples of caught inconsistencies; test LLM prompts against them

- **Cross-team requirements consolidation**: Perception team (Google Docs), mapping team (JAMA direct), lane change (Git) — all going into JAMA eventually. Tool design should not hard-code to Git as the only source.
  - *Why Important*: Hannah's workflow is the most mature; other teams will need onboarding and different ingestion paths
  - *Next Steps*: Interview perception and mapping team contacts about their requirements sources

### Technical Considerations

- **JAMA API**: JAMA supports REST API — ingestion and traceability queries can be automated without screen-scraping. Verify Hannah's JAMA instance has API access enabled and the schema matches expectations.
- **Git repository structure**: Hannah mentioned the SWRDs are in Git but wasn't sure of the underlying structure (may be a separate repo from Woven's application code). Confirm the repo structure, access permissions, and whether CA's files are directly trackable.
- **LLM in the loop**: WOVI/Gemini is already approved for use. Any AI-assisted features should use WOVI rather than external LLM APIs to stay within Woven's security boundaries.

---

## 📝 Additional Context & Follow-Up

### Organizational Context

- Hannah's team members each own a function area (lane change, in-lane, urban, roll-out) — tooling should be designed for multi-user, function-area-scoped ownership, not just Hannah's personal workflow.
- She disagrees with Julia on the PDM layer's value. This is a meaningful internal tension worth being aware of when presenting tooling proposals — Julia may frame the problem differently.
- She has political cover to be direct about what's not working — she's been in the role long enough and has enough institutional context to be candid.

### Cross-Interview Connections

- Compared to Andrea Zotelli (newer, Oct 2025), Hannah has deeper institutional context and a stronger formed opinion on the workflow. Andrea may provide a "fresher eyes" perspective on what's confusing or undocumented.
- Julia Pralle's view of the PDM layer as "the greatest process ever" is in direct contrast to Hannah's skepticism — both perspectives should inform tooling design.
- Nick (TBD interview) may have a similar or different workflow; Hannah's is the most documented of the group so far.

### Follow-Up Items

- **Hannah offered to share her written tooling wish list** — confirm the team has received and reviewed this document
- **Recording access**: Interview was recorded via Google Meet (14-day retention) — confirm someone downloaded it
- **Masutani-san**: He's the owner of the lane change PRD tab and the person theoretically tracking SWRD changes. A brief interview or even a document review with him could clarify what's realistic to expect from the PDM layer.
- **Open question**: Is there a way to subscribe to Git file changes already (e.g., GitHub webhooks, watch features) that Hannah doesn't know about? The solution might be simpler than building something new.

---

## 🔖 Analysis Tags

**User Segment**: Core practitioner — daily requirements assembly and test case authoring
**Experience Level**: Expert in domain; intermediate with current tooling setup
**Organization Type**: Large automotive OEM subsidiary (~Toyota-scale complexity); Palo Alto office
**Use Case**: Requirements ingestion, test case authoring, traceability management
**Key Themes**: Version control, manual orchestration, LLM-assisted drafting, organizational friction, metrics-as-leverage
**Pain Points**: Change detection, manual scale, upstream quality, priority misalignment
**Technical Sophistication**: High — comfortable with Git, JAMA, LLMs; not a developer but thinks in systems
