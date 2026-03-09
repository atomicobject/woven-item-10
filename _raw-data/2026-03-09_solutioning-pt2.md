**Dan Maser**: You know, you're like, okay, buddy.
*00:00*

**Gus Schissler**: Yeah.
*00:03*

**Nathan Papes**: Wow, this is something cool?
*00:05*

**Dan Maser**: Yeah, let's see…
*00:06*

**Gus Schissler**: This is the script that… I've seen this script before, it's super fucking cool.
*00:07*

**Dan Maser**: Hey, listen.
*00:12*

**Nathan Papes**: No, this is… I mean, this is beyond, like, I don't know what other people are doing, but I was like, I'm solving my problem with, like, punching, because, like, Danielle kept messaging me. So, like, it's just a command line tool, so, like, for today, stub it. The point is, like, stub out the commits, so I have it just, like, hard-coded to a project, to a story, so what I could do, like, punch up for today, I can do this, and I can say commit. And this will literally make the punches for today. And it fills in the gaps of time. So then I go in to punch it, and then I just fix, or add notes, to make sure it's, like, we're billing it to the correct client.
*00:13*

**Gus Schissler**: Mmm.
*00:48*

**Nathan Papes**: Yadda yadda yadda. Let's see here… just to show you that, that it did indeed work. Yep, so there you go.
*00:48*

**Dan Maser**: Wow, nice.
*00:55*

**Nathan Papes**: So the point is, yeah, because it was super annoying when you're on multiple projects, and I was like, I just need to, like, need… I want the stub, like, because my workday is 9 to 5, like, so just fill in the gaps of time, definitely consecutive chunks, and it's a… it's a drop-dead simple, like, script.
*00:57*

**Gus Schissler**: I'd love it if I could just work 9-5.
*01:15*

**Nathan Papes**: Yeah, it's… yeah, so that's… that's what I've been using. I have no idea what Brian has, I just… Just did, like, the simple thing, and then, like, you could pass in dates, so, like, it's like, tomorrow, you'd have, like, 26, 03, what is it, 10? So you can kind of see what the day looks like for tomorrow.
*01:19*

**Gus Schissler**: Nope.
*01:42*

**Nathan Papes**: Not 26.
*01:43*

**Gus Schissler**: This is like joining your Google Calendar, right?
*01:43*

**Nathan Papes**: Yeah, yeah, yeah, yeah. So it has to… you have to authenticate with… that's the hardest part, is just authenticating to… atomic objects… Google, like, OAuth thing, because it deals with, like, refresh tokens and all that crap, but this script handles it, and if you'd want… if you'd be interested in it, I can just, like, throw you what I use, and then… I don't know. It's…
*01:46*

**Gus Schissler**: Bar too much chaos.
*02:09*

**Nathan Papes**: Yeah.
*02:11*

**Gus Schissler**: calendar, and what I'm doing.
*02:11*

**Nathan Papes**: Yeah, but that's… that's how I've been dealing with punches and staying sane, and not having to think too much about it.
*02:13*

**Gus Schissler**: Cool.
*02:20*

**Dan Maser**: No, yeah, as to… I have Slack on both mine, I just… I need to mute the other… Like, I just don't… like, these other channels, I don't know. I… it's just so easy to miss. the other… because everything… I feel like there's so many notifications in the Toyota one.
*02:24*

**Gus Schissler**: Oh, I mean… You have… I just, like, mute everything except for app mentions and channels that I care about.
*02:43*

**Dan Maser**: Yo.
*02:52*

**Gus Schissler**: So, yeah. I don't know. Try that.
*02:54*

**Dan Maser**: Yep, that's exactly what I'm doing now. I, I, I had it mentioned, but, yeah.
*02:58*

**Nathan Papes**: Conventions are… those are useful. I mean, I have those on, but… Might be more noise for you than it is for me.
*03:05*

**Gus Schissler**: Anywho, we've got 45-ish minutes or so. Yup. I wanted to talk about what we wanted to show on Wednesday. So and maybe I'll talk about this very, very briefly, because it doesn't need to be a whole thing. Dan, I was… I started going cross-eyed at how chaotic having Alloy in the knowledge base was. Yeah. So, Friday afternoon and a little bit this weekend, I just… I started fresh with the same rock data that we've had before.
*03:15*

**Dan Maser**: So, like, all the transcripts.
*03:59*

**Gus Schissler**: And then, instead of having… a… a folder with 300 to 600 independent Markdown files.
*04:01*

**Dan Maser**: energy.
*04:13*

**Gus Schissler**: assertion, I just had it, like, bundle assertions based on.
*04:14*

**Dan Maser**: Oh, nice.
*04:16*

**Gus Schissler**: Each meeting. So the workflow that happens is, and these are kind of out of order, but you add a transcript, the system generates a summary.
*04:18*

**Dan Maser**: Nice.
*04:29*

**Gus Schissler**: With, like, timestamps and things, and then it extracts… Assertions from that summary.
*04:30*

**Dan Maser**: Okay.
*04:37*

**Gus Schissler**: Interview. Then… I've got… I was doing this on BitConnect, which is why I have some of these templates baked out already, but… Sweet. That's how I got the…
*04:37*

**Dan Maser**: PRD for our requirements gathering, which is, like, item 10.
*04:52*

**Gus Schissler**: Together. Yep. Which I… I think… and it does all of the backlinking, essentially.
*04:56*

**Dan Maser**: play.
*05:01*

**Gus Schissler**: So… if you were reading anything in this, and you had a question about, like, oh, where did that come from, or… I think that's actually slightly incorrect. You just ask Claude. co-work, like, where did this come from? And it can backtrace to the original transcript.
*05:02*

**Dan Maser**: Time.
*05:16*

**Gus Schissler**: Very easily.
*05:17*

**Nathan Papes**: Can you show an example of that really quick, if it's not gonna derail your stream of thoughts right now?
*05:18*

**Gus Schissler**: Show you what it looks like if I do that.
*05:23*

