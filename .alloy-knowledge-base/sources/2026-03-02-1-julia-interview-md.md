---
id: s-h7PvSfrG8r0F
type: source
name: 2026-03-02-1_julia-interview.md
path: 2026-03-02-1_julia-interview.md
format: raw-transcript
topics: [general]
status: complete
ingestedAt: 2026-03-04T20:53:32.296Z
fileSize: 56598
extractedAssertionIds: [a-KJCQpzqHiySr, a-FxvJsT2p-MEI, a-ogskz6Pqyo7Q, a-6LzgoMJ8dYOI, a-6bf0KyK0n8pL, a-V_ihnxNE_JUK, a-R52CHXmg11n0, a-fyrq9qeXA4-4, a-KSnq_WQacfCD, a-BwKhbe-O_lgF]
---

**Gus Schissler**: Cool. Alrighty. And then I'll share my screen. We've got a lot to get through today, so that's why I'm kind of just jumping right in. So I'll share my screen. This is a, I mentioned this at the top of the, like, the Google Doc, where we posted some of the questions that we have. Sorry, I'm just showing some more windows. The goal of this session is really to… help us, like, get up to speed from the groundwork perspective. It's really nice to work with a product org in that you folks understand, like, iterative development and… like, figuring out the problems to solve and, like, experimenting with how we might solve those. So, a lot of those, like, basic concepts that we would normally cover in a concept… in a kickoff with, some of our other clients, we don't really need to cover too much with you folks, so… The… the purpose of this hour… Is to run a… kind of like a… a quick, broad overview of software development at… Woven. Then go a little bit deeper into product delivery, and how… what role product delivery plays in that lifecycle, and then talk about the… kind of, like, the scope of item 10. Like, what are the problems or the sticky points that we want to make sure we address as we're starting to work on building some sort of solution?
*00:00*

**Julia P**: None.
*01:27*

**Gus Schissler**: it… ideally, this isn't going to be me and Dan just talking at you. Like, if you have, ideas or a thought, feel free to interrupt us at any point. Ideally, this is more of a conversation, so… Cool. Any questions before we dig in?
*01:28*

**Julia P**: No, it's a lot of legacy that we will have to go through, but yeah, let's get started. We carry a lot of history with us, yeah.
*01:46*

**Gus Schissler**: Yeah, so a lot of this stuff comes from some of the recordings that you've shared with us, talking with Wovee as well, looking through a few different things in Confluence, too, and processes. So we have… I've got, like, a high-level,
*01:55*

**Julia P**: That's genius.
*02:10*

**Gus Schissler**: Blueprint of how, software might work, and we want to just make sure that we're correct, I guess, where we're talking about this.
*02:10*

**Julia P**: That's gonna help me as well, you know, to put things into place, because it's confusing, yep.
*02:19*

**Gus Schissler**: Cool. So, everything kind of starts… by getting some sort of, requirement, or user need or vehicle need from Toyota, Toyota Motor Company. that is kind of like a… I think it gets distilled in something called a URD, or a user requirements document, and that's kind of like the… if I were to write a very high-level user story or an epic, that's kind of what, it would be. And once Toyota writes that stuff and sends it over, it sounds like the customer application team, kind of receives that on Woven's end, and helps understand Okay, here are all of the different teams and the interaction with the product org and other teams across Woven that may need to take part in whatever specific user requirement that thing is. Is that pretty good at a high level?
*02:23*

**Julia P**: On a high level, yeah, exactly. So, we get everything from, TMC. One important aspect is that it's not… written for us in any way. So it's written on the vehicle, have a system of systems. And it's oftentimes just what they had before. It's a copy and paste.
*03:23*

**Gus Schissler**: Okay.
*03:42*

**Julia P**: So, very old school. And then it might not even really describe what they want to have in the end, so they keep iterating as we go. That's another part of this. So yeah, very high level, coming from TMC. Yeah, and not well-defined, always, and change.
*03:42*

**Dan Maser**: Really quick comment on that question. Because it's a copy of paste what they had before, I think… I think Andrea was talking about this a little bit. Because you're implementing new software, how often is that copy-paste model just outdated, then, based on what you're currently working on?
*04:02*

**Julia P**: Every single day.
*04:16*

**Dan Maser**: Okay, cool. Figured I just wanted to clarify. Yep.
*04:19*

**Gus Schissler**: The… And, another double check, you mentioned, and I've seen this in a few different places, system of systems. When we say system of systems, that's, like, the vehicle. Like, that's all of the different things that are interacting to make the autonomous vehicle work.
*04:23*

**Julia P**: Exactly, yeah.
*04:40*

**Gus Schissler**: Good note. So those requirements are coming in, and it sounds like there's probably some back and forth trying to figure out, maybe between the product org and product delivery, like. What are the actual requirements, or the actual teams that need to… Be successful in order for that user requirement to…
*04:43*

**Julia P**: Yeah, that part happens way too little between product delivery and product. So usually product takes in… From customer application, they communicate a bit more as to what is the requirement. Oftentimes, I feel it's just a copy and paste. of what comes in from TMC. Yeah, not really thinking about what this means. It's not… they don't translate this into our system, necessarily.
*05:02*

**Gus Schissler**: Gotcha, okay. So this kind of, just to reiterate, product is handling more of that, instead of product delivery being included with that conversation. Exactly.
*05:29*

**Julia P**: Yeah, so product is basically building the roadmap long-term and short-term on a quarterly basis to tell us, you know, or give us the target as, you know, you have to meet 100% passing of these requirements tomorrow. That's usually what we get.
*05:41*

**Gus Schissler**: Okay.
*05:56*

**Julia P**: And then we start digging into the requirements, and then we don't understand anything anymore, because the requirements are confusing. Yeah.
*05:57*

**Gus Schissler**: Gotcha. So, after product splits out that work, does that then just go to each of the, like, the development teams, to kind of split that out and work on that in terms of, like, sprints or whatnot, or are there a few other…
*06:04*

