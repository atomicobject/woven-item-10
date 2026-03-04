---
id: s-0T0n2HavYxFv
type: source
name: 2026-03-02-2_julia-interview-debrief.md
path: 2026-03-02-2_julia-interview-debrief.md
format: raw-transcript
topics: [general]
status: complete
ingestedAt: 2026-03-04T20:53:32.296Z
fileSize: 27150
extractedAssertionIds: [a-Bjse1HEYkGO8, a-1SUFDG7i60hx, a-8bCNW7nbnNX_, a-qU6H-_hIxtjh, a-am8TovBlqf9_, a-brTcZ0u0Xj0J, a-h0Rc8myrXX24, a-eeho7kUK8BgY, a-PAEKIsrX9MPj, a-URTWKmUswKh6, a-1tAsb6v0KsMR, a-UMh4mly1BdLo]
---

**Gus Schissler**: We had very little time, but it's also… It's very easy to think about how, oh, like, we're just giving you an assignment, and you can go build the thing, as opposed to understanding the context that the thing's going to exist in. And now that we understand the context, it'll be maybe easier to actually build it, but who knows?
*00:01*

**Dan Maser**: No. Juan, I think to your point, like. I think their understanding of the problem's pretty solid. But yeah.
*00:23*

**Gus Schissler**: Yep. Well, they've had patience and understanding that, like, we need to understand the context, yeah.
*00:32*

**Dan Maser**: So… Yeah. I don't know if… I think Nate's jumping in, but…
*00:40*

**Nathan Papes**: I'm here, I'm here.
*00:46*

**Dan Maser**: Oh, my bad, dude. I didn't even notice.
*00:47*

**Nathan Papes**: I just, I, yeah, it was, like, a couple seconds ago.
*00:49*

**Dan Maser**: Any, big… for either of you, any large, big picture thoughts on that?
*00:52*

**Nathan Papes**: Hmm… Nothing that was different, then, from what… Andrea said… In that interview…
*01:02*

**Gus Schissler**: Yeah.
*01:12*

**Nathan Papes**: It's clarification, I would say. It was good to hear that. There's more color added, too, I'd say.
*01:13*

**Gus Schissler**: Yeah. It's, it was helpful to hear that the problem that we told Andrea that we would be solving is not in the.
*01:23*

**Dan Maser**: actual.
*01:31*

**Gus Schissler**: Problem that we'll be solving.
*01:31*

**Dan Maser**: Yeah. It is…
*01:34*

**Gus Schissler**: A problem to solve sometime in the future. But I'm kind of glad that we don't have to do some sort of, like… Like, code scraping to… Requirements bubbling up.
*01:36*

**Dan Maser**: Like we were talking about on…
*01:53*

**Nathan Papes**: Bam.
*01:55*

**Gus Schissler**: Thursday, I think.
*01:56*

**Dan Maser**: Yeah, I… I appreciate Julie, I feel like Julie is… she has a built-in, because she… She… she… it seems like she has a pretty good understanding of prioritization, in the sense that… because she did it with that, and then she also did it with the, she kind of self… must… like, nice to have the third process, too, which is the, product delivery, like, if the product delivery wants to make changes. She, you know, she brought that up as a third thing that happens, and would be really nice if it's solved, but also is not the core problem.
*02:00*

**Gus Schissler**: Right, yeah.
*02:31*

**Dan Maser**: I don't know how that competes with the… with the… Backlog request, but yeah.
*02:34*

**Gus Schissler**: Yeah. It's, it is like a, how would I describe it? I don't know where my brain was going, it just kind of failed. Damn it.
*02:40*

**Dan Maser**: It is like a…
*02:58*

**Gus Schissler**: I don't know. The, oh, that's what I was going to say. They are, and she clarified this too, they are building out the business logic of what needs to happen. And we will build out the tooling that makes that easy to do. Because right now, I don't doubt that each person probably has their own style of… Oh, I'm looking through each of these different kinds of documents, and here's what I'm cherry-picking out to put into JAMA.
*03:07*

**Dan Maser**: Yeah. I mean, I think you did a good job of, like, getting to next action steps of, like, we just need to watch them do this. And once we pick… like, once we get, like… Comfortable seeing how they do it, and how multiple different people do it.
*03:36*

**Gus Schissler**: And what works and what doesn't.
*03:51*

