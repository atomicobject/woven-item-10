---
id: s-TiAkfMr7s5rb
type: source
name: 2024-02-06 Contributor Brief Onboarding Video - Transcript.md
path: 2024-02-06 Contributor Brief Onboarding Video - Transcript.md
format: raw-transcript
topics: [general]
status: complete
ingestedAt: 2026-02-27T20:00:43.231Z
fileSize: 50163
extractedAssertionIds: [a-yPTQehv-rBAc, a-y1wCIoBUH5G8, a-kP6QgvnK_d3P, a-k3k1imvvGWHf, a-5d-Qt-sS1sWa, a-1dNN_nh-l_yE, a-LkVAPZVrKLja, a-j_A8usXk8h2u, a-ZKKglnOJ928W, a-zDK46HCoHcv1, a-09Cp-X9QKQun, a-RBHrS6pjc7RS]
---

# Contributor Brief: Onboarding Video — Full Transcript

**Date:** 2024-02-06

---

## Trunk-Based Development & Testing Philosophy

**Speaker 1** 00:00
Three years, so we'll just dive on in. Yeah, one of the weird things about developing software for the self-driving car is that we test our robots on public roads, which is an interesting place to test robots. So that means we should really work hard to put our best code out on the roads, and that brings up the question of what does "best" mean and how do you do it right.

So "best code" in this case means, you know, the code we've spent the most money on — whether that's sim testing in the cloud or vehicle testing out on the roads, you know, most human review time. Those are all things that lead to good code quality. So really, we're just saying it's the code that's the most tested.

And so one of the things we notice is that the more branches you have, the more you're splitting your testing amongst various different branches. So we don't do that much, right? We basically develop everything on a single branch and everyone contributes to that as quickly as they can. So that means we don't have release maintenance branches. Again, everything just goes on main and that's what we test from. So we basically always want to drive the most recent code because that has the most bug fixes and other features.

Speaking of features, we don't do feature branches, right? So if you're building a new feature that's massive, then we just say, all right, we'll merge each little part as it's completed in small pull requests and just have it turned off by default. And then we can of course turn it on for simulation testing or closed-course testing, make sure the feature works as we expect. And then one day we'll turn it on for the main branch and then everyone will get to see the new feature everywhere.

So that's the basics. There's a lot more details, of course, of this concept of how we're doing main development or trunk development, if you will. But that's the basic idea.

## Forked Development Workflow

**Speaker 1** (cont.)
So each person opens up their own fork, and this might be new. It depends on how you guys have done your repos before, but this particular brief was meant for new hires and they usually come from all kinds of backgrounds. So we try to just set the stage for the forked development environment.

This is GitHub's claim to fame, right? They love this concept of forking because they expect projects to have hundreds of contributors over many, many years. Ours is the same. We expect hundreds of contributors all at the same time across many years of development. So by creating the fork, you can have any branch you want in your fork and the main repository stays pretty clean, and we only have branches in there for short-lived things like demo branches or things like that.

So that means we have a nomenclature issue though, because when you do `git clone` from your fork, your local computer thinks that that's "origin." So Git automatically labels that "origin." So we have to then instruct your local Git client that we have another thing called "upstream," which is where all of the action is happening, right? So that's where we want to pull data from.

So the way the workflow works is: once you've done the fork and the clone, from then on you're going to make branches and do pull requests. So we do `fetch` from upstream so that you have the latest and greatest on your local workstation, and then you push branches to your fork, and then the GitHub website will manage all of the magic to do the pull requests and get it merged into upstream master, because that's where all the testing is going to happen.

## Continuous Integration & Continuous Deployment

**Speaker 1** (cont.)
Okay, so testing framework. I'll jump to this other presentation real quick to talk more about what we mean by this. In the more modern practices, the reason we like this single branch and small pull requests is it moves us into the world of continuous integration. So we want to minimize the integration point to the smallest possible unit. And by doing that, that means that we can continuously test every change that comes along. So that's basically what we're doing there.

And of course, continuous deployment is the other big keyword for, you know, rolling out your code to test and see how it works in the real world. So these are the two things that are happening. Typically we think of CD as like operations and CI as like infrastructure, but however you want to think about it, it's fine.

But on the CI front for continuous integration, we test every pull request. So after we push a code change to the branch and we hit the pull request button, we have automatic triggers that will go off and run what we call an automated review. Right? So the system will go check out the branch, build it, run all the unit tests, and run a whole smattering of pre-merge tests — which could be anything from simulation checks to linting checks to all kinds of wild stuff. So we've crammed about 10 to 12 computing hours of tests into about one hour for pre-merge.

And in the meantime, we're also doing human reviews. So we have a feature reviewer and a platform reviewer. The feature reviewer is looking for code correctness, I guess you'd say — does this thing do what the JIRA ticket said it should do, or is this conformed to how something like this should work. And the platform reviewer is more in line with the style guide conformance. If you're doing C++ code, it's like safety for pointers and threads and just like code maintainability, code readability — basically code maintenance, making sure the code is long-lived, stuff like that.

