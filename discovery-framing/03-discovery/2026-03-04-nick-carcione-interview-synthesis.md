# User Interview Synthesis: Nick Carcione
**Date:** March 6, 2026
**Interview Date:** March 4, 2026
**Participant:** Nick Carcione — Systems Verification & Validation Engineer (In-Lane Capabilities), Woven Planet
**Duration:** ~53 minutes
**Method:** Remote (Google Meet), screen share (live PRD and SWRD walkthrough)

---

## 🎯 Research Context
**Study Objectives:** Understand the hands-on JAMA assembly process from the perspective of a V&V engineer performing the intake and test case authoring workflow (Woven Item 10 / Epic 1).
**Interview Protocol:**
1. Role and daily responsibilities
2. Live screen-share walkthrough: PRD → URD spreadsheet → SWRD source → JAMA review
3. Version control and change detection in practice
4. SWQT authoring process and developer handoff
5. Magic wand question: what would you change?

**Focus Areas:** Step-by-step JAMA assembly workflow, version control pain, SWRD triage logic, LLM-assisted SWQT drafting, developer coordination.

---

## 📋 Executive Summary

- Nick's workflow involves **navigating at least three separate systems** (PRD in Google Docs, URD spreadsheet, SWRD Git repository) before a single requirement can be entered into JAMA — and there is no mechanism connecting changes in those systems to his work.
- His primary instinct when encountering an inapplicable SWRD is to **halt and comment**, not to push it through to JAMA. This is a meaningful contrast to Hannah's "get everything in first" strategy — representing a different adoption posture on the same team.
- **Version control is cumbersome and passive**: Nick is officially locked to the PRD version but has no built-in compare tool and no notification if a newer version of an SWRD is released mid-quarter — which could render an entire quarter's work obsolete.
- The **magic wand is upstream filtering**: Nick would most want better pre-screening of SWRDs before they reach him, so that he's only reviewing requirements that are actually applicable to Woven's ML-based system.

---

## 👤 Participant Profile & Context
**Role:** Systems V&V Engineer, In-Lane Capabilities (vehicle following, cut-ins, lane keeping, in-lane curves)
**Experience:** ~2.5 years at Woven; background in vehicle behavior evaluation and longitudinal performance; newer to the SWQT authoring process
**Organization:** Woven Planet, Product Delivery / Systems V&V team under Julia Pralle
**User Segment:** Primary — practitioner performing the intake/assembly work; represents the "in-lane" capability group perspective
**Environment:** Remote; tools are Google Docs (PRD), Google Sheets (URD spreadsheet), browser-based Git overlay (SWRD repository), JAMA (browser), WOVI (internal LLM)

---

## 💡 Core Insights & Patterns

- **"Halt and comment" vs. "get it all in"**: Nick's triage instinct is to stop work on an inapplicable SWRD and leave a comment in the Google Doc rather than ingesting it into JAMA. This contrasts with Hannah's explicit strategy of putting everything into JAMA regardless, so that problematic requirements can "die publicly" in the backlog.
  - *Evidence*: "I wouldn't want to take the time to put it into JAMA if it's not something we're actually going to use and write a test for."
  - *Implication*: The tool needs to accommodate both workflows, or actively align practitioners on a shared strategy. The "halt" approach risks requirements falling through cracks; the "ingest all" approach risks JAMA noise.

- **Mental model mismatch: legacy rules-based vs. ML-based requirements**: Nick has a clear framework for evaluating SWRD applicability — if it prescribes specific numerical thresholds or rule-based logic, it was probably written for TSS-4 and is not directly usable for an ML system.
  - *Evidence*: "A lot of these come from previous development efforts that were much more rules-based... is this still applicable to what we're trying to do, or is it a product of legacy systems that just hasn't been updated?"
  - *Implication*: An automated triage/classification step that flags "likely legacy/rules-based" vs. "likely applicable to ML" would directly address Nick's #1 pain point and could be built from the SWRD content itself.

- **Version control is manual and fragile**: Nick is locked to a specific SWRD version in the PRD, but has no in-tool comparison mechanism. He confirmed he was manually flipping between browser tabs to compare versions.
  - *Evidence*: "I don't think there's a built-in compare mechanism in the tool — if there is, I just haven't found it. So I was just flipping back and forth between tabs."
  - *Implication*: A diff/compare feature for SWRD versions is a concrete, high-value tool feature.

