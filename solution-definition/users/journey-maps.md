# User Journey Maps

> **Journey Maps Overview**
>
> This journey map visualizes the requirements assembly and test case authoring workflow based on discovery research conducted February–March 2026, including user interviews, screen-share walkthroughs, and post-interview synthesis. The map is derived from a manual user story mapping exercise conducted by the team and grounded in Hannah Lane's documented workflow as the primary practitioner.

---

## Journey Map: SWRD Ingestion & SWQT Authoring (Current State)

### Actor

**Persona**: [Hannah Lane](internal-stakeholders/Hannah_Lane_Systems.md)

**User Type**: Systems & Validation Engineer — Function Lead, Out-of-Lane Maneuvers / Lane Change

**Point of View**: The primary practitioner who processes a new quarterly PRD from intake to handoff — reading source requirements in Git, ingesting them verbatim into JAMA, and authoring test cases — one SWRD at a time, at scale (~600/quarter).

**Data Source**: User interview (2026-03-03, ~61 min, screen share), post-interview debrief (2026-03-03), interview synthesis (2026-03-05), stakeholder profile (2026-03-06). Nick Carcione (in-lane function lead) mirrors this workflow and uses Hannah's LLM prompt — observations cross-validate at 2+ practitioners.

---

### Scenario

**Goal**: Get all prioritized lane change SWRDs ingested into JAMA with associated SWQTs, so the behavior team has a ground truth to align on and sign off on for the quarterly PRD.

**Situation**: A new quarterly PRD has been published by the PDM team (Masutani-san). Hannah receives it as a Google Doc with links to individual SWRDs in Git. She must work through each one: find it, verify it's current, copy it into JAMA, and author at least one test case — before she can get PRD sign-off from the behavior team.

**Expectations**:
- Upstream SWRDs are stable and complete (often not true)
- She'll be notified if a requirement changes mid-quarter (structural gap — no mechanism exists)
- The behavior team will align on requirements and sign off without major objections (blocked this quarter due to HMI priority mismatch)
- The process, while repetitive, will eventually produce a complete and traceable JAMA record she can point to as an organizational forcing function

**Scope**: New quarterly PRD published → PRD signed off by behavior team

---

### Journey Phases

This journey consists of 6 high-level phases:

1. **Orient & Discover** — Review the quarterly PRD and understand what SWRDs need to be ingested this quarter
2. **Find Source Document** — Navigate to a specific SWRD in Git and read its content
3. **Verify Change Log** — Confirm the SWRD is the most current version before writing anything
4. **Write Requirements in JAMA** — Create a JAMA item and populate it with requirement content
5. **Author Test Cases** — Draft, refine, and finalize SWQTs using LLM assistance
6. **Align & Hand Off** — Review requirements with the behavior team and secure PRD sign-off

---

## Phase 1: Orient & Discover

*Know there's a feature that needs to make its way into JAMA*

### Actions
- Receives (or notices) new quarterly PRD from PDM team (Masutani-san) at the start of the quarter
- Opens PRD as a Google Doc; navigates to the Lane Change section
- Reviews URD groupings of SWRDs to understand the scope and priority ordering for this quarter
- Opens the URD Google Doc for additional context
- Finds the specific URD column referenced to understand the requirement category and priority
- Identifies which SWRDs are new vs. carried over from prior quarters

### Mindsets & Thoughts
- "Okay, what do I have to get through this quarter?"
- "What did PDM prioritize? Let me see if it makes sense relative to what the behavior team is working on."
- "How many are new vs. ones I've already ingested? Did anything carry over from last quarter?"
- **Key Questions**: How many SWRDs does she need to ingest? Are priorities reasonable? Are any already done?

### Emotions
**Emotional State**: 😐 Neutral — familiar and routine, but the volume is quietly daunting

**Why**: This is the beginning of a known quarterly cycle. Hannah is experienced enough to not be surprised, but she's aware of the aggregate scope (~600 SWRDs for lane change alone). There's low excitement and a pragmatic "let's get through it" orientation.

**Direct Quotes**:
- *"My strategy right now — and I don't know if it'll work out, I've been wrong half my life — is to just get everything into JAMA."*
- *"If I can pull up JAMA and show 'zero out of 7,000 test cases passing,' that drives urgency much faster."*

