**Gus Schissler**: There we go. Sweet. So I'll, be sharing my screen for most of the… most of the time. It'll be really more of a conversation. I think I mentioned earlier this week that we're here to learn, first and foremost, and kind of get caught up to speed as quickly as possible, especially since you folks are a… You're a product org, and… it's not like you're coming to us with a, like, a raw problem area. We have a solution in mind already, and so we're really just trying to get caught up, caught up to speed so that we make sure that we're building the right thing.
*00:01*

**Andrea Zotelli (WovenByToyota)**: So…
*00:36*

**Gus Schissler**: And Dan, you're… taking notes for me today, too, but then we'll also be chiming in. And then, of course, Andrea. I would love it if this meeting wasn't just us talking at you. It would be super helpful to hear, like, your thoughts and opinions as well, so anytime that you want to interject or call something out, feel free to, and we'll make sure that we incorporate that feedback.
*00:37*

**Andrea Zotelli (WovenByToyota)**: Sure.
*01:01*

**Gus Schissler**: Alrighty, so I am, we'll be using a whiteboard today, just in Miro. So, for lack of a better name, we've been calling this project Item 10, just because it's… the 10th item on the list of epics that Julia showed us previously. There may be a different name that we think of in the future, but it's just kind of the working name for right now.
*01:02*

**Andrea Zotelli (WovenByToyota)**: the general…
*01:25*

**Gus Schissler**: Flow of today is that… We want to make sure that we're… us as a team, the Atomic team, are up to speed on the V model, or essentially, like, how software is made at Woven, because we're essentially building a tool that should plug into that process. As part of that, we'll understand, or work on understanding the role that product delivery plays in this lifecycle. We'll review the current process for requirements gathering, and then finally, we'll understand the players and stakeholders outside of product delivery that also interact with this whole system as well. But I was… first and foremost, I know we've been introduced, but we're not entirely familiar with, the different roles. in, in Woven, so if you could kind of maybe introduce, like, what you do at a high level, like, who you… what your day-to-day might look like, who you talk to, stuff like that. Just, like, a brief overview of what your role at Woven is would be helpful.
*01:26*

**Andrea Zotelli (WovenByToyota)**: So, I joined… I joined very recently. I joined at the end of October. Okay. So, yeah, 3-4 months joining the company. 4 months now. And then, so I work mostly with requirements. But writing requirements, and I'm also… I am also setting, like, the structure in JAMA, putting requirements in JAMA. working with, like, the PDM team to see what the requirements we have from their end that we need to write our own requirements on. So that's mostly what I have been doing so far.
*02:22*

**Gus Schissler**: And when you say PDM, that's product management?
*03:03*

**Andrea Zotelli (WovenByToyota)**: CDM, product management, yeah.
*03:05*

**Gus Schissler**: Awesome. And that's different from PD, which is product delivery.
*03:08*

**Andrea Zotelli (WovenByToyota)**: Yeah, Product Delivery is the org that we are in, and PEM is another organization. So it's a separate organization, and they work closely with customers' application. way to… and the customer's application is actually our bridge between OVEN and Toyota Motor Corporation, TMC.
*03:12*

**Gus Schissler**: That makes a lot of sense. I think you mentioned an acronym that I wasn't familiar with. I know CA is Customer Application. Do you say VEM? As in Victor.
*03:37*

**Andrea Zotelli (WovenByToyota)**: No, no, they said PDM. Yeah, Product Management.
*03:48*

**Gus Schissler**: Gotcha.
*03:54*

**Andrea Zotelli (WovenByToyota)**: I don't know why they say… I think it's to be different from PM, which is project management, so product management is PDM.
*03:55*

**Gus Schissler**: Makes sense to me. Okay. So, this is probably a, a very high-level view. We're going to be diving into how software is made at Woven at this point. The super high-level view, I know it's really nuanced, but I want to make sure that we have kind of, like, a basic foundation set up first before we kind of dig into some detail in different areas. So, we'll be walking through this kind of blueprint-type area, and don't worry, I'll zoom in and everything, just to make sure that we're getting the right information, I guess. So… software for Woven is kind of determined, I believe, through, from Toyota, so they're determining, like, the requirements or the new features that need to be enabled for, like, an autonomous vehicle. And it sounds like the customer application group is kind of that bridge from Toyota to, Woven. For, like, passing those requirements on, is that correct?
*04:04*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*05:07*

**Gus Schissler**: Dan, would you create, like, a little person sticky or something? Because I think the line between user requirements get created and going into, like, the woven org is that customer application team.
*05:09*

**Dan Maser**: Yes.
*05:23*

**Gus Schissler**: Sweet.
*05:25*

**Dan Maser**: Yes.
*05:25*

**Gus Schissler**: Thank you.
*05:27*

**Dan Maser**: Of course.
*05:28*

**Gus Schissler**: But then, when you get requirements from… sorry, I gotta turn off my notifications, they're gonna distract me. There we go.
*05:29*

**Dan Maser**: Good.
*05:36*

**Gus Schissler**: When we get… requirements passed over from Toyota, is that going to, like, a single group? A single, like, is it going to PDM and product delivery? What's the… like, who's receiving, I guess, that information?
*05:37*

**Andrea Zotelli (WovenByToyota)**: Yeah, I think it's the… The customer's application team, they handle all the requirements that we get from Toyota. And AD colored. break down, like, roll down to our teams within OVEN. Gotcha. Because then, then we're gonna have several groups working on different parts of the software, right? And different softwares, actually, modules, different modules.
*05:54*

**Gus Schissler**: So that's, that kind of gets to the first… this first sticky here inside the woven space, I guess, is, like.
*06:24*

**Andrea Zotelli (WovenByToyota)**: It is a company.
*06:32*

**Gus Schissler**: combination of customer application and product figures out, okay, for this requirement. what teams do we need, or what systems do we need, an update to? Because it might not be all of the teams, it might just be a subset, is that correct?
*06:33*

**Andrea Zotelli (WovenByToyota)**: Yeah, I'm not sure how that's done, if there is this step, but from what I see.
*06:50*

**Gus Schissler**: Since I joined.
*06:57*

**Andrea Zotelli (WovenByToyota)**: We already have the groups defined, and What the modules for each group are? Like, what requirements which group will work on. So, I don't think that's… Allocation is being done, like, it already has been done in the past.
*06:58*

**Gus Schissler**: Gotcha, that makes sense. And then… at what point, I would say, So we're… we're at the point where maybe some requirements are being split out. At what point is product delivery, like, aware of, like, these… these changes, I guess, or, that something is happening. Is it, like, from the get-go, from the beginning, or is it later down the line that you folks are aware that you'll have to start.
*07:19*

**Andrea Zotelli (WovenByToyota)**: So, from the workshop that we just had a few weeks ago with the product, product team, I think we ended up, like, kind of negotiated. Julia can confirm that, that every quarter, they will have, kind of, the requirements, a release of new requirements, or update of requirements, so we can work… work. We can do our work starting from that release.
*07:44*

**Gus Schissler**: Hmm.
*08:14*

