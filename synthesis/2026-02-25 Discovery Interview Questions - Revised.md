# Discovery Interview Questions (Revised)

Consolidated from [[2026-02-24 Discovery Interview Questions List]], [[2026-02-05 Systems Workshop - Wrap Up- Transcript]] and [[2026-02-05 Systems Workshop - Wrap Up- Summary]], and [[2026-02-25 Discovery Questions Planning part 2]].  
For answer-tracking (partially/fully answered), see the original list. Answer status below is based on [[Context/2024-02-06 Contributor Brief Onboarding Video - Transcript]], [[Context/2026-02-02 Full Systems Workshop Agenda Notes]], [[Context/2026-02-05 Systems Workshop - Wrap Up- Summary]], [[Context/2026-02-05 Systems Workshop - Wrap Up- Transcript]], and [[Context/Atomic Object-Project Details]].

**Legend:** **[F]** = fully answered in referenced source(s). **[P]** = partially answered; follow up or validate in interviews.

---

## Interview approach and format

- **Lead with a visual, then verify.** Don’t rely on them explaining from scratch. Mock up the flow (e.g. in Miro or Fig Jam) and have them correct it. First interview may be rough; later ones are mostly validation.
- **Frame as “help us understand,” not “explain everything.”** Start from “what we've been able to gather” and validate what we think we know.
- **Use section headers as high-level questions.** We have a few big themes (release and integration flow, change tracking and changelogs, requirements and traceability, architecture, process and tooling, scope). Use the numbered list as sub-points to hit *when* we’re in that topic.
- **Tool:** Miro or Fig Jam — no strong preference.

---

## Interview Flow

The goal for these interviews is to shortcut a lot of activities we'd normally do during a formal workshop Kickoff. That's because you folks are a Product org and have a lot of established context already, so we really just need to get up to speed.

First goal is to have a basic service blueprint of what the problem space is and what we are building to fix the pain points in that problem space.

Q1: Is our understanding of the V-model SDLC correct?
- We've prepped a Miro for this - we'll start with what we've been able to gather from prior notes and Wovey and walk through it together

- big picture flow from user requirements, to development teams, and back
- Cover: what's missing, what do we have wrong

Q2: What role does Product Delivery play in the larger software lifecycle?

- Again, starting with high-level and then narrowing down into the day-to-day
- How frequently is this cycle occurring? Is this a week-to-week pattern? Monthly? Other?
- If time, can you walk us through the actions you take today in JAMA and other applications?

Q3: Product Delivery Process questions (what exists today in terms of process)

- How are responsibilities broken up? Is one person in charge of each release or feature?
- What level of detail are you putting into the JAMA requirements? Is it everything or are they cherry picked?
- What, if anything, is automated right now?
- When something changes on a team, how do you know? How frequently does that happen?

Q4: Stakeholder / ecosystem map (who will be interacting with this automated tool?)

- How many teams are contributing code to the integrated release? Do they all follow the same process, or does each team have its own workflow?
- (Julia) Did you have a team in mind to start with?

*Answer context (do not alter questions above):*  

- **Q1** **[P]** Dev/CI side of the flow (trunk-based, PRs, CI, DRB, nightly) is described in [[Context/2024-02-06 Contributor Brief Onboarding Video - Transcript]]. URD→SCRD / requirements flow is in workshop notes. Miro walkthrough still needed to validate combined V-model.  
- **Q2** **[P]** DRB cadence (daily) and vehicle ops handoff in Contributor Brief; PdM/SV&V role in requirements and PRD workflow in [[Context/2026-02-05 Systems Workshop - Wrap Up- Summary]]. Product Delivery’s day-to-day in JAMA not yet spelled out.  
- **Q3** **[P]** Ownership and workflow (URD→SCRD table, PRD workflow, change-request cadence, JAMA setup) in workshop wrap-up and [[Context/2026-02-02 Full Systems Workshop Agenda Notes]]. “What’s automated” and “when something changes, how do you know” still to clarify.  
- **Q4** **[P]** Capability groups, motorway vs urban, and some DRIs (Julia, Hannah/Andrea, Ryan, Sanjiv) in workshop notes. “How many teams” and “team to start with” not answered.