**Nathan Papes**: Yeah, because, like, I'm doing the same, like, I'm in the codebase, and I'm like, okay, where do I… how should I prompt, like, this thing to get, like, information I need? Because I was trying to find, like, okay, who are those two developers I need to schedule time with? Like, what are their names? It's like, I knew, like, the first names, and then I knew there was a change at one point in time. So, yeah. I noticed there was, like, a users or people section that kind of described people and the roles, and who we've interviewed, and who is yet to be interviewed, and I was like, okay, I should probably add on to that table of… Like, the upcoming meetings on the schedule.
*05:25*

**Dan Maser**: You're an Opus, by the way, if you want it or not.
*06:01*

**Gus Schissler**: I do. The BRD doesn't specifically say who Nate needs to reach.
*06:04*

**Nathan Papes**: See, this would be cool if this spits out the two names that I have in mind. Hash and Brian.
*06:10*

**Gus Schissler**: Dang. regenerate… Not requirements. Automatically generate architecture diagram.
*06:17*

**Dan Maser**: Oh, Uday just got back to us, by the way.
*06:34*

**Gus Schissler**: That was sweet.
*06:36*

**Dan Maser**: Pass this on to somewhere else.
*06:39*

**Gus Schissler**: Oh, cool. As expected. We'll see what it says. And then while that's working, over here on this side, I just had to generate, like, a visual Hannah journey. Yeah. I don't know if this is helpful.
*06:41*

**Dan Maser**: I… I'm similar, I prefer… I really like having it put up, like, HTML, like, that's… it just is easier for me to read than just, like, markdown files, so I'm kind of with you.
*07:06*

**Nathan Papes**: Especially if you're doing, like, a presentation or something, like, we're talking, like, when I show this in front of, like, Julia, like, you would want something like this.
*07:19*

**Gus Schissler**: Hmm.
*07:25*

**Nathan Papes**: Right? You don't wanna just…
*07:26*

**Gus Schissler**: And each one of these is just, like, a slide, or something like that.
*07:27*

**Nathan Papes**: Holy shit, this thing's worked! Fuck.
*07:31*

**Dan Maser**: Oh, man. Yeah.
*07:34*

**Nathan Papes**: Alright, that's good.
*07:34*

**Gus Schissler**: part of the Tech Guild team.
*07:35*

**Dan Maser**: Yeah.
*07:37*

**Nathan Papes**: It's good stuff.
*07:38*

**Gus Schissler**: So road is… Julie recommend him as a replacement for Eric? She doesn't have an.
*07:39*

**Nathan Papes**: Nope.
*07:47*

**Gus Schissler**: do with this anymore.
*07:48*

**Nathan Papes**: Yup, yep.
*07:49*

**Gus Schissler**: Eric… It was originally on the list, he had an older diagram, and explicitly removed him. Yeah, so… Brian and Mahesh.
*07:50*

**Nathan Papes**: Okay. That aligns with… what Dan and I had.
*08:01*

**Gus Schissler**: How's up?
*08:06*

**Nathan Papes**: Okay, alright, that's fantastic. Okay. Wow. That's crazy.
*08:08*

**Gus Schissler**: So everything's kind of, like, web-connected, I guess. Yeah. Anyway, so… I'm curious, from your folks' perspective. Getting back on track for what we wanted to talk about today. We've got an hour… an hour with Julie?
*08:13*

**Dan Maser**: I'm flexible, but yeah. You… I think you have a… you have a hard stop, I believe.
*08:34*

**Gus Schissler**: Oh, at, 1, right? Because it's 12.30 and 1.30? I think.
*08:41*

**Dan Maser**: You have a hard stop at 3?
*08:47*

**Gus Schissler**: Are you talking about today, or are we talking about the Julius Inc. on Wednesday?
*08:53*

**Dan Maser**: I'm sorry, okay, I… yep, I was talking about today. You have a hard stop at 2.30, but yeah, you're talking about for our meeting on Wednesday. Yes. Yes. My apologies. It is at 12.30.
*08:56*

**Gus Schissler**: 8 to 1038.
*09:06*

**Dan Maser**: For one.
*09:08*

**Gus Schissler**: minutes.
*09:09*

**Dan Maser**: So…
*09:10*

**Gus Schissler**: Flow into the stand-up, right?
*09:11*

**Dan Maser**: Yes. Okay. She… yeah.
*09:14*

**Gus Schissler**: Cool, cool. Mmm… So, the… I guess… the big question is, what would we like to show? Like, we've got a lot of data. I know last week we generated a mermaid diagram user journey, we've got that HTML thing that I just spun up in, like, 2 minutes. Right. But I wanted to, like, zoom out a little bit and think about… Where we are in this… Like, in the contract, and what we wanna… where we think Julia is.
*09:18*

**Dan Maser**: Right.
*09:56*

**Gus Schissler**: And what, if anything, we need to, like… Confirm before moving forward. So maybe the best way to do this is in… Big jam.
*09:56*

**Dan Maser**: Yeah, I'm looking at that solution soap screen. I'm… So, I'd love your thoughts on this, Gus. To me, I feel like… oh, sorry, what were you saying?
*10:08*

**Gus Schissler**: Nothing. I thought you said solution soap, and I'm like, what is that?
*10:18*

**Dan Maser**: I feel like… where we left it, and this is where I feel like it's also gonna be painful, and we can see based on how far we get, but I just feel like… In an ideal world, we can present A solution scope with a bit more technical feasibility defined. Because I think where we're at right now, we validated everything, and there's quite a lot of, like, well, no shit, this makes sense. Like, yes, like, this is what we asked you to do, but how would this actually fucking work in my ecosystem, for lack of a better word?
*10:23*

**Nathan Papes**: Yep. That happens. Kind of in my court, I feel like, or a lot of it is.
*11:04*

**Dan Maser**: Well, you have the architecture, for sure, but I think it's kind of all of our courts, in the sense that, like… like, today I spent a little bit of time, Gus, just, like, looking through the drama of, like… because it still seems like I don't understand where they're throwing any of that stuff in the automation folder, because, like, I was noticing in the Hannah interview, she was kind of zooming all over the place. And I was like, I don't know how that's organized. So, it's like, to your point of, like, can we reach the BevDocuments repo to manually get that? Do, like, yeah. Am I answering your question here?
*11:09*