**Dan Maser**: I think that will… provide… Significant amount of clarity of, like, what is possible, what's not possible, like…
*03:54*

**Gus Schissler**: Yeah.
*04:01*

**Dan Maser**: Because even her, like, bucket metaphor, the moment that connected with me, I'm like, oh, okay, I get it, like… Even when everything is housed in one, basically. you know, I've seen PRDs before, I don't know exactly how it'll be, but… Ultimately, it's gonna have a shit ton of links. It's only so helpful.
*04:02*

**Gus Schissler**: Right. I also have no idea how we're going to solve this, though.
*04:18*

**Dan Maser**: In terms of… In terms of which, like, in terms of how we gather things, in terms of, like.
*04:32*

**Gus Schissler**: Like, we have… we have the inputs, and we loosely know what the outputs are. But how we do that is going to be… rough, I think, or weird. Because… Sure, I could see us doing, like, a… like, if I downloaded the Word doc version of a Google Doc, and fed that into… My agent of choice, and asked it to pit out… spit out… Give me requirements in this format.
*04:39*

**Dan Maser**: Based on the business logic that they've determined.
*05:15*

**Gus Schissler**: That… that's… very… easy to do. Like, as long as we know what the outputs are and the inputs are, that should be fine. The tricky part is… Building something that can interface with all of the different types of documents.
*05:18*

**Dan Maser**: What do you mean?
*05:39*

**Gus Schissler**: necessarily downloading them. And getting at their most recent version, hosted wherever it happens to be.
*05:39*

**Dan Maser**: Yo. Are you thinking Access, or just Access Plus? location plus… Yeah.
*05:48*

**Gus Schissler**: Access… I think it's mostly an access. Issue? Because I don't… I… and this is, probably an area for conversations that we need to talk with. I don't know who we talk with yet. But what… almost everything has an MCP server nowadays. Like, is that… Well… And those are built so that it's easy to provision access and get the context that you need from the documents that you're trying to get access to. But do they have those implemented? do they even exist? Like, if we wanted an agent to go out there and try to get the… gather these documents so that it can ingest these requirements, like. What kind of access does it need, and do they have a pattern for that in the past, that we'd be able to lean on, or are we essentially blazing New… a new trail there.
*06:00*

**Dan Maser**: Right.
*07:01*

**Gus Schissler**: stuff where I would, nate, I know you have… Prior experience with, like, AI and ML stuff, but from, like, a… I don't know if you have any previous exposure to, like. Agent authentication, or… .
*07:03*

**Nathan Papes**: Yeah, well… Yeah, a little bit of experience with that, building, like, a RAG system. It's similar to, like, an MCP. What I was hearing is, like, they both said they would love to have, like, a single source of truth, because it's kind of coming in in different formats, and Julie mentioned, like, you know, I'm working on something for, like, a week, trying to get the requirements out of, like. the spec that they last sent me, but that spec is now out of date. So it's like… The requirements are just changing under the fee, so it's, like, something that can… Autonomously do this, or, like, at least give them, like, a good template. And then catch the drift before they're sinking too much time into something that's, like, gonna be useless. Alright, not… it's not the current, you know, state of what the developers have done. So, it's kind of like, you want some watchers on, like, code, or… I think it's gonna be multiple different kinds of, like, plugins you're gonna have to add to this kind of system that we have, based on what each team uses for, like, their outputs, and, like, their unit tests, or whatever. That's… that's kind of, like, what… where my brain was going with it, And then the output, ultimately, is, like. Does it end up in JAMA? For, like, a TMC to, like, then audit. Or, you know, have the final sign-off on. I don't know what I'm thinking right now, but I need to see some more… Like, having a laptop would help a lot.
*07:21*

**Dan Maser**: Yeah, I feel like if you go over to where I am, Gus, and yes, getting a laptop would be super helpful. I feel like what you're getting at is kind of twofold, too, where it's like… There's this, like… this is a 4x4, it doesn't really matter, but, like, there's this, like, a perfect example of, like, complete full autonomy. which, you know, like, we should be going for. That's also not how you spell autonomy, but fuck it. I feel like these yellow squares are, like… well, like, this is, like, current situation, right? Yeah, and it's not even like… yes, it is. This is an impact. But effort. But I feel like there's kind of two separate criterias where I see here, where it's like, this one, let's say, is like… And this is where impact versus effort kind of breaks down, but just work with me on this and we can reclassify it. But I was thinking of, like, okay, well, what if we can only hit certain… like, what if you still have to manually alter some, or manually access some? Like, it can't get everything, but it can get some? Like, how does that look? The other side I'm wondering about is, like. Do they have the ability to, and you guys can also shoot these down too, but, like. are we in a situation where, like, we can implement this fully, but, like, the CA team and the product team has to put these in a different type of software, or in a different access location? so that this can be done automatically. Like, I feel like these are kind of two partial boxes, where, like. like, I don't know if I'm making sense right now, but, like, that's where I'm wondering…
*09:09*

