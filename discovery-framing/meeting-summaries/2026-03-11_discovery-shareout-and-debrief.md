# Discovery Share-Out + Debrief — 2026-03-11

## Overview

**Type:** Client presentation + internal debrief (two back-to-back sessions)
**Date:** 2026-03-11

### Session 1 — Discovery Share-Out with Julia
**Attendees:** Dan Maser, Gus Schissler, Nate Papes (Atomic Object); Julia Pralle, Andrea Zotelli (Woven)
**Format:** Slide deck presentation + live POC demo

### Session 2 — Internal Debrief
**Attendees:** Dan Maser, Gus Schissler, Nate Papes (Atomic Object)

---

### Key Facts
- Presentation covered discovery findings from four stakeholder interviews and introduced the three-system MVP architecture
- Gus demoed the live requirements generator POC using Anthropic API (with spoofed test data, not real Woven requirements)
- Julia was visibly positive throughout; said "I'm pretty excited" at the close
- Gus will send Julia a screenshot of the Wovey API project onboarding form
- Reqtify demo is pending — Andrea to follow up with Clifton on scheduling; license from Japan team not yet obtained
- Brian Hampton (architecture diagram contact) cancelled their afternoon meeting; rescheduled to next week

### Themes
- Access is the primary blocker across all three systems; prioritized as highest-urgency work item
- Woven team (especially Andrea) wants to start using the tool with real data now — tool is functional but not yet wired to production systems
- Julia and Andrea aligned on two JAMA artifact types: raw SWRD copy (with Japanese) + separate plain-English interpretation item, linked
- Wovey agent vs. hosted front end is an open question; preference deferred to the users (Hannah, Nick, Andrea)
- Reqtify's role remains unclear; change management scope depends on Reqtify evaluation outcome

### Decisions Made
- **JAMA artifact model:** Two linked items per SWRD — (1) raw copy of source content including Japanese, (2) plain-English interpretation of how IPA Shell reads the requirement. Julia confirmed these as separate JAMA items with a relationship link between them
- **Wovey API passthrough:** LLM calls will be routed through Wovey's API (pass-through to Anthropic) rather than Atomic's keys, once Wovey project is provisioned
- **Tool interface deferred:** No strong preference from Julia between a standalone front end vs. Wovey-native agent; defer to users (Hannah/Nick/Andrea)
- **Change management deferred:** Start building System 1 and System 2; revisit Reqtify vs. custom change management in a few weeks once Reqtify demo happens

### Action Items
- **Julia** — Find the DRI for Wovey to request Git repo (lane change requirements) added as a Wovey data source
- **Julia** — Provide line of business and project cost center to Gus for Wovey API project onboarding form
- **Gus** → **Julia** — Send screenshot of Wovey API project onboarding form
- **Andrea** — Follow up with Clifton on Reqtify demo scheduling; ensure all relevant people are included (and meeting is recorded since Julia is out next week)
- **Andrea** — Submit Stargate support request for JAMA API access/key with appropriate write permissions
- **Gus** — Set up a meeting with Andrea, Hannah (and Nick?) to review current JAMA folder structure and confirm hierarchy before tool is built to target it
- **Gus** — Write up a brief product overview of the architecture diagram generator to send to Brian Hampton before they meet
- **Nate** — Complete remaining onboarding steps; request one-team registration to get access to GitHub repo (`adas_bev_document`); follow up with David Zielinski on outstanding repo access (serverless, Togo, 13th Floor / Mercury)
- **Gus** — Ensure Atomic team is on calendar for Reqtify demo (at least one person)
- **Dan/Gus** — Schedule usability demo with Hannah and Nick as soon as access allows

---

## Session 1 — Discovery Share-Out Notes

### Problem Recap
- Two distinct requirements problems presented; Julia had already scoped these clearly
- **Top-down (focus):** Toyota requirements via Customer Application (CA) liaison arriving scattered across Git, Google Docs, Confluence, JAMA, spreadsheets — no single source of truth; change without notification
- **Bottom-up (out of scope):** Years of existing code with no formal requirements; internal to Woven and lower priority
- Hannah Lane quote used as centerpiece: *"All I do is copy things into JAMA."* — stated before interview even formally started
- Lane Change alone has 600+ SWRDs; all tracked manually today

