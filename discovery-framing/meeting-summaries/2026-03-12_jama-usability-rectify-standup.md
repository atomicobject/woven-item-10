# JAMA Usability & Rectify Standup — 2026-03-12

## Overview

**Type:** Weekly standup  
**Attendees:** Dan Maser (AO), Gus Schissler (AO), Andrea Zotelli (Woven), Julia Pralle (Woven)  
**Context:** Sprint sync covering usability testing logistics, JAMA access, Rectify awareness, and Andrea's question about multi-document intake

### Key Decisions
- Usability testing with Hannah and Nick scheduled Wednesday/Thursday next week (one hour each)
- Andrea to be added to usability testing session (Wednesday or Thursday)
- JAMA folder structure alignment meeting to be scheduled end of next week — Andrea + Hannah only
- Julia is out next week (travel); team will run standups with Andrea and async as needed
- No Friday standup

### Action Items
- **Gus:** Send Hannah and Nick a heads-up Monday re: setup expectations and what's planned
- **Gus:** Determine GitHub repo approach for POC; distribute to Hannah via Slack or zip file
- **Dan:** Book Andrea for usability testing Wednesday or Thursday next week
- **Dan:** Schedule JAMA folder structure meeting with Andrea + Hannah (end of next week)
- **Julia:** Paste Willow's contact info in team Slack channel so Gus can reach her about existing internal tooling
- **Gus:** Follow up on Wobi API project (LOB/department number) — Julia shared in Slack thread

---

## Meeting Notes

### Usability Testing Logistics
- Dan booked one-hour blocks with Hannah (4–5 PM, Wednesday) and Nick (Thursday, 11 AM)
- Sessions designed to validate tool against their workflow; also gather input on future iterations
- Gus proposed having Hannah clone the GitHub repo and run locally (`npm run dev`) rather than screen-sharing — connects to Wovey through VPN, so data access is the same
- Julia to ask Hannah if she's comfortable running locally; Dan noted she's very capable; Nick is definitely comfortable
- Wobi API project access still needed to route API requests through Wovey — Julia/Gus following up on LOB number (Julia sent in Slack)
- Gus will message Hannah and Nick Monday with what to expect

### JAMA Service Account Access
- Andrea confirmed the JAMA service account (for REST API) has been approved; Woven is currently implementing it
- Account creation is in progress

### JAMA Folder Structure Meeting
- Team wants to meet with Andrea (and Hannah) to understand JAMA's organizational structure so automation can route items into the correct folder
- Process may still be in flux, but team wants an early read on hierarchy
- Tentatively end of next week

### Requirement Tagging / Flags in UI
- Gus previously had logic to flag TBDs and overly prescriptive (TSS-4) requirements
- These would surface as tags in JAMA, enabling dashboard/pivot views (e.g., "all TSS-4 requirements that don't apply")
- Demo intentionally excluded this — Gus to re-enable for usability testing

### Andrea's Multi-Document Intake Question
- Andrea walked through her workflow: she works from a large slide deck with scenarios and formulas, manually writing ~40 requirements, then entering them into JAMA
- Question: can the tool handle intake from sources other than SWRDs (slide decks, code, etc.)?
- **Gus:** Current phase (pilot) focuses on SWRD → JAMA with a single structured input. Multi-source intake is on the conceptual roadmap but not scoped yet
- **Dan:** Even the MVP slice helps downstream — test case creation from SWRD still applies regardless of how requirements were originally authored
- **Julia:** SBRD documents have similar scenarios/criteria — another potential future intake source; build in stages
- **Gus:** System 2 (document intake expansion) could eventually support PDFs, slide decks, screenshots; current focus is System 1 (JAMA output pipeline) and ensuring Hannah's team is fully served first
- Glean (connected to Google Drive) may already handle some document reading — worth investigating what's available before building

### Existing Tooling Landscape
- Gus asked if there's someone at Woven to talk to about what internal tooling already exists (to avoid reinventing)
- Julia suggested **Willow** (data scientist, their department) — primarily focused on simulation/dashboard work but may know the broader landscape
- Andrea mentioned **NISMOD** team — has JAMA integrations (Catia Magic ↔ JAMA link, requirement quality checker); team member is in Japan
- Plan: Gus reaches out to Willow; she may redirect to others

### Rectify
- Julia shared awareness that a workshop is ongoing with the customer application team (main SWRD source) — they're also looking at Rectify
- Gus: interested in Rectify integration because if requirements are being added to Rectify, the tool could grab them and create/link items simultaneously
- Outstanding question: Rectify appears to do *linking*, not authorship — may not fully resolve the problem
- Julia's take: Rectify will resolve some pain points but not all; still room for the tool being built
- Gus wants to learn more next week while Julia is out; will report back when she returns

### Next Week Logistics
- No standup Friday
- Julia out all of next week (Germany)
- Andrea will cover Julia's standup slot; team will coordinate via Slack whether to meet
- Usability testing (Hannah, Nick, Andrea) proceeding as planned
