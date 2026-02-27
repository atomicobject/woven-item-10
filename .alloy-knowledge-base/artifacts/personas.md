---
id: art-2LQY-tnmh_kg
type: persona
title: Personas
status: draft
layerScope: [people, needs]
lensScope: [delivery, usability, feasibility]
generatedAt: 2026-02-27T20:03:13.389Z
lastEditedAt: 2026-02-27T20:03:13.389Z
generationPromptId: pt-fbbCczKoHiVj
---

# Persona: Andrea Zotelli

## Role
Requirements Engineer / Product Delivery Team Member

## Background
Andrea joined Woven by Toyota at the end of October 2024, working primarily on writing requirements and setting up structure in JAMA for systems verification and validation. She's dealing with a massive backlog of undocumented requirements for self-driving car software components and is writing component-level requirements from zero using scattered sources. She works within a complex multi-organizational structure involving Woven, Denso, and other companies in Toyota's 'one team' approach and serves as the primary stakeholder contact for Epic 1.

## Goals
- Set up proper structure in JAMA for systems verification and validation
- Write comprehensive component-level requirements from scattered sources
- Create consolidated documentation for autonomous vehicle software components
- Establish complete traceability overview for all incoming requirements
- Navigate requirements from Toyota Motor Corporation that require rewriting due to language and structural differences
- Serve as critical communication tool with customer TMC for requirements status

## Frustrations
- Lack of consolidated information sources requiring constant searching through scattered documents
- Having to browse through multiple systems (Git repositories, spreadsheets, slides) manually
- No existing component requirements to build upon - starting from zero
- Navigating through spreadsheets with multiple links and fragmented information
- Requirements must be rewritten rather than translated due to language and module structure differences from Toyota Motor Corporation
- Lack of precise understanding of current IP architecture documentation, blocking ability to write lower-level requirements (SCRDs)

## Key Behaviors
- Manually compiles information from various sources into JAMA
- Searches through scattered documents, slides, scenarios, and spreadsheets
- Rewrites requirements rather than translating due to language and structural differences
- Browses Git repositories to gather technical information
- Creates concept maps and tables to organize team roles and processes (PDM, PD, CA, TMC)
- Participates in systems workshop sessions and stakeholder coordination
- Provides JAMA structure guidance to team members

## Representative Quotes
> "Lack of consolidated information sources, requiring constant searching through scattered documents and spreadsheets with multiple links."

## Key Needs
- Consolidated view of all requirements across development teams
- Automated tools to reduce manual compilation effort
- Better visibility into requirement changes from development teams
- Streamlined process for gathering requirements into JAMA
- Precise understanding of current and planned future IP architecture versions
- Complete traceability overview for all incoming requirements
- Elimination of pain points in requirements version control and change management

---

# Persona: Julia Pralle

## Role
Release Tools Project Lead

## Background
Julia is leading a release tools project focused on generating dynamic tools for getting requirements into JAMA. Her primary goal is solving version control problems in requirements management, and she serves as a key stakeholder providing project documentation and coordinating team efforts. She has been identified as a critical interview subject to understand different perspectives on the requirements documentation problem and is a key stakeholder for Epic 1.

## Goals
- Solve version control problems in requirements management
- Generate dynamic tools for requirements intake into JAMA
- Establish proper groundwork understanding through user interviews
- Coordinate project documentation and team alignment
- Ensure teams work with the correct requirement versions

## Frustrations
- Messy version control when managing requirements from multiple sources
- Manual tracking through access sheets and approval processes
- Difficulty ensuring teams work with the correct requirement versions
- Lack of automated solutions for requirements management

## Key Behaviors
- Leads project planning and stakeholder coordination
- Provides documentation and context to team members
- Participates in user interviews and validation sessions
- Focuses on process improvement and tool development
- Manages approval processes and version tracking
- Participates in systems workshop sessions

## Representative Quotes
> [TBD - No direct quotes available in source assertions]

## Key Needs
- Automated version control for requirements management
- Dynamic tools for JAMA integration
- Clear stakeholder alignment and understanding
- Reduced manual tracking and approval overhead
- Better coordination across multi-organizational teams