**Julia P**: Yeah. So that's where it also gets a bit more complicated. So… Last year, basically, and I'm just talking about one specific group of requirements, the SWRDs. But they are mostly coming from TMC. And… They got, basically, their thinking was at the very beginning. TMC requirements, then customer applications, you know, make sure it's translated and, you know, more digestible, and then the plan was to just throw it at us, at the developers. We weren't even included, product wasn't really included. Throw it at developers, and expect them to implement any test. And say Path of Faith. That did not happen at all. And then we stepped in. My team was asked to step in, to build that bridge a bit more of taking in the requirements, discussing them with the developers, because the developers are signed up to, create the tests. So we are basically just in the middle of trying to, yeah, take in the information of the requirements, digest them with the developers, and providing feedback. So that happened last year a bit. And the main feedback of many of these requirements were, like, they're not written for our system, we can't use them in an ML-based system. And then we communicated this back, basically, to CA, and therefore also TMC.
*06:18*

**Gus Schissler**: Okay.
*07:41*

**Julia P**: And yeah, product was not much part of this at the beginning, basically.
*07:42*

**Gus Schissler**: Gotcha. So, few more steps in between here, and it sounds like there's… when you're talking about, It's not just that the team starts working on requirements, it's that. They get the requirements, and then they also have to think about the tests, or the success or pass-fail criteria for what those requirements might look like before they…
*07:48*

**Julia P**: Pass and fail is usually given with the requirement, so the pass and fail, we know, but the problem is that they are written… not written for internal product, basically. We are just a tiny part of the whole system. And they just throw out something that does not make a lot of sense to us, because we have to translate this and what it means for us. It was last year super confusing, because us meant, like, many different components scattered around everywhere, so we had… we couldn't pull in the requirements that way, the structure didn't work for us at all. So now we have… maybe talk about, like, what's the new approach that we want to go with, is… that, you know, product takes in all the requirements. Product folks in a PRD on a quarterly basis, so they deliver, all those requirements, I put them in a table in the PRD and say, like, this is your target for the quarter.
*08:15*

**Gus Schissler**: Okay. And then…
*09:10*

**Julia P**: We are supposed to take them in, so my team plus developers?
*09:12*

**Gus Schissler**: Review them, that's…
*09:16*

**Julia P**: what we're fighting for, because currently we don't even get a review, it's just, you know, due, and then we come back and say, can't, because it doesn't work. So, we're trying to get this in a review phase as well, so we will still get the requirements from product, and we will have to push back a lot, because they're still the exact same links as we had before.
*09:18*

**Gus Schissler**: Gotcha, okay.
*09:36*

**Julia P**: So they're not doing much more than saying, oh, I take in these 3,000 and put them to 100 for a quarter, and here it is. They don't do much more than that. Gotcha. And right now, we are in this communication phase of, you know, if you push back to requirements, what is the change management process? We don't have anything. So we're pushing for product to say, hey, within the PRD, there must be an approval or alignment phase that we can push back, and once that's done. If you still need to change requirements, there must be a change Management Change Requirement Board. process something that we're trying… we're building up right now as well. Gotcha, okay. So that's hopefully the process soon. PRD summarizes it, my team, product delivery plus development. Looks at it. My team creates test cases, then?
*09:37*

**Gus Schissler**: Okay.
*10:28*

**Julia P**: Based on the requirement. And then… We deliver this technically to development, and they implement the unit tests.
*10:29*

**Gus Schissler**: That makes sense. And I think what you're describing is something that we've seen as well, is, like, this.
*10:42*

**Julia P**: Yeah, exactly. Yeah, this is what we put together after our long, long weekend, weekend workshop with product, yes.
*10:47*

**Gus Schissler**: This is really… this is getting at exactly what you're describing of, like, it needs to come down before it goes back up, and ideally… Cyclical approval process baked in here, too.
*10:55*

**Julia P**: So now there's also a new alignment in the sense that we will… how we will read the SWADs? Problem is, they are… what you see in the red, basically, is, the system of systems. Which means it's written for the whole vehicle, and then the level below is the SWRDs are written for just, you know, what you see in the upper part, like the purple IPA block.
*11:05*

**Gus Schissler**: Gotcha.
*11:33*

**Julia P**: we got this in the architecture. We haven't had that before. This block before was, like, many, many components, basically. And now we expect the SWRDs to be written against this purple block.
*11:34*

**Gus Schissler**: Gotcha. Okay.
*11:46*

**Julia P**: But they're not rewritten that way, we have to interject them in and reinterpret them that way, which makes it a bit… hard sometimes, but yeah, so there's a lot of back and forth still happening within the requirement.
*11:48*

**Gus Schissler**: And then it sounds like some of these architecture diagrams are what we'll talk about later today, when we talk about the…
*11:59*

**Julia P**: Exactly. Yeah, that's the purple step below, basically. That's where we need the architecture for.
*12:05*

**Gus Schissler**: Gotcha. Awesome. Okay. I won't… we won't dig too much into that yet. We'll just come back to where we were before. Before I move on, Dan, did you have any… any questions now that we're down at the bottom of the…
*12:12*

**Dan Maser**: I don't think so. I… no, I think… I think all of this makes sense. Thank you.
*12:30*

**Gus Schissler**: Yeah, no worries. So… Team works on their own code, There's… it sounds like there's some, maybe some… back and forth a little bit, like, if the team starts working and then they realize, like, a requirement doesn't necessarily either make sense or, needs to be revised a little bit, that's probably communicated back out to product delivery, or product or something like that?
*12:36*

**Julia P**: process we are trying to build right now. We don't have a process for that. I think even before that. You have, what team are you in right now?
*13:06*

**Gus Schissler**: These are the development teams.
*13:18*

**Julia P**: The development, yeah. So if you, for product delivery.
*13:20*

**Gus Schissler**: What comes before that is basically the part where…
*13:23*

**Julia P**: We translate this into… that's what we want to do. We translate this into a test case in Jama.
*13:27*

**Gus Schissler**: Gotcha.
*13:34*

**Julia P**: That's what we want to get to. an SWQT.
*13:35*

**Gus Schissler**: Gotcha. Quality test? QT? Software qualification test, yeah, exactly. Gotcha.
*13:44*

**Dan Maser**: And this is you translating the… the… the pro… well, ideally, this is you translating the PRDs, correct?
*13:52*