Assuming that all of that stuff passes, then we can merge this to master. And then we run pre-merge again, just to be sure. Because every once in a while, things can merge in a funny order and there's a dependency that we didn't notice during review. So we run pre-merge on everything that lands on master.

## Nightly Testing & OpenLoopLogReplay

**Speaker 1** (cont.)
Once it gets to master, that's where, you know, we do lots of other testing as well. So each day we take a tag of the master branch, and that tag gets run through a bunch of stuff. So we have this nightly test. It runs in parallel as well, but we also run it for every tag. And this lets us find issues, you know, throughout the day, or at least when the tag is finished being built.

And the nightly test is about eight days' worth of compute time that we cram into about four hours. So we massively parallelize nightly — many hundreds of nodes in AWS. And so that is a huge bucket of tests. And those tests are reviewed by a script and by a human to see if there are any failures.

In addition, we run a thing called OpenLoopLogReplay. And that is the concept of: hey, we've driven this mission on real public roads, so therefore we can play back all the sensor data onto a computer that's identical to what would run in the vehicle. And then we run all of the driving stack components in real time against that sensor data. And we can check to see: did the trajectory coming out match the trajectory that was built on the road in real time? And then if they don't match, we can flag it as a failure. And if they do match, then we'll say that that test passed. So those are cool because they force us to check everything in real time as well.

## Daily Release Build (DRB) & Vehicle Testing

**Speaker 1** (cont.)
Assuming all that passes, we will have a daily release build, or DRB. It's a lot of acronyms, so I'm trying to go through them all at least once spelled out. The DRB then gets handed off to a vehicle operations team. They will put this build on a physical vehicle and take it to a closed course where they will run through a whole script of tests — things like following lead cars, cut-ins, cut-outs, traffic lights, and following the route properly. And, you know, all that good stuff that self-driving cars should handle. So they give us quick feedback on, yes, this performed as expected, or no, it didn't handle some particular case. And then we can investigate.

That also goes to an automated log review system, which is Python-based. And again, we assume all of that stuff passes. We will then have an approved DRB that field ops can then feel free to load onto any vehicle for just regular driving.

What do we mean by that? Well, the vehicles go out and drive in Michigan and in Mountain View / Palo Alto and in Japan. And we basically get the log data and we ingest it. And there's a bunch of automated processes that run. And every time there's a disengagement or a memo that the team left for us, we generate a JIRA ticket for every single disengagement or memo. And then we can extract metrics from all of those JIRA tickets. We can also look for bugs. If there's a bug, we can do a little log snippet there. We can then commit the log snippet test and the code that fixes it all into one pull request. And then we can add that snippet to nightly, which is where it'll get rerun every day for the future tests. So that's kind of how we close the loop from the nightly tests and the on-vehicle road tests.

## Fleet Testing Cadence

**Speaker 2** (cont.)
As we do all this testing and driving, on the left-hand side you'll see we do some branches for integration tests of big features. So those are special things we ask FOPS to do for us.

**Speaker 1** (cont.)
On the right half, we have two columns there that they run on a regular cadence and regular schedule. So they run daily release builds. We try to get at least 60 kilometers a week on those. We will pick one of those to be the quote "prod" or production release where they'll get another extra 150 kilometers. That typically gives us enough data to see how that driving performance really looks.

So that kind of gives you a sense of how things get from code push through testing in the fleet and eventually just being part of the operations.

## Repository Access & Setup

**Speaker 1** (cont.)
Okay, so in theory that's pretty much all the slides. So I think we directed you to the Stargate portal, is that right? So I saw at least some of those were trickling through already. Stargate portal will give you access to the repository, which is at this address. And I can also drop it in the chat here. But hopefully you have access to this. We'll see. Okay.

So there's that. In the middle of that page, there's a wiki. And in that wiki link is where we have links to other docs. This is like the master index, so to speak. So this is where you'll find links to all the fun setup stuff. So somewhere in this document, yeah, here's this "new installation." So "new installation" really just means I have a Linux computer and I need to get this code working — that's the document you would use. And it starts off with, hey, you have to run `git clone` after you've set up your Ubuntu. But I mean, it starts off with the very first things you have to type onto the terminal to get TMC Driving checked out and running.

So over the next — I don't know, have we figured out the workstation situation?

**Speaker 2** 03:12
We have not revisited that. So yeah, we should chat more.

**Speaker 1** 03:18
Okay. You can also check this out on a laptop. I have a Mac. And I check it out on the Mac mainly because there are some scripts you can run on the Mac. But the vast majority are not really built for running standalone. So yeah, we'll figure it out. We'll get Linux workstations all set up. And then you can run through this more fully, but at least on a Mac, you can run the first few steps to get your GitHub installation stuff set up correctly. And then you can at least see the code and play with it and, you know, get a feel for what's there.

## Git Workflow Demo

**Speaker 1** (cont.)
Okay. So that's the setup. The next link under development process is the Git workflow. This is the set of commands that you're going to want to bookmark or print out or put on a sticky note next to your monitor, at least until you get the muscle memory used to running these commands. Because again, they might be a little different than what you're used to, depending on how you've used Git repos in the past.