**Gus Schissler**: I… I think so. Like, it's the… We have… I think we only have, like, two things that… We know for certain. And that's that… We need to… Chair… translate the requirements from somewhere into Java.
*11:43*

**Dan Maser**: Yes.
*12:06*

**Gus Schissler**: how we do that is completely up in the air. What I was thinking is… Like, there's definitely, like… I could imagine, if I was going to… like, spend an hour or two vibe coding something that we could do right now. It would be… And this is… I'm not setting this in stone, I'm just like…
*12:08*

**Dan Maser**: Damn.
*12:34*

**Gus Schissler**: build… Front end… The front end would have a place to… place to drop… A link. to… Documentation site. SWRD… it would grab… Grab the content. And then… Display it to the user. And then, in my mind, There are a couple different steps here. So this is just the raw.
*12:35*

**Dan Maser**: Sorry, when you say… I'm not trying to interrupt, it, like, this is… this is… this is automated, right? It grabs the content, right? Or… Yes. Okay, yeah, yeah. Just double checking.
*13:18*

**Gus Schissler**: So, and then there's, like, this new requirement page, where there's one column that's raw data, one column that's, like… English… Translation… And then another column that's… like, SWQT draft. Where we're, like, all on the same page, given a certain input.
*13:28*

**Dan Maser**: Right. Like, show me the things in their different versions.
*14:00*

**Gus Schissler**: Let me just… How's this for a… a wireframe.
*14:04*

**Dan Maser**: Oh, I love… I love just random wireframes.
*14:18*

**Gus Schissler**: And what… what's actually happening on the backend is, maybe we have a… there's, like, in this visual flow, there's, like, a prompt.
*14:21*

**Dan Maser**: Right.
*14:37*

**Gus Schissler**: Another prompt that moves the… Prompt for plane. Language to test case… And this is prompt for raw data. to plain… Language… And then… there's probably a button or something. That's, like, send to Jonah. For each of these. And the entry point is either… Like, we can build out… This flow that goes into the raw data? Or we just have them copy and paste the raw data. Into, like, an open text field in this area. Like, that would be…
*14:38*

**Dan Maser**: Like, if we can't… yeah. I mean, this is where… I don't want to backtrack too much, because I really like what you're saying. I think what's… what I'm not even struggling with, because it's like… to make it even more, like, if you look below, and you can be like, yeah, no shit, Dan, but this isn't possible. But it's like, I would even argue, like, if we didn't have a front end, and it would just drop things into JAMA, like, and… like, I don't think that's possible, but…
*15:42*

**Gus Schissler**: Like, in some ways.
*16:08*

**Dan Maser**: I think that's what they want, is just, like, things automatically being added to JAMA, and if it was just able to automatically go there. And then… Now, granted, I think you might want that interface, because you might want it to create the test cases, But I think what you're getting at… so I might be shooting that down, like, do we want it to just magically portal to JAMA? Probably not. We probably want some initiation.
*16:10*

**Gus Schissler**: Yeah, I… well, and that's… that's, like, an assumption that we're making, is, like, the… having a button generate something in Java versus having the thing in Java automatically generate is… It forces them to think about the question of, like, how much of a human in the loop do they want?
*16:39*

**Dan Maser**: Right. And the fact… yeah, keep going.
*17:02*

**Gus Schissler**: So the… and that's where, like, if each of these is just, like, a… like, a WYSIWYG markdown, or just, like, plain markdown text field, and it's…
*17:07*

**Dan Maser**: Hmm.
*17:17*

**Gus Schissler**: there's, like, a user flow for generating each thing very easily, and we would… I would just hook up my Cloud API key to run it. Of, like, we… this… I could imagine building this really, really easily.
*17:18*

**Dan Maser**: Right. I don't know…
*17:31*

**Gus Schissler**: Like, what the… like, if we can even get access… API access to JANA.
*17:33*

**Dan Maser**: That's… yeah, that's where I feel like… that's what I was trying to get at, is, like, it's almost like we should figure, like, what is the most automated we want, and then, like, we're probably going to have to scale it back for every level of automation that we don't have the access to, at least for the MPD. So, like, take your… like, I like how you dropped the, like. place to drop… because in an ideal world, it… I'll add one more, where it's like, it could just be, like, fetch new, right? That's probably not gonna happen, because we may not have the access. So it's like, what level of, like. when you have to… like, how often do we have to copy and paste something? Like, well, even, like, can you copy and paste a link, or do you have to copy and paste the text one time, and then it can do everything from that? So I think…
*17:40*

**Gus Schissler**: What I'm trying to get at is, like.
*18:26*

**Dan Maser**: I don't want to do too much work, but it does feel like, what level of user flow do we need, and then what, like, extra levels do we need to build out as we basically have roadblocks?
*18:27*

**Gus Schissler**: Yeah, yeah, yeah, yeah, I agree. And this is… this is the cool thing that we can get with, like, rapid prototyping and vibe coding, is, like.
*18:38*

**Nathan Papes**: Yeah.
*18:45*

**Gus Schissler**: this… I could… Claude might even be able to one-shot this at this point. This is not a… it's a single-page app. That maybe there's, like, a settings modal where you can input your… Java API key, or Google Docs. Yeah. or whatnot. But the idea being, like, if we… This thing is exemplifying all of the questions that we have, which is, like, how early in the flow can we plug into things? And how far down the line can we plug into things with the outputs? Because we just don't have answers to those things right now, but we do have… Hannah and Nick saying that this step.
*18:46*

**Dan Maser**: Like…
*19:32*

**Gus Schissler**: Going from the raw to the English translation that's going into JAMA to the software qualification test is, like, the time-consuming part.
*19:33*