---

# Persona: Development Team Member

## Role
Software Developer (Perception, Braking, Lane Change, etc.)

## Background
Development team members work on specific autonomous vehicle components like perception, braking systems, and lane change functionality. They store requirements in various systems and make changes during development that need to be reflected back to central repositories. They operate within a complex multi-organizational structure involving multiple companies working as 'one team', with hundreds of contributors expected to work simultaneously across many years using GitHub's forked development model.

## Goals
- Develop and test autonomous vehicle software components
- Maintain accurate requirements for their specific domain
- Communicate requirement changes effectively to product delivery teams
- Ensure their requirements have proper test coverage

## Frustrations
- Requirements scattered across different systems (Confluence, GitHub, Google Docs, spreadsheets)
- No easy way to reflect requirement changes back to central repository
- Difficulty tracking whether requirements have passing or failing tests
- Lack of centralized visibility into cross-team requirements
- Discovery of issues during development (like billboards being incorrectly identified as mailboxes) that require requirement updates

## Key Behaviors
- Store requirements in domain-specific systems
- Make requirement changes during development cycles
- Work within multi-organizational team structure using forked development model
- Focus on component-specific development and testing
- Discover and report requirement issues during implementation
- Utilize vSpirit Slack channel for Vehicle Software Platform support

## Representative Quotes
> [TBD - No direct quotes available in source assertions]

## Key Needs
- Centralized requirements tracking system
- Easy mechanism to update central repository with changes
- Visibility into requirement test status
- Better coordination with [[persona:Andrea Zotelli]] and product delivery teams
- Streamlined process for communicating requirement discoveries and changes

---

# Persona: Hannah Lane

## Role
Institutional Knowledge Keeper / Team Member

## Background
Hannah has been with the company for almost one year, providing valuable institutional knowledge about existing processes and systems. She represents a key perspective on the requirements documentation problem and has been identified as an important interview subject alongside [[persona:Julia Pralle]]. She is also a key stakeholder for Epic 1 who needs to be kept informed.

## Goals
- Share institutional knowledge with new team members
- Support process improvements based on historical context
- Provide perspective on current requirements management challenges

## Frustrations
- [TBD - Not specified in source assertions]

## Key Behaviors
- Provides institutional knowledge and historical context
- Participates in stakeholder interviews and validation sessions
- Supports team understanding of existing processes

## Representative Quotes
> [TBD - No direct quotes available in source assertions]

## Key Needs
- [TBD - Not specified in source assertions]

---

# Persona: Sanjiv Valsan

## Role
Requirements Workshop Participant / Stakeholder

## Background
Sanjiv participated in the product workshop and has good understanding of requirements processes. He has been identified as a key stakeholder who needs to be kept informed about Epic 1 progress and serves as an important perspective for user interviews.

## Goals
- Support requirements process improvements
- Provide workshop insights and requirements understanding
- Stay informed on Epic 1 progress

## Frustrations
- [TBD - Not specified in source assertions]

## Key Behaviors
- Participates in product workshops
- Provides requirements process insights
- Serves as stakeholder for requirements initiatives

## Representative Quotes
> [TBD - No direct quotes available in source assertions]

## Key Needs
- [TBD - Not specified in source assertions]

## Source Assertions

