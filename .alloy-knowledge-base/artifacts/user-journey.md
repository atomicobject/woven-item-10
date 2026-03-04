---
id: art-QaR5JpKW1-YH
type: user-journey
title: User Journey
status: draft
layerScope: [solution, people, needs]
lensScope: [delivery, usability, feasibility, viability]
generatedAt: 2026-03-04T20:59:19.528Z
lastEditedAt: 2026-03-04T20:59:19.531Z
generationPromptId: pt-O70vgoVkkPLD
---

# User Journey: Requirements Documentation and Management

## Actor
[[persona:Andrea Zotelli]] - Systems Engineer in Product Delivery team

## Goal
Transform scattered, undocumented requirements from multiple sources into a structured, traceable requirements management system in JAMA for autonomous vehicle software components.

## Stages

### 1. Requirements Discovery & Collection
- **User Actions**: Searches through scattered documents, spreadsheets, slides, scenarios, and team-specific systems (Confluence, GitHub, Google Docs) to find existing requirements
- **Thoughts & Feelings**: "Where are all the requirements hiding? Each team stores things differently and I need to check everywhere."
- **Emotional State**: Frustrated — dealing with massive backlog and lack of consolidated information sources since starting in October 2024
- **Touchpoints**: Multiple systems including Confluence, GitHub, Google Docs, spreadsheets, slides, scenarios
- **Pain Points**: No consolidated information sources, constant searching through scattered documents with multiple links
- **Opportunities**: Create automated discovery tools that can scan multiple source systems and identify requirements-related content

### 2. Requirements Translation & Interpretation  
- **User Actions**: Manually rewrites requirements from Toyota Motor Corporation that are poorly translated from Japanese, contain TBDs, and mix different requirement types
- **Thoughts & Feelings**: "These requirements from TMC don't make sense for our ML-based system. I need to interpret what they actually mean."
- **Emotional State**: Frustrated — requirements are copy-paste from previous versions and poorly suited for autonomous vehicle system
- **Touchpoints**: User Requirements Documents (URDs) from TMC, translation tools, internal documentation
- **Pain Points**: Requirements cannot be directly implemented by developers without significant translation and interpretation
- **Opportunities**: Implement LLM-assisted translation and interpretation tools, create templates for consistent requirement structure

### 3. Requirements Documentation in JAMA
- **User Actions**: Manually enters interpreted requirements into JAMA hierarchical structure, creates component-level requirements from zero using scattered sources
- **Thoughts & Feelings**: "I need to make sure this follows the right structure and can be traced back to original sources."
- **Emotional State**: Neutral to Positive — working in preferred system but still manual process
- **Touchpoints**: JAMA requirements management system, original source documents
- **Pain Points**: Manual entry process, difficulty maintaining traceability to original sources
- **Opportunities**: Automate requirements generation in JAMA with dynamic updates and version control

### 4. Version Control & Change Management
- **User Actions**: Manually tracks changes through access sheets and approval processes, tries to detect when original sources have changed
- **Thoughts & Feelings**: "Did someone change the original requirement? How do I know if I'm working with the right version?"
- **Emotional State**: Frustrated — messy version control when managing requirements from multiple sources
- **Touchpoints**: Access sheets, approval processes, multiple source systems
- **Pain Points**: No automatic notification when source requirements change, manual tracking of versions
- **Opportunities**: Implement change detection and notification system, automatic version updates in JAMA

### 5. Traceability & Reporting
- **User Actions**: Manually creates traceability reports for TMC showing requirement status and test coverage, struggles to demonstrate complete oversight
- **Thoughts & Feelings**: "I need to show TMC that we have complete traceability, but it's hard to prove with our current manual process."
- **Emotional State**: Stressed — responsible for delivering pass rates and traceability reports but lacks mechanisms to show intake problems
- **Touchpoints**: JAMA reporting features, TMC communication channels, internal stakeholder meetings
- **Pain Points**: Cannot easily show complete traceability overview, difficult to push back on poorly defined requirements
- **Opportunities**: Create automated traceability dashboard, establish single source of truth for requirements intake with change tracking

## Source Assertions

