# Contributor Brief: Onboarding Video — Summary

**Date:** 2024-02-06
**Presenter:** Bryant Hampton (Speaker 1)
**Participants:** Melissa (Speaker 2), Kristina (Speaker 4), Hanna (Speaker 5), unnamed attendee (Speaker 3)
**Topic:** Development workflow, Git conventions, CI/CD pipeline, and code review process for the TMC Driving repository at Woven
**Source:** [[2024-02-06 Contributor Brief Onboarding Video]]

---

## Trunk-Based Development

We test our robots on public roads, which means we should work hard to put our best code out. "Best code" means the most-tested code — the code we've spent the most money on in SIM testing, vehicle testing, and human review time.

The more branches you have, the more you split your testing across them. So we develop everything on a **single main branch**. Everyone contributes to it as quickly as they can.

- **No release maintenance branches.** Everything goes on main, and that's what we test from.
- **No feature branches.** Large features are merged incrementally in small PRs with the feature turned off by default. It can be enabled for simulation or closed-course testing, and eventually turned on for everyone.
- **Always drive the most recent code** because it has the most bug fixes and features.

This is commonly called **trunk development**.

## Forked Development Workflow

Each contributor opens their own **fork** of the repository. This keeps the main repository clean — only short-lived branches like demo branches exist there.

### Remote Naming

When you `git clone` from your fork, your local machine labels it `origin`. You then configure a second remote called `upstream`, which points to the shared TMC Driving repository where all the action happens.

| Remote     | Points to                      | Used for                       |
| ---------- | ------------------------------ | ------------------------------ |
| `origin`   | Your personal fork             | Pushing branches               |
| `upstream` | `TMC-Driving/driving` (shared) | Fetching latest code, PR target |

### Day-to-Day Flow

1. **Fetch** from upstream to get the latest code.
2. **Create a branch** locally for your work.
3. **Push** the branch to your fork (`origin`).
4. **Open a pull request** from your fork into upstream master via GitHub.

---

## CI/CD Pipeline

### Continuous Integration (CI)

Every pull request triggers an **automated review**:

- The system checks out the branch, builds it, runs all unit tests, and executes pre-merge tests (simulation checks, static analysis, etc.).
- ~10–12 computing hours of tests are compressed into **~1 hour** for pre-merge.

Simultaneously, **human reviews** happen in parallel:

| Reviewer          | Focus                                                                 |
| ----------------- | --------------------------------------------------------------------- |
| **Feature reviewer**  | Code correctness — does it do what the Jira ticket says?              |
| **Platform reviewer** | Style guide conformance, safety (pointers, threads), maintainability |

After merge to master, **pre-merge runs again** to catch ordering/dependency issues.

### Post-Merge Testing

Each day a **tag** is cut from master. That tag goes through:

- **Nightly tests** — ~8 days of compute compressed into ~4 hours across hundreds of AWS nodes. Results are reviewed by automated scripts and by a human.
- **OpenLoopLogReplay** — Real sensor data from road missions is replayed on identical hardware. The system checks whether the output trajectory matches what was produced in real time on the road. Mismatches are flagged as failures.

### Continuous Deployment (CD)

Assuming all tests pass:

1. A **Daily Release Build (DRB)** is produced.
2. Vehicle operations loads the DRB onto a physical vehicle and runs a **closed-course test script** — lead-car following, cut-ins/cut-outs, traffic lights, route following, etc.
3. Results feed into an **automated log review system** (Python-based).
4. An **approved DRB** is cleared for field ops to load onto any vehicle for regular driving.

### Closing the Loop

Vehicles drive in Michigan, Mountain View/Palo Alto, and Japan. Log data is ingested, and automated processes run against it:

- Every **disengagement** or **operator memo** generates a Jira ticket.
- Metrics are extracted from those tickets.
- Bugs produce a log snippet that can be committed alongside the fix in a single PR.
- That snippet is added to **nightly** so it reruns every day going forward.

### Fleet Testing Cadence

| Track                    | Target                                      |
| ------------------------ | ------------------------------------------- |
| Daily Release Builds     | At least 60 km/week                         |
| Production Release (prod)| One DRB selected weekly, gets extra 150 km  |
| Integration test branches| Special feature tests run by FOPS on request |

---

## Git Workflow (Live Demo)

### Setting Up Access

- The **Stargate portal** grants access to the repository.
- The **wiki** on the repo's main page is the master index for all documentation: installation, Git workflow, coding conventions, commit messages, review process.
- The **new installation** doc walks you from a fresh Linux (Ubuntu) machine through clone and build.
- On a Mac you can run the first few steps to set up GitHub credentials and browse the code, but the full build is Linux-only.

### Creating a Branch

```bash
git checkout -b my-branch-name upstream/master
```

This creates the branch *and* tells Git to track `upstream/master` as the base. Branch naming is up to you — Jira ticket numbers, plain English, dates, whatever works.

### Making Changes and Committing

```bash
# Edit files, then stage them
git add <file>

# Commit with a well-formed message
git commit
```

**Commit message format:**

- **Line 1 (required):** Imperative clause summary, no punctuation. Think "This commit will ___."
  - Example: `Update the workspace documentation`
- **Blank line**
- **Body (optional):** Full English sentences, lists, details. Reference Jira tickets here to auto-link them.

### Pushing and Creating a Pull Request

```bash
git push origin
```

GitHub shows a yellow banner with a green "Compare & pull request" button. The PR targets `upstream/master`. Review the commit message and diff, then create the PR.