- **The underlying need doesn't disappear when an SWRD is rejected**: Nick articulated clearly that even a rejected SWRD represents a real vehicle behavior requirement — it just gets addressed through a different testing mechanism (SBRDs, closed-course TPIDs). This means the full traceability picture requires understanding how SWRD rejections connect to alternative coverage.
  - *Evidence*: "The underlying need is still there. We still want to smoothly follow a vehicle ahead... We'd capture on-road data or conduct closed-course tests in specific scenarios."
  - *Implication*: Tooling should track rejected/deferred SWRDs, not just delete them from the workflow.

---

## ⚠️ Pain Points & Current Workarounds

### Current Pain Points

- **Multi-system navigation overhead**: Every SWRD review requires opening and cross-referencing at least three separate systems (PRD, URD spreadsheet, SWRD Git site). There is no unified view.
  > "At this point I'm on the third website: I have the PRD document, the URD spreadsheet, and now this site that hosts all the SWRDs."
  - *Context*: Normal per-SWRD review workflow
  - *Impact Level*: High — multiplicative across potentially hundreds of SWRDs per quarter

- **No change notification**: Nick has no way to know when a new SWRD version is published mid-quarter, even though a major change could invalidate tests he's already written.
  > "There's no notification mechanism... I've received a specific version of a requirement, and I have no way of knowing if a new version has been released."
  - *Impact Level*: High — risk of a full quarter's work becoming obsolete

- **No comparison tool for SWRD versions**: Even when Nick wants to understand what changed between versions, he has to manually flip between browser tabs.
  - *Impact Level*: Medium — adds cognitive overhead to version review

- **Inapplicable requirements in the PRD**: A significant portion of SWRDs Nick receives are too performance-specific or too rules-based to be useful, requiring time investment just to confirm they should be rejected.
  > "It's time-consuming to read through a requirement and spend the effort trying to understand what it's doing, only to realize it's not something we even want to pursue."
  - *Impact Level*: High — the magic wand problem, in Nick's words

- **No process for tracking SWRD acceptance status**: The old spreadsheet tracking SWRD acceptance, SWQT creation, and developer sign-off is gone; the new PRD process hasn't produced a replacement yet.
  - *Impact Level*: Medium — creates coordination ambiguity between Nick and his future developer assignment

### Existing Workarounds

- **Manual tab-flipping for version comparison**: Opens old and new SWRD versions in separate browser tabs and compares manually.
  - *Limitations*: Error-prone, slow, not shareable
  - *Time/Effort Cost*: Significant for any SWRD with meaningful version history

- **Leave-a-comment in Google Doc for rejected SWRDs**: Flags problematic requirements directly in the PRD document for product to act on.
  - *Limitations*: No structured workflow; comments may not be actioned; no tracking of comment resolution

- **Hannah's WOVI prompt for SWQT drafting**: A prompt written by Hannah to generate initial test case drafts from a pasted requirement; Nick has used it but hasn't done extensive SWQT work yet.
  - *Process*: Enter SWRD into JAMA first, then run WOVI prompt, then manually review and fill in preconditions/steps
  - *Limitations*: Output requires manual review; LLM "usually gets 80% there" but can hallucinate or miss edge cases

### Unmet Needs

- **Upstream SWRD filtering**: Pre-screened requirements delivered to Nick should be applicable to Woven's ML system, not raw legacy documents.
  - *Desired Outcome*: "If there were a way to quickly identify which ones are actually worthwhile to look at."

- **Change alerts tied to PRD version lock**: Notification when a new version of a locked SWRD is published, even if Nick is not officially responsible for that version.
  - *Desired Outcome*: "It would be really helpful to know... especially if it's a major change."

---

## 🎯 Needs, Goals & Motivations

### Functional Requirements

- **Unified SWRD review interface**: Single view combining PRD context, URD description, and SWRD content — eliminating multi-system navigation.
  - *Success Criteria*: Can complete a full SWRD review in one browser tab or tool

- **Version diff for SWRDs**: Ability to see what changed between the PRD-locked version and any newer versions in the repository.
  - *Success Criteria*: Can confirm "nothing changed" or see a clear diff without manual tab comparison

- **Triage classification**: Some mechanism (automated or assisted) to flag SWRDs as likely legacy/rules-based vs. applicable.
  - *Success Criteria*: Reduces time spent reviewing requirements Nick will ultimately reject

### Success Metrics

- **SWRD acceptance rate per quarter**: How many SWRDs in the PRD successfully make it to SWQT creation vs. stall. Nick would like a higher hit rate.
- **SWQT creation velocity**: Currently slow because Nick is relatively new to this workflow. LLM assistance helps but still requires significant review.