**Andrea Zotelli (WovenByToyota)**: Because it actually… it's constantly changing. They are always receiving new packages, but that makes the things kind of hard for us to act on. Because we don't have a packaging that we can say this is the… this is the baseline, right? So… So they… we kind of set up that every quarter they will have a release for us.
*08:14*

**Gus Schissler**: But, Julia, Julia can confirm that. Yeah, and we'll be talking to Julia on Monday, too, so… So once those… kind of once the… Once Woven knows that these requirements are coming through, Then those get passed on to each individual team.
*08:40*

**Andrea Zotelli (WovenByToyota)**: Yeah, but let… let me just tell you, like, you say open, but I'm talking about, from our perspective, from a systems verification and validation SVMV team. I don't know how other teams and other modules work, like, Irene has a different It's a completely different team, they work separate from us, so I don't know how they handle this. From our perspective, that's the way that I said, from our team, our product delivery team.
*09:02*

**Gus Schissler**: Okay, gotcha. And what was that, that other example team that you were talking about? Could you say a little bit more about that other team that does things?
*09:34*

**Andrea Zotelli (WovenByToyota)**: Aren. Aren is a platform, for STV, like a new platform that they are developing for vehicles, Toyota vehicles. The new RAV4 that's getting on the market now has this new platform.
*09:41*

**Gus Schissler**: Gotcha.
*09:58*

**Andrea Zotelli (WovenByToyota)**: Yeah, and I think the… They are mostly in Japan, like, Arin is an org, kind of.
*10:00*

**Gus Schissler**: Gotcha, okay.
*10:08*

**Andrea Zotelli (WovenByToyota)**: They are completely separated from us, although, like, I reach out to them to see how they are doing, their structure on JAMA and everything, because I want to be able to work in sync with them, right? If we are everyone in the same company, I don't want to set up, like, a structure that's completely different from what they're doing. Of course, we have individual needs. Like, but whenever I can reuse what they already developed, that's what we're trying to do.
*10:09*

**Gus Schissler**: Gotcha. And is Irene, like, part of a… is it a team within Woven, or is it a similar.
*10:39*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*10:46*

**Gus Schissler**: Oh, okay, cool. Gotcha. Good to know. And how many teams are kind of like that in general? Is it just… the two of, like, your team and Iran, or are there multiple.
*10:46*

**Andrea Zotelli (WovenByToyota)**: No, there's, like, product delivery. I think they are the behavior team. Noreen, I don't know if we… I can't look at the org chart here to figure out…
*10:59*

**Gus Schissler**: No worries at all. It's just a… we can always… we can… we can put this on the shelf for the moment, because I don't… we don't need to go too deep into this area. It's just trying to capture, like, all the loose.
*11:14*

**Andrea Zotelli (WovenByToyota)**: But this…
*11:26*

**Gus Schissler**: probably pull on.
*11:27*

**Andrea Zotelli (WovenByToyota)**: This atomic project we are working on, it's gonna be with our team, right? So I think with the focus is in what we do, so, yeah.
*11:28*

**Dan Maser**: Yeah, that's… that's… sorry, not to cut you off. I think that's exactly… that's exactly correct. I think… if you can speak to your process and your experience, and then we can do the work to try and scale that out, but I think don't… don't worry too much about what other teams are doing. Yeah. But that's what I would say.
*11:38*

**Andrea Zotelli (WovenByToyota)**: Great.
*11:56*

**Gus Schissler**: Cool. So… From there, when we're… when those requirements are passed to… the actual development teams. They are… I assume they're working in a more… maybe, like, agile way, where they're… they get these requirements down, and then they're splitting out their own work, Like, to each of the developers on their team, or each of their sub-teams, if they have them. In order to actually get the… get the work done. And this might be outside of… of what we're working on, but I'm just kind of curious from, like, a… When, I guess, summarized by, when a team realized that a requirement needs to be changed. how does that make its way back out of that team? Like, if there is nuance or complexity that wasn't known, like, up here at this top user requirement level, how do they communicate that back up to product management, or product delivery, or any of the other teams?
*11:57*

**Andrea Zotelli (WovenByToyota)**: So, I haven't done this yet, because, like, I recently joined, but… and from… what I have been doing so far. We are… kind of… Working the things backwards. And the way that… it's… it's not the usual way, because what you usually do, you gather requirements, right? You have your user requirements, and then they decompose, like, to the systems requirements, and then subsystems and components.
*13:02*

**Gus Schissler**: But we already have…
*13:33*

**Andrea Zotelli (WovenByToyota)**: software written most part of it. Like, the software is running, they are testing the vehicles already. And we are making, like, incremental change to incorporate new, behaviors and new capabilities. But the work that I have been doing is that trying to put the requirements to represent what the software is doing. You know? Okay. Instead of me dictating what the software should do, that will be the usual way. And we want to catch up to get to a point where we can start with writing the requirements first, and then the software later. But for now, we are doing… The other way around.
*13:35*

**Gus Schissler**: Cool, okay.
*14:25*

**Dan Maser**: So is this… Oh, I'm sorry. No, no, no, sorry, I didn't mean to hop in there. I just want to make sure that I'm understanding it correctly. So you're saying right now, because you came in recently, and there was already so much software, for lack of a better word, you're kind of having to reverse engineer the situation right now, right? Yeah. So there's already currently software, and you are actually… writing the requirements for the old software, so… and I guess my question is, is that because you still need that documentation, and we still need the requirements, and there's no requirements on it, so that's why you have to go back?
*14:26*

**Andrea Zotelli (WovenByToyota)**: Yeah, because there's no requirements, and I was hired precisely to work on this.
*15:00*

**Gus Schissler**: Gotcha.
*15:06*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*15:07*

**Gus Schissler**: Is that… And so, is that part of what the requirements gathering piece that we'll be building plugs into? Is this, like, maybe, like, backlog of requirements that aren't written yet, and being able to.
*15:10*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*15:28*

**Gus Schissler**: Gather them and write them in the format that we need them to be written in.
*15:28*

**Andrea Zotelli (WovenByToyota)**: Yeah, and then we are mostly working, writing them from the requirements that we received from TMC.
*15:33*

**Gus Schissler**: Gotcha.
*15:41*

**Andrea Zotelli (WovenByToyota)**: Not the user requirements, we don't get those. We get software, what they call a SWRD, which is a software requirements document that they have. It's in GitHub, and then we… We are now working on those two, to write our test case for those requirements, but we also have to write The requirements themselves for our components, like lane change, lane keeping, merging, this kind of stuff.
*15:43*

**Gus Schissler**: Gotcha, okay. So, this is probably outside of what we'll actually be, like, directly interfacing with, but the team's essentially building their own software, Possibly changing requirements on their own, and then making releases to their own codebase.
*16:17*

**Andrea Zotelli (WovenByToyota)**: This would be the usual way, right? Why do you put it… put it there? It's the usual workflow. Right?
*16:36*

**Gus Schissler**: Yeah.
*16:44*

