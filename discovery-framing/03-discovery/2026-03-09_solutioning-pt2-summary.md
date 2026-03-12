# Solutioning Session — Part 2

**Date:** 2026-03-09
**Participants:** Dan Maser, Gus Schissler, Nathan Papes (Atomic Object)
**Context:** Internal team session preparing for a Wednesday check-in with Julia Pralle. Focus was on defining the solution architecture more concretely and identifying what access is required at each level of automation.

---

## Pre-Meeting: Alloy Knowledge Base Restructure

Gus shared that he rebuilt the Alloy knowledge base over the weekend, replacing a folder of 300–600 individual assertion markdown files with a per-meeting bundle approach. The new workflow: add a transcript → system generates a timestamped summary → system extracts assertions from the summary → all outputs backlink to the source transcript. This enables backtrace queries like "where did this claim come from?" directly in Claude. Nate noted that this would also help him track down people he needed to schedule time with (specifically Brian and Mahesh, confirmed as the developers Nate needs to reach for architecture work — Eric had been previously removed from that list).

---

## What We Want to Show Julia on Wednesday

The team agreed they have roughly one hour with Julia. The goal is not just to validate problem understanding (which is largely done) but to show technical feasibility — specifically: *given what we know, how would this actually work in Woven's environment?*

**Dan's framing:** We've validated the pain points, and a lot of it is "no shit, this makes sense." What's missing is: "how does this actually work in *my* ecosystem?" The answer to that depends almost entirely on what system access we can get.

**Consensus:** The most honest and useful thing to show Julia is a diagram that makes the access dependencies explicit — so she understands that our solution can be more or less automated depending on what her team grants us.

---

## The Access-Tiered Architecture

The team mapped out the solution as a flow with branching entry points, where each branch requires a different level of system access. This is the core architectural insight from this session.

### Input Layer (requirement fetching)

Three possible entry points, from least to most automated:

| Entry Point | What user does | Access required |
|---|---|---|
| **Paste raw text** | Copy-paste SWRD content directly into tool | None — guaranteed to work |
| **Paste a link** | Drop a URL to a documentation page | Read access to documentation layer or GitHub |
| **Auto-fetch from PRD** | Tool reads the PRD Google Doc and fetches all linked SWRDs in bulk | Google Drive access |

**Key insight:** The paste-raw-text path is guaranteed to work and is already something Hannah and Nick do. We are not replacing that behavior — we are building around it. Every level above that is an enhancement that requires additional access.

### Processing Layer (the tool itself)

Regardless of input method, the core processing flow is the same:

1. **Raw SWRD** → LLM prompt → **Plain English translation**
2. **Plain English** → LLM prompt → **SWQT draft**
3. Human reviews and curates

Gus sketched a **three-column UI** for this step:
- Column 1: Raw SWRD (as received)
- Column 2: Plain English translation (LLM output)
- Column 3: SWQT draft (LLM output)

A "Send to JAMA" button per row handles the output step — but only if JAMA API access is available.

### Output Layer (JAMA integration)

Two paths:

| Output Path | What happens | Access required |
|---|---|---|
| **Manual** | Tool displays formatted output; user copies into JAMA | None |
| **Automatic** | Tool posts directly to JAMA via API | JAMA API access |

**JAMA structure risk:** Dan noted that Woven's JAMA folder structure is unclear and somewhat disorganized. Nate cautioned strongly against bulk-writing to JAMA before the process is validated — the cleanup from a bad bulk write would be painful. Suggestion: if JAMA API access is granted, initially target a "dumping ground" folder and let users manually sort, or provide a folder-picker UI dropdown.

---

## Requirements Monitor (Change Detection)

The team discussed change detection as a distinct subsystem layered on top of the core pipeline.

**What it needs to do:**
- Keep a record of which requirement ID was processed through the tool at which version/date
- Periodically check whether a newer version of that requirement now exists at the source
- Alert the user: "Requirement X was processed on [date] — a new version has been released"

**Implementation philosophy:**
- A simple CSV or text file is sufficient as the "database" — no formal database needed
- Start with a manual trigger; only move to a nightly job if requirements change frequently enough to justify it
- Stay read-only for as long as possible — the alert is valuable even if the system can't auto-update JAMA

**Dependency:** The requirements monitor only works if the tool has direct access to the source (documentation layer or GitHub), so it can compare the current version against the stored log. Whether version tracking uses Git commit history, a changelog file within the repo, or the documentation layer's versioning UI is an open implementation question pending repo access.

---

## Build Philosophy: Start Manual, Add Automation Incrementally

Nate articulated the recommended build order:

> "Lean into read-only for as long as possible. Validate each step manually, then automate it once you're sure it's correct. The worst case scenario is we batch-write 100 items to JAMA and they're wrong — that's a painful cleanup."

The minimum viable product:
1. User pastes raw SWRD text into tool
2. Tool outputs plain English translation + SWQT draft in a three-column view
3. User reviews and manually copies output into JAMA

Every subsequent level of automation is additive and access-dependent.

---

## Nice-to-Haves (Dan's additions)

Dan suggested two optional steps in the processing layer that would add value:

1. **Quality flag:** Before generating the SWQT draft, the agent evaluates the requirement for known issues — TBDs, over-prescriptiveness, incomplete translation — and surfaces a flag. If the requirement is not ready, the user sees that before the test generator runs.

2. **Test case count estimation:** Based on the requirement's complexity (number of inputs, state transitions, edge cases), the tool suggests how many SWQTs to generate — giving the user an expectation to curate against.

---

## Action Items

- **Dan:** Follow up on Uday's message with steps to request BEV Documents GitHub repository access. This is likely the specific repo (or the documentation layer on top of it) that contains the lane change SWRDs.
- **Nate:** Once GitHub access is granted, pull a sample of SWRD files into an Atomic-controlled sandbox repo to enable prototype development without depending on live Woven infrastructure.
- **Team:** Decide whether to rapid-prototype the three-column translation UI for the Wednesday Julia meeting, or show the access-tiered diagram only.

---

## Summary

This session produced the clearest architectural picture of the solution to date. The central insight is that **automation level is directly determined by access level** — and that the minimum viable path (paste → translate → draft → review) is achievable without any special infrastructure access. Everything beyond that is additive. The team agreed this framing is the right thing to show Julia on Wednesday: here is what we can guarantee, and here is what each additional level of access unlocks.
