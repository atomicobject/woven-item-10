# Nick Carcione

> **Discovery-Refined Profile** · Last Updated: 2026-03-06
> Source interviews: User Interview (2026-03-04), Interview Synthesis (2026-03-06)
> Change level: **New profile** — interviewed 2026-03-04; no prior profile existed.

## 1. Basic Information

- **Role/Title**: Systems Verification & Validation Engineer — In-Lane Capabilities (vehicle following, cut-ins, lane keeping, in-lane curves)
- **Department**: Product Delivery / Systems V&V
- **Location**: Remote (US)
- **Tenure**: ~2.5 years at Woven; background in vehicle behavior evaluation and longitudinal performance
- **Reports To**: Julia Pralle (inferred)

## 2. Role Summary

Nick is the systems V&V function lead for **in-lane capabilities** — a parallel role to Hannah's lane change ownership. His work follows the same top-down intake pattern: receive the quarterly PRD, review linked SWRDs in the source Git repository, evaluate applicability, ingest into JAMA, then draft SWQTs with LLM assistance.

He is newer to SWQT authoring specifically (this quarter appears to be among his first full cycles) and relies on Hannah as his quality reference. His WOVI prompt for SWQT generation is Hannah's.

Key distinguishing characteristic: **Nick's default instinct is "halt and comment" rather than Hannah's "get it all in."** When he encounters an inapplicable or questionable SWRD, he tends to stop, leave a comment in the PRD, and wait for product to act — rather than ingesting it into JAMA with a flag. This creates a meaningful strategy tension on the team.

> *"I wouldn't want to take the time to put it into JAMA if it's not something we're actually going to use and write a test for."*

## 3. Project Involvement