So it starts off with `git fetch upstream`, and we're going to do all this in my terminal so you can see how it works. But I'll start off with saying, if you've seen the word "fetch" instead of "pull" — this might already be a weird red flag, but we don't like `git pull` very much because it's actually two commands. It runs `fetch`, updates your local workspace. It also runs `git merge` if you happen to have changes in your current branch. And we do not like merge commits. They're hard to read and confusing and so forth. So we do some other tricks to stay away from merge commits. And so we'll go through those as we go through the little demo here.

Let's see. Let's clear this up. I'm gonna try to get this big enough so that it's somewhat readable. I'm not saying it's gonna be non-cluttered, but at least it's somewhat readable.

Okay, just to add some drama to this demo — I'll skip the `git fetch upstream` just so later we can see what happens. So let's skip that one but let's do the next part right.

### Creating a Branch

**Speaker 1** (cont.)
So you're going to make a branch to do your development. So `git checkout -b` is kind of the magic step we use to check out a branch and create it all at the same time. So you can name your branch whatever you'd like. I'm gonna put the date — let's see, what is it? The sixth. Okay, so is this readable or is it maybe bigger? Looks all right.

Okay, so the trick is when you create your branch, because it's your fork, you can name your branches however you'd like. Some people use JIRA ticket names. I just use regular English words. You can just make it up as you go along. Whatever works for you, that's fine.

But at the end of the command, I've typed in this `upstream/master`. And the trick to that is this tells Git right from the start of this branch that I want to start the branch from upstream master, whatever it is right now. And I want to track upstream master as the main branch that I'm comparing diffs to or pulling pull requests to. It's what they call "tracking" — that's the Git flavor for that.

So anyway, if we type all this out and hit return, it says this branch was set up to track a remote branch called master from upstream and I switched to the new branch because I told it to.

Okay. So to remind ourselves, if I look at my remotes under Git, it says "origin." Hey, look at that. That's the one that says Brian Hampton. That's my fork. It also has this thing called "upstream," which is pointing at this thing called TMC-Driving/Driving. And yeah, we use the word "driving" a lot for repos and projects and whatnot.

### Making Changes & Committing

**Speaker 1** (cont.)
Okay, so that's all good. Let's make some changes. So I'm going to edit this crazy file called WORKSPACE. If anyone's curious, WORKSPACE is the root build file for Bazel. So Bazel reads this file and then it's told, you know, all the other things it has to build. So just in case you're curious. All right, we're gonna say we call it "Driving."

Okay, so if I do a `git status`, hopefully there's not too much going on. Um, all right, so let's — I'm gonna do just a quick little bit of cleanup here, just because all that stuff you don't care about. Let's try it again. `git status`. Okay, it says, hey, you're on this branch. You're up to date with upstream master. I see you have a file that's updated.

Now you can use VS Code for this. You can use your own favorite text editor. This is just the terminal because it's easier for demos. But anyway, you'll end up doing a `git diff` at some point. It'll tell you what you've changed. If it's a script or something, you could test the script. You can use `bazel test` and give it the path to that script and it will run all of its tests and make sure that all your includes look good and all that good stuff.

Let's say everything works great, then we can basically get this ready for commit. So `git add WORKSPACE`.

### Commit Messages

**Speaker 1** (cont.)
All right, now if we do `git status`, there's something staged for commit. And in our documentation area, you'll see there's all kinds of good stuff. So there's a review process, there's coding conventions — we click there. We'll see that there's some guidance on how big PRs should be, how much stuff, what should be in them. You'll see language guidelines for everything — C++, Python, all that good stuff.

At this particular point, you'll see that there's a document for commit messages, so you'll see we even have documents on how commit messages look. Everything's been documented somewhere and you'll probably find it from this main wiki page.

So to give you the high-level view: when we type `git commit`, of course it asks you for a commit message. So there's really two parts. The first part is mandatory. You have to have some kind of short summary. After the short summary, you can feel free to leave more details, but the short summary should be what they call an imperative clause description. So you can fill in the blank. I like to think of it as "this commit will ___," and you fill in the blank with what will happen if we merge this commit into the repo. So: "this commit will update the WORKSPACE documentation." Notice I don't put any punctuation. This is technically not even a full sentence, so we don't need it.

But after the blank line, then we can have way more details. And here you'd be expected to follow the usual English language rules for grammar and spelling. But you can also do things like lists and it usually figures out how to format all that stuff. The other cool thing you can do is type in a JIRA ticket and then that will help us link the JIRA ticket to the pull request and vice versa. There's some mechanistic magic that happens at the IT level for that. I don't want to mess with any Driving tickets for this pull request, so I'll just keep it with that.

Okay, so we have a commit message. Looks fine. Save. Yes. Okay, now `git status` should be different, which it is. It says now my branch is ahead of upstream master by one commit. That seems reasonable to me. I type things like `git log`. Sure enough, the top commit is me — which by the way, it's fun to check your `git config` to make sure you have the right email address and so forth. Otherwise, it can give you some weird defaults. Anyway, that all looks reasonable.

### Pushing & Creating a Pull Request