- [[a-capabilities-spreadsheet-exists-at-the-system-level-that]]
- [[a2-2203-arastradero-2-led-a-systems-workshop-wrap-up]]
- [[a2-2203-leads-a-systems-workshop-wrap-up-session-on-2026-02]]
- [[andrea-provided-a-concept-map-and-table-that-shows]]
- [[andrea-started-in-october-2024-and-is-dealing-with-a]]
- [[andrea-zotelli-is-the-key-contact-person-for-epic-1]]
- [[andrea-zotelli-is-the-primary-stakeholder-contact-for-epic]]
- [[andrea-zotelli-joined-woven-by-toyota-at-the-end-of-october]]
- [[andreas-primary-pain-point-is-lack-of-consolidated]]
- [[changes-in-original-requirements-should-notify-the-creator]]
- [[component-level-requirements-are-being-written-from-zero]]
- [[current-architecture-documentation-is-not-yet-planned]]
- [[dan-needs-to-develop-a-better-mental-model-of-the-toyota]]
- [[each-development-team-perception-braking-etc-stores-their]]
- [[epic-1-focuses-on-creating-a-dynamic-process-that-generates]]
- [[epic-1-focuses-on-creating-a-dynamic-process-tool-that]]
- [[epic-1-will-establish-complete-traceability-overview-for]]
- [[epic-2-aims-to-build-an-architecture-diagram-from-current]]
- [[epic-2-requires-building-an-architecture-diagram-from-the]]
- [[global-process-engineering-gpe-is-the-organization]]
- [[gus-schissler-and-dan-maser-are-working-together-on-a]]
- [[jama-is-the-desired-central-repository-for-requirements]]
- [[julia-pralle-is-leading-a-release-tools-project-focused-on]]
- [[key-stakeholders-for-user-interviews-include-julia-pralle]]
- [[key-stakeholders-include-julia-pralle-andrea-zotelli-hannah]]
- [[key-team-members-include-hannah-almost-one-year-at-company]]
- [[multiple-organizations-participate-in-the-autonomous]]
- [[nate-is-joining-the-team-but-is-currently-going-through]]
- [[product-delivery-pd-is-a-separate-organization-from-product]]
- [[product-delivery-team-members-like-andrea-may-be-manually]]
- [[product-team-is-considering-using-a-tool-called-rectify]]
- [[requirements-from-toyota-motor-corporation-in-japan-must-be]]
- [[sbrd-is-used-to-capture-higher-level-behavioral]]
- [[team-members-include-dan-nate-papis-and-gus-with-julia]]
- [[the-arene-platform-team-primarily-based-in-japan-already]]
- [[the-autonomous-vehicle-project-involves-multiple-companies]]
- [[the-autonomous-vehicle-system-includes-specific]]
- [[the-dynamic-architecture-diagram-can-automatically-identify]]
- [[the-jp-team-wants-to-use-reqtify-as-a-potential-solution]]
- [[the-minimum-requirement-for-the-tool-is-to-detect-when]]
- [[the-product-being-built-is-specifically-something-that]]
- [[the-product-delivery-team-needs-to-understand-what]]
- [[the-project-aims-to-automate-the-manual-changelog]]
- [[the-project-involves-scenario-based-requirements]]
- [[the-project-will-generate-new-requirements-at-various]]
- [[the-systems-engineering-tooling-support-project-aims-to]]
- [[the-team-agreed-that-scope-od-operating-domain-for-each]]
- [[the-team-currently-struggles-with-messy-version-control]]
- [[the-team-expects-hundreds-of-contributors-working-2]]
- [[the-team-expects-hundreds-of-contributors-working]]
- [[the-team-is-building-proofs-and-controls-that-the]]
- [[the-team-is-working-on-toyotas-gate-system-for-integration]]
- [[the-team-is-working-on-validation-and-information]]
- [[the-team-lacks-precise-understanding-of-current-ip]]
- [[the-team-needs-precise-understanding-of-current-ip]]
- [[the-team-needs-to-understand-who-the-major-players-are-that]]
- [[the-team-plans-to-interview-julia-and-hannah-to-understand]]
- [[the-tech-guild-team-is-expected-to-provide-the-planned]]
- [[the-vspirit-slack-channel-serves-as-the-primary-support]]
- [[this-work-will-enable-the-team-to-establish-complete]]
- [[when-teams-change-requirements-during-development-like]]
- [[hannah-lane-is-a-systems-validation-engineer-at-woven]]
- [[requirements-from-toyota-are-often-poorly-translated-from]]
- [[hannah-uses-llms-specifically-gemini-through-wovi-to]]
- [[hannah-identified-key-tooling-needs-including-automated]]
- [[hannah-was-interviewed-and-provided-candid-feedback-about]]
- [[the-team-identified-that-much-of-hannahs-current-process]]
- [[lane-change-functionality-contains-600-requirements-and-was]]
- [[nathan-proposed-implementing-webhooks-into-git-to-detect]]
- [[product-delivery-is-a-new-organizational-layer-that-has]]
- [[the-tech-guild-team-including-brian-hampton-and-philip-is]]
- [[the-current-internal-product-codebase-referred-to-as-ipa]]
- [[eric-from-platform-team-and-brian-hampton-are-identified-as]]
- [[woven-receives-user-requirements-documents-urds-from-toyota]]
- [[product-delivery-team-serves-as-a-bridge-between-customer]]
- [[the-biggest-pain-point-for-product-delivery-is-the-intake]]
- [[product-delivery-is-responsible-for-delivering-overall-pass]]
- [[the-primary-goal-of-item-10-is-to-create-a-single-source-of]]
- [[the-team-discovered-that-the-problem-they-originally-told]]
- [[julia-has-demonstrated-good-understanding-of-prioritization]]
- [[the-team-will-build-tooling-to-make-requirements-extraction]]
- [[currently-each-person-has-their-own-style-of-looking]]
- [[the-solution-will-focus-on-gathering-requirements-from]]
- [[julia-mentioned-working-for-a-week-trying-to-extract]]
- [[andrea-referenced-hannah-twice-as-someone-with-more]]
- [[the-team-needs-clarification-from-andrea-on-what-filled-out]]
- [[dan-created-a-user-mapping-placing-senior-systems-engineers]]
- [[component-requirements-creation-is-identified-as-the-key]]
- [[the-system-can-automatically-generate-product-briefs]]
- [[there-is-uncertainty-about-jama-terminology-usage]]