### Touchpoints
- Google Doc (PRD from PDM team)
- URD Google Doc
- JAMA (to check what's already ingested)
- Slack / email (implicit — receiving PRD notification)

### Pain Points
1. **No single prioritized work queue**
   - **Impact**: Hannah manually cross-references the PRD, URD groups, and her current JAMA state to determine what to work on next; there's no tool that surfaces "here's your ordered list"
   - **Frequency**: Every quarter, at scale
   - **Evidence**: *"I start at the top since they've been prioritized in the PRDs"* — priority is manual navigation, not surfaced automatically

2. **Priority mismatch from PDM**
   - **Impact**: PDM-set priorities (e.g., HMI requirements) don't reflect what the behavior team can or wants to implement; Hannah can't surface this misalignment until review time, downstream
   - **Frequency**: Recurring; caused current PRD sign-off block
   - **Evidence**: *"The highest-priority item was an HMI interface requirement — but Woven runs on dev vehicles with no HMI."*

### Moments of Delight
- When the URD groupings are clean and coherent, orientation is fast and clear

---

## Phase 2: Find Source Document

*Navigate to a specific SWRD in Git and read its content*

### Actions
- Clicks into a single SWRD from the PRD (starting at the top, since they've been prioritized)
- Opens Git documentation tool to find the source file *(open question: specific tool or URL pattern?)*
- Reads the full SWRD content — multiple sections — to build context and understanding of what the requirement actually specifies
- Cross-references URD/SWRD context to interpret meaning before taking any action

### Mindsets & Thoughts
- "Let me understand what this is actually asking for before I try to ingest it."
- "Is this an interface requirement, a performance requirement, or something else entirely?"
- "Is this complete, or is there a TBD section I need to flag?"
- **Key Questions**: What does this requirement actually mean? Is it actionable? Is anything missing or in Japanese?

### Emotions
**Emotional State**: 😐 Neutral-to-😞 Mildly frustrated

**Why**: Reading SWRDs is cognitively demanding — requirements are often dense, partially translated from Japanese, or internally inconsistent. It's routine for Hannah but can be frustrating when the content is low-quality or ambiguous.

**Direct Quotes**:
- *"'Regarding the regulations for section settings, it is TBD.' Either huge translation issues, or it's just incomplete."*
- *"Some are in Japanese, some are very poorly translated. It's a real mixed bag."*

### Touchpoints
- Git (Chrome browser tab — CA's requirement source)
- URD Google Doc (reference for context)
- PRD Google Doc (reference for priority and structure)

### Pain Points
1. **Poor upstream requirement quality**
   - **Impact**: Many SWRDs arrive with TBD sections, bad translations, or internal logical inconsistencies; Hannah must decide whether to ingest as-is, flag it, or wait — all of which require judgment
   - **Frequency**: Common (not every SWRD, but frequent enough to be a routine obstacle)
   - **Evidence**: *"'It is TBD.' Either huge translation issues, or it's just incomplete."*; Lane change validity inconsistency example (requirement valid on entry, invalid on completion by different calculations — caught and sent back to CA)

2. **Ambiguity about the Git tool/workflow** *(open question from story map)*
   - **Impact**: The specific mechanism for navigating from PRD → Git SWRD is not fully documented; for new team members (Andrea, others) this creates a ramp-up gap
   - **Frequency**: Every SWRD, every quarter

### Moments of Delight
- Finding a clean, well-specified SWRD is genuinely pleasant — it's rare enough to stand out

---

## Phase 3: Verify Change Log

*Confirm the SWRD is the most current version before writing anything*

### Actions
- Before writing the requirement into JAMA, checks if the SWRD has been updated since it was last tracked
- Manually opens PRD to reference current state
- Opens Git overlay / version history to check current version number
- Compares to any previously ingested version
- If version has changed since last review, updates the JAMA item or mental model accordingly before proceeding

### Mindsets & Thoughts
- "Has this changed since I last looked at it? I can't be sure unless I manually check."
- "Did the PDM team tell me if anything changed? Probably not."
- "I thought I was shouting into a void — I gave feedback, they updated it, and never told me."
- **Key Questions**: Is this the version that was referenced when I last ingested it? Has CA made any silent updates?

### Emotions
**Emotional State**: 😞 Frustrated — this is Hannah's stated #1 pain point

**Why**: There is no notification mechanism when upstream requirements change. Hannah only discovers drift by manually checking, which she must do each time she touches a requirement. She once gave feedback to PDM, the CA team updated everything in response, and she was never told — she found out by chance. The absence of a notification loop is both a technical gap and an organizational trust issue.

**Direct Quotes**:
- *"Requirements will change and we won't be told about it... They actually listened, but they didn't tell me. I thought I was shouting into a void."*
- *"Now we have two groups between us and the ultimate Toyota requirement. It's weird."*

### Touchpoints
- Git (version history / blame overlay)
- PRD Google Doc (reference)
- JAMA (checking previously ingested version, if any)

### Pain Points
1. **No change notification** (Hannah's #1 pain point — documented as highest-priority opportunity)
   - **Impact**: Silent requirement drift means Hannah's JAMA items and associated test cases can become silently stale at any time in the quarter; she only finds out by chance or by manually checking
   - **Frequency**: Continuous — changes can happen at any point; Masutani-san is supposed to track but the volume is unrealistic for a human
   - **Evidence**: *"Requirements will change and we won't be told about it... I thought I was shouting into a void, and they ended up changing everything without letting me know."*

2. **Multi-layer organizational friction amplifying the gap**
   - **Impact**: Toyota → CA → PDM → Hannah. CA won't communicate directly with Woven; PDM is inserted as buffer. Each layer adds latency and failure points for change notification
   - **Frequency**: Structural — built into the org design
   - **Evidence**: *"Now we have two groups between us and the ultimate Toyota requirement. It's weird."*

### Moments of Delight
- None documented for this phase — this is the low point of the journey

---

## Phase 4: Write Requirements in JAMA

*Create a JAMA item and populate it with verbatim requirement content*

### Actions
- Creates a new, empty JAMA SWRD item in the correct location in the hierarchy *(specific action steps within JAMA are not fully documented — open question)*
- Fills in relevant requirement content from Git:
  - Uses LLM (WOVI/Gemini) to translate dense/Japanese content into plain English
  - Copies the verbatim requirement text (required — JAMA record is the contractual source)
  - Pastes content into the JAMA item *(note: JAMA destination field is an open text field — open question about structure/schema)*
  - Adds Git permalink and version number
- Optionally: Reviews requirements with the behavior development team before finalizing *(uncertain step — may happen before or after test case authoring)*
  - If behavior team disagrees: posts disagreement to PRD for resolution
  - If behavior team agrees: proceeds to writing test cases

### Mindsets & Thoughts
- "This is the part I just have to get through — copy it in verbatim, make sure I have the version and link."
- "I need to make this readable so the behavior team can understand it."
- "This should be negligible work per item — but I just had to do it 700 times."
- **Key Questions**: Is the JAMA hierarchy correct for this item? Will the behavior team accept this requirement?

### Emotions
**Emotional State**: 😐 Neutral — routine and low-cognitive-effort per step, but cumulatively frustrating at scale

**Why**: Each individual ingestion step feels like light overhead — Hannah herself describes it as "kind of negligible work, just a copy-and-paste job." But the aggregate (~600 iterations) makes this one of the highest time-cost activities in her quarter. The LLM translation step provides genuine relief on quality, but the loop is still fully manual.

**Direct Quotes**:
- *"Copying them into JAMA is not kind of negligible work."* (self-correction)
- *"I just had to do this 700 times."*
- *"If that could be automated, it would save an enormous amount of time."*

### Touchpoints
- JAMA (destination — browser, REST API not currently used)
- Git (source — Chrome browser tab)
- WOVI/Gemini (LLM translation tool)
- PRD Google Doc (cross-reference for hierarchy, context)
- Behavior development team (async — via PRD comments, or sync meeting)

### Pain Points
1. **Manual copy-paste loop at scale**
   - **Impact**: ~600 SWRD ingestions per quarter, each requiring manual navigation between Git, LLM, and JAMA; self-minimized but real aggregate cost
   - **Frequency**: Every SWRD, every quarter — ~600× per cycle
   - **Evidence**: *"I just had to do this 700 times."* vs. *"it should be kind of negligible work"* — tension in her own framing suggests she's compartmentalized the cost

2. **Behavior team review is undefined as a workflow step** *(open question from story map)*
   - **Impact**: Unclear when or how the behavior team weighs in on requirement acceptability; currently blocking PRD sign-off
   - **Frequency**: Periodic — quarterly for sign-off; ad hoc for individual clarifications
   - **Evidence**: Current PRD is unsigned because behavior team rejected HMI requirement as highest priority

3. **JAMA structure / schema not fully specified** *(open question from story map — "JAMA destination is an open text field")*
   - **Impact**: Content may not be consistently structured across practitioners (Hannah vs. Nick vs. Andrea)
   - **Frequency**: Every item

### Moments of Delight
- LLM translation (WOVI/Gemini) genuinely helps — ~90% accuracy reported; this step has improved markedly year-over-year
- Successfully getting a batch of SWRDs into JAMA creates visible progress

---

## Phase 5: Author Test Cases

*Draft, refine, and finalize SWQTs (Software Work/Interface Qualification Tests) using LLM assistance*

### Actions
- **Draft test case in LLM**:
  - Opens WOVI (Wovey) in a new browser tab
  - Pastes requirement text into LLM with Hannah's prompt (a refined prompt she developed for this purpose)
  - Reviews LLM output, pastes into JAMA test case item
- **Clean up output**:
  - Cleans up LLM-provided test cases based on URD & SWRD context
  - Skims output, double-checks logic for input/output correctness and edge cases
- **Add additional test cases if needed** (repeating loop):
  - If a requirement warrants multiple test cases, opens Wovey again
  - Pastes requirement text with Hannah's prompt (same process, different framing for additional scenarios)
  - Pastes output into test case
  - Repeats as necessary — some requirements may generate 1 test case, others many

### Mindsets & Thoughts
- "The LLM gets me most of the way there — I just need to make sure it's not hallucinating edge cases."
- "It's not 2019 anymore. These tools actually work."
- "I need to double-check the logic, not just accept what it gives me."
- **Key Questions**: Does this test case actually validate the requirement? Are there edge cases I need to add? Does the logic hold for both the nominal and boundary conditions?

### Emotions
**Emotional State**: 😊 Slightly positive — this is where Hannah has the most agency and the best tooling

**Why**: LLM-assisted test case drafting is the part of the workflow Hannah has most successfully optimized. Her WOVI prompt has been refined over time, she's confident in the output quality (~90%), and she's already evangelized it to Nick (who uses her prompt). There's still repetition (700 iterations) but the cognitive overhead per step is lower than ingestion because the LLM does the hard work.

**Direct Quotes**:
- *"If you copy and paste the requirement and say 'can you rewrite this in plain English,' it does a great job."*
- *"It's not 2019 anymore."*
- *"[LLM test case generation] went from 70% to 90% useful year over year."*

### Touchpoints
- WOVI / Gemini (LLM — browser tab)
- JAMA (destination for test case items)
- Git (reference for SWRD version being tested)
- URD / SWRD source documents (context for logic validation)

### Pain Points
1. **Still fully manual — 700+ iterations**
   - **Impact**: Even with LLM assistance, each test case requires manually opening Wovey, pasting the prompt, reviewing, and pasting output. ~700 cycles per quarter.
   - **Frequency**: Every SWRD (minimum 1:1; can be 1:many)
   - **Evidence**: *"If that could be automated, it would save an enormous amount of time. And if a requirement changes, having the system automatically flag or even update the associated test case would be really cool."*

2. **No automatic re-generation when requirements change**
   - **Impact**: If a SWRD is updated (silently — see Phase 3), the associated SWQT becomes stale with no alert. Hannah has to manually re-run her prompt and update the JAMA item.
   - **Frequency**: Whenever upstream requirements change mid-quarter; frequency unknown but has happened
   - **Evidence**: Change detection is her #1 wish list item precisely because the downstream cascade to test cases is unmanaged

3. **No completion tracking**
   - **Impact**: No clear mechanism to know which SWRDs have associated SWQTs vs. which don't; no visibility into per-SWRD status (ingested / SWQT drafted / approved / unit test linked / passing)
   - **Frequency**: Continuous

### Moments of Delight
- LLM producing a solid test case draft on the first pass — saves significant time
- Having a high-quality prompt that she can reliably reuse (and share with Nick) is a genuine workflow asset

---

## Phase 6: Align & Hand Off

*Review test requirements with the behavior team and secure PRD sign-off*

### Actions
- Reviews test requirements with the behavior development team *(uncertain step — timing and format not fully defined)*
- Surfaces any disagreements or blockers from the behavior team
- If blocked: escalates via PRD comment or Slack; waits for resolution
- Signs off on PRD when all parties have aligned on requirements and test cases

### Mindsets & Thoughts
- "Will the behavior team accept all of these, or is there going to be a fight about priorities again?"
- "I need their buy-in before I can sign the PRD — but I can't control what they say."
- "Zero out of 7,000 test cases passing. That number is the point."
- **Key Questions**: Will the behavior team align? Are the prioritized requirements things they can actually implement? Is the PRD sign-off achievable this quarter?

### Emotions
**Emotional State**: 😞 Frustrated-to-uncertain — external dependency, high stakes, low control

**Why**: Hannah has done all the work, but PRD sign-off depends on behavior team alignment — which is outside her control. Currently blocked this quarter because PDM's top-priority requirement (HMI) is irrelevant to how Woven's vehicles actually work. The outcome of this phase determines whether the entire quarter's work is officially recognized.

**Direct Quotes**:
- *"We're passing zero out of 7,000 test cases. That's the forcing function."*
- *"The behavior team ignored it and moved on. PRD is now unsigned."*
- *"That kind of sucks, but you also don't want to shut it down because they're getting work done."*

### Touchpoints
- JAMA (requirements and test case artifacts)
- PRD Google Doc (sign-off vehicle)
- Behavior development team (sync meetings or async PRD comments)
- Slack (async coordination)

### Pain Points
1. **Priority misalignment between PDM and behavior team**
   - **Impact**: PDM sets priorities without behavior team input; mismatched priorities surface only at sign-off, blocking the entire PRD even when the underlying requirements work is complete
   - **Frequency**: Recurring (current quarter is an example)
   - **Evidence**: *"The highest-priority item was an HMI interface requirement — but Woven runs on dev vehicles with no HMI."*

2. **Shadow communication channels undermining traceability**
   - **Impact**: Behavior developers bypass the official process and talk directly to CA to get requirements clarified; creates version confusion and undermines the traceability Hannah is building
   - **Frequency**: Active and ongoing; Hannah acknowledges it but won't stop it
   - **Evidence**: *"That's actually driving even more confusion and more versioning issues. But you also don't want to shut it down because they're getting work done. So that kind of sucks."*

3. **Review format and timing not defined** *(open question from story map)*
   - **Impact**: Unclear at what point in the workflow behavior team review happens; may occur before or after SWQT authoring; process is ad hoc
   - **Frequency**: Quarterly minimum; ad hoc additional

### Moments of Delight
- Completing a full PRD sign-off — rare enough that it would be a meaningful milestone
- Having a concrete "0/7000 passing" number to show stakeholders is a moment of strategic clarity, not just frustration

---

## Journey Summary

### Emotional Journey Arc

```
High |                                              😊
     |                                         (Phase 5)
     |                    😐           😐
     |         😐      (Phase 4)    (Phase 4+)
     |      (Phase 2)
     |   😐
     | (Phase 1)
Low  |               😞                                  😞
     |            (Phase 3)                           (Phase 6)
     +------+--------+--------+--------+--------+--------+
           P1        P2       P3       P4       P5       P6
      Orient &   Find Src   Verify   Write    Author   Align &
      Discover   Document  Change   Reqs in   Test    Hand Off
                           Log      JAMA     Cases
```

**Overall Experience**: Hannah navigates a workflow she has internalized and partially optimized — but it is structurally fragile. The change detection gap (Phase 3) is an invisible threat that can silently invalidate work at any point. The copy-paste loop (Phase 4) is cognitively light but crushingly repetitive at scale. The LLM-assisted test case phase (Phase 5) is the one genuinely productive and satisfying moment. The whole journey ends in an external dependency (Phase 6) she can't fully control.

**Critical Moments**:
- **Phase 3 (Verify Change Log)**: Lowest point. No notification system means she's always uncertain whether she's working on current requirements. A structural failure in the org's communication chain.
- **Phase 5 (Author Test Cases)**: Highest point. LLM assistance works well; Hannah has developed real expertise in prompt engineering for this domain. This is where tooling is most mature.
- **Phase 6 (Align & Hand Off)**: Second lowest. External dependency on behavior team alignment; currently blocked. The entire quarter's work can be stalled here by a priority mismatch she didn't create.

---

## Insights & Opportunities

### Key Insights

1. **The orchestration problem, not the cognition problem**
   - **Finding**: Hannah has already solved the hardest cognitive step (test case drafting) with LLMs. The bottleneck is doing 700 copy-paste-and-prompt cycles manually.
   - **Evidence**: *"If you copy and paste the requirement... it does a great job."* vs. *"I just had to do this 700 times."*
   - **Implication**: The tooling opportunity is orchestration automation — not AI augmentation (she already has that). Automating the ingestion loop is highest-ROI.

2. **Silent drift is the structural failure**
   - **Finding**: There is no notification mechanism when upstream requirements change. The PDM buffer layer was intended to handle this, but at 600+ SWRDs it's an unrealistic human ask.
   - **Evidence**: The "shouting into a void" incident — CA updated requirements silently; Hannah found out by chance.
   - **Implication**: Git-watching change detection is not a nice-to-have. It addresses a structural failure that the org itself has produced and cannot fix without tooling.

3. **Hannah is a knowledge concentration risk**
   - **Finding**: Nick uses Hannah's LLM prompt. Andrea asks Hannah for document pointers. Hannah is the de facto process lead for a workflow that has no documented playbook.
   - **Evidence**: Nick's WOVI prompt = Hannah's; Andrea's institutional knowledge = Hannah's.
   - **Implication**: Any tooling must be designed for a team of practitioners, not just Hannah. Capabilities she's developed personally (her prompt, her change-checking habits) should be formalized into the tool.

---

### Opportunities for Improvement

| Priority | Opportunity | Phase | Description | Success Metric | Owner |
|----------|-------------|-------|-------------|----------------|-------|
| High | Git-watching change detection | Phase 3 | Automatically detect SWRD updates in Git and notify Hannah with a diff, eliminating manual version checking | Hannah learns of a requirement change within 24h of commit, with context | Engineering |
| High | Automated SWRD ingestion | Phase 4 | Pull SWRD content from Git into JAMA automatically (verbatim text + Git link + version) given a PRD input | ~600 SWRDs ingested in minutes, not days | Engineering |
| High | Traceability completeness dashboard | All | Surface per-SWRD status (ingested / SWQT drafted / unit test linked / passing) as a visible metric | Hannah can show a live "N/7000 passing" count to stakeholders on demand | Engineering |
| Medium | Automated SWQT generation on ingestion | Phase 5 | Auto-generate SWQT drafts as part of ingestion flow, not as a separate manual step; apply Hannah's prompt systematically | SWQT draft created alongside each ingested SWRD | Engineering |
| Medium | Change → SWQT cascade notification | Phase 3 → 5 | When a tracked SWRD changes, automatically flag or re-draft the associated SWQT and notify the Git unit test owner | Engineers receive email when their unit test's upstream requirement changes | Engineering |
| Medium | Behavior team priority alignment gate | Phase 6 | Surface a lightweight pre-review step (before full ingestion) where behavior team can flag priority concerns early | PRD sign-off not blocked by surprises discovered late in the quarter | Product/Process |
| Low | JAMA state workflow configuration | Phase 4 | Configure JAMA item states to reflect requirement quality (Draft / In Review / Approved / Flagged-TBD) | JAMA workflow states are defined and used consistently by all practitioners | Hannah / Julia |
| Low | Document JAMA hierarchy and ingestion steps | Phase 4 | Fill in the "specific actions to do this" gap — the in-JAMA workflow for creating SWRDs in the correct hierarchy | New practitioners (Andrea, future hires) can ingest SWRDs without asking Hannah | Team / AO |

---

### Quick Wins vs. Long-term Improvements

**Quick Wins** (can be addressed in next 1-2 sprints):
- Document the exact JAMA hierarchy navigation and item creation steps (fills the story map "specific actions to do this" gap)
- Configure JAMA state workflow to reflect requirement quality stages — Hannah identified this herself and can likely do it with minimal support
- Identify and document the Git tooling used to access SWRDs (the story map flags this as unclear — "what is this specifically?")

**Long-term Improvements** (require strategic planning):
- Git-watching change detection system with JAMA notification integration
- Automated ingestion pipeline (PRD → Git → JAMA) with verbatim copy and metadata
- LLM-assisted SWQT generation integrated into the ingestion pipeline, using Hannah's prompt as the baseline

---

## Validation Notes

**Research Basis**:
- User interview (Hannah Lane, 2026-03-03): 61-minute remote session with screen share; primary source for workflow steps and pain points
- Post-interview debrief (2026-03-03): Team synthesis immediately following; cross-validated observations
- Interview synthesis (2026-03-05): Structured analysis of patterns, implications, and recommendations
- Cross-validation: Nick Carcione uses Hannah's LLM prompt; his interview (2026-03-04) confirms the workflow is shared across practitioners
- Manual story mapping exercise (2026-03-06): Team exercise producing the user story map this document is derived from

**Confidence Level**: Medium-High — Hannah's own workflow is well-documented. Open questions remain around the behavior team review step, specific JAMA hierarchy creation actions, and the Git tooling used for SWRD access.

**Known Gaps**:
- The behavior team's perspective on the alignment/review step (Phase 6) has not been directly researched
- The "reviews requirements with development team?" steps (marked with ? in the story map) need clarification — when does this happen, how, and with whom specifically?
- The exact Git tool or URL pattern used to access SWRDs needs to be documented
- JAMA field schema and hierarchy structure are not fully specified — the story map notes "JAMA destination is an open text field" as an open question
- The workflow for practitioners other than Hannah (Andrea, Nick, future team members) has only been indirectly observed

**Last Updated**: 2026-03-06

---

## Open Questions (from Story Map)

The original story map flagged several items with ❓ as uncertain or requiring clarification:

1. **Git Documentation Tool** — *"Opens Git Documentation tool (what is this specifically?)"* — The mechanism for navigating from a PRD link to a SWRD in Git needs to be documented precisely.
2. **JAMA item creation steps** — *"[Specific actions to do this]"* — The exact clicks/fields required to create a new JAMA SWRD in the correct hierarchy location are not documented.
3. **JAMA destination field** — *"Jama destination is an open text field"* — Unclear whether there is a defined schema or if content is free-form; important for consistency across practitioners.
4. **Behavior team requirement review** — *"Reviews requirements with development team?"* (appears in both Phase 4 and Phase 6) — When does this happen? Is it a formal meeting, async PRD comment, or ad hoc? Who initiates it?
5. **Hand off review format** — *"Reviews test requirements with development team?"* — Similar to above; what does this review look like in practice?

---

## Journey Map Context & Usage

### When to Use This Journey Map

- **Product Planning**: Use to prioritize Epic 1 features — the change detection gap (Phase 3) and ingestion loop (Phase 4) are the highest-leverage intervention points
- **Feature Prioritization**: The emotional arc confirms Phase 3 and Phase 6 as the worst experiences — fixes here will be most felt by practitioners
- **UX Design**: Use to ground design decisions in the actual workflow sequence; don't skip steps or rearrange phases without validating against this map
- **Stakeholder Alignment**: Use to build shared understanding across AO and Woven; the journey map makes the pain concrete and the opportunity legible

### Related Documents

- **Personas**: [Hannah Lane](internal-stakeholders/Hannah_Lane_Systems.md) · [Julia Pralle](internal-stakeholders/Julia_Pralle_Requirements_Tooling_Lead.md) · [Nick Carcione](internal-stakeholders/Nick_Carcione_Systems_and_Validation.md)
- **Interview Synthesis**: [Hannah Lane Synthesis](../03-discovery/2026-03-05-hannah-lane-interview-synthesis.md) · [Multi-Interview Synthesis](../03-discovery/2026-03-05-multi-interview-synthesis.md)
- **User Story Map**: Source for this document — manual exercise conducted 2026-03-06

---

## Methodology

**Research Conducted**: February–March 2026

**Participants**: 4 internal stakeholders interviewed (Hannah Lane, Julia Pralle, Andrea Zotelli, Nick Carcione); Hannah Lane is the primary actor for this map

**Methods Used**:
- Semi-structured user interviews with screen share: Hannah Lane (61 min), Nick Carcione, Julia Pralle, Andrea Zotelli
- Post-interview debriefs (immediate synthesis sessions after each interview)
- Multi-interview synthesis (cross-participant pattern analysis, 2026-03-05)
- Manual user story mapping workshop (2026-03-06) — team exercise producing the story map this journey map was derived from

**Journey Mapping Workshop**: Story map created by the team; converted to journey map format by AO 2026-03-06
