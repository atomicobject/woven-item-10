# Contributor Brief: Relevance to Atomic Object Project

**Sources:**
- [[2024-02-06 Contributor Brief Onboarding Video]]
- [[2026-02-05 Systems Workshop - Wrap Up- Transcript]] (PdM ↔ Systems Workshop Wrap Up, Feb 2026)

**Project:** [[Atomic Object-Project Details]]

---

## 1. PRs as a Primary Input — Understanding the PR Lifecycle

The SOW lists **Code PRs** as a key input. The onboarding video gives the exact mechanics of how PRs work at Woven: single-commit, trunk-based, forked workflow, reviewed in Reviewable (not GitHub's native UI), with feature + platform review gates. Any agent that "combs" PRs needs to understand this lifecycle — particularly that the meaningful unit of change is a single squashed commit, not a branch history.

Epic 2 explicitly calls out flagging PRs that propose architectural changes. To do that, tooling needs to hook into the PR flow described in the onboarding video.

## 2. Bazel Monorepo Structure — Starting Point for Architecture Extraction

The codebase is a **Bazel** project (`WORKSPACE` file is the root build file). For Epic 2 (building architecture diagrams from the codebase), this is significant. Bazel's `BUILD` files and its dependency graph are a natural, machine-readable source for architectural structure. Agents don't need to reverse-engineer architecture purely from source code — Bazel already encodes the dependency relationships.

## 3. Trunk-Based Development — Simplifies Change Detection

Everything lands on a **single master branch**. There are no release branches or long-lived feature branches.

- **Epic 1 (requirements):** Change detection can focus on a single branch. No need to reconcile changes across multiple release lines.
- **Epic 2 (architecture):** The dynamic diagram only needs to track one branch. Every merge to master is a potential architecture change point.

## 4. Daily Tags and DRBs — Natural Version Boundaries

The video describes a **daily tagging cadence** from master. Epic 2 requires "every time the diagram changes, a new version should be created." The existing daily tag system provides natural version snapshots — rather than inventing new versioning, architecture diagram versions could align with existing DRB tags.

## 5. Jira Integration Pattern — Traceability Hooks Already Exist

Commit messages reference **Jira tickets**, and Jira tickets are auto-generated from field disengagements and memos. The requirements traceability work (Epic 1) can leverage this existing linkage. The path from requirement -> Jira ticket -> commit message -> PR -> merged code is partially wired already. The tooling fills the gap of formalizing that chain into JAMA.

## 6. GitHub Enterprise + Stargate Access Model

The repo lives on **GitHub Enterprise** (not github.com), accessed through the **Stargate portal**. Any CLI tools or agents need to authenticate against this infrastructure. The fork-based model also means tooling needs to distinguish between upstream (the real repo) and contributor forks when scanning PRs.

## 7. The Wiki as the Documentation Hub

The SOW lists "Docs on GIT" as an input source. The video confirms the **repo wiki is the master index** for all team documentation. Agents that ingest documentation should target this wiki as a primary source alongside Google Docs, Confluence, and JAMA.

## 8. The Change Management Gap — Validates the Need

The onboarding video describes **no formal change log, change management process, or requirements traceability**. Changes flow through PRs and reviews, but there's no structured artifact trail connecting requirements to code to tests. The SOW for Epic 1 calls out "change management (detection)" and "version control and traceability" as explicit needs. The video confirms the gap this project exists to fill.

## 9. Systems Workshop (Feb 2026) — Workflow and Automation Context

The **PdM ↔ Systems Workshop Wrap Up** transcript aligns workshop outcomes with the AO project and clarifies where tooling must plug in:

- **URD → SCRD workflow and decomposition:** The workshop agreed on a structure (SYAD, SWAD, requirement/architecture levels from URD down to SCRD), with a **table** covering: requirement/architecture level, where it’s stored, owning team, how it’s validated, who validates, where test plans live, which repo is validated, and how. That table is intended as the **source of truth** and is being documented on **Confluence**. Epic 1 (requirements in JAMA) and Epic 2 (architecture diagram) need to align with this hierarchy and with where artifacts actually live (e.g. PRDs, JAMA, Confluence).

- **Change request management:** There is a **weekly meeting** for change requests; the team is creating a **new JAMA structure for requirement change requests** (Ryan/Julia). Epic 1’s “change management (detection)” and “linkage to original requirements source” should support this process—e.g. notifying when sources change and keeping JAMA in sync.

- **JAMA structure for SWRs and below:** Hannah/Andrea are leading setup of **JAMA structure for all SWRs and below**. Epic 1’s requirement intake and JAMA integration should align with this structure so generated or updated requirements land in the right containers and levels.

- **Traceability and reporting:** Follow-up with SNQ on **traceability and report generation for SMQT unit testing** (cadence and report format) was noted. Epic 1 (traceability) and Epic 3 (test–requirement traceability, if in scope) should be aware of existing traceability/report expectations so tooling can complement or feed them.

- **Contractor explorative project:** The wrap-up explicitly calls out the **explorative project with contractors** to **automate requirement intake from different sources** (starting shortly after the workshop). That is the Atomic Object systems-engineering tooling work. The workshop context (URD→SCRD table, Confluence plan, JAMA structures, change request process) defines the environment this automation must support.

- **PRDs and ODDs:** Scope/ODD per feature should be in the PRD; PRD timelines and first drafts were agreed. Requirement-generation tooling (Epic 1) should treat PRDs and linked docs as key inputs, consistent with the SOW’s “Google docs” and “Docs on GIT” and with the workshop’s emphasis on PRDs as the vehicle for requirements and scope.

---

## Lower Priority (But Worth Knowing)

- **Reviewable's revision tracking** (R1, R2, etc.) could be metadata the tools consume, but it's a detail for later.
- **The test infrastructure** (pre-merge, nightly, OpenLoopLogReplay) is relevant only if the project reaches Phase 3 / Epic 3 (test-requirement traceability).
- **The vSpirit Slack channel** is a resource for asking questions about repo structure or CI behavior.