**Dan Maser**: Yeah, that's really quick, Gus, because it sounds like, Andre, you may not totally know, and if so, that's okay, but I just want to check, because I know, Gus, you were assuming that, that they do change the requirements as it is fit, and it sounds like, from the video we watched, they're empowered to do so, but are you aware that they are changing requirements as needed?
*16:46*

**Andrea Zotelli (WovenByToyota)**: Who they… who are they, you're talking?
*17:07*

**Dan Maser**: I'm sorry, I'm… good question. The develop… the individual development teams, so this… this sticky note right here.
*17:09*

**Andrea Zotelli (WovenByToyota)**: When Gus was talking about, like, the at, just the way that they're working.
*17:16*

**Dan Maser**: Or was it that they, because requirements at all, they just kind of have been doing whatever they want, and now we're going in and trying to add requirements to them.
*17:20*

**Andrea Zotelli (WovenByToyota)**: Well, not whatever they want, because they receive from above what they have to do, right? Right.
*17:29*

**Gus Schissler**: Right.
*17:34*

**Andrea Zotelli (WovenByToyota)**: But yeah, I'm sure they are making adjustments, and I have been working in some requirements that I mean… It's kind of complicated to say that that's no… there's no requirements. There is some document written what the software should do, but it's not in a formal way for the requirements gathering that we have, you know? So there's some document, there's some presentation, there's some slides, there's scenarios, there's a lot of information. But it's not written in the formal way that you do requirements. And then… every time they have a problem with something with the software, they notice something's not working as expected, they do the test and everything, they feed back, right? They loop. They go and change, oh, this assumption is not working properly, so we have to change it. So they change the documentation that they have, and they change the requirements of the software then. So, I think that's what is in that… Sticky yellow one that you show there.
*17:34*

**Gus Schissler**: So, I think that actually connects, an open thing in my head in that The… it sounds like the requirements… process that you're working on, Andrea, is relatively new in the grand scheme of things of… of Woven.
*18:44*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*19:04*

**Gus Schissler**: That meaning that, up until this point, each team's been kind of working, like, agilely in their best way that fits for their team, which means, like, I would probably write a product outline that looks different from maybe a product brief that Dan would write. They would say. We have some indication of, like, a requirement, or what the success criteria is for our feature, but they're in completely different formats at this point, and kind of scattered all over the place.
*19:04*

**Andrea Zotelli (WovenByToyota)**: Yeah. I think so, yeah.
*19:33*

**Gus Schissler**: Gotcha. Okay. So… At some point, though, Teams are working on their own, maybe components or features or things, and then at some point, all of those different teams' work needs to be grouped together in order to Like, integrated and tested, so the… Is that the product management team that works on, like, integrating all of the changes from different teams in order to test, or is that a different group there?
*19:36*

**Andrea Zotelli (WovenByToyota)**: That's a good question, I don't know.
*20:12*

**Gus Schissler**: Okay. No worries.
*20:14*

**Andrea Zotelli (WovenByToyota)**: I don't think I know, like, yeah, I would expect that they have an integration team.
*20:16*

**Gus Schissler**: Someone that will integrate everything. I don't know if it's the product team. Gotcha, okay. That is A-OK, because those are the folks that probably make the decision of, like. Oh, wait, this doesn't actually work when it's all together and integrated, and so they have to send a note back to.
*20:21*

**Andrea Zotelli (WovenByToyota)**: Yeah, that… Update that stuff.
*20:38*

**Gus Schissler**: Yeah, they…
*20:41*

**Andrea Zotelli (WovenByToyota)**: That's when they will detect some problems and conflicts and interface, right, issues. Yeah. Yeah.
*20:42*

**Gus Schissler**: Or they'll say, like, oh, this is… this release is ready to go, like, everything works.
*20:49*

**Andrea Zotelli (WovenByToyota)**: Yes.
*20:53*

**Gus Schissler**: affected.
*20:54*

**Andrea Zotelli (WovenByToyota)**: I know that there's a lot of regression testing, that's what they call it. SBRD? Is the scene-based regression dataset. And every time they make a change in the code, they run this SBRD to make sure that they didn't break anything.
*20:54*

**Gus Schissler**: That was, like.
*21:14*

**Andrea Zotelli (WovenByToyota)**: upstream, you know? That was before the change. So…
*21:17*

**Gus Schissler**: I think that… I think that makes sense to me.
*21:24*

**Andrea Zotelli (WovenByToyota)**: Yeah, this SPRD is a huge package of, like. requirements and scenarios that need to be tested, so… yeah, it's a very big document and complex one, and we are trying to put those in JAMA, too, because they are in Google Sheets, I think, now? Google Documents.
*21:26*

**Gus Schissler**: Okay.
*21:46*

**Andrea Zotelli (WovenByToyota)**: They do the versioning in Google Docs, they do a lot of versioning control in Google Docs, but we are trying to bring everything that's requirement-related to JAMA, because JAMA, it's a better tool for that.
*21:47*

**Gus Schissler**: Right, yeah. I mean, Java was purpose-built for requirements.
*21:59*

**Andrea Zotelli (WovenByToyota)**: Sure, yeah, exactly.
*22:02*

**Gus Schissler**: So… I'm curious, and we don't have to go too deep into this, so it's just kind of like a tangential question, how similar are those… those, like, testing requirements, I guess, to the requirements that you and product delivery are writing in JAMA? Are they…
*22:05*

**Andrea Zotelli (WovenByToyota)**: The scenario-based, you mean?
*22:23*

**Gus Schissler**: Yeah, the.
*22:25*

**Andrea Zotelli (WovenByToyota)**: Is the regression test? Don't think they are similar at all. I think it's very different from… yeah.
*22:26*

**Gus Schissler**: Gotcha. From what I've seen in the requirements that we will write for our components, it's a different one. Gotcha.
*22:35*

**Andrea Zotelli (WovenByToyota)**: a different set, so they… they… and they have complete different, goals, right? Objectives.
*22:42*

**Gus Schissler**: Cool.
*22:51*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*22:52*

**Gus Schissler**: So, one of the questions that's been lingering in my mind as well is… when we're… when… when Woven is doing these integration tests, SBRDs, they're getting code ready to deploy, like, how frequently are releases being made, I guess? Even, like, out to vehicles, or to testing vehicles, or… or what?
*22:54*

**Andrea Zotelli (WovenByToyota)**: I am not sure. I think maybe every two weeks they release something, but I… I don't take, like… I will take that with a grain of salt and, like, just confirm with Julia about the… the release, because I'm not, informed, well-informed on that.
*23:21*

**Gus Schissler**: Gotcha. And is that, like, a… Is that a factor of, like, that current state of things, that we're working through this backlog of requirements that haven't been written yet? Connect.
*23:39*

**Andrea Zotelli (WovenByToyota)**: Because I don't work direct… like, I do connect with some developers. to check my requirements. How is this being done in the software right now? Because checking the documentation that I have as a source to write the requirements just because they make changes sometimes in the software, and that's not reflected in the documentation that I'm using. So, that's my… that's my main communication with them, so I'm not in the loop with them about the deployments, you know.
*23:50*

