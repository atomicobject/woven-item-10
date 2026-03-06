# Multi-Interview Synthesis

**Date:** March 5, 2026
**Interviews Analyzed:** 3
**Date Range:** March 2–4, 2026
**Synthesized By:** Atomic Object / Item 10 Discovery Team

---

## 📊 Overview

**Total Participants:** 3
**User Segments Represented:**

- Product Delivery Leadership (Julia P — Product Delivery Manager)
- Systems & Validation Engineering, Practitioner — Senior (Hannah Lane — Lane Change / Out-of-Lane Maneuvers)
- Systems Verification & Validation Engineering, Practitioner — Mid-level (Nick Carcione — In-Lane Capabilities)

**Research Focus:**
Understanding the end-to-end requirements intake and JAMA assembly process — how SWRDs (Software Work/Interface Requirements Documents) flow from Toyota/CA through the PRD into JAMA, where they are linked to SWQTs (Software Work/Interface Qualification Tests) and ultimately handed to development teams.

### Key Findings Summary

All three participants independently identified **silent upstream requirement changes** as their most acute pain point: requirements change in source systems (Git, Google Docs, CA) without any notification reaching Julia's team, causing weeks of work to be invalidated and making it impossible to explain delays to leadership. This pain is compounded by a **fragmented, multi-format document ecosystem** (Git repos, Google Sheets, Google Docs, Confluence, JAMA) that teams will not consolidate, requiring practitioners to manually navigate 3–4 separate systems per requirement. The JAMA assembly process itself — copying SWRDs verbatim, then generating and entering SWQTs — is **entirely manual at enormous scale** (~600–7,000 requirements per capability group), with practitioners already relying on LLM tools to absorb roughly 80–90% of the cognitive effort. A further structural problem is that many requirements were **written for Toyota's legacy rules-based system (TSS-4)** and don't apply to Woven's ML-based implementation, creating costly review-and-reject cycles with no efficient filter upstream. The overarching strategic need, articulated most clearly by Julia, is a **single source of truth** in JAMA with visible change history — not to replace judgment, but to create one surface where accountability can live and where delays can be explained with evidence.

---

## 🎯 Common Themes

### Theme 1: Requirements Change Silently and Without Warning

**Frequency:** 3 out of 3 participants
**User Segments:** All segments

**Description:**
Requirements in upstream source systems (Git repositories managed by CA, Google Docs, spreadsheets) are regularly modified without any notification reaching Julia's team. Practitioners discover changes only by accident, often after having invested significant time in the prior version. This is the most consistently articulated pain point across all three interviews.

**Evidence:**

- **Julia P**: "Things change all the time. They add more stuff, they change requirements. We don't know about anything. We always have to say, 'oh, we're delayed, we're delayed,' and then it's why, and then you have to go back and talk to 10 people."
- **Hannah Lane**: "The problem is that we're so far removed from the writers that requirements will change and we won't be told about it." She described a specific incident: "They actually listened, but they didn't tell me. I thought I was shouting into a void, and they ended up changing everything without letting me know."
- **Nick Carcione**: "Right now there's no notification mechanism. I've received a specific version of a requirement, and I have no way of knowing if a new version has been released."

**Variations:**

- Julia frames this at the organizational/accountability level — she cannot explain delays to her director without a visible change record.
- Hannah frames it as a version-control problem and has developed a workaround: copying requirements into JAMA with explicit version numbers and timestamps as a paper trail.
- Nick is newer to the process and frames it prospectively: he anticipates this will cause pain when mid-quarter changes invalidate a full quarter of development work.

**Design Implications:**

- A change detection mechanism on source systems (Git webhooks, Google Doc polling) is the single highest-impact feature across all participants.
- Notifications don't need to be real-time; a daily digest or change flag at the JAMA item level would be sufficient.
- The solution should distinguish between cosmetic edits and substantive requirement changes.

---

### Theme 2: Requirements Are Scattered Across Many Systems That Won't Consolidate

**Frequency:** 3 out of 3 participants
**User Segments:** All segments

**Description:**
Requirements for different capability groups and requirement types (SWRD, SBRD, TPID) exist in different systems — Git repositories, Google Docs, Google Sheets, Confluence, and JAMA — and upstream teams have no intention or ability to change where they store things. Practitioners must manually navigate multiple systems per requirement.

**Evidence:**

- **Julia P**: "They have it all in different places, and they will not change that fact. So all we can do is… somehow still need to know when things change in the source itself." Also: "We have, like, tables and Excel sheets that are reaching to other sources of requirements all the time."
- **Hannah Lane**: "All the lane change requirements I've seen so far are in Git. But it varies by team. The map team was in JAMA actually, and the perception team was in a Google Doc."
- **Nick Carcione**: Demonstrated a live workflow touching three separate websites/documents in a single SWRD review: the PRD (Google Doc), the URD spreadsheet (Google Sheets), and the SWRD repository site (Git overlay).

**Variations:**

- Julia accepts fragmentation as a given and focuses on pulling everything through the PRD as a single intake point.
- Hannah focuses on lane change (Git-based) and has a reasonably predictable source; she's less exposed to the multi-format chaos than Andrea's team.
- Nick explicitly noted the overhead of "flipping back and forth between tabs" to compare requirement versions.

**Design Implications:**

- The tool cannot assume a single source format; it must be built to interface with at least Git and Google Docs, and extensibly support others.
- The PRD is already becoming the aggregation layer; the tool can lean on it as the intake manifest rather than directly consuming all upstream sources.
- MCP server access and authentication patterns per source system will be a key architectural constraint to resolve early.

---

### Theme 3: Requirements Were Written for a Legacy Rules-Based System and Don't Apply to ML

**Frequency:** 3 out of 3 participants
**User Segments:** All segments

**Description:**
A significant portion of the SWRDs received from CA/Toyota originate from TSS-4 (Toyota Safety System 4), a production system with a rules-based implementation. These requirements prescribe specific thresholds, boolean flags, and explicit calculation logic that is incompatible with Woven's ML-based approach. Practitioners must invest time reviewing these requirements only to reject them, with no efficient upstream filter.

**Evidence:**