**Nathan Papes**: It does, yeah.
*10:42*

**Dan Maser**: is a full, like, because they're talking about a deliverable, like, a deliverable that's, like, one thing, but it's actually quite a lot of little bits, and I feel confident we can deliver some of the little bits, but what parts of the little bits are we gonna have to compromise on is, I feel like, what we're gonna have to be wondering about.
*10:43*

**Gus Schissler**: That'll be a question to answer. The… and it sounds like… They've… like, they've been trying, but the extent that they get to… Just using a single system. is, like, the most that they could get from everyone is the PRD thing.
*11:01*

**Dan Maser**: Yep.
*11:20*

**Gus Schissler**: Again, it's… all of the teams will keep on putting documentation to the same place that they've always put documentation.
*11:21*

**Dan Maser**: Right?
*11:28*

**Gus Schissler**: They're not gonna change that process… at all. It sounds like. Right. Why would they?
*11:29*

**Dan Maser**: Right. Unless… Right. Well, and that's why I did ask that question at the end, which is also, like, it sounds like… the right amount of incomplete information might actually even be helpful for Julia, in the sense of, like, you know, if someone in product's just being a pain in the ass and fucking up. And, like, we can show in our work that, like, hey, this is… this is not, like, this is not, like, delivery's issue. Like, take the TBD problem, right? Like, in some ways, if we're returning a bunch of TBD stuff, that actually isn't that bad, because it's just identifying that the actual system needs to change more. Or, I don't know if that makes sense, but yeah.
*11:36*

**Gus Schissler**: Yeah, I don't think they'll get… it doesn't sound like there's any TBDs coming down from the intake.
*12:18*

**Dan Maser**: That's true.
*12:24*

**Gus Schissler**: The… one of the things I'm thinking about is, like. How much is happening on this line? Which we'll… we'll figure out. Like, this is talking with Hannah, this is talking with Eric Castillo, I think is the…
*12:27*

**Dan Maser**: Yeah, I didn't realize what's name.
*12:47*

**Gus Schissler**: Cuz… Yeah, and to your point, Eric. So, as long as we can map out What are the actions that take place, or what are the actions that someone actually does as it makes its way into Java? Then we can prioritize, or, like, put impact versus effort for these actions.
*12:49*

**Dan Maser**: Yes.
*13:15*

**Gus Schissler**: To figure out what to… Take a whack at. Trying to automate.
*13:16*

**Dan Maser**: And this is the intake, correct, that you're talking about, source? So these are… these are… these are sources from the CA team and the product teams? Is that correct? Yeah.
*13:21*

**Gus Schissler**: And it sounds like Toyota, too.
*13:32*

**Dan Maser**: Yeah, yup.
*13:34*

**Gus Schissler**: the ideation.
*13:36*

**Dan Maser**: It does… I do… I am encouraged by the fact that it sounds like they already have, like, the PRD draft situation up and running, so they have some iteration of that currently out.
*13:41*

**Gus Schissler**: Yeah. Like, if they've been thinking about, here's the business logic, and here are the steps on this process. can figure out. It's, We can figure out systems-wise what we use, we can figure out which one's the first one to start with, we can… What I would love to do, because this is such a manual process, is there's probably one or… one or two, like, high-impact things that we can build.
*13:51*

**Dan Maser**: That just plug into their current process.
*14:17*

**Gus Schissler**: Instead of going through and trying to define or automate the whole thing from front to back.
*14:19*

**Nathan Papes**: now.
*14:25*

**Dan Maser**: Well, that's even, like, iteratively, that's what you do anyways, so, like, yeah, that makes just complete sense. Yeah.
*14:27*

**Gus Schissler**: This problem seems much… Easier than the problem, Andrea. As brought up.
*14:38*