**Julia P**: Yeah, yep, exactly. Or, let's say, in the PRD, we will have more than the SWRDs, so it's translating, in this case, the SWRDs into test cases.
*14:00*

**Gus Schissler**: Gotcha, okay. And this is… SWRDs are one step down from the system. level, so the… that's at… Where there could be multiple Qualification tests for each of the different teams, based on how the work is split out.
*14:12*

**Julia P**: Yeah, exactly.
*14:29*

**Gus Schissler**: Okay. That makes sense to me. Then we'll go through… the teams will go through, they'll work, maybe some back and forth in terms of requirements, And then… When they're… when they believe they're done, each team is still in charge of, like, releasing to their own codebase, or, like, merging into their own codebase.
*14:32*

**Julia P**: Yeah, yep.
*14:58*

**Gus Schissler**: And then, once, I guess, a majority of the teams are complete, there's a step that, where all of the code from those different teams is kind of pulled into maybe the same build, or, Software release or something that can be actually, like, integrated together and tested together.
*15:00*

**Julia P**: Yeah, exactly. So the plan right now is… It might be a bit more complicated, but the… The main idea is that it's all unit tests. So the developers will create based on the SWQT's unit test. encode that's going to be implemented, and once that's up and running, we want to add this to the CI pipeline, basically, to CI testing, so that every new PR would have to go through these kind of test, the unit tests, basically.
*15:22*

**Gus Schissler**: Gotcha. Right now, they live locally somewhere.
*15:54*

**Julia P**: that they can run them. That's what they started. Some teams started, some haven't started yet. And then, Yeah, so that's the idea plan of, you know, what we want to build, yeah.
*15:57*

**Gus Schissler**: Gotcha. So the, and then this kind of, like. I assume there's some sort of, like, monitoring and, understanding of how… the quality or the health of the code for the specific releases. That leads to either saying that, okay, more work needs to be done, or everything works well together and it's ready for a release.
*16:08*

**Julia P**: Okay. Yeah, so that's all part of the release team. Once we have the unit test in CI, it goes the workflow that we already have, in the sense of, you know. There's a platform reviewer for every PR, so if CI is failing, then they would have to reach out to the developer, figuring out what's going on. Or the decision of your door, do we block a certain release based on failing test cases? That's all what happens within Kevin's team, basically, then the decision… yeah, cool. But they have their workflows.
*16:31*

**Dan Maser**: Yeah, we heard they have separate workflows with separate… yeah.
*17:04*

**Gus Schissler**: So, and I know we're still pretty high level, but assuming everything works well, then, Code gets released to a vehicle. Is there a step here that's, like, the… When we say, like, release to a vehicle, in my mind, that's, like, releasing to, Like, a test vehicle, not to, like, a consumer vehicle.
*17:09*

**Julia P**: Yeah, you can call this technically, a flywheel release. So, if you say flywheel release, that means it's a weekly release that's gonna end up in our vehicles for testing.
*17:34*

**Gus Schissler**: Okay.
*17:47*

**Julia P**: That would be Kevin as well.
*17:51*

**Gus Schissler**: Okay, this is Kevin.
*17:52*

**Julia P**: Kevin and the release team.
*17:54*

**Gus Schissler**: Sweet. Okay.
*18:01*

**Julia P**: So, one step we're missing there… Is the report that we need to generate. It's not only the code itself, but TMC, of course, wants to know. the whole traceability overview of what we're looking at. So now you have the requirements, you have the test cases, unit tests, are we passing or failing? We need the information about everything. What's the coverage on the requirements side of what we test, and what's the pass and failure rate on these tests, basically.
*18:03*

**Gus Schissler**: Gotcha.
*18:28*

**Julia P**: That's the overall report that we have to create in the end.
*18:29*

**Gus Schissler**: And that's the… that's product delivery that's building that, kind of.
*18:32*

**Julia P**: That will be in… yeah, mainly in my team, together with release, of course. But, so that's something Andrea has signed up to come up with, you know, what tool do we use for the traceability, because there's so many different sources that are… that take in information from different test cases. Because the traceability overview will not only be SWRDs, it will also be SBRDs, so other requirements that are coming in. Some will be, you know, tested on the vehicle, some will be tested in simulation, some will be tested in CI as unit tests, so we have to pull in all those pass-fail Information from different places to build the whole overview on the end.
*18:36*

**Gus Schissler**: Gotcha. So, this is… like, a… a part that we'll be addressing with the scope of item 10, I think, is, like, pulling in those requirements. Maybe not all the tests side of things, but definitely the requirements for the software.
*19:18*

**Julia P**: requirements side of things, yeah, because where we got stuck… I mean, there are many things we're stuck right now, but the very first part that, basically is… would help us right now the most is the very first part of the intake of the requirements.
*19:39*

**Gus Schissler**: Because we're just aligned with product that they're coming from the PRD, but they're just using the same links as before.
*19:55*

**Julia P**: Things change all the time. They add more stuff, they change requirements. we don't know about anything. We always have to say, oh, we're delayed, we're delayed, and then it's why, and then you have to go back and talk to 10 people. You can never build the full picture of Telling my director why we screw up all the time is because the intake is crap. That's what we need to do. So that's a huge pain point, and we have, like, tables and… Excel sheets that are reaching to other sources of requirements all the time. So, the biggest pain point for us is the intake. It's something that we need to have in one source. Where I can show, this is everything that I got. from product. CA, CMC, whoever, you know, delivers this in the end. But I have one source of truth, one place of thinking, this is what I have, that's my list for Q1, whatever, and now we're starting to work on this. I want to be able to show exactly when things within these requirements changed in the intake. As well as if they add more on top.
*20:01*

**Gus Schissler**: Okay.
*21:05*

**Julia P**: You need to be able to show this picture. Or, you know, if you need to push back, if things are not as we expect them to be written. And right now, that's… not really possible. And for that, we need the… and we can't, and we tried a long, long time to push for the… within the intake that we get from product, CA, and TMC, to say, hey, just put it on one project. One Java folder, whatever it is, must be the same source, so that we can take this in with the change management control in any way. But they have it all in different places, and they will not change that fact. So all we can do is, you know, take it into our control of that we somehow still need to know when things change in the source itself.
*21:05*