## Elements

### journey-stage: Requirements Discovery & Collection

- **id**: el-8rBBOeLUXsxI
- **artifactId**: art-QaR5JpKW1-YH
- **layer**: solution
- **lenses**: [delivery, usability, feasibility, viability]
- **linkedAssertionIds**: [a-PRBaUfgTlpGL, a-W4i3sHVxOAxS, a-js5kHbzgvkPX, a-xd3-fYPcUJB5, a-q7CAorMLefXj, a-R5eMON5HZh6x, a-6GsrPNtnRnUO, a-MkNwMIIuU_dT, a-EnhFpcbYi-bD, a-97grcGyAAGg8, a-zmzVR2U_rGI-, a-j1qCqk_cGwC2, a-cmRGMV5f9HXZ, a-87BPachmHImB, a-_q690lnxZ00n, a-1woHlF6RZkfd, a-XWMaxGVa5GfB, a-hEHMCtCFCV4B, a-mXl_1695Snlx, a-6A_UWsUp1Dln, a-FFVOVWoLo7kM, a-3UkiavaBb2uX, a-zxRxiM4uXwnF, a-KgFzRtIQBH9g, a-5oYdUmh80hyt, a-esU7F4KSgAhB, a-XvLndUoL3unh, a-dbZUTKsQZ23x, a-s-93Xihkzqu0, a-f_7pY55MgdAE, a-K7TOZmLifYBK, a-oQw7X8K8uMSE, a-rFKY-obri_0S, a-t_lITxlEnKGf, a-yCTTnbhMKXI_, a-W0gxv5Yg2s9m, a--KXl4xNivbjn, a-zPMGTOXbASKT, a-dw31QDN3TDQs, a-ziHEJpdidowu, a-jTqYtllz3A-e, a-N82enPMmp6PR, a-irtGGDsD9pry, a-pvUpn_0lnov1, a-KJCQpzqHiySr, a-FxvJsT2p-MEI, a-ogskz6Pqyo7Q, a-fyrq9qeXA4-4, a-BwKhbe-O_lgF, a-Bjse1HEYkGO8, a-1SUFDG7i60hx, a-8bCNW7nbnNX_, a-PAEKIsrX9MPj, a-A67nvSujixnX, a-6vF0p1yQA_n4, a-S9PmeCEX7Pvd, a-V8Phgcp3mh-r]
- **tags**: []
- **status**: draft
- **createdAt**: 2026-03-04T20:59:19.529Z
- **updatedAt**: 2026-03-04T20:59:19.529Z
- **createdBy**: llm
- **order**: 0
- **stageName**: Requirements Discovery & Collection
- **actor**: [[persona:Andrea Zotelli]] - Systems Engineer in Product Delivery team
- **goal**: Transform scattered, undocumented requirements from multiple sources into a structured, traceable requirements management system in JAMA for autonomous vehicle software components.
- **actions**: []
- **thoughts**: []
- **touchpoints**: []
- **painPoints**: []
- **opportunities**: []