- **Julia P**: "Last year a bunch of requirements feedback was: they're not written for our system, we can't use them in an ML-based system. And then we communicated this back to CA, and therefore also TMC."
- **Hannah Lane**: "These requirements were originally written for the TSS-4 — written in rules-based logic, but we're implementing in ML. Having overly prescriptive requirements from a rules-based system is very limiting for an ML approach."
- **Nick Carcione**: "It's not how our ML model works… The biggest question is usually: is this still applicable to what we're trying to do, or is it a product of legacy systems that just hasn't been updated?" He demonstrated a requirement that prescribed specific acceleration bounds for a vehicle following scenario — valid for rules-based code but not for ML.

**Variations:**

- Julia has been pushing back on this at the organizational level for a year and has established a communication channel back to CA/TMC.
- Hannah expects the over-prescriptiveness issue to intensify as more requirements are reviewed, having already encountered it last year.
- Nick frames this as a "should we do it?" question rather than a "can we do it?" question — the ML capability often exists, but the requirement format is wrong.

**Design Implications:**

- Tooling that automatically flags performance-prescriptive requirements (specific numeric thresholds, acceleration bounds) could reduce wasted review cycles.
- The rejection/feedback workflow should be first-class: when a practitioner rejects an SWRD, the tool should capture the reason and surface it to the PRD/product owner.
- Underlying needs don't disappear when an SWRD is rejected; the tool should support "partially accept" or "capture intent separately" workflows.

---

### Theme 4: The JAMA Assembly Process Is Entirely Manual at Enormous Scale

**Frequency:** 2 out of 3 (Hannah, Nick — Julia understands but does not do the work)
**User Segments:** Systems Engineering Practitioners

**Description:**
Both Hannah and Nick independently described a copy-paste-heavy workflow: open the PRD, follow links to source SWRD documents, manually copy requirement text into JAMA, then generate SWQTs using an LLM (WOVI/Gemini), curate the output, and enter it into JAMA with proper linkages. Hannah estimated ~600–7,000 SWRDs for lane change alone.

**Evidence:**

- **Hannah Lane**: "My strategy right now is to just get everything into JAMA. Then I can say, 'we're passing zero out of 7,000 test cases,' which I think will drive action faster than trying to describe the problem in words." She described using the LLM getting her "about 90%" of the way on SWQT generation.
- **Nick Carcione**: "I'd run the prompt [Hannah's WOVI prompt], check the output — from what I've heard, it usually gets you about 80% of the way there, but you definitely need to do a manual review." He had not yet progressed far into JAMA entry as of his interview.

**Variations:**

- Hannah has a more developed process with a personal template, explicit version tracking, and an LLM prompt she authored and shared.
- Nick is newer and is just beginning the SWRD review phase; his SWQT creation process is still theoretical.
- Both confirmed the same sequential workflow: SWRD into JAMA first, then SWQT linked upward to it.

**Design Implications:**

- Automating the SWRD copy-paste step (linking from PRD → reading source → creating JAMA item) would eliminate the most time-consuming low-skill task.
- The LLM SWQT generation is already partially automated; the gap is tooling that connects it directly to JAMA creation rather than requiring manual clipboard transfer.
- Any automation must preserve Hannah's version-linking pattern (copying with explicit source URL + version) for auditability.

---

### Theme 5: There Is No Formal Feedback or Change Management Process

**Frequency:** 3 out of 3 participants
**User Segments:** All segments

**Description:**
When practitioners identify a problem with a requirement — incomplete, over-prescriptive, contradictory, or inapplicable — the only recourse is to leave a comment in the source document or communicate informally through Slack/meetings. There is no formal change management process, no acknowledgment mechanism, and no way to confirm whether feedback was acted on.

**Evidence:**

- **Julia P**: "We have a feedback cycle of explaining and pushing back on certain calculations, measurements, requirements. And this is not there... If we want to change something, there's no real process for developers or my team to say, hey, this requirement needs to be rewritten."
- **Hannah Lane**: "My feedback to the PDM team is: 'I don't get it. Please finish it.' What happened six months ago when I raised this was — they actually listened, but they didn't tell me."
- **Nick Carcione**: "What I did this time was leave a comment directly in the document — basically saying these are too performance-specific." He noted this becomes "a conversation between me and product about how to handle it."

**Variations:**

- Julia is actively building a Change Management Board process and sees JAMA review workflows as a potential mechanism.
- Hannah has proposed using JAMA item states (Draft → In Review → Approved) as a proxy tracking mechanism, but hasn't implemented it.
- Nick's experience with the change process is still limited; he defers to Hannah as the subject matter expert.

**Design Implications:**

- A structured feedback/rejection workflow within the tool would formalize what is currently done via comments.
- JAMA item state transitions (Draft/In Review/Approved/Rejected) should be first-class actions in the tool's UX.
- Notifications to PRD/product owners when a SWRD is flagged or rejected would close the loop that currently goes silent.

---

## 🎪 User Goals

### Goal 1: Single Source of Truth for All Requirements

**Frequency:** 3 out of 3 participants
**Priority:** High

**Core Objective:**
Have one authoritative location — JAMA — where all requirements (SWRD, SBRD, TPID) for the quarter can be found, compared, and tracked, regardless of where they originated.

**Success Criteria (from user perspective):**

- Julia can point a director or stakeholder to a single JAMA project and show a complete picture of Q1 requirements, their status, and any changes.
- Hannah can run a query showing "X out of Y test cases passing" with full requirement-to-test linkage.
- Nick can look up any SWRD and know definitively which version it was entered from and whether a newer version exists.

**Supporting Evidence:**

- **Julia P**: "Just one document I have to go to, basically, and that makes it way easier to do in the end, because then I can build one solution for this one project I have."
- **Hannah Lane**: "Our goal is to get all of those requirements into JAMA so we can version-control and do all the traceability magic that JAMA enables — because Google Docs is almost useless for requirements."

**Current Gaps:**
Requirements live in 4+ systems. The PRD is the closest thing to an intake manifest, but it only contains links — not content — and those links change without tracking.

---

### Goal 2: End-to-End Traceability (Requirement → Test → Implementation)