**Dan Maser**: And that's where what I was trying to… and sorry, I kept almost cutting you off. I feel like… the more we… the more of those questions, like, I think… the more of those prototypes that we, like… I think the less idealized version that we can present on Wednesday, probably the better, just to show the, like, the amount of, like, work we've… and then we can, in my… an ideal world, we can kind of show two or three, like, based on this level of access, this is what this can look like, better… like, I don't know, like… I just feel like, as we see the roadblocks, then it'll get more clear, like, what level… but we could say, like, look, right now, this doesn't have access, but, like, if you can get this access, this is what this could look like now, or something like that. Because to your point. I really think this is all about access now. Like, this is not a difficult thing. We know the functionality, we know what it needs to do, we know that the AI can do that quite easily. It's really just about access. In terms of how much we can actually automate versus how many steps that they need. And I do think that I kind of unintentionally brought up the big question of, like, what is too much automation, right? So it does seem like this is too much automation, where they would just pop up there. We're also not going to be able to deliver on that, but, I think that's probably a good research plan, or that's probably a good tell of them of, like. for example, it sounds like they don't need, like, they don't want everything to turn into SQT… SWQT drafts. So, like, that's another level of, like. like, even if it could automatically make SWQT drafts, which I feel a little bit… like, I think it could easily make SWQT drafts, even if it couldn't put them in JAMA, But we still might, like, not want to totally automate that, because it sounds like Julia doesn't always want those to be created, just to be created. So, I don't know. Yeah.
*19:43*

**Gus Schissler**: So what maybe the… What we're explaining here… I'll share my screen. Folks don't have to… do anything. So, what we're… what we're essentially talking about is… and this is, like, our solution flow. Like, we've talked about this before, but… What we're wondering is about, like, how much of… This stuff is automated. So, when this comes out, is it, This doesn't have to be super formal.
*21:40*

**Dan Maser**: It's okay, yeah, do any shape, we can… yeah, doesn't matter. I think… Diamond's a question, but it doesn't. You're good. Yup, I see what you're doing, and I like it already.
*22:22*

**Gus Schissler**: So the question here is, like, if we have… access to JAMA, like, obviously we can just use the API. Or if we don't, then this is the endpoint. Do we have a requirement fetcher? Like, can we integrate directly either with their, like, the documentation layer, or with the GitHub, or is it just directly… Paste… original requirement.
*22:44*

**Nathan Papes**: Maybe pa- yeah, like, I think you'd want to start with pasting them.
*23:15*

**Gus Schissler**: Yeah, and that's why… We could build this whole thing just, like, ignoring all of the other bits, and just saying, like, as long as we have the original requirement, we can work through these other…
*23:19*

**Nathan Papes**: Right.
*23:33*

**Dan Maser**: Because it's really what we're saying… oh, sorry, keep on.
*23:35*

**Gus Schissler**: I was gonna say, and then… because this is just for a single requirement, Then this is, like… like, further upstream, we could just say, okay, give the tool the Google Doc link.
*23:38*

**Dan Maser**: Hmm.
*23:52*

**Gus Schissler**: the PRD. That contains the list of requirements. Now, like, getting the things in bulk. This is, like, a single requirement.
*23:54*

**Dan Maser**: Yo.
*24:09*

**Gus Schissler**: In English… Cool. So, yeah. And then, I mean, I don't know what could possibly be up. field from PRD, Fetcher.
*24:14*

**Dan Maser**: I mean, that to me feels like both something that very well could happen, and also feels very out of scope for right now, but I like kind of where you're painting, like, I like how you're painting this of, like. there's… Based on the level of access, we have various levels of autonomy, and we can say what we prefer, like. we can say what, you know, we'd prefer, but based on the current level of access, this is what we can actually give. And for the MVP slice, there might be way more manual aspects than hopefully you guys can, you know, as you get more access to things. Can further build it out to. Is this… is this top line what they're doing currently, or…
*24:31*

**Gus Schissler**: This is, like, our solution flow. These circle points, or these oblong thingies, are, like, entry points. That would require… okay, if the user…
*25:17*

**Dan Maser**: I see.
*25:34*

**Gus Schissler**: What is the user inputting?
*25:34*

**Dan Maser**: Yup.
*25:37*

**Gus Schissler**: is user inputting.
*25:37*

**Dan Maser**: And it's basically what it's saying is that if we can get access to it, then they don't need to do those.
*25:40*

**Gus Schissler**: So, for instance.
*25:45*

**Dan Maser**: I'm just spreading these out more so you have more space to… Oh, yeah.
*25:48*

**Gus Schissler**: Like, I think… I asked… I… the open questions in the PRD, I gave to Wovi, and Wovei was able to answer…
*25:50*

**Dan Maser**: Nice!
*25:59*

**Gus Schissler**: Like, none of them?
*25:59*

**Dan Maser**: Oh. Nevermind. Okay.
*26:01*

**Gus Schissler**: But it was able to reference, like, Google Docs and stuff, so if… Part of me wonders if there's, like, like, a way that we could leverage Wovey. But I don't know where… so, like, Wovey's… a chatbot that's not an agent. Like, I can't… Based on an output that it has, it can't feed that output into another tool. But there is a process by which it has… I don't know, access to things. But if we could roll our own agent that can go into a Google Doc.
*26:04*

**Dan Maser**: Right.
*26:45*

**Gus Schissler**: Gather a list of links. And then feed that list of links into this, like, requirement fetcher. Yup. What is this, direct, blank, get access?
*26:46*

**Dan Maser**: Yeah, I'm realizing it's not that… I was saying, like, for example, if we… I don't know how to best, like, in an ideal world. Yeah, maybe I'm not drawing this up right. Like, I'm trying to show, like, why we'd want direct Git access, because if we had direct Git access, then we would know what we could put directly… if you need direct Git access and direct JAMA API access, and then it could pull from the Git The requirements and put them directly into the JAMA later.
*27:00*

**Gus Schissler**: Yeah, so that's what you're describing as a blocker that prevents the input from connecting to our tooling.
*27:35*

**Dan Maser**: Yes, yup. So would that go here? Like, versus, like.
*27:41*

**Gus Schissler**: Beta red sticky up top, that.
*27:45*

**Dan Maser**: Okay, I see, okay.
*27:47*

**Gus Schissler**: I think that would prevent us pasting a link to a requirement, either.
*27:49*

**Dan Maser**: I guess.
*27:52*