---

## The Big Picture

*Ask Julia or Andrea first. Goal: crystal clear on the process.*

1. Can you verify this flow, at a high level: how does code get from an individual team’s repository to a vehicle? What are the major stages? **[F]** — Fork → branch → PR → Reviewable + CI → merge to master → nightly → DRB → vehicle ops (closed course) → approved DRB → field ops. [[Context/2024-02-06 Contributor Brief Onboarding Video - Transcript]]
   - **Do this by mocking it up in Miro/Fig Jam and having them verify** (don’t rely on them explaining from scratch).
2. ~~How many teams are contributing code to the integrated release? Do they all follow the same process, or does each team have its own workflow?~~
3. Is there a single integration point where all teams’ code comes together, or does it happen in stages? **[P]** — Contributor Brief: single branch (master), one DRB; “Product Delivery team” and multi-team merge points not described. [[Context/2024-02-06 Contributor Brief Onboarding Video - Transcript]]
   - What are the **stages** that it takes to get into the single integration point?
   - Does it contain **multiple teams’ code and changelog**?
   - **How many times** are things merging together before it gets to the Product Delivery team?
   - *(We want to know: are we interacting with 10 different things that can update at any time, or fewer integration points with their own connections?)*
4. When a team ships their code into the integrated build, what artifacts come along with it — just the code, or also a changelog, release notes, test results, something else? **[P]** — DRB handoff and log ingestion / JIRA tickets for disengagements described; changelog and release notes not. [[Context/2024-02-06 Contributor Brief Onboarding Video - Transcript]]
   - **Which of these are manually collected, manually created, vs. automatically generated?**

---

## Release and Integration Flow

*Framing: Help us understand the role that Product Delivery has in this flow. Why do we need this role?* (e.g. why don’t teams just merge into the integration environment on their own?)

1. How often does an integrated release happen? Is it daily (like the DRBs), weekly, quarterly, or some other cadence? **[F]** — Daily (DRB = daily release build). [[Context/2024-02-06 Contributor Brief Onboarding Video - Transcript]]
2. Who owns the integrated release? Is it Julia’s team, a separate release engineering team, or is it distributed? *Unanswered in sources.*
3. What does “ready to release” look like today? What criteria or gates does a release have to pass before it goes to vehicles? **[P]** — Nightly + OpenLoopLogReplay pass → DRB → vehicle ops closed-course script; then approved DRB to field ops. [[Context/2024-02-06 Contributor Brief Onboarding Video - Transcript]] Workshop adds V&V/SWQT/SBRD/TPID. [[Context/2026-02-02 Full Systems Workshop Agenda Notes]]
4. Are there formal gates (integration gate, V&V gate, safety gate, program gate), or is it more informal? **[P]** — V&V strategy (SWQT, SYQT, SBRD, TPID) and ownership in workshop; formal gate names/owners not fully spelled out. [[Context/2026-02-02 Full Systems Workshop Agenda Notes]] If formal, who owns each gate? (See same ref.)
5. What happens when a release fails a gate? What’s the process for identifying the issue and rolling back or fixing it? *Unanswered in sources.*

---

## Change Tracking and Changelogs

*Framing: What happens if a team changes a requirement or a test after it’s already been written?* (e.g. billboards example.)  
*Follow-ups: How is that tracked? How do you know about it? What happens next — does the team Slack you, do you have to monitor, something else?*

