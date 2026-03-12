[00:00:01] Gus Schissler: Or AI doing.
[00:00:03] Dan Maser: You are. Yeah, this is the plot note. Oh, is that a is that the transcriber?
[00:00:11] Gus Schissler: Yeah, we'll see how it goes. I I've used it for two meetings so far today, and it seems to do well. So. That's cool. Yeah,
[00:00:20] Nate Papes: Mac Whisperer. And it's like there's like a free.
[00:00:23] Gus Schissler: Yeah I've been using I've been using Mac Whisperer for the last like almost year I think.
[00:00:29] Nate Papes: Is that a CLI tool or do you use like the paid version?
[00:00:33] Gus Schissler: The paid version. And it's like a one time license, so if I stop using it, I'll just give it back to Josh and Josh can reuse that license. But it'sum for me, it's mostly theum what you call it? Plot automates a lot of the manual steps that I have to do, which is nice. Mhm. And I haven't figured out how to automate them in MacWhisperer. Yeah, I care about a lot about the the speaker, like who said what. Um, and timestamps. And you can set that up in MacWhisperer, but you have to. It doesn't track speakers across meetings. So you have to when it transcribes everything. It does speaker, one speaker, two speaker three, and you have to go in and like manually set. Yeah, yeah, it doesn't remember the voice profile, but Plaud apparently does so.
[00:01:28] Gus Schissler: We'll see if that works.
[00:01:34] Dan Maser: Cool. Let's see all the meetings in this, okay?
[00:01:40] Nate Papes: Hopefully your thing will be enough to capture it. Yeah, and Chad.
[00:02:06] Gus Schissler: Sure. Or are you on your own?
[00:02:19] Mahesh Sarode: Hello. Hello, I'm still converting, so I have to run my video like four minutes.
[00:02:22] Nate Papes: Okay, cool. Yeah, I'm figuring stuff out here too, so that is okay with me.
[00:02:28] Gus Schissler: Um Do you want me to, Join this meeting. My camera's on as well. Cool.
[00:02:36] Dan Maser: I'm not sure this. I'm presenting something already here.
[00:02:43] Gus Schissler: I'm on my MacBook, my back book, so you'll have to invite me.
[00:02:50] Dan Maser: Go to my account view, okay? You get all sweet.
[00:03:11] Dan Maser: My browser.
[00:03:27] Dan Maser: Hi Dan, how you doing?
[00:03:33] Gus Schissler: You are muted somehow, Dan.
[00:03:59] Speaker 4: Very strange. Oh. Okay. I'm.
[00:04:16] Dan Maser: Just gonna have to. Can you guys hear me now? Yep. Still nothing?
[00:04:22] Gus Schissler: No, we can hear you now. Oh, yeah, we can.
[00:04:25] Dan Maser: Wait, that's what. Huh, so I was muted. Okay, I was muted when you. I was plugged into my monitor system. Okay, weird. Whatever,
[00:04:37] Gus Schissler: If you want to use the Jabra, you'll just have to change your audio.
[00:04:40] Dan Maser: Yeah. If it's working, I don't want to change it, but if it's okay.
[00:04:45] Nate Papes: But I don't know how buried it is within uh Google Meet.
[00:05:02] Dan Maser: That's what I'm selling. Let's take this. Then.
[00:05:12] Nate Papes: So Dan, okay Dan, you created the meeting. Do you have the button to record?
[00:05:20] Dan Maser: Um, I am not able to. I forgot about this. I think Mahesh should be able to because he has full access.
[00:05:30] Dan Maser: If that works.
[00:05:35] Mahesh Sarode: Uh, let me try recording, Mr. Jordan. Okay.
[00:05:39] Dan Maser: So it's the three buttons, and then if you click the three buttons, it should say recording. Does that work?
[00:05:48] Mahesh Sarode: Yeah. Uh, let me try this here manage recording.
[00:05:53] Dan Maser: Perfect, thank you so much I I apologize for making you record the meeting that we invited you to do.
[00:06:01] Mahesh Sarode: No worries. Uh, forgot to start recording it. Can you have any please? Yeah. What was that? I'm sorry. Oh, okay, so I just started recording.
[00:06:22] Dan Maser: Okay, I see it.
[00:06:24] Dan Maser: Awesome, thank you.
[00:06:33] Nate Papes: Alright. Mahesh, are youum, are you still in the middle of something right now Are you. Able for us to kick this off for yeah. Um Mahesh.
[00:07:05] Mahesh Sarode: I'm sorry, I think I'm trying to connect my headphone, but I lost the audio. Now now I can hear you guys.
[00:07:11] Dan Maser: Okay, okay, lost your headphones? Okay.
[00:07:22] Speaker 4: Can you hear me?
[00:07:23] Nate Papes: Yes. Yes, I can. Alrightum So I'm gonna go ahead and get this kicked off if you are okay with that.
[00:07:37] Nate Papes: Yes. Okay, so I'm Nate Papaz, I'm here with the Atomic Object team. We're working on the tools and metrics side of Woven, Particularly to help certain stakeholders deal with requirements and how they're changing from day to day. And they're looking for some like polling based system that can do like change detection. And, then they could ultimately filter like what is a signal and what is noise. So then, thinking figure out like what to put in JAMA. Like that's like the end goal. They want clean requirements in JAMA, And it's not super obvious what's like how the software has changed um and what things they should be spending their time on if it's going to change like within the next two months or so. So we're trying to like hook into that process.
[00:08:35] Nate Papes: And those teams. So, it's my understanding that you're more on the engineering side of like the organization. Is that correct?
[00:08:45] Mahesh Sarode: Yeah, I can give some introduction. So I have working video steam as mainly it's mainly with requirements and validation, but right now we're focusing more on validation.
[00:08:55] Nate Papes: Okay, validation okay.
[00:08:57] Mahesh Sarode: But everything from requirements architecture. Um so it's like a lot of topics we have.
[00:09:10] Nate Papes: Okay. So here's a little slide deck. Gus and Dan have been doing some interviews with some other people at Woven and basically seeing what their job looks like. They're getting these requirement packets, you know, from Japan, and then they have to basically figure out how to deduplicate them and Figure out what ones are stable, uh, in terms of like components and their features being ready. Um, Because it's our understanding that the platform's consistently being like built and it's being deployed to cars, and they're running it, and people are kind of tweaking the software. Um, and it and the teams are sliced into different like levels. There is like in lane um assistance. There is like lane transition um.
[00:10:09] Nate Papes: And there's like acceleration or something like that, but yeah, there's like and what like Julia, which is like the stakeholder we're working with, Is looking for just like, okay. We need this to know high level notifications of when one of those systems has changed. So down to the level in the code base, You know, we just need to have these kind of low fidelity diagrams of how these systems work. And they, She is interested in like having some kind of tooling that could, I don't know how it would work, but I'd imagine it would do some kind of static code analysis. Maybe uh figure out what what are the hot paths in the code. Um and like build up like, like build up these small components. You know we don't, we won't need to know every function name, but we need to know like a bunch of these functions together is basically achieving this task. And.
[00:11:07] Nate Papes: These five methods together then achieve this task, like and then a lane change happens. So, like that level of fidelity is kind of what the core problem is. And then they want to bake that into like the requirements documents. Okay. So, so yeah, as I said earlier, it's kind of going backwards. Here's the doc we've been running with the teams who've been doing the grunt work for lack of a better word. Of taking these requirements that come at like a quarterly basis and look through them and then put them into Jama, and then decide what test cases should be written or not. And let's see, here is one example, you know, lane change SWRDS managed usually by Hannah. There's six hundred of those, so it's kind of a painful job.
[00:12:06] Nate Papes: One interesting stat that we recognized was like, Hannah was able to use like an LLM to do ninety percent of the that kind of work, which I think is really neat. Using Wovi to basically once you have these right prompts, It can get the documentation from one format to a format that you know John Law can adjust.
[00:12:35] Nate Papes: Uh yeah, here's kind of the team we've been work we're working with. Yeah,
[00:12:45] Dan Maser: And we had a there was like three proposed solutions that that we had built out. We we had like proposed. Um, I'll just go to that part and then ask some questions of you.
[00:13:07] Dan Maser: Scroll way past it.
[00:13:13] Dan Maser: Can you hear me?
[00:13:14] Dan Maser: Yeah, yeah, I can.
[00:13:15] Dan Maser: Um, that's the older deck. Are you able to see the newer one? Oh,
[00:13:20] Dan Maser: Is that one? Yeah, let me let me check that out. Okay.
[00:13:23] Dan Maser: Sorry about that. I just noticed that as we speak. Sorry, I'm also plugging my computer in here Uh.
[00:13:36] Dan Maser: So I'll sum up the. Did you commit on them? Dan, Marsha, tell.
[00:13:48] Dan Maser: Yep, it's committed. It's a different title.
[00:13:52] Dan Maser: Oh okay. Do.
[00:13:58] Dan Maser: You want me to give it the name of it?
[00:14:00] Nate Papes: Is it present? Okay yeah, I'll just name of it.
[00:14:05] Dan Maser: It's in solution. It's in uh solution definition delivery. And there you go right there. Oh oh it was right there that one slide deck. Yep, oh that's PDF but it's that one yep.
[00:14:38] Nate Papes: Alright, so here's one way to kind of think of it. I don't know if you're familiar with how requirements are managed by Woven and the developers. We've been kind of looking into that too, and seeing how we can kind of inject ourselves to add some value to your organization. So it sounds like these requirements come in at some rhythm, some cadence, maybe it's Once every quarter, maybe it's earlier than that. But then they're like saved to like Git and then saved to like Google Drive. Maybe it's like saved as like a Slack message to a Google Doc or something like that. And so there's all sorts of different data sources that are used for intake. So, what we have here is like a system that basically can do the bare minimum, which is everything on the right hand side.
[00:15:35] Nate Papes: If you look at that chart, like here split down. Like system. One is like something that we built kind of without any fancy like API integrations, where it's like they take they that they like the. The person would hunt down where the documentation is, and then copy it. Um, in verbatim, Plate paste it into like a tool that we would develop. And then it would output. The format that Java needs to basically persist, that as a requirement, And it does some of the tedious work, such as creating what are what are some good example test cases, and the human's always in the loop throughout this process. So if there's some test cases that just seem redundant or just unnecessary, then you know the human would just we don't we don't even they're just.
[00:16:29] Nate Papes: Nope, don't don't post that to Jama. But do post this, and then there'd be a way to do change management on it too. So then like say they have requirements, they're put into the source of truth. But then the underlying software is changed. Well, then they need to be notified of when that change happened. And, and that's where like that multiple data source component needs to be hooked up. Um and that's like what system two is here. Um, it's just and that is a problem of just getting access mostly. But that is not like the starting point for all this. Um, system three change management. Um, this is in the form of like a user alert. So, at the very end, we could have something that can like post to or ping them on like a Slack channel after like some kind of CI run that can do this smart change detection. We want to make sure we've got absolutely down right before.
[00:17:26] Nate Papes: Adding any more noise to any slack channel. Because, yeah, We don't want this to end up becoming another source that they have to like, you know, look at to compare against. So does that give you kind of the Yeah.
[00:17:42] Mahesh Sarode: Thank you for that introduction. So I think is today's topic like, are we discussing architecture or I think I mentioned briefly that we would trace some of the signal flow through components or collection of methods.
[00:17:55] Nate Papes: Mhm. Yeah, so that's okay. Yeah, So that would be like the part where I need to figure out who I need to talk to, to figure like to do that part of the work, like to do the the static code analysis part. Um and I. Imagine you would have an idea of how this has been done at Toyota in the past or at Volvo in the past or.
[00:18:21] Mahesh Sarode: I can share something how it was done when I defined in the past. Documentation basically, we maintain the connections through a file called EFDL or schematic files, which basically tells what component is connected to what component. And if you just analyze those, you can basically draw a picture of it. There used to be a tool we have to do that, but I think when you moved the repositories, we don't really have that anymore. But I think what.
[00:18:54] Mahesh Sarode: I was imagining was with every software, all these static files are kind of defined already before you even build. So, we should be able to draw a picture of what the signal flow looks like. So if you change in the next build or in the next commit, should be like you should be able to point out, okay, This one input has changed, or there is a new component now in the system.
[00:19:19] Nate Papes: Mhm. Perfect. Yeah, that sounds exactly like what we're looking for here.
[00:19:27] Nate Papes: And that exists today in some form in a Git repository, or is that attached to.
[00:19:36] Mahesh Sarode: The code base? But I don't think we are generating image as a part of our build process.
[00:19:41] Dan Maser: Okay. So, okay.
[00:19:59] Nate Papes: What uh if you don't mind me asking, What what piece of of the software are is like your responsibility at at Woven. Um, is it part of any of this at all like the self drivingum.
[00:20:19] Mahesh Sarode: Um, so sorry, so we are still a requirement team. So we don't write uh software, but this is mainly the application layer software. Yeah. Um.
[00:20:30] Nate Papes: Yeah, yeah. I was just curious where like what was the core like. I don't know codebase you work in on like a day to day basis. And if there's like any good examples of like, Yeah, here's where here's one example where we had to take, you know something that was abstract and it's code. And we had to, you know, show someone higher up to put it in like a requirements file. So they understand how that system works. Like, Can I have like an example of where that was ever done within like the scope of your work that you do? And, if, like you could point me to like a git repo or something that has that built in, that'd be really neat to play around with.
[00:21:23] Mahesh Sarode: Um, I mean the git repo. Let me share that with you.
[00:22:15] Mahesh Sarode: So, this the repo that so we don't really work in directly this. So this the autonomic. Uh, this the autonomy team or developer team. Uh. But what I wanted to show is that our architecture is kind of documented through these static files. So if I go to um node files, yeah.
[00:22:46] Mahesh Sarode: I think you might have seen this repository, but this is the internal product autonomy is we call it IPA.
[00:22:53] Nate Papes: Mhm. Yes. Yes, I've seen this.
[00:23:01] Dan Maser: But I don't think it is currently documenting all the architecture. I think it just has a static file, so I'm trying to figure out which one is the. So that gives like a.
[00:23:12] Nate Papes: Yeah, I think I saw some a dependency for dot, viz or viz dot or something like that. That seems like it might be doing with some diagramming, but I'm not for certain if it was this repo or a different one.
[00:23:36] Mahesh Sarode: So, Let's say this is our entire app that we say we call it Hyperion Orion Driver. If I go to this skeleton file, PFDL, it will basically tell me that this component, what are the components? Or we call it node. I think this is just a nomenclature. But it should tell us that what is the connection that is happening. So the camera node is connected to this process. It basically tells all the connections in your system or in the system.
[00:24:11] Mahesh Sarode: If we just read all these files, it should be forward to draw something. And there would be somewhere like a math fusion will have its own API file. So if you want to go deeper, If they have like multiple sub- nodes or I think I don't know the exact nomenclature, but they call it a collection of functions, a node and something can be like a collection of nodes also. Yeah. Okay, if I just read this, you should be like it basically shows like where the planning is connected, where perception is connected, how the route node is connected. And this static file should be, and then there's a main schedule of how do you allocate resources on the hardware.
[00:25:01] Nate Papes: Oh, that's perfect. That's really good. Yeah yeah at that level kind of puts it all together and then, Being able to focus on like maybe a one sensor level, I think would be very beneficial to or maybe not like one, like a component, maybe like the lidar. Like what does the lidar do? Like in terms of what's its inputs, what's its outputs? And then you can build up the complicated system that way. Um based on the pieces of hardware that you support.
[00:25:30] Mahesh Sarode: Yeah and then you can go to this. So this, so just as an example, they have a node for camera schedule. And if I. There will be a separate file for it because they might have defined this camera node in detail. And you can see each node, it will tell you what resources it is consuming, how fast it is supposed to run, should be something like hertz. Okay, this defines how each node is supposed to take the resources.
[00:26:08] Dan Maser: E F D L files. That's great.
[00:26:19] Nate Papes: I don't have any other questions. I don't know if Gus or you do, or if you have any questions for us, happy to Yeah,
[00:26:27] Mahesh Sarode: I wish I had. I think there was a tool. We had this So. He basically drew a picture of all these things before. So, One thing I'm looking for is, let's say, if a map component input or output or something changes, We can track the requirement or maybe the requirements says that okay, you don't need this input anymore, or you probably need one more output because downstream components needs it. But, we are not able to easily visualize it in the software unless you track like a specific code or specific like CSV file or CDF file.
[00:27:07] Mahesh Sarode: So one wishlist, or at least what Julia had in mind was, because we already have this information, If we can build some tooling around generating this either as a part of the build. So this could be the developers. Or, we can keep this information outside of this repo and maintain our own wishlist based on each comment.
[00:27:31] Nate Papes: Yeah, I would say keep it in repo for now. Then see what we can do with it. Because like, It will start out with just like a you know, we'll create our own branch and just write like some script that then produces something that show that to Julia and see like what she thinks and be like. Okay, then if if that produces something she likes, Then we could talk about like, yeah, where does it make sense to then host this? Like And we want to kick it off on every single like GitHub like action, every build, every release. Like kind of see where we want to hook it into. Cause I know that's also you want to be wise about that. Cause I imagine I was reading through the documentation about like the nightly builds and the training, the simulations that go through. So, it's like, you know, at the time you have something that's like here is a release candidate ready to be chopped and be, you know, deployed to a device might be a good time to deploy uh.
[00:28:27] Nate Papes: A new diagram at that point. And then do a like a git diff on it or whatever, some kind of some way to diff it, see if see if it's changed.
[00:28:41] Nate Papes: All Right. Well, thank you so much for your time. This was helpful. Yeah, go ahead.
[00:28:46] Dan Maser: Really quickly, is there anything else? I'm just trying to just go check all of it because I only understand like half of this. Um, is there anything else on the like details statement of work? That would be helpful to go through, or it sounds like you got a good thought on all of them. Does that make sense as a question?
[00:29:04] Nate Papes: Like Epic One versus Epic Two? Is that what you're.
[00:29:07] Dan Maser: Specifically Epic Two? Like as it relates to Epic Two, any other questions from Mahesh on there?
[00:29:12] Nate Papes: I need to open up that document and read it again. I think I covered sweet. Yeah,
[00:29:21] Dan Maser: I figured just as a make double check.
[00:29:24] Dan Maser: Yeah, doesn't hurt.
[00:29:27] Dan Maser: Okay, here we go.
[00:29:39] Nate Papes: And, So it talks about like current IP stack and then planned future IP stack. Um, let's see. Uh, what else is there?
[00:29:55] Nate Papes: Something about Craig and S C R Ds. Software, what are those S C R Ds?
[00:30:03] Mahesh Sarode: Yeah, software component requirements. So I think when we get S W R D, They are at the whole, um we call it I P level. And as I showed, there are multiple components like map, uh camera, some others. And, the goal is to decompose it to a C, R, D or component requirements.
[00:30:23] Dan Maser: Component requirements.
[00:30:33] Nate Papes: Yeah, it's. I think I think we covered it. I think what what changes is just the like, What what is the thing that like triggers this? And like how do you tie it to a requirement into a team, right? Because we could have this thing run. It could like run it like like a cron job at the the very dumbest thing to do, a cron job nightly and it just does a quick ant like Code analysis of the code base to then produce like these diagrams at the component level, And those component levels will then help build up the requirements in JAMA for the S W R D S Q T S. And then, like some kind of pinging mechanism, so like maybe a Slack webhook or something like that where it's like.
[00:31:28] Nate Papes: There's been like a significant change that's happened within this module. Like there's people been contributing to it, function names. Like I figure we could like hash up, we could like hash some certain files to like see if there's like, like these are the core files. If these ever changed, the hash breaks. It's like let's flag it because who knows there might be something big there. And then yeah.
[00:31:50] Mahesh Sarode: I would recommend. Have you guys in touch with uh, are you guys in touch with Brian Hampton?
[00:31:55] Nate Papes: We had we tried to talk to him yesterday he was, He's too busy, but next week.
[00:31:59] Mahesh Sarode: Because he's yeah, he's the he's the main uh, he is the lead architect or I don't know software architect. And he can control a lot of decisions in the repository. So, I think if we are interfacing him, it would be better to keep him. Keep him in the loop. For sure,
[00:32:16] Nate Papes: Okay. All right, well, absolutely. Yeah, it was, it was a bummer. We didn't get a chance to talk to him yesterday, but he was he was busy I think he does like a workshop too, for the new. Onboarded people for like the git workflow and all that, so I need to join one of those still. But anyway. Yeah, I am good with that answer. I am good with all those answers. Thank you for the advice that That clarifies some things I didn't know about those. Um, I don't know what what the file extension is called like the ELF, DI or whatever L D L uh files and I want to see what that is. And if that should be like a.
[00:32:59] Nate Papes: Leverage that going forward, and especially if that's what's being used in other repositories as well. On that,
[00:33:10] Speaker 4: All right.
[00:33:10] Nate Papes: Have a good afternoon, gentlemen.
[00:33:12] Dan Maser: Thank you so much for your time. Yeah.
[00:33:15] Dan Maser: Thank you, Dustin. Not so bad.
[00:33:28] Gus Schissler: No, I didn't know that they had thatum file. That's good.
[00:33:32] Nate Papes: Yeah, I wouldn't have. That's so weird. It's like yeah, we're talking to people and stuff. Yeah, it was like E F D L. Huh, that's interesting. And, then it's yeah, they're all mentioning this pool that used to exist. But now we don't know where it is at anymore.
[00:33:46] Gus Schissler: Mhm. I wonder if it.
[00:33:48] Nate Papes: Just got.
[00:33:50] Gus Schissler: Deleted somewhere?
[00:33:52] Nate Papes: Someone left the company or something?
[00:33:54] Gus Schissler: Or yeah, it was on their local machine then they left. Maybe merge it into a actual code base or something.
[00:34:07] Dan Maser: Alright, cool. I.
[00:34:14] Nate Papes: Wasn't totally sure what his business role was or what his function was. Yeah, he's like a higher up staff engineer, though, right?
[00:34:22] Gus Schissler: I am pretty sure that would have been a i don't know.
[00:34:25] Nate Papes: I would have been probably a good question. I was going to ask it, But I kind of tried to ask it and then I think the question got turned around to something else. But on the invoice, I think I remember seeing that. Yeah,
[00:34:38] Gus Schissler: And then they also have that org chart too, that we can look around if needed. But okay, yeah, I think the probably a lot of the answers will.
[00:34:56] Gus Schissler: Maybe come up when we talk to Brian next week. Um. Yeah, I'm just trying to think about uh. What do we prepare for him?
[00:35:10] Nate Papes: I think I think this having showing that we've talked to people, Like him show that or see if we can do anything with those files that he has so far because. He showed us like the main codebase is doing this, like that woven toga codebase has those files in it, And then it's broken down by like each like at basically the granularity we wanted to add. Like there was like the perception or the cameras. There was like twelve things.
[00:35:40] Gus Schissler: Did you mention that something was still running? You keep that up today or is it old?
[00:35:46] Nate Papes: I'll look at. Yeah,
[00:35:47] Gus Schissler: We'll be able to see the commit.
[00:35:48] Nate Papes: I didn't see the commit for that file. Yeah, And see if something is like, because then you should look back and say like what does make commits to it? But,
[00:35:55] Gus Schissler: He literally just showed me this morning that he there's a you'll have to talk with him about it, and I told him that he needs to talk about it with you. He's using a skill from Drawio that generates architecture diagrams that look exactly like. Probably what they wanted, And he did that based off of the code base for Novitas that we're now working in. So, when he saw it, he like mentioned it casually to me this morning. I was like, "Have you talked to Nate about this? Please talk to Nate about This."
[00:36:33] Nate Papes: I'm like I'm looking. I'm like a it's like in a VS Code uh or now our our cursor. I'm like oh, looking at all these like skills, I can download and I'm likeooh drawio. I'm like, I could see that working then. And I was just like, but like what's the good one though? Like yeah, see, I see so many of them.
[00:36:48] Gus Schissler: Oh sorry, you're fine, okay, hopefully felt fine. Oh, yeah. No, no, it's just a chair. Is this your pod? Yes? Is he blurred who's his name?
[00:37:02] Dan Maser: Spider Verse dude.
[00:37:03] Gus Schissler: Yeah, if you pick it up, you start messing with the AI being for the microphone. Interesting. We are in goals to be captured. Yeah, So it it records to the device. And then after the meeting ends, uh syncs that with my phone that syncs it with their cloud server, which is apparently very secure and HIPAA compliant um and then that.
[00:37:33] Gus Schissler: Goes through an automated uh transcript and summary thing on their end, And then I have a Zapier zap that um uses a webhook to find when the summary is done. And moves it into Google Drive. And then I have a scheduled Cloud task that looks at that Google Drive because it's a synced Google Drive folder every fifteen minutes, and it triages those transcripts into different other Google Drive folders based on which project. It's for, and then, It also copies them to the different uh GitHub repos locally on my computer. Well, it pulls the code, copies them to the transcripts directories, commits and pushes. And, we'll see how that goes because something's going to break and I don't know what it is. Is it bad that my first thought was like. So if there's an outage in.
[00:38:22] Dan Maser: Like any of those places you're fucked?
[00:38:25] Gus Schissler: But, it's still all going to the device and at least to my phone. So the transcript will be somewhere. Also.
[00:38:32] Dan Maser: The reality is with that,
[00:38:33] Gus Schissler: There are way too many tools in this pipeline. Yeah, um, but that's fine. Yeah,
[00:38:39] Dan Maser: I didn't know you guys were in here. I am so sorry.
[00:38:41] Gus Schissler: Oh, And it also sends me a Slack DM with what transcripts it just moved where. Oh, like a like a receipt basically. Hey, I just did this.
[00:38:50] Nate Papes: Have you got the exploitative text messages yet? No, I don't want to send these to blah blah if you don't do this. Interesting. You know, You hear about those things that happen to Anthropic's uh, how they do their training. Oh,
[00:39:06] Dan Maser: Guys, I'm doing my Toyota training. I already got the first question wrong, so I'm fucked. Jesus. Have Claude do it. I don't think you can because you have to like log in and everything. Wait,
[00:39:15] Gus Schissler: Claude can log in like use your Chrome browser? Yeah, that's kind of cool. I don't think that we should have Claude This is a joke. I do not think that we should have Claude do the security training for us. If they if it's a requirement and they want us to do it, then yeah. Um,
[00:39:33] Dan Maser: I mean I was about to Google this but yeah. Um, uh how are you feeling? Do you feel like you got any answers from that? Yeah okay.
[00:39:41] Nate Papes: I mean I felt like we weren't just straight out of left field. I mean he was able to, like, I said a little bit and, And then he seemed to understand and then elaborated some more and said, "Hey, I think this is like where what you're asking for." And I think that was exactly what I was asking for.
[00:39:58] Gus Schissler: I think that intro could have been maybe a little cleaner. Um, Just because like with with each of these meetings and especially going in with Brian, I'd I have no idea what context any of these people have about Julia or her team or what the hell they're doing. So I think for the Brian meeting next week we should at least have, Maybe not show them the presentation for the requirements gathering, but at least like a like a single slide of like, I think that's a really good idea. This is why we're here, and this is what we're doing. And we're talking to you because we think you know what we should be doing too. Yeah,
[00:40:34] Nate Papes: I try to do that actually way too long too. Yeah, Actually I want to show them like just that, that one diagram. Well, that was there then okay. I didn't find it until like.
[00:40:44] Dan Maser: Yeah, I didn't notice that until way too late that it was a different HTML.
[00:40:47] Nate Papes: It's all good.
[00:40:48] Dan Maser: Um, yeah, Because I also don't know because none of this stuff they don't need to help with epic one at all, right? They're not helping with epic one.
[00:41:01] Nate Papes: No. I don't think so. No, no, I don't think it's even a concern there like their their concern is just like making sure like the code can continue to build and. So, yeah,
[00:41:13] Dan Maser: My follow- up was going to be then. So why do we even want to show that? Like, Why does it matter just to.
[00:41:18] Nate Papes: Just so they understand what we're trying to do? Okay. And so they because and then I want like the tribal knowledge stuff. Like there could be stuff there where like oh yeah, We did have this guy who wrote this one tool in the past that we used and he's worked with, like, you know, Julia's team, and like that has been a successful thing. Maybe you talk with that person see what kind of test deck they used. That makes sense.
[00:41:42] Dan Maser: Um, okay. That was my question.
[00:41:45] Nate Papes: That was, yeah. So that was hopefully that's that's what kind of got brought across. Um,
[00:41:53] Dan Maser: Really quickly not to pivot too much, but somehow we still have the stand up for one today. I was going to either cancel that or push it to ask if it can be at four thirty. But I also don't really know if there's anything we need.
[00:42:08] Gus Schissler: Is anyone going to show up to it? It might be nice to check in with her. I have a client meeting that I can't miss out on,
[00:42:15] Dan Maser: So and that's why I brought up switching stand up. Oh yeah, yeah. Oh great, okay. Julia had a conflict as well. Gus also has a conflict at that time. Does four thirty to four forty five. Work.
[00:43:21] Dan Maser: Alright. Um, yeah, anything else from today? I set up those usability testings interview. I also scheduled the Brian interview for Monday, not interview the Brian conversation for Monday at a time that I thought was you were both available. I just wanted to put it on his calendar because I know his calendar was starting to fill up. It's it's three thirty to four today?
[00:43:41] Gus Schissler: No, Monday. Oh no,
[00:43:43] Dan Maser: Yeah, that was he said next week.
[00:43:45] Gus Schissler: Oh right right, I thought you checked that out.
[00:43:48] Dan Maser: The Only annoying thing for usability testing was my my assumption. I feel like you're going to agree with me is that we should have Hannah test it first because she's the yeah. So so I said that Hannah is only free four to five, so I have Nick on the following next day. So we have Hannah four to five and Nickum on Thursday at eleven. Um, Anything else that we feel like is like a high priority, we can look at the folder alignment and stuff. The big, the big action items I had from us were Nate, you have this stuff. Developing the POC, Like I was going to work on like a script with you and like figure out what we can actually test with them and how we can test it.
[00:44:42] Dan Maser: But we can kind of do that. I was just going to see what their schedule's like.
[00:44:45] Gus Schissler: Yeah, after after two today, I can chat. I had said I was going to gosmithing, but well,
[00:44:52] Dan Maser: Also we can do it on Friday too. Like I am pretty flexible with it.
[00:44:55] Gus Schissler: Yeah, well, I mean, what I was going to say is Atticus the mastersmith, not Atticus. The dog is sick today, so am not okay. Going to go blacksmith with him. Okay, um So i'll be around after two. Okay, It's just a. I am currently like split focus. I am currently working on some stuff for No,
[00:45:12] Dan Maser: I know that's. I feel like i I put a lot of hours in for this this week already, so I was like, "I that's why I was like if we want to just do Friday, we can do Friday." That's tomorrow.
[00:45:22] Nate Papes: Am fully gala Like yeah, it's going to be every week.
[00:45:26] Gus Schissler: So thirty two hours a week for the Brian meeting, maybe it's worth because we can spec down or like adjust Brian's HTML generator prompt Yeah.
[00:45:38] Nate Papes: You can do that. That'd be lovely.
[00:45:40] Gus Schissler: I've just been at all the meeting transcripts that we've had about this. Yeah, like hey, Like we're talking with Brian Hampton, who's a systems architect or something making the tank language.
[00:45:51] Nate Papes: I think we should. Uh so are we going to get the transcripts that we got from or from today's meeting? Are, we going to have to ping Mahesh to get them because he had already do the recording?
[00:46:00] Gus Schissler: Oh maybe but also this you have done a good job.
[00:46:04] Nate Papes: Yeah, I should just test this and then that dude is pressed.
[00:46:08] Gus Schissler: Yeah. Because, this transcript will include both the meeting and the debrief that we just had.
[00:46:15] Dan Maser: Yes. Um, okay, so wait, yeah, we were saying polishing up the HTML. Mhm. Um,
[00:46:25] Nate Papes: Reduce to like three slides at the very most just so they understand the business function where we're doing it or.
[00:46:31] Dan Maser: What kind of it's like Do you feel like you need to present like, well And I'd say, just from your end, just figuring out what else you need. Need to learn.
[00:46:40] Nate Papes: I don't. I just need to learn how to, I just need to learn the people within the organization that, I should sync up with on like some routine cadence, that can help get me to the goal that, I need to get at. Yeah.
[00:46:57] Dan Maser: Cause besides that, it's just the Jama API, which Andrea is it Andrea on how do I pronounce her name? It's Andrea. It's Andrea. Andreea Ch okay Anders Andreea Anders, Just she's already working on that. It's investigating Wove.
[00:47:13] Gus Schissler: I haven't looked at the Woven Slack today. Did Julia mention anything about the field names that I need?
[00:47:20] Dan Maser: You just mentioned not being able to stand up.
[00:47:24] Nate Papes: I did find some stuff in their GitHub about how people are doing Woven interaction or like, what you call them, plugins. That could be interesting to look at. Yeah,
[00:47:35] Gus Schissler: Could you send me a.
[00:47:36] Dan Maser: And then there's the rectified demo video.
[00:47:43] Nate Papes: Just the way they name everything, it's like not an index of like your film repos. You have to know the organization name.
[00:47:56] Dan Maser: She Calls it search short claw.
[00:47:58] Nate Papes: I said it was like movie claw.
[00:48:02] Dan Maser: I swear she sent us a video.
[00:48:09] Dan Maser: And did I make this up? What the fuck? What happened?
[00:48:13] Gus Schissler: For some reason, Claude has started generating docx files instead of just fucking markdown.
[00:48:18] Dan Maser: What? That's super weird. Um, did this ring true with either of you guys? Did Did Andrea said she had a video of the Yeah, there it is. Okay. I just had to scroll up.
[00:48:43] Dan Maser: Josh, were you able to get access to that video? I don't know if they. The uh the rectify one.
[00:48:50] Gus Schissler: He's doing a demo next week. And I thought she just said that there was a slice too.
[00:48:55] Dan Maser: Yes, the slides. Yeah. Are the slides a video? No, you're right, I misread that okay. It's it's for the demo next week. Okay, that makes sense. Thank you.
[00:49:08] Gus Schissler: Yeah, though. I don't know if she added us to that meeting. Oh yeah, sure. Would you like to do that? Would you like me to do that?
[00:49:18] Dan Maser: Um, what's that? Make sure we're on the rectified demo next week. Um, I'll just put that on like our so stand up notes. It's Julia screenshot follow up right. Is there anything following up on? Will the API project follow up? Not screenshot follow- up.
[00:49:40] Gus Schissler: Will the but that's yeah. It is the same thing. Project follow up. Cause when you say screenshot to me at like four thirty or whatever, I'd be like, what are we talking about?
[00:49:52] Dan Maser: Um, I'm just gonna say Gus sent screenshot. Um and then Julia uh it's Andreea with the what's this guy's name? Slide deck. Um Clifton Mead Meeting invite. Defy demo. Then, Gemma access it sounds like is in progress. Access in flight.
[00:50:54] Dan Maser: Okay. Yeah, I think that's all we need to discuss. So I'll either get that async or not, but yeah, I got those two then. That the Chama API access is in flight, organizational structure meeting and usability testing is scheduled. Anything else for that for them?
[00:51:11] Dan Maser: No, I think that's fine. The only other thing that it had here was create new GitHub repo for requirements tool.
[00:51:24] Gus Schissler: Oh. Um. I'll, when I have, I'm currently focused on other things. When I have cycles to think about that, I will.
[00:51:32] Nate Papes: Yeah, they're pretty strict about that kind of thing. Well,
[00:51:36] Gus Schissler: It was mostly just the tool lives on my machine right now. There's no It's not up anywhere, even on our repo. And oh,
[00:51:45] Nate Papes: Yeah, you just want an R repo or That's what I was thinking about Okay. Yeah, so say, if you're going to do it on theirs, they got some they got some rules. Uh. Yeah, I don't care. I don't.
[00:51:53] Gus Schissler: I don't. That is not with large organizations like this, You get into a crazy amount of bureaucracy and trouble when you start thinking about building things within their environment, until someone tells me that we need to build within their environment, we're not.
[00:52:09] Dan Maser: And so if it's on our environment, they could still just access it, correct?
[00:52:13] Gus Schissler: So and that's the tricky part. I don't even know if Hannah has a GitHub account. That'll be something to ask. Um, if she does, We can always provide her access, and then she can run it locally on her computer. Use the Wobi API. Yeah. And everything should work fine.
[00:52:30] Nate Papes: Yeah, sure. She doesn't have to be on GitHub because if it's a public repo, I don't know if it's public if it's well Well, We, if it's private, she has to be on X, and then you have to make her a collaborator or like a viewer or whatever. But yeah, But, if it's public, You can just send her a zip file. And then that'll help. A zip file will be the easiest way to transfer it to them, unless their emails don't let you do that. That's sometimes enterprises.
[00:52:56] Gus Schissler: Slack is it too? Yep, I love using Slack to get her. Okay, I need to. I need to Is there, anything that we actually need to talk about right now because they have a meeting coming up?
[00:53:05] Dan Maser: Yeah, you go. I scheduled time with us that we can just yeah go get out of here. I'll get out of here too. Um, uh i I'll put you on this too Nate for Brian's thing?
[00:53:15] Nate Papes: Yeah, well this like, Slim down. I can do this thing with Brian. Just I just need a better uh, that's more cool. Sweet, cool.
[00:53:24] Gus Schissler: Okay, thank you sir.