**Dan Maser**: I feel like it feels like more of a people problem, and we just need to talk to the right people, and then it could become a pain-in-the-ass technical problem, but… we go from there.
*14:48*

**Nathan Papes**: I think that's what… that's our problem to deal with. The technical stuff. When we interviewed Andrea, when, yeah, we had that meeting. Sure, something about, like, shoot, they get, like, packages. Do you recall her saying that? And do you know what exactly that means? And is that something we can get, like… Some insight on, like, what is this package you would get that you then have to, like, sift through? To get the details and to build out the requirements.
*14:58*

**Dan Maser**: So, I think, and Gus, check me here. So, what she was describing was more that top, or that bottom-up process of, like, there's already software written, and I need to write requirements on that, and I believe, like, Julia said, like, that's not priority. So, instead. What's nice, like, we're talking about more the intake problems, so we are, instead of… having to do what Andrea was saying, which is, like, Andrea, which is, like, you know, having to, like, manually write requirements from code, we're kind of doing the opposite, where, like, it's more about, like, gathering all of the different types of requirements and turning it into one big requirement. Gus, I don't know, is that… Yeah.
*15:35*

**Gus Schissler**: Yep. That's… that's a good way to put it. All of these different documents or things that they're getting that will eventually be in a single.
*16:23*

**Nathan Papes**: Okay.
*16:32*

**Gus Schissler**: Well, links to them will be in a second.
*16:32*

**Dan Maser**: single document.
*16:34*

**Gus Schissler**: The content themselves will still be.
*16:35*

**Nathan Papes**: Hey there.
*16:37*

**Gus Schissler**: original formats. But all of these are different lenses with which to look at like, each feature. Like, automated lane changing, or automatic cruise control, or stuff like that. So… And you can't rely on just a single one to define everything. It has to be, like, this multifaceted. input. Thing, it sounds like.
*16:38*

**Dan Maser**: Does that make sense, Nate? So, I think we can… it might become our problem later, but it sounds like even architecturally, it's identifying where these different these different requi- like, we're dealing compl… like, we're not going from zero requirements to requirements. We're just going from, like, the requirements that all exist in different places making sure they're together, and making sure they're written out together, and making sure that, like, the changelog is correct with them, but we don't have to worry about creating requirements. If that… we might have to reformat the wording, but, like, we're not going from 0 to 1. In that sense, which I agree with you, Gus, that's a bigger pain in the ass to, like, figure out, like, how the hell do you do that?
*17:09*

**Nathan Papes**: Because that would be, like, going in the code and having to figure it out from…
*17:53*

**Dan Maser**: The code, or the… yeah.
*17:57*

**Nathan Papes**: Okay.
*18:01*

**Gus Schissler**: Cool.
*18:05*

**Dan Maser**: So I filmed… oh yeah, where'd you say?
*18:09*

**Gus Schissler**: No, I was just gonna say, I don't know what to do next, other than talk with Hannah.
*18:11*

**Dan Maser**: I was gonna say scheduling that would be helpful. The other thing that might… at least this is how my brain is, is like… we will do this with her, but I'm thinking, like, at least I have some free time, and I can document this, or we can do this together, but, like. any sort of TPID examples in, like… I think my brain's still a little hazy on, like, what the fuck is the difference between an SWRD and SBRD. Like, I get that one's functional and one is performance-created, but, like, trying to crystallize that in my mind…
*18:15*

**Gus Schissler**: I think would be helpful before we met with Hannah, so we can…
*18:45*

**Dan Maser**: like, cause I think we could probably figure that out. I think it has to do with, like… Yeah, like, I mean, you did a great job, Gus, of, like, re-centering us on, like, okay, so automated lane change, and I think, kind of going back to your dog, I know you had mailbox, but we'll… well, let's go back to Mailbox. It's like, one is like, don't hit the, like, don't hit a dog mailbox, and then another one is like, when you see an object that resembles a mailbox, make sure it is decelerating at this adjusted speed, and stuff like that. So I know, I feel like I need to just, like, brush up on that, and hopefully we don't have to spend as much time with Hannah, like, it's more confirming that with her, but we can spend more time actually going through the process.
*18:49*

**Nathan Papes**: Yeah.
*19:37*

