# 1\. Introductions

## Feb 2, 2026 | [\[Placeholder\] PdM \<\> Systems Workshop - Introductions](https://www.google.com/calendar/event?eid=MHNpcDVtcWtwMjJlcG05dWhzc3E2cjQzMmwgbmljaG9sYXMuY2FyY2lvbmVAd292ZW4tcGxhbmV0Lmdsb2JhbA)

Attendees: [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) [Mahesh Sarode](mailto:mahesh.sarode@woven-planet.global) [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) [Julia Pralle](mailto:julia.pralle@woven-planet.global) [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) [Wei Wei](mailto:wei.wei@woven-planet.global) [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) [Hannah Lane](mailto:hannah.lane@woven-planet.global) [Ryo Masutani](mailto:ryo.masutani@woven-planet.global)

Agenda

* Introductions between PdM and SV\&V members  
* Review agenda and goals for the workshop

Notes

* Capability groups will be called / captured in initiatives in FY26  
* What would success look like?  
  * One fully flushed out example ideally in JAMA  
  * One document explaining overall strategy proposal  
    * Requirements  
      * Clarify boundaries for product vs system requirements  
      * What are we exactly verifying for URD, SWRDs level,   
    * Change management  
    * Test methods  
    * V\&V strategy   
    * Traceability  
    * Align on SWRD format with ML based system  
    *   
  *   
  * 

Action items

- [ ] 

# 2\. Requirements Strategy

## Feb 2, 2026 | [\[Placeholder\] PdM \<\> Systems Workshop - Requirement Strategy](https://www.google.com/calendar/event?eid=NjN2Z2lvdnBwZTBwMGQwNGMwbWRidnZrcXYgbmljaG9sYXMuY2FyY2lvbmVAd292ZW4tcGxhbmV0Lmdsb2JhbA)

Attendees: [Shuntaro Tsutsumi (WbyT-PdM)](mailto:shuntaro.tsutsumi@woven-planet.global) [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) [Julia Pralle](mailto:julia.pralle@woven-planet.global) [Jojiro Tani](mailto:jojiro.tani@woven-planet.global) [Wei Wei](mailto:wei.wei@woven-planet.global) [Ryo Masutani](mailto:ryo.masutani@woven-planet.global) [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) [Hannah Lane](mailto:hannah.lane@woven-planet.global) [Mahesh Sarode](mailto:mahesh.sarode@woven-planet.global) [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global)

Agenda

