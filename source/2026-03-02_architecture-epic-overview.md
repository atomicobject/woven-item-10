Judah.
*00:00*

Hello again, Judah.
*00:00*

Okay.
*00:05*

Well, we're discussing the architecture overview, right?
*00:06*

Yeah.
*00:09*

Okay.
*00:12*

Let me see if we had.
*00:14*

.
*00:15*

I think I had did I write something down in the doc that me chair
*00:15*

Not really, I think.
*00:32*

Okay, what we have for this item is all down here.
*00:44*

So this one is way less defined, uh, but also smaller in scope, I would think.
*00:48*

Um
*00:55*

So what we're trying to get at is with everything that we discussed uh in the morning session around the requirements and everything, the next step for us.
*01:00*

Once we have the require requirements derived from SWRGs to SWQTs to the test cases.
*01:10*

um no the SWRDs have to be uh broken down into SCRDs, so component level requirements.
*01:21*

What's missing for this is we had like this this purple box IPA box currently SWR SWADs are
*01:30*

written towards this whole API box for us.
*01:39*

And then the next step is within this box to write requirements for these components that are in the box, in the internal product box basically.
*01:43*

And for this we need the architecture.
*01:50*

So we don't have the architecture of our own system yet.
*01:53*

And there are two aspects of this.
*01:57*

So one team
*02:00*

is trying to build the architecture that we need.
*02:02*

And that's the Tech Guild team.
*02:06*

Oh only here.
*02:15*

So we have one team that is trying to or is signed up to deliver the architecture to us so that we can start writing the lower level requirements.
*02:16*

And this is might be something that's hopefully coming soon and they might have different versions even of you know what because we have to go through some transition within the architecture that we know of.
*02:27*

And then there's solar the question of what is our current architecture?
*02:38*

I mean we have code already.
*02:42*

So um this is what this would be this project would be addressed to to
*02:44*

Can we technically take our source code that we currently have and create an architecture based on the source code?
*02:49*

um to see what we currently actually have in terms of you know where the nodes, what is connected to what, what input output basically.
*02:58*

And then ideally
*03:07*

that architecture would also be update dynamically based on whatever changes in the code on its own.
*03:09*

So that it would some sort of diagram that we would see at a minimum basically of
*03:17*

um this the current source code that we have.
*03:23*

Exactly.
*03:30*

So here I say like this is the current one
*03:31*

to show what we have.
*03:33*

This is the planned one and two is basically already covered by another team.
*03:34*

Why do I say this?
*03:42*

Pretty sure I said it somewhere in here.
*03:45*

But oh the tech guild team is covering the second point and then the current architecture is what we wanted to address with this item here.
*03:47*

Um I also started conversation because we had I learned from Mahesh, one of my team members, that we used to have something already.
*03:56*

Where we could in the codebase basically see a little diagram within the folders also
*04:05*

um that you see what's going in and out more or less and that would update automatically.
*04:13*

I was trying to investigate of where this is because the person who was owning this is not within the is in the company anymore
*04:18*

um was a staff engineer very good with architecture and general so he left so since then this seems to be not to be found anymore
*04:24*

So I went to many teams and they're all like, yeah, I know there was something, but no, I don't I don't know where it is and I don't have any documentation about it.
*04:36*

I don't know
*04:45*

So I was hoping that we either can build on top what was there, but even that I couldn't find.
*04:46*

I reached out to um this team would be Eric, I heard would be the closest.
*04:50*

Um platform team
*04:55*

And I reached out to him last week to ask that question.
*04:58*

He was also saying that he doesn't know.
*05:01*

He knows there was something but he doesn't have access to
*05:03*

uh to that stuff.
*05:07*

So yeah, and I haven't seen it myself, so it was really hard to describe what I mean.
*05:09*

But uh I think we have to start from scratch is the answer here
*05:13*

Um but I owe you you all have access to the source code already, right?
*05:18*

To an IPA, yeah.
*05:22*

Well everyone extra need at this point.
*05:24*

Okay.
*05:33*

So yeah, that is way more high level, but that's the main overview for this project.
*05:35*

It's very um short
*05:40*

In the sense of can we build some sort of diagram which shows us the architecture of the current implementation that we have?
*05:44*

Because what a this would you know lead us to later, if we have this puzzle piece implemented, then we can trace this later to you know we know what we have and what we want.
*05:53*

And then also in CI NATO, we could see if any PR would change the current status.
*06:05*

And if it does, it would have to go through a specific
*06:13*

um approval round basically through the the architecture team of saying okay this PR seems to change the note
*06:17*

structure or whatever.
*06:25*

I think you need to go through an approval first in order to do that, also to make sure that we update the the documentation and everything.
*06:26*

So that would unlock this capability as well.
*06:34*

Not only giving my team the information of what does the architecture look like right now, but also unlock the capability later for us to um have
*06:37*

Anything added to CI that we know when a PR emerges and changes the architecture that we get notified about it.
*06:48*