**Speaker 1** (cont.)
So at this point, we're ready to push. So we can just say `git push origin`. And because I already told it I'm tracking upstream master, when you type `git push origin`, it doesn't really ask you any other questions or flag anything weird — says, "Fine, let's do it." It gives you this big URL to find your pull request, but I find that if you just go to this Driving repository, basically any page, it adds this yellow bar. It says, "Hey, I noticed you pushed a branch. You probably want to make a pull request." And there's this huge green button — which, of course, you got to click these giant green buttons.

So I click the button and it tells me we are getting ready to open a pull request. The very first thing is this weird collection of four bubbles. But it tells me that the arrow points left. So it's taking a branch called "Update Workspace" whatever, from Brian-Hampton-Driving, and it's going to attempt to merge it into master, which lives in TMC-Driving. Okay, well, it looks fine. But again, I'm not surprised to get it right, because I told it I was tracking that branch earlier.

It gives you a chance to look at your commit message one more time. Word of caution: if you edit this here, it doesn't magically fix the commit. The commit is sitting on your computer. If you want to change this, you have to go back to your computer, edit the commit message, and push it again. Basically, you're just canceling the pull request until you've fixed it and you start over. But it does have a spell checker and stuff, so that's kind of cool. You can also see a diff right inline, which is nice. You've probably all seen this a million times.

So I'm just going to hit this other giant green button, "Create Pull Request." And now we have a pull request. So there's a giant number here, 48,000-something. That's the link you'll give people — or the number. So people want to talk about this pull request.

## Reviewable Code Review Tool

**Speaker 1** (cont.)
So GitHub is now fully in action. The way we do pull requests though is we use a different review tool from GitHub. Reviewable is super amazing and super awesome and I think you're going to love it. We're going to jump into it. It puts this purple button right in the middle of your comment history here. And I don't know, it's even better than the green button. So I'm just going to push that.

And now we are on the Reviewable page. I'm gonna make the fonts bigger here.

### The Reviewable Status Bar

**Speaker 1** (cont.)
Okay. So Reviewable — I've hyped it up. So now let's see if it actually lives up to my hype. On the top, it's basically just the login. So on the top right, it should show your name. If not, it'll be a login button there. You click it, it tries to authenticate to GitHub. You have to push "okay" a few times and it will get all the right things done.

But the next bar is super cool, and it's the reason we love Reviewable. It tries to give you a one-line, information-dense view of this particular pull request. Everything you need to know about this pull request is in this one line. So there's the person who wrote it. There are pictures there. There's the summary that they gave for this.

There's this thing called "checks," and there's a little circle with green filling in. So if I click the checks button, it expands into the three things we look for. One is for a simple conflict check, right? If some other change has landed that hit that same area of code that I just changed, that will turn red and say there's a code-level conflict. GitHub's not gonna manage that for you, but it already turned green. So no one else has touched that. So that's great.

The other two are the review, which is this page, and the continuous integration checks that I talked about earlier. And that's actually a link. So we can follow that link over here. And right now it's just kind of in the queue. So it hasn't even started building yet. But it does have the number and it's, you know, the little bar is spinning. So it's doing its thing. So we'll let that run for a while while we do the review, and we'll come back to it.

### Reviewable Layout & Adding a Reviewer

**Speaker 1** (cont.)
Okay, so those are our three checks. There's a "changes" area that tells you what's been updated. There's a thing that says "unreviewed" and there's a 2 there, because there's two files that have to be checked. That treats the commit message as its own file. "Unresolved discussions" right now is zero. And there are no "drafts," which are the things that I'm composing.

So let's change all that. In this middle area, again, just a huge review of what's been changed in this code review — a list of all the files that have been changed. And then there's this "main review discussion." So the key thing about review discussion: this is a non-blocking discussion area for anyone to just type in comments and not worry about blocking this thing from merging. If you click "start new discussion," that comment or any other comments you make in the code — so feel free to leave those if you want action on the code change.

All right, so in the main review, I'm going to type the "+" character, which it knows — okay, you want to add something. It defaults to "label," but I don't want to add a label, I want to add a person to review. So then you put the "@" symbol. Now it switches to auto-complete all the people that I know about.

So I'm going to see — it looks like Melissa's not in here yet. Did you get full access yet? Or like, have you logged into GitHub?

**Speaker 2** 18:06
I was able to see the wiki.

**Speaker 1** 18:08
Okay. So I'm going to go over and fix that right now. Yeah, it turns out the way — it's kind of weird how those get added, but.

**Speaker 2** 18:23
I don't know if I have — I don't know what status I have, if I have read or not.

**Speaker 1** 18:30
Yeah, it's probably — oh yeah, you're not in there yet. All right, so if I say "add Limber." For now, I'm not going to push any of those buttons just yet. It could be that when they approved your request, they didn't click the right box for like the main group. So we'll come back to that. All right. I'm going to go ahead and reload on this because in theory, it should know who you are now.

**Speaker 2** 19:10
We'll see. I assume that'll also be the case for the whole team then.