**Gus Schissler**: Gotcha. Okay. Cool. That is… that's really helpful to delineate, I think, because at this point, we'll be… We're kind of, like, moving beyond this first step into the role that product delivery takes. Yeah. And so this is, like, this is the intake side of things. When we spoke with Andrea last week, we talked with her a little bit about, Like, the… it's not the, it's like the… the…
*21:50*

**Dan Maser**: It's, like, a different requirement.
*22:25*

**Gus Schissler**: Different kind of requirements gathering from the, like, bottom up, almost. So when we talked with her, and she did caveat this with, she started in October, so she is also still learning the ropes, but… Even before the new process, or the new system that you folks are working on, in her mind, she was talking about there being a backlog of software that's already written.
*22:26*

**Julia P**: That…
*22:54*

**Gus Schissler**: doesn't necessarily have requirements, like, in a centralized, single source of truth. So it's… it's, your… the intake is from the top down, and also, Andre was talking about from the bottom up, as well, for things that are already… Yeah.
*22:55*

**Julia P**: That's a good point, yeah, that's good to bring this up. So there are two words right now. One is, like, this whole legacy system from TMC, basically, you know, old-school ACC features, whatever, and they just throw these kind of requirements at us and say, build us autonomy, which, you know, is a problem on its own. And then, you know, building autonomy means, oh, you know, the urban is also part of it, drive on public road and urban. Like, you know, be Tesla tomorrow, basically, and that means There's also a bunch of requirements that are not there. Toyota does not have an ADAS system that drives door-to-door urban. So this is the other part of the story. So one is we have a lot of legacy that does not fall so good into what we're trying to do, but we have to use it, and we have to show we're passing these things. And the other part is, we're also building an urban system, autonomy system, basically, that does not have definition at all. So, we will have to come up. We can't wait for TMC to create all these requirements, so… because we're already driving it, basically. So we have to have also the capability to plug in their requirements that are coming from us. Mmm. To define performance of these kind of features, basically.
*23:10*

**Gus Schissler**: Gotcha.
*24:26*

**Julia P**: That's a good aspect that's also coming into the picture, yeah. Which I'm less concerned of, because at least it's in our control.
*24:27*

**Dan Maser**: Hmm.
*24:33*

**Gus Schissler**: Yeah, that was our… that was my next question around, like, relative priorities. of these two separate sections, which, to be clear, in my mind, they're all driving towards the same single source of truth around requirements in general. It's just which side they're coming from. Are they coming from TMC, or are they coming from the systems that have already been built?
*24:34*

**Julia P**: Exactly.
*24:57*

**Gus Schissler**: Okay. Yeah.
*24:58*

**Dan Maser**: Gus, do you mind just pausing really quickly? Just want to make sure, Julia, that I'm crystal clear. So, you talk about the legacy system, and I'm thinking about, like, that is the intake problem that we just brought up, and that is, that is exactly what we're outlining here, and the big issue is, like, this is a legacy system, so it doesn't sort great, and that's where you have this intake Tension between product and product delivery, and how that creates a mess in terms of, like. you know, I love that you said, like, intake is crap, and that just leads to delays. And then the other system, which is the softwares at Woven… software engineers at Woven, it's really… this is, like, the up… like, if that's, like, the intake process and, like, from the top down. from the bottom up, you have… you're doing urban testing, and so there are missing requirements, because TMC doesn't have the definitions of those, because you guys are so far ahead of them, for lack of a better word. And so those are the two… They're just both very similar, leading to issues, getting those requirements documented. Is that correct, before we keep moving?
*24:59*

**Julia P**: That is correct, yeah.
*26:03*

**Dan Maser**: Thanks.
*26:04*

**Gus Schissler**: Just to… I wanted to just walk us through this, a little bit, since, it is that other side that we heard from Andrea. She mentioned that because there's just a lot of… it's almost like… investigation work into the requirements that are… that exist already. There's a mix of both looking at previous documentation, like. GitHub. Google Slides, spreadsheets, stuff like that, that she's doing, and then coming across quite a few different things that have requirements that are TBDs, like, that to be decided, or what we've built later, and then no one went back and updated that documentation, so that necessitates her reaching out to development teams to ask them, okay, what was actually implemented? What were the requirements, or what do the tests look like, for the software that's been built already? So she mentioned that this was, Something that she was struggling with right now, since it is a lot of manual work there.
*26:09*

**Julia P**: Yep.
*27:13*

**Gus Schissler**: Okay. And it seemed like… zooming back out, relative priority is that this section here, because it's in-house, because it's all woven, is less of a, It is still a… maybe a fire or a thing to resolve, but it's less of a fire or a thing to resolve than the intake side of things as well. Yeah, for sure.
*27:15*

**Julia P**: Because it's in our control, yeah.
*27:40*

**Gus Schissler**: Gotcha. Okay. So, maybe it makes sense to, at this point. Talk a little bit more about the exact inputs… That we're dealing with, and maybe a little bit about the destination that it's all going into, which is JAMA. So, Dan, I'm thinking that we'll do a… A similar task flow? I can duplicate.
*27:42*

**Dan Maser**: Brilliant.
*28:14*

**Gus Schissler**: So, we were previously…
*28:17*

**Julia P**: Yeah, all these flowcharts, it just… my brain thinks in flowcharts, so I'm really happy to see that.
*28:18*

**Dan Maser**: We do as well. We do as well. I think that's everyone's brain, low-key, so…
*28:24*

**Julia P**: I don't know, yeah, that's because I'm just trying to figure some… something other…
*28:29*

**Gus Schissler**: needles.
*28:33*

**Julia P**: a lot of other stuff, and I started, like, last two weeks just putting flowcharts, and I feel like, okay, now I… I'm back on track.
*28:33*

**Gus Schissler**: Yeah.
*28:40*

**Dan Maser**: Exactly.
*28:40*

**Gus Schissler**: So, with Andrea, we talked about component level. Right now, we're talking about the intake requirements.
*28:41*

**Julia P**: Yeah.
*28:48*

**Gus Schissler**: So it all starts with, TMC has a list of requirements that don't directly translate. into, like, Woven's language, I guess.
*28:49*

**Julia P**: Nope.
*29:11*

