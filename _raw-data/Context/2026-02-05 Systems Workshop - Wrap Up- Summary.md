# PdM ↔ Systems Workshop — Wrap Up Summary

**Date:** 2026-02-05, 14:28 PST  
**Duration:** ~23 minutes  
**Source:** [[2026-02-05 Systems Workshop - Wrap Up- Transcript]]

---

## Attendees

A2-2203 (Arastradero, 2), Andrea Zotelli, Julia Pralle, Mahesh Sarode, Nick Carcione, Nithin Kashyap, Ryan Faries, Ryo Masutani, Wendi Zhao

---

## Purpose of the session

- Formally close the workshop with a summary of what was discussed and agreed.
- Capture a clear list of action items so outcomes lead to follow-through.
- Record alignments and any changes from prior expectations.

---

## What was agreed and summarized

### 1. URD → SCRD workflow and decomposition

- **Source of truth:** A table (started by Sanjiv) that captures the full requirement/architecture flow from URD down to SCRD.
- **Table contents:** Requirement or architecture level, where it’s stored, team responsible, how it’s validated, who validates, where test plans are stored, which repo is validated at that level, and how.
- **Context:** The table explicitly maps SYAD and SWAD and how requirement and testing levels map to system, software, and component.
- **Next step:** Get the table link from Sanjiv, then publish it (e.g. on Confluence) as the shared reference for who does what, where to find requirements and test plans, and what’s expected at each level. A follow-up session with Japan (Tanya) was kept to review the table and align on it as source of truth.

### 2. PRD timelines and SV&V expectations

- Alignment on when first PRD drafts are expected and what SV&V will do (or be doing) as a result.
- Scope and ODD (operating conditions) per feature should be included in the PRD; add ODD expectations per quarter to the roadmap so the team knows when to prepare data/testing (e.g. Q4: rain and night; later quarters may include fog, etc.). Can be a high-level PR or per-feature depending on how Product wants to manage it.

### 3. Requirements discussion

- Aligned on what “requirements” means in the table, with concrete examples.
- Ownership is captured in the table.
- Noted some gaps: e.g. things missing or not in the right shape at certain steps; these should be reflected in the summary/process description.

### 4. V&V

- V&V expectations are captured in the same table.

### 5. Change requests

- **Cadence:** Weekly meeting to ensure change requests are captured when proposed.
- **Tooling:** New JAMA structure for requirement change requests; Ryan had shared an older example to replicate for the new process. Ryan and Julia own creating this structure.

### 6. Contractor explorative project (requirement intake automation)

- Explorative project with three contractors starting the week after the workshop to automate requirement intake from different sources.
- The group agreed to add this work item to the tracking list so it’s visible and related to the rest of the workshop outcomes (Julia implied as owner).

---

## Action items (from wrap-up)

| Action | Owner(s) |
|--------|----------|
| Get table link from Sanjiv and add to materials | — |
| Put table and details on Confluence as the plan; document “this is what we’re doing” | A2-2203 + Sanjiv |
| Scope/ODD per feature in PRD; add ODD roadmap (e.g. per quarter) so team knows when to prepare | Wendi (talk with Tatson re ODD from CA; add to PRD/roadmap) |
| Check in with Philip on SWAB status | Julia (Brian had already had a conversation; possible follow-up to get “actual architecture” if not yet provided) |
| Review overall PR process with TMC to align with their expectations | Julia |
| Create smaller separate SBD structure to test use of synthetic sim for SBD evaluation | SBNB team (one person to head up — volunteer: “I can take this”) |
| Follow up with SNQ on traceability and report generation for SMQT unit testing (cadence and report format) | Julia (follow up with Clinton re Parliament expectations on report) |
| Create new JAMA structure for requirement change requests (replicate Ryan’s example) | Ryan, Julia |
| Replicate original SWRD spreadsheet to track autonomy teams’ acknowledgement/receipt of SWRDs, organized by capability groups | TBD (possibly “our team”) |
| PRD phase: create tab, get all requirements into PRD, then start review phase | — |
| Set up JAMA structure for all SWRs and below; clarify process and steps | Hannah, Andrea (spearhead) |
| Confirm terminology in the workflow diagram and align with PdM and broader TMC | Sanjiv (and possibly confirm in Japan session) |
| Add contractor explorative project (requirement intake automation) to tracked work items | Julia (implied) |

---

## Follow-up

- **Japan session:** Evening session with Japan (e.g. Tanya) to review the table and align on it as source of truth (~4:00–5:30 PM).
- **Execution:** After the table is on Confluence, the next phase is execution: e.g. Product putting together test plans, verification tables, etc. “We have agreement; now execution.”

---

## One-liner

Workshop wrap-up captured the **URD→SCRD table as source of truth**, aligned on **PRD timelines, ODD in PRDs, change request process, and JAMA structures**, assigned **action items with owners**, and called out the **contractor project for automating requirement intake** as a tracked work item, with next steps to publish the plan on Confluence and move to execution.