- [[andrea-provided-a-concept-map-and-table-that-shows]]
- [[andrea-started-in-october-2024-and-is-dealing-with-a]]
- [[andrea-zotelli-joined-woven-by-toyota-at-the-end-of-october]]
- [[andreas-primary-pain-point-is-lack-of-consolidated]]
- [[component-level-requirements-are-being-written-from-zero]]
- [[dan-needs-to-develop-a-better-mental-model-of-the-toyota]]
- [[each-development-team-perception-braking-etc-stores-their]]
- [[gus-schissler-and-dan-maser-are-working-together-on-a]]
- [[julia-pralle-is-leading-a-release-tools-project-focused-on]]
- [[key-stakeholders-for-user-interviews-include-julia-pralle]]
- [[key-team-members-include-hannah-almost-one-year-at-company]]
- [[multiple-organizations-participate-in-the-autonomous]]
- [[nate-is-joining-the-team-but-is-currently-going-through]]
- [[product-delivery-pd-is-a-separate-organization-from-product]]
- [[product-delivery-team-members-like-andrea-may-be-manually]]
- [[requirements-from-toyota-motor-corporation-in-japan-must-be]]
- [[team-members-include-dan-nate-papis-and-gus-with-julia]]
- [[the-autonomous-vehicle-project-involves-multiple-companies]]
- [[the-product-delivery-team-needs-to-understand-what]]
- [[the-team-currently-struggles-with-messy-version-control]]
- [[the-team-needs-to-understand-who-the-major-players-are-that]]
- [[the-team-plans-to-interview-julia-and-hannah-to-understand]]
- [[when-teams-change-requirements-during-development-like]]
- [[global-process-engineering-gpe-is-the-organization]]
- [[a2-2203-leads-a-systems-workshop-wrap-up-session-on-2026-02]]
- [[andrea-zotelli-is-the-primary-stakeholder-contact-for-epic]]
- [[the-team-lacks-precise-understanding-of-current-ip]]
- [[epic-1-will-establish-complete-traceability-overview-for]]
- [[the-team-expects-hundreds-of-contributors-working]]
- [[the-vspirit-slack-channel-serves-as-the-primary-support]]
- [[a2-2203-arastradero-2-led-a-systems-workshop-wrap-up]]
- [[the-team-expects-hundreds-of-contributors-working-2]]
- [[this-work-will-enable-the-team-to-establish-complete]]
- [[andrea-zotelli-is-the-key-contact-person-for-epic-1]]
- [[the-team-needs-precise-understanding-of-current-ip]]
- [[the-tech-guild-team-is-expected-to-provide-the-planned]]
- [[current-architecture-documentation-is-not-yet-planned]]
- [[key-stakeholders-include-julia-pralle-andrea-zotelli-hannah]]

## Elements

### persona: Andrea Zotelli

- **id**: el-C539AyonLvFw
- **artifactId**: art-2LQY-tnmh_kg
- **layer**: people
- **lenses**: [delivery, usability, feasibility]
- **linkedAssertionIds**: [a-js5kHbzgvkPX, a-xd3-fYPcUJB5, a-6GsrPNtnRnUO, a-MkNwMIIuU_dT, a-97grcGyAAGg8, a-mM7cIAebLwKN, a-zmzVR2U_rGI-, a-3FCJaWHdsZqE, a-_q690lnxZ00n, a-1woHlF6RZkfd, a-hEHMCtCFCV4B, a-mXl_1695Snlx, a-6A_UWsUp1Dln, a-FFVOVWoLo7kM, a-KiksxWO-ncLB, a-KgFzRtIQBH9g, a-esU7F4KSgAhB, a-f_7pY55MgdAE, a-rFKY-obri_0S, a--KXl4xNivbjn, a-zPMGTOXbASKT, a-jTqYtllz3A-e, a-tDlwsNG4U0Eu, a-W4i3sHVxOAxS, a-R5eMON5HZh6x, a-yCTTnbhMKXI_, a-j7G8CVRx8m5G, a-rAnhCATdVsTc, a-dw31QDN3TDQs, a-PRBaUfgTlpGL, a-k3k1imvvGWHf, a-ziHEJpdidowu, a-q7CAorMLefXj, a-W0gxv5Yg2s9m, a-RLMRXELRNAdp, a-0LvXQiqwaJ_8, a-XWMaxGVa5GfB]
- **tags**: []
- **status**: draft
- **createdAt**: 2026-02-27T20:03:13.386Z
- **updatedAt**: 2026-02-27T20:03:13.386Z
- **createdBy**: llm
- **name**: Andrea Zotelli
- **role**: Requirements Engineer / Product Delivery Team Member
- **background**: Andrea joined Woven by Toyota at the end of October 2024, working primarily on writing requirements and setting up structure in JAMA for systems verification and validation. She's dealing with a massive backlog of undocumented requirements for self-driving car software components and is writing component-level requirements from zero using scattered sources. She works within a complex multi-organizational structure involving Woven, Denso, and other companies in Toyota's 'one team' approach and serves as the primary stakeholder contact for Epic 1.
- **goals**: [Set up proper structure in JAMA for systems verification and validation, Write comprehensive component-level requirements from scattered sources, Create consolidated documentation for autonomous vehicle software components, Establish complete traceability overview for all incoming requirements, Navigate requirements from Toyota Motor Corporation that require rewriting due to language and structural differences, Serve as critical communication tool with customer TMC for requirements status]
- **frustrations**: [Lack of consolidated information sources requiring constant searching through scattered documents, Having to browse through multiple systems (Git repositories, spreadsheets, slides) manually, No existing component requirements to build upon - starting from zero, Navigating through spreadsheets with multiple links and fragmented information, Requirements must be rewritten rather than translated due to language and module structure differences from Toyota Motor Corporation, Lack of precise understanding of current IP architecture documentation, blocking ability to write lower-level requirements (SCRDs)]
- **behaviors**: [Manually compiles information from various sources into JAMA, Searches through scattered documents, slides, scenarios, and spreadsheets, Rewrites requirements rather than translating due to language and structural differences, Browses Git repositories to gather technical information, Creates concept maps and tables to organize team roles and processes (PDM, PD, CA, TMC), Participates in systems workshop sessions and stakeholder coordination, Provides JAMA structure guidance to team members]
- **quotes**: [Lack of consolidated information sources, requiring constant searching through scattered documents and spreadsheets with multiple links.]
- **needs**: [Consolidated view of all requirements across development teams, Automated tools to reduce manual compilation effort, Better visibility into requirement changes from development teams, Streamlined process for gathering requirements into JAMA, Precise understanding of current and planned future IP architecture versions, Complete traceability overview for all incoming requirements, Elimination of pain points in requirements version control and change management]