**Gus Schissler**: Okay. And then.
*24:23*

**Andrea Zotelli (WovenByToyota)**: Although, like, I think I should, like, and I expect that as I get more time in this position and working closer with them, then I expect this to change, that I'll have We'll be working more integrated with the software team.
*24:25*

**Gus Schissler**: Gotcha. Okay. And I know you mentioned in the future. Once that backlog is, all the requirements are captured, and there are new requirements coming down, it'll be more… a more regular pattern of, like, product management and product delivery, writing the requirements, and then passing them on to the team. At that point, do you think it would be more cyclical that, like, you're…
*24:41*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*25:05*

**Gus Schissler**: Would be more closely matched to those, to those releases.
*25:05*

**Andrea Zotelli (WovenByToyota)**: Yeah, and we have to get there to get it to production, right?
*25:09*

**Gus Schissler**: Okay.
*25:17*

**Andrea Zotelli (WovenByToyota)**: So we're trying to catch up.
*25:18*

**Gus Schissler**: Gotcha. Awesome. So… I think at this point, we… we've covered, like, the high level, from beginning to end. Getting requirements, through the customer application team, Development teams building those requirements, and then working on their own codebases. we're getting caught up right now in terms of this backlog of unwritten requirements that we need to write to make sure that we have the correct documentation. And then in the future, ideally it'll be more of that structured, like, V model, where the requirements are coming down and then coming back up. More regularly. Is there… from your perspective, is there anything that we're… we're missing at this point? Everything… anything that we haven't talked about? I know we talked a little bit about testing, we talked about requirements, we talked about software teams.
*25:20*

**Andrea Zotelli (WovenByToyota)**: Nope, there's just a traceability that we want to implement, right? But we don't have it yet, because we barely have the requirements there yet.
*26:20*

**Gus Schissler**: Gotcha.
*26:28*

**Andrea Zotelli (WovenByToyota)**: This is gonna be also worked in the future. Like, we are doing at the same time that we are now, for example, we have a package of requirements that we received from TMC that became the SWRDs that they call. We are working in creating the test case for those And we are doing, then, the traceability between our test cases and our… and the SWRD.
*26:30*

**Gus Schissler**: Okay. And when you say we're… we are writing the test cases, is that product delivery that's writing them?
*26:57*

**Andrea Zotelli (WovenByToyota)**: Is, is my team software, like, it's the systems verification and validation? T.
*27:03*

**Gus Schissler**: Gotcha.
*27:11*

**Andrea Zotelli (WovenByToyota)**: It's Julia's team. Gotcha. She's the manager, yeah.
*27:14*

**Gus Schissler**: From what I was seeing, that V model is based off of, like, we have the requirements, and then the mirror of those requirements are the tests, and so. The tests to accurately mirror those requirements.
*27:18*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*27:31*

**Gus Schissler**: Does that happen? Okay.
*27:31*

**Andrea Zotelli (WovenByToyota)**: Yeah, and SWRD is at the system level.
*27:34*

**Gus Schissler**: Okay. So it's just below the users.
*27:38*

**Andrea Zotelli (WovenByToyota)**: Needs. The user requirements.
*27:42*

**Gus Schissler**: Okay. And SW is.
*27:45*

**Andrea Zotelli (WovenByToyota)**: SW Softer. I don't know why they call it SWR, but they call it like that.
*27:50*

**Gus Schissler**: No raise. Okay. Cool. And then, I guess the last question that I actually just brought up, so… You're working with… There are multiple different software teams, or…
*27:56*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*28:15*

**Gus Schissler**: development. you're working with, too, and those are the teams that each have their own different way of writing requirements right now. Just wanted to make sure I got that correct. Dan, did you have any, questions on this high level? Before we move on. Or Nate, if you had anything.
*28:16*

**Dan Maser**: S… STLC, sorry.
*28:38*

**Gus Schissler**: Oh, software development lifecycle?
*28:41*

**Andrea Zotelli (WovenByToyota)**: Oh, okay, okay.
*28:43*

**Dan Maser**: All the acronyms.
*28:46*

**Gus Schissler**: All the acronyms. Apologies.
*28:47*

**Dan Maser**: No, Gus, I think… so I have some questions on, because I think there's a little bit, Andrea, of, like, how you're doing it now versus kind of an ideal scenario once you get through the backlog. But I feel like waiting, Gus, to get to our second part and kind of how product delivery works in this lifestyle, I think getting through that first makes sense.
*28:50*

**Gus Schissler**: Yeah, yeah, that makes sense. Yeah, I mean, that's a perfect segue into the second, second section of today. So we've talked, like, high level, Andrea, about, like, what the ecosystem that we're playing in looks like right now. kind of area is, we haven't focused specifically on what, like, you and your team are doing. We've talked loosely about it, but I want to make sure that we kind of capture, like, what what you're doing right now to get caught up, and then to Dan's point, what the future might look like. We are caught up in and whatnot, so… What it sounds like, to start, is that there's a… Gus…
*29:11*

**Dan Maser**: Yeah, sorry, one second, let me… if you're okay with it, I was gonna split this… I was gonna… gosh, I was gonna split this off, and maybe, like, a current situation, and maybe, like, a future situation, if that makes sense.
*29:56*

**Gus Schissler**: Fair. Is this… okay, cool. Let's do this. So right now, we have a backlog of unwritten requirements from different teams. That's kind of where we're starting from. Do you have a, like, a… a… How is this… like, unknown? Like, known. Is there, like, a… like, a spreadsheet somewhere where you're like, oh, we need to make sure we have all of these things, Documented? Like, how do you know, like, your checklist, essentially, of all the requirements that you need to write?
*30:09*

**Andrea Zotelli (WovenByToyota)**: Yeah, this is, it's hard to know for now, because I… I was able to write a few requirements that were based on a presentation, like a slide deck. And a spreadsheet that were showing, like, what the software was doing at the time. That was… done in 2024, so that's why I got in touch with the With the software developers to say, hey, this is… is what to say in the document. Is this still this way, or do you guys… did you guys change something?
*30:51*

**Gus Schissler**: Gotcha.
*31:29*

**Andrea Zotelli (WovenByToyota)**: And there's a lot of things, even in those documents, that have TBD parameters, so…
*31:30*

**Gus Schissler**: Mmm, I…
*31:37*

**Andrea Zotelli (WovenByToyota)**: I… I… like, I don't know, I need to get in touch with the software people to know what they are doing.
*31:38*

**Gus Schissler**: You know.
*31:45*

**Andrea Zotelli (WovenByToyota)**: Because what the software is doing, because… the… the slide deck has TBD things there, and I don't know. Even those software requirements to which we… to… to which we are writing, the test case that I told you, even those… they do also have TBD stuff, and then we have to… to get to reach out to… to people writing the code and say, what did you guys put in there? Or is it still blank? I don't know.
*31:46*

**Gus Schissler**: Okay. So…
*32:19*