**Gus Schissler**: And that goes to the CA team. And then the CA team… And I think it's important to call out, like. when we talk about this intake requirements right now, it is, like, what's happening right now, and the idea is… I know there's a flow and an intent that you folks have for implementing a better process in the future. Yeah. And we… I think we loosely understand what that future state's supposed to look like. I think what we would like to understand now as we talk through this new flowchart is What are the pain points that you think that this item can work? can help resolve right now. So it's really, like, peeling back, like, where might this tool or process or thing that we build plug into resolving pain points here? So, we'll try to… let's keep this focused or constrained to what things are like today. And then call out, as we do, like, Dan, you've been doing with the red and pink stickies, any pain points that pop up. So… get requirements from CA team, CA team shares them with product.
*29:14*

**Julia P**: Yeah, and currently they also share them with developers.
*30:34*

**Gus Schissler**: Okay.
*30:37*

**Julia P**: At the same time, yeah.
*30:38*

**Dan Maser**: Is this… I'm so sorry, Julia, not to… is this, like, a shared meeting? Is this, like, asynchronously? How… what's the medium of that?
*30:42*

**Julia P**: Yes, it's very chaotic. It's basically, they're just dumping over some files. So, like, here in Slack, basically, we have, you know, revision of requirements, here are the new ones, and then… developers take this in trying to build some unit tests, and not all of them, just some teams that we started working with last quarter. They got very nervous when they saw all of this, so they pay some attention to this. But not all the teams.
*30:48*

**Gus Schissler**: Okay. And what's happening right now is, like, are these… Like, this, to me looks like a little… like a bit of a cycle, almost, or a place to… for these teams to talk.
*31:14*

**Julia P**: Huh.
*31:29*

**Gus Schissler**: That's… sure, the CA team is, posting files asynchronously, but the developers you mentioned are, Writing some unit tests, it sounds like.
*31:30*

**Julia P**: Yep.
*31:43*

**Gus Schissler**: some unit tests… And then, what is… how is product kind of interfacing with this mini-cycle here?
*31:47*

**Julia P**: But yeah, now, they're also gonna take in all the requirements. from CA. And putting them, in a roadmap, in a long-term product roadmap, as well as a quarterly roadmap. That will be the intake for all of us. Because the hard part about this is product not only brings the roadmap, they bring the metrics too. Okay. Meaning, we have to deliver it, even if we all… disagree with the plan. There's no approval phase, but we still have to meet it in order to get our bonuses.
*31:55*

**Gus Schissler**: Got it, okay.
*32:35*

**Dan Maser**: And this is where… I want to make sure I'm understanding, because I know we're not outlining the future state, but this is where it was agreed upon that products, they're now going to do more PRD-driven. Is that correct? Like, instead of just… adding it, they're also creating more PRDs, or is that… am I misreading that?
*32:37*

**Julia P**: Yeah, they're creating more PRDs, yeah.
*32:56*

**Gus Schissler**: So they're… as they take these requirements in, are they… it sounded like they're… are they doing the translating right now, of translating from TMC language to woven language, or are they leaving that up for a different team somewhere else?
*33:00*

**Julia P**: I think that's mainly CA.
*33:17*

**Dan Maser**: Okay.
*33:20*

**Gus Schissler**: That's helpful enough.
*33:21*

**Julia P**: So everything that's more connected to the content of the requirements that we receive is CA.
*33:24*

**Dan Maser**: Hmm…
*33:30*

**Julia P**: Product puts it in a roadmap and tells us when to meet what, basically.
*33:31*

**Gus Schissler**: Gotcha, okay. At what point does… Okay, so before I dive into that…
*33:35*

**Julia P**: Wait, just one more aspect. This is, again, for the SBRD… SWRD side. There's another side of requirements that's fully coming from product.
*33:48*

**Gus Schissler**: Okay.
*33:57*

**Julia P**: That's another pain point, basically, that they also define.
*33:58*

**Gus Schissler**: Gotcha.
*34:02*

**Dan Maser**: Oh, jeez, sorry, ignoring.
*34:03*

**Gus Schissler**: Software… Software requirement. documents. You said there was another side of… Oh, sorry, Dan, I think the SWRDs are coming from… CA, right?
*34:05*

**Dan Maser**: Yep.
*34:20*

**Julia P**: Yes. And then products also building.
*34:20*

**Gus Schissler**: A different type of requirement as well.
*34:23*

**Julia P**: Yeah, we call them an SBRD. Yes.
*34:25*

**Gus Schissler**: E as in boy?
*34:30*

**Julia P**: 30 scenario-based requirement definition. SBRD, that's products intend to… get closer to the modern world, I would say. Move a bit away from… what we have from TMC, at least.
*34:31*

**Gus Schissler**: Okay.
*34:51*

**Julia P**: So there's a data set that we can test on, basically.
*34:51*

**Gus Schissler**: Oh, okay. Yes.
*34:56*

**Julia P**: And this comes with scenario definition, as well as criteria. performance. So what you can see is, like, SWRD is all functional requirements. everything else, like SBRD and TPID is another requirement section, is all performance.
*35:00*

**Gus Schissler**: Okay.
*35:21*

**Julia P**: But the process would be the same, to take them in. through the PRD. So now the new alignment is the PRD takes in everything.
*35:22*

**Gus Schissler**: Okay.
*35:30*

**Julia P**: requirements as WRDs. SBRDs and TPIDs. And SBRD and TPIDs are performance, the rest is functional.
*35:31*

**Gus Schissler**: Could you… you might have already said this, but the TPIDs are…
*35:42*

**Julia P**: Yagi.
*35:47*

**Gus Schissler**: What's the acronyms?
*35:48*

**Julia P**: or that test pattern ID. These are, close course tests. that TMC… coming from TMC, completely again. TMC runs these… on-call's course to evaluate our system. We know that it's going to happen at the very end. But we want to, of course, measure them as early as possible in simulation already.
*35:50*

**Gus Schissler**: Gotcha. And as these things are being defined, they're all… they're all pointing towards the same… like… I'm gonna say the word feature. But that's not necessarily what it's called. But it's, like, the… there are different lenses of looking at, like, a specific feature, that all maybe get at a slightly different tilt, or a slightly different way of testing, or making sure the functions are there, or the… it can perform in different scenarios.
*36:12*