**Gus Schissler**: the documentation is, like, the access to it. Yeah. The thing that would prevent .
*27:52*

**Dan Maser**: I see what you're… I see what it's now. Okay, that makes sense, keep going.
*27:58*

**Gus Schissler**: GUI generate in Java. Automatically post to JAMA.
*28:01*

**Dan Maser**: Yeah, I agree.
*28:09*

**Gus Schissler**: require, like, JAMA API access? The, blocker for paste link to Google Doc is… Google Drive access…
*28:10*

**Dan Maser**: And it might… I'm just thinking about, like, large company here, we might want to specify this. I mean, it doesn't really matter for Julia, but yeah.
*28:26*

**Gus Schissler**: I'm thinking, like, yeah, we should show her these things, because it's… each… like, the answers to each of these things…
*28:34*

**Dan Maser**: For our solution, just determines, like, where we can start. Yep.
*28:42*

**Gus Schissler**: Because we know for sure that we can start and directly paste the original requirement into what.
*28:45*

**Nathan Papes**: Nope.
*28:50*

**Gus Schissler**: Bill.
*28:51*

**Dan Maser**: Yo.
*28:52*

**Gus Schissler**: We know…
*28:54*

**Dan Maser**: Say that last… say that last bit again? We know what?
*28:55*

**Gus Schissler**: We know for sure that Hannah, user, Hannah, Nick. Anyone can copy and directly paste into our tool.
*28:58*

**Dan Maser**: Yes.
*29:08*

**Gus Schissler**: It's something they already do, we're not asking them to replace that. So…
*29:09*

**Dan Maser**: I'm gonna make this green, and then I'm gonna remove these greens.
*29:13*

**Gus Schissler**: Okay. But the… this kind of, like, swim lane diagram that we're building is… like, the… Inputs and outputs.
*29:17*

**Dan Maser**: Yep.
*29:27*

**Gus Schissler**: From our tooling layer, essentially? I've never done this before. If you guys have suggestions, let me know, but I'm just.
*29:28*

**Dan Maser**: No, this is…
*29:37*

**Gus Schissler**: fly.
*29:38*

**Dan Maser**: It's… no, this is really good, because this is such a great example of it's such a small process, but depending on what we have access… it's… I don't want to beat a dead horse, but it's all about access, and this is showing what our options are based on the access, so I really like this.
*29:39*

**Gus Schissler**: And I like you highlighting, like, what the happy path is. With a potential blocker versus the… It's not an unhappy path, it's just, like, a manual path.
*29:59*

**Dan Maser**: Yeah. It's just not ideal.
*30:10*

**Nathan Papes**: I do like that at Swimlane, like, where it's like, you paste it in manually, then we can all… we can just start writing software that can then translate, validate into, like, the structure that, JAMA would then actually accept. And that would show progress, right? And then, like, maybe it can't actually put it in JAMA, but it's like, okay, but we're figuring out how, like, it would do that. Then you just add on the services and the layers that need to happen, like, where validation needs to happen.
*30:15*

**Dan Maser**: The other… the other thing… sorry, I didn't… keep going, Nate.
*30:48*

**Nathan Papes**: No, no, I was just kind of just, like, it's like validation, formatting, this… you're just massaging the data you get from point A to point B. It's like, that's kind of the crux of, like, the MVP, I feel like. And then… you want to add in, like, the conveniences, where you have, like, these automatic, like, get workflows.
*30:51*

**Gus Schissler**: Yep.
*31:09*

**Nathan Papes**: But you kind of have to… to get there, you have to prove out, like, you have to do, like, each manual process, kind of code it out in this, like… Like, okay, like, that's one step of it, and now let's… we have to validate that that's true and correct, we didn't build something that's wrong, and then you just keep adding the automated stuff. So, yeah, it's… you kind of have to… yeah. And then, like, working backwards to, like, the more conveniences, I think is a… a wise way to approach it, without being… saying, like, oh, we're… we're dead roadblocked on something here, because we do know, like, there's… docs, we can paste that information to a doc, and then we can figure out, you know, what's important to the JAMA, like… So then we can then, maybe in the future, post to it automatically.
*31:11*

**Dan Maser**: Yeah.
*31:58*

**Gus Schissler**: I mean, I was just wondering if we can tell him to get Claude Co-work and…
*31:59*

**Dan Maser**: Yeah. Yeah, the one thing I was calling out with the test generation as I was starting… well, actually, this is also for requirements, fuck. As I've been, like… JAMA… we'll get some logic to it, but the actual… like, file system seems like a mess, so, like, I could see a situation where we have, like, we can throw it into JAMA, but, like, we just create an automated folder or something, and they have to go in and move it manually. That's not ideal. But, yeah, feel free to reorganize that as you will. But it's, like, Yeah, it…
*32:02*

**Gus Schissler**: You deselect it, so…
*32:37*

**Dan Maser**: Oh, yeah, my bad. This is the same… whatever you… however you want to leave it, it's the same as… it would be the same for the requirements generator.
*32:39*

**Gus Schissler**: Yep.
*32:47*

**Dan Maser**: Yup, there you go.
*32:50*

**Gus Schissler**: And it's just branching logic.
*32:52*

**Dan Maser**: Oh, sweet, yep, yep, I see you.
*32:54*

**Gus Schissler**: So we're gonna copy this…
*32:57*

**Dan Maser**: To your point, though, I think, like, honestly, a logic tree like this, and then, like, showing, like… Showing, and we can talk we should spend the next little bit of, like, okay, how can we poke around for more access, like, thoughts, but I do think, like, vibe coding, like, basic front-end is… would be powerful as well. I don't think… I don't think we need to show, like, oh, this is a working prototype, because this is such an easy solution of, like, well, no shit, like, yeah, it's gonna be… like, I don't think we need to show them, like. I don't know. Maybe that's my hot take, maybe they would be impressed, but.
*33:04*

**Gus Schissler**: I think it'd be… depending on, what I get up to tonight, which I think is not a lot, because Nick and I are having Dinner. Beef bourignol. That we're making, which requires a lot of downtime.
*33:41*