**Speaker 1** 19:19
Okay. I'll check into that then. Okay, so I put your name, it auto-completed after I typed "NEL." I hit tab and it picked you. I said "for feature review." So you're my new reviewer for this code change.

### Publishing & Notifications

**Speaker 1** (cont.)
And then you'll notice the "drafts" has a red box now. So red boxes are when Reviewable is highlighting that you're doing something or you're on the hook or you're next — like you're the thing that's holding this up at this point. So I'm going to hit "publish" because you can type as many things as you want all throughout the code, and it kind of waits until you hit publish to notify anybody. But Reviewable is super smart about keeping progress. So if you type like 10 comments and then the window accidentally gets closed or you lost VPN or whatever happened, when you come back, it will still have those 10 things and you can hit publish or continue.

So anyway, I'm going to hit publish. Okay, so I'm going to scroll down. We'll see that the first thing it calls out is I have a commit. Here's the SHA, here's the summary and more details. So that way they can review my commit message, make sure that it's good. And then you can also check the actual code changes.

### Live Review Walkthrough

**Speaker 1** (cont.)
So Melissa, what I'm going to have you do on your laptop — are you logged into this? Did you get an email?

**Speaker 2** 20:46
I am not signed into Reviewable.

**Speaker 1** 20:49
All right, let's make it work. All right. We got to put on a good show here. So I'm going to have you — I don't know, you don't have to screen share if you don't want to, but I'll walk you through the review steps that you'll do.

**Speaker 2** 21:01
I'm blindly hitting the green button that says "authorized."

**Speaker 1** 21:06
I feel like just smashing green buttons is just part of what we do here. Absolutely.

**Speaker 2** 21:14
It's still loading, so I don't know if it's going to take a while to get me.

**Speaker 1** 21:21
I mean, seconds — but many seconds. It's loaded. Okay, cool. I'm going to walk you through what you'll do. Again, you don't have to screen share if you don't want to. Do you want me to? Yeah. Oh yeah, sure. Fire it up.

Hey, this looks suspiciously like what I was showing. Very nice, very nice. Okay, the thing I'll point out — since many of you will be both authors and reviewers, you want to see both sides of this. So this is great. At the top, you will notice red boxes. So this means that the ball is in Melissa's court. So at this point, you could just click a red box and Reviewable is smart enough to just take you to that thing. So yeah, if you just touch it, it says, "Okay, I'm going to take you to what you need to review."

So you'll see that my commit message — let's pretend that that looks good. You can hit the little red circle at the bottom of that tab. And now, before you hit that one, on the green text that I typed in, if you click right on it, it'll open up a text dialog. Ooh, that's weird. It somehow pulled up the help message. If you just regular click — there you go.

Okay. So here type "needs more info" or something. So this is the idea that you're leaving a blocking comment that this code needs to be updated. Now you can hit the little red circle and say, okay, now I've seen this file. I've reviewed the whole thing. I only left one comment.

And now you can at the bottom — oh, it does say "one unread discussion." So if you click that, you can just say "mark as read." All it's telling you is you can hit "acknowledge" on that thing at the top, but yeah, you can just also do it there. Okay. Hit "publish draft."

Okay. You have no more red boxes. So that's good news for you. Again, normally we don't do code reviews on the video chat, right? They're asynchronous and Reviewable really tries to embrace this asynchronous aspect. So you're done. I now have red boxes. So let's see. Do I just have to — yeah.

**Speaker 2** 23:47
Rock, is this what you've been using with the SIP team?

**Speaker 1** 23:52
Yep. Awesome. Okay, is my screen back to being the one that's shared?

**Speaker 2** 24:02
I see your screen, but it's not the one being shared. I have to pin it for it to —

**Speaker 1** 24:08
Okay, I'm going to say "resume." Okay, I think that's resuming. I think we're good to go.

## Responding to Review Feedback

**Speaker 1** (cont.)
Okay, so you'll see on mine I have a red box. And again, very same thing, I can just click the red box and it will jump to the right spot and it says "needs more info." Okay, so at this point I need to go fix my code.

So this is where things get a little interesting about how we typically do the code process here, which might be slightly different. So let's pretend that yes, I know exactly what we're talking about here and I know what to fix. So let's just go ahead and fix the code.

I'm — okay, I've added more descriptions. So we're gonna save that. If I type `git diff`, it says, hey, you've got more stuff, that's great. And then I can say `git add`.

### Git Commit --amend

**Speaker 1** (cont.)
Okay, now comes the tricky part. If you type `git commit`, it will add a new commit on top of my old one with this particular change. And I'll have to add a new commit message and so forth. So the trick is we really want just a single commit to come in with this pull request that has all the fixups in it. So if the alien came down and looked at our commit history on main, they would just see these one-after-the-other perfect commits — all the spelling is good, all the code works. So we don't want to have a fixup commit.

So I'm just going to use `git commit --amend`. This will overwrite the previous commit. And it's going to give me a chance to change the commit message now, because I may have changed something pretty significant about this code change. But in this case, I didn't change very much. So I'm just going to keep the same commit message.

And if I type `git status`, it says you are ahead by one commit, which is what it said earlier. But `git show` has the full change that I just made. So as far as my branch is concerned, I have a single commit with the better version.