**Julia P**: Exactly. So you can all see this on a feature is the right word, the old-school word that TMC also uses. It's basically, yeah, you have a feature like ACC, or… automated lane change, whatever it is. That's the word we're living in, the structure that we're living in. And then we have SWRDs for this feature, we have SBRDs, and we have TPIDs for the feature.
*36:42*

**Gus Schissler**: Gotcha, okay.
*37:06*

**Julia P**: Yeah, that's the bucket… basically the folders that Andrea has in JAMA. That's features. Make a following, branching, lane change, yeah, these kind of things.
*37:07*

**Gus Schissler**: We, quick aside, we know… Do we know the total list of features? That could possibly exist when it comes to the… Like, the full production release of what this thing could look like.
*37:18*

**Julia P**: So yeah, technically, yeah. On a product roadmap, we should have them, but that's a problem they keep changing.
*37:35*

**Gus Schissler**: Okay, yeah. Gotcha.
*37:42*

**Dan Maser**: Of course they do.
*37:43*

**Julia P**: Yeah.
*37:44*

**Dan Maser**: Along with that… oh, sorry, what were you saying, Gus?
*37:44*

**Gus Schissler**: I was just gonna say, it's, it's, it's scope. Scope always kind of changes a little bit.
*37:47*

**Julia P**: I'm not.
*37:51*

**Dan Maser**: scope changes? So just to clarify, I have a similarly… slightly different, but similar. So, the CAT com… is it… am I correct in that the CAT comes in with the functional requirements, the SWRDs? Are the SBRDs created by product viewing the SWRD? Is that fair? No. Okay.
*37:51*

**Julia P**: Rather, if you go up the level higher, you are these.
*38:11*

**Dan Maser**: Gotcha, okay.
*38:15*

**Julia P**: UD is not perfectly tracing to URDs, but they're taking them in as, you know, these are the features, more or less, they want to build. What kind of scenarios should we cover to do that?
*38:16*

**Gus Schissler**: Okay. And in this language, when I was saying, like, feature before, like, automatic cruise control.
*38:26*

**Julia P**: URD.
*38:33*

**Gus Schissler**: Is, like, automatic cruise control as well. Like, that's the same level.
*38:35*

**Julia P**: Yep.
*38:40*

**Dan Maser**: Perfect.
*38:42*

**Gus Schissler**: And so… now we're gonna get into… product delivery. So, what you folks… it sounds like what you folks are doing right now is tracking down, or chasing down, all the SWRDs that exist, the SBRDs, the TPIDs, and you're trying to consolidate them into One holistic, standardized list of requirements.
*38:43*

**Julia P**: Exactly, yeah. And the new alignment you have is that we take in the PRD, nothing else. On a quarterly basis, and that summarizes all that's, you know, in front. We still have the same links, but at least we have just one document to look at, and then links us to all the different requirements, from.
*39:08*

**Gus Schissler**: Hmm.
*39:26*

**Julia P**: SWRD, SBRD, TPID.
*39:27*

**Gus Schissler**: Okay. Even… and I'll mark, eventually… will only intake PRD.
*39:34*

**Julia P**: Thank you.
*39:46*

**Gus Schissler**: And then as… so you folks are kind of operating… I don't want to say, like, outside of this cycle around here, where product and developers and CA are interacting together. But as things change, you're also trying to keep a tab on, oh, like a performance requirement and an SBRD changed, so we need to make sure that's updated and indicated in JAMA.
*39:49*

**Julia P**: Yeah.
*40:14*

**Gus Schissler**: an SWRD requirement change, like a functional requirement change, making sure that gets updated in JAMA as well.
*40:14*

**Julia P**: Exactly, yep. Because the PRD for us is just a bucket. It's still linked to everything before. Got it, okay. We don't communicate to that part, right, that's the problem.
*40:21*

**Gus Schissler**: And that's… that's what you mentioned a little bit earlier, is even with this new process, it's not that everyone will still… will magically be… creating all of these documents in the same location, in the same format, with the same patterns, it's still going to be done the same, it's just that product is going to be assembling them into almost like a manifesto or something for each of these features.
*40:33*

**Julia P**: Yeah.
*40:56*

**Gus Schissler**: PRD.
*40:57*

**Dan Maser**: Is it fair to say that, theoretically, the PRD will make it easier for you to, like, look through all of them, but it won't be alerting you if there's any changes, so that's where our solution is still going to massively help? Okay. Is that fair? I'm seeing you nod your head.
*40:58*

**Julia P**: Yeah, 100%. So we will get a new document that lists a list with all the requirements, but it still lists everything, you know, it's just linkage to what they received from CA in the end. And, at the same time, the PRD itself We also ask for versioning. We don't have that as well, because we honestly expect this to change on a weekly basis as well. So that's another intake itself within the PRD, and the PRD itself changes the scope of the requirements themselves, and if the requirements within this defined scope change as well.
*41:13*

**Gus Schissler**: Gotcha. Okay.
*41:52*

**Julia P**: You need to somehow be able to trace both of it.
*41:53*

**Dan Maser**: Can I ask… quick backward question that we haven't touched on, I just don't want… this link right here that I'm circling, If… when the CA team is posting things and developers are directly writing some unit tests, does that mean you're also responsible for, like, directly monitoring anything that they take in, or is that not necessary?
*41:57*

**Julia P**: So that's basically… that's the hard part, that we're in this transition period right now, that's exactly a problem we have, that some teams, you know, because we pushed them the last quarter, hopped on this train of communicating to CA directly. Which was the first intent, basically. But now we're going through the PRD, and plus my team, and then plus development. This linkage would not technically be there anymore. It would be there through the PRD.
*42:20*

**Dan Maser**: Okay.
*42:49*

**Julia P**: Whatever the developers are doing in terms of feedback would be within… what should happen within the PRD.
*42:50*

**Dan Maser**: Okay, so it should be tracked…
*42:55*

**Gus Schissler**: Okay, okay, that makes sense.
*42:59*