### persona: Julia Pralle

- **id**: el-8HV5G1m4V6vQ
- **artifactId**: art-2LQY-tnmh_kg
- **layer**: people
- **lenses**: [delivery, usability, feasibility]
- **linkedAssertionIds**: [a-js5kHbzgvkPX, a-6GsrPNtnRnUO, a-MkNwMIIuU_dT, a-97grcGyAAGg8, a-mM7cIAebLwKN, a-zmzVR2U_rGI-, a-_q690lnxZ00n, a-1woHlF6RZkfd, a-hEHMCtCFCV4B, a-mXl_1695Snlx, a-OwG8cRb_rVBp, a-6A_UWsUp1Dln, a-FFVOVWoLo7kM, a-KgFzRtIQBH9g, a-esU7F4KSgAhB, a-f_7pY55MgdAE, a-rFKY-obri_0S, a--KXl4xNivbjn, a-zPMGTOXbASKT, a-jTqYtllz3A-e, a-tDlwsNG4U0Eu, a-W4i3sHVxOAxS, a-R5eMON5HZh6x, a-yCTTnbhMKXI_, a-j7G8CVRx8m5G, a-rAnhCATdVsTc, a-dw31QDN3TDQs, a-PRBaUfgTlpGL, a-k3k1imvvGWHf, a-ziHEJpdidowu, a-q7CAorMLefXj, a-W0gxv5Yg2s9m, a-RLMRXELRNAdp, a-XWMaxGVa5GfB]
- **tags**: []
- **status**: draft
- **createdAt**: 2026-02-27T20:03:13.386Z
- **updatedAt**: 2026-02-27T20:03:13.386Z
- **createdBy**: llm
- **name**: Julia Pralle
- **role**: Release Tools Project Lead
- **background**: Julia is leading a release tools project focused on generating dynamic tools for getting requirements into JAMA. Her primary goal is solving version control problems in requirements management, and she serves as a key stakeholder providing project documentation and coordinating team efforts. She has been identified as a critical interview subject to understand different perspectives on the requirements documentation problem and is a key stakeholder for Epic 1.
- **goals**: [Solve version control problems in requirements management, Generate dynamic tools for requirements intake into JAMA, Establish proper groundwork understanding through user interviews, Coordinate project documentation and team alignment, Ensure teams work with the correct requirement versions]
- **frustrations**: [Messy version control when managing requirements from multiple sources, Manual tracking through access sheets and approval processes, Difficulty ensuring teams work with the correct requirement versions, Lack of automated solutions for requirements management]
- **behaviors**: [Leads project planning and stakeholder coordination, Provides documentation and context to team members, Participates in user interviews and validation sessions, Focuses on process improvement and tool development, Manages approval processes and version tracking, Participates in systems workshop sessions]
- **quotes**: [[TBD - No direct quotes available in source assertions]]
- **needs**: [Automated version control for requirements management, Dynamic tools for JAMA integration, Clear stakeholder alignment and understanding, Reduced manual tracking and approval overhead, Better coordination across multi-organizational teams]