**Andrea Zotelli (WovenByToyota)**: the current situation, like, there's a… there's a lack of clarity or information. What do I have to do? I'm kind of face of discovery. You know. Trying to assemble, to figure out what we have to do. I think Julia has more information, because she's been very long in the company. She's from… since from the time it was TRI, as a Toyota Research Institute, because… before it became Oven. So, she probably has in her mind.
*32:20*

**Gus Schissler**: Hmm.
*32:57*

**Andrea Zotelli (WovenByToyota)**: more information about what needs to be on paper, I'm still… Gathering that information.
*32:58*

**Gus Schissler**: Gotcha. Cool. And you're doing that through a mix, and I just put these two together.
*33:05*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*33:09*

**Gus Schissler**: Previous docs, either…
*33:10*

**Andrea Zotelli (WovenByToyota)**: Yeah. Yeah. Yeah, and talking to the people, yeah.
*33:12*

**Gus Schissler**: Gotcha.
*33:17*

**Dan Maser**: Can I… can I ask a quick question on this? I want to make sure I'm understanding it correctly. The reason why this exists is that because there just wasn't an emphasis on needing that to be cycled back up? Like, there wasn't a need for that, Traceability, or do you have any thoughts on, like, how it came to be like this?
*33:18*

**Andrea Zotelli (WovenByToyota)**: I think it's… I… I don't know the reason, but from the little that I talked about with people about this, like, my… feeling, my inter… my understanding is that they started developing the software, and they were not concerned about requirements and gathering this information. You know, they have the request from the user, from the customer, which is TMC, And they… you need to build this. And they started building. So, even sometimes. today, I see that there's a bit of resistance, because, like, I am very requirements-focused. I… I… I… I like systems engineering, and I like to do it the proper way, but sometimes when you get in the teams that they are already used to work in a different way. then, you know, you cannot, like, slow down their process of building the product itself just because you want the requirements to be ready, right? So… That was even a discussion I had with a colleague the other day. He said, but requirements are so important. He said, yeah, but you cannot slow down the the software development, because if you don't have them. Yeah, I agree, but I think we will be… in my opinion, like, as a systems engineer, I think we would be building software faster and more efficiently if we had the requirements to begin with, right?
*33:39*

**Gus Schissler**: Yep.
*35:15*

**Andrea Zotelli (WovenByToyota)**: So… That's… That's the way it is here now.
*35:15*

**Gus Schissler**: The… that does give me another question. So there's… there's already software out there in vehicles that's been. by the different… What do you know, and this… I don't know if you have the answer to this. Do you know what's changed between TMC and Woven, that there's now, like, the… like, there's probably some sort of catalyst that shifted more focus towards requirements. Do you know what that might have been?
*35:20*

**Andrea Zotelli (WovenByToyota)**: So, the thing is, like, well, TMC, they have their own requirements for their own systems, right, for everything that they build in there. for our vehicles that are on the road right now, right? For TSS4, like, the Toyota 60 Sense and everything. But for this autonomous vehicle project, it's different, right? It started in the TRI and now OVEN. And the thing is, Toyota wants to put this product on the road, right? And we need to catch up. And for… for this product to become… to get into production, they need requirements.
*35:53*

**Gus Schissler**: Gotcha.
*36:32*

**Andrea Zotelli (WovenByToyota)**: Because you cannot have a problem. That's why, like, the ARIN team, they are farther ahead, because they already have the software deployed in the vehicles that's going to the market, so they have the requirements, they have everything set in there. You know? But our side, we don't, because it's still under test, it's still under development, so… there was some request from TMC that came in, say, I think one year ago or two years ago, I don't know how long. They said, hey, you need the requirements, you need to, like, have all the documentation, because this needs to be ready into production within 2-3 years.
*36:33*

**Gus Schissler**: Gotcha.
*37:15*

**Andrea Zotelli (WovenByToyota)**: So that's why now we are trying to catch up, to be able to put this into production without… without the requirements, we can't.
*37:15*

**Gus Schissler**: Gotcha. That makes a lot of sense, and that's helpful. I assume part of it has to do with maybe, like, regulatory, like.
*37:24*

**Andrea Zotelli (WovenByToyota)**: Oh, yeah.
*37:33*

**Gus Schissler**: And that was even what I was talking to another colleague the other day. I said, if any issue happened on the street, like an accident or something, the investigators, the first thing they ask, where are the requirements?
*37:34*

**Andrea Zotelli (WovenByToyota)**: That's the first question, always. So you have to have the requirements, you cannot, like, simply sell. development based on our, like, I don't know, in our knowledge and our experience. No, you have to have everything formalized, and you have to have all the paper trail, have to show everything, right? All the traceability, everything has to be there. This is very important.
*37:49*

**Nathan Papes**: Is there, like, requirements already written that's… not for North America? Like, I'm curious when you have these cars out in different regions. Like, is there something that we can maybe, like, leverage copy to kind of… I don't know, get out. Some kind of start on it? Like, I'm just thinking in terms of, like, regulation, what other regions? Like, what are their requirements? Like, different than North America?
*38:14*

**Andrea Zotelli (WovenByToyota)**: No, but this is different, like, the vehicles, what we have into production today. For Toyota, they all… they have all the requirements for everything that's on the market, right? This is a new product that they don't have in the market, it's just in testing phase. And development phase. So, for this specific product, we don't have the requirements yet. But, apparently, from what Julia told me. There are requirements that came from TMC, TMC Toyota Motor from Japan. But because of difference in regulation and standards from one country to another, and also because I think they received all requirements in Japanese.
*38:46*

**Gus Schissler**: Hmm.
*39:36*

**Andrea Zotelli (WovenByToyota)**: And even when you write, like, requirements in another language. so different, like, it is Japanese, and the structure is different, the way that they structure… you know, because the language shapes the way people think, and then the way that they structure, and they write the requirements, so when you just do a simple translation. that thing sometimes doesn't make sense, the wording is so weird, it's… it's awful. So, we are having to kind of redo the work of writing requirements From scratch, but not from scratch, because we have some reference. But we need to make it make sense for us. And also, I think Toyota, when they send the requirements, they don't send in a way that's… representative for… for our modules, for the way that we have the modules divided and being built here at Oven, and also it's not only OVEN, it's what they call it, one team. There's OVEN, there's Denso, there's other companies participating, so it's a huge effort. There's a lot of teams, and it's very complex, you know?
*39:36*

**Gus Schissler**: Gotcha.
*40:54*

**Dan Maser**: So let's, that was… I think that was a really good answer.
*40:55*

**Gus Schissler**: Yeah, it was gonna pull us back, too.
*40:58*

**Dan Maser**: Perfect, let's, yeah, let's keep moving just for the sake of time.
*41:00*

**Gus Schissler**: Yeah, so… Coming back to the current situation. So, we're talking with development teams and looking at previous documentation in order to gather. the requirements. And at this point, are you also writing the tests, for those requirements at the same time, or are you doing that?
*41:03*

