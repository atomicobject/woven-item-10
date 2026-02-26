# Woven / Toyota Requirements, Architecture, V&V, and Process Glossary

This file collects the key **requirements / architecture / V&V** terms plus the main
**process / governance** terms in one place.

---

## Requirements levels

### URD – User Requirement Definition

URDs are top‑level, vehicle/user‑focused requirements that describe what the driver,
occupants, and vehicle as a whole need (for example, “lane keeping shall keep the
vehicle centered within lane boundaries under conditions X/Y/Z”). They’re typically
authored and owned on the TMC/CA side and managed in JAMA, and they drive both the
downstream system requirements (SYRD) and high‑level system qualification tests
(SYQT). In practice, URDs are the main reference when discussing “are we solving the
right user problem?” and they are a key input to audits and quality gates at the
vehicle level.

### SYRD – System Requirement Definition

SYRDs translate URD intent into concrete system/ECU requirements: signal‑level
behavior, fault handling, performance targets, and cross‑ECU interactions. They are
often maintained in JAMA by CA/TMC and act as the contract between vehicle‑level
expectations and the system architecture described in SYAD. SYRDs are referenced
heavily when building system‑level test plans (SYIT/SYQT) and when tracing whether
all user‑level scenarios are actually covered by system functions and tests.

### SWRD – Software Requirement Definition

SWRDs define software‑level functional requirements at the **SWC Group (SWCGr)**
level (for example, BehaviorContext, LaMP, LoMP, Controller groups), usually
written by CA and delivered into the IP side for implementation. They break down
SYRD content into what each SWC group must do: inputs/outputs, modes, timing, and
some performance constraints. SWRDs are a central artifact for traceability because
downstream architecture (SWAD), component requirements (SCRD), and qualification
tests (SWQT) all need to map back to specific SWRD items.

### SCRD – Software Component Requirement Definition

SCRDs take one slice of an SWRD and allocate it to a single **Software Component
(SWC)**. They describe what that component must do in enough detail that you can
derive testable acceptance criteria, often including functional behavior,
constraints, error handling, and interfaces. In the Core Process Chart, SCRD is
explicitly defined as “define software component requirements based on Software
Requirements Definition and Software Architectural Design,” and it is the main
reference for SCQT plans and pass/fail criteria.

### SBRD – System Behavior Requirement Definition

SBRD is used (still somewhat WIP) to capture higher‑level behavioral requirements
that span multiple SWCGrs and even multiple systems, especially around “ego
behavior” and performance (for example, lane borrowing, VRU handling, decision
logic). In practice, SBRD sits above SWRD: it describes behavior scenarios and
performance expectations, which are then decomposed into SWRD requirements per
SWCGr and further into SCRDs per SWC. It’s becoming the place where complex,
multi‑component behavior (for example, Ego Intent features) is reasoned about
before being pushed into SWRD/SCRD matrices.

---

## Architecture & design

### SYAD – System Architecture Design

SYAD defines the system‑level architecture: which ECUs, which applications, how
they communicate, and how responsibilities are divided across the vehicle system.
It is closely tied to SYRD (requirements) and to SYIT/SYQT (system‑level tests),
and is often managed on the CA/TMC side in JAMA or equivalent system‑architecture
tools. For Woven, SYAD is effectively the “box‑and‑arrow” view that constrains
what IP software is allowed to assume about upstream/downstream systems,
interfaces, and evaluation environments.

### SWAD – Software Architecture Design

SWAD describes the internal architecture of a **Software Component Group (SWCGr)**:
what SWCs exist, how they interact, what their interfaces and rates are, and how
they map onto the overall logical architecture. SWAD documents are also where we
describe internal data flows, timing assumptions, and resource usage for the
group. In BEV S3, SWAD is tightly linked to vLink interface definitions and to the
SWC decomposition that later yields SCRD, SCAD, and SUD design work; it’s also a
major reference when planning SWIT (software integration testing).

### SCAD – Software Component Architecture Design

SCAD zooms in one level further, describing the architecture of a single SWC: its
internal sub‑components and units, internal data flows, error handling strategies,
and how it realizes its SCRD requirements. The Core Process Chart defines SCAD as
“define software components, interfaces, and dynamic behavior,” and requires
bidirectional traceability with SCRD and higher‑level software architecture. For
IP teams, SCAD is typically where you decide the decomposition into units (SUD),
define key class/sequence diagrams, and specify any safety‑related design
patterns that must later be verified in SUD/SUT and SCIT/SCQT.

---

## Test / V&V levels and implementation

### V&V – Verification and Validation