**Dan Maser**: But I also feel like, along with that, I feel like we should probably meet up with Hannah as soon as possible, especially if tomorrow's a safety day. Like, I feel like Wednesday… Wednesday feels like a good day to meet with her. I don't know your thoughts, Gus?
*19:39*

**Gus Schissler**: Oh, no, I'm pretty open on… on Wednesday.
*19:55*

**Nathan Papes**: Yeah, me too.
*19:58*

**Dan Maser**: Also, obviously, Nate, like, I don't know how the architectural meeting will go today, and that might change your, like, what needed things as well, but…
*20:01*

**Nathan Papes**: Yum. Oh.
*20:12*

**Gus Schissler**: Dan, do you want to schedule the Hannah?
*20:17*

**Dan Maser**: Yeah, for sure. I'm wondering, do you think… I mean, Hannah's been mentioned a bunch of times, she just knows her shit, clearly. But there are also other systems engineers, and I 100% believe, like, we need to watch a few of these, because they're gonna have different processes, and it feels like so much of it is still, like, an art. So, should we schedule both Hannah and Nick, or wait after we… yeah.
*20:19*

**Gus Schissler**: Yeah, and then as you're… doing that, I think… Let me… I'll pop over to… Slack. And ask Julia.
*20:45*

**Dan Maser**: Where's this Nick?
*21:45*

**Gus Schissler**: This question sounds weird, but I was gonna say, we're looking to schedule some of that shadowing or observation time with Hannah and Nick. Should we send that a heads up ahead of time?
*21:46*

**Dan Maser**: Should we send Julia a heads up? Oh, or them?
*21:56*

**Gus Schissler**: Hannah and Nick.
*21:59*

**Dan Maser**: I think so.
*22:01*

**Nathan Papes**: Yeah.
*22:11*

**Gus Schissler**: I'll just tell her that, we'll send them a heads-up or introduction ahead of time so they know what to expect.
*22:16*

**Dan Maser**: Did you remember who the Nick was?
*22:25*

**Gus Schissler**: Costillo?
*22:28*

**Dan Maser**: We'll find him. I didn't have him mapped out. Okay.
*22:31*

**Gus Schissler**: Oh, Carcion, maybe?
*22:41*

**Dan Maser**: I can get… I can make time for both of them. And then I do think… we can… The other thing we need to do is probably just update Update… this, but then also the UI, the AI, just based on the new, the updated, Primary goal, if we will.
*22:50*

**Gus Schissler**: Yeah.
*23:15*

**Dan Maser**: You did a good job, like, very briefly, with the limited time you had going through, Going through, users. I think you also touched on a really good question, which feels very open to me, is like. that complex reasoning later, it feels like our product's gonna more so, like, put the things in front of them, and then they're gonna more so then do that. So, what I'm trying to get at is, I don't know how much of the output, like. while the output of their product definitely goes to Toyota, like, TMC, like, I don't know, at least the first few iterations, I think. It doesn't really matter, like, they have to do all the, like, actual planning and stuff afterwards, it feels like.
*23:21*

**Gus Schissler**: I think so. There's gotta be, like, a… I don't know too much about JAMA at this point, but…
*24:03*

**Dan Maser**: Hmm.
*24:11*

**Gus Schissler**: Some sort of… like, the… whatever thing that we build isn't gonna be writing directly to the in-flight JAMA projects that they have going on. Whatever you build probably needs some sort of, like, Something where it can surface. The things that it's… Depending on what portion we automate, but I don't know if it's an interface somewhere, or we plug into a different tool that they have. Or it's, like, a Wovey skill, or something. Right.
*24:11*

**Dan Maser**: And that's probably partially on us to figure out what's the most effective and what makes the most sense for this.
*24:49*

**Gus Schissler**: Yep.
*24:54*

**Dan Maser**: Also you're making me want pretzels. So, going back, I mean, I feel like… yeah, the big thing with Hannah, too, like, this chart that you started, which is hilariously just two, but, like, just like the JAMA assembly process flowchart, is I feel like that's the real big next thing that we need to just, like, discovery do.
*24:55*

**Gus Schissler**: Yeah. Because the thing that we build is in… in.
*25:17*

**Dan Maser**: Between these two months. Yup, and… Which I probably…
*25:20*

**Gus Schissler**: Told you last week, but…
*25:23*

**Dan Maser**: Right. Yeah. Yeah. We just didn't know what the hell any… anything else meant with it, so…
*25:24*