**Frequency:** 3 out of 3 participants
**Priority:** High

**Core Objective:**
Establish a verifiable chain from each incoming SWRD through to its test case in JAMA and its unit test implementation in Git, with pass/fail status visible in one place — ultimately to satisfy Toyota's traceability report requirement.

**Success Criteria (from user perspective):**

- For any given SWRD, answer: Does a test case exist in JAMA? Is there a corresponding unit test in Git? Is it passing?
- Produce a TMC-compliant traceability report showing coverage and pass rate across all SWRDs, SBRDs, and TPIDs.

**Supporting Evidence:**

- **Julia P**: "TMC, of course, wants to know the whole traceability overview of what we're looking at. Requirements, test cases, unit tests — are we passing or failing? We need the information about everything."
- **Hannah Lane**: "The big one is traceability. If we could get a tool that confirms: is there a unit test in Git, a test case written in JAMA, and an associated requirement — and that full line exists for every single requirement — that would be awesome."
- **Nick Carcione**: References a prior spreadsheet that tracked "SWRD acceptance, SWQT creation, developer acknowledgment, and developer sign-off on implementation" as an example of the desired workflow state model.

**Current Gaps:**
The traceability chain does not exist end-to-end. SWRDs are partially in JAMA; SWQTs are being created; unit tests are being written by some teams but not all; there is no tool that connects all three layers.

---

### Goal 3: Change Detection and Version Awareness

**Frequency:** 3 out of 3 participants
**Priority:** High

**Core Objective:**
Know immediately — or at least within a reasonable time window — when a requirement that has been ingested into JAMA has changed in its upstream source, so practitioners can decide whether to update their test cases and alert developers.

**Success Criteria (from user perspective):**

- Automated notification (Slack, email) when a linked SWRD source version changes.
- JAMA item clearly flagged as "source changed since ingestion" with a diff or version comparison.
- No more discovering mid-quarter that a requirement changed weeks ago.

**Supporting Evidence:**

- **Nick Carcione**: "It would really hurt to develop everything over the course of a quarter, get to the next quarter, and then realize it was changed two weeks in and we need to redo everything."
- **Hannah Lane**: "His job [Masutani-san] is to click that link and see if anything has changed. That's one of my bigger worries with the whole process. If you guys can automate that, that would be great."
- **Nate Papes (debrief)**: Proposed Git webhooks as a practical implementation: "A daily digest of, okay, here's all the things we've noticed in these codebases."

**Current Gaps:**
No notification mechanism exists. The only current strategy is Hannah's practice of copying requirements with explicit version numbers, so that the team can at least identify which version they worked from if disputes arise later.

---

### Goal 4: Defensible Delay Attribution and Stakeholder Visibility

**Frequency:** 2 out of 3 (Julia, Hannah)
**Priority:** High

**Core Objective:**
Be able to demonstrate with data — not just narrative — that delays are caused by upstream requirement quality or changes, not by Julia's team's execution failures.

**Success Criteria (from user perspective):**

- Pull up JAMA and show: "Here are the 47 requirements that changed mid-quarter."
- Show: "Here are the 12 requirements we flagged as unusable. Here is our feedback. Here is when it was sent. Here is when/whether it was addressed."

**Supporting Evidence:**

- **Julia P**: "You can never build the full picture of telling my director why we screw up all the time is because the intake is crap. That's what we need to do."
- **Hannah Lane**: "If someone three levels above me asks how the requirements are going, if I can pull up JAMA and show 'zero out of 7,000 test cases passing,' that drives urgency much faster."

**Current Gaps:**
Without a visible change log or flagging mechanism, delays are reported anecdotally, making it difficult to escalate or hold upstream accountable.

---

## ⚠️ Pain Points

### Pain Point 1: No Notification When Requirements Change Upstream

**Frequency:** 3 out of 3 participants
**Severity:** High
**User Segments Affected:** All

**Description:**
Requirements in Git, Google Docs, and CA-managed systems are modified without any alert reaching Julia's team. The PRD links to these sources, but the PRD itself also changes. Neither the source changes nor PRD changes trigger any workflow or notification.

**Impact:**

- **Time Cost**: Weeks of JAMA assembly work (SWRDs + SWQTs) can be invalidated retroactively by an upstream change.
- **Emotional Cost**: High frustration; Hannah described feeling like she was "shouting into a void."
- **Business Cost**: Teams cannot explain delays with evidence; bonuses tied to delivery metrics are at risk.

**Current Workarounds:**

- Hannah copies requirements verbatim with version numbers + source URLs so she can prove what version she worked from.
- No active change monitoring; discovery is accidental.
- Masutani-san is nominally responsible for checking all links in the lane change PRD tab each quarter — described by Hannah as "a massive ask."

**Key Quotes:**

> "Things change all the time. They add more stuff, they change requirements. We don't know about anything." — Julia P
> "We need a way to know when things change. Our strategy right now is to copy everything into JAMA with timestamps and version numbers, so that if things blow up later, we can point to the record." — Hannah Lane

**Design Opportunity:**
Git webhooks on SWRD source repositories; polling or comparison mechanisms for Google Docs sources; JAMA item state flagging when source diverges from cached version.

---

### Pain Point 2: Multi-Step, Multi-System Manual Assembly Process

**Frequency:** 2 out of 3 (Hannah, Nick — Julia understands but does not execute)
**Severity:** High
**User Segments Affected:** Systems Engineering Practitioners

**Description:**
Each SWRD intake requires opening 3–4 separate websites (PRD, URD spreadsheet, SWRD source site, JAMA), manually copying content across them, and then separately prompting an LLM for SWQT generation and entering the output. At ~600–7,000 requirements per capability group, this is an enormous manual burden even with LLM assistance.

**Impact:**

- **Time Cost**: Hannah estimated this process could scale to 700+ LLM copy-paste operations for test cases alone; she called it "700 times" in reference to just SWQT generation.
- **Emotional Cost**: Tedious and error-prone; easy to lose track of which items have been entered.
- **Business Cost**: Slow intake pace means traceability coverage lags behind the development team's actual work.

**Current Workarounds:**