**Verification** asks “Did we build it right?” and focuses on checking that the
implementation and design meet the specified requirements (for example, reviews,
static analysis, unit tests, SCQT/SWQT). **Validation** asks “Did we build the
right thing?” and focuses on whether the integrated system meets user‑level and
system‑level requirements (URD/SYRD), usually via SYQT, SILS/HILS, and vehicle
evaluations. Across BEV/AD‑ADAS, V&V activities are structured along the URD →
SYRD → SWRD → SCRD → SUD chain so that every requirement has a corresponding test
and piece of evidence.

### SYQT – System Qualification Test

SYQT is the top‑level system test activity that checks whether URD and SYRD are
fully satisfied at the integrated system/vehicle level. The Core Process Chart
describes SYQT as defining system‑level test cases (including non‑functional ones
like latency and resource use), executing them in appropriate environments, and
ensuring bidirectional traceability back to requirements. In BEV, SYQT typically
covers closed SILS/HILS and on‑vehicle campaigns, and is a major mass‑production
gate owned on the CA/TMC side but heavily influenced by IP behavior and quality.

### SWQT – Software Qualification Test

SWQT verifies that the software as a whole (per SWRD) behaves correctly once all
SWCs in a group are integrated, usually in SILS/HILS environments before or
alongside system tests. The process includes defining qualification test policies,
deriving test cases from SWRD, executing them, and recording results with clear
traceability to requirements. In BEV S3, SWQT is a key place where IP teams
demonstrate that SWC groups meet expectations before handover to system‑level
evaluation and is explicitly called out as one of the work products managed under
configuration management.

### SCQT – Software Component Qualification Test

SCQT evaluates a single SWC against its SCRD, ensuring each requirement is met by
targeted component‑level tests. In the Core Process Chart, SCQT is defined as
establishing a test policy, preparing SCQT specifications, executing tests (often
both SILS and ECU), and confirming results with stakeholders. SCQT is a crucial
link in the traceability chain from SCRD through implementation to test evidence,
and it often feeds into both SWQT (group‑level behavior) and SYQT (system‑level
evidence packages).

### SCIT – Software Component Integration Test

SCIT is integration testing **within a single SWC’s scope**, integrating internal
elements (units, sub‑modules) at an appropriate granularity and verifying that the
behavior defined in SCAD works correctly. It includes defining an integration test
policy, preparing SC integration test specifications, running tests, and
documenting results agreed with stakeholders. SCIT typically sits between SUT
(unit tests) and SWIT (higher‑level integration tests).

### SWIT – Software Integration Test

SWIT validates integration within the software layer (for example, between SWCs
and SWCGrs) according to SWAD, focusing on whether components integrate and
interact correctly before full SWQT and system‑level tests. It is typically
executed in SILS/HILS environments and uses evaluation patterns and environments
prepared specifically for integrated software testing. SWIT results help catch
interface, timing, and resource‑use issues early, reducing churn later during
SWQT and SYIT/SYQT campaigns.

### SYIT – System Integration Test

SYIT covers integration of multiple systems and ECUs at the vehicle level,
focusing on whether system interfaces, timing, and interactions match the SYAD
architecture before or alongside SYQT. It uses patterns derived from SYRD/SYAD
and often runs in SILS/HILS and prototype‑vehicle environments. SYIT is especially
important when new ECUs or domain controllers are introduced, as it verifies that
all cross‑domain and cross‑controller behaviors work as intended before full
qualification and vehicle evaluations.

### SUD – Software Unit Design

SUD captures detailed design for the smallest testable pieces of software inside
an SWC: units, functions, or classes. It typically includes pseudo‑code,
flowcharts, state diagrams, and information needed to implement and unit‑test the
logic. In Woven’s process, SUD is a formal work product that should be traceable
to SCRD/SWAD and used as a reference for SUT (unit tests) and coverage targets;
it’s also often where FuSa‑related design considerations for safety‑critical logic
are spelled out.

### SUI – Software Unit Implementation

SUI is the actual implementation of those units (source code or model artifacts),
along with static analysis and code review results. In the TCW and BEV processes,
SUI is treated as a managed artifact: subject to coding standards, static
analysis, coverage analysis, and configuration‑management rules. Traceability
should link each SUI element back to SUD, SCRD/SWAD, and forward to SUT/SCIT
evidence so audits can confirm that every requirement is correctly implemented and
tested.

### SUT – Software Unit Test