### journey-stage: Requirements Translation & Interpretation

- **id**: el-R5wAMivXF6H4
- **artifactId**: art-QaR5JpKW1-YH
- **layer**: solution
- **lenses**: [delivery, usability, feasibility, viability]
- **linkedAssertionIds**: [a-PRBaUfgTlpGL, a-W4i3sHVxOAxS, a-js5kHbzgvkPX, a-xd3-fYPcUJB5, a-q7CAorMLefXj, a-R5eMON5HZh6x, a-6GsrPNtnRnUO, a-MkNwMIIuU_dT, a-EnhFpcbYi-bD, a-97grcGyAAGg8, a-zmzVR2U_rGI-, a-j1qCqk_cGwC2, a-cmRGMV5f9HXZ, a-87BPachmHImB, a-_q690lnxZ00n, a-1woHlF6RZkfd, a-XWMaxGVa5GfB, a-hEHMCtCFCV4B, a-mXl_1695Snlx, a-6A_UWsUp1Dln, a-FFVOVWoLo7kM, a-3UkiavaBb2uX, a-KiksxWO-ncLB, a-zxRxiM4uXwnF, a-KgFzRtIQBH9g, a-5oYdUmh80hyt, a-esU7F4KSgAhB, a-XvLndUoL3unh, a-dbZUTKsQZ23x, a-s-93Xihkzqu0, a-f_7pY55MgdAE, a-K7TOZmLifYBK, a-oQw7X8K8uMSE, a-rFKY-obri_0S, a-t_lITxlEnKGf, a-yCTTnbhMKXI_, a-W0gxv5Yg2s9m, a--KXl4xNivbjn, a-zPMGTOXbASKT, a-dw31QDN3TDQs, a-ziHEJpdidowu, a-jTqYtllz3A-e, a-N82enPMmp6PR, a-irtGGDsD9pry, a-pvUpn_0lnov1, a-KJCQpzqHiySr, a-FxvJsT2p-MEI, a-ogskz6Pqyo7Q, a-fyrq9qeXA4-4, a-BwKhbe-O_lgF, a-Bjse1HEYkGO8, a-1SUFDG7i60hx, a-8bCNW7nbnNX_, a-PAEKIsrX9MPj, a-A67nvSujixnX, a-6vF0p1yQA_n4, a-S9PmeCEX7Pvd, a-V8Phgcp3mh-r]
- **tags**: []
- **status**: draft
- **createdAt**: 2026-03-04T20:59:19.529Z
- **updatedAt**: 2026-03-04T20:59:19.529Z
- **createdBy**: llm
- **order**: 1
- **stageName**: Requirements Translation & Interpretation
- **actor**: [[persona:Andrea Zotelli]] - Systems Engineer in Product Delivery team
- **goal**: Transform scattered, undocumented requirements from multiple sources into a structured, traceable requirements management system in JAMA for autonomous vehicle software components.
- **actions**: []
- **thoughts**: []
- **touchpoints**: []
- **painPoints**: []
- **opportunities**: []

### journey-stage: Requirements Documentation in JAMA