- Hannah uses WOVI (Gemini) to generate SWQTs at ~90% accuracy; Nick uses Hannah's prompt at ~80%.
- Both still manually enter the LLM output into JAMA.
- No automation for the SWRD copy-paste step itself.

**Key Quotes:**

> "If that [test case generation] could be automated, it would save an enormous amount of time. And if a requirement changes, having the system automatically flag or even update the associated test case would be really cool." — Hannah Lane
> "I'd run the prompt, check the output — from what I've heard, it usually gets you about 80% of the way there, but you definitely need to do a manual review." — Nick Carcione

**Design Opportunity:**
Automated SWRD ingestion from PRD links → JAMA item creation. LLM SWQT generation wired directly to JAMA write. Human review step preserved but bookended by automation.

---

### Pain Point 3: Requirements Not Usable for an ML System

**Frequency:** 3 out of 3 participants
**Severity:** Medium-High
**User Segments Affected:** All

**Description:**
Many SWRDs originate from Toyota's TSS-4 (rules-based production system) and prescribe specific thresholds, flags, and calculation logic incompatible with Woven's ML-based implementation. Practitioners invest significant time reviewing these requirements only to reject them, and there is no upstream filter to prevent them from appearing in the PRD in the first place.

**Impact:**

- **Time Cost**: Nick described reading through a requirement in detail to understand it, only to realize it's not usable — time lost.
- **Emotional Cost**: Frustration at the mismatch between what's required and what makes engineering sense.
- **Business Cost**: Rejection cycles must be managed through an informal feedback chain with CA that moves slowly and lacks acknowledgment.

**Current Workarounds:**

- Practitioners leave comments in source documents or communicate via PDM team to CA.
- Hannah has started working with the behavior team before signing off on the PRD to identify implementability conflicts earlier.
- Nick filters independently before entering anything into JAMA.

**Key Quotes:**

> "It's time-consuming to read through a requirement and spend the effort trying to understand what it's doing, only to realize it's not something we even want to pursue." — Nick Carcione
> "Having overly prescriptive requirements from a rules-based system is very limiting for an ML approach. I was pushing back on that over-prescriptiveness last year." — Hannah Lane

**Design Opportunity:**
Heuristic flagging for performance-prescriptive SWRDs (numeric thresholds, specific ML-incompatible patterns). Structured rejection workflow with reason capture and routing to PRD/product owner.

---

### Pain Point 4: Political and Structural Distance from the Requirement Authors

**Frequency:** 2 out of 3 (Julia, Hannah)
**Severity:** Medium
**User Segments Affected:** All (structural constraint)

**Description:**
CA does not communicate directly with Woven's systems engineering team for political reasons. The PDM team was inserted as an intermediary, but this adds another layer between practitioners and the source of truth. Developers have started going directly to CA out of necessity, creating unofficial channels that further fragment information.

**Impact:**

- **Time Cost**: Negotiating requirement changes takes weeks through 2–3 intermediary layers.
- **Emotional Cost**: Hannah explicitly dislikes the multi-layer process; Julia acknowledges it's imperfect but sees it as politically necessary.
- **Business Cost**: Unofficial developer-CA communication creates untracked requirement drift.

**Current Workarounds:**

- PDM team theoretically handles CA negotiation on Woven's behalf.
- Developers use informal CA contacts to unblock themselves.
- Hannah: "That's actually driving even more confusion and more versioning issues. But you also don't want to shut it down because they're getting work done."

**Key Quotes:**

> "CA doesn't like us for political reasons, so they won't talk to us directly. What we've done is inserted this PDM team between us and CA." — Hannah Lane
> "I don't like it because now we have two groups between us and the ultimate Toyota requirement. It's weird." — Hannah Lane

**Design Opportunity:**
Tooling cannot solve organizational politics, but it can reduce dependence on informal channels by making changes visible automatically — removing the need to ask CA "did you change this?" when a webhook or diff comparison can answer that question.

---

### Pain Point 5: No Workflow State or Completion Tracking

**Frequency:** 2 out of 3 (Hannah, Nick)
**Severity:** Medium
**User Segments Affected:** Systems Engineering Practitioners

**Description:**
There is no consistent mechanism for tracking where each SWRD or SWQT is in the process — whether it's been reviewed, entered, flagged, completed, or handed to a developer. A spreadsheet formerly served this function; it was discontinued and hasn't been replaced under the new PRD workflow.

**Impact:**

- **Time Cost**: Teams must maintain ad hoc personal tracking to avoid losing their place.
- **Emotional Cost**: Uncertainty about whether work is being done correctly or completely.
- **Business Cost**: No visibility for Julia into team progress; no visibility for developers into which SWQTs are ready.

**Current Workarounds:**

- Hannah is proposing JAMA item states (Draft/In Review/Approved); not yet implemented.
- Nick references an older spreadsheet model as the desired target and expects it to be rebuilt.

**Design Opportunity:**
First-class workflow state transitions in the tool (New → In Review → Accepted → Rejected / Deferred). Notifications to assigned developers when SWQTs are ready. Dashboard view of completion rate per capability group.

---

## 🔄 Behavioral Patterns

### Pattern 1: PRD-Driven JAMA Assembly Workflow

**Frequency:** 2 out of 3 (Hannah, Nick)
**User Context:** Quarterly, at start of each sprint cycle

**Pattern Description:**
Both Hannah and Nick follow the same general workflow when assembling SWRDs and SWQTs in JAMA. It begins with the PRD as the intake manifest and works through each linked SWRD individually.

**Typical Workflow:**

1. Receive PRD from PDM team (Google Doc with tabs per capability group)
2. Open PRD, identify linked SWRDs for the quarter (ordered by priority)
3. Navigate to SWRD source (Git repo overlay site or other system)
4. Read SWRD: summary, reason, interface section, specification
5. Evaluate usability: is it implementable? Is it interface-level? Is it applicable to ML?
6. If usable: copy SWRD content verbatim into JAMA, noting source URL + version
7. Generate SWQT using Hannah's WOVI prompt (paste requirement, receive test cases)
8. Curate LLM output (manual review, add edge cases, remove hallucinations)
9. Enter SWQT into JAMA, link to parent SWRD
10. Signal readiness to development team (process undefined; tracked informally)