1. Today, how does your team know what changed between one release and the next? Is someone manually assembling that, or is there any automation? **[P]** — Change-request process (weekly meeting, running doc, JAMA/PRD versioning) in workshop; “what changed between releases” as changelog not described. [[Context/2026-02-02 Full Systems Workshop Agenda Notes]], [[Context/2026-02-05 Systems Workshop - Wrap Up- Summary]]
2. When you say requirements are “all over the place” — for the changelog specifically, where are teams currently documenting what’s in their release? PRs? Markdown in the repo? Google Docs? Jira tickets? Nowhere? **[P]** — PRD + Confluence as target; sources today: SWRDs in Sheets/Git, SBRDs in Docs, JAMA, PRD table. [[Context/2026-02-02 Full Systems Workshop Agenda Notes]], [[Context/Atomic Object-Project Details]]
    - **Add:** You’re moving to PRD + Confluence as the target. What are teams using *today* before that’s in place, and what’s the migration path?
3. Is there a single person or role responsible for compiling a unified changelog or release summary across all teams? *Unanswered in sources.*
4. How much of the changelog work is cherry-picking important things from individual team docs vs. having a structured feed of what changed? *Unanswered in sources.*
5. What does the changelog look like when it’s “done”? Is there a template, a JAMA entry, a document — or does it not currently exist in a finished form? *Unanswered in sources.*

---

## Requirements and Traceability (the “left side of the V”)

1. When a team makes a code change, how do you currently know which requirement it traces back to? Is that captured in the PR, in Jira, somewhere else, or not at all? **[P]** — Contributor Brief: JIRA ticket in commit message links to PR; workshop: traceability and Reqtify (CA) for SWRD. [[Context/2024-02-06 Contributor Brief Onboarding Video - Transcript]], [[Context/2026-02-05 Systems Workshop - Wrap Up- Summary]]
2. How do you know if a requirement has been satisfied by code that’s been integrated? Is there a status workflow for that today? **[P]** — Workshop: SWQT/SYQT/SBRD/TPID verification, AIDT matrix, report to PdM; status workflow not fully spelled out. [[Context/2026-02-02 Full Systems Workshop Agenda Notes]]
3. When upstream requirements change, who is responsible for notifying your team? Does that actually happen reliably? **[P]** — Change-request process: SV&V summarizes, PdM reviews on cadence; escalation to PdM↔SE sync. [[Context/2026-02-02 Full Systems Workshop Agenda Notes]]
4. What’s the relationship between a requirement in JAMA and a requirement in Git? Are they duplicates, at different levels of abstraction, or messy and inconsistent? **[P]** — Workshop: URD/SWRD in Git (e.g. bev.dev.req.tmd.w3n.io), JAMA for SWRs and below; PRD organizes by feature. [[Context/2026-02-02 Full Systems Workshop Agenda Notes]], [[Context/Atomic Object-Project Details]]
5. What does “traceability” mean to you in practice? If you had perfect traceability, what question would you be able to answer that you can’t answer today? **[P]** — Project Details: "complete traceability overview" and "communicating requirements status to TMC" as goal. [[Context/Atomic Object-Project Details]]
6. **URD→SCRD table (workflow/ownership):** Can you walk us through the URD→SCRD table — or share a draft — so we see requirement/architecture level, where it’s stored, and who’s responsible? **[F]** — Table exists (Sanjiv); levels, storage, team, validation, test plan location captured; to be published on Confluence. [[Context/2026-02-05 Systems Workshop - Wrap Up- Summary]], [[Context/2026-02-05 Systems Workshop - Wrap Up- Transcript]]
7. **PRD requirements tab (target format):** Separately, can you show us what a requirement looks like in the PRD requirements tab at each level (e.g. SBRD, SWRD, SCRD) so we know the target format for intake? How do they relate to each other, and which level would you want us to start with? **[P]** — Workshop: ownership by level (URD TMC/CA, SWRD CA, SBRD WbyT, SCRD SV&V); LK/LC requirement-split examples; PRD table as target. [[Context/2026-02-02 Full Systems Workshop Agenda Notes]], [[Context/Atomic Object-Project Details]]
8. What does TMC need to see from you regarding requirements status, and where is the current communication breakdown? **[P]** — Project Details: "communicating the requirements status to our customer (TMC)" and "consolidating all requirements into a single source of truth" as impact. [[Context/Atomic Object-Project Details]]

