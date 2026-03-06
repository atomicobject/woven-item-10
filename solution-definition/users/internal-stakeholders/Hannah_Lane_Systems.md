# Hannah Lane

> **Discovery-Refined Profile** · Last Updated: 2026-03-06
> Source interviews: User Interview (2026-03-03), Post-Interview Debrief (2026-03-03), Interview Synthesis (2026-03-05)
> Change level: **Minor** — profile was already substantially updated after the 2026-03-03 interview. Additions from synthesis noted with ➕.

## 1. Basic Information

- **Role/Title**: Systems & Validation Engineer (Function Lead — Out-of-Lane Maneuvers / Lane Change)
- **Department**: Systems Engineering (Julia Pralle's team)
- **Location**: Palo Alto, CA (previously Michigan → Arizona → CA; ~1.5 years in CA)
- **Tenure**: Over a year in role at Woven (as of March 2026); previously at GM
- **Reports To**: Julia Pralle (inferred)

## 2. Role Summary

Hannah is the systems and validation engineering point of contact for lane change and all out-of-lane maneuvers (merging, branching, etc.). Her job has two primary workstreams:

1. **Requirements intake & assembly**: Takes SWRDs (Software Work/Interface Requirements Documents) from upstream sources (Toyota → CA → PDM team) and copies them verbatim into JAMA with version tracking. She is responsible for making requirements legible and actionable for the behavior development team.
2. **Test case authorship**: Writes SWQTs (Software Work/Interface Qualification Tests) for each SWRD in JAMA. She uses LLMs (WOVI + Gemini) to translate dense, poorly-translated requirements into plain English, then authors test cases based on input/output logic and edge cases.

She was initially hired to tackle this work solo; the team has since expanded so that each member owns a specific function area (in-lane — Nick Carcione, urban, roll-out, etc.). Hannah is the de facto process lead and quality reference for other practitioners on the team — Nick uses her WOVI prompt and defers to her for SWQT quality review. ➕

## 3. Project Involvement (Item 10 / Epic 1)

- **Stake in Project**: Direct — she is living the problem the tooling aims to solve. Her daily work (copy-paste from Git to JAMA, manual SWQT authorship, no change alerts) is the core use case.
- **Level of Influence**: High — listed as a "who to know" for Epic 1 alongside Julia, Andrea, and Sanjiv. She has a detailed personal wish list of tooling capabilities.
- **Decision Authority**: Medium — she can influence priorities and advocate for tooling needs, but is subject to Julia's direction and the PDM/CA process.
- **Time Commitment**: Full-time on this problem area; her entire function is requirements assembly and validation for lane change.

## 4. Goals and Success Criteria

- Get all lane change SWRDs and associated SWQTs into JAMA — even imperfect ones — so the team has a ground truth to point to: *"We're passing zero out of 7,000 test cases"* as a forcing function for action. (**Visible failure as organizational leverage** — a deliberate strategy, not just completeness for its own sake.) ✓
- Establish version-controlled traceability: SWRD in JAMA → SWQT → unit test in Git, with pass/fail visibility. ✓
- Ensure the behavior team actually aligns on and accepts the prioritized requirements before she signs off on the quarterly PRD. ✓
- Reduce manual overhead so that the copy-paste and test-writing work can be automated or semi-automated. ✓

**Important nuance**: Hannah sometimes minimizes the aggregate effort of SWRD ingestion ("it should be kind of negligible work, just a copy-and-paste job"), but elsewhere confirms doing it ~700 times at significant time cost. ➕ Don't let her minimization anchor the team's estimate — the aggregate cost is real and automation has high ROI even if each individual step feels small.

## 5. Concerns and Pain Points

### #1 — No Change Notification (Biggest Issue)

Requirements in Git are updated by the CA team with no alert to Hannah or her team. She only finds out if she manually checks. The PDM team is theoretically responsible for tracking this, but it's a massive manual ask (hundreds of requirements for lane change alone).

> *"Requirements will change and we won't be told about it... They actually listened, but they didn't tell me. I thought I was shouting into a void."*

### #2 — Multi-Layer Organizational Friction

Toyota → CA → PDM → Systems team. CA won't communicate directly with Woven ("for political reasons"), so the PDM team was inserted as a buffer. Hannah dislikes this because it adds distance from the source of truth and creates more points of failure. Julia thinks it's the right approach.

> *"Now we have two groups between us and the ultimate Toyota requirement. It's weird."*

### #3 — Poor Quality / Incomplete Requirements

SWRDs arrive with TBD sections, mistranslations from Japanese, internal inconsistencies (e.g., a lane change that's valid in the first half and invalid in the second half by different calculations), and over-prescriptive rules-based logic that doesn't map well to Woven's ML-based implementation.

> *"Some are in Japanese, some are very poorly translated. It's a real mixed bag."*
>
> *"'Regarding the regulations for section settings, it is TBD.' Either huge translation issues, or it's just incomplete."*

### #4 — Scale of Manual Work

~600 SWRDs for lane change (as of last year). Each requires: reading, copy-pasting verbatim into JAMA, noting version/link, and writing at least one SWQT. Estimated ~7,000 test cases total. Currently done one at a time with LLM assistance.

> *"I just had to do this 700 times."*

### #5 — Priority Misalignment (Behavior Team ↔ PDM)

The PDM team's quarterly PRD priorities don't reflect what the behavior team can or wants to implement. Example: highest-priority item was an HMI interface requirement — but Woven runs on dev vehicles with no HMI. The behavior team ignored it and moved on, blocking PRD sign-off.

### #6 — Shadow Communication Channels

Because the official process is slow, behavior developers have started going directly to CA to get their own requirements clarified. This creates more versioning confusion but also shouldn't be stopped because they're still shipping work.

> *"That's actually driving even more confusion and more versioning issues. But you also don't want to shut it down because they're getting work done. So that kind of sucks."*

### #7 — V-Structure Rigidity

Toyota's V-model structure mandates that SWRDs define only interfaces (inputs and outputs). In practice, CA is sending performance requirements, functional requirements, and other non-interface content — all labeled as SWRDs. Trying to force all of it into the SWRD box creates organizational confusion.

> *"Right now we're trying to fit everything into that V-structure, and I think it's making things really regimented in a way that's making it difficult."*

## 6. Workflow (Current State)

```text
PDM team publishes quarterly PRD (Google Doc)
        ↓
Hannah reviews each linked SWRD in Git (Toyota → CA pipeline)
        ↓
Copy-paste SWRD verbatim into JAMA with version # and Git link
        ↓
Use WOVI/Gemini LLM to translate dense/Japanese req into plain English
        ↓
Author SWQT(s) based on input/output logic and edge cases
        ↓
[Parallel] Align with behavior team on whether requirements are implementable
        ↓
Sign off on PRD for the quarter (blocked right now due to priority disagreement)
```

**Key tools**: Git (CA requirements source), JAMA (destination/truth), Google Docs (PRD from PDM), WOVI + Gemini (LLM for translation and test case drafting)

**Requirements per quarter (lane change only)**: ~600 SWRDs → ~600+ SWQTs

## 7. Tooling Wish List (Magic Wand)

Hannah shared a concrete wish list, directly aligned with Epic 1:

1. **Traceability completeness check** — Automated verification that every SWRD has: (a) a SWQT in JAMA, and (b) a unit test in Git. Flag gaps.
2. **Pass/fail visibility** — Check whether associated unit tests actually pass when a release runs.
3. **Automated test case generation** — Auto-generate SWQT drafts from SWRD text (she's already doing this with LLMs manually). If a requirement changes, auto-flag or draft an updated test case.
4. **Change detection + unlock cascade** — If a SWRD is unlocked/updated in JAMA, automatically unlock the associated SWQT and notify the Git unit test owner via email: *"Hey, we unlocked this test case — you may need to go fix it."*

> *"Even half of that would be really cool."*

She also has a written wish list document she shared with the team post-interview.

## 8. LLM Usage

Hannah already uses WOVI (Gemini) heavily for:

- Translating cryptic/translated-from-Japanese requirements into plain English
- Drafting initial test case content from requirements

She's pragmatic about it: *"It's not 2019 anymore."* Year-over-year improvement noted: ~70% → ~90% usefulness.

## 9. Key Relationships

- **Julia Pralle**: Manager / team lead. Hannah defers to Julia on process decisions even when she disagrees (e.g., PDM layer insertion). Their perspectives on the PDM layer diverge meaningfully — Hannah is skeptical, Julia endorses it. ✓
- **PDM Team / Masutani-san**: The intermediary group between CA and Hannah's team. Masutani-san owns the PRD for lane transitions and is responsible for flagging changes — Hannah describes this as "a massive ask" given the volume. ✓
- **CA Team**: The Toyota-adjacent group that authors and versions the SWRDs. Won't communicate directly with Woven; Hannah can only send feedback through PDM. ✓
- **Behavior Development Team**: The ultimate consumers of her work. She must get their buy-in before signing off on a quarterly PRD. Currently blocked on PRD sign-off due to HMI priority misalignment. ✓
- **Andrea Zotelli**: Peer on Julia's team; Andrea is newer (Oct 2025) and works on the bottom-up component-level backlog. Andrea frequently relies on Hannah for institutional knowledge — Hannah is a knowledge concentration point for the team. ➕
- **Nick Carcione**: In-lane function lead; uses Hannah's WOVI prompt and defers to her as quality reference for SWQTs. Nick's "halt and comment" approach to bad SWRDs contrasts with Hannah's "get it all in" strategy. ➕

## 10. Communication Preferences

- Direct and candid (e.g., *"CA doesn't like us for political reasons"*) — she will say what she thinks.
- Screen-share-oriented: she offered immediately to walk through her actual tools rather than describe them abstractly.
- Slack + meetings (assumed standard Woven channels).

## 11. Engagement Strategy

- She has already bought in — she volunteered a wish list document and wants to be kept in the loop.
- Show her the traceability/change-detection concept early; she'll give honest, specific feedback.
- Loop her in on any tooling that touches JAMA structure or SWQT authoring — she has strong opinions and relevant context.
- Don't rely solely on Julia's view of the PDM layer; Hannah's skepticism is an important counter-perspective.
- She has a "get it all in JAMA first" mentality — any tooling that automates or accelerates that ingestion step will resonate immediately.

## 12. Notes and Context

- Requirements for lane change alone: ~600 SWRDs (as of last year), estimated ~7,000 SWQTs total. ✓
- All lane change SWRDs live in Git; perception team used Google Docs; mapping team used JAMA directly — tooling is not uniform. ✓
- SWRD-to-SWQT is currently ~1:1 (at minimum), though theoretically could be many-to-one or one-to-many. ✓
- She's currently blocked on PRD sign-off because behavior team and PDM team priorities are misaligned (HMI example). ✓
- Her strategy of "zero out of 7,000 passing" as a stakeholder forcing function reflects strong systems-thinking instincts. ✓
- Hannah is a **knowledge concentration risk** for the team: Andrea asks her for document pointers, Nick uses her WOVI prompt and checks his SWQTs with her. If her capacity is constrained, multiple team members are impacted. ➕
- Behavior developers are already going directly to CA to get requirements clarified, bypassing the official process. Hannah acknowledges this creates version confusion but won't block it because "they're getting work done." Any tooling that makes the formal process slower will accelerate this bypass. ➕
- **Open question from synthesis**: Is there a way to subscribe to Git file changes (e.g., GitHub webhooks, watch features) that Hannah doesn't know about? The solution to her #1 pain point may be simpler than building something new. ➕

*Source: Hannah Lane User Interview (2026-03-03), Post-Interview Debrief (2026-03-03), Interview Synthesis (2026-03-05), Atomic Object Project Details (SOW/Epic 1).*