**Andrea Zotelli (WovenByToyota)**: Yeah, we are doing, but for different, for different packages of… of… of… we… I haven't started writing for the component level, let's say, but for the system level, we started writing the test case, but for component level, we don't… we barely have the requirements, so then we're gonna write the test case later.
*41:22*

**Gus Schissler**: And we can't write the tests without the requirements first.
*41:45*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*41:48*

**Gus Schissler**: And so, as you're gathering these things, you are kind of, like, adapting or rewording or restructuring those requirements to fit within the JAMA structure.
*41:51*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*42:04*

**Gus Schissler**: need. Okay. And then… When do you know, for a requirement that you're writing, when do you know that you're done with that requirement for, like, a specific individual one?
*42:05*

**Andrea Zotelli (WovenByToyota)**: One requirement?
*42:22*

**Gus Schissler**: Sure.
*42:24*

**Andrea Zotelli (WovenByToyota)**: One requirement, we have to send them to review. By the teams, like, the product delivery team is gonna review those requirements, our other peers in my own team. and also… Yeah, I like… I always like to discuss with the software team also the requirements, but… I haven't done that yet here. But I think they must be included in the review process, but we haven't started any review process yet in JAMA, but we will. And then, once they reviewed and approved, then we say we're done with that requirement.
*42:26*

**Gus Schissler**: Gotcha. And then you're just essentially moving down the list for maybe each component, or each.
*43:10*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*43:16*

**Gus Schissler**: just trying to… flesh out, like, everything that it does right now, and capturing the requirements for what it.
*43:18*

**Andrea Zotelli (WovenByToyota)**: Exactly.
*43:24*

**Gus Schissler**: Okay. And this is, this is the current situation, it sounds like. It's like a wash, rinse, repeat from here, so…
*43:28*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*43:41*

**Gus Schissler**: Then you go move on to the next feature, you look for previous documentation, you talk with development teams, and then you're back to writing and gathering those requirements again.
*43:41*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*43:50*

**Gus Schissler**: Should we… Dan, do you have any questions on current, situation?
*43:57*

**Dan Maser**: Just to… so just to clarify, because I think beforehand, I was assuming that when you were talking about the backlog, that it… you would be doing it by component level first. And then moving up, but it sounds like what's actual… what you're actually doing, which actually makes more sense, is you still have to talk to the development teams, et cetera, but you're starting at the software level. Is that because that makes the most sense, or is that because that's the only place where you're able to get enough of the documentation? Does that make sense as a question?
*44:04*

**Andrea Zotelli (WovenByToyota)**: Yeah, I'm trying to understand, can you repeat?
*44:39*

**Dan Maser**: Yeah, I guess what I'm asking is, you were saying you're starting to write these requirements from the software level, is that correct?
*44:42*

**Andrea Zotelli (WovenByToyota)**: That's what we received from them. the software requirements, and then we have to write for our components, but I'm not writing for the components from the software requirements. The software requirements, we're writing the test case for it. And for our components, then we are writing individual packages of software, of… of requirements. And that's what I said that I based my information when… in documents, like in presentations that they had in the past, because I don't have component requirements written anywhere.
*44:50*

**Dan Maser**: I'm writing them based on slides, and…
*45:27*

**Andrea Zotelli (WovenByToyota)**: Scenarios and spreadsheets, this kind of stuff.
*45:31*

**Dan Maser**: So you have… yeah, okay. So there are.
*45:37*

**Andrea Zotelli (WovenByToyota)**: And I had to write from the zero, like, the component doesn't exist, the requirement.
*45:40*

**Gus Schissler**: Perfect. So when we're…
*45:48*

**Andrea Zotelli (WovenByToyota)**: Maybe, just to rephrase this question, when we're writing these.
*45:50*

**Gus Schissler**: requirements into JAMA.
*45:54*

**Andrea Zotelli (WovenByToyota)**: That's awesome.
*45:56*

**Gus Schissler**: The component level.
*45:56*

**Andrea Zotelli (WovenByToyota)**: Yeah, s… yeah.
*45:59*

**Gus Schissler**: Okay.
*46:03*

**Andrea Zotelli (WovenByToyota)**: like, components that I call, they are the modules, like, for lane change, for merging, for the capabilities.
*46:04*

**Gus Schissler**: Gotcha. Okay. And, that's a good point. Is there a list of all the capabilities that you have?
*46:11*

**Andrea Zotelli (WovenByToyota)**: Yeah, just a heaven. Like, in spreadsheets and presentations.
*46:19*

**Gus Schissler**: Sweet. Yeah, if we… it'd be helpful, I think, just from our perspective, to get a look at all of those. Components or capabilities, just to help us build some additional context?
*46:25*

**Andrea Zotelli (WovenByToyota)**: Yeah, I can try to find some in the same chair.
*46:36*

**Gus Schissler**: So… So just…
*46:44*

**Dan Maser**: Oh, sorry, I was saying, just to clarify, to make sure that I'm understanding, so your output right now has been component-level. Okay, great, thank you. And that's why you've had to do so much work, too, because there's nothing written down, you are having to take software-level documents or previous documentation that's scattered about. To get those component level. Perfect. That makes a ton of sense. Thank you for the clarity.
*46:45*

**Gus Schissler**: Instead of… Dan, I think there are two ways that we could go from here. We could either talk about… how do we want the system to work once we get through the backlog, and there's more of the V model working? Or we could… I could ask… we could ask Andrea, like, the magic wand question of, like. to solve the pain points in this current situation right now, like, Andre, what would you… What… if you could wave a magic wand, what would you immediately make better for yourself, or easier for yourself? In kind of gathering these requirements and writing them.
*47:17*

**Dan Maser**: Let's start there.
*48:00*

**Andrea Zotelli (WovenByToyota)**: I wanted to have the information. That's the hardest part.
*48:04*

**Dan Maser**: And, let me clarify that question. I think it's a great answer. When you say you want to have the information, are you saying you want… Yep, keep going.
*48:12*

**Andrea Zotelli (WovenByToyota)**: source, one source where I could go and see what I need to write about, you know, because even this is hard. Like, I know the components, but… I don't know… Everything that needs to be there, every… like… Yeah, I don't have a list, like a consolidated list, you need to write this, this, like, for example, oh, the lane change, you're gonna need to write for this scenario, if there's a vehicle ahead, if the distance is this, if there's a vehicle behind, when you need to lane change, you're gonna lane change because Not because you want to pass, take over, but just because you want to go to a destination, and everything, you know? Like, it's structured, like, in a way, a source of information where I should have everything that I need to put in the requirements, because now I don't. The information is scattered, like, it's everywhere, and I have to keep finding documents, and many times you get a spreadsheet that has a lot of links to tons of other documents, and that… Oh my goodness, it's so confusing, you know?
*48:22*

**Dan Maser**: Have there been any… that makes a ton of sense. Have there been any pa… like, you've been doing this for a little bit amount of time now. Do you have any kind of ca… like, I'm gonna call it an investigative cadence that you've embraced? I mean, it still sounds like a pain in the ass. But, like, is every problem unique, and you always have to search in different locations, or have you… do you have any kind of patterns that you've done? To try and find them.
*49:38*