### Git Fetch & Rebase

**Speaker 1** (cont.)
The other trick is I want to keep my code up to date as close as I can to upstream master. And the reason is most pull requests take, you know, a day or two to kind of go through this process. Meanwhile, we land many commits per day on main. So you want to kind of keep up to date. So this is where we do the `git fetch upstream` magic.

So we fetch upstream. It's going to pull a bunch of stuff down. It's going to tell me things — hopefully soon. Okay, here we go. So I pulled a bunch of stuff down. We even found some new tags. It thinks you're going to be interested in that. So it tells you about those.

And at this point, if I type `git status`, it says something a little scary at this point. It says "your branch and upstream/master have diverged," which sounds pretty bad, but it's not really a big deal. This just means that from wherever I started, I added one commit and other folks have landed 51 commits. That's all that means. That just means, you know, people are working on this and I can incorporate these changes.

So again, if you had done a `git pull`, it would try to fix this problem by doing a merge commit to get everything synced up. But for us, there's another way to do it, which is called the rebase. Rebase just takes my commit off of master temporarily, and then it replays all 51 of these commits with mine until mine is the newest again, and it checks to make sure there wasn't any weird funny business with conflicts going on. And then I'll be the newest commit again.

So let's try that. `git rebase --onto upstream/master`. Okay, it worked fine. It says "first rewinding, replaying, and now applying" at the end. So if we type `git status`, back to being one ahead of upstream master. If I type things like `git log` — mine is at the top, right on top of the current upstream master, which is great. So there you go. We've had, you know, some drama there trying to get everything up to date. If you were testing locally, you could test locally now because you're up to date.

### Force Push

**Speaker 1** (cont.)
But assuming that everything's great, it's time to push. So I got to get this up there. So if I type `git push origin` regular, then the server is actually going to reject my push because it's trying to protect me from the dangers that I've created here. So: one, I amended a commit, right? And commits are kind of sacred objects that aren't necessarily supposed to be messed with after they've been pushed to a public branch. Number two, I did a rebase, which is the same as just starting my branch at a new place. And again, for publicly available branches, you shouldn't be moving start points around.

This is where the beauty of the fork comes in. This is my fork, and there's no guarantees that any of my branches won't experience changes in start point or changes in commits. So no one's really consuming these branches, so it's totally fine. I'm going to add a little magic to this: `git push -f origin`. And then if I hit return, the GitHub server will just take it. This is a good Star Wars crossover — force push always works.

And then you now have the latest and greatest up on origin. So if we go over to Reviewable, you're about to see one of the main reasons everyone loves Reviewable — aside from the cool statusing and just the overall look of it. The only downside I'll mention here is the new servers at Woven are a bit slower on this. So Reviewable technically runs on a separate server from GitHub. So sometimes it takes like five to ten seconds. Since we're doing this live on a demo, it's probably gonna take more like 20 seconds to get this updated. But again, in real life, we don't normally stare at this over a video chat. So tens of seconds don't usually matter, but I'll take a drink.

**Speaker 2** 31:05
Do any of you have questions about Reviewable?

## Second Review Round in Reviewable

**Speaker 1** 31:13
Okay, it finally updated. Okay, this should wrap it up pretty quick. So what we're going to see is it added this new column called "R2." And you can click and highlight the different revisions to diff between the revisions. So if I click R1 to R2, then it will say, hey, the commit message didn't change at all. So it just kind of hides it. It says down here, you can see there's these new words on that line that was already added previously.

So again, normally you wouldn't see all this live. So my reviewer has no idea that I've made these changes yet. So I come over to this comment and I click the "Done" button — which hilariously just literally types the word "Done." It doesn't actually do anything magical.

So at this point, my only red box is the fact that I just made this new comment. So if I hit publish, then I am back to no red boxes.

### Reviewer Completes Second Round

**Speaker 1** (cont.)
And now it's time for Melissa to share her screen. Because now a notification would finally go out to my reviewers. In this case, we just have one. And there are red boxes at the top of this file now. So yeah, if you want, you can just click the red boxes or whatever.

I wonder — yeah, that's interesting. Okay. I think it's the first time on it. I was like, if you scroll by — grab it did something. I think it brought up the help message when you click that. Yeah. If you just click, yeah, click "show unreviewed."

Okay. So two ways to do this. You can click it how she did where you just say, "show me all the unreviewed." Most times though, again, if we're not in this video chat, the window will probably have been closed. So when you go back to this review, it will automatically know that you've reviewed this. So it'll say, I'm going to show you what's different between the last time you were here and the current state of the code right now. And again, Reviewable manages that for each person individually. So it's a pretty cool feature that it always takes you to what you need to see at this point.

Anyway, all right, let's do the review. So again, if you scroll up just a tiny bit, you'll notice that the commit message it's telling you is the same. So you can hit the little red circle to say, okay, I noticed that's fine. Now, here's where things get interesting. You could continue the conversation and say, "I need more," or "this is still misspelled," or whatever. Or you can just hit "resolve." And this time, the button is slightly magic because it tells Reviewable that you are going to unblock on this particular piece of feedback. So once you push that, it should get rid of the whole thing — good enough. You can hit the red circle there.