Nate, I don't know if you have any immediate questions.
*06:59*

I've got a few, but um
*07:03*

I mean there's there's some like nitty-gritty stuff.
*07:07*

Like what like are you using like Azure or GitHub for like the source code of this?
*07:10*

Um
*07:17*

That's like where where I'm kind of picturing like how we can trigger something, like code gets merged.
*07:18*

some CI scripts run that has to get aggregated somewhere and that's kind of like what the system is like that we need where you know you have to be pinged or something like that.
*07:27*

To then go back, look at the requirements, see how it affects the current system, and make sure it gets documented in the requirements.
*07:41*

Yeah, exactly.
*07:53*

I have like the two uh the three points here and this is the last one I think you're referring to.
*07:53*

The first one's basically taking the current internal product source code and as an input and create some sort of diagram.
*07:58*

architecture visible the second is that the diagram updates dynamically based on you know whatever is changed within the code um
*08:08*

And then the other one, every time the diagram changes, we know about it.
*08:19*

We have a new version to create, you know, to ensure visibility of all these changes
*08:24*

basically.
*08:29*

And if you have the last point integrated that would it can be integrated into CI testing, I think.
*08:30*

Um Julia were you anticipating that there
*08:39*

I know there are a few uh GitHub repos.
*08:43*

Are you anticipating that this is just a single diagram, like all those repos joined together, or a one diagram for each repo?
*08:47*

some combination of the above.
*08:55*

Yeah, I think that's something we have to think about.
*08:59*

Each repo might be enough, but
*09:01*

Um so let's say on the internal product level, ideally, I have to go through the
*09:05*

repose myself to understand what this means on the folder structure itself.
*09:12*

What you would need.
*09:17*

I haven't done that part.
*09:18*

But technically the highest level is we need an overall diagram from entire product.
*09:20*

We have to understand what this means within the current reports.
*09:26*

And then I know you you've mentioned IPA.
*09:33*

IP is internal product
*09:38*

What is IPA?
*09:40*

Uh technically if I talk Ripple, I think it's Vov and Togo.
*09:42*

Everything that is Voventogo.
*09:48*

Um is my current understanding.
*09:50*

Okay.
*09:53*

Yeah, also Brian was saying something around the config files is what they used.
*09:58*

in the past to create this, but uh yeah, I'm not sure if if how that looks like.
*10:04*

But we can definitely talk to Eric is a good point of contact.
*10:10*

And then I'm gonna add also
*10:15*

Brian Hampton is also um is that Eric Kur Kernan Kernan?
*10:21*

Yeah, it's one of them.
*10:31*

Um
*10:38*

And then Brian Hampton.
*10:40*

They both have way more knowledge there.
*10:42*

Sweet.
*10:46*

I'll pause this quick quick.
*10:46*

Yeah, so for me it's important for the team as an input that we can start writing requirements, but actually it's it's way more than this.
*10:48*

Um but this is where the ask is coming from basically because we have nothing and we should
*10:55*

get started very soon and I don't know when I get the first version as an architecture.
*11:00*

So it would be good to know what we have.
*11:06*

That's step number one and step number two is
*11:08*

I think it's actually used for for uh w much more than just you know giving us an architecture that we can write requirements based on.
*11:11*

Cool
*11:20*

Yeah, so I can also let Eric and Brian know that you might reach out um with some more questions.
*11:24*

Yeah, that would be that would be helpful.
*11:30*

Nate, I'm not sure how much you want.
*11:33*

uh you want Dan and myself to help with this or if you just want to kind of explore on your own?
*11:36*

I know it's probably we're kind of deterministic in a in a way with what we're aiming towards
*11:40*

with this thing.
*11:48*

Yeah, once I get access to start poking around, that that's gonna that that'll inform me a lot more.
*11:50*

Um, and it sounds like, well, and also like seeing an an example of the diagrams that you have generated previously, is that all completely lost or is that something that you're looking for like right now?
*11:57*

That's I haven't seen it.
*12:09*

That's what I'm looking for.
*12:10*

That's okay, that's that's what I could find.
*12:11*

And I think they you know, I just heard from some people that we used to have it in some capacity.
*12:14*

That's the part that I don't know how it looked like and
*12:20*

what we could do with it really.
*12:22*

But it was also before we merged many other repo together in the end.
*12:24*

So it might not no work in that
*12:29*

capacity anymore anyways.
*12:32*

Um so that's why I might not be able to even see it.
*12:34*

Yeah.
*12:37*

Yeah, we have so much legacy of you know
*12:39*

different teams coming together, different companies merging together all the time, that it's really hard to keep things maintained.
*12:43*

But Robuntogo is like at least only one record that we recently pulled together out of many.
*12:54*

So it's that's why it more or less represents uh antenna products.
*13:00*

as a whole, finally.
*13:05*

Cool.
*13:10*

Okay.
*13:10*