**Dan Maser**: Nice.
*33:56*

**Gus Schissler**: like… This is the stuff that I geek out about, around Viking. I could get to feel like a hackercat. But… the… I think the important thing that we're doing right now as a group is talking about, like, what are these, like.
*33:58*

**Dan Maser**: -
*34:10*

**Gus Schissler**: Tree diagram knowledge gates things.
*34:12*

**Dan Maser**: Right.
*34:15*

**Gus Schissler**: The thing is, like, and we can say this to Julie, like. Do you want us to build this? Yeah. We could show her. this is, like, a really tiny slice. Is that valuable? Because it…
*34:15*

**Dan Maser**: Yeah.
*34:33*

**Gus Schissler**: removes one manual… two manual steps, where Hannah is copying the content, pasting it into Wovei, and then copying the Wovi response, and then pasting.
*34:34*

**Dan Maser**: it into.
*34:44*

**Gus Schissler**: JAMA. This is just removing one copy and paste.
*34:44*

**Nathan Papes**: Yeah. That'll start somewhere.
*34:51*

**Dan Maser**: I think just the fact, though, that… I don't think it's realistic for right now, but I just think the fact that we're showing the batch as, like, listen, if you follow through with this, there's no reason why you can't do a batch generator where every time a PDF is released, it can scrape all… fuck, I don't know, 100 of those.
*34:53*

**Gus Schissler**: And…
*35:14*

**Dan Maser**: Then, like, even if you have to go manually, like, it'll scrape 100, and then it will, like, you have to, like… even with some manu… if it's doing 100 batch automatically for all those steps, that's such a massive win for them.
*35:15*

**Gus Schissler**: Yeah. The thing that… So this is, like… This is very, very one-dimensional, so it's one… one way. Like, all the data is going one way.
*35:32*

**Dan Maser**: -
*35:48*

**Gus Schissler**: There's… it gets much more complex. When our tooling then has a… A requirements monitor?
*35:48*

**Dan Maser**: Like, you mean, like, if… if it gets changed?
*36:04*

**Gus Schissler**: So…
*36:08*

**Nathan Papes**: like.
*36:08*

**Gus Schissler**: What we would need is some record. Of, like, the original requirement. So maybe it's the requirements fetcher. This is another piece of tooling. Yeah, here, let me just… yeah.
*36:09*

**Dan Maser**: We're on the same thought, yeah.
*36:27*

**Gus Schissler**: M. So the requirements monitor… would… If it was changed, Go to probably some sort of, like, user interface. Which would then allow you to… Go back into the main flow. I think this makes sense, but it's like, we can either…
*36:28*

**Dan Maser**: Well, there's… yeah.
*36:58*

**Gus Schissler**: I don't know if this is, like, directly where we're comparing. via API, what's in Java, to what our requirements fetcher is showing us, or… If we're, like, keeping a log. And comparing in our database, if our app has a database, with the requirements as received from The requirements fetcher piece. Thing.
*36:59*

**Dan Maser**: Yeah, the only thing that I would say, I don't… I'm not disagreeing with any of it, but I will say, like, because it's also on the item 10, like, the requirements monitor might just be able to say what's changed, and even if it can only say what's changed, that's still, A, a massive ad, because then it's just telling them what's… well… Okay, there's actually two parts to the requirements monitor, because there's, like, a… There's, like, does it run automatically, or do you have to queue it? But even, like, I'm gonna go the most, like, the simplest, even if you have to manually run it, if it can scrape all of those and tell you which of the 50 have changed, and it can't even do anything, that's still a massive win for them, because right now they have to manually check all 50 or X amount. So while I 100% agree, like, in an ideal world, it would then update automatically. that does massively complicate things, because then you have to have edit of all of that things. So I was just saying, like, even if it's the… even if the monitoring is just, like, you just have to do it, and there'll be, like, 5 of these changed, and that's it, I still think that's a huge win.
*37:26*

**Nathan Papes**: Yeah, yeah, I would say, like, lean into read-only for as long as possible, until we can validate all these things. Like, a change happened, because, like, they're gonna have feedback on, like, okay, cool, I can see what this is doing now, I would, like… we've represented in this way in the UI? Like, there's, like, little incremental changes you can do to that. And then when you get to the right portion, I mean, that's essentially further down the line, And that's when you want to be talking about, like, JAMA API access, because the worst case scenario is, like, we just put, like, say, 100 batch items in JAMA, and, like, they're shit. How do you clean up that mess?
*38:35*

**Gus Schissler**: Right, yeah.
*39:12*

**Nathan Papes**: Yeah, that's painful to do. That's.
*39:13*

**Gus Schissler**: if there's, like, a… I'm… who knows if there's, like, a JAMA MCP, or if someone could build a JAMA MCP, but that's where it would be… Like, go get the agent to do it.
*39:16*

**Dan Maser**: Yeah.
*39:26*

**Gus Schissler**: Which is not, like… I don't want to build them shitty software that then requires an AI agent to fix.
*39:28*

**Dan Maser**: Right.
*39:35*

**Nathan Papes**: The U.S.
*39:36*

**Gus Schissler**: Good point, Nate. So the, The… I mean, what the require… this requirements monitor needs, though, is an understanding of what has gone through. the tooling previously. Right? Because if… if the requirement… if there's a requirement that changes, and it hasn't gone through the tooling, and it doesn't exist in JAMA, then no one cares. But if there's a requirement that has changed, and… Hannah's gone through, and maybe even, like, manually copied it into JAMA, we need to understand that.
*39:37*

**Dan Maser**: specific requirement ID.
*40:15*

**Nathan Papes**: Yes.
*40:18*

**Gus Schissler**: Requirements generator at a specific date. Or time. And then 2 weeks later, when that requirement is updated, We'll need to say, like, hey, like, this went through 2 weeks ago, new version, released today. We don't.
*40:18*

**Dan Maser**: right.
*40:38*

**Gus Schissler**: DIFM. We just have to say, like, there was an update to this requirement.
*40:38*

**Dan Maser**: Which helps. Sorry, keep going.
*40:43*

**Gus Schissler**: Intelli user.
*40:46*