Okay, in this little box at the bottom, you can leave a comment. And the coolest one is if you click that LGTM icon — again, nothing magic, it literally just types `:lgtm:`. LGTM, of course, being the old "looks good to me." You can hit publish. And then all the red stuff is gone. And the review is closed. So that's good.

## Platform Review & Merging

**Speaker 1** (cont.)
All right, so I will try to resume. Okay, Google tells me I have resumed. All right, so on my end, it has a red box mainly because there's a new comment — a stamp of approval.

The final step is to get platform review. So right after the LGTM, I can say "+". Remember how I said earlier, if you put "+", it assumes "label." The label we want is that it's "ready for platform review," which is a lot to type. But if you just start typing "ready," the very first tag is "ready for platform review." You can hit tab, then hit publish. And then we're good to go. I have a new little sticker there.

There is a rotation of folks who are on platform review duty. They will look for this tag throughout the day, and their highest priority is to grab these reviews, take the tag off, put their own name in, and then do a review.

So right now — well, I mean, I'll remove the tag since I don't want to bug the folks on platform review today. But under "checks," if we look at the review now, it says: "review in progress, all discussions resolved, platform LGTM is missing." And then it says in parentheses, "waiting on me" because I'm the one who has to push the next phase. Okay, so that's the review.

## Continuous Integration Checks

**Speaker 1** (cont.)
If we go to the continuous integration link, if we pull that open, let's see what's happening. Ah, yes. Well, notice it says "build number two" at the top now. And that is because, again, everything is tied in. So when it noticed my second push, it will cancel the first build and then start up a brand new build right from scratch, right from checkout. So it just basically says every single push must be rebuilt and all the CI tests rerun. So it's pretty well automated. Most of the times you don't have to think about it.

Eventually, it will come back with a status that says either "passed" or it will turn red and say "CI failed." Let me see if I have any examples. I think my current review queue is pretty low. That's another cool thing about the top bar. If you click that "reviews" link, it will take you to all of your current reviews, whether you're the author or the reviewer.

## Q&A

**Speaker 3** 37:29
I have a quick question. Do you assign the reviewer or does it automatically pick one for you?

**Speaker 1** 37:38
Yep. You'll have to assign it. And that's what that "+@" magic was all about.

**Speaker 3** 37:43
Okay. Okay.

**Speaker 1** 37:44
Sorry. There's a lot going on. Yeah. So this magic line right here is what added a reviewer. Interestingly, and if you care about details, if you click, there's a little link back to the "original" — the OG pull request on GitHub Enterprise. If you click that and go back to the GitHub page, you'll see that that commit message that I did — or sorry, the message I typed to comment — shows up in here as well. Also the thing that Melissa typed in shows up here as well. So the source of truth is still GitHub for everything, but Reviewable kind of puts this nice wrapper and tries to organize the status a little better. But yeah, they all appear here as well, if you're ever curious like where the real details are.

## Git Workflow Reference Recap

**Speaker 1** (cont.)
Okay. We're going back to the Git workflow. So, you saw the basic commands that I ran up here at the top. You make your commit. We make a pull request, which we already did with the `git push origin`. CI coverage — this just tells you a little bit more details about all the things that happened during that CI step.

Reviewable, again, this is a very high level. There's a little link if you want to get more details on the review. Things like that "+@" — you know, details are kind of in here. This "+ ready for platform review" thing is in there. A little more detail about what those are.

Under the comments section, so there are some keywords that Reviewable will understand. All right, if you type "FYI," it'll actually switch the comment to be non-blocking. You're just kind of pointing out something. Things like "minor" or "nit" are things that are like, "Hey, this is minor, but maybe you want to fix it right now." "LGTM" which we just talked about — was okay. The word "done" means I think we've satisfied it. And then again, I ran `git commit --amend` to update and fix my commit, which meant I had to run `git push -f origin`. So all that's detailed here. I didn't run off script too badly. So everything I ran is all documented here. So again, if you want to bookmark that page or come back to it. And also you can actually probably work on a little cheat sheet if we care to, once we get everybody access and workstations. So we'll get back to all that.

### Merging

**Speaker 1** (cont.)
Finally, for merging — yeah, once all the checks are complete, the circle turns green. And then instead of having the little button at the top that says "Publish," it'll switch the button to be "Merge." And then you have to hold it down for three seconds to arm it, and then it will let you merge it. So, okay, that's pretty much it. Everything else from here down is just tips and tricks and things. You can feel free to read it during all of your copious free time. Joking since nobody seems to have any free time. But try to read as much as you can as you have time.

Okay, yeah, we have some time for questions, comments, thoughts. All right, Kristina.

## More Q&A

**Speaker 4** 41:27
Hi, that was a really great overview.

**Speaker 1** 41:30
It's a lot, so yeah.

### Single Commit Per PR

**Speaker 4** 41:32
I guess my question is about making a single commit. Like, I typically make a lot of commits, you know, before I make a PR. So is it true that we only make a single commit, even if we're working on a bit of code for over several days?