**Gus Schissler**: Right.
*25:29*

**Dan Maser**: Now we… I think we get it enough.
*25:30*

**Gus Schissler**: She did seem very energized.
*25:33*

**Dan Maser**: Yeah, she seemed to appreciate our work so far. She doesn't seem annoyed in the slightest at us, so…
*25:35*

**Gus Schissler**: I think we're also in here early enough in the process. like… Because there's still… it's not like they have this process that they've defined, and that they've been using, and it's just really heavy. It's like, they'll be defining the process as we're building out what the automated version of that process might look like.
*25:44*

**Dan Maser**: Yes, yes. You could argue that, like, we're probably interviewing Hannah at the perfect time, because she has a PRD template. Like, interviewing her 2 weeks ago would have been a little rough, because, yeah, I don't know. Alright, well, I can start organizing this shit, and… Yeah, I mean, I feel like… so I'll start organizing this. I will, also, by any means, anyone else can organize this stuff, too. It's a little sloppy, but, and I can book time for Hannah. I'll try and do Hannah first, if that's possible, and then Nick. Yeah, anything… anything else from you guys?
*26:01*

**Gus Schissler**: No, if you wanna, pair or need a sounding board on how… God, I hate using how might we's, but how might we define the JAMA assembly flow? Or structure that shadowing time? I won't… I do have some free time that I can… .
*26:45*

**Dan Maser**: Today or tomorrow, what would you prefer?
*27:05*

**Gus Schissler**: We could do…
*27:08*

**Dan Maser**: I do have a few things that I need to get done. Yeah.
*27:10*

**Gus Schissler**: For Plaint Moran. So, probably tomorrow?
*27:17*

**Dan Maser**: I was gonna say, I think I'd prefer tomorrow anyways, we could do it in person. I guess.
*27:21*

**Gus Schissler**: Sweet.
*27:26*

**Dan Maser**: That makes sense. The only thing that I forgot about is that, I, I have a… I have a friggin'… I have to get… I have to get a filling tomorrow at 3.30, so if we can do any of it beforehand, that'd be great. Sweet. Cool.
*27:27*

**Gus Schissler**: I mean, my entire afternoon's booked, so morning's the only time I got.
*27:43*

**Dan Maser**: Sounds good.
*27:47*

**Gus Schissler**: Okie dokie.
*27:48*

**Nathan Papes**: Is there anything we need to share today with the meeting with Andrea? Or, Julie? For the architecture meeting.
*27:49*

**Gus Schissler**: No, I think she's just going to be talking at us, so…
*27:58*

**Nathan Papes**: Yeah, okay. That's what I was… that's what I was assuming, but I didn't want… I just want to make sure.
*28:02*

**Dan Maser**: No, I think the only thing with that is, like, we should have this open, because who knows, there might be random things that are relevant, and yeah, but yeah.
*28:06*

**Nathan Papes**: Okay. Cool.
*28:14*

**Dan Maser**: My… my assumption with that now is making more sense, because I think what they want more visualizations… well, actually, I don't know anymore, because they're… theoretically, it's all in the PRD, so what would they be wanting the architecture now for? Gus, what's your thought on that?
*28:16*

**Gus Schissler**: She… she mentioned that in the meeting. It's the purple all the way at the bottom. So the software component architecture diagram. Is the thing that's not… That doesn't exist.
*28:30*

**Nathan Papes**: Hmm, right now.
*28:41*

**Gus Schissler**: now, I think.
*28:42*

**Dan Maser**: Gotcha.
*28:43*

**Gus Schissler**: They have… they have the SYAD and the SWAD, like the higher-level architecture diagrams, but they don't have the component-level architecture diagram.
*28:44*

**Dan Maser**: Gotcha.
*28:54*

**Gus Schissler**: Cool. That is… probably where… that's not probably. She said this is where your work will most likely be, Nate.
*28:55*

**Nathan Papes**: God.
*29:05*

**Dan Maser**: Cool.
*29:07*

**Nathan Papes**: Good to know.
*29:08*

**Dan Maser**: Alright, well, I will get some calendar time… And, yeah, I'll talk to you guys later.
*29:09*

**Gus Schissler**: Sweet.
*29:16*

**Dan Maser**: See you.
*29:16*

**Nathan Papes**: Yep. Bye.
*29:18*