### Scope Summary
**In scope (pilot):**
- Structured JAMA requirements entry from SWRD content
- Gated test case generation via LLM (approval required before generating)
- JAMA source linkage and version history
- Lane change SWRDs from Git repository
- Automated SWRD discovery and batch import from PRD
- Change notification and detection for changing versions

**Out of scope:**
- SWRDs only (not SBRDs); lane change only for pilot
- Integration with upstream Customer Application systems
- Bottom-up requirements backfill
- Redesigning the PRD authorship process

### Three-System Architecture
Presented as three independently-useful systems in priority order:

**System 1 — Requirements Creation** (POC already built; no access dependencies)
- Parse SWRD content → structure into JAMA-compatible format
- Gated test case generation (user triggers after approval)
- Output options depend on JAMA API access: manual copy-paste now → direct API post once access obtained

**System 2 — Automated Gathering** (needs Git + Google Drive access)
- Discover all in-scope SWRDs from quarterly PRD
- Batch import rather than one-by-one manual hunt
- GitHub may be accessible via JAMA documentation layer (read access to JAMA may include read access to documentation website)

**System 3 — Change Management** (extends System 2; scope may narrow depending on Reqtify)
- Detect SWRD version changes; diff old vs. new
- Alert stakeholders with summary of what changed
- Open question: build custom vs. defer to Reqtify

### JAMA Artifact Structure Discussion
- Julia: raw SWRD should live in JAMA as-is (including Japanese) to support exact change tracking
- Julia: a separate JAMA item should capture "how IPA Shell interprets this requirement" — linked to the raw SWRD
- Andrea confirmed: true copy from GitHub including Japanese is correct
- Gus: JAMA has relationship tooling built in for associating items; will work with team to define hierarchy and correct links
- Gus noted: if content is a direct copy, may not even need LLM — the markdown structure is consistent enough to scrape deterministically

### POC Demo — Requirements Generator
- Gus demoed live using test requirements (spoofed, not real Woven data); routing through Atomic API keys temporarily
- Input: raw SWRD in Git markdown format (header, reason, description, interface, specification)
- Output: (1) brief plain-English summary of what the requirement is and why it exists, (2) structured field-by-field breakdown ready to copy into JAMA
- Julia: "So this takes in the current requirement and puts it into a new structure for us, basically?" — Gus confirmed
- Example test requirement used: "Vehicle steering commands produce smooth, comfortable lateral motion that keeps the car properly centered in the lane"
- Open fine-tuning questions: English only vs. English + Japanese? Summary vs. verbatim copy? — now answered (both, as separate items)

### POC Demo — Test Case Generation
- Gus hit "Generate Tests" — failed to generate live, then succeeded while team wasn't watching it
- Generated 5 test cases following Hannah's existing format: preconditions, postconditions, edge cases
- Hannah's prompt (from her Google Doc) used as the LLM input
- Hannah wants at least one test per SWRD; human review loop stays in place
- Julia: "We're definitely in a state of improving the prompt for some time, so that we can just trust it and move on"

### Wovey API Access
- Gus currently using Atomic API keys (test data only); need Wovey project provisioned to use with real Woven data
- Wovey uses Glean under the hood; allows pass-through API requests to Anthropic
- Wovey API onboarding requires: project name/slug, line of business, project cost center, optional spending limit
- Julia will provide line of business and cost center; spending limit is optional so not a blocker
- Gus plans to use Claude Sonnet as model
- Andrea: wants to use real requirements for testing ASAP once access is set up

### Reqtify Discussion
- Gus researched Reqtify; key finding: **Reqtify does not create content** — someone still needs to create JAMA requirements first
- Reqtify strengths: traceability linkage (JAMA requirement ↔ SWRD source URL), suspicious link detection, change tracking, dashboard, notifications/digests
- Reqtify uses URLs with version numbers; could surface "this version updated for this SWRD and this JAMA requirement hasn't been updated yet"
- Current thinking: Atomic tool handles ingestion + generation; Reqtify handles change management as source of truth once items are created and linked
- Julia: if Reqtify can also handle requirement → test result traceability, that's another strong argument for it
- Hannah's magic wand wish: trace requirements → SWQTs → unit tests → statuses, end to end
- Julia: "That's the whole overview we're trying to create. Not only 'do we have it implemented' — it's also 'how are we performing on this?'"
- Reqtify demo: Clifton working on license from Japan; intended for this week or next week; not on calendar yet
- Andrea: will follow up with Clifton; has been told Reqtify requires a Windows machine + license

