# Atomic Object Project Details 

# SOW

10\. Systems Engineering Tooling Support  
Purpose:  
Ensure the team can generate consistent and sufficient architectural, requirement, and test artifacts based on existing code & other team documentation  
Typical Inputs:

* Code PRs  
* Docs on GIT  
* Google docs  
* Existing JAMA requirements  
* Other sources of information (e.g., Confluence)

Key Outputs:

* New requirements generated from source at various levels of abstraction. Potential integration w/Jama.   
* Architectural elements that are maintained or suggested by agents (SV\&V team in the loop)   
* Test coverage and test gaps. (maybe)

Effort: 

* Exploratory in nature (pilot) in Q4 into Q1  
* Identify low hanging fruit for a set of agents that can comb inputs and provide better systems engineering support for real-time creation of architectural elements (systems arch., software arch.) as well as requirements and eventual conflict identification.

\<Epics/Tasks\>

1. A dynamic process/tool that takes the above inputs and generate requirements in JAMA that updates dynamically, provides version control and traceability.  
2. Build an architecture diagram from the current codebase (IP stack) that updates dynamically, provides version control and traceability.  
3. Capture traceability between tests and requirements (input from 1\) (maybe)

Stretch goal:

4. Show traceability vs Architecture or identify the gaps (from 2\)

\<DOD\>  
	Phase 1:   
		Provide a mockup that shows capability of generating requirements and architecture (from 1 and 2\)  
	  
	Phase 2:   
		Scale up and automate to address all sources mentioned above and make it CLI ready for future expansion:

* Code PRs  
  * Docs on GIT  
    * Google docs  
    * Existing JAMA requirements  
    * Other sources of information (e.g., Confluence)

Phase 3: (maybe)  
		Similar to phase 1 but for tests 

# Epic 1: A dynamic process/tool that takes the above inputs and generates requirements in JAMA that updates dynamically, provides version control and traceability.

Impact:  
This essential work will be a major step forward, enabling my team to finally establish a complete and comprehensive traceability overview for all incoming requirements related. It is a critical puzzle piece for effectively communicating the requirements status to our customer (TMC).  
By consolidating all requirements into a single source of truth, while maintaining dynamic connections to their original sources to ensure they remain current, we can eliminate major pain points in requirements version control and change management. This initiative positions us strongly for managing future requirements effectively.

What:

* Use one type of input (doc, sheet, etc) to add list of requirements with links to different sources  
  * Table in the new PRD document would be ideal [\[WIP\]FY25Q4 Quarterly Product Release Scope - Autonomy](https://docs.google.com/document/d/1qh1Kq4TNWyi2V-H-Akk7z-V-sEc3zOESd_f4lp8oVzI/edit?tab=t.0#heading=h.kbtms7g1imsq)  
  * Needs to be robust to changes in the document[\[WIP\]FY25Q4 Quarterly Product Release Scope \- Autonomy](https://docs.google.com/document/d/1qh1Kq4TNWyi2V-H-Akk7z-V-sEc3zOESd_f4lp8oVzI/edit?tab=t.0#heading=h.kbtms7g1imsq)  
* Create JAMA entries documenting the requirements   
* Create the linkage to the original requirements source and the JAMA item in order to handle change management (detection)  
  * Changes in the original requirements should be  
    * Notify the creator  
    * Be visible in JAMA  
    * Update the JAMA item with the changes dynamically (Stretch goal)

Details and notes:

* Please work with [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global)  
* We also just learned that the JP team wants to use [Reqtify](https://www.3ds.com/products/catia/reqtify) \- could this be the solution already?  
* Different kind of requirements sources:  
  * All SWRDs (old version \- under revision): [\[BEV Step3\]\_AD/ADAS\_IP\_SWRD\_\[WU/BH\]\>\>\[All\]\_Requirement Analysis Report](https://docs.google.com/spreadsheets/d/1p4WxltJvo-u3PqxDgQJI_SeusjTTe4CVXcTkgFcpTv8/edit?gid=1918861150#gid=1918861150)  
    * Git repositiry: [https://bev.dev.req.tmd.w3n.io/tmd-requirement-doc/tag/lk.v1.1.0/docs/LK/SWRD/](https://bev.dev.req.tmd.w3n.io/tmd-requirement-doc/tag/lk.v1.1.0/docs/LK/SWRD/)  
    * JAMA example for 360deg Perception: [https://stargate.jamacloud.com/perspective.req?continue\#/containers/12493943?projectId=122](https://stargate.jamacloud.com/perspective.req?continue#/containers/12493943?projectId=122)  
  * SBRD  
    * [\[Working\] Internal Product Requirement IPR SBRD 0.4](https://docs.google.com/document/d/146mv1Dw-FP1TG9fInMJ6-7xH34kYJ1YmC0EZcGPOrfc/edit?tab=t.17y6yu4ampj)  
    * [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global)we need to provide some more guidance on the JAMA structure  
* All the requirements should be added to our IP JAMA project  
* Who get to know:  
  * [Julia Pralle](mailto:julia.pralle@woven-planet.global)  
  * [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global)  
  * [Hannah Lane](mailto:hannah.lane@woven-planet.global)  
  * [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global)  
* Workshop with Product around requirements  
  * Wrap up session recording: [\[Placeholder\] PdM \<\> Systems Workshop - Wrap Up - 2026/02/05 14:28 PST - Recording](https://drive.google.com/file/d/1odAoCnpU8mNBBdscHuUHTj4gi3VkKcVo/view)   
  * Wrap up session Transcript [\[Placeholder\] PdM \<\> Systems Workshop - Wrap Up - 2026/02/05 14:28 PST - Transcript](https://docs.google.com/document/d/1o-gRqN_asTynfb4VARNfmh9XUJjSGsoPAjFnyTxZsqs/edit?tab=t.0#heading=h.4nynuv4peav6)  
  * All Notes from the workshop (way more than you need, but wrap up session is also a tab in there)[PdM \<\> Systems Workshop Agenda / Notes](https://docs.google.com/document/d/1sDDE9HunHO-SBtE22N172Qm66JfJQtglftnohvoDZIE/edit?tab=t.wn4xbbr36zya#heading=h.2b7e22jgkd7d)

# Epic 2: Build an architecture diagram from the current codebase (IP stack) that updates dynamically, provides version control and traceability.

Impact:  
This work is critical because my team needs a precise understanding of two key elements to begin writing lower-level requirements (SCRDs):

1. The current IP architecture.  
2. The planned future IP architecture versions.

While the tech guild team is expected to provide the second point, the current architecture documentation (point 1\) is not yet planned. Clarifying the current architecture will significantly accelerate our ability to create SCRDs. Furthermore, this effort presents an opportunity to implement a dynamic architecture diagram. This diagram can be used to automatically identify and flag Pull Requests (PRs) that propose architectural changes, ensuring they are routed through the necessary change control process.

What:

* Take the current IP source code as the input to create a diagram   
* That diagram should adjust dynamically when changes to the architecture are made within the code base to ensure its correctness  
* Every time the diagram changes \- a new version should be created to ensure visibility of later versions

Details and notes:

* We had a tool a while ago \- [Julia Pralle](mailto:julia.pralle@woven-planet.global)to clarify with [Eric Keranen](mailto:eric.keranen@woven-planet.global)if that could be re-used  
* Then we could explore to adapt the old tool to work again or create a new solution Atomic Object Project Details: Systems Engineering Tooling Support