---

## New questions (from workshop and planning)

*These plug into the flow where relevant or can be used as follow-ups.*

*Answer context:* URD→SCRD table **[F]** — exists (Sanjiv), to be on Confluence; wrap-up. ODD **[F]** — scope/ODD per feature in PRD, same ODD doc for all URD (Wendi action); wrap-up. Hannah and Andrea **[F]** — leading JAMA structure for SWRs and below; wrap-up. Ryan’s example **[P]** — Ryan + Julia setting up JIRA structure similar to Ryan’s example; example not yet shared. Capability groups **[P]** — “initiatives” in FY26; motorway/urban, in-lane, lane transitions; workshop agenda. Reqtify **[F]** — CA will use for SWRD traceability, connected to JAMA; workshop. Phase 1 inputs **[P]** — Project Details: PRD, Google docs, existing JAMA, Git, Confluence. [[Context/2026-02-05 Systems Workshop - Wrap Up- Summary]], [[Context/2026-02-02 Full Systems Workshop Agenda Notes]], [[Context/Atomic Object-Project Details]]

### Table, Confluence, and schema

- Can we get access to or a copy of the **URD→SCRD table** (Sanjiv’s) that’s going on Confluence — even a draft? It would help us align tooling to the same levels, storage locations, and ownership.
- Once that table is on Confluence, can we treat it as the **canonical schema** for “requirement/architecture level → where it’s stored → who’s responsible” so our tooling writes to the right places?

### Where our automation plugs in

- For the **requirement-intake automation** (our contractor project): where do you want the **output** to land first — the new JAMA structure for SWRs and below, the PRD table, or both? Should we consume the Confluence table (once stable) as the source of truth for where things live?
- The workshop agreed on the URD→SCRD table and Confluence, then “execution.” How do you want **our requirement-intake automation** to relate to that — as one of the execution workstreams that feeds the same table/PRD/JAMA, or as a parallel track we align once the table and JAMA structures are fixed?

### ODD and capability groups

- ODD is now in scope (per feature in PRD, per quarter on roadmap). How should **ODD** be represented in requirements we generate or sync — as a separate field, linked doc, or part of the requirement text?
- You’re replicating the SWRD spreadsheet “organized for our **capability groups**.” What are those capability groups, and is there a **canonical list** we should align to for requirements and SWRD tracking?

### People and coordination

- You’re replicating **Ryan’s example from a couple years ago** for the new JAMA change-request structure. Can we **see that example** so we can design automation to match the target shape?
- Can you spell out the main **teams/roles** in the requirements and V&V flow (e.g. SV&V, SBNB, SNQ, Parliament, PdM) and **who we should coordinate with** for requirements intake vs. traceability vs. report generation?
- **Hannah and Andrea** are leading the JAMA structure for SWRs and below. Can we **sync with them early** on container/folder structure and conventions so our ingestion outputs in the same shape?

### Prioritization

- For **Phase 1**, which **input sources** should we prioritize: PRD table, existing JAMA, SWRDs in Sheets, SBRDs in Docs, Git repo, or something else?

---

## Architecture (Epic 2 foundations)

*Answer context:* **[P]** — Project Details: current architecture documentation “not yet planned”; Julia to clarify with Eric Keranen if old tool could be re-used. [[Context/Atomic Object-Project Details]]

1. Is there any existing architecture diagram or documentation for the current IP stack? Even an outdated one?
2. Julia mentioned there was a tool previously that generated architecture views — does anyone know what it was, what it produced, or why it stopped being used?
3. When you say “architecture change,” what does that mean concretely? A new node? A changed dependency between components? A new interface? All of the above?
4. How would you use an architecture diagram day-to-day if you had one? Is it for your team, for communicating to TMC, for onboarding, for reviewing PRs — or all of those?
5. Can we get read access to the IP source code? What language(s) is it written in, what’s the build system, and are there any classification or export-control constraints we should know about?