**Andrea Zotelli (WovenByToyota)**: No, because I don't even know where the things are, you know? So, I don't have a pattern of anything, like, there's… This was something that Julia asked me when when she was interviewing me for the position, when there's a lack of clarity, what do you do? I see there's a lot of lack of clarity, you know, and how I have to handle it, and I said, just go and ask people, because that's what I can do, right? I go ask people who are longer than I do, that I am here, so… That's what I have been doing. There's Hannah in my team, because Hannah, she's almost a year here in the company, so she has more, a little bit more information than I do, so she is very useful. She's very helpful many times… many times I need… I have questions, I go and ask her. At least she knows where to point me to, you know? Who I should ask the information about.
*50:01*

**Gus Schissler**: So, if I might maybe reframe a bit of the problem we're trying to solve… Maybe. And just to get some clarity here, so the… The problem that we're trying to solve is that we need to gather a bunch of requirements from a bunch of different areas.
*51:05*

**Andrea Zotelli (WovenByToyota)**: -
*51:25*

**Gus Schissler**: And so we can consolidate them into the standardized format of requirements. Dictionary. the… In order to do that, we need to know, like, where All of that information can be gleaned from first. Like, we… for example, we can't build a tool that can connect to a whole bunch of different things in order to gather the requirements and, like, convert them into that standardized format if we don't know where to look for them, or if they need a human element or a human conversation, in order to really understand that. Because the documentation could be out of date, or there could be a TBD, or something like that. So we need to solve for both of these problems. It's both understanding where is the information, and then also figuring out how to generate the requirements. Is that a correct… Yeah. Okay. Trying to think if there are any other… Questions? I had a…
*51:26*

**Dan Maser**: Yeah, just to… in terms of the backlog, I guess kind of similar, piggyback on that, I think it's also… how long… how large is this backlog? Because is it a… is it a pretty massive backlog? Because I think my follow-up question of that is how much our work is going to be trying to more so design a future state when there isn't a backlog? But I want to make sure I have a good assumption of how large the backlog is.
*52:29*

**Andrea Zotelli (WovenByToyota)**: I think the backlog's huge.
*53:01*

**Dan Maser**: Good to know. Great. Okay, so we don't have to worry about post-backlog, as I feel like what I'm hearing, and we're really more so focused.
*53:04*

**Andrea Zotelli (WovenByToyota)**: Yeah, I don't know, like… I would… I will confirm with Julia what her goal is, if she wants us to develop something for our backlog, or for our feature, or… Yeah, because…
*53:11*

**Gus Schissler**: I believe that what she needs, what she wants, is this, what we're trying to put our requirements in there, so it's going to be based mostly on the backlog, that's my understanding, but it's better to confirm with her. Absolutely. Okay. I think… At this point, I know we only have 6 minutes remaining, and I think we're out of… I'm out of questions, like, in these areas, at least until we can chat as a team in, ideas roll around in my head. Something that we didn't get to, this time are, like, the players and the stakeholders outside of.
*53:26*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*54:07*

**Gus Schissler**: But it does sound like you're talking with developer… development teams, you're.
*54:08*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*54:14*

**Gus Schissler**: Product management.
*54:16*

**Andrea Zotelli (WovenByToyota)**: Product delivery, product management team, yeah. Those are basically the people, and also the… The behavior team, but not so much.
*54:16*

**Dan Maser**: Yay. Gus, to your point, I don't think we have time now, and this may be a follow-up or an async, but I think just.
*54:29*

**Andrea Zotelli (WovenByToyota)**: Even…
*54:34*

**Dan Maser**: Outlining the normal people that you talk to to approach these problems, because that to Gus's point, will help us determine what we need to get access to, what we need to hook up any automation to get access to. I think… any kind of diagram of, you know, who you usually wind up having to poke, and what teams they are, I think would be super helpful, Gus, unless you disagree on that.
*54:35*

**Gus Schissler**: Nope, that would be great.
*55:00*

**Andrea Zotelli (WovenByToyota)**: To give you the name of the people that I usually reach out.
*55:02*

**Dan Maser**: Yeah, I guess, I mean, we might be able to get a little bit in 4 minutes, in terms of, like. Yeah, how many different development… like, so you're…
*55:05*

**Andrea Zotelli (WovenByToyota)**: No, the development team that I already… as I was working on lane change, so I reached out to show, who… she is the developer, one of the developers that's working on Lane Change, and then we talked to Wei… Who is, his staff engineer for the product management. And also, another person, the one I usually talk is… what is his name? Oh, Clifton. He works on the process side, so about JAMA, and the process in JAMA, and how to set up the structure and everything. He's also… he's also helping on traceability things, so… Because… I think often they are considering using Rectify to do traceability. So, I think, that's what… Clifton is gonna do a demo for us.
*55:14*

**Gus Schissler**: on that.
*56:12*

**Andrea Zotelli (WovenByToyota)**: Yeah, I can't… can't send their names on Slack for you, so it's easier for you to… to know who… who they are.
*56:13*

**Gus Schissler**: a quick follow-up, I guess. For these development teams, do they have… Or, for, Let me, collect my thoughts. So, for a single development team. Who tends to be on that team? Is it just, like, a lead developer and a group of other developers? Is there, like, a product manager, maybe, that… that kind of… or a scrum master that leads that team, or coaches that team through the things they do?
*56:22*

**Andrea Zotelli (WovenByToyota)**: Ew.
*56:50*

**Gus Schissler**: Or…
*56:50*

**Andrea Zotelli (WovenByToyota)**: I think so, but I'm not very familiar with their structure. I reached out to Sho, she… because she knew about what I was… what I needed, and that was it.
*56:51*

**Dan Maser**: And that quick, that quick, comment you just made about the lane change. You were trying to work on a specific lane change, one component, correct? Yeah, because we're working one component at a time. What is the ti- right now, what is the time… like, how long does it take for you to develop Doc… like, develop this for one component.
*57:07*

**Andrea Zotelli (WovenByToyota)**: That's not it. Weeks, because the problem is, I wrote all the requirements there based on the documents that I had, but then… There are a lot of TBD over there? And I need to reach out to people to know what that TBD is, and then I'm trying to set up, like, kind of meetings or discussions to.
*57:31*

**Gus Schissler**: Hmm.
*57:51*

**Andrea Zotelli (WovenByToyota)**: to figure out those CBDs, but they don't even know what those CBDs are? So… I couldn't finish, because I'm still trying to get information that's not, that's missing there.
*57:51*

**Gus Schissler**: That makes sense. That also sounds incredibly frustrating.
*58:08*

**Andrea Zotelli (WovenByToyota)**: Yeah, I… I don't think I, like, I am not frustrated, because I… when I joined, I knew they were building everything from scratch, so I expected that it was to be… to start, you know, and build something, so I'm okay with that. But… there's a lot of work to do. Like, my only concern is that It ends up taking way more time than it should, and we do have, like, a deadline, right? So… We need to be able to expedite this.
*58:13*