**Dan Maser**: No, I was gonna say, and even that, like, there's, like, a bunch of different ways you could do it, because it's like, if there was any kind of storage, it could, like, reference the… how the document is. If there's a changelog that it could read, it could do that. It's like… if it… because I thought in the GitHub it showed different versions, so is it as simple as that? I feel like there's a lot of questions of, like. Yeah.
*40:48*

**Gus Schissler**: Yeah. We'll see when we actually get access to the GitHub, because the interface is meant to show those different versions.
*41:10*

**Dan Maser**: That's where, like, the drop-down was, right? Like, V1, V2, yeah.
*41:19*

**Gus Schissler**: But we don't know how those different versions are stored within the actual repo itself.
*41:22*

**Dan Maser**: Yeah.
*41:27*

**Gus Schissler**: So… .
*41:29*

**Dan Maser**: This… we don't… I don't know if we need these here. This is just, like, 3 different ways it's monitoring it, in terms of, like, in an ideal world, the moment there's a change, it would just know, like…
*41:33*

**Gus Schissler**: Yeah, this is like an… this is like an implementation decision.
*41:44*

**Dan Maser**: Yeah.
*41:48*

**Gus Schissler**: access or an output. It's like a… like… We would probably… Look as a team, like, okay, how frequent… frequently are these changing? If it's pretty frequently, then maybe just, like, a nightly job could pick it up.
*41:49*

**Dan Maser**: And that'd be fun.
*42:04*

**Gus Schissler**: But if it's not frequent at all, maybe it's, like, a manual trigger, because we don't want to have something running.
*42:05*

**Dan Maser**: Yeah.
*42:12*

**Gus Schissler**: Sometimes if it's not gonna pick anything up. And that… we don't even have to be the ones that make that decision. Maybe it's a different team in Woven that makes that decision, so… But it's just the understanding that. We don't need, actually, what the output is, is, like, user alert. I'm gonna remove these.
*42:13*

**Dan Maser**: Yep, yep.
*42:38*

**Gus Schissler**: So the output would be a user alert. Not tooling, that's a user interface.
*42:41*

**Nathan Papes**: would we want to include, like, okay, so a user alert, but what information are we going to give to the users, or expose to the user? Is it, like, a URL? Is it a summary of what changed? Is it, like, a link to a GitHub repo?
*42:46*

**Gus Schissler**: Yeah.
*43:00*

**Nathan Papes**: Maybe all that, maybe Google Doc, I don't know, but like…
*43:00*

**Gus Schissler**: That's, yeah, a whole scope that we can probably define. At the very basic, it's just like, hey, we noticed that this specific requirement now has a new version.
*43:03*

**Dan Maser**: Yup.
*43:12*

**Gus Schissler**: And then, that if… All of this requires that we have this some sort of, like, direct access, either to the documentation, or to the Git. But once the user gets an alert, then they can go back into the regular flow, somehow. Yep.
*43:13*

**Dan Maser**: And that's where, in an ideal world, it would be able to, like… this, like, you could click a button and it might automatically update, but for… yes. Yup, exactly.
*43:30*

**Gus Schissler**: So… Even until this point, we don't even need, really, a database.
*43:44*

**Nathan Papes**: I would avoid a database for as long as you can. Like, write text files as, like, your database if you need one. It's not, like… Yeah. It's a database problem, I don't think.
*43:52*

**Dan Maser**: Unless there's, like, no way to… Unless you… the only way to do a requirements monitor as a database, which that seems like there's other better ways of doing it, but yeah…
*44:04*

**Gus Schissler**: Right.
*44:15*

**Dan Maser**: Yeah, that's true.
*44:16*

**Gus Schissler**: Yeah, like, Nate, what you were saying is, like, and we could… store a very simple text file structure that has just, like, requirement ID. it could even be a CSV, like, comma, this version has a gone through tool. And that's, like, our running log of things that I've gone through.
*44:17*

**Nathan Papes**: Yep. Like that.
*44:39*

**Gus Schissler**: I really like how this is shaping up. I do have to leave in 4 minutes, but we're talking about, like, how each of these verticals unlocks if… These access things are squared away.
*44:41*

**Dan Maser**: So that's exactly what I was gonna say, just to clarify before you leave. Just clarifying what the access points are, which I think it's Bev… did you conf… and we can double-check this, but I think it's BEV document for the GitHub for this?
*44:55*

**Gus Schissler**: It's the… the repo's name is huge. Well, I think it's huge. Andrea, I posted the link, so the link's in the woven…
*45:09*

**Dan Maser**: Yes.
*45:20*

**Gus Schissler**: Slack channel. I don't know if it's BevDocument, or if it's, like, one team ADA slash… something else? I don't know, double-check that.
*45:21*

**Dan Maser**: None.
*45:32*

**Gus Schissler**: Because it's either BevDocument, or if it's the presentation layer on top. And who knows, maybe the presentation layer on top has a whole API attached to it. Yeah. At which point, that's the same exact thing.
*45:34*

**Dan Maser**: Right. And maybe because it's Toyota that is bought, like, maybe that is how they'd… yeah, yeah, okay. And then, for this, what do we need for the JAMA? I mean, we have JAMA access, so this feels a… I don't know.
*45:45*

**Gus Schissler**: Yeah, so, so much of it depends on, like, like. Okay, do we have API access?
*46:03*

**Nathan Papes**: Is that true? Yeah, is that a thing that they want? Is it even possible?
*46:09*

**Gus Schissler**: If we do, then we need to know where the hell to put this if we're pushing it there on a back way. Or your suggestion, Dan, is, like, just put it in a dumping ground.
*46:14*

**Nathan Papes**: Right.
*46:24*

**Dan Maser**: Well, part of the reason I bring that up, too, is it sounds like they don't really know what their photo structure is, so it's like, even giving them the option, it's like, look, you can always have it dumped to a dumping ground, and then you have to manually sort it, but that gives you flexibility. But, yeah. We can also very easily make a front-end UI where it's, like, you know, a drop-down folder to choose where it goes, so… if we have the API access.
*46:25*