- **Stake in Project**: Direct primary user of Epic 1 tooling for the in-lane capability group. His multi-system SWRD review workflow and version blindness are the clearest live examples of what the tooling must simplify.
- **Level of Influence**: Medium — he will be a key practitioner user of any tooling AO builds; his workflow is the second most detailed reference (after Hannah's).
- **Decision Authority**: SWRD acceptance and SWQT authoring decisions for in-lane capabilities; defers to Hannah on SWQT quality and to Julia on scope priorities.
- **Time Commitment**: Regular; would participate in testing and feedback as tooling becomes available.

## 4. Goals and Success Criteria

### Primary Goal: Upstream Filtering of Inapplicable SWRDs ✓
Nick's magic wand is better pre-screening so that the list of SWRDs reaching him contains only requirements applicable to Woven's ML-based system.

> *"If there were a way to quickly identify which ones are actually worthwhile to look at — or if upstream processes improved so that by the time the list reaches me, everything in it is something I'm going to have to write tests for — that would be huge."*

- **Success Criteria**: Reduce time spent reading through SWRDs only to reject them as inapplicable.

### Goal 2: Version Change Awareness ✓
Know when a new version of a locked SWRD is published mid-quarter, before it can invalidate work already done.

> *"It would really hurt to develop everything over the course of a quarter, get to the next quarter, and then realize it was changed two weeks in and we need to redo everything."*

- **Success Criteria**: Receive a notification (with diff) when a tracked SWRD changes, even when locked to a prior version.

### Goal 3: Developer Alignment Before Committing Work ✓
Nick wants developers involved early — not just handed a list of requirements and tests.

> *"The goal is that we're not just handing them a list of requirements and tests and saying 'go.'"*

- **Success Criteria**: Clear handoff workflow between Nick's SWQT work and the developer assigned to in-lane capabilities (not yet assigned as of the interview).

## 5. Concerns and Pain Points

### #1 — Multi-System Navigation Overhead (Daily Friction) ✓
Each SWRD review requires opening and cross-referencing at least three separate systems before anything can be entered into JAMA — the PRD (Google Docs), the URD spreadsheet (Google Sheets), and the SWRD repository site (Git overlay).

> *"At this point I'm on the third website: I have the PRD document, the URD spreadsheet, and now this site that hosts all the SWRDs."*

- *Impact*: Multiplicative overhead across potentially hundreds of SWRDs per quarter; high context-switching cost per requirement.

### #2 — No Change Notification (Version Blindness) ✓
Nick has no mechanism to know when a new version of a locked SWRD is published. A major change mid-quarter could invalidate a full quarter of test cases.

> *"There's no notification mechanism. I've received a specific version of a requirement, and I have no way of knowing if a new version has been released."*

- *Impact*: Silent invalidation risk — work done in good faith against a locked version could be worthless if the source has changed.

### #3 — Inapplicable Requirements Waste Review Time ✓
A significant portion of SWRDs are performance-prescriptive (specific numeric thresholds, rules-based calculation logic) and were written for Toyota's legacy TSS-4 system — not Woven's ML approach. Reading through one only to reject it wastes time at scale.

> *"It's time-consuming to read through a requirement and spend the effort trying to understand what it's doing, only to realize it's not something we even want to pursue."*

- *Heuristic he uses*: If a requirement prescribes specific acceleration bounds, timing windows, or boolean thresholds → likely legacy/rules-based → likely inapplicable. ✓ (Automatable)

### #4 — No Version Comparison Tool ✓
When Nick wants to understand what changed between SWRD versions, he manually flips between browser tabs to compare.

> *"I don't think there's a built-in compare mechanism in the tool — if there is, I just haven't found it. So I was just flipping back and forth between tabs."*

- *Impact*: Error-prone; no shareable record of what changed.

### #5 — No SWRD Acceptance Status Tracking ✓
The old spreadsheet tracking SWRD acceptance, SWQT creation, developer acknowledgment, and developer sign-off has been discontinued. The new PRD process hasn't filled that gap.

- *Impact*: No visibility for Julia or Nick into which SWRDs have been accepted, flagged, or rejected; no formal handoff mechanism to developers.

## 6. Workflow (Current State) ✓

```text
Per-SWRD review cycle (current):

  Open PRD in Google Docs → find SWRD row in in-lane tab
      ↓
  Look up URD in separate Google Sheets spreadsheet → get English description
      ↓
  Open SWRD in Git-overlay browser site → read summary, interface section, specification
      ↓
  Evaluate: Is this applicable to Woven's ML system?
  Is this interface-level (good) or performance-prescriptive (likely legacy/inapplicable)?
      ↓
  [If rejected]: Leave comment in PRD Google Doc → wait for product to act (no tracking)
  [If accepted]: Create SWRD entry in JAMA → run Hannah's WOVI prompt
      ↓
  Review WOVI output (~80% accurate per Nick's estimate)
  Remove hallucinations, add edge cases, fill in preconditions/steps
      ↓
  Enter curated SWQT into JAMA → link to parent SWRD
      ↓
  Signal readiness to developer (process undefined; no assigned developer as of interview)
```

**Key tools**: Google Docs (PRD), Google Sheets (URD spreadsheet), browser-based Git overlay (SWRD repository — no API confirmed), JAMA (browser), WOVI/Gemini (SWQT generation using Hannah's prompt)

**Environmental**: 3–4 browser tabs open simultaneously; authentication timeouts in JAMA; no unified review interface.

## 7. Tooling Wish List ✓

1. **Unified SWRD review interface** — single view combining PRD context, URD description, and SWRD content so Nick doesn't have to manage three browser tabs per requirement.
2. **SWRD triage classification** — automated or assisted flag on SWRDs that are likely legacy/rules-based vs. applicable to ML. Nick's heuristic (prescribes specific thresholds → legacy) is articulable and likely automatable.
3. **Version diff for SWRDs** — see what changed between the PRD-locked version and any newer version without manual tab comparison.
4. **Change notification** — alert when a new version of a locked SWRD is published, with a diff summary.
5. **Rejection tracking** — structured log of rejected SWRDs with reason codes; routed to product owner; prevents the same bad SWRDs from re-entering the pipeline.

## 8. LLM Usage ✓

Nick uses Hannah's WOVI (Gemini) prompt for SWQT generation. Accuracy estimate: ~80% (vs. Hannah's ~90% — likely reflects his less-developed prompt refinement and domain familiarity rather than a tool difference). Output requires manual review: catching hallucinations, adding edge cases, verifying logical completeness.

He plans to use the LLM more extensively as he progresses into SWQT authoring this quarter.

## 9. Key Relationships

- **Hannah Lane**: Go-to peer for SWQT quality check and process guidance; uses her WOVI prompt; would review his first SWQTs with her. Hannah's "ingest everything" strategy is a meaningful contrast to Nick's "halt and comment" approach. ✓
- **Julia Pralle**: Manager; Nick's intake concerns (change detection, multi-tab fragmentation) are the downstream manifestation of Julia's strategic pain (no single source of truth).
- **Assigned developer (TBD)**: Developer assignment for in-lane was not finalized at interview time — this is a gap, as any SWQTs Nick writes currently have no immediate consumer. ✓
- **Andrea Zotelli**: Parallel role on component-level (bottom-up backlog) rather than system-level intake. Their work converges in JAMA.
- **CA Team / PDM**: Nick interacts with product as the single link to CA; does not have direct CA contact.

## 10. Engagement Strategy

- Nick will be a primary practitioner user for any SWRD review tooling; his workflow is the clearest testbed for a unified review interface.
- The **halt-vs-ingest tension between Nick and Hannah** is worth addressing explicitly — either the tool scaffolds a shared strategy, or the team needs to decide on one. Left unresolved, it creates traceability gaps.
- His triage heuristic (rules-based = inapplicable) is inspectable and potentially the foundation of an automated classification feature.
- He is still relatively new to SWQT authoring — tooling that reduces his dependency on Hannah for quality guidance (e.g., JAMA-integrated SWQT generation with review prompts) would reduce the knowledge concentration risk.
- **Critical next step**: Ensure an in-lane developer is assigned so Nick has a consumer for his SWQTs and a co-signer for SWRD acceptance.

## 11. Key Quotes

> *"At this point I'm on the third website: I have the PRD document, the URD spreadsheet, and now this site that hosts all the SWRDs."*

> *"There's no notification mechanism. I've received a specific version of a requirement, and I have no way of knowing if a new version has been released."*

> *"It's time-consuming to read through a requirement and spend the effort trying to understand what it's doing, only to realize it's not something we even want to pursue."*

> *"A lot of these come from previous development efforts that were much more rules-based... is this still applicable to what we're trying to do, or is it a product of legacy systems that just hasn't been updated?"*

> *"The underlying need is still there. We still want to smoothly follow a vehicle ahead... We'd capture on-road data or conduct closed-course tests in specific scenarios."*

## 12. Notes and Context

- Nick's capability group (in-lane) had no assigned developer as of the interview — a significant gap that means SWQTs he writes now have no immediate consumer.
- His "halt and comment" vs. Hannah's "ingest all" approach to bad SWRDs is a process divergence on the same team. The tool should either enforce a consistent strategy or make both approaches traceable.
- Nick articulated clearly that rejected SWRDs still represent real vehicle behavior needs — they just need to be addressed through SBRDs or closed-course TPIDs instead. Tooling should track rejected SWRDs and their alternative coverage paths, not just delete them from the workflow.
- **Knowledge concentration risk**: Nick currently depends heavily on Hannah as his quality reference. If Hannah is unavailable, his SWQT work stalls.
- SCRD decomposition (breaking SWRDs into component-level SCRDs) will eventually be needed for in-lane, but is blocked until Nate's architecture work defines the component structure.

*Source: Nick Carcione User Interview (2026-03-04), Interview Synthesis (2026-03-06), Multi-Interview Synthesis (2026-03-05).*