So yeah, that's good.
*13:11*

Awesome.
*13:13*

Any other questions?
*13:13*

Or I think it's something that enough for you to start running with it.
*13:14*

Trying to think if I do have any last questions.
*13:23*

Is there at some point I know we're using this architecture diagram will be super
*13:26*

super helpful for building at the SCRD level um not so much the SWRD or the SBRD
*13:32*

stuff that we were talking about before.
*13:42*

Do you see these things eventually connecting to each other in any in any way?
*13:44*

Is that something we should keep an eye out for?
*13:49*

Or is it like limited usefulness?
*13:51*

because they are different levels.
*13:54*

Um I think the it depends on how far we get with like
*13:59*

version controls and change management.
*14:04*

Um this is where I see the connection.
*14:06*

Like where do we store the information?
*14:09*

Um, I mean it could also live in JAMA, the information about the architecture, but that's something we can see w yeah, depending on where this information lives in the end, it might have some con connection, yeah.
*14:12*

Yeah.
*14:27*

Because it's totally fine if it lives in Git.
*14:29*

And then we somehow link it to Java in terms of you know versioning it over there or you know that's
*14:32*

Okay.
*14:38*

Yeah.
*14:39*

You see how we do this.
*14:40*

Because I know from Tech Guild I'm pretty sure we get the architecture in form of lucid charts.
*14:41*

Then we also have to figure out how we do this in terms of versioning.
*14:47*

If they yeah, make sure that there is some changelog versioning going on.
*14:52*

I'm not sure if we transfer this into JAMA, this is all still open.
*14:57*

Um and then as a I assume like experimenting
*15:03*

smaller will be helpful before launching into the the larger diagram.
*15:11*

Do you know if there is a team somewhere that has
*15:16*

a like a pretty good architecture diagram that we can use as like a end goal and then we could Nate I'm just thinking about like how do we like
*15:20*

Test or try.
*15:30*

Yeah, it's a good point.
*15:35*

I know we had one.
*15:36*

Let me I'm I'm gonna have to dig somewhere to see if uh if
*15:37*

find it there was one but no one knows how accurate it is at this point.
*15:41*

We don't actually know what we have so um and then also Brian
*15:47*

Um IT Brian Hampton uh is part of the tech guild team.
*15:52*

So doing point number two I have in this list.
*15:56*

Um so he might have already an example of you know how the current
*16:01*

uh draft look like or what they had before.
*16:07*

Cool.
*16:16*

But if I find the other one, I'm going to add it in the doc as an example.
*16:18*

Awesome.
*16:22*

And then again, similar question to what I asked earlier.
*16:24*

Primary user for this is really
*16:28*

the product delivery team it sounds like and then maybe opportunistically development teams checking or viewing um their own architecture
*16:30*

So yeah, it starts with my team, I think because we are part of the definition at the beginning.
*16:43*

of the requirements um but the architecture itself is owned by the tech guild team which is brian hampton and philips eye
*16:48*

Um so they it own the the architecture definition itself.
*16:57*

So it's only also their team.
*17:02*

And then once they get to the right side of the V basically, um the testing part, then it's also will be
*17:04*

within release offering out we trigger um this within a in the PR review.
*17:10*

Gotcha.
*17:18*

That makes sense to me.
*17:20*

Cool.
*17:24*

Um No other questions are immediately coming up.
*17:28*

Okay.
*17:37*

Okay, I'm still trying to see if I can find an architecture.
*17:40*

diagram example.
*17:44*

Otherwise, yeah, feel free to reach out to Brian and Eric as well if you want to interview them or get more information.
*17:46*

I'm gonna let them know
*17:54*

Cool.
*17:56*

Um but yeah.
*17:57*

Otherwise just yeah Slack.
*17:59*

We have a channel.
*18:02*

Yeah, I think especially since I know we're pretty much almost at the finish line
*18:04*

with Nate you getting your laptop, I think.
*18:09*

Yeah.
*18:13*

Yeah.
*18:13*

I think I think this week at some point um I should have it.
*18:13*

Sweet.
*18:19*

Um in the meantime, similar to picking
*18:19*

picking up speed with the with uh the first epic um probably running those user interviews with Brian
*18:23*

Ryan and Eric would be helpful.
*18:31*

Um just to establish some baseline context in that way when you do get access to the ground running.
*18:33*

Awesome.
*18:42*

Yeah, we can rope them in, I think.
*18:43*

That makes a ton of sense, Gus.
*18:45*

I like that idea.
*18:46*

Yeah.
*18:48*

Cool.
*18:48*

Okay.
*18:50*

Thanks for putting all this together for us, Julie.
*18:51*

Yeah, it's helped me out.
*18:53*

Awesome.
*18:56*

Hook it up.
*18:59*

Okay.
*19:00*

Thank you everyone.
*19:01*

Yeah, thank you.
*19:02*

Thank you.
*19:03*

Bye, see soon.
*19:04*