**Julia P**: So that's the new hope, at least, right? So that we get the PRD as IPA completely, internal product development as everyone. That's the intake we get from product. And then we can start taking this in as our scope for development in us. That's the current intent. And we're still in this phase where, you know, now they have some relationship with CA, the developers. They should not get rid of this. They should… if they have a communication channel, please use it, so then…
*43:00*

**Gus Schissler**: That's one thing we say, you know.
*43:29*

**Julia P**: do whatever you're doing, but technically it should go through the PRD in the future.
*43:31*

**Dan Maser**: Okay.
*43:36*

**Gus Schissler**: So now… Now, I think now we're full circle to what you explained last Monday. is… There are two… there are two problems. One is… Easily getting the requirements from all these different locations and distilling them down into a common format. Other problem is, when something changes somewhere, being able to easily understand what that change is. Be notified of the change, and then make sure that gets updated in the central location as well.
*43:38*

**Julia P**: Yeah, exactly. Yeah. And at the same time, what we haven't touched on is then this part that we, I think, have an idea of how we can do this, is the change management. If we want to change something, there's no real process for developers or my team to say, hey, this requirement needs to be written, the threshold needs to be, you know, revisited. We can do it through comments and a doc. That's how we do it. So, and even if they say, oh yeah, it's a good idea, I change it. I don't know, is it the next version? What happens to the unit test that was implemented based on the version before? Is it… it's a scope change again, so there's no way of… Tracking any changes right now.
*44:10*

**Gus Schissler**: Gotcha.
*44:50*

**Julia P**: Okay.
*44:51*

**Dan Maser**: So are you saying… so just to clarify that, so the gathering, and I label it as, like, outward changes, right? So if, you know, if CA changes… the CA team changes something, making sure you're notified, etc. But you're talking about, like, if you guys see something and you want to change something. how do we… like, setting up some kind of comms process or some automatic process that gets kicked off, because it's like, hey, Julia's team just changed something, this now needs to go through some kind of a review process or other situation.
*44:54*

**Julia P**: Exactly, yeah. And that's something we might not have to go too deep into, but I think we have an idea of how we can do this in the future. The change board management process. But yeah, that's also… if we have… let's say this whole solution works in a way that we have it in one source of truth, whatever's in the community right now, if you want to push back, we could technically do this in JAMA with a review. That would be one solution, but yeah, that's another open… Or a pain point that we have right now.
*45:24*

**Gus Schissler**: That makes sense. So… Is there a… We just described, like, a system or a process that's being done with a lot of manual work right now.
*45:56*

**Julia P**: Mmm.
*46:15*

**Gus Schissler**: Is there someone that we could, talk to, or shadow, or observe as they're, like, moving through this process, so we can just kind of… get a full grasp of, like, oh, they're… maybe we don't have a PRD at this point, but they know they have for this feature, they know they have a couple different documents that they're grabbing from. I would imagine maybe they could share their screen and then maybe talk us through… it doesn't have to be a whole bunch, maybe, like, 30 minutes or an hour of, like, oh, like, I'm… there's a human element here, a human brain process of, like, I'm looking at a… like, an SBRD.
*46:16*

**Julia P**: white.
*46:54*

**Gus Schissler**: Break it out into something that would create a, or match to a requirement in JAMA.
*46:55*

**Julia P**: Yeah. For sure. So, yeah, my team members, can definitely show you examples. So, one is, we all received first drafts of PRDs after the workshop now. So, my team starts going through the PRDs, providing feedback, putting things into JAMA for the SWQTs. We're missing the, you know, requirement intake in JAMA, because that's something that we hope you get out of your project, basically. They start with the test cases right away. So then later that we can link them, basically. Yes. So you can talk to, who started working on it. So, Hannah, for sure. Hannah has her hands in both areas for SBRD and SWRDs.
*47:02*

**Gus Schissler**: She could give you an overview of both.
*47:46*

**Julia P**: workflows? And then Nick Carcione from my team, he's also for Vehicle Following, so he has a lot of SWRDs. To look at right now, it's an old-school feature, so yes, a lot of stuff. Yeah, you can also reach out to him, but Hannah is basically, because she has a dummy structure right now for SBRD, because SBRD is a whole nother… problem, a can of worms. It's all in the dark. All those requirements, scenarios, criteria, everything in the dark, and we're really struggling, because it's the intake for many, many teams to do their work.
*47:48*

**Gus Schissler**: Hmm.
*48:32*

**Julia P**: And they're changing… if we provide feedback through comments, it's, really painful. And so we're working with product, that's all product. pushing very hard to get this in JAMA, because we're really done with this process right now. So yeah, and that's Hannah, too. She has built, like, an example… structure in JAMA for SBRDs as well.
*48:32*

**Gus Schissler**: Oh, cool. Okay. Sweet. And then, as far as, like, the… I mentioned, like, the human element or the brain element that's interacting here. Is it, Is it… is it kind of like reconfiguring the content from one document? to, like, a set structure in another document in terms of, like, headings, or tables, or, like, the layout. I'm not too familiar with JAMA or, like, the tools enabled in there, but I assume it's, like. Standardizing on a single… like, the different tools and resources that JAMA has, in terms of tracking requirements, or, like. Outlining the product, or things like that.
*48:57*

**Julia P**: Yeah, and honestly, that's something that we're just starting.
*49:41*

**Gus Schissler**: Okay. Right now.
*49:44*

**Julia P**: Basically, to… because after all the last year, basically, with the… excuse me… with the workshop we're doing as product.
*49:46*

**Gus Schissler**: This is where we're putting our foot down right now, and saying, like, we're gonna put it into JAMA. If you don't do it.
*49:55*

**Julia P**: We're gonna do it, that's fine, we can, you know, invest that time. and we're building up these projects right now, as, you know, what we… what do we need for the requirements we take in from CA in this format, basically. How do we transfer this into a JAMA item? For SBRD, it's the same, so we're still, you know, having some examples of how we can do it, but it might change right now, still. But yeah, this is what we're going… because for every single requirement structure, it might look a bit different of what we need in JAMA. We might need a different… item, because in Java, you can basically do everything you want in this folder structure. You can create any template. It could be just a text, it could be your drop-down menus, everything that you want, basically. And that's something that we need to figure out.
*50:00*

**Gus Schissler**: So is that… would you describe that, the… You folks right now are defining, like, the business logic that could potentially power the thing that we build from, like, an automated.
*50:51*