**Environmental Factors:**

- 3–4 browser tabs open simultaneously (PRD, URD spreadsheet, SWRD site, JAMA)
- WOVI (Gemini) open in a separate window for LLM assistance
- No integrated tooling; all coordination is manual tab-switching
- Authentication timeouts in JAMA add minor friction (Hannah was logged out mid-demo)

**Variations by User Type:**

- **Hannah (senior)**: Full workflow including both SWRD ingestion and SWQT generation; has a personal LLM prompt; also consults behavior team for implementability
- **Nick (mid-level)**: Primarily in the SWRD review phase as of interview; plans to adopt Hannah's WOVI prompt; defers to Hannah as quality reference for SWQTs

**Supporting Evidence:**

- **Hannah Lane**: "This is the meat of the document: a features and requirements list where everything is prioritized. Within each of those priorities, we have SWRDs. I just use the copy button and paste it in."
- **Nick Carcione**: "I'd probably put the SWRD into JAMA first… and then I'd go in and write the SWQT. That's when I'd use the prompt."

**Implications:**
The core workflow is stable and understood by both practitioners. The highest-leverage automation targets are steps 6 (SWRD copy-paste) and 8 (SWQT LLM-to-JAMA transfer), both of which are currently manual clipboard operations.

---

### Pattern 2: Parallel Behavior Team Consultation

**Frequency:** 1 out of 3 (Hannah — Nick has not reached this phase yet)
**User Context:** Before signing off on the quarterly PRD

**Pattern Description:**
Before formally accepting the PRD's scope, Hannah works with the behavior development team to verify that the prioritized SWRDs are actually implementable this quarter. This is a distinct workstream from the JAMA assembly process and sometimes surfaces conflicts that block PRD sign-off.

**Typical Workflow:**

1. Identify SWRDs flagged as high-priority in the PRD
2. Present to behavior team: "Can we implement this this quarter?"
3. Behavior team identifies blockers (e.g., dependency on HMI interface not yet available)
4. If alignment fails: communicate blockage back to PDM team
5. PRD remains unsigned until alignment is reached

**Supporting Evidence:**

- **Hannah Lane**: "For example — this one is a requirement about input from an HMI interface. We don't have an HMI interface right now because we're on dev vehicles. So it was a weird choice for highest priority."

**Implications:**
This pattern confirms that SWRDs can be structurally valid but still not actionable in a given quarter. Tooling should support a "deferred" or "blocked by dependency" state distinct from "rejected."

---

### Pattern 3: Defensive Documentation Strategy

**Frequency:** 1 out of 3 (Hannah — Julia endorses the principle)
**User Context:** Ongoing; part of every SWRD ingestion

**Pattern Description:**
Hannah deliberately copies requirements into JAMA with explicit source URLs and version numbers not just for reference, but as a defensive paper trail — so that if a requirement changes or is disputed later, she can point to the exact version she worked from.

**Typical Workflow:**

1. Copy SWRD content verbatim (no paraphrasing)
2. Append source Git URL
3. Note version number (e.g., "v2.0")
4. Continue work; do not re-check source unless notified

**Supporting Evidence:**

- **Hannah Lane**: "Our strategy right now is to copy everything into JAMA with timestamps and version numbers, so that if things blow up later, we can point to the record and say, 'We did all our work based on this version of this requirement.'"
- **Hannah Lane**: "Right now if someone three levels above me asks how the requirements are going, I can pull up JAMA and show 'zero out of 7,000 test cases passing.' That drives urgency much faster."

**Implications:**
This pattern should be automated and standardized — the tool should automatically capture source URL, version, and ingestion timestamp as metadata on every JAMA item it creates.

---

### Pattern 4: LLM-Assisted Test Case Generation

**Frequency:** 2 out of 3 (Hannah, Nick)
**User Context:** After SWRD is entered into JAMA; before SWQT creation

