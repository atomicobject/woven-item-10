# Hannah Lane User Interview — Combined Transcript
**Date:** 2026-03-03  
**Participants:** Dan Maser, Gus Schissler, Nate Papes (Atomic Object / Woven), Hannah Lane (Woven — Systems & Validation Engineer)  
**Context:** Atomic Object is embedded with Woven Planet (Toyota's autonomous driving subsidiary) as part of a discovery project (Item 10) to understand the requirements intake and assembly process, with a goal of building tooling to reduce friction. This interview focuses on Hannah's role processing SWRDs (Software Work/Interface Requirements Documents) from upstream sources and assembling them in JAMA for the behavior development team.

---

## Pre-Interview Setup

*00:45*

**Nate Papes**: Point, point.

*00:58*

**Gus Schissler**: Hey, there is a Google Meet invite on the calendar.

*01:10*

**Dan Maser**: Yeah, I'm just realizing that I don't know how I set that up. I just slacked her earlier because I wasn't sure. I was thinking the same thing about screen sharing — I was going to chat really quickly at the beginning because she might have to let me in.

*01:54*

**Gus Schissler**: Yep, we'll see.

*02:01*

**Dan Maser**: Anyways, how's the rest of your day?

*02:03*

**Gus Schissler**: It was fine. Had a sprint demo for Woven and that went about as well as it normally does, which is good.

*02:09*

**Dan Maser**: Oh, nice.

*02:16*

**Hannah Lane**: I think I've had to admit you to your own call.

*02:19*

**Gus Schissler**: Yeah, hold on. Dan, do you want to join us over in Meet? I'm on two meetings right now — one is Zoom, the other is Google Meet. Can we record in Google Meet? Okay, then yes — let's go over there. We're going to stick to Google Meet, sorry folks.

*02:45*

**Nate Papes**: Hope I didn't disrupt this.

*02:48*

**Gus Schissler**: Oh no. Thanks for letting me in, Hannah. I hadn't opened up my Woven laptop yet. But now I don't know where Dan is.

*03:19*

**Gus Schissler**: How's your day going so far, Hannah?

*03:22*

**Hannah Lane**: It's going good. Busy as always. How about you guys?

*03:27*

**Gus Schissler**: Pretty good — at the tail end of it, which is nice. You're in Palo Alto, yeah?

*03:38*

**Dan Maser**: Yeah.

*03:39*

**Gus Schissler**: Cool. We're over in Ann Arbor — not too far from the other Woven office. It will finally be warm here at some point. It's supposed to be 70 next Tuesday, which is unseasonably warm.

*03:59*

**Hannah Lane**: Yeah, that is. I lived in Michigan for about five years. I remember hating the spring the most because the winter dragged on way too late — it was like May and I was still wearing jackets.

*04:13*

**Nate Papes**: Yeah, you get those little windows where it feels like spring and then next week it goes right back. It's never a clean cut — it's wishy-washy.

*04:40*

**Dan Maser**: Okay, I will be right back. I'm so sorry, Hannah. I need to quit and reopen so that I can share my screen. I'll be right back, I promise.

*04:53*

**Gus Schissler**: How long ago did you move out to California?

*04:57*

**Hannah Lane**: I moved to California about a year and a half ago. Before that I lived in Arizona, and I lived in Michigan right out of college until then.

*05:11*

**Gus Schissler**: My partner's family lives in Arizona — whereabouts were you?

*05:17*

**Hannah Lane**: I was in Tempe.

*05:20*

**Gus Schissler**: Oh cool. We were actually just there for an Atomic Objects work retreat. It was a short weekend, but nice and warm.

*05:32*

**Hannah Lane**: Yeah. Arizona also had weird weather.

*05:34*

**Gus Schissler**: I was up in Sedona the week before and it was actually colder there than in Michigan — it snowed. But it was fun. Really nice to see the clouds in the canyons.

*05:52*

**Hannah Lane**: The weird thing about the desert in general is there's no moisture in the air, so the sun heats up the ground super fast. But then the sun goes down and the temperature drops really fast — the swings are insane.

*06:07*

**Dan Maser**: I am so sorry, Hannah. When I set up the meeting on the Toyota account side, I didn't realize it had created a Google Meet for us. Apologies for the chaos — Nate held it down for us. That's the reality.

*06:30*

**Dan Maser**: Thanks for dealing with that. Well, I'm not sure how much everyone else talked, but my name's Dan. This is Gus and Nate. We're super excited to talk to you — we've heard a lot of really nice things about you, basically that you know everything.

*06:46*

**Hannah Lane**: All I do is copy things into JAMA.

---

## Interview Begins

*07:00*

**Dan Maser**: Can we record this? Oh, I think it says it's already recording. Do you know if we'll have access to this recording?

*07:05*

**Hannah Lane**: I have no idea. I never actually look at the recordings.

*07:12*

**Dan Maser**: We can record on our end as well, so it's not the end of the world.

*07:17*

**Hannah Lane**: Okay, so I started recording just now. Do you want me to take notes with Gemini?

*07:27*

**Dan Maser**: Sure, I think that's fine. We'll also be taking notes on the side. One thing to note about recording — they only keep these for fourteen days.

*07:43*

**Dan Maser**: We'll make sure to download them. That works.

*07:50*

**Dan Maser**: Well, that said, Hannah — we've been talking to Julia and Andrea, and we're also going to try and talk to Nick after you, just to wrap our heads around this problem, specifically relating to the intake process. We really wanted to talk to you about the JAMA assembly process. But before we do that, a few quick things. First, there are no right or wrong answers here — we just want your thoughts. That's the most helpful thing. And feel free to interject at any time. If we ask a question that makes no sense, feel free to say so. Besides that, any questions before we start?

*08:39*

**Hannah Lane**: I'm not sure what you're doing yet, so let's just keep talking.

*08:53*

**Dan Maser**: Could you briefly touch on your role at Woven and what you do day-to-day? Specifically surrounding requirements — but big picture as well.

*09:01*

**Hannah Lane**: Okay. So right now I am — I guess you might be able to call it a function lead, though not quite "lead." I'm a point of contact for systems and validation engineering for lane change and, in general, all out-of-lane maneuvers. That could be merging, branching, and so on. Basically, I am helping the development team define what they want to do with lane change. A very simple example would be: put on the turn indicator, then change lanes three seconds later. That would be a definition I would help them either track down or define myself. Then they implement it, and I come up with test cases to verify it was implemented properly. That's the quick overview of my role.

Specifically related to requirements — it's a bit of a messy ball that I'm sure Julia and Andrea have told you about. We're taking in requirements from all sorts of different locations: Toyota, CA (which is supposed to be the liaison between Toyota and Woven), the Japan equivalents of my team, and also regulations. We're trying to organize them so that developers can easily access them and verify that what's been implemented matches intent. This is messy mostly because Toyota has a very messy legacy with defining these requirements. There's a giant organizational issue. That's the quick version.

---

## Team Structure and Requirements Intake

*10:41*

**Dan Maser**: No, that made a ton of sense. In terms of that top-down intake you were describing — is that just you doing it, or is it all of Julia's team? Do you mind listing off the players in that space?

*10:57*

**Hannah Lane**: Yeah, so there's a bit of history to it. When I was initially hired, the idea was to take what we call SWRDs — Software Work/Interface Requirements Documents — that ultimately come from Toyota but have been passed through a couple of different groups to massage them into something more workable for Woven. They're very messy. They're all over the place. They're written by different teams at different levels — some very high level, some very low level. Some are in Japanese, some are very poorly translated. It's a real mixed bag.

My initial task, in one sentence, was to make sense of these and give them to the behavior team. That was a very difficult task given the sheer volume, plus all the other reasons I listed.

Recently there's been a bigger effort to include more people from my team — actually everyone from my team — to try to organize things in a way that makes more sense. Instead of everyone doing everything at once, now everyone has a specific function. I'm doing out-of-lane maneuvers, there's someone on in-lane maneuvers, someone on urban, someone on roll-out, and so on.

A lot of the tension actually comes from working with the people who write the requirements — the CA team. So we've pushed another team in between us and CA. Whether this is a good idea is still TBD. My role is now to work with this PDM team — the team we've inserted between us — and help define priorities and massage the requirements into an actionable state. The goal is to make sure requirements make sense and are deliverable to developers. And then, in the next two weeks, I was actually going to work on writing test cases so that once developers get these requirements, they can implement them.

*13:21*

**Dan Maser**: That makes sense. Quick follow-up — you said the new step is working alongside the PDM team. Is that the Product Delivery Managers?

*13:35*

**Hannah Lane**: Yeah.

*13:37*

**Dan Maser**: Okay. So you're not a Product Delivery Manager.

*13:39*

**Hannah Lane**: No, I'm a systems engineer.

*13:45*

**Dan Maser**: Makes sense. Gus, any questions about responsibilities or team composition before we keep going?

*13:57*

**Gus Schissler**: Just trying to get my acronyms straight. Product delivery is usually the acronym PD, and product management is PDM, right?

*14:09*

**Hannah Lane**: I'm not sure. Everything is a little different at this company than other places I've worked. We don't really have a product team in the traditional sense — our product team is Toyota. They're the ones defining our high-level requirements. So then we have this PDM team, which they call themselves and we call them as well. I think PDM stands for Project Delivery Manager. I kind of think of them as liaisons between us and Toyota.

*14:46*

**Gus Schissler**: And that's the group now inserted between the CA team and you folks.

*14:53*

**Dan Maser**: I believe Julia talked about this group as well. Are they the ones adding things to the long-term roadmap and the quarterly roadmap? And I believe they're also the ones who create the SWRDs, if I'm correct?

*15:10*

**Hannah Lane**: Well, the SWRDs — that's a side project mostly. It's a little confusing. I don't fully understand why they're there.

*15:24*

**Dan Maser**: Makes sense — in a big company, it makes sense in the sense that it makes no sense. Good to know. Did that clarify your question, Gus?

*15:41*

**Gus Schissler**: Yeah, I think so.

---

## Workflow Walkthrough — PRD to JAMA

*15:43*

**Dan Maser**: So if you don't mind, I'm going to screen share really quickly. What we'd love to do — and you kind of already showed us with your document — is walk through how you do this in practice, because that's where I feel like we've heard a lot of the chaos comes from. You can see my screen, right?

*16:26*

**Hannah Lane**: Yeah.

*16:28*

**Dan Maser**: Great. We've been doing this with other groups as we talk to people. Do you mind if we talk through these steps? And if they don't make sense, we can rewrite this flowchart.

*16:50*

**Hannah Lane**: Yeah. Would it be easier if I just shared my screen and walked through exactly what I do?

*16:55*

**Dan Maser**: Absolutely. I was thinking it would be a bit of a back-and-forth anyway. Let me stop presenting.

*17:03*

**Hannah Lane**: So this is the deliverable from the PDM team — the PRD for lane transitions. They have every single grouping of features that we're supposed to be delivering every quarter. This covers in-lane capabilities, lane transitions, urban, and environmental degradation. Lane transitions is definitely the most mature of the lot for historical reasons.

So basically, we have reviewers who are supposed to agree to this, and this is supposed to be a quarterly scope. Once a quarter, we're supposed to have a completely updated, revamped PRD — I don't actually know what PRD stands for, funnily enough. Then we have this working team where everyone is supposed to have a role. I should be written in here, but I don't have edit access.

This is the meat of the document: a features and requirements list where everything is prioritized. Within each of those priorities, we have SWRDs. The SWRDs are what is delivered from CA and ultimately Toyota — these are what we need to pass in order to launch our product.

If I open one of these up... so these are stored in Git. This is what a requirement tends to look like. They have a unique ID, the requirement text, and ultimately an interface and a specification.

My job has two parts: first, I work with the behavior team to make sure this is implementable this quarter, since the PRD says it needs to be. Second, I need to version-control it, because right now we don't have good version control — these change all the time without us knowing. No one alerts us that they changed. So our strategy is to copy and paste the requirement directly into JAMA.

*19:46*

**Dan Maser**: This is super helpful. Thank you.

*19:53*

**Hannah Lane**: I don't know if I'm going off on tangents. Oh — I'm authenticated out. One second.

*20:10*

**Gus Schissler**: Dan, I can also take notes in the FigJam if you'd like so that you don't have to.

*20:17*

**Dan Maser**: This is totally fine — it's how you work. But you can do both if you want.

*20:31*

**Hannah Lane**: So this is our JAMA project. It definitely needs some reorganization. I have two nodes defined right now: SWRD and out-of-lane maneuvers. I've started the process of simply copying and pasting exactly what I just showed you from the previous window into here. I make sure to include a link to the Git repository, because I know they're going to change the requirements and I want to be able to say, "Hey, I did this work based on version 2.0." That's a pain point right there.

Then — and this is the document I already shared with you — I started defining test cases for each of these requirements and linking them upward to the associated SWRD. So a SWQT (Software Work/Interface Qualification Test) links up to the associated SWRD, and vice versa. These test cases were defined mostly with the help of LLMs — I didn't type all of this by hand. It's not 2019 anymore.

Ultimately, where I'm hoping this goes: the behavior team should have some input into whether they can and want to implement these. It shouldn't just be prioritized in a vacuum. They implement the requirements, implement the test cases, and then there's some sort of traceability mechanism where we can see whether they're passing every time we run a release.

---

## SWRD and SWQT Relationship

*22:36*

**Gus Schissler**: Quick question — the SWRDs and the SWQTs, are those normally one-to-one? One test per requirement?

*22:47*

**Hannah Lane**: Not necessarily — at least one-to-one, but it depends. The trap with SWQTs is you can write them forever. I've been doing about one SWQT per SWRD so far, but I'm just one person. At GM, I've seen hundreds of SWQTs per requirement.

*23:18*

**Dan Maser**: Quick follow-up: the SWQTs always trace up to one singular SWRD, right? Is there ever a case where one test covers two SWRDs?

*23:41*

**Hannah Lane**: I don't think so off the top of my head. I'm pretty sure each SWQT always goes up to one singular SWRD — though I could probably think of an exception given enough time. We can ignore that exception.

*24:03*

**Dan Maser**: Makes sense. Also, just to confirm — when you say "behavior team," those are software developers or engineers?

*24:12*

**Hannah Lane**: Yes.

*24:15*

**Gus Schissler**: You mentioned that each person on your team is in charge of a different function, and you're working on lane change. Is that primarily just with the behavior team? And would someone else on your team be working with a different team entirely?

*24:32*

**Hannah Lane**: That's a great question. The way things are shaking out is it's all going to be behavior, quote-unquote. There will be different point contacts within behavior, but ultimately we're all trying to define the performance of the autonomous vehicle. Some requirements are a bit weird, though — like some map-link requirements might not go to the behavior team, they might go to the mapping team. But I haven't dug into that enough for it to be a problem for me yet.

---

## Where Requirements Are Stored

*25:14*

**Dan Maser**: Another quick question — you said requirements are stored in Git. Are all the requirements you deal with in Git? We've heard they're often in various places.

*25:33*

**Hannah Lane**: All the lane change requirements I've seen so far are in Git. Going back to the behavior question — all the ones I've seen that go to behavior tend to be in Git. But it varies by team. The map team was in JAMA actually, and the perception team was in a Google Doc. That was all the tooling they had available.

*26:07*

**Dan Maser**: That makes sense. In terms of understanding the context of a feature and deciding what actually goes into JAMA and into the SWQT — how are you doing that? Like, how are you deciding what to put in from what you got?

*26:44*

**Hannah Lane**: So this is the PRD from the PDM team. Every one of these links is a link to either a JAMA or a Git requirement. I start at the top because that's highest priority. I open it, and I copy and paste the requirement verbatim into JAMA. For example: "Dynamic LC900 interface" in the PRD links to "Dynamic LC900" in Git, which then becomes "Dynamic LC900" in JAMA. I just use the copy button and paste it in.

For the SWQTs — defining the test cases — it's mostly reading the requirement and trying to understand it. They're not very intuitive to read in plain English, because they're literally just dropping Japanese requirements into translators. It's difficult to parse. But I've discovered that large language models are really, really good at this. If you copy and paste the requirement and say "can you rewrite this in plain English," it does a great job.

And then writing the test cases — you want to look at all the inputs, especially edge cases. So for one like "custom software for lane change proposal based on traffic situation" — that's going to be a boolean input (true or false). If it's true, you verify the output matches what the requirement says. If it's false, same thing. Then edge cases: what if it changes from true to false? What if it changes from false to true? What if it stops receiving the signal altogether — does it latch as true or false? And so on.

*29:29*

**Dan Maser**: So it sounds like the LLM helps you clean up the language and strip the jargon, and then you use basic logic to make sure the tests are sound. Then you skim it to verify the logic holds.

*29:59*

**Hannah Lane**: Yeah, exactly. I had to do something similar at another company about a year ago, and the LLM is already so much better than it was then. A year ago it got me about 70% of the way there. Now I'd say it gets me about 90%.

*30:19*

**Gus Schissler**: LLM-wise, are you using WOVI or a different tool?

*30:24*

**Hannah Lane**: I'm using WOVI, and I'm using the Gemini option within WOVI.

---

## Version Control

*30:39*

**Dan Maser**: So you were talking about version control. It sounds like part of how you handle it is noting the version at the SWRD level in JAMA — like "2.0" in that example. How do you stay on top of when things change? Do you manually check them periodically?

*31:02*

**Hannah Lane**: So this is probably the biggest issue we have right now. I'm actually technically not supposed to be looking at the full CA requirements page according to our defined process — I'm supposed to get individual links from the PDM team, copy and paste what I see into JAMA, and then never look at that page. But up here you can see all the different versions they've released. We're all the way up to version 2.2. There's a change log somewhere that I can never find.

Basically, the problem is that we're so far removed from the writers that requirements will change and we won't be told about it. Here's a painful example — this map-link one has all these TBD comments. The requirement itself says "propose a mainline lane change to reach the destination." I have no idea what that means. The reason given is "because a lane change is necessary to reach the destination." And the specification is "set up the lane change proposal in the lane change proposal section shown below necessary for reaching the destination. Regarding the regulations for section settings, it is TBD." Either huge translation issues, or it's just incomplete.

My feedback to the PDM team is: "I don't get it. Please finish it. Please elaborate. Please do something." What happened about six months ago when I raised this was — they actually listened, but they didn't tell me. I thought I was shouting into a void, and they ended up changing everything without letting me know.

So we need a way to know when things change. Our strategy right now is to copy everything into JAMA with timestamps and version numbers, so that if things blow up later, we can point to the record and say, "We did all our work based on this version of this requirement."

*33:52*

**Dan Maser**: So even for a bad example like that — you still put it into JAMA, do what you can to document how incomplete or illogical it is, and then say it's done but flagged? Would you tag it in some way?

*34:34*

**Hannah Lane**: We haven't gotten that far yet. I just had this thought in my last meeting — we have a button to transition an item from "new" to "review." I was thinking we could just use a state transition like "draft" or "in review" and never move it to "approved," since we didn't agree on it. But I haven't implemented that yet.

*35:03*

**Gus Schissler**: On the Git side — is it the CA team that's changing things and updating versions?

*35:13*

**Hannah Lane**: Yes, exactly. But the PDM team is supposed to be tracking all those changes and negotiating them on our behalf.

*35:23*

**Dan Maser**: Gotcha. So are you saying theoretically there should be fewer of these problem cases, but you just haven't seen that play out yet?

*35:31*

**Hannah Lane**: I don't think that's what I'm saying. This is ultimately a requirement from Toyota that's been massaged for our use cases by the CA team. CA is in this weird position between Toyota and Woven — and CA doesn't like us for political reasons, so they won't talk to us directly. What we've done is inserted this PDM team between us and CA. The PDM team will negotiate with CA on our behalf. But I don't like it because now we have two groups between us and the ultimate Toyota requirement. It's weird.

*36:42*

**Dan Maser**: So let's say there's already a V2 in JAMA and then a V3 gets released. How do you stay on top of it? Is there any kind of cadence?

*37:14*

**Hannah Lane**: This is another thing — there are so many pieces of this puzzle that hinge on the PDM team doing their job, which is why I don't like this process. But Julia disagrees — she thinks it's the greatest process ever. So we'll try it. 

Basically, this is supposed to get released every quarter. The owner of this document for the lane change transitions tab is Masutani-san. He's supposed to stay on top of each of these links. Ideally we get the PRD approved this quarter, implement everything specified, and then part of his job is to flag if anything changes and let us know. Part of the approval for next quarter will be me going through and verifying that all the requirements are still the same.

That is a massive ask for him. I probably haven't even scrolled to the bottom of this thing. There are hundreds of requirements — just for this quarter, just for lane change. When I was working on this last year, it was around 600 requirements.

*38:40*

**Gus Schissler**: And that's just for lane change.

*38:43*

**Hannah Lane**: Yeah.

*38:44*

**Dan Maser**: And the changes are tracked in Git — that's when a requirement gets updated?

*38:55*

**Hannah Lane**: Yes. His job is to click that link and see if anything has changed. That's one of my bigger worries with the whole process. If you guys can automate that, that would be great.

*39:13*

**Dan Maser**: That's one of our goals. And just to confirm — for lane change, all the changes live in Git, but for something like the perception team, they might be in Google Docs?

*39:32*

**Hannah Lane**: Yeah. And our goal is to get all of those requirements into JAMA so we can version-control and do all the traceability magic that JAMA enables — because Google Docs is almost useless for requirements.

*39:56*

**Gus Schissler**: Are all these requirements essentially in a GitHub repo somewhere, with a presentation layer on top of what we're looking at?

*40:16*

**Hannah Lane**: I don't know — I don't know what that means exactly. The GitHub link would probably bring you to the actual code repository. I'm not sure of the underlying structure.

---

## Organizational Structure of Requirements

*40:58*

**Gus Schissler**: So you're in charge of the LCA tab?

*41:04*

**Hannah Lane**: That's another complicated thing — they've changed how they organize these requirements several times. I'm in charge of out-of-lane maneuvers, which includes the LCA tab, but also things like merging and branching. So the way it's organized doesn't fully reflect my responsibilities. It does, but it's not super intuitive.

*41:43*

**Dan Maser**: To complete the flow — when you're done writing out the requirements and tests, how do you signal that? You mentioned hoping to add a tag. Right now there's no tag, so how do you say, "I'm done with this section"?

*42:11*

**Hannah Lane**: I haven't finished anything yet, but the way I think it's supposed to work is: I ultimately need to sign off on the PRD — like, "Yes, I agree to implement all of these SWRDs this quarter." Copying them into JAMA is not something I necessarily need to track — it should be kind of negligible work, just a copy-and-paste job. Writing the test cases, though — I don't yet know how we're going to track completion for that.

---

## Behavior Team Alignment

*43:15*

**Dan Maser**: Earlier you mentioned working with the behavior team to see if requirements are implementable. Do you ever get to a point where you need to consult them to actually write the test cases?

*43:41*

**Hannah Lane**: No — writing the test cases is pretty straightforward based on the requirement itself. The behavior team's input is incredibly important for understanding and accepting the requirement, though.

*43:57*

**Dan Maser**: Can you remind me when that step happens in the flow?

*44:02*

**Hannah Lane**: Before I sign off on the PRD. We haven't signed off for this quarter partly because the behavior team's priorities are completely out of line with what the PDM team wrote. For example — this one is a requirement about input from an HMI interface. We don't have an HMI interface right now because we're on dev vehicles. So it was a weird choice for highest priority. The behavior team looked at "highest priority: HMI interface" and said, "This doesn't help us at all," and moved on. So we're blocked in getting that alignment.

*44:53*

**Dan Maser**: So adding requirements to JAMA and writing the test cases is one workstream, and then separately you're working with the behavior team to check whether these things can actually be implemented — those are two distinct checks.

*45:17*

**Hannah Lane**: Yes, exactly.

---

## Ways Requirements Get Pushed Back

*45:19*

**Gus Schissler**: When you look at requirements with the behavior team and things are aligned priority-wise, what are the different ways they might still disagree with a specific requirement?

*45:38*

**Hannah Lane**: Let me think. If there are TBDs in the requirement, that's low-hanging fruit — the requirement's simply not complete. We actually had one today: lane change is divided into two halves — before and after the lane boundary. There were two requirements calculating the minimum distance a car in your target lane must be for the lane change to be valid. That calculation was actually different on each half of the lane change, meaning a lane change could be valid on the first half and invalid on the second. We were like, "This doesn't make intuitive sense" and had to send it back to CA. I'd call that a content disagreement.

I've also seen typos where something should probably be "false" rather than "true" — stuff that just didn't get reviewed carefully enough. We work with CA to resolve those.

There are also interface discrepancies I'm expecting to see eventually — where the requirement says we should be receiving a signal from a certain module, but they're actually sending us something else. "Can you double-check this?"

And then there's the over-prescriptive issue. These requirements were originally written for the TSS-4 — the Toyota Safety System currently deployed in production vehicles. They were written in rules-based logic, but we're implementing in ML. Having overly prescriptive requirements from a rules-based system is very limiting for an ML approach. I was pushing back on that over-prescriptiveness last year, and I expect there'll be a lot more of it eventually.

---

## Strategy: Get Everything Into JAMA First

*48:39*

**Dan Maser**: Just to clarify — even for these problem cases, you still copy the requirement into JAMA, still put the test cases in, and then it gets pushed back?

*48:57*

**Hannah Lane**: Ideally I would resolve these issues before writing the test cases, but nothing is happening in an ideal workflow. My strategy right now — and I don't know if it'll work out, I've been wrong half my life — is to just get everything into JAMA. Then I can say, "We're passing zero out of 7,000 test cases," which I think will drive action faster than trying to describe the problem in words.

*49:52*

**Dan Maser**: That makes sense — because once it's in that medium, people can change it in JAMA directly, and you're literally setting the ground truth for where these things live.

*50:01*

**Hannah Lane**: Exactly. Right now if someone three levels above me asks how the requirements are going, I can try to describe it. But if I can pull up JAMA and show "zero out of 7,000 test cases passing," that drives urgency much faster.

---

## Magic Wand — Systemic Wishes

*50:21*

**Dan Maser**: We're doing great on time. As we wrap up — if you had a magic wand and could change this process in any way, what would be most ideal?

*51:15*

**Hannah Lane**: I wish we could get the requirements directly from the source. All these different filters that we're running things through — we're partly doing it to ourselves, and that's probably wise given the political nature of the company. But having all these layers between us and Toyota is making it really annoying. That's my first magic wand.

*51:47*

**Dan Maser**: What specifically makes the layers annoying? Communication was one — is there anything else?

*51:59*

**Hannah Lane**: Communication is the big one — specifically not knowing when things have changed. Also, we can't fix things ourselves. If we notice something's wrong, we can't just go in and fix it, which is really different from other companies I've worked at.

And also — because this process we've set up is so cumbersome, extra unofficial channels keep appearing. Right now the developers are talking directly to CA to figure out their own requirements, because they still have deliverables to hit even if they disagree with our priorities. I think that's actually driving even more confusion and more versioning issues. But you also don't want to shut it down because they're getting work done. So that kind of sucks. Communication times three.

*53:16*

**Dan Maser**: You were saying something else before I interrupted you.

*53:19*

**Hannah Lane**: Oh yes — I also wish this was better organized. The requirements being delivered are just organized in a way that doesn't make a lot of sense. Have you seen Toyota's V-structure? With the STCRDS, SWRD layers, and so on?

*53:43*

**Dan Maser**: Yeah, with the STCRDS and all that.

*53:48*

**Hannah Lane**: Right now we're trying to fit everything into that V-structure, and I think it's making things really regimented in a way that's making it difficult. SWRDs are only supposed to define interfaces — what information goes into a component and what comes out. That's all a SWRD should say. But that's not what's been written. We're getting a ton of performance requirements, functional requirements, and all sorts of other things from CA. It's all useful information, but it's really difficult to fit into the SWRD box.

Julia is trying hard to start an effort where only interfaces live in SWRDs, but then all that other information has to move somewhere — and that opens up questions of where, how, and what's the review process. I think it would be much easier if our flow structure were less rigidly defined.

*55:10*

**Gus Schissler**: When you talk about interfaces — inputs in and outputs out — is that because we're talking about behavior specifically as a development team, or is that how SWRDs work for any team?

*55:23*

**Hannah Lane**: That's what it's supposed to be for any team. Here's an okay example: this requirement lists the outputs we're supposed to produce. I'm a little surprised it doesn't also have an input. For example, "blinker request left" is an output — but I'd expect "blinker status" to appear as an input somewhere. And this extends beyond just behavior. If you think about the Woven system as a whole, we're just a hardware box. We don't have any sensors. We can't actuate brakes, the steering wheel, or anything. Everything we receive has to come from another ECU, and everything we request has to go to a different ECU. The SWRDs are supposed to define how we get all our information and how we send it all out.

*56:40*

**Hannah Lane**: Even perception, planning — anything happening within Woven needs to have an interface. We're like a little blind baby. We can't actually do anything on our own.

*56:54*

**Gus Schissler**: That's a really good way to put it. You can't sense anything organically and you can't affect any change either — you're purely taking inputs and giving outputs.

*57:08*

**Dan Maser**: Great context. Gus, Nate, any last questions?

---

## Magic Wand — Tooling Wishes

*57:20*

**Gus Schissler**: I'll ask for one more magic wand — maybe a bit closer to what we can actually control. We're in the stage of trying to understand your process and its pain points, with the hope that Dan, Nate, and I can figure out how to build a small, useful tool that reduces the overall pain. With that context — are there common pain points that would be nice to magic away?

*58:25*

**Hannah Lane**: The big one is traceability. If we could get a tool that confirms: is there a unit test in Git, a test case written in JAMA, and an associated requirement — and that that full line exists for every single requirement — that would be awesome. Bonus points: check whether the test case actually passes or fails when it runs.

I have a document with a wish list for that — I can share it if you're hoping to implement something. Those are my two big ones.

If we could automatically generate test cases off of the requirements, that'd be incredible. Right now I'm just copy-pasting into an LLM and I have to do that 700 times. If that could be automated, it would save an enormous amount of time. And if a requirement changes, having the system automatically flag or even update the associated test case would be really cool.

*59:58*

**Hannah Lane**: And building on the traceability piece — I don't think you'd want to auto-update the requirement itself, but what would be cool is: if I unlock a requirement in JAMA, the system also unlocks the associated test case and requires me to work on it to get it back to passing status. Sending an automated email to the person who owns the unit test in Git — "Hey, just a heads up, we unlocked this test case, you may need to go fix it" — that would be full automation. Even half of that would be really cool.

*01:00:40*

**Dan Maser**: Awesome. Well, we are at time. Hannah, thank you so much. If you don't mind sending us that document you described — the one about test case pass/fail tracking — that would be great.

*01:00:58*

**Gus Schissler**: Yeah, thank you so much. This is definitely not the last you'll hear from us.

*01:01:04*

**Dan Maser**: Also, if you're able to track down where the recording from this meeting lives, that would be incredible.

*01:01:10*

**Hannah Lane**: Yeah, I can email it to you. I don't know how you'd pull it down, but you could maybe screen record it.

*01:01:22*

**Hannah Lane**: Did you get that document I just shared? Yes. Thank you for confirming.

*01:01:27*

**Dan Maser**: Perfect. Got it and I have access. Thank you so much again.

*01:01:30*

**Gus Schissler**: Bye. Thanks, Hannah.

---

*Recording source: [AO × Hannah User Interview — 2026/03/03 17:00 EST](https://drive.google.com/open?id=1L-4V0IPwKThUC6h9l4VgiWHA7fQa4DRs)*