**Julia P**: Yeah.
*51:02*

**Gus Schissler**: perspective. Okay.
*51:03*

**Julia P**: Yeah, exactly, yeah.
*51:04*

**Gus Schissler**: Hmm.
*51:07*

**Dan Maser**: And I think that… oh, I was gonna say, I think, because you made the comment earlier, Julio, of like, oh, what they're doing right now is hopefully what we can automate, and I think that's exactly why it's going to be so helpful to observe exactly what they're doing now, and what's not working well, etc.
*51:07*

**Julia P**: Yep.
*51:20*

**Gus Schissler**: V… And I maybe should have asked this question before, so the kind of artifacts that you folks are building, from the product delivery side. Is that what's getting passed back to TMC for…
*51:21*

**Julia P**: In the very end, yes. And that's the hard part about it, right? So we're getting stuff thrown over the fence, which is not well-defined.
*51:36*

**Gus Schissler**: Plus…
*51:43*

**Julia P**: Also, guidance of war. also definition of how to measure it, the success itself. So we have to take that all in, make sure we… we can measure it.
*51:44*

**Gus Schissler**: And we can also say if it's a pass or fade, and then…
*51:55*

**Julia P**: you know. calculate also all the high-level metrics for our, bonuses, basically, on top of that, to show process, progress. But we're not defining any of it. We are just the one having to implement it, and then… but we are then the one getting asked of, you know, why are we failing? And then, like, we have to come up with a solution. Which can be, you know, development needs to do something, or, yeah, intake isn't working, or it's like, intake isn't giving us a good requirement, so we don't want to pass this, actually. Oftentimes, we're like, we don't want to pass these requirements, because then we're not building the right system. So, It's a lot of this work, basically. So we're responsible to deliver, in the end, the overall pass rate, the implementation of measuring it, plus passing it.
*52:00*

**Gus Schissler**: Gotcha, okay. And a lot of those decisions that you're… you're mentioning around how to show, what to show, what to show as passing versus not. It sounds like there's some… it's not necessarily just an objective or a binary. That's like, yes, no. It sounds like there's definitely… there's some product thinking there, there's some strategy there, there's maybe a little touch of politics or inter-development team interaction. So it's… there's definitely a place here for… For human judgment. to take part in the system as well. Okay, so a little, little subjective as well as… there definitely being things that can be measured pass-fail.
*52:49*

**Julia P**: Yeah, exactly. And the thing that I think the biggest pain point, which we don't have to, you know, address with the tooling, the tooling will address it on its own.
*53:37*

**Gus Schissler**: It's that we have no mechanism.
*53:45*

**Julia P**: To show the intake mass. And also pushback, because it's so often the case that, you know, 90% of the stuff we get, it's like, I don't know how to do this, I don't know what it actually means, I have questions. I think we need to change the threshold, you know, or let's put this on a different time on the roadmap, because the tooling isn't ready, because we know how to measure this stuff. Product does not know this, right? So they just put out something randomly, and then we have to see how we can implement or find these scenes on public road, or, you know, make sure we can have it in synthetic simulation, or whatever it is. But sometimes there's some pushback of, you know, I cannot tell you if it's a pass or fail, because I can't measure it yet. So, there's so many aspects of where we have to have a feedback cycle of, you know, explaining, and pushing back on certain calculations, measurements, requirements. And this is not there, but once I have it at least in one source of truth, just one… just one document I have to go to, basically, and that makes it way easier to do in the end, because then I can build one solution for this one project I have.
*53:49*

**Dan Maser**: So, going with that, just… and I know we're almost at time, but is your thought process a little bit of, like, if the JAMA's set up well enough, and things are filled out well enough, or things are, like, are filled out correctly, they will illuminate some of those gaps in logic that you can be like, look at this, this makes no sense. Is that what you're assuming?
*55:03*

**Julia P**: Yeah, exactly. I have just one… Project to use for this, basically, and not 20. And also, like, why using them in a document, not knowing that basically CAA has already moved ahead and changed everything? I might have spent a whole week trying to figure out this one requirement issue, YSCI has already changed it in the source, so… I don't know. So it would resolve all the linkage problems we have. As well.
*55:21*

**Gus Schissler**: I don't think we got to… well, we got to everything that I wanted to get to, except for maybe just, longer conversations about the players and the stakeholders. What I was… thinking about… just, and I know we're at time, and I think we all have a meeting to run to, but I'll just, like, summarize what I'm briefly understanding about the stakeholders, and then we can always set up some additional time. Later. So, primary user of… Whatever tooling that we build is product delivery, because that's something that you folks are manually doing right now that has a lot of pain and leads to a lot of waste, if you will. Secondary users are folks in product, and CA, and developers, because they'll be observing, or they'll have the transparency to see how the system is moving, and all of the different imperfections or misalignments and things like that. And then, I don't know if they're a secondary or a tertiary, but going back to TMC, they'll have the direct output of whatever thing that we build, which operates alongside, the other processes that you folks are building right now, too. And we can dig into that and tease that apart. Maybe at a different time this week, but… Cool, okay. That was a whole lot. I really appreciate your time, Julia.
*55:49*

**Julia P**: So I hope I gave you more clarity and not more permission.
*57:12*

**Dan Maser**: No, definitely more clarity.
*57:17*

**Gus Schissler**: Definitely more clarity, yeah.
*57:18*

**Julia P**: Awesome.
*57:19*

**Gus Schissler**: Alrighty. Great. I think we'll see you tomorrow.
*57:20*

**Julia P**: Yeah, I had to… I had to… wait, we have another meeting today because of the architecture overview?
*57:24*

**Gus Schissler**: That's correct.
*57:31*

**Julia P**: We have to cancel the stand-up tomorrow, because we have, I don't know if you know, Restore Day at Toyota. It's one of those… one day in a year that we all focus on safety aspects, and so we have, like, a huge block of… meetings, basically, in the morning, that's why I had to cancel that one.
*57:32*

**Gus Schissler**: Cool. Then, at the very least, we'll see you this afternoon, and then probably on Wednesday. Awesome. Sounds good. Thank you so much. Thanks, Julie.
*57:48*