SUT refers to unit‑level tests verifying the behavior of individual units defined
in SUD and implemented in SUI. These tests target functional correctness and
coverage (often MC/DC or similar) and are run in environments ranging from host
simulators to microcontroller‑level harnesses. In the OneTeam/Core Process
materials, SUT is a required V&V work product, and its results are later rolled up
into SCIT/SCQT and SWIT/SWQT metrics to demonstrate adequate coverage and defect
containment.

---

## Structural software terms

### SWC – Software Component

An SWC is the fundamental modular software unit in this process: a group of
functions whose public interface needs to be shared, that maps 1:1 to a logical
subsystem, and that has a clearly identified owning team. SWCs are where
SCRD/SCAD/SUD/SUI/SUT/SCQT/SCIT all converge, and they show up explicitly in
responsibility matrices and quality dashboards (for example, SWC‑level review
rates, defect densities). Having clean SWC boundaries is critical for vLink
interface management, traceability, and clear DRIs for design and test.

### SWCGr – Software Component Group

An SWCGr is a logical grouping of related SWCs that together implement a larger
functional block (for example, a Planner group, a Controller group). Requirements
at this level are captured in SWRDs, and tests at this level are SWQT/SWIT; the
group is often the unit of delivery and responsibility between CA and IP. In BEV
S3 materials, SWCGr is also the level where PIC/DRI roles are often defined, and
where architecture (SWAD) shows how multiple SWCs collaborate to fulfill SWRD
behavior and interfaces.

---

## Process / governance terms (CPC, WCPC, etc.)

### CPC – Core Process Chart

The **Core Process Chart (CPC)** is the standard software‑development process for
BEV/AD‑ADAS. For each process (for example, URD, SYRD, SWRD, SCRD, SUD, SUT, SWIT,
SYIT), it defines the purpose, input work products, process tasks, outputs, and
exit criteria. Teams are expected to develop “according to CPC,” and CPC audits
check that real development and evidence (reviews, tests, traceability,
configuration management, and so on) actually match the chart.

### WCPC – Woven by Toyota Core Process Chart

**WCPC** is the company‑wide core process for QMS documentation and serves as the
standard process model for vehicle‑embedded software at Woven by Toyota. It
defines terminology, the process model, tailoring rules, and process‑audit
expectations; AD/ADAS CPCs are effectively “plug‑ins” or specializations of the
WCPC for the AD/ADAS domain.

### PI – Project Initiation

The **Project Initiation (PI)** process defines how a project is kicked off:
clarifying purpose and product scope, defining the master schedule and quality
goals, confirming feasibility, establishing roles and responsibilities, and
setting policies for progress, configuration management, problem resolution, and
test. A well‑run PI phase creates the baseline plan that later PMC and QA
activities monitor against.

### PMC – Project Monitor and Control

**PMC** is about ongoing progress and risk management: collecting progress
information, adjusting plans with stakeholders when needed, tracking risk lists,
and updating the project plan as reality changes. It also monitors problem and
change‑request management status so that issues do not stall development. In
audits, PMC evidence often includes status dashboards, risk lists, and meeting
notes that show how deviations from plan were handled.

### QA – Quality Assurance

The **QA** process independently checks that work products and processes follow
defined standards and plans, and that non‑conformities are identified, tracked,
and resolved. It covers defining QA scope and criteria, performing audits and
reviews, and sharing audit reports and escalation paths with stakeholders. QA
provides an independent view of whether the team is actually following WCPC/CPC
and whether corrective actions are effective.

### CM – Configuration Management

**Configuration Management (CM)** ensures that all work products are versioned,
traceable, and properly baselined. It covers deciding CM responsibility, tools,
what artifacts are under CM, repository usage rules (branch/merge, status,
history), and long‑term storage. Correct baselines are explicit exit criteria in
the Core Process Chart, and CM records are a common focus area in process audits.

### PRM – Problem Resolution Management

**Problem Resolution Management (PRM)** is the process for tracking and resolving
issues that arise during development (typically via Jira or similar tools). It
covers identifying problems, analyzing cause and impact, setting priorities,
executing resolutions, and closing them with records kept. If a resolution has
external impact on requirements or architecture, PRM explicitly triggers the
change‑request process (CRM) so that upstream documents remain consistent.

### CRM – Change Request Management

**Change Request Management (CRM)** handles changes to requirements and designs:
registering change requests, analyzing their impact, deciding whether to
implement them, and tracking through to closure. A dedicated change‑management
body must approve changes based on impact analysis and available resources, with
status tracked and recorded. CRM is especially important for URD/SYRD/SWRD/SCRD
changes where traceability and re‑testing must be preserved.

### SPM – Software Procurement / Supply Management