### persona: Development Team Member

- **id**: el-8xSOBFgpcvfC
- **artifactId**: art-2LQY-tnmh_kg
- **layer**: people
- **lenses**: [delivery, usability, feasibility]
- **linkedAssertionIds**: [a-js5kHbzgvkPX, a-xd3-fYPcUJB5, a-6GsrPNtnRnUO, a-MkNwMIIuU_dT, a-97grcGyAAGg8, a-mM7cIAebLwKN, a-zmzVR2U_rGI-, a-1woHlF6RZkfd, a-hEHMCtCFCV4B, a-mXl_1695Snlx, a-6A_UWsUp1Dln, a-FFVOVWoLo7kM, a-KiksxWO-ncLB, a-KgFzRtIQBH9g, a-esU7F4KSgAhB, a-f_7pY55MgdAE, a-rFKY-obri_0S, a--KXl4xNivbjn, a-zPMGTOXbASKT, a-jTqYtllz3A-e, a-W4i3sHVxOAxS, a-R5eMON5HZh6x, a-yCTTnbhMKXI_, a-j7G8CVRx8m5G, a-rAnhCATdVsTc, a-dw31QDN3TDQs, a-PRBaUfgTlpGL, a-k3k1imvvGWHf, a-ziHEJpdidowu, a-q7CAorMLefXj, a-W0gxv5Yg2s9m, a-RLMRXELRNAdp, a-XWMaxGVa5GfB]
- **tags**: []
- **status**: draft
- **createdAt**: 2026-02-27T20:03:13.386Z
- **updatedAt**: 2026-02-27T20:03:13.386Z
- **createdBy**: llm
- **name**: Development Team Member
- **role**: Software Developer (Perception, Braking, Lane Change, etc.)
- **background**: Development team members work on specific autonomous vehicle components like perception, braking systems, and lane change functionality. They store requirements in various systems and make changes during development that need to be reflected back to central repositories. They operate within a complex multi-organizational structure involving multiple companies working as 'one team', with hundreds of contributors expected to work simultaneously across many years using GitHub's forked development model.
- **goals**: [Develop and test autonomous vehicle software components, Maintain accurate requirements for their specific domain, Communicate requirement changes effectively to product delivery teams, Ensure their requirements have proper test coverage]
- **frustrations**: [Requirements scattered across different systems (Confluence, GitHub, Google Docs, spreadsheets), No easy way to reflect requirement changes back to central repository, Difficulty tracking whether requirements have passing or failing tests, Lack of centralized visibility into cross-team requirements, Discovery of issues during development (like billboards being incorrectly identified as mailboxes) that require requirement updates]
- **behaviors**: [Store requirements in domain-specific systems, Make requirement changes during development cycles, Work within multi-organizational team structure using forked development model, Focus on component-specific development and testing, Discover and report requirement issues during implementation, Utilize vSpirit Slack channel for Vehicle Software Platform support]
- **quotes**: [[TBD - No direct quotes available in source assertions]]
- **needs**: [Centralized requirements tracking system, Easy mechanism to update central repository with changes, Visibility into requirement test status, Better coordination with [[persona:Andrea Zotelli]] and product delivery teams, Streamlined process for communicating requirement discoveries and changes]

### persona: Hannah Lane

