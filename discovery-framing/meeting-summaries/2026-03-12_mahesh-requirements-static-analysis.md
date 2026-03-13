# Mahesh Sarode — Requirements & Static Analysis Discussion — 2026-03-12

## Overview

**Type:** Discovery / technical interview  
**Attendees:** Nate Papes (AO), Gus Schissler (AO), Dan Maser (AO), Mahesh Sarode (Woven)  
**Context:** Exploring static analysis approaches to detect software architecture changes and tie them back to requirements; follow-up debrief between AO team members included at end of transcript

### Key Decisions / Findings
- Woven's autonomy codebase (IPA — Internal Product Autonomy) uses EFDL files to define component topology and signal flow; these are static files committed to the repo
- EFDL files describe component connections (inputs, outputs, resource allocation, scheduling/Hz rates) at the node level — sufficient granularity to detect interface changes
- A diagram-generation tool previously existed at Woven but has been lost (likely departed employee)
- No current automated generation of architecture diagrams as part of the build process
- Brian Hampton (systems/software architect, lead on the IPA repo) is the right person to loop in for decisions about the repository

### Action Items
- **Nate:** Meet with Brian Hampton next week (Dan booked Monday slot) — confirm approach, get tribal knowledge about past tooling, check EFDL file ownership and commit history
- **Gus:** Slim down HTML presentation to ~3 slides for Brian meeting; frame around "this is why we're here and what we're doing"
- **Gus/Nate:** Investigate Drawio VS Code skill (Dan Maser mentioned colleague using it to generate architecture diagrams from the Novitas codebase)
- **Nate:** Share link to Woven GitHub plugins/interaction examples found in their repo
- **Team:** Review EFDL file commit history to check if files are still actively maintained

---

## Meeting Notes

### Nate's Introduction / Problem Framing
- Woven teams receive requirements on a quarterly cadence; requirements come from Japan, land in Git and Google Drive, sometimes Slack threads
- Teams (primarily Hannah's) must manually review, deduplicate, identify stable requirements, then put them into JAMA
- Hannah used an LLM (via Wovey) to handle ~90% of this work — Nate cited this as a strong proof point
- Longer-term need: detect *when software changes* so requirements owners know which requirements need revisiting
- This is system 2 (change detection) in the AO architecture framing; current pilot is system 1 (SWRD → JAMA pipeline)

### Mahesh's Role and Background
- Mahesh works on the requirements and validation side; currently focused more on validation
- Covers requirements, architecture, and a range of related topics — not directly writing software day-to-day
- Works on the application layer software (IPA)

### EFDL Files — Key Technical Finding
- Woven's autonomy architecture is documented through **EFDL files** and **schematic files** (static, committed to the IPA repo)
- Each file describes component (node) connections: inputs, outputs, resource allocation, scheduling (Hz rates)
- Example: `camera_node` → connected to processing pipeline; `map fusion` → own sub-node definitions
- Reading all EFDL files is sufficient to construct a picture of signal flow across the system
- There's also a main scheduling file for hardware resource allocation
- Mahesh showed the IPA repo live: `node files`, `camera schedule` nodes, skeleton EFDL file — structured enough to parse programmatically

### Nate's Proposed Approach
- Start in-repo: create a branch, write a script to parse EFDL files and generate component-level diagrams
- Show output to Julia; if she approves the fidelity, discuss where/how to host and when to trigger (e.g., nightly cron, release candidate build)
- Consider git diff on generated diagrams across builds to surface meaningful changes
- Hashing key files as a lightweight change-detection trigger (if hashes break, flag for review)
- Granularity target: component level (e.g., lidar inputs/outputs), not individual function names; build up complex system from hardware component pieces

### Brian Hampton — Recommended Contact
- Mahesh strongly recommended keeping Brian Hampton in the loop; he's the lead architect / software architect on the IPA codebase with significant repository control
- AO team had tried to meet Brian the prior day but he was busy; meeting booked for Monday next week
- Brian runs onboarding sessions on Git workflow for new contributors

### Post-Meeting Debrief (AO Internal)
- Gus noted he didn't know about EFDL files before this conversation — valuable new input
- Nate: EFDL files may have a `viz`/Graphviz dependency in the repo (he'd seen something similar; wants to confirm)
- There's a tool that *used to* generate diagrams from EFDL — likely lost when an employee left; may have been on a local machine
- Dan's colleague has been using a Drawio VS Code skill to generate architecture diagrams from the Novitas codebase; Gus told Nate to talk to him about it
- Nate found Woven GitHub examples of plugins/Wovey interactions — will share link with Gus

### Brian Meeting Prep Discussion
- Gus: each interview starts cold — Brian likely has no context on Julia's team or what AO is building
- Plan: open with a single-slide "why we're here" framing before the technical content
- Dan: clarified Epic 2 (static analysis / change detection) is the relevant scope for Brian — Brian has no role in Epic 1 (SWRD → JAMA pipeline)
- Nate: goal for Brian meeting is to identify the right people to sync with on a routine basis, and surface any existing internal tools that overlap with what AO is building

### Standup Timing
- Existing 3:00 PM standup conflicted with Gus's client meeting and Julia's schedule
- Dan moved standup to 4:30 PM same day

### Other Logistics / Status
- Usability testing scheduled: Hannah (Wednesday, 4–5 PM), Nick (Thursday, 11 AM)
- Brian conversation booked Monday (Dan placed it before his calendar filled)
- Rectify demo scheduled for Tuesday next week (Clifton); Andrea asked him to record it for Julia
- JAMA API access: in progress (service account creation underway)
- GitHub repo for requirements tool: Gus will create on AO side (not Woven's environment) when he has cycles; Hannah access via zip file or Slack if she doesn't have GitHub
- Gus's Plaud transcription pipeline: Plaud device → phone → cloud → Zapier webhook → Google Drive → scheduled Cloud task → triage by project → push to GitHub repos locally