- **id**: el-AOm2J_TJi--Z
- **artifactId**: art-QaR5JpKW1-YH
- **layer**: solution
- **lenses**: [delivery, usability, feasibility, viability]
- **linkedAssertionIds**: [a-yKGd9oAnpTff, a-PRBaUfgTlpGL, a-W4i3sHVxOAxS, a-js5kHbzgvkPX, a-xd3-fYPcUJB5, a-q7CAorMLefXj, a-R5eMON5HZh6x, a-6GsrPNtnRnUO, a-MkNwMIIuU_dT, a-EnhFpcbYi-bD, a-97grcGyAAGg8, a-zmzVR2U_rGI-, a-j1qCqk_cGwC2, a-cmRGMV5f9HXZ, a-87BPachmHImB, a-_q690lnxZ00n, a-1woHlF6RZkfd, a-XWMaxGVa5GfB, a-hEHMCtCFCV4B, a-mXl_1695Snlx, a-6A_UWsUp1Dln, a-FFVOVWoLo7kM, a-3UkiavaBb2uX, a-zxRxiM4uXwnF, a-KgFzRtIQBH9g, a-5oYdUmh80hyt, a-esU7F4KSgAhB, a-XvLndUoL3unh, a-dbZUTKsQZ23x, a-s-93Xihkzqu0, a-f_7pY55MgdAE, a-K7TOZmLifYBK, a-oQw7X8K8uMSE, a-rFKY-obri_0S, a-t_lITxlEnKGf, a-yCTTnbhMKXI_, a-W0gxv5Yg2s9m, a--KXl4xNivbjn, a-zPMGTOXbASKT, a-dw31QDN3TDQs, a-ziHEJpdidowu, a-jTqYtllz3A-e, a-N82enPMmp6PR, a-irtGGDsD9pry, a-pvUpn_0lnov1, a-KJCQpzqHiySr, a-FxvJsT2p-MEI, a-ogskz6Pqyo7Q, a-fyrq9qeXA4-4, a-BwKhbe-O_lgF, a-Bjse1HEYkGO8, a-1SUFDG7i60hx, a-8bCNW7nbnNX_, a-PAEKIsrX9MPj, a-A67nvSujixnX, a-6vF0p1yQA_n4, a-S9PmeCEX7Pvd, a-V8Phgcp3mh-r]
- **tags**: []
- **status**: draft
- **createdAt**: 2026-03-04T20:59:19.529Z
- **updatedAt**: 2026-03-04T20:59:19.529Z
- **createdBy**: llm
- **order**: 2
- **stageName**: Requirements Documentation in JAMA
- **actor**: [[persona:Andrea Zotelli]] - Systems Engineer in Product Delivery team
- **goal**: Transform scattered, undocumented requirements from multiple sources into a structured, traceable requirements management system in JAMA for autonomous vehicle software components.
- **actions**: []
- **thoughts**: []
- **touchpoints**: []
- **painPoints**: []
- **opportunities**: []

### journey-stage: Version Control & Change Management

- **id**: el-_-JwU2S7Z1H1
- **artifactId**: art-QaR5JpKW1-YH
- **layer**: solution
- **lenses**: [delivery, usability, feasibility, viability]
- **linkedAssertionIds**: [a-PRBaUfgTlpGL, a-W4i3sHVxOAxS, a-js5kHbzgvkPX, a-xd3-fYPcUJB5, a-q7CAorMLefXj, a-R5eMON5HZh6x, a-6GsrPNtnRnUO, a-MkNwMIIuU_dT, a-EnhFpcbYi-bD, a-97grcGyAAGg8, a-zmzVR2U_rGI-, a-j1qCqk_cGwC2, a-cmRGMV5f9HXZ, a-j7G8CVRx8m5G, a-IiKousAjOWHN, a-87BPachmHImB, a-_q690lnxZ00n, a-1woHlF6RZkfd, a-XWMaxGVa5GfB, a-hEHMCtCFCV4B, a-mXl_1695Snlx, a-6A_UWsUp1Dln, a-FFVOVWoLo7kM, a-3UkiavaBb2uX, a-zxRxiM4uXwnF, a-KgFzRtIQBH9g, a-5oYdUmh80hyt, a-esU7F4KSgAhB, a-XvLndUoL3unh, a-dbZUTKsQZ23x, a-s-93Xihkzqu0, a-f_7pY55MgdAE, a-K7TOZmLifYBK, a-oQw7X8K8uMSE, a-rFKY-obri_0S, a-t_lITxlEnKGf, a-yCTTnbhMKXI_, a-W0gxv5Yg2s9m, a--KXl4xNivbjn, a-zPMGTOXbASKT, a-dw31QDN3TDQs, a-ziHEJpdidowu, a-jTqYtllz3A-e, a-N82enPMmp6PR, a-irtGGDsD9pry, a-pvUpn_0lnov1, a-KJCQpzqHiySr, a-FxvJsT2p-MEI, a-ogskz6Pqyo7Q, a-fyrq9qeXA4-4, a-BwKhbe-O_lgF, a-Bjse1HEYkGO8, a-1SUFDG7i60hx, a-8bCNW7nbnNX_, a-PAEKIsrX9MPj, a-A67nvSujixnX, a-6vF0p1yQA_n4, a-S9PmeCEX7Pvd, a-V8Phgcp3mh-r]
- **tags**: []
- **status**: draft
- **createdAt**: 2026-03-04T20:59:19.529Z
- **updatedAt**: 2026-03-04T20:59:19.529Z
- **createdBy**: llm
- **order**: 3
- **stageName**: Version Control & Change Management
- **actor**: [[persona:Andrea Zotelli]] - Systems Engineer in Product Delivery team
- **goal**: Transform scattered, undocumented requirements from multiple sources into a structured, traceable requirements management system in JAMA for autonomous vehicle software components.
- **actions**: []
- **thoughts**: []
- **touchpoints**: []
- **painPoints**: []
- **opportunities**: []