**SPM** governs software that comes from outside the team (in‑house suppliers,
OSS, COTS, and so on). It defines how to agree with suppliers on interfaces,
responsibilities, acceptance‑test criteria, and how issues are handled, and it
requires acceptance tests and records of supplier QA activities before taking such
software into the product. For AD/ADAS, SPM is key when integrating external
perception, mapping, or tooling components.

### RW – Review Work products

**Review Work products (RW)** covers structured reviews of artifacts (requirements,
designs, tests, code, and so on). It defines review purpose, scope, viewpoints
(often via checklists), methods (inspection, pass‑around), participant roles, and
how findings are recorded and tracked to closure. Review records themselves are
required work products under CPC and are frequently sampled during audits to check
review effectiveness.

### A2MS – Audit and Assessment Management System

**A2MS** is the system/process used for process audits and assessments under
WCPC. WCPC calls out A2MS explicitly as the reference for conducting process
audits and differentiating them from gap analyses in the QMS context. It
standardizes how audits are requested, planned, executed, and documented.

### GPE – Global Process Engineering

**Global Process Engineering (GPE)** is the organization responsible for standard
engineering processes (WCPC and AD/ADAS OneTeam CPC), guidelines, and process
tailoring/gap‑analysis support. They maintain CPC versions, help teams tailor the
process, and provide process‑compliance maturity assessments and traceability
support, especially for BEV and AD/ADAS teams preparing for audits.

### WPPC‑Tools – Woven by Toyota Plug‑in Process Chart for Tools

**WPPC‑Tools** is a plug‑in process that extends WCPC specifically for
tool‑software development. While WCPC focuses mainly on the “Development” stage of
the product lifecycle, WPPC‑Tools adds processes to cover the full tool lifecycle
(Concept → Development → Production → Utilization & Support → Retirement) when
teams are building internal tools rather than vehicle‑embedded software itself.


# Woven / Toyota Requirements & V&V “Ladder” Diagram

This is a conceptual ladder from **user needs** down to **code & tests**, with
the **test chain** shown alongside.

---

## 1. Top: User & System

### Requirements / Design

- **URD – User Requirement Definition**  
  What the driver/vehicle needs at a user/vehicle level.

- **SYRD – System Requirement Definition**  
  System/ECU‑level requirements derived from URD.

- **SYAD – System Architecture Design**  
  System/ECU structure and interfaces that realize SYRD.

### Test / V&V

- **SYIT – System Integration Test**  
  Integrate ECUs/systems and check SYAD behavior.

- **SYQT – System Qualification Test**  
  Validate that URD and SYRD are satisfied at system/vehicle level.

---

## 2. Middle: Software Group (SWC Group)

### Requirements / Design

- **SBRD – System Behavior Requirement Definition**  
  Cross‑system behavior and performance (multi‑SWCGr, multi‑system).

- **SWRD – Software Requirement Definition**  
  Requirements for a **Software Component Group (SWCGr)**.

- **SWAD – Software Architecture Design**  
  Architecture inside the SWCGr (which SWCs, interfaces, rates).

### Test / V&V

- **SWIT – Software Integration Test**  
  Integration of SWCs/SWCGrs according to SWAD.

- **SWQT – Software Qualification Test**  
  Qualify the SWCGr against SWRD.

---

## 3. Lower: Software Component

### Requirements / Design

- **SCRD – Software Component Requirement Definition**  
  Requirements allocated to a single **SWC**.

- **SCAD – Software Component Architecture Design**  
  Internal architecture of that SWC (sub‑parts, data flows).

### Test / V&V

- **SCIT – Software Component Integration Test**  
  Integration of internal elements of the SWC per SCAD.

- **SCQT – Software Component Qualification Test**  
  Qualify the SWC against SCRD.

---

## 4. Bottom: Software Units (Code & Unit Tests)

### Requirements / Design / Code

- **SUD – Software Unit Design**  
  Detailed design of units/functions inside the SWC.

- **SUI – Software Unit Implementation**  
  Code/models implementing SUD.

### Test / V&V

- **SUT – Software Unit Test**  
  Unit‑level tests verifying SUD/SUI.

---

## 5. “One‑line” Ladder View

From top to bottom (requirements & design):

URD  
→ SYRD  
→ SYAD  
→ (SBRD)  
→ SWRD  
→ SWAD  
→ SCRD  
→ SCAD  
→ SUD  
→ SUI  

From bottom to top (main V&V evidence):

SUT  
→ SCIT  
→ SCQT  
→ SWIT  
→ SWQT  
→ SYIT  
→ SYQT  