- **id**: el-bdiX4mGWa1LA
- **artifactId**: art-2LQY-tnmh_kg
- **layer**: people
- **lenses**: [delivery, usability, feasibility]
- **linkedAssertionIds**: [a-js5kHbzgvkPX, a-6GsrPNtnRnUO, a-mM7cIAebLwKN, a-zmzVR2U_rGI-, a-_q690lnxZ00n, a-1woHlF6RZkfd, a-hEHMCtCFCV4B, a-OwG8cRb_rVBp, a-6A_UWsUp1Dln, a-FFVOVWoLo7kM, a-KgFzRtIQBH9g, a-f_7pY55MgdAE, a-rFKY-obri_0S, a--KXl4xNivbjn, a-zPMGTOXbASKT, a-jTqYtllz3A-e, a-W4i3sHVxOAxS, a-R5eMON5HZh6x, a-yCTTnbhMKXI_, a-j7G8CVRx8m5G, a-PRBaUfgTlpGL, a-ziHEJpdidowu, a-q7CAorMLefXj, a-W0gxv5Yg2s9m, a-XWMaxGVa5GfB]
- **tags**: []
- **status**: draft
- **createdAt**: 2026-02-27T20:03:13.386Z
- **updatedAt**: 2026-02-27T20:03:13.386Z
- **createdBy**: llm
- **name**: Hannah Lane
- **role**: Institutional Knowledge Keeper / Team Member
- **background**: Hannah has been with the company for almost one year, providing valuable institutional knowledge about existing processes and systems. She represents a key perspective on the requirements documentation problem and has been identified as an important interview subject alongside [[persona:Julia Pralle]]. She is also a key stakeholder for Epic 1 who needs to be kept informed.
- **goals**: [Share institutional knowledge with new team members, Support process improvements based on historical context, Provide perspective on current requirements management challenges]
- **frustrations**: [[TBD - Not specified in source assertions]]
- **behaviors**: [Provides institutional knowledge and historical context, Participates in stakeholder interviews and validation sessions, Supports team understanding of existing processes]
- **quotes**: [[TBD - No direct quotes available in source assertions]]
- **needs**: [[TBD - Not specified in source assertions]]

### persona: Sanjiv Valsan

- **id**: el-em113xT_-vqm
- **artifactId**: art-2LQY-tnmh_kg
- **layer**: people
- **lenses**: [delivery, usability, feasibility]
- **linkedAssertionIds**: [a-mM7cIAebLwKN, a-1woHlF6RZkfd, a-f_7pY55MgdAE, a-rFKY-obri_0S, a--KXl4xNivbjn, a-jTqYtllz3A-e, a-R5eMON5HZh6x, a-yCTTnbhMKXI_, a-j7G8CVRx8m5G, a-q7CAorMLefXj, a-W0gxv5Yg2s9m, a-XWMaxGVa5GfB]
- **tags**: []
- **status**: draft
- **createdAt**: 2026-02-27T20:03:13.386Z
- **updatedAt**: 2026-02-27T20:03:13.386Z
- **createdBy**: llm
- **name**: Sanjiv Valsan
- **role**: Requirements Workshop Participant / Stakeholder
- **background**: Sanjiv participated in the product workshop and has good understanding of requirements processes. He has been identified as a key stakeholder who needs to be kept informed about Epic 1 progress and serves as an important perspective for user interviews.
- **goals**: [Support requirements process improvements, Provide workshop insights and requirements understanding, Stay informed on Epic 1 progress]
- **frustrations**: [[TBD - Not specified in source assertions]]
- **behaviors**: [Participates in product workshops, Provides requirements process insights, Serves as stakeholder for requirements initiatives]
- **quotes**: [[TBD - No direct quotes available in source assertions]]
- **needs**: [[TBD - Not specified in source assertions]]


## Element Pages

- [[personas/andrea-zotelli|persona: Andrea Zotelli]]
- [[personas/julia-pralle|persona: Julia Pralle]]
- [[personas/development-team-member|persona: Development Team Member]]
- [[personas/hannah-lane|persona: Hannah Lane]]
- [[personas/sanjiv-valsan|persona: Sanjiv Valsan]]