**Gus Schissler**: So… I think this is a pretty… cool thing to show Julia, and we're kind of at the point of, do we want it?
*46:50*

**Dan Maser**: Yeah.
*46:59*

**Gus Schissler**: to be vibe-coded when we show her. I think we should show her this view regardless. But the thing that, the thing that we could rapid prototype is, like, this thingy.
*46:59*

**Dan Maser**: Yup. I mean, you could… You could've… I would argue… I like it. You could… you could rapid prototype the first part, too, though. The Fetcher.
*47:20*

**Gus Schissler**: the.
*47:36*

**Nathan Papes**: I don't know. That needs access and… because, like, that needs, like, a Git repo, needs a G drive, I mean…
*47:41*

**Gus Schissler**: I'm just saying, if it's gonna be a part of the same interface, it's like, this is what it would look like to click the button, and it fetches, but I hear what you're talking about.
*47:49*

**Dan Maser**: Yeah. Yeah.
*47:56*

**Gus Schissler**: it is behind the scenes. You're right.
*47:58*

**Dan Maser**: The only other thing that I'd add, and I don't think we have to do this now, but I'd add two things, is, like, we could add a bit about, like, in the middle here about, like, if there's, like, known issues with it before the test generator, like, we could help float that up, like, it could, like, recognize any issues. And then they'll…
*48:00*

**Gus Schissler**: Like, agent comments on this thing.
*48:22*

**Dan Maser**: Yeah. Yeah, because it might help direct someone to… because if it's shit, then you don't want the test generator, so if it notices that it's shit, then it says it's shit. And then the only other thing is it could also help, it could help decide how many test cases might be necessary to create. I think these are all nice-to-haves, these are not necessary, but yeah.
*48:24*

**Gus Schissler**: Okay, did you put those down as stickies? Put them down as stickies?
*48:49*

**Dan Maser**: But I'm down to stickies, to find… I'll use Julia's words. Crap.
*48:51*

**Gus Schissler**: Yeah, we'll rephrase that when we show, Julia, I guess.
*49:02*

**Dan Maser**: Those are her words, but yeah. That wasn't Hannah's words. And then, help identify amount of test cases based One requirement.
*49:07*

**Gus Schissler**: Cool. Sweet.
*49:21*

**Dan Maser**: This looks great. Yeah, Gus, I think, yeah. This is a fun project in the sense that, yeah, that. Also, really quickly, I talked to Casey the other day, and he was saying just, like, access was just a nightmare, too, for him, and just things going slowly, and so… yeah. We're not alone.
*49:24*

**Gus Schissler**: Okay. I gotta skedaddle, but, you folks can certainly keep on talking if you want to.
*49:43*

**Dan Maser**: I was gonna try and… unless you're opposed to it, I was gonna try and take a crack at, I can start the slides from the PRD, trying to hook up, Cursor to, Figma and see how it does. Unless you have massive concerns with it, I don't know. I was mostly just gonna try and mess around with that.
*49:48*

**Gus Schissler**: Cool, yeah?
*50:05*

**Dan Maser**: Sweet. Cool. Alright, I'll be around.
*50:06*

**Gus Schissler**: Okay.
*50:09*

**Nathan Papes**: Okay, also, last question. Do you guys have any, like… of those input files that, like, Hannah showed us. like, an export of, like, a Google Doc that had, like, these requirements, like, checked into, our Atomic GitHub. Or no, because I think…
*50:10*

**Gus Schissler**: checked into GitHub.
*50:28*

**Nathan Papes**: Yeah, is that… that should be done, or can that be done? Because I'm just thinking of, like, what a translation step might look like, like, looking at it. how, like, what should we use to parse it out? Because, I mean, there's certain aspects of it you don't want this to be straight-up AI, like, inferring from it. You'd want to break it down into some… Some kind of abstraction that's, like…
*50:29*

**Gus Schissler**: Hmm.
*50:54*

**Nathan Papes**: Easy to work on and reason about.
*50:54*

**Dan Maser**: We have access right now to the JAMA files, which are the translated, somewhat translated.
*50:57*

**Nathan Papes**: The output, like.
*51:05*

**Dan Maser**: We have some of the output. We also have, like, the video she shared. We have the PRD. The thing that I don't think we have access to, and I'll double check, is, like, the actual GitHub layer with the UI layer on top of it. I don't think we have access to that, and I think that's kind of what you really want, right?
*51:06*

**Gus Schissler**: I don't think we.
*51:21*

**Nathan Papes**: Well, I mean, just even, like, a Git repository just, like, full of, like, text files or something, like. just files of, like, here's, like, the inputs that we're working with, and here is, like, the desired output. And they just… they don't have to be, like, API fetching it, just, like, chuck them into a repo, and a handful of files are enough to even, like, show some kind of prototype of this thing working.
*51:22*

**Dan Maser**: We can work on that. If we don't have access, we might even… Hannah might be able to, like, manually copy-paste some for us.
*51:46*

**Nathan Papes**: Yeah, I could… there's lots of benefits to that. Working in a sandbox, and like…
*51:53*

**Gus Schissler**: Yeah, I mean, if one of you wanted to pick up, Uve's… Message… To get us access to that, that's exactly the directory that you're talking about, Nate. Yes.
*51:59*

**Dan Maser**: You need to get it.
*52:11*

**Gus Schissler**: access to that specific GitHub.
*52:12*

**Dan Maser**: Yeah, did you see his message? It sounded like… I, I can work on this.
*52:14*

**Gus Schissler**: You gave us a step-by-step of what we now gotta do. I gotta hop, though.
*52:19*

**Dan Maser**: You're good. Yes, I will take that and start running with it, and I think that should solve our problems.
*52:23*

**Gus Schissler**: And then, Nate, once we have that access, then that's exactly what you're… Looking for, I think, yeah.
*52:27*

**Nathan Papes**: Yeah, yeah, I think so too. Bev documents? Yep.
*52:33*

**Gus Schissler**: Cool. Cool.
*52:36*

**Dan Maser**: I'm on it.
*52:37*

**Gus Schissler**: Talk to you guys later.
*52:38*