### journey-stage: Traceability & Reporting

- **id**: el-7SqAloSSGhqK
- **artifactId**: art-QaR5JpKW1-YH
- **layer**: solution
- **lenses**: [delivery, usability, feasibility, viability]
- **linkedAssertionIds**: [a-PRBaUfgTlpGL, a-W4i3sHVxOAxS, a-js5kHbzgvkPX, a-xd3-fYPcUJB5, a-q7CAorMLefXj, a-R5eMON5HZh6x, a-6GsrPNtnRnUO, a-MkNwMIIuU_dT, a-EnhFpcbYi-bD, a-97grcGyAAGg8, a-zmzVR2U_rGI-, a-j1qCqk_cGwC2, a-cmRGMV5f9HXZ, a-j7G8CVRx8m5G, a-87BPachmHImB, a-_q690lnxZ00n, a-1woHlF6RZkfd, a-XWMaxGVa5GfB, a-hEHMCtCFCV4B, a-mXl_1695Snlx, a-6A_UWsUp1Dln, a-FFVOVWoLo7kM, a-3UkiavaBb2uX, a-zxRxiM4uXwnF, a-KgFzRtIQBH9g, a-5oYdUmh80hyt, a-esU7F4KSgAhB, a-XvLndUoL3unh, a-dbZUTKsQZ23x, a-s-93Xihkzqu0, a-f_7pY55MgdAE, a-K7TOZmLifYBK, a-oQw7X8K8uMSE, a-rFKY-obri_0S, a-t_lITxlEnKGf, a-yCTTnbhMKXI_, a-W0gxv5Yg2s9m, a--KXl4xNivbjn, a-zPMGTOXbASKT, a-dw31QDN3TDQs, a-ziHEJpdidowu, a-jTqYtllz3A-e, a-N82enPMmp6PR, a-irtGGDsD9pry, a-pvUpn_0lnov1, a-KJCQpzqHiySr, a-FxvJsT2p-MEI, a-ogskz6Pqyo7Q, a-fyrq9qeXA4-4, a-BwKhbe-O_lgF, a-Bjse1HEYkGO8, a-1SUFDG7i60hx, a-8bCNW7nbnNX_, a-PAEKIsrX9MPj, a-A67nvSujixnX, a-6vF0p1yQA_n4, a-S9PmeCEX7Pvd, a-V8Phgcp3mh-r]
- **tags**: []
- **status**: draft
- **createdAt**: 2026-03-04T20:59:19.529Z
- **updatedAt**: 2026-03-04T20:59:19.529Z
- **createdBy**: llm
- **order**: 4
- **stageName**: Traceability & Reporting
- **actor**: [[persona:Andrea Zotelli]] - Systems Engineer in Product Delivery team
- **goal**: Transform scattered, undocumented requirements from multiple sources into a structured, traceable requirements management system in JAMA for autonomous vehicle software components.
- **actions**: []
- **thoughts**: []
- **touchpoints**: []
- **painPoints**: []
- **opportunities**: []


## Element Pages

- [[user-journey/requirements-discovery-collection|journey-stage: Requirements Discovery & Collection]]
- [[user-journey/requirements-translation-interpretation|journey-stage: Requirements Translation & Interpretation]]
- [[user-journey/requirements-documentation-in-jama|journey-stage: Requirements Documentation in JAMA]]
- [[user-journey/version-control-change-management|journey-stage: Version Control & Change Management]]
- [[user-journey/traceability-reporting|journey-stage: Traceability & Reporting]]