* Who will define requirements and at what level? \[[proposal](#bookmark=kix.p724y8ndsbt7)\]  
  * What is included in product requirements?  
    * Product requirements:  
      * existing : URD, SWRD, SBRD, Intermediate license  
      * competitors: Momenta (scene based, similar to SBRD, better than legacy requirements)  
      * What the system/ product should do? How does it do this (lane change, blinker etc.)? How does the user interact with it? What capabilities should be included?  
  * What is included in system requirements?  
    * Systems requirements:  
      * Different levels:   
        * Input mapping to Output, for DCs, internal SW connection IFs  
      * Similar to IP requirements (cover internal product and independent to mass production programs)  
      * What the system should do to to achieve the target performance  
      * How does the input work? How should the lane change be performed, what is good performance, distance to vehicle in target lane, braking limits?   
      * IF requirements  
  * Current Problems:  
    * What’s missing from SBRD (product level)?  
      * Lack of definition \- what is the input, how should the user interact,   
        * Example: LC, use of signaling is not defined in SBRD  
      * Lack of performance definition \- what bar is performance measured  
      * TPV (how exactly is it performed) is more at system performance than at the product level   
    * What’s missing from SWRD?  
      * LC: what triggers LC, \- product level? Quantitative threshold \- systems level  
    * Ownership of SWRD   
      * CA is owner for mass production  
    * Definition of System  
      * At one team, System \= ECU/ DC level  
      * ![][image1]  
      * ![][image2]  
      * IP \= ADAS SW components (Perception, Planner and Controller)  
      * Proposed definition:  
        * SWRD: connection between modules navigation, steering  
        * IP Requirements:  
          * SBRD  
          * HMI   
          * TPV(currently expand towards ML centric scenarios)  
          * Route based evaluation  
          * Comfort Metrics (PdM is trying to remove it from SWRD requirements)  
        * IP doesn’t cover  
          * IF requirements  
          * SWRD only focused on BEV S3 interfaces  
      * Successful criteria \= map URD to IP requirements, IP team can use it for development

	Requirement Structure:

URD: defined by TMC  
SYRD: ECU interfaces  
SWRD: defined by CA team, requirement team, TMD  
Cut-in has been removed from URD since it is ML based and can be improved by more data and training.   
HMI is for production and not covered by TMPOC platform, there is no place to define HMI for TMPOC, so adding HMI part to IPR for TMPOC

SWRD is at SW component group level and IPR (SBRD+HMI) is at vehicle level.

One thing is missing is the SBRD decomposition into component and interface level.  

[Conceptual Application Architecture with IPA](https://docs.google.com/presentation/u/0/d/1Enf1E5omx3xOkP3KmqYdXTmLjihBz9I5SNMvFI1moaw/edit)

![][image3]

What is the scope of responsibility of V\&V?  
Boundary of TMPOC needs to be aligned  
Input and output of IPA block needs to be in scope of responsibility  
SWRD is applicable to the IPA block  
CA side is also preparing for SWQT part

In lane capability group does not need breakdown as separate URD  
URD is focused on functionality, not performance

PRD is positioned at scope level, not requirement level (?really?)

- Include URD cases  
- ToDo 1: Include SWRD links (intent)  
  - Short term as reference requirement   
- ToDo 2: 

Does PRD state what evidence is needed to pass compliance?

What information does V\&V need to provide to OneTeam for sign off? SWQT or SBRD?

Currently we are developing two products, one for IP and one for BEV, IP functionality exceeds BEV scope.

Sysken requirements validation on interfaces. We need to incrementally expand requirement definitions.

* What is the approach to handle overlapped areas?  
* How will requirement review and/or approval work?  
* Discussion of on vs off performance requirements and how to use them  
* Where are requirements stored (e.g. JAMA)?  
* How does the requirement update process work?  
* How will traceability work?  
* Align on terminology for different levels of requirements (SBRD vs SWRD vs URD vs etc.)

Notes

* 

Action items

- [ ] 

Context to align with everyone:

1. History

\[note:

\]

2. Current state

\[note:

V2 SWRD is received, catalog structure is changed to be feature specific, content remain same  
Current architecture draft [Conceptual Application Architecture with IPA](https://docs.google.com/presentation/d/1Enf1E5omx3xOkP3KmqYdXTmLjihBz9I5SNMvFI1moaw/edit?slide=id.g3aa8e6d8183_0_2#slide=id.g3aa8e6d8183_0_2)

| Feature Category | SWRD State | What to do |
| :---- | :---- | :---- |
| In lane | Some portion is applicable |  |
| Lane transitions | Some portion is applicable |  |
| Intersection & VRU | Non-existent |  |
| Environmental & Degradation | Minimal, at superficial level (weather categories), not at functional level |  |
| Construction |  |  |
| Mode Transition | Minimal |  |
| Driver Cooperation | Some portion is applicable |  |
| Parking & Zones | Non-existent |  |

\]

3. Main challenge and reason

\[note:

1. Problem: very limited time left for V\&V for BEV program validation

**Milestones:**

* ‘26 July: All scenario Implementation complete  
  * Finalize implementation of all scenario-based features required for SOP  
* ‘27 January: ML Model / logic Fix Complete  
  * Achieve targeted system performance improvements through machine learning model tuning and logic fixes

  2027/06 \- code freeze for SOP (less than 12 months of time for DEV \+ V\&V \+ buffer) 

  2028/02 \- SOP  

  2029/02 \- SU1 (if we delay launch to SU1, then new code freeze might be 2028/06)

\]

4. Longer term vision

\[Note:

1. Clear separation of product development (IP) and customer development (BEV, MPW)  
2. Clear separation of product requirement (what & how to develope) and customer requirement (what & how the customer want)  
3. ML based product requirements 

\]

\[Note: proposal of separation between Product Requirements and Systems Requirements

1. Product owns the what and why (intent, experience, business constraints)  
2. System owns the how and how safely (physics, implementation, safety margins), there are several layers  
   1. System of systems (vehicle level) \- this is the focus of this workshop   
   2. Systems (component or component groups) \- SE can align with Eng on how to handle this category

   

|  | Product Requirements | Systems Requirements |
| :---- | :---- | :---- |
| Driver-Vehicle Interaction | HMI workflow, warning types, handoff sequences, engagement/disengagement UX | Display latency, alert sound levels meeting regulations, HMI hardware specs |
| High-Level Decisions & Behaviors | When/where feature activates (ODD from user perspective), lane change initiation logic, comfort tuning, mode definitions, when behavior A is better than behavior B.  | Gap acceptance thresholds, TTC calculations, sensor confidence requirements, object tracking accuracy |
| Vehicle Dynamics & Control | Desired ride quality, brand driving character | Lateral/longitudinal control algorithms, actuator commands, stability margins, traction limits |
| Safety | User-facing safety messaging, what driver is told about system limits | ASIL ratings, fault tolerance, functional safety architecture, degradation modes, ISO 26262 compliance |

Maybe more useful to see the [Requirement Example](#bookmark=id.yjjth64jiizk) section’s detailed split between LK and LC.  
\]

\[Note: handling overlapped portion between Product and Systems requirements:

1. If there is an overlapped portion, great, this means one person can do less work.  
2. We will keep the SOT requirement in one document and have it referred to in another one. 

Reconciliation:

1. Iterative target vs. production target  
   1. Each quarter, some performance target cannot be met, so in systems requirements we should firstly reflect quarterly target, which can be lower than production target to enable regression test  
   2. Over quarters, the requirement targets need to be iteratively adjusted to reach the production target  
   3. Both PdM and SE needs to be aware of the current quarterly target and production target  
   4. If the production target cannot be achieved, PdM takes responsibility to align with the customer on a new target and get sign off. Before the signoff, the highest achievable target agreed by Eng is the target.  
2. Escalation process  
   1. For requirement reconciliation, please bring to PdM \<\> SE sync and can have [Julia Pralle](mailto:julia.pralle@woven-planet.global)\<\> [Jojiro Tani](mailto:jojiro.tani@woven-planet.global)\-san for arbitration.

\]

\[Note: requirement review and approval process  
Product requirement review can be a later discussion in which systems DRI will be part of the review.  
We should focus on aligning on systems requirement review.

Systems requirement review and/or approval work \- proposal:  
Step 1: working level review: align between Eng/PdM/Systems DRIs  
Step 2: approval review:   
BH Eng head or delegate  
PdM head or delegate  
SE head or delegate  
\]

\[Note: How does the requirement update process work?

\]

# 3\. Requirements Example

## Feb 3, 2026 | [\[Placeholder\] PdM \<\> Systems Workshop - Requirements Example](https://www.google.com/calendar/event?eid=NTRrb3Q0YW9ucW05NTFqbzNpbGVjcWFuNG8gbmljaG9sYXMuY2FyY2lvbmVAd292ZW4tcGxhbmV0Lmdsb2JhbA)

Attendees: [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) [Mahesh Sarode](mailto:mahesh.sarode@woven-planet.global) [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) [Julia Pralle](mailto:julia.pralle@woven-planet.global) [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) [Wei Wei](mailto:wei.wei@woven-planet.global) [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) [Hannah Lane](mailto:hannah.lane@woven-planet.global) [Ryo Masutani](mailto:ryo.masutani@woven-planet.global)

Agenda

* Apply the learnings from "Requirements strategy" to a simple example scenario(s)  
  * Example scenario 1: driving at set speed on a straight road with no ados  
  * Example scenario 2: lane changes  
* Output of this session should be a complete set of requirements for the scenario that can be used as an example by the capability groups  
  * Note: This initial set of requirements should intentionally have at least 1 error to set up the “Updating Requirements” session  
* The requirements should be written in all locations agreed upon in "Requirements strategy"  
* Identify, address, and resolve any gaps between what was actually done and what was discussed in the “Requirements Strategy” session

Notes

[SWRD Release note (26/01/22)](https://docs.google.com/presentation/d/1Hq7-p2V6ImVrJIY_Pa-yGBcpJoFaA7dfyl8pCxFOw8o/edit?slide=id.g3b8079d3d03_0_0#slide=id.g3b8079d3d03_0_0)

* Current assumptions/requests;  
  * PdM will provide all the requirements (SWRDs, SBRDs, TVPs, etc) for IP per PRD on a quarterly basis (roadmap)  
  *   
* Ownership of different requirement levels  
  * URD \- TMC / CA  
  * SYRD \- TMC / CA  
  * SBRD \- WbyT  
    * Scenarios are aligned with TMC  
    * Criteria are more internal  
    * Proposal: PdM create, SV\&V review/approve  
  * TPID \- TMC  
  * SWRD \- CA  
    * Assumption/request: new SWRD structure will **only** define requirements for what IPA block should output given certain input (e.g., given a line or combination of lines into IPA block [here](https://docs.google.com/presentation/d/1Enf1E5omx3xOkP3KmqYdXTmLjihBz9I5SNMvFI1moaw/edit?slide=id.g3aa4d7171ea_9_0#slide=id.g3aa4d7171ea_9_0), what output line(s) are expected). Basically, what does IPA need to send to other blocks and what triggers does IPA need to support  
    * [SWRD Release note (26/01/22)](https://docs.google.com/presentation/d/1Hq7-p2V6ImVrJIY_Pa-yGBcpJoFaA7dfyl8pCxFOw8o/edit?slide=id.g3b8079d3d03_0_0#slide=id.g3b8079d3d03_0_0)  
  * SCRD \- SV\&V  
    * Decomposed from SWRDs based on the SWAD  
* Lane change example  
  * \[MISSING\] Explicit requirement / statement saying that lane change is a feature that we shall support  
    * Current coverage \- PdM organizes existing URDs into features (like lane change) in the PRDs  
    * PRD is intended to address this gap  
  * \[MISSING\] Explicit definition of the ODD / operating conditions in which the lane change feature should work  
    * Road type, weather conditions, speed range  
    * Used to be covered in some RFQs  
    * Implied in some SWRDs to some extent  
  * \[EXISTING\] URDs for lane change functionality  
    * These appear to (and should) explain how the lane change feature works from a user level  
      * Press stalk for Xs to trigger a lane change  
    * \[NEEDS CONFIRMATION\] Will contain regulatory compliance (e.g. UN-R171)  
  * \[EXISTING\] SWRDs for the lane change feature  
    * \[EXISTING\] Some of the LC SWRDs are as expected and define architecture block level requirements  
    * \[LIMITATION\] Some of the LC SWRDs define vehicle level behavior / performance  
    * \[REQUEST\] In future SWRD releases, SWRDs should only handle architecture block / signal requirements, **not** vehicle level performance (e.g The IPA shall..)  
    * \[PLANNED\] The PRD will gather all applicable SWRDs for the LC feature for quarterly scope  
  * Example decomposition from SWRD to SCRD:  
    * If the SWRD states that lane changes should be suppressed in construction zones, SV\&V would have to decompose into SCRDs that state perception has to provide a “in construction zone” signal to planner so that LCs can be suppressed  
    * Would fall to SV\&V  
  * Thresholds on vehicle level performance when doing a lane change will be defined in the SBRD and TPIDs  
    * \[REQUEST\] Contain this information in the PRD in the acceptance criteria section  
    * \[OPEN\] TPIDs defined by \_\_\_  
    * \[OPEN\] SBRD criteria defined by \_\_\_  
  * \[MISSING\] Requirement review / update process to quickly update requirements and metrics (acceptance criteria) as needed  
    * Carrie, Kuroda-san, Tani-san, Ryan, Yokoi-san, CA representative (if URD or SWRD)  
* LK example:  
  * Example discussed **SWRD-PnP-LK-10, [link](https://bev.dev.req.tmd.w3n.io/tmd-requirement-doc/tag/v2/docs/LK/SWRD/PerceptionAndPlanning/SWRD-PnP-LK-10/)**  
    * A good example shows we need ODD information, LK can’t function in shoulder  
    * Input signal from camera, map… to IPA box, out signal to AD SM box  
    * CA→SWRD: If IPA in shoulder, IPA shall send HANDSON request to ADSM  
    * SCRD OMR shall detect shoulder lane lines, OMS/Map fusion shall be able to label lines as a shoulder  
    * X shall send Y signals to ADSM when ego is in shoulder  
  * \[MISSING\] Mapping between in-lane URDs and SWRDs → CA responsibility  
  * \[MISSING\] Explicit definition of the ODD / operating conditions in which the lane change feature should work  
    * Road type, weather conditions, speed range  
    * Used to be covered in some RFQs  
    * Implied in some URDs to some extent  
  * \[MISSING\] SWADs for IP need to be developed (DRI [Philip Tsai](mailto:philip.tsai@woven-planet.global)) BEFORE SV\&V starts creating SCRDs  
  * \[EXISTING\] SWRDs for theLK feature  
    * \[EXISTING\] Some of the LK SWRDs are as expected and define architecture block level requirements  
    * \[LIMITATION\] Some of the LK SWRDs define vehicle level behavior / performance  
    * \[REQUEST\] In future SWRD releases, SWRDs should only handle architecture block / signal requirements, **not** vehicle level performance (e.g The IPA shall..)  
    * \[PLANNED\] The PRD will gather all applicable SWRDs for the LK feature for quarterly scope  
* Steps in the requirement process (from the AD/ADAS perspective)  
  * CA provides URD and SWRD requirements that define user experience and SYAD (block diagram) level requirements for the IPA block  
  * PdM organizes the URD and SWRD requirements into features for the capabilities in the PRD  
  * SWAD is created with the received SWRDs  
    * DRI: [Philip Tsai](mailto:philip.tsai@woven-planet.global) and tech guild  
  * SV\&V decomposes SWRDs into SCRDs as necessary (based on the SWAD)  
  * \[On the side\] Definition of SBRD /  TPID and inclusion as acceptance criteria in PRD  
* URD → SYRD → SWRD → SCRD process ensures that IPA integrates correctly into BEV  
* SBRD ensures that the performance of IPA is meeting TMC / customer expectations  
* \[MISSING\] Well defined feedback mechanism to CA for SWRD updates  
  * Prior process: met directly with owners from CA

Test case management fortelix case study that was done in the past: [HERE](https://drive.google.com/file/d/1AFfOam6ehl82y80OEI3KE_nb_Ubk1tYY/view?usp=sharing)

Action items

- [ ] [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) Check with [Jojiro Tani](mailto:jojiro.tani@woven-planet.global)\-san how to get ODD for each URD ([thread](https://woven-by-toyota.slack.com/archives/C09U6UD1N7K/p1769196491021179?thread_ts=1768558397.549479&cid=C09U6UD1N7K)) (road condition/weather condition/country of operation/time of day, etc)  
- [ ] [Julia Pralle](mailto:julia.pralle@woven-planet.global)to check in with [Philip Tsai](mailto:philip.tsai@woven-planet.global)on current status of SWADs   
- [ ] [Wei Wei](mailto:wei.wei@woven-planet.global) Review PRD process with S\&Q

Appendix \- Requirement Split for LK and LC:

Example 1: Lane Keep Requirement Split

|  | Product | Systems |
| :---- | :---- | :---- |
| Activation | Where it's available (highway only, speed range, road types), how driver engages it, what the HMI shows when ready | Lane marking detection confidence thresholds, camera/sensor readiness checks |
| Centering | How centered the vehicle feels, smoothness expectations, tolerance for minor drift perceptible to driver | Lateral control algorithm, steering torque limits, path planning frequency, control loop latency |
| Lane Marking | Expected behavior when markings fade or split (keep going? warn? disengage?), how quickly system should notify driver | Marking classification logic, confidence thresholds and fall back approach |
| Curves | What curve speeds feel comfortable, whether to slow before curves, mode/character setting (confident vs. cautious) | Road geometry estimation, curvature limits for safe lateral acceleration, look-ahead distance |
| Adjacent traffic response | Whether to bias away from trucks, how close feels comfortable to driver | Object proximity thresholds, lateral offset calculations, sensor accuracy for adjacent lane detection |
| Hands-on enforcement | Timing and escalation of hands-on reminders, tone of warnings, what happens at timeout | Torque sensor sensitivity, steering wheel capacitance thresholds, timer logic |
| Disengagement | When to hand back to driver (construction, missing lines), how much warning, disengage UX flow | Disengagement technical criteria check logic |
| Edge cases | Expected behavior driver should understand (rain, snow, sun glare)—communicated limits | Degradation thresholds and mechanism |

Example 2: Lane Change Requirement Split

|  | Product | Systems |
| :---- | :---- | :---- |
| Initiation | How to activate, by user or system | Intent detection logic, turn signal input handling |
| Gap acceptance | How aggressive or conservative it feels, willingness to take tighter gaps based on brand character | Minimum gap distance, TTC thresholds, closing speed calculations, sensor confidence for adjacent vehicles |
| Execution feel | Smoothness, how quickly it crosses, whether it feels confident or hesitant | Lateral acceleration limits, steering rate, path trajectory planning |
| Abort behavior | When/why to cancel (driver steers, new obstacle), how to communicate abort to driver | Object intrusion detection, override torque thresholds, replanning logic |
| Adjacent traffic awareness | Whether to wait for fast approaching vehicles, how cautious around trucks/motorcycles | Rear/side sensor range, velocity estimation accuracy, object classification |
| Multi-lane changes | Whether supported, how driver requests consecutive changes, pacing between lanes | Path planning for sequential maneuvers, intermediate gap checks |
| Blocked lane change | What driver sees when lane change isn't possible, how long system waits before giving up | Timeout logic, gap monitoring duration, fallback path |
| Completion feedback | How driver knows lane change is done, HMI confirmation | Lane marking detection confirming new lane position |
| ODD limits | Where lane change works (highway only, speed range, weather), how limits are communicated | Sensor/ perception performance boundaries, map data requirements, localization accuracy |

# 3.1. Updating Requirements Example

## Feb 3, 2026 | [\[Placeholder\] PdM \<\> Systems Workshop - Updating Requirements](https://www.google.com/calendar/event?eid=MW1uNzhzM2Q4MTBxbTUwODh2c3I3NDZrMHEgbmljaG9sYXMuY2FyY2lvbmVAd292ZW4tcGxhbmV0Lmdsb2JhbA)

Attendees: [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) [Mahesh Sarode](mailto:mahesh.sarode@woven-planet.global) [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) [Julia Pralle](mailto:julia.pralle@woven-planet.global) [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) [Wei Wei](mailto:wei.wei@woven-planet.global) [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) [Hannah Lane](mailto:hannah.lane@woven-planet.global) [Ryo Masutani](mailto:ryo.masutani@woven-planet.global)

Agenda

* Apply the learnings from "Requirements strategy"  
  * Example scenario 1: driving at set speed on a straight road with no ados  
  * Example scenario 2: lane changes  
* Practice updating a requirement from the example scenario(s) above  
* Identify, address, and resolve any gaps between what was actually done and what was discussed in the “Requirements Strategy” session

Notes

* 

Action items

- [ ] 

# 4\. Requirements Summary

## Feb 3, 2026 | [\[Placeholder\] PdM \<\> Systems Workshop - Requirements Summary](https://www.google.com/calendar/event?eid=NXI1MmxudGcxYjAxdWNhMTIwZDlsZWEwcjggbmljaG9sYXMuY2FyY2lvbmVAd292ZW4tcGxhbmV0Lmdsb2JhbA)

Attendees: [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) [Mahesh Sarode](mailto:mahesh.sarode@woven-planet.global) [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) [Julia Pralle](mailto:julia.pralle@woven-planet.global) [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) [Wei Wei](mailto:wei.wei@woven-planet.global) [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) [Hannah Lane](mailto:hannah.lane@woven-planet.global) [Ryo Masutani](mailto:ryo.masutani@woven-planet.global)

Agenda

* Review what was discussed in the “Requirements Strategy” session  
* Review what was done during the “Requirements Example” and “Updating Requirements Example” sessions  
* Create a set of clear and well documented steps that capture the final requirements definition process

Notes

* 

Action items

- [ ] 

# 5\. V\&V Strategy

## Feb 3, 2026 | [\[Placeholder\] PdM \<\> Systems Workshop - V\&V Strategy](https://www.google.com/calendar/event?eid=MWZmOThrYXRwMnB2dGxnc2VvZzh2cTF1ZzkgbmljaG9sYXMuY2FyY2lvbmVAd292ZW4tcGxhbmV0Lmdsb2JhbA)

Attendees: [Shuntaro Tsutsumi (WbyT-PdM)](mailto:shuntaro.tsutsumi@woven-planet.global) [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) [Julia Pralle](mailto:julia.pralle@woven-planet.global) [Jojiro Tani](mailto:jojiro.tani@woven-planet.global) [Wei Wei](mailto:wei.wei@woven-planet.global) [Ryo Masutani](mailto:ryo.masutani@woven-planet.global) [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) [Hannah Lane](mailto:hannah.lane@woven-planet.global) [Mahesh Sarode](mailto:mahesh.sarode@woven-planet.global) [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global)

Agenda

* Discussion of what V\&V modalities we will use (e.g., synthetic sim, logsim, on-road evaluation) and how we plan on using them to measure  
* Clarify and agree on the roles and responsibilities for setting up and performing V\&V activities  
* Create a wish list and timeline of needs from DevEco

Notes

* SWRDs to be tested in a quarter should be included in the PRD  
* Ideally, SWRD should be tested before the URD deadline  
  * This may not be the case in practice due to short amount of time  
* V\&V of SWRDs (SWQT)  
  * Implemented as unit tests by developers  
  * PdM and SV\&V will work with developers to understand which SWRDs to target and what is necessary for unit tests  
  * SV\&V to help with traceability and ensuring proper coverage  
  * Unit test coverage in the woven-togo repo  
  * Is there a need to also (re)implement SWQTs in the BEV repo?  
    * Question for CA, S\&Q  
  * Cadence of SWRD verification (SWQT)?  
    * Was previously tested in CI by build in 20TM  
    * Align with S\&Q  
* V\&V of URDs (SYQT)  
  * Tested in the BEV repo  
  * Tested on closed HILS and SILS  
  * Done by [Seiji Kamiya](mailto:seiji.kamiya@woven-planet.global)\-san’s team at the SYQT level  
  * [CA/CSW metrics management](https://docs.google.com/spreadsheets/d/1k4DHBrqCR8nt6rm1hVFtKEx4Pnt7iTPwc2kyh5jDTeU/edit?gid=72019492#gid=72019492&range=ET7)  
* V\&V of SCRDs  
  * Same as SWRDs  
* V\&V of SBRDs  
  * Implemented as sim scenes in LogSim by SceneSearch, SimOps and validated by SV\&V  
  * Usage of synthetic sim?  
    * Currently have SBRD scenarios running in synthetic sim, but with limitation that we don’t have evaluators running on them  
    * Proposal: start with a separate, smaller set outside of the logsim SBRD dataset  
    * Won’t initially be used for LoB metric calculation until synthetic is better understood  
    * Tracked by LoB metric (SBRD Pass Rate)  
* V\&V of TPIDs  
  * Implemented as CC tests  
  * Will also be added as sim tests in TPV  
  * Happening on TMPOC for now  
  * Should implement TPID evaluation to mirror how TMC is currently evaluating them  
  * See fundamental TPVs [FY25 Q4 Scene QA & Eval Prioritization ](https://docs.google.com/spreadsheets/d/19x70YK_-Ues3j7GOFlyZXBGCUfVb9SheC8w0OzM-l9k/edit?usp=sharing)  
    * These should be listed in the PRD  
  * Subset of former TPIDs  
  * Not included in LoB metric yet  
* Intermediate license  
  *  

Action items

- [ ] \[DRI TBD\] Answer remaining open questions about SWQT

Context to align with everyone:

1. History

2. Current state  
     
3. Main challenge  
     
4. Longer term vision  
     
5. Shorter term goal

# 6\. V\&V Example

## Feb 4, 2026 | [\[Placeholder\] PdM \<\> Systems Workshop - V\&V Example](https://www.google.com/calendar/event?eid=NHZpbGdnM29paTFvMTdpN2k5MTdjYnJyMG4gbmljaG9sYXMuY2FyY2lvbmVAd292ZW4tcGxhbmV0Lmdsb2JhbA)

Attendees: [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) [Mahesh Sarode](mailto:mahesh.sarode@woven-planet.global) [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) [Julia Pralle](mailto:julia.pralle@woven-planet.global) [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) [Wei Wei](mailto:wei.wei@woven-planet.global) [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) [Hannah Lane](mailto:hannah.lane@woven-planet.global) [Ryo Masutani](mailto:ryo.masutani@woven-planet.global)

Agenda

* Apply the learnings from "V\&V strategy" to a simple example scenario(s)  
  * Example scenario 1: driving at set speed on a straight road with no ados  
  * Example scenario 2: lane changes  
* Create a set of concrete action items for implementing the full V\&V suite discussed above  
  * Assuming it is not possible to implement it during the session  
* Understand what support from other teams (e.g., DevEco) is necessary beyond what was discussed in "V\&V strategy"  
* Identify, address, and resolve any gaps between what was actually done and what was discussed in the “V\&V Strategy” session

Notes

* Lane change example SWRD: [link](https://bev.dev.req.tmd.w3n.io/tmd-requirement-doc/tag/lca.v1.9.0/docs/LCA/SWRD/BehaviorContext/Navigation/HandsOnRequest/SWRD-BC-NAV_HandsOn_500/)  
* Analysis, inspection, demonstration, test (AIDT) matrix  
  * SV\&V to create and include in the PRD  
  * Example AIDT (Analysis, Inspection, Demonstration, test) table (included in the test plan doc owned by SV\&V)

| Req ID | AIDT | Test Level |
| :---- | :---- | :---- |
| SWRD-BC-NAV\_HandsOn\_500 | Test | Unit |

  *   
* SV\&V will create the SWQTs for the SWRDs included in the PRD  
  * SWQTs will be stored in JAMA [here](https://stargate.jamacloud.com/perspective.req?continue#/containers/14433256?projectId=368) (same as proposed JAMA repository below)  
* SV\&V will provide a report to PdM that we are meeting the SWRDs included in the PRD


| Req ID | SVV ID | AIDT | Test Level | Implemented | Passed |
| :---- | :---- | :---- | :---- | :---- | :---- |
| SWRD-BC-NAV\_HandsOn\_500 |  | Test | Unit |  |  |

  *   
* Proposal: All SWRDs should be recorded in JAMA for use in verification management.   
  * [Proposed](https://stargate.jamacloud.com/perspective.req?continue#/containers/14433256?projectId=368) Jama repository.   
* Values in SWRDs that are listed with TBD will be listed as TBR (to be reviewed) in SWQTs  
  * Need to track TBDs and TBRs throughout development  
* PRD should include the version number of the SWRD that is targeted  
  * Wei: did we conclude that SWRD requirement id \+ version number is reliable and worthwhile to track?

Action items

- [ ] Follow up with S\&Q about traceability and report generation for SWQT unit testing

# 7\. Workflow and Feedback Loop

## Feb 4, 2026 | [\[Placeholder\] PdM \<\> Systems Workshop - Workflow and Feedback Loop](https://www.google.com/calendar/event?eid=MmszZXRhODNkMjhyNDQzbTdiNWU4MjI4djkgbmljaG9sYXMuY2FyY2lvbmVAd292ZW4tcGxhbmV0Lmdsb2JhbA)

Attendees: [Dhwani Trivedi](mailto:dhwani.trivedi@woven-planet.global) [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) [Mahesh Sarode](mailto:mahesh.sarode@woven-planet.global) [Julia Pralle](mailto:julia.pralle@woven-planet.global) [Ana Ferreira](mailto:ana.ferreira@woven-planet.global) [Wei Wei](mailto:wei.wei@woven-planet.global) [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) [Hannah Lane](mailto:hannah.lane@woven-planet.global) [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) [Miroslav Baric](mailto:miroslav.baric@woven-planet.global) [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) [Ryo Masutani](mailto:ryo.masutani@woven-planet.global)

Agenda

* How can / should the V\&V output aid and inform development?  
* Through which channels and at what cadence should V\&V output be communicated?  
  * How do we define and add new scenarios identified during development?  
  * How do we update or add requirements to scenarios as needed to better capture on and/or off performance?

Notes

* How do we communicate feedback/change requests to requirements documented in the PRD?  
  * SV\&V summarizes change requests for PRD  
  * PdM reviews and updates requirements on a set cadence  
    * Weekly meeting to discuss change  requests from all CG  
    * Running doc  
  * How do handle version control:  
    * Using JAMA and PRD version  
  * Example: [JIRA Structure](https://jira.tri-ad.tech/secure/StructureBoard.jspa?s=314#)  
  * TO Do: Setup new JIRA Structure [Ryan Faries](mailto:ryan.faries@woven-planet.global) and [Julia Pralle](mailto:julia.pralle@woven-planet.global)  
* Proposal from [Hannah Lane](mailto:hannah.lane@woven-planet.global) to use something like [\[BEV Step3\]\_AD/ADAS\_IP\_SWRD\_\[WU/BH\]\>\>\[All\]\_Requirement Analysis Report](https://docs.google.com/spreadsheets/d/1p4WxltJvo-u3PqxDgQJI_SeusjTTe4CVXcTkgFcpTv8/edit?usp=sharing) for tracking acceptance of requirements from developers  
  * Will need to be updated to reflect new architecture and be organized for the capability groups  
* Through which channels and at what cadence should V\&V output be communicated?  
  * Change request and management implementation would go both ways   
* Performance results   
  * Reported with in the CG 

Action items

- [ ] [Ryan Faries](mailto:ryan.faries@woven-planet.global) Set up a new JIRA structure similar to the example above

# 8\. Overflow Topics

## Feb 5, 2026 | [\[Placeholder\] PdM \<\> Systems Workshop - Overflow](https://www.google.com/calendar/event?eid=NGlsNWYxdnJlbmpsYmgybXExa2QyOXZmZjUgbmljaG9sYXMuY2FyY2lvbmVAd292ZW4tcGxhbmV0Lmdsb2JhbA)

Attendees: [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) [Mahesh Sarode](mailto:mahesh.sarode@woven-planet.global) [Ryan Faries](mailto:ryan.faries@woven-planet.global) [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) [Julia Pralle](mailto:julia.pralle@woven-planet.global) [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) [Wei Wei](mailto:wei.wei@woven-planet.global) [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) [Hannah Lane](mailto:hannah.lane@woven-planet.global) [Ryo Masutani](mailto:ryo.masutani@woven-planet.global)

List of overflow topics and open questions to cover:

* \[Wei\] Goal setting for the quarter  
  * Scope → what is the coverage of requirements that we should target and how granular?  
  * Timing → rough schedule  
    * Request from [Jojiro Tani](mailto:jojiro.tani@woven-planet.global)\-san to complete URD and SWRD content in PRD by Feb 13, 2026  
      * URD → SWRD mapping for in-lane is missing from CA, so that may not be available  
      * Focus will be on in-lane and lane transitions  
      * SBRDs and TPV requirements also to be added  
    * Kick-off weekly syncs starting week of Feb 16, 2026  
    * SV\&V review of PRD drafts ASAP (by Feb 20, 2026\) (with developers once they are assigned)  
      * Including ADIT matrix for SBRDs and TPIDs  
    * SV\&V to create ADIT matrix for SWRDs by **TBD**  
    * SV\&V to add SWQTs to JAMA by **TBD**  
    * SV\&V to work with developers to implement SWQTs throughout quarter  
* \[Julia\] Discussion of how capability groups will align with motorway and urban projects  
  * Program execution management for motorway is currently unclear  
  * Urban will continue as is until milestone is achieved, then should transition to similar structure as motorway  
  * **Option 1**: Have 2 DRIs for the same capability that focus on motorway and urban respectively  
  * Option 2: Have 1 DRI that is responsible for a capability across both motorway and urban  
  * Choosing **Option 1** for now, will re-evaluate over the coming weeks if we need to change the resource allocation  
    * [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global)will be fully dedicated to urban  
    * [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) will be the only one dedicated to in-lane motorway  
* \[Hannah\] Set up JAMA structure  
  * What will the folder structure look like?  
  * What will the template for requirements and test cases look like?  
  * Where within Jama are things going to live?  
* \[Wei\] Requirements for urban  
  * Covered by allocation of [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) and [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) to urban  
  * Won’t have SWRDs early on for urban  
  * Will have 4 URDs this quarter  
    * May need to create temporary SWRDs based on the URDs until TMC / CA releases the actual SWRDs  
* \[Nithin\] Summary / block diagram of the process with owners identified  
  * [Hayao Joji](mailto:hayao.joji@woven-planet.global)\-san will create block diagram of workflow from PdM side and work with SV\&V DRI to make sure 2 sides are compatible  
    * [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) will be the SV\&V DRI

Notes

* 

Action items

- [ ] [Hayao Joji](mailto:hayao.joji@woven-planet.global)\-san and [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) to create workflow block diagrams in conjunction with [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global)  
- [ ] [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) to confirm correct terminology in workflow block diagram  
- [ ] SV\&V team to discuss JAMA structure internally ([Hannah Lane](mailto:hannah.lane@woven-planet.global) and [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) as leads?)

List of things that were left as open questions / missing in previous sessions:

* One thing is missing is the SBRD decomposition into component and interface level  
* What information does V\&V need to provide to OneTeam for sign off? SWQT or SBRD?  
* \[MISSING\] Explicit definition of the ODD / operating conditions in which the lane change feature should work  
  * Should we define ODD / operating conditions? Do we need to request that TMC / CA formally provides this?  
* \[NEEDS CONFIRMATION\] Will URDs contain regulatory compliance (e.g. UN-R171)?  
  * Who do we confirm this with and how?  
* \[MISSING\] Well defined and efficient feedback loop to CA about SWRDs  
  * Maybe leave as an action item to resolve offline  
* \[MISSING\] Requirement review / update process to quickly update requirements and metrics (acceptance criteria) as needed  
  * Carrie, Kuroda-san, Tani-san, Ryan, Yokoi-san, CA representative (if URD or SWRD)  
  * Leave as an action item to resolve offline  
* \[MISSING\] Mapping between in-lane URDs and SWRDs → CA responsibility  
  * Leave as an action item to resolve offline  
* \[MISSING\] SWADs for IP need to be developed (DRI [Philip Tsai](mailto:philip.tsai@woven-planet.global)) BEFORE SV\&V starts creating SCRDs  
  * Leave as an action item to resolve offline  
* Is there a need to also (re)implement SWQTs in the BEV repo?  
  * Question for CA, S\&Q  
  * Leave as an action item to resolve offline → who is responsible for this?  
* Cadence of SWRD verification (SWQT)?  
  * Was previously tested in CI by build in 20TM  
  * Align with S\&Q  
  * Leave as an action item to resolve offline → who is responsible for this?

# 9\. Wrap Up

## Feb 5, 2026 | [\[Placeholder\] PdM \<\> Systems Workshop - Wrap Up](https://www.google.com/calendar/event?eid=MTJndmk5aG1vOXVhMGRlZ29mOGlxdGVnYTggbmljaG9sYXMuY2FyY2lvbmVAd292ZW4tcGxhbmV0Lmdsb2JhbA)

Attendees: [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) [Mahesh Sarode](mailto:mahesh.sarode@woven-planet.global) [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) [Julia Pralle](mailto:julia.pralle@woven-planet.global) [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) [Wei Wei](mailto:wei.wei@woven-planet.global) [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) [Hannah Lane](mailto:hannah.lane@woven-planet.global) [Ryo Masutani](mailto:ryo.masutani@woven-planet.global)

Agenda

* Review and summarize the learnings from the workshop  
* Review any outstanding action items and next steps  
* Discuss any remaining topics or concerns

Notes

* Summary  
  * Aligned on URD → SCRD levels, decomposition, and responsibilities (see [here](https://lucid.app/lucidspark/d63ae10f-e3ff-4fd8-9063-87ec0f8ed27a/edit?invitationId=inv_ccc209cc-a9be-4e62-956d-a4ac9c85b84d&page=0_0#))  
    * EE architecture (above SYAD) will be handled by TMC  
    * Per [Jojiro Tani](mailto:jojiro.tani@woven-planet.global) CA will be using [Reqtify](https://www.3ds.com/products/catia/reqtify) for SWRD traceability and will be connected to JAMA  
      * SBRD will be using the same tool  
  * Aligned on upcoming PRD timeline and scope  
    * End of next week will have primary drafts for SV\&V review and initial test plan creation  
  * Aligned on overall PRD workflow  
    * CA provides URD and SWRD requirements that define user experience and SYAD (block diagram) level requirements for the IPA block  
    * PdM organizes the URD and SWRD requirements into features for the capabilities in the PRD  
    * SWAD is created with the received SWRDs  
    * SV\&V decomposes SWRDs into SCRDs as necessary (based on the SWAD)  
    * \[On the side\] Definition of SBRD /  TPID and inclusion as acceptance criteria in PRD  
  * Proposed workflow for change request management for requirements  
* Action items and next steps (see below for action items)

Action items

- [ ] [Wendi Zhao](mailto:wendi.zhao@woven-planet.global) Check with [Jojiro Tani](mailto:jojiro.tani@woven-planet.global)\-san how to get ODD for each URD ([thread](https://woven-by-toyota.slack.com/archives/C09U6UD1N7K/p1769196491021179?thread_ts=1768558397.549479&cid=C09U6UD1N7K)) (road condition/weather condition/country of operation/time of day, etc)

	Answer: All URD, SWRD follow the same ODD requirement. For Mass Production, it’s defined in page 10 in [PP-BEV\_Step3\_AD\_GEN-01-00 en-US.pdf](https://drive.google.com/file/d/1TGWRgqke7b5sOM5FnEfoDs8cKzzD12PD/view?usp=sharing)  
		Request: Scoped ODD for each feature should be included PRD

- [ ] [Julia Pralle](mailto:julia.pralle@woven-planet.global)to check in with [Philip Tsai](mailto:philip.tsai@woven-planet.global)on current status of SWADs 

      [Design: IP Application Configurations](https://docs.google.com/document/d/1L2ILtAsIsPVZPkuyMruAUqXO_ePamGaJTfW755eDWQM/edit?usp=sharing)

- [ ] [Wei Wei](mailto:wei.wei@woven-planet.global) Review PRD process with S\&Q  
- [ ] [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global), [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global), and SV\&V: Create a smaller SBRD structure that uses synthetic sim scenes as a proof of concept  
- [ ] [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) Follow up with S\&Q ([Clifton Castelino](mailto:clifton.castelino@woven-planet.global)) about traceability and report generation for SWQT unit testing  
- [ ] [Ryan Faries](mailto:ryan.faries@woven-planet.global) and [Julia Pralle](mailto:julia.pralle@woven-planet.global) Setup new JIRA Structure (similar to [this](https://jira.tri-ad.tech/secure/StructureBoard.jspa?s=314#)) for requirement change requests  
- [ ] **\[By CG\]** Create something like [this](https://docs.google.com/spreadsheets/d/1p4WxltJvo-u3PqxDgQJI_SeusjTTe4CVXcTkgFcpTv8/edit?usp=sharing) for tracking acceptance of requirements from developers  
- [ ] [Hannah Lane](mailto:hannah.lane@woven-planet.global) and [Andrea Zotelli](mailto:andrea.zotelli@woven-planet.global) Set up JAMA structure  
- [ ] [Hayao Joji](mailto:hayao.joji@woven-planet.global)\-san and [Nithin Kashyap](mailto:nithin.kashyap@woven-planet.global) to create workflow block diagrams in conjunction with [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global)  
- [ ] [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) to confirm correct terminology in workflow block diagram  
- [ ] [Julia Pralle](mailto:julia.pralle@woven-planet.global) Exploratory work with contractors on how to automate requirement intake  
- [ ] [Nick Carcione](mailto:nicholas.carcione@woven-planet.global) / [Sanjiv Valsan](mailto:sanjiv.valsan@woven-planet.global) add summary table / workflow to Confluence

# References

* \[Placeholder\] PdM \<\> Systems Workshop \- Requirement Strategy Meeting on Monday, February 2⋅7:00 – 8:30pm EST  
  * Meeting Recording: [\[Placeholder\] PdM \<\> Systems Workshop - Requirement Strategy - 2026/02/02 15:55 PST - Recording](https://drive.google.com/file/d/1TmACVO6V_gZ1Euu6WpU0wiG-euOH0Qzv/view?usp=sharing)  
      
* \[Placeholder\] PdM \<\> Systems Workshop \- Updating Requirements on Tuesday, February 3⋅5:00 – 5:30pm EST  
  * [\[Placeholder\] PdM \<\> Systems Workshop - Updating Requirements - 2026/02/03 14:00 PST - Recording](https://drive.google.com/file/d/1SrO3rih7sjVa_JOPDqVi9Fspi_MRoR6x/view?usp=drive_web)

* \[Placeholder\] PdM \<\> Systems Workshop \- V\&V Strategy on Tuesday, February 3⋅6:30 – 8:00pm EST  
  * [\[Placeholder\] PdM \<\> Systems Workshop - V\&V Strategy - 2026/02/03 15:25 PST - Recording](https://drive.google.com/file/d/1-zneR1dzT40OuqPdrtubWaTA-QfeXEjn/view?usp=drive_web)  
  * Workflow and responsibility Lucid Chart: [LINK](https://lucid.app/lucidspark/d63ae10f-e3ff-4fd8-9063-87ec0f8ed27a/edit?invitationId=inv_ccc209cc-a9be-4e62-956d-a4ac9c85b84d&page=0_0#)

* \[Placeholder\] PdM \<\> Systems Workshop \- Workflow and Feedback Loop on Wednesday, February 4⋅4:30 – 5:30pm EST  
  * [\[Placeholder\] PdM \<\> Systems Workshop - Workflow and Feedback Loop - 2026/02/04 13:30 PST - Recording](https://drive.google.com/file/d/1nf2LNM2qI28cODCieaqsjaZRXvQBcaZt/view?usp=drive_web)

[\[Placeholder\] PdM \<\> SE Workshop Overflow Topics Hold - 2026/02/05 16:30 PST - Notes by Gemini](https://docs.google.com/document/d/1HgsxqkqBRZheIdnLxu29LnuyyFvJzueh5FV0kbhqVZM/edit?tab=t.jun7abrjm3e1)  
[\[Placeholder\] PdM \<\> Systems Workshop - V\&V Strategy - 2026/02/03 15:25 PST - Notes by Gemini](https://docs.google.com/document/d/1v6lC8fSbE_G5PUWuNW0afNOIdJ7wCTZGaCP-fsK0Stw/edit?tab=t.1dqpc49oob5e)

[