> **Caution:** Editing the commit message in the GitHub PR UI does *not* change the actual commit on your machine. To fix it, amend locally and re-push.

### Single-Commit PRs

We want one clean commit per PR. If the reviewer requests changes:

```bash
# Fix the code, then stage and amend
git add <file>
git commit --amend
```

This overwrites the previous commit so you still have a single commit on the branch. If you end up with multiple commits, use `git rebase -i` or `git squash` to combine them before pushing.

The platform reviewer will ask you to squash if you push multiple commits. Auto-squash on merge is disabled to preserve the rare case where multiple commits are intentional.

### Staying Up to Date with Upstream

```bash
git fetch upstream
git rebase upstream/master
```

- `git fetch upstream` downloads new commits without merging.
- `git rebase upstream/master` replays your commit(s) on top of the latest master.
- We **avoid `git pull`** because it creates merge commits, which are hard to read.

After amending and/or rebasing, a normal push will be rejected. Use force push since this is your personal fork:

```bash
git push -f origin
```

### Preventing Accidental Pushes to Upstream

The new installation guide configures your upstream push URL to `no_push`, so `git push upstream` is rejected locally before it even hits the server. Two layers of protection: local Git config and GitHub Enterprise permissions.

---

## Code Review with Reviewable

We use **Reviewable** instead of GitHub's built-in review UI. It integrates via a purple button on the GitHub PR page.

### The Status Bar

Reviewable provides a **single-line, information-dense summary** of the PR:

- Author
- PR summary
- **Checks** (expandable): conflict check, review status, CI status
- **Changes**: list of updated files
- **Unreviewed**: count of files not yet reviewed (commit message counts as a file)
- **Unresolved discussions**: count of open threads
- **Drafts**: comments you're composing but haven't published

### Red Boxes

Red boxes indicate **action items for you**. Click a red box to jump directly to what needs your attention.

### Review Workflow

**As the author:**

1. Type `+@username` in the main review discussion to assign a **feature reviewer**.
2. Hit **Publish** to notify them.
3. When the reviewer leaves comments, address each one in code.
4. Use `git commit --amend` and `git push -f origin` to update.
5. Click **Done** on resolved comments, then **Publish**.
6. After feature LGTM, add the label `ready for platform review` (type `+` then start typing `ready`).

**As the reviewer:**

1. Red boxes appear at the top — click to jump to items needing review.
2. Click the red circle after reviewing each file to mark it seen.
3. Leave **blocking comments** by clicking on code and typing feedback.
4. Click **Resolve** to unblock a discussion thread.
5. Click the **LGTM** icon (types `:lgtm:`) and **Publish** to approve.

### Revision Tracking

When the author pushes updates, Reviewable creates a new revision column (R1, R2, etc.). Reviewers can diff between revisions to see only what changed since their last review — one of the most-loved features.

### Comment Keywords

| Keyword   | Effect                                     |
| --------- | ------------------------------------------ |
| `FYI`     | Non-blocking informational comment         |
| `minor` / `nit` | Minor issue, fix if convenient        |
| `LGTM`    | Looks Good To Me — approval stamp          |
| `done`    | Author signals the feedback is addressed   |

Reviewable preserves drafts across sessions — if you lose your connection, your in-progress comments are saved when you return.

### Merging

Once all checks are green (conflict, review, CI), the Publish button changes to **Merge**. Hold it for three seconds to arm, then it merges to master.

### Platform Review Rotation

A rotation of engineers is on **platform review duty**. They watch for the `ready for platform review` label, claim the review, and provide feedback focused on style guides, code readability, and long-term maintainability. Author discretion is respected as long as style guides are met.

---

## Q&A Highlights

**Q: Do you assign the reviewer or does it auto-assign?**
You assign the reviewer yourself using the `+@username` command in Reviewable.

**Q: Do we really make a single commit even over several days?**
Yes. Use `git commit --amend` throughout, or squash at the end with `git rebase -i`. The platform reviewer will ask you to squash if you push multiple commits.

**Q: What happens if you push to upstream?**
The server rejects it. Your local Git config also blocks it (push URL set to `no_push`). Two layers of protection.

**Q: What does "dismiss discussions" do in Reviewable?**
It's rare and honor-system based. Normally only the reviewer who opened a discussion resolves it. You'd only dismiss someone else's discussion if they're on vacation and left explicit guidance.

**Q: Are the Reviewable keywords (`done`, `will do`) required?**
No strict requirement. `done` is a convention for speed. You can type any response, and the reviewer hits **Resolve** regardless of the wording.

---

## Key Resources

| Resource                       | Description                                               |
| ------------------------------ | --------------------------------------------------------- |
| **Stargate Portal**            | Grants access to the TMC Driving repository               |
| **Wiki (repo main page)**      | Master index for all documentation                        |
| **New Installation doc**       | Step-by-step setup from a fresh Linux machine             |
| **Git Workflow doc**           | Command reference — bookmark or print this                |
| **Coding Conventions doc**     | PR size guidance, language-specific style guides (C++, Python, etc.) |
| **Commit Messages doc**        | Formatting rules for commit messages                      |
| **vSpirit Slack channel**      | Vehicle Software Platform support — Git, PRs, CI, general code questions. Monitored across US time zones and Japan. |

---

## Next Steps

- Get Linux workstations provisioned and permissions set in the driving repo.
- Ensure all team members have correct GitHub Enterprise access (contributor group, not just read).
- Add everyone to the **vSpirit** and **integrations** Slack channels.
- Bookmark the **Git Workflow** wiki page and practice the fork/branch/PR cycle.
