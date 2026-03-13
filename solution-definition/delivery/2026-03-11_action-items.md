# Action Items — Post Discovery Share-Out

_Sourced from: 2026-03-11 discovery share-out + debrief, 2026-03-12 JAMA usability & Reqtify standup_  
_Last updated: 2026-03-13_

---

## Atomic — Gus

| Status | # | Action Item | Notes |
|--------|---|-------------|-------|
| ✅ Done | 1 | Send Wovey API project onboarding form screenshot to Julia | Julia sent LOB/cost center number back via Slack |
| 🔄 In Progress | 2 | Follow up on Wovey API project setup (LOB + department number) | Julia sent info in Slack thread; Gus to complete project setup |
| 🔄 In Progress | 3 | Create new GitHub repo for the requirements tool | |
| ⬜ Next | 4 | Send Hannah and Nick a heads-up Monday about usability testing setup and what to expect | Include repo clone instructions (`npm run dev`) |
| ⬜ Next | 5 | Determine GitHub repo approach for POC; distribute to Hannah via Slack or zip file | Hannah runs locally via VPN so data access through Wovey is the same |
| ⬜ Next | 6 | Re-enable TBD flagging and TSS-4 over-prescriptive detection logic for usability testing demo | Was intentionally excluded from the Julia demo |
| ⬜ Next | 7 | JAMA API research — field names, scopes, configurability | Review API docs at `stargatejamacloud.com/api-docs`; feed into Claude to map available endpoints |
| ⬜ Next | 8 | Investigate Wovey agent API for external API calls (e.g. JAMA) | Can a Wovey agent call the JAMA API? Determines whether we need a separate hosted front end |
| ⬜ Next | 9 | Reach out to Willow (data scientist, Woven) about existing internal tooling landscape | Julia will share Willow's contact in Slack; Willow may redirect to NISMOD team (has existing JAMA integrations) |
| 🅿️ Parked | 10 | Set up meeting with Andrea + Hannah to review JAMA folder structure | Dan is booking this for end of next week (Andrea + Hannah only) |

---

## Atomic — Nate

| Status | # | Action Item | Notes |
|--------|---|-------------|-------|
| ⬜ Next | 1 | Reschedule Brian Hampton meeting; send project outline (Epic 2 overview) ahead | Brian cancelled 2026-03-11; postponed to next week |
| ⬜ Next | 2 | Architecture diagram work with Brian (next week) | Read Epic 2 chunk in the "Item 10 Details" Google Doc Julia shared as starting point |
| 🔄 In Progress | 3 | Complete GitHub onboarding — one-team registration for `adas_bev_document`; follow up with David Zielinski on remaining repos (serverless, Togo, 13th Floor / Mercury) | Dan will message contact to activate Nate once one-team registration is complete |

---

## Atomic — Dan

| Status | # | Action Item | Notes |
|--------|---|-------------|-------|
| ✅ Done | 1 | Book usability testing sessions with Hannah and Nick | Hannah: Wednesday 4–5 PM; Nick: Thursday 11 AM (one hour each) |
| ⬜ Next | 2 | Book Andrea for usability testing — Wednesday or Thursday next week | |
| ⬜ Next | 3 | Schedule JAMA folder structure meeting with Andrea + Hannah (end of next week) | Andrea + Hannah only |
| ⬜ Next | 4 | Watch Reqtify demo video | Gus learning more next week while Julia is out; report back when she returns |
| ⬜ Next | 5 | Usability testing — write script / plan for sessions | |

---

## Woven — Julia

| Status | # | Action Item | Notes |
|--------|---|-------------|-------|
| ✅ Done | 1 | Provide billing info (LOB + cost center) for Wovey API setup form | Sent to Gus via Slack |
| ⬜ Next | 2 | Paste Willow's contact info in team Slack channel so Gus can reach her | |
| ⬜ Next | 3 | Find Wovey DRI; request SWRD Git repo added as a Wovey data source | Unknown if within scope of whoever owns Wovey |

---

## Woven — Andrea

| Status | # | Action Item | Notes |
|--------|---|-------------|-------|
| ✅ Done | 1 | Submit Stargate request for JAMA API key (scoped read/write, not admin) | Service account approved; Woven is implementing it |
| ⬜ Next | 2 | Follow up with Clifton on Reqtify demo date; ensure everyone is included and meeting is recorded | Julia is out next week; recording is essential |
| ⬜ Next | 3 | Share JAMA folder structure doc with Julia + Hannah; meet with Gus + Hannah end of next week | |

---

## Parking Lot (Blocked / Deferred)

| Item | Waiting On |
|------|------------|
| Reqtify scope decision — does it cover System 3 (change management), or do we build custom? | After Reqtify demo; decide before speccing System 3. Note: workshop also happening with CA team who are also looking at Reqtify |
| JAMA structure mapping — finalize hierarchy the tool will target | After Andrea + Hannah finalize hierarchy (meeting end of next week) |
| Hosting decision — Vercel won't work over VPN; Wovey agent is preferred approach | After usability testing confirms what interface users want. Note: Hannah running locally via VPN is viable short-term |
| Multi-document intake (slide decks, code, PDFs) — Andrea's workflow | Out of scope for pilot; System 2 roadmap item. Glean (Google Drive access) may already cover some of this — worth checking before building |