### Motivational Drivers

- **Developer buy-in and alignment**: Nick wants developers involved early — not just handed a list of requirements and tests. He values the back-and-forth before anything is formally committed.
  > "The goal is that we're not just handing them a list of requirements and tests and saying 'go.'"
- **Correctness over completeness**: Nick's instinct is to do things right before doing them fast. He prefers to confirm with Hannah or his manager before declaring SWQTs done, especially early in his SWQT authoring journey.

---

## 🛠️ Technical & Workflow Requirements

### Session Workflows

- **Per-SWRD review cycle** (current):
  1. Open PRD in Google Docs → find SWRD row in in-lane tab
  2. Look up URD in separate Google Sheets spreadsheet → get English description
  3. Open SWRD in Git-overlay browser system → read summary, interface section, specification
  4. Decide: accept, reject, or flag as problematic
  5. If rejected: leave comment in PRD → wait for product to act
  6. If accepted: create SWRD entry in JAMA → run WOVI prompt → review output → fill in SWQT template

- **Frequency**: Multiple SWRDs per day during intake season; currently in early-quarter intake mode
- **Participants**: Nick alone for review; eventually a developer co-signer for acceptance

### Multi-User Coordination

- **Hannah Lane**: Go-to peer for SWQT quality check and process guidance; wrote the WOVI prompt; has the most SWRD/SWQT experience on the team
- **Assigned developer (pending)**: Will co-sign SWRD acceptance and SWQT creation; developer assignment for in-lane was not yet finalized at interview time
- **Product team**: Receives rejected SWRD comments and is supposed to communicate back to CA; Nick treats product as the single link to CA

### Technical Constraints

- **SWRD Git system is clunky for version navigation**: No built-in compare tool; version history navigation is "cumbersome"
- **Japanese text in SWRDs**: Nick will include Japanese text in JAMA entries for consistency with teammates, even without translating it
- **No official internal component architecture yet**: Blocks decomposing SWRDs into SCRDs (Software Component Requirements Documents); a future dependency on Nate's architecture work

---

## 💬 Key Quotes & Evidence

### Pain Point Quotes
> "At this point I'm on the third website: I have the PRD document, the URD spreadsheet, and now this site that hosts all the SWRDs."
> *Context: Describing his normal per-SWRD review process during screen share*
> *Significance: Concrete evidence of multi-system fragmentation*

> "I've received a specific version of a requirement, and I have no way of knowing if a new version has been released. I'm just not made aware of it easily."
> *Context: Discussing what happens if CA releases an updated SWRD mid-quarter*
> *Significance: Change blindness is not just Julia's management problem — it reaches every practitioner*

> "It's time-consuming to read through a requirement and spend the effort trying to understand what it's doing, only to realize it's not something we even want to pursue."
> *Context: Magic wand question — describing the core inefficiency he wants solved*
> *Significance: Direct statement of his #1 pain point*

### Need/Goal Quotes
> "If there were a way to quickly identify which ones are actually worthwhile to look at — or if upstream processes improved so that by the time the list reaches me, everything in it is something I'm going to have to write tests for — that would be huge."
> *Context: Answering the magic wand question*
> *Significance: Most specific product requirement Nick articulated — upstream filtering or triage*

### Insight Quotes
> "A lot of these come from previous development efforts that were much more rules-based... is this still applicable to what we're trying to do, or is it a product of legacy systems that just hasn't been updated?"
> *Context: Explaining his mental model for evaluating SWRDs*
> *Significance: The applicability heuristic he uses is inspectable and potentially automatable*

### Notable Examples & Stories
- **Vehicle following SWRD (rules-based)**: Nick shared a screen example of an SWRD specifying exact acceleration bounds based on speed ranges. Clear rules-based prescription. He flagged it as "too performance-specific" — not how Woven's ML model works. Classic example of the legacy requirements mismatch.
- **URD linkage mismatch**: Nick noted some SWRDs are linked to URDs that have no logical relationship to the requirement's content. This is another signal that upstream CA curation is insufficient.

---

## 🎯 Design & Product Implications

### High Priority Recommendations

- **Unified SWRD review view**: Combine PRD row, URD context, and SWRD content in one interface so Nick doesn't need to manage three browser tabs per requirement.
  - *Evidence*: Screen share showed him switching between three systems; he described it as a standard workflow
  - *Impact*: Reduces per-SWRD review time; decreases context-switching errors
  - *Implementation*: Fetch and display PRD metadata, URD description, and SWRD content together; link back to sources for reference