**Speaker 1** 41:49
Yes. Most PRs do take several days. You can keep using `git commit --amend`, or if you do end up having multiple commits — have you ever used `rebase -i`? There is some — okay, so in here, on this same page, you can use `git squash` at the end to just kind of make them all into one, or you can use `git rebase --interactive`, which is `rebase -i`. And we can certainly walk through that at some point if you want. That allows you to kind of pick and choose how they get squashed and which messages you want to keep. It's a little more fine-grained on how you want to merge everything up.

But yes, if you push it with multiple commits, the platform reviewer will immediately say, "Hi, that's great, but could you please squash and repush?" Mainly because we trust the developers, so we do not auto-squash when it merges over to master. Because there's like a 1% case that you really do want multiple commits. And so for those who want to do that, we preserve that capability, but for 99% of cases, you wouldn't want it.

### Pushing to Upstream

**Speaker 1** (cont.)
Looks like we have a hand up in the conference room. "What happens if you push to upstream?" Good question. So if we go back to — I mean, for one, it's going to say no, thank you. Yeah, the server will definitely reject it.

When you go through the new installation, there's some magic commands here. On my Git remote, I happen to have upstream set for a push because I have to sometimes push tags. But I'm a weirdo who's in the middle of all that release craziness. So what I should have done is put this back to how it's supposed to be, which looks like this.

Okay, so now if I look at `git remote`, see how upstream says "no_push"? So your local Git client will notice that that's not a legal URL, and it will just refuse instantly, right? It'll say, I don't even know how to push to that thing. So you'll be protected by two fronts: local Git and GitHub Enterprise. Makes it feel safe. Yep, yep. Two layers of help there. Yep.

Cool. Okay. I mean, hopefully most of this wasn't too new about how Git stuff works, but I know we do have our own quirks, so trying to show you at least once through and then we can iterate. Yeah, see you, Hanna.

### Reviewable Keywords

**Speaker 5** 44:39
In Reviewable, we use those keywords "done," "will do." Yep. You have to use those keywords. I know there's like a button in there, it's like "dismiss discussions," which is a funny worded thing. Can you talk to what that means?

**Speaker 1** 44:54
Yeah, so when you're leaving comments or responding to comments, yeah, there's a bunch of stuff in here. There's a little bit of help, like "FYI" for informing, "working," you know, stuff like that. In general, again, the word "done" is just kind of a process that we've adopted. But you can type whatever you want. You can say, "Hey, I added some more stuff. Does this look good enough?" You know, that's a fine thing to say. And then the reviewer can hit that resolve button, regardless of what you typed. So you don't — there's no strict requirement to say the exact word "done." That's just a really quick — you know, once you start doing a lot of these every day, it's nice to just hit buttons and move on. But yeah, you can type pretty much whatever you want in there.

### Reviewer Responsibilities

**Speaker 5** 45:45
And the expectation is on the reviewer to close out all of those. Like, you'll never close out someone else's review and not say, like...

**Speaker 1** 45:55
It's extremely rare. Like, they have to be on vacation and left guidance that "if you add this, you can dismiss me" or whatever. And then, yeah, but it's the honor system. Again, we try not to put too many hard hooks on this to prevent certain actions. We only do things like — again, we protect upstream mainly just to protect us because people don't want to mess that up. But in the review itself, we try not to put too many restrictions on because we know that every use case might be a hair different. So we'll let the reviewers and the authors try to work out most of that. And it's similar for platform review. As long as things are meeting style guides and the code is readable, there's a lot of author discretion for how the code looks and the kinds of things you want it to do. So, yep.

## Closing & Next Steps

**Speaker 1** (cont.)
Cool. All right. So next steps, I guess, for us is to get workstations and make sure that those permissions are set right here in the Driving repo. And then we can, you know, move forward from there.

I would recommend — there's a Slack channel called vSpirit. "vSpirit" — VSP means Vehicle Software Platform. So that's the lowest-level software team. And they work across e-Palette, One Autonomy Driver, all the various projects. So if you have questions doing pull requests or about Git, or something got messed up with your branch, or CI is not working, anything and everything about the code, you can type into that channel and someone will probably get back to you pretty quickly. It's monitored most of the day during all the US time zones. And even there's folks in Japan that will look at it too. So yeah, that's a great channel for questions and answers.

Other than that, welcome aboard. Glad to have new contributors. Good stuff. I'm sure as we ramp up, you'll have all kinds of questions. So feel free to reach out to me or on that Slack channel for vSpirit — or, you know, I think — are they — are we all going into the integration Slack channel as well? I'm not even sure what all the Slack channels you're in, but.

**Speaker 2** 48:17
I think I've been added to a few. I don't know if we've all been added to the integrations one yet.

**Speaker 1** 48:23
Okay. That might make sense to do.

**Speaker 2** 48:25
Yeah.

**Speaker 1** 48:25
Yeah. I'm sure we'll get there. So anyway, feel free to reach out on Slack. That's where we normally hang out. Awesome. Thank you so much for talking.

**Speaker 4** 48:33
Thank you.