**Dan Maser**: Yeah, one… one quick follow-up on that. Do you have to go in a set order? I'm wondering, like, if you're able… like, if we're able to develop a tool that unearths all the TBDs, that's kind of helpful, but it's not that helpful because there's still a lot of TBDs, but could… if you… if it were to show that, hey, there's two different things, and this one has less TBDs than the other, do you have a set order, or…
*58:49*

**Andrea Zotelli (WovenByToyota)**: No, I don't think so. Okay. I think as long as we are putting some requirements there, it's… we're progressing.
*59:12*

**Dan Maser**: Good to know.
*59:19*

**Gus Schissler**: And you mentioned, deadline. I know earlier in the call you mentioned needing to be in production in the next, like, 2 or 3 years. Is there, like, an actual deadline that Woven is headed towards?
*59:20*

**Andrea Zotelli (WovenByToyota)**: Well, yeah, 3 years was… was what I've heard. 3 years to be on the streets. I don't know if, like, we need to accelerate.
*59:31*

**Gus Schissler**: Gotcha. And that's 3 years from, like, last… last year.
*59:42*

**Andrea Zotelli (WovenByToyota)**: Yeah, from when I joined, so…
*59:47*

**Gus Schissler**: Wow.
*59:48*

**Andrea Zotelli (WovenByToyota)**: Let's say it's 2028, or beginning of 2029.
*59:49*

**Gus Schissler**: Gotcha, okay.
*59:53*

**Andrea Zotelli (WovenByToyota)**: Yeah. But, yeah, if we want to be in production, we have to have those requirements, right? So, yeah, 2029, I think it's… beginning of 2029 is… I think it's a good… Deadline to… to set.
*59:55*

**Gus Schissler**: Gotcha. If you… I'm always curious about… I know we're kind of over time. I'm always curious about people's, like. gut feeling, like what your… your intuition tells you. If you were to say, if nothing were to change right now, how much longer would… You be working on, like, writing requirements in order to get everything into production. Would it be within 3 years? It sounds like. There's way too much work to fit within the next 3 years.
*60:14*

**Andrea Zotelli (WovenByToyota)**: Yeah, it does, and I think I should be able to put there if I have the information within that timeline.
*60:44*

**Gus Schissler**: Gotcha.
*60:57*

**Andrea Zotelli (WovenByToyota)**: The problem is the TBD is in. And the problem also having people sitting together with us. It adds an extra layer, like, of a challenge, an extra challenge that we have teams in Japan. So it's very hard to connect with them because of the time zone.
*60:58*

**Gus Schissler**: But I, I, I want to reach out to them.
*61:18*

**Andrea Zotelli (WovenByToyota)**: And I think I want to start working a few hours at night. to be able to talk to them, because just Slack doesn't work.
*61:21*

**Gus Schissler**: Right, yeah.
*61:29*

**Andrea Zotelli (WovenByToyota)**: And here, they use a lot of, like, comments on documents, they put the documents on Google Docs and put questions, comments, but the comments stay there forever, nobody replies. So, what's the point? We need you to improve this communication. This is kind of paramount for this.
*61:32*

**Gus Schissler**: Gotcha. That's super helpful. And I know, I know we're at time. We don't have any meetings scheduled for the rest of the week. We are talking with Julia on Monday. And that overlaps with our regular stand-up, so we'll probably cancel that stand-up, but maybe next Tuesday. We can work to just, like, regroup as a group and talk about what we've learned so far. I know there are a few other people that we'll want to talk with, too, like you mentioned, Hannah. So we'll… I think we'll be looking for some time to schedule, like, a longer, like, maybe debrief of the conversations and the interviews that we've had with folks. But before… Thank you. Before I end the call, do you have any questions for us, in terms of… Things to keep in mind, concerns that you have, like, any questions?
*61:51*

**Andrea Zotelli (WovenByToyota)**: Well, I just wanted to get your… your perspective on what the project is. Julia, she explained to me, but I… if I can't hear from you, how you guys see this project, I would appreciate.
*62:53*

**Gus Schissler**: Yeah, from my perspective, short answer is, I'm not quite sure yet. the… if you were to, really ask me for an answer, I would say… There are two… two sides of this project that we'll be working on, and some of this is important by the conversation that we just had today. One is… how do we find the information that exists, that's written down, that exists, that's out there, and how do we surface that information to make it easy either for a system to write the requirements, or to make it really easy for you to write the requirements based off of that information? So that's just…
*63:05*

**Andrea Zotelli (WovenByToyota)**: spoon.
*63:47*

**Gus Schissler**: Finding the information is problem one to solve. Problem 2 to solve. that I think we've unearthed is there's a lot of stuff that's not written down, or that's mental knowledge, or tribal knowledge.
*63:47*

**Andrea Zotelli (WovenByToyota)**: Mayor.
*63:58*

**Gus Schissler**: knowledge. And so, that's probably another problem that will we'll need to work on and solve as well is, like, how do we, like you mentioned, that communication? Like, how do we streamline, or how do we solve for If it's not written down, still getting the information into that system.
*63:59*

**Andrea Zotelli (WovenByToyota)**: Yeah.
*64:18*

**Gus Schissler**: So I think it's, like, two sides of the same coin. And, yeah, the… I think the goal is to solve both of them.
*64:18*

**Andrea Zotelli (WovenByToyota)**: lifted.
*64:28*

**Gus Schissler**: here to do.
*64:28*

**Andrea Zotelli (WovenByToyota)**: Okay, great.
*64:29*

**Dan Maser**: Yeah, the only thing I'd add is, like, the word, and I know it was in Julie's document, but the word of low-hanging fruit, I think a lot of this, too, is us prioritizing what is the lowest hanging fruit. And moving on that, and I think, you know, this is a complex problem, which is great, because I think a lot of complex problems, there's a lot of ways that we can solve it, and there's also various iterations that it can be solved. And so I think, in terms of low-hanging fruit, you know, even talking about the, like, well, if you can identify things, great, but if we're just… if it's just gonna identify a bunch of TBD, you know, I think there's a lot of layers to this, and so figuring out what is the… The first iteration that makes… that is the lowest hanging of fruits, if you will.
*64:31*

**Andrea Zotelli (WovenByToyota)**: That it can help us to progress at least faster, right?
*65:14*

**Gus Schissler**: Yep. Sophie.
*65:18*

**Andrea Zotelli (WovenByToyota)**: Great.
*65:19*

**Gus Schissler**: Cool. Awesome. Well, thank you very time… thank you very much for your time today, Andrea. It was…
*65:21*

**Andrea Zotelli (WovenByToyota)**: Yeah, thank you.
*65:28*

**Gus Schissler**: It's super, super interesting to hear the problem from your context and from your side of things, so I appreciate the time.
*65:28*

**Andrea Zotelli (WovenByToyota)**: That's great. Okay, thank you, thank you.
*65:36*

**Dan Maser**: Thank you.
*65:38*

**Andrea Zotelli (WovenByToyota)**: After doing, bye-bye.
*65:38*