- **Version change detection with diff**: Automatically detect when a new version of a locked SWRD is published; surface a diff so Nick can quickly assess impact.
  - *Evidence*: "I have no way of knowing if a new version has been released."
  - *Impact*: Prevents late-quarter scrambles when requirements change mid-cycle
  - *Implementation*: Poll SWRD Git system for version changes; store snapshot at PRD lock time; generate diff on demand

- **SWRD triage classification**: Flag incoming SWRDs as "likely rules-based/legacy" vs. "likely ML-applicable" based on content analysis.
  - *Evidence*: Nick's evaluation heuristic (prescribes specific thresholds → legacy; interface-level → applicable) is consistent and articulable
  - *Impact*: Directly addresses his magic wand wish; could cut review time for the most obviously inapplicable SWRDs
  - *Implementation*: LLM-based classifier trained on Nick's articulated heuristic; surfaced as a confidence score or flag, not a hard filter

### Medium Priority Considerations

- **Rejection tracking**: Rejected SWRDs should be logged with reason, not silently dropped. This enables the traceability that Julia needs and prevents the same bad SWRDs from re-entering the pipeline.
  - *Evidence*: Nick noted rejected SWRDs stall in place; no structured tracking exists
  - *Timeline*: Can be addressed alongside JAMA ingestion workflow

- **Process alignment between Nick and Hannah**: Nick halts on bad SWRDs; Hannah ingests everything. A tool that enforces or suggests a consistent strategy would reduce team-level traceability gaps.
  - *Timeline*: Process/team decision, but tool can scaffold either approach

### Future Exploration Areas

- **SCRD decomposition**: Once component architecture is finalized (Nate's work), the tool should support decomposing system-level SWRDs into component-level SCRDs. This is blocked until the architecture exists.
- **Developer co-review workflow**: How does the SWRD acceptance handoff to a developer work? What does developer sign-off look like in JAMA or elsewhere?

### Technical Considerations

- **Git-overlay SWRD system**: No official API mentioned; web scraping or manual export may be required to get SWRD content programmatically. This is a key integration risk.
- **JAMA entry creation**: Nick's process is to create the SWRD entry in JAMA first, then write the SWQT. Tool should match this sequence.
- **Japanese text handling**: Nick will include Japanese text verbatim. Tool should pass it through without modification, but offer LLM-assisted translation as an option.

---

## 📝 Additional Context & Follow-Up

### Organizational Context

- Nick's capability group (in-lane) did not have an assigned developer at interview time — a significant gap that means any SWQT he writes now has no immediate consumer.
- Nick is relatively new to SWQT authoring and depends heavily on Hannah as a quality reference. This is a knowledge concentration risk if Hannah's capacity is constrained.
- No formal acceptance status tracking exists since the old spreadsheet was retired; the PRD process hasn't filled that gap yet.

### Cross-Interview Connections

- **Hannah Lane**: Nick defers to Hannah as the SWQT authority; used her WOVI prompt; would review his first SWQTs with her. Hannah's "ingest everything" strategy contrasts with Nick's "halt and comment."
- **Julia Pralle**: Nick's manager; her intake concerns (change detection, single source) manifest at Nick's level as multi-tab navigation and version blindness.
- **Andrea Zotelli**: Similar role but working on component-level (bottom-up backlog) rather than system-level intake. Nick represents the top-down intake practitioner.

### Follow-Up Questions

- Is there an API or export mechanism for the SWRD Git-overlay system?
- What does URD-to-SWRD linkage look like in the raw data — is the relationship always 1:N?
- Once the developer is assigned for in-lane, how will SWRD/SWQT sign-off be tracked?

---

## 🔖 Analysis Tags

**User Segment:** Practitioner (in-lane) — performs intake and SWQT authoring for a specific capability group
**Experience Level:** Intermediate — 2.5 years at Woven; newer to SWQT authoring specifically
**Organization Type:** Large enterprise (Toyota autonomous vehicle subsidiary)
**Use Case:** SWRD triage and review, JAMA ingestion, SWQT drafting, developer handoff
**Key Themes:** Multi-system fragmentation, version blindness, legacy vs. ML requirements, halt-vs-ingest tension, developer alignment
**Pain Points:** No unified review interface, no change notifications, no upstream filtering, no version compare tool
**Technical Sophistication:** High domain sophistication; comfortable with Git, JAMA, LLM tools; pragmatic about process