### Hosting / Deployment
- Atomic could host on Vercel; would give Woven users a URL to access the tool
- Open question: who at Woven handles standing up a small internal tool inside their ecosystem?
- Julia suggested starting with Brian Hampton; if he doesn't know, next contact is Sam (Dev Eco, owns simulation tooling)
- Gus added to their shared doc

### Next Steps Confirmed at Close of Session 1
- Julia's action items: find Wovey DRI for Git source access; provide line of business + cost center; monitor Reqtify demo
- Gus: send Wovey API form screenshot to Julia; demo to Hannah and Nick; iterate
- Next week: Julia is out; Andrea and Gus to meet with Hannah (and possibly Nick) about JAMA folder structure
- Andrea is working on revised JAMA structure doc; will share with Julia and Hannah to review first

---

## Session 2 — Internal Debrief Notes

### Immediate Reactions
- Dan: "I do believe she was very impressed, especially towards the end"
- Gus on JAMA API access discussion: want to help Julia communicate exactly what is needed (it's an API key with read-write scope, not full admin access — Andrea initially said "administrator" which Gus clarified)
- Andrea wanting to use the tool now is a "good problem to have but it is definitely a problem" — tool looks usable but isn't fully wired yet
- Dan: need to get to alpha testing with real users ASAP, even while monitored

### Swim Lanes Identified
Dan framed four parallel workstreams:
1. **Access** — Wovey API provisioning, JAMA API key, Git access for Nate (highest priority; blocks everything else)
2. **Usability testing** — demo with Hannah and Nick; get real user feedback; determine if UI or Wovey agent is right path
3. **Reqtify** — lower priority; evaluate once demo happens
4. **Architecture** (Nate's lane) — Epic 2; architecture diagram generator for Brian Hampton

### JAMA API
- Gus found JAMA software API docs at `stargatejamacloud.com/api-docs` (requires creator-level access to load; Gus is read-only so gets error)
- JAMA also has an "API cookbook" (integration recipes for JAMA Connect)
- Gus: will feed API docs into Claude to understand what's available
- Nate: the Stargate support team handling JAMA access may not know what an "API key" is for their own tool — worth sending clear documentation link to Andrea to ease the request

### GitHub/Stargate Access — Nate's Status
- Gus's message to Uday got Gus (and presumably Dan) direct GitHub access to `adas_bev_document` repo (markdown powering documentation layer)
- Nate getting 404 on that repo — not yet on one-team
- Nate needs to: (1) complete one-team registration, (2) request access to `adas_bev_document` repo, (3) follow up with David Zielinski on remaining onboarding repos (serverless, Togo, 13th Floor / Mercury)
- Dan: once Nate registers on one-team, Dan can message the contact and get Nate turned on
- Gus: less worried about Nate not having direct access to the `bev_document` private source repo; solution will likely tie into the documentation website layer, not Git directly

### Hosting and Distribution
- Vercel hosting won't work if users need to be on VPN to access Woven systems
- Nate: copy-paste version (user supplies their own keys) could work as a prototype without hosting
- Wovey agent approach is compelling: stays within Woven ecosystem, already has Google Drive access, may be able to call APIs — investigate whether Wovey agents can call external APIs (e.g., JAMA)
- Nate: before choosing, do a demo with Hannah/Nick to find out if they even want a UI or prefer Wovey agent
- Gus: wants a developer's eyes on the code before releasing anything to users ("not that I want you to clean up after my Vibecoat mess")

### Epic 2 — Architecture Diagrams (Nate's Ownership)
- Nate confirmed as DRI for Epic 2 (architecture diagram generator)
- Gus: will write up a brief product overview to share with Brian Hampton before they meet (Brian has no context on who Atomic is or what they're building)
- Nate: best starting reference is the "Item 10 Details" Google Doc Julia shared last week, specifically the Epic 2 chunk
- Gus: architecture diagram problem is about observability — Woven has years of built software with no documented systems architecture; no one knows what exists
- Long-term vision floated: diff architecture diagram generated from requirements vs. diagram of what exists today; call out key differences

### Reqtify Demo
- Gus got a Slack notification during debrief that a Reqtify demo may be scheduled for next Tuesday
- Gus requested access (got it); wants to ensure at least one Atomic person is on the invite

### Brian Hampton Meeting
- Brian cancelled their afternoon architecture meeting; postponed to next week
- Gus: will prepare a brief project overview to send ahead of time
