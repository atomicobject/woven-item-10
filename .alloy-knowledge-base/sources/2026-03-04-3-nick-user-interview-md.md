---
id: s-cs8TIVSjgkzg
type: source
name: 2026-03-04-3_nick_user_interview.md
path: 2026-03-04-3_nick_user_interview.md
format: raw-transcript
topics: [general]
status: complete
ingestedAt: 2026-03-06T15:28:50.501Z
fileSize: 26460
extractedAssertionIds: [a-JPGUwtlFnrNP, a-iFEo5k6lLWvd, a-jWiMsXj2wzc1, a-ENa2DhGI1Loa, a-Uytg7pL27PeU, a-dlc_A4WlxUMv, a-jsaclWBOR75I, a-zZ50T9POZ8bE, a-nEjn3E9cjD69, a-yANcmfFVNdJc]
---

# Nick Carcione User Interview — Transcript

**Date:** 2026-03-04  
**Participants:** Dan Maser, Gus Schissler, Nate Papes (Atomic Object / Woven), Nick Carcione (Woven — Systems Verification & Validation Engineer)  
**Context:** Atomic Object is embedded with Woven Planet (Toyota's autonomous driving subsidiary) as part of a discovery project (Item 10) to understand the requirements intake and assembly process, with a goal of building tooling to reduce friction. This interview focuses on Nick's role as a systems verification and validation engineer for in-lane capabilities, and his process for reviewing SWRDs and assembling them in JAMA.

---

## Pre-Interview Setup

*00:00*

**Dan Maser**: We're going to start recording, if that's okay. There are no right or wrong answers — please don't feel like you have to answer in a specific way. Nate is also here; he'll be working on architecture afterward. Any other questions before we get started?

*00:23*

**Nick Carcione**: Not really. Maybe just… I've heard a little bit about this, so maybe just a deeper background or some more context on what exactly this is trying to do. Or maybe that's what you're trying to figure out in this meeting.

*00:40*

**Dan Maser**: Kind of the latter. We can tell you more — I'm not trying to be intentionally vague — but what we're really trying to do is help with the JAMA assembly process. We want to create something to help with that, but we don't want to decide on a solution that doesn't make sense for you. That said, the best way to start is probably to just have you share a little bit about yourself: your role and your daily responsibilities at Woven.

---

## Nick's Role and Responsibilities

*01:15*

**Nick Carcione**: Yeah, so — I'm Nick, and I've been with Woven for about two and a half years. I'm a systems verification and validation engineer. Previously, and generally, I've been more focused on vehicle following and longitudinal behavior — anything involving a lead vehicle, like people cutting into your lane. It's a lot of evaluating our performance in those scenarios: how are we responding, is it comfortable, is it expected?

There are also times when people ask questions about requirements for specific situations — what should we be doing here? Often there's nothing written for that, or if there is, it's very vague, or it's buried under a lot of other content and you have to go hunting for it. And when there really is nothing, you kind of have to make something up yourself — which may or may not get overridden later when official requirements come in.

Recently I was also helping with the initial deployment to urban roads, making sure everything could at least engage on those routes. And now I think my scope is expanding to in-lane behavior, which will also include lane keeping.

*03:10*

**Dan Maser**: Quick follow-up — when you talk about people asking you about tests that do or don't exist, are those usually software engineers and developers?

*03:22*

**Nick Carcione**: Yes.

*03:24*

**Dan Maser**: Great. The way we've understood this is there are kind of two sides to it: from the bottom up, there's code that doesn't have tests yet and needs them written — building up a backlog. And from the top down, there's the intake side, where you're dealing with the CA team or product, and helping to establish SWRDs and test cases. Does that track?

---

## Workflow Walkthrough — PRD to JAMA

*04:25*

**Dan Maser**: What we've really been looking at is the JAMA assembly process — how requirements flow from CA or product into JAMA, and how you're essentially the core person for your assigned capability group. Is "capability group" the right term?

*04:54*

**Nick Carcione**: Yeah, I think we're calling them capability groups.

*05:09*

**Dan Maser**: And your capability group is in-lane — which includes lane keeping and vehicle following?

*05:09*

**Nick Carcione**: Yes — the overall group will just be in-lane, and that will include lane keeping, vehicle following, and cut-ins. Basically, anything you would do while staying in your own lane on the road.

*05:32*

**Dan Maser**: Does that include turning and braking?

*05:41*

**Nick Carcione**: To some degree — turning, yes. Like navigating a curve on an interchange ramp, or the natural lateral corrections you make when passing a semi-truck on the highway, where you instinctively move toward one side of the lane. Small steering corrections like that would be included.

*06:04*

**Dan Maser**: We'd love it if you could walk us through your process from the in-lane perspective — going from the PRD to finding the source document, adding context, all of that. Are you actually doing any of that yet?

*06:41*

**Nick Carcione**: Yeah, I've done a little bit of that.

*06:52*

**Dan Maser**: Would you mind sharing your screen and walking us through it?

*06:54*

**Nick Carcione**: Sure.

*07:11*

**Nick Carcione**: Alright. So this is the PRD I received from our product team. I don't know how much you've heard about the overall lifecycle of SWRDs, but basically our Customer Applications (CA) team works with Toyota to define them. Our product team then selects a set of SWRDs to include in this PRD, which scopes what we're supposed to accomplish for the quarter.

The main thing I'm looking at here is this table, which lists URDs and the SWRDs associated with each one. When I go through and do my review, I just take it row by row — I started with the first one. The first thing I did was look up the URD in a separate spreadsheet. There are a lot of rows, so I just searched for the URD title. Everything at the start is in Japanese, so I scrolled over to find the English description.

Here it is — this gives the actual description of the URD. The main thing I'm reading: "When the vehicle system detects a preceding vehicle traveling in the ego lane, the vehicle follows the vehicle." Basically, follow vehicles ahead of you. It's pretty broad, but it at least gives me context for what I'm about to see in the SWRDs underneath it.

*09:43*

**Nick Carcione**: Then I came over here, and they have this list of five SWRDs. I'd basically just open them up one by one — at this point I'm on the third website: I have the PRD document, the URD spreadsheet, and now this site that hosts all the SWRDs. I read through the summary at the top: "Calculate target acceleration and jerk based on the trajectory and vehicle state." Usually they have a more descriptive reason section, but this one just says "follow the trajectory." I'll also look at the interface section, since SWRDs are supposed to mostly describe how our software is supposed to be interacting with other systems around it. Then I'll read the actual specification.

At this stage, I'm mostly just trying to decide whether this seems like something that's actually usable — something we can create tests around and that isn't overly prescriptive.

---

## SWRD Review Process

*11:30*

**Nick Carcione**: Some of these are way too specific and too performance-driven. For example, this one comes down and tells us what the vehicle's acceleration needs to be in specific scenarios. When we talked with the product team about this, we basically agreed that most SWRDs should be more interface-level — something like: in this kind of situation, you need to send this signal or this flag to another block. But a few of the ones I got this round are like this one: if the vehicle ahead is traveling at a constant speed, your acceleration needs to be within these bounds if your speed falls in this range.

That's definitely useful to know in terms of what the end customer is looking for, but it's not what we're trying to write tests for at this point. So I'll go through these and decide whether to accept or reject each one, and then provide that feedback to the product team so they can update their list and communicate with CA to either remove or adjust those requirements.

*13:30*

**Dan Maser**: For a too-performance-driven case like that — would you still take it through to JAMA, or would you go directly to product at that point?

*13:46*

**Nick Carcione**: What I did this time was leave a comment directly in the document — basically saying these are too performance-specific and we should probably remove them from consideration. Then it becomes a conversation between me and product about how to handle it: is there anything still useful within the requirement that we can keep and put into JAMA? But assuming we reject the SWRD outright, I think it just stalls there until it gets updated and comes back. I wouldn't want to take the time to put it into JAMA if it's not something we're actually going to use and write a test for.

*14:44*

**Dan Maser**: That makes sense. Gus, any questions before we keep going?

*14:56*

**Gus Schissler**: Yeah — once you've decided not to work on an SWRD for a quarter, is product then in charge of going back to CA and saying, "We can't use this because it's too specific"?

*15:38*

**Nick Carcione**: Yeah, as I understand the process — and everything is still changing — product is the link that connects us to CA.

---

## The PRD Structure

*16:03*

**Dan Maser**: The document you're showing — that's the PRD for in-lane specifically, right? You're the only one who sees this?

*16:20*

**Nick Carcione**: Kind of. It has multiple tabs. The tab I'm on is for in-lane, but there are also tabs for lane transitions, urban, and so on. All the different capability groups exist within this one Google Doc, each in its own tab.

*16:45*

**Dan Maser**: And that URD spreadsheet you looked up — is that also just for in-lane, or does it contain all capability groups?

*17:09*

**Nick Carcione**: I believe it contains everything. I just have to search through it for whatever I'm looking for.

*17:19*

**Gus Schissler**: Would you classify that spreadsheet as a source of truth, or is it a copy of something that lives somewhere else?

*17:31*

**Nick Carcione**: I truly don't know. It's been the source that's been presented to me, and it's linked in the document, so I treat it as my source of truth. I don't know if there's a more official location it's pulled from, but I'd assume it's authoritative.

*17:53*

**Dan Maser**: And to confirm — you were looking at that spreadsheet specifically to get URD-level context, not to understand the SWRDs themselves?

*18:03*

**Nick Carcione**: Correct. And there are actually some SWRDs where the linkage to their URD doesn't really make sense — what the URD describes and what the SWRD is a requirement for are talking about completely different things. That's more feedback to the product team: maybe the SWRD still makes sense for us, but it might need to be associated with a different URD, or there needs to be more explanation of how that linkage is supposed to work.

---

## Version Control

*19:28*

**Dan Maser**: When you walked through your screen earlier, you opened something that looked like a Git interface — a presentation layer on top of Git. Is that where all of your SWRDs live?

*19:14*

**Nick Carcione**: All the ones I received were in that Git overlay system. Everything was there.

*19:28*

**Nick Carcione**: It's a little annoying to use, though — trying to navigate between different versions and keep track of all the versions that have been published is cumbersome.

*19:40*

**Dan Maser**: How do you handle version control yourself? If a new version of an SWRD is released mid-quarter, what happens?

*19:48*

**Nick Carcione**: The way it's supposed to work is that the PRD is locked to a specific version. So even if CA releases new versions of an SWRD after the PRD is finalized, I'm officially only responsible for the version that's linked in the PRD.

That said, some of the SWRDs I received were ones a teammate had worked on previously, and I wanted to see what version she had used and what tests she'd written. She had linked a specific older version, and I was trying to compare that to what was current. I don't think there's a built-in compare mechanism in the tool — if there is, I just haven't found it. So I was just flipping back and forth between tabs, which was annoying.

*22:00*

**Gus Schissler**: So there are a lot of different documents you're flipping between — Google Sheets, the SWRD repository, the PRD. It sounds like you're not just copying and pasting into JAMA; you want to understand the broader context around each requirement.

*21:31*

**Nick Carcione**: Yeah. And I think it'll become really important to understand when things have changed, so we know if we need to update anything on the testing end. Right now there's no notification mechanism. I've received a specific version of a requirement, and I have no way of knowing if a new version has been released. I'm just not made aware of it easily.

*22:28*

**Dan Maser**: You're not officially on the hook if a new version drops mid-quarter, but it would still be really helpful to know, right?

*22:36*

**Nick Carcione**: Yes. Especially if it's a major change — it'd be much better to catch that as soon as possible. These PRDs are supposed to get released quarterly, so if there's a major change to an SWRD mid-quarter that affects how something should work, it would really hurt to develop everything over the course of a quarter, get to the next quarter, and then realize it was changed two weeks in and we need to redo everything.

*23:36*

**Dan Maser**: So technically you're not on the hook for it, but it would still be a massive overhaul regardless.

*23:42*

**Nick Carcione**: Yeah.

*23:43*

**Gus Schissler**: Is the quarterly cadence for requirements and tests only, or does actual development happen in the same quarter?

*24:07*

**Nick Carcione**: The PRD is supposed to scope where we should be by the end of the quarter. Including an SWRD in it basically means: over the course of that quarter, you should complete the review, officially accept the SWRD, write the test for it, and actually implement the test case and any functionality required to pass it. So it's a full-cycle scope document.

---

## Writing SWRDs and SWQTs in JAMA

*25:01*

**Dan Maser**: Can you show us how you'd go about writing out the requirements and test cases?

*25:09*

**Nick Carcione**: I haven't done a lot of this recently — I mostly got as far as the review part. But I know that one of my teammates had written a prompt in our internal AI tool, WOVI. You can paste in a requirement and it outputs some test cases, which you then review to make sure they make sense and aren't missing anything.

*25:54*

**Dan Maser**: Do you know who wrote that prompt?

*25:57*

**Nick Carcione**: Hannah.

*25:59*

**Dan Maser**: Oh sweet, okay.

*26:05*

**Nick Carcione**: So this is an example SWQT — a test case for one of the requirements. Bridging the gap from the SWRD review to JAMA: I would have gone through the requirement, read through it, understood the reasoning — what it's doing and why it exists. Basically it's saying you need to set a specific state to these values in a certain circumstance. I would paste that into Hannah's prompt to get an initial output.

*28:10*

**Dan Maser**: Would you run the prompt before creating the SWRD in JAMA, or after?

*28:13*

**Nick Carcione**: I'd probably put the SWRD into JAMA first, and then write the test case. So I'd create the SWRD entry in JAMA first — we have an SWRD folder in there — and then I'd go in and write the SWQT. That's when I'd use the prompt.

*28:44*

**Nick Carcione**: I'd run the prompt, check the output — from what I've heard, it usually gets you about 80% of the way there, but you definitely need to do a manual review to make sure it's not making something up or missing something. Then I'd fill out the SWQT template: it would have linkage back to the actual requirement, preconditions, post-conditions, and the actual steps of the test. Once the SWQT is in, it's on the developers to implement it.

*30:22*

**Dan Maser**: Is there any kind of workflow state you mark it with — "in progress," "done"? Or does it just go in and they look at it when they look at it?

*30:45*

**Nick Carcione**: That's still being figured out process-wise. Previously there was a giant spreadsheet that tracked SWRD acceptance, SWQT creation, developer acknowledgment, and developer sign-off on implementation. I think they might be bringing something like that back now that we're moving to the PRD workflow, but it hasn't been created yet.

For in-lane specifically, we don't even have an assigned developer yet — I think they're being assigned this week. So anything I put in right now would just be sitting there. Once we have a developer, my assumption is we'll go back to the spreadsheet model, where the developer and I both sign off on the SWRD, and then when I write the SWQT, I notify the developer and get them to sign off on that as well.

---

## Architecture and Component Levels

*32:24*

**Dan Maser**: And all of this is at the software-system level — you're not working at the component level?

*32:34*

**Nick Carcione**: For this level, yes. Some SWRDs will require further decomposition into something called an SCRD (Software Component Requirements Document). We can't really do that yet, mostly because in order to do it, we'd need an official version of our own internal architecture first.

We have this larger architecture diagram — Woven controls the purple blocks, but all the blue and green blocks are outside our control. The SWRDs are defined at that outer system interface level. But within the purple blocks, we don't have an official internal architecture yet — which means we can't say: to satisfy this SWRD, we need to write requirements for this component, and this component, and this component, so that we can feed the signal out correctly. That decomposition is something we'll have to do eventually, but we can't do it yet.

*34:13*

**Gus Schissler**: When you say "we" and the purple blocks — is that Woven as a whole, or is that specific to in-lane?

*34:14*

**Nick Carcione**: That's what Woven is responsible for overall.

*34:23*

**Dan Maser**: And the components inside those purple blocks would be things like perception, planning, and the controller?

*34:46*

**Nick Carcione**: Yes — perception, planning, the controller, and so on. Those components aren't specific to in-lane; they're shared. Perception is used by both in-lane and lane transitions. The combined output of all of those components is what produces in-lane behavior or lane transition behavior.

---

## Format Differences

*35:28*

**Dan Maser**: We talked to Hannah, and she mentioned that the format might differ between in-lane and lane change SWRDs. Have you noticed any significant format differences?

*36:07*

**Nick Carcione**: Not really. All of the SWRDs I looked at in this version of the PRD looked pretty uniform — they all had a header block, a reason section, a description, an interface section if applicable, and then the actual specification. It was quite consistent.

---

## SWRD Input and SWQT Creation in JAMA

*37:17*

**Gus Schissler**: When you create the SWRD entries in JAMA, are you mostly copying and pasting from the source, or are you doing any LLM translation or cleanup?

*37:36*

**Nick Carcione**: It'll be copy-paste. I still need to make up my mind about whether to include the Japanese text — I probably will, just to stay consistent with what the rest of my team is doing. I won't be rewriting anything; I'll just be taking what's there and putting it into JAMA so we have better traceability on it.

*38:13*

**Gus Schissler**: On the testing side — how do you know when the tests you've written for an SWRD are done and ready? Will you be reviewing them with a developer?

*38:43*

**Nick Carcione**: That's a good question, and probably one I don't have a great answer for yet. Since I'm fairly new to the SWQT creation process, at least initially I'd probably talk with Hannah or my manager. Hannah has been working with SWRDs and SWQTs longer than anyone else on my team, so I'd take an example or two and say: does this match what you've been doing? Is there something I'm missing? Just to make sure someone with more experience has looked at it before I start going off on my own and declaring things done.

*40:14*

**Dan Maser**: I've heard that when you use the LLM, it'll generate as many test cases as you ask for — so you have to curate the output. Is that your experience too?

*41:05*

**Nick Carcione**: Yeah.

---

## Developer Alignment

*41:27*

**Gus Schissler**: You mentioned you'll have a developer assigned — is that someone to review the tests with you, to review the requirements and help decide whether to accept something in a PRD, or also someone who will actually build out the unit tests?

*41:53*

**Nick Carcione**: Both, I'd expect — though they might not be the only one building tests. The main point is to get developer buy-in early. The goal is that we're not just handing them a list of requirements and tests and saying "go," only for them to come back and say they can't technically do all of these. By getting them involved earlier, they know what's coming, they have a chance to push back on anything they don't think they can achieve within the quarter, and once we have SWQTs created, they'll coordinate and handle a lot of the implementation.

---

## Magic Wand

*42:56*

**Dan Maser**: If you had a magic wand and could change anything in this process — from getting the PRD to handing it off to the dev team — what would you change?

*43:28*

**Nick Carcione**: Probably the filtering of SWRDs — making sure that what I'm getting is mostly, if not entirely, accurate and aligned with what we're expecting. It's time-consuming to read through a requirement and spend the effort trying to understand what it's doing, only to realize it's not something we even want to pursue. If there were a way to quickly identify which ones are actually worthwhile to look at — or if upstream processes improved so that by the time the list reaches me, everything in it is something I'm going to have to write tests for — that would be huge.

*44:49*

**Dan Maser**: When you get a bad one, you mentioned leaving a comment in the Google Doc. Is the expectation that they fix that specific one and it comes back to you? Or have they ever just deleted it entirely?

*45:04*

**Nick Carcione**: I don't think it's gotten to the point of deleting things entirely yet.

*45:42*

**Gus Schissler**: When you talk about filtering SWRDs that don't meet expectations — is that both a "can we do it from a development perspective?" question and a "should we do it?" question?

*46:32*

**Nick Carcione**: At this point, it's mostly the "should we do it?" question. A lot of these come from previous development efforts that were much more rules-based. Some of them don't really align with our more ML-centric approach.

For something like this example — it might come from TSS-4 (Toyota Safety System 4) or Toyota Teammate Advanced Drive, which had a rules-based implementation. You can see how this would be implemented in rules-based code: compute the relative speed, and if it's within a certain threshold, clamp the acceleration to zero. That works for a rules-based system, but it's not how our ML model works. So the biggest question is usually: is this still applicable to what we're trying to do, or is it a product of legacy systems that just hasn't been updated?

*47:22*

**Gus Schissler**: Yeah, Hannah mentioned TSS-4 yesterday — that some requirements are tied to that system's rules-based approach.

*48:09*

**Dan Maser**: Quick big-picture question: is there a reason these aren't being screened out before they reach you?

*48:28*

**Nick Carcione**: I don't know. It's probably political, or just a misalignment of expectations somewhere along the chain. The CA team is almost exclusively in Japan, so there's limited direct communication between them and my team, which is mostly US-based. I think expectations just shift or communication breaks down somewhere along the way.

*49:13*

**Gus Schissler**: High-level question — my understanding is that the goal of getting all these requirements and test cases into JAMA is about visibility and traceability. Ultimately, Woven needs to show Toyota that all of these requirements have been addressed in some way. From the "should we do it?" perspective — the underlying need doesn't disappear just because an SWRD is too specific or rules-based. If we're rejecting an SWRD, how does that underlying need still get covered?

*50:29*

**Nick Carcione**: Right, so for something that's too performance-specific — the underlying need is still there. We still want to smoothly follow a vehicle ahead without slamming on the brakes. The way I understand it is that we have other testing and requirement methods that address that kind of vehicle-level performance. We'd capture on-road data or conduct closed-course tests in specific scenarios, and use those to evaluate performance — like, acceleration within these bounds in this situation. That would happen outside of the SWRD framework, captured in a different type of requirement. And the thresholds would be expressed more generally to be applicable to an ML-based solution.

*52:18*

**Gus Schissler**: Gotcha. Yeah, that answers my question. Thank you.

*52:28*

**Dan Maser**: Awesome. I think we're good. Thank you so much, Nick — we'll probably ping you with random questions here and there, but yeah, have a great rest of your day.

*52:49*

**Nick Carcione**: Alright, no worries.

*52:50*

**Nate Papes**: Alright, we will —

*52:52*

**Dan Maser**: Chat later!

*52:53*

**Nick Carcione**: Thanks, see you guys.

---

*Recording source: AO × Nick Carcione User Interview — 2026/03/04*