---

## Process and Tooling Basics

*Answer context:* **[P]** — Workshop and Project Details: JAMA, GitHub, Jira, Confluence, Google Docs, Slack; Reqtify (CA) for SWRD traceability. JAMA API and “one thing to fix” unanswered. [[Context/2026-02-02 Full Systems Workshop Agenda Notes]], [[Context/Atomic Object-Project Details]]

1. What tools does your team use day-to-day? (JAMA, GitHub, Jira, Confluence, Google Docs, Slack — anything else?)
2. Does JAMA have an API? Has anyone tried to automate anything with it before?
3. Has anyone looked at Reqtify yet? What’s the current status of that evaluation, and who’s driving it? **[F]** — CA will use Reqtify for SWRD traceability, connected to JAMA (per Tani-san). [[Context/2026-02-02 Full Systems Workshop Agenda Notes]], wrap-up.
4. If we could only fix one thing about your current process, what would make the biggest difference?

---

## Scope and Success Criteria

*Answer context:* **[P]** — Project Details: Phase 1 = “Provide a mockup that shows capability of generating requirements and architecture (from 1 and 2).” Who evaluates and timeline not in sources. [[Context/Atomic Object-Project Details]]

1. What would a successful Phase 1 mockup look like to you? Who evaluates whether it’s done, and what’s the timeline expectation?
    - **Add:** Should the mockup demonstrate integration with the **new JAMA structure (SWRs and below)** and/or the **PRD table**, or is a standalone demo acceptable for Phase 1?

---

## Optional / assumptions to validate

- **Team-agnostic:** We might start with one team for clarity — should what we build be **team-agnostic** so it works across all teams?
- **Confidence:** What would make you confident that automating this manual work (requirements + tests across teams) can actually work?
- **Anything missing:** Is there anything we’re missing in terms of the core aspects of this flow?

---

## Potential necessary follow-up questions

*Answer context:* **[P]** — Project Details and workshop note 360deg Perception JAMA example, Hannah/Andrea leading JAMA structure, PRD/Sheets/Docs/Git/JAMA as sources. Many input-source and codebase details still unanswered. [[Context/Atomic Object-Project Details]], [[Context/2026-02-02 Full Systems Workshop Agenda Notes]]

*Deeper specifics for after the first interview rounds. See also [[2026-02-24 Discovery Interview Questions List#Potential necessary follow-up questions]].*

### JAMA structure and organization

- How is JAMA organized today for the IP project? What’s the container/folder structure?
- Who decides how new requirements get categorized in JAMA?
- Are there existing JAMA items we should look at as examples of the target format? (Project Details link a 360deg Perception example — is that representative?)

### Input source details (for building the ingestion pipeline)

- For each requirements source (PRD table, SWRDs in Sheets, SBRDs in Docs, Git repo, JAMA) — who owns it, how often does it change, and what does a “good” requirement look like in that source?
- What access do we need to each source, and who grants it?
- How should we handle conflicting or duplicated requirements across sources?

### Requirements conflict identification

- The SOW mentions “eventual conflict identification” — how do conflicting requirements surface today? Is it caught in review, in testing, or not at all?
- What would a useful conflict notification look like to your team?

### Automation and CI/CD integration

- Phase 2 calls for making the tool “CLI ready for future expansion” — where would a CLI tool fit in your current workflow? Would it plug into CI, run on developer machines, or be used by a specific role?
- Are there any existing automation scripts or pipelines we should be aware of or build on top of?

### Codebase structure (for Epic 2 architecture generation)

- Is the IP stack a monorepo or multi-repo? How are the components/modules organized?
- What are the key interfaces or boundaries between components that an architecture diagram should capture?
- How large is the codebase roughly — thousands of files, tens of thousands, more?