**Pattern Description:**
Both practitioners use WOVI (Woven's internal AI tool, powered by Gemini) with a prompt authored by Hannah to generate draft SWQTs. The LLM produces an initial output that requires human curation — catching hallucinations, adding edge cases, and verifying logical completeness.

**Typical Workflow:**

1. Open Hannah's saved WOVI prompt
2. Paste SWRD text into prompt
3. Receive: plain English translation + draft test cases
4. Review output: remove invented requirements, add edge cases (true→false transitions, signal loss, etc.)
5. Enter curated output into JAMA SWQT template
6. Link SWQT to parent SWRD

**Supporting Evidence:**

- **Hannah Lane**: LLM gets her "about 90% of the way there now — a year ago it was about 70%."
- **Nick Carcione**: "From what I've heard, it usually gets you about 80% of the way there, but you definitely need to do a manual review."

**Implications:**
LLM-assisted SWQT generation is already a de facto standard practice on Julia's team. The immediate opportunity is not to introduce AI into the workflow but to wrap what practitioners are already doing in tooling that removes clipboard friction and writes directly to JAMA.

---

## 💡 Suggestions & Ideas

### Feature Category 1: Automated Change Detection on Source Requirements

**Frequency:** 3 out of 3 participants suggested related ideas
**Priority:** High

**User Need:**
Know when an upstream SWRD, SBRD, or TPID has changed since it was last ingested into JAMA.

**Suggested Solutions:**

- **Git webhook-based change alerts** — Mentioned by Hannah, Nate (debrief)
  - *Rationale*: Source requirements for lane change and in-lane live in Git repos; webhooks can trigger on any commit to the relevant files
  - *Expected benefit*: Near-real-time notification without manual checking; removes reliance on Masutani-san to check every link manually
- **Daily change digest (Slack/email)** — Mentioned by Nick, Nate (debrief)
  - *Rationale*: Practitioners don't need real-time alerts; a daily summary of changed requirements is actionable and low-interruption
  - *Expected benefit*: Reduced cognitive overhead; practitioners can triage each morning
- **JAMA item flag: "Source diverged"** — Implied by Hannah, Julia
  - *Rationale*: When a source version update is detected, mark the JAMA item with a visual flag and link to the diff
  - *Expected benefit*: Traceability remains intact; practitioners know exactly which JAMA items need review

**Design Considerations:**

- Google Docs sources require polling (no native webhook); must define a reasonable polling interval
- Differentiating cosmetic edits from substantive requirement changes may require LLM assistance or diff heuristics
- Notifications should include a preview of what changed, not just that something changed

**Recommended Action:** Prioritize immediately; this is the single most-requested capability across all interviews.

---

### Feature Category 2: Automated SWRD Ingestion into JAMA

**Frequency:** 2 out of 3 practitioners (Hannah, Nick)
**Priority:** High

**User Need:**
Eliminate the manual copy-paste step of reading an SWRD from its source and creating a JAMA item.

**Suggested Solutions:**

- **PRD-driven batch ingestion** — Implied by Hannah and Nick's described workflow
  - *Rationale*: The PRD already contains links to all in-scope SWRDs for the quarter; using it as a manifest enables batch processing
  - *Expected benefit*: Eliminates the primary manual bottleneck; would save potentially hundreds of hours per quarter across capability groups
- **Auto-populate JAMA item with source metadata** — Mentioned by Hannah
  - *Rationale*: Each JAMA item should include source URL, version number, and ingestion timestamp automatically
  - *Expected benefit*: Removes defensive manual documentation burden; makes version tracking auditable by default

**Design Considerations:**

- JAMA Connect has a Python REST API (noted by Gus in debrief) that can support programmatic item creation
- Authentication to Git/source systems is a prerequisite
- The system must preserve verbatim requirement text (no LLM paraphrasing at ingestion) per Hannah's stated practice

**Recommended Action:** High priority; directly addressable given the PRD-as-manifest pattern is already established.

---

### Feature Category 3: LLM-to-JAMA SWQT Pipeline

**Frequency:** 2 out of 3 practitioners (Hannah, Nick)
**Priority:** Medium-High

**User Need:**
Remove the manual clipboard steps between LLM SWQT generation (currently in WOVI) and JAMA entry.

**Suggested Solutions:**

- **WOVI/LLM → JAMA direct write** — Mentioned by Hannah
  - *Rationale*: Hannah already has a working prompt; the gap is the manual transfer of output to JAMA
  - *Expected benefit*: Eliminates one manual step for ~700+ SWQTs per capability group per quarter
- **Auto-trigger SWQT generation on SWRD ingestion** — Mentioned by Hannah
  - *Rationale*: Once an SWRD is ingested, immediately generate candidate SWQTs and queue them for human review
  - *Expected benefit*: Human reviewer only needs to approve/curate, not initiate; reduces pipeline latency
- **Cascade unlock for SWQT when SWRD changes** — Mentioned by Hannah
  - *Rationale*: When a source requirement changes and the JAMA SWRD is updated, automatically flag the linked SWQT for re-review and notify the developer who owns the unit test
  - *Expected benefit*: Closes the full traceability loop; prevents stale test cases from persisting after requirement changes

**Design Considerations:**

- Human curation step must be preserved; LLM output should never be written directly to JAMA without review
- Hannah's existing WOVI prompt should be the starting point for the generation step
- Developer notification (email/Slack) when their unit test is affected by a SWQT change is valuable but adds complexity

**Recommended Action:** Explore in the near term; foundational for the full traceability vision.

---

### Feature Category 4: Structured Rejection / Feedback Workflow

**Frequency:** 3 out of 3 participants
**Priority:** Medium

**User Need:**
When a practitioner identifies a problematic SWRD (TBD content, over-prescriptive, ML-incompatible, contradictory), provide a structured mechanism to reject it, capture the reason, and route the feedback to the PRD/product owner.

**Suggested Solutions:**

- **JAMA item state: Rejected / Deferred** — Mentioned by Hannah, Nick, Julia
  - *Rationale*: Currently practitioners just don't enter problematic SWRDs into JAMA; there's no record of the rejection
  - *Expected benefit*: Creates an audit trail; makes the rejection visible to Julia and the product team
- **Rejection reason categories** — Implied by all three
  - *Rationale*: Common rejection reasons (TBD, over-prescriptive, ML-incompatible, contradictory, wrong priority) are well understood and could be pre-categorized
  - *Expected benefit*: Enables aggregate reporting on why requirements are being rejected; provides data for CA/TMC feedback
- **Routing notification to PRD owner** — Mentioned by Julia
  - *Rationale*: Product needs to know when their PRD items are rejected so they can negotiate with CA
  - *Expected benefit*: Closes the loop that currently goes silent after a comment is left in a document

**Recommended Action:** Address in a subsequent iteration; higher priority than workflow state but lower than change detection and ingestion.

---

## ✨ Outliers & Unique Insights

### Outlier 1: Hannah's Strategic Use of "Visible Failure"

**Source:** Hannah Lane
**User Segment:** Systems Engineering Practitioner

**Observation:**
Hannah's explicit strategy for getting JAMA populated is not to wait until requirements are clean and complete, but to enter everything — even incomplete or problematic requirements — as quickly as possible. Her reasoning: once JAMA shows "0 out of 7,000 test cases passing," that visible failure number drives executive attention and organizational urgency far more effectively than verbal descriptions of the problem.

**Why It Matters:**
This is a sophisticated organizational insight, not just a technical one. It implies the tool's primary value for Hannah in the near term is not about accuracy — it's about creating a visible, authoritative failure surface. The tool should be optimized for speed of intake, not perfection of intake.

**Potential Implications:**

- Design for rapid ingestion of imperfect requirements, not gated ingestion of perfect ones
- The "visible failure rate" dashboard may itself be a valuable output of the tool
- This strategy assumes JAMA is where leadership looks — worth validating with Julia

**Recommended Follow-Up:** Discuss with Julia whether the 0-of-N failure surface is the intended accountability mechanism for the traceability report delivered to TMC.

---

### Outlier 2: Developers Are Bypassing the Process (Hannah)

**Source:** Hannah Lane
**User Segment:** Systems Engineering Practitioner

**Observation:**
Developers who have deliverables to hit are communicating directly with CA to get answers about requirements — bypassing Julia's team's prioritization process entirely. Hannah observes that this creates additional version drift and confusion, but also acknowledges that shutting it down would slow development.

**Why It Matters:**
This pattern reveals that the formal process has a legitimacy problem: developers don't trust it to move fast enough. Any tooling that makes Julia's team's process slower or more bureaucratic risks accelerating this bypass behavior.

**Potential Implications:**

- The tool must be visibly faster than the manual process, not slower, or practitioners will route around it
- Developer buy-in on the PRD → SWRD → SWQT workflow is a prerequisite for the traceability chain to function
- Nick's point about getting developer assignment early and involving them in SWRD review is the healthy version of what's currently happening via informal CA channels

**Recommended Follow-Up:** Consider whether the tool should have a developer-facing view (e.g., "here are the SWQTs ready for implementation in your area") to give developers a reason to use the formal channel.

---

### Outlier 3: SCRD Decomposition Is Blocked by Missing Architecture (Nick)

**Source:** Nick Carcione
**User Segment:** Systems Engineering Practitioner

**Observation:**
SWRDs will eventually need to be decomposed into SCRDs (Software Component Requirements Documents) for individual internal components (perception, planning, controller, etc.). This decomposition cannot happen yet because Woven lacks a finalized internal component architecture. This is a known gap that will eventually create a second wave of requirements work.

**Why It Matters:**
Item 10 tooling built for SWRD-level intake may need to be extended for SCRD-level work in the future. The architecture work Nate is supporting may be a prerequisite for this.

**Potential Implications:**

- Build the tool's data model to accommodate a parent-child hierarchy below SWRD (SWRD → SCRD)
- Don't block current tooling on SCRD support, but don't foreclose it either

**Recommended Follow-Up:** Discuss with Nate whether the architecture work has a timeline that would inform when SCRD tooling becomes relevant.

---

### Outlier 4: The Process Is Being Defined Simultaneously With the Tool (Julia)

**Source:** Julia P
**User Segment:** Product Delivery Leadership

**Observation:**
Julia explicitly acknowledged that her team is still defining the business logic of requirements intake — the templates, the JAMA item structures for SBRDs, the PRD approval process — at the same time Atomic Object is building tooling to support it. This is intentional; she sees AO as a co-design partner, not a vendor executing to a fixed spec.

**Why It Matters:**
The tool's requirements are likely to shift as Julia's team finalizes their process. This is a risk but also an opportunity — getting into JAMA and tooling early means AO can shape the conventions before they calcify.

**Potential Implications:**

- Prioritize building to the most stable parts of the process first (SWRD ingestion from Git-based sources; change detection via webhook)
- Build for configurability where process is still fluid (JAMA item templates, SWQT structure)
- Maintain close collaboration with Julia as process decisions are made

**Recommended Follow-Up:** Establish a regular touchpoint with Julia specifically to learn when process decisions get made, so tooling can be updated in sync.

---

## 📈 Priority Matrix

### High Priority (Critical Impact, High Frequency)

1. **Change detection on upstream SWRD sources** — Mentioned by all 3 participants; the most universally painful problem; directly addressable via Git webhooks for the primary use case
2. **Automated SWRD ingestion from PRD links into JAMA** — Eliminates the highest-volume manual task; PRD-as-manifest pattern is already established and stable
3. **Single source of truth visibility in JAMA** — Julia's primary organizational goal; prerequisite for TMC traceability reporting

### Medium Priority (Moderate Impact or Frequency)

1. **LLM-to-JAMA SWQT pipeline** — High impact for practitioners; reduces ~700+ clipboard operations per quarter; builds on existing WOVI usage
2. **JAMA item workflow states (Draft → In Review → Accepted/Rejected)** — Required for tracking completion; practitioners have already described the states they want
3. **Structured rejection/feedback routing to PRD owner** — Closes a communication loop that is currently broken; enables organizational accountability

### Low Priority / Future Exploration

1. **SCRD decomposition support** — Important future state; blocked by missing internal architecture; not actionable now
2. **Heuristic flagging for ML-incompatible requirements** — Valuable but requires significant LLM/pattern work; the manual review step catches these today at moderate cost
3. **Cascade SWQT update on requirement change** — Desirable; requires end-to-end traceability chain to exist first; build after the foundation is in place

---

## 🎯 Strategic Recommendations

### Immediate Actions

1. **Build a Git-based change detection service for SWRD sources**
  - **Evidence**: All 3 participants; described as the single most painful gap
  - **Impact**: Eliminates the risk of discovering mid-quarter that requirements changed weeks ago; enables defensive documentation to become proactive notification
  - **Effort**: Medium — Git webhooks are well-understood; the harder part is connecting to JAMA item flags and Slack/email notifications
2. **Build automated SWRD ingestion from PRD links**
  - **Evidence**: Hannah and Nick's live workflow walkthrough; Julia's strategic vision of PRD as the intake manifest
  - **Impact**: Removes the highest-volume manual task; frees practitioners to focus on review and judgment rather than copy-paste
  - **Effort**: Medium-High — requires JAMA API integration, Git source access, and PRD link parsing; JAMA Connect Python client exists
3. **Establish JAMA item workflow state model**
  - **Evidence**: Hannah's proposed state transitions; Nick's reference to the prior spreadsheet model; Julia's need for visibility
  - **Impact**: Creates the foundation for completion tracking, developer hand-off, and change management
  - **Effort**: Low-Medium — JAMA supports custom workflow states; this may be configuration more than custom development

### Future Research Needs

- **How does SBRD intake differ from SWRD intake?** Julia and Hannah both mentioned SBRDs as a distinct and more complex intake problem ("all in the dark"). Hannah has a draft JAMA structure; understanding it would inform whether the same tooling can address both.
- **What is the right scope for the first automation target?** Julia suggested starting with lane change (Hannah's area, Git-based, most mature). Confirming this with Julia and Hannah would let us build the first iteration against a well-understood, bounded case.
- **What does developer sign-off look like in practice?** Nick described wanting developer buy-in early, but the process for getting it is undefined. Understanding this workflow gap would inform the developer-facing features of the tool.

### Design Principles

1. **Automate the low-judgment, high-volume steps; preserve human judgment at the critical gates.** Both practitioners drew a clear line between copy-paste work (automatable) and requirement review/curation (requires their expertise). The tool should free them for the latter.
2. **Build for speed and legibility, not perfection.** Hannah's "visible failure" strategy confirms that a fast, imperfect intake is more valuable than a slow, perfect one. Prioritize getting things into JAMA over getting them in pristinely.
3. **Design for auditability from day one.** Every ingested SWRD should carry its source URL, version, and ingestion timestamp automatically. The paper trail is not an afterthought — for Julia's team, it is the product.

---

## 🗂️ User Segmentation Insights

### Segment: Product Delivery Leadership (Julia P)

**Number of participants:** 1

**Distinctive Characteristics:**

- Responsible for the full traceability report delivered to TMC; her success metrics are organizational, not individual
- Has the most complete mental model of the end-to-end system, including the political layers (TMC → CA → PDM → Julia's team → developers)
- Operates at the level of process design and stakeholder management, not hands-on JAMA assembly

**Primary Pain Points:**

- Cannot explain delays to leadership without a visible change record
- Has no mechanism to push back on upstream requirements formally; change management process is still being built
- PRD is the strategic intake mechanism she's built, but it doesn't yet provide the change visibility she needs

**Key Goals:**

- Single source of truth in JAMA with change history
- A defensible paper trail for TMC traceability reporting
- Tooling that complements the business logic her team is simultaneously defining

**Design Considerations:**

- Julia is the primary stakeholder for the organizational and dashboard-level features (completion rate, change history, rejection reports)
- She will be the approver for any changes to JAMA structure or item templates
- She expects AO to be a co-design partner, not a black-box vendor

---

### Segment: Systems Engineering Practitioners (Hannah Lane, Nick Carcione)

**Number of participants:** 2

**Distinctive Characteristics:**

- Do the hands-on JAMA assembly work daily; deeply familiar with the specific friction points
- Both use LLM tools (WOVI/Gemini) as part of their standard workflow
- Hannah is the senior practitioner and de facto process lead for the team; Nick is earlier in his adoption of the workflow

**Primary Pain Points:**

- Manual copy-paste at enormous scale (SWRD ingestion + SWQT entry)
- No change notifications when source requirements update
- Navigating 3–4 systems simultaneously with no integrated view

**Key Goals:**

- Reduce time spent on low-judgment, high-volume mechanical work
- Automate or semi-automate SWQT generation with direct JAMA write
- Catch requirement changes before they invalidate work already done

**Design Considerations:**

- Hannah's existing WOVI prompt and JAMA structure should be treated as the reference implementation; the tool should formalize and extend what she's already built
- Nick represents the "new hire" or "next person onboarded" experience — tooling should reduce the learning curve for practitioners who aren't yet as knowledgeable as Hannah
- Both practitioners will be the primary users for day-to-day operations; their efficiency is the core UX target

---

## 📝 Methodology Notes

**Interview Approach:**
Semi-structured discovery interviews conducted via video call (Google Meet / Zoom). Screen sharing was used for the practitioner interviews (Hannah, Nick) to observe live workflow. Julia's interview was more whiteboard/flowchart-oriented with Miro. All interviews were recorded; one interview (Hannah) had recording complications requiring a screen recording backup.

**Data Quality Considerations:**

- Julia's interview provides the most authoritative picture of the organizational context and strategic goals; some downstream process details were still in flux at time of interview
- Hannah's interview is the richest source of workflow detail; she has the most developed practice of any practitioner on the team
- Nick's interview confirms patterns from Hannah but represents a less mature stage of workflow adoption; some of his responses are prospective rather than based on lived experience
- All three interviews were conducted by the same AO team (Dan Maser, Gus Schissler, Nate Papes), providing consistency

**Analysis Approach:**

- Themes were identified by cross-referencing pain points, goals, and suggestions across all three transcripts
- Frequency counts are conservative (only marked as high frequency when clearly evidenced in the interview, not inferred)
- Prioritization based on combination of frequency, severity expressed by participants, and alignment with Julia's strategic goals

---

## 📋 Appendices

### Interview Summary Index


| Participant   | User Segment                                 | Interview Date | Key Focus                                                                |
| ------------- | -------------------------------------------- | -------------- | ------------------------------------------------------------------------ |
| Julia P       | Product Delivery Leadership                  | 2026-03-02     | End-to-end process overview, pain points, strategic goals, Item 10 scope |
| Hannah Lane   | Systems Engineering Practitioner (Senior)    | 2026-03-03     | JAMA assembly workflow, SWRD/SWQT creation, version control, magic wand  |
| Nick Carcione | Systems Engineering Practitioner (Mid-level) | 2026-03-04     | SWRD review process, JAMA entry workflow, version control, magic wand    |


### Frequency Reference Guide

- **High Frequency**: Mentioned by 3 out of 3 participants (100%)
- **Medium Frequency**: Mentioned by 2 out of 3 participants (~67%)
- **Low Frequency / Outlier**: Mentioned by 1 participant but noteworthy for strategic or design relevance

### Acronym Reference


| Acronym | Meaning                                                             |
| ------- | ------------------------------------------------------------------- |
| SWRD    | Software Work/Interface Requirements Document                       |
| SWQT    | Software Work/Interface Qualification Test                          |
| SBRD    | Scenario-Based Requirement Definition                               |
| TPID    | Test Pattern ID (closed-course TMC tests)                           |
| SCRD    | Software Component Requirements Document                            |
| URD     | User Requirements Document                                          |
| PRD     | Product Requirements Document (quarterly scope doc)                 |
| CA      | Customer Applications (TMC-Woven liaison team)                      |
| TMC     | Toyota Motor Company                                                |
| PDM     | Project Delivery Manager (intermediary between CA and Julia's team) |
| TSS-4   | Toyota Safety System 4 (legacy rules-based production system)       |
| IPA     | Internal Product Development (Woven's combined product org)         |
| WOVI    | Woven's internal AI assistant (Gemini-based)                        |
| CI      | Continuous Integration                                              |


