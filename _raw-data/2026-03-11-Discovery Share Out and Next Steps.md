**Dan Maser**: Nice. I love it. How has your week been so far?
*00:00*

**Andrea Zotelli**: Good. It's raining a lot here. Oh, you guys are here too. You know, it's not new for you.
*00:00*

**Gus Schissler**: Mhm.
*00:00*

**Dan Maser**: We were in Arizona — gosh, two weeks ago now, Gus. So the weather's been… yeah, because you're right across the river, right?
*00:00*

**Gus Schissler**: Something like that.
*00:00*

**Dan Maser**: It's been beautiful weather out here.
*00:51*

**Andrea Zotelli**: Nice. Yeah, I'm here in the office today. Did you guys also get the crazy rain last night?
*00:51*

**Dan Maser**: Oh.
*00:51*

**Andrea Zotelli**: We did — crazy rain here and there. I have to look into my basement in Windsor because the other day I got some water in there. I think I need to do some repairs. Not good.
*00:51*

**Gus Schissler**: Yeah. The dogs did not sleep well last night — we have two dogs. So by extension, I did not sleep well last night. But I can take a nap later today, I'll be fine.
*00:51*

**Andrea Zotelli**: Hello, Julia.
*00:51*

**Julia P**: Hello. How's it going?
*00:51*

**Andrea Zotelli**: Good. Yes, you're fine.
*00:51*

**Julia P**: Thank you.
*00:51*

**Julia P**: Okay. Does it work now?
*00:51*

**Andrea Zotelli**: Oh, this is better. Now I can see you.
*00:51*

**Dan Maser**: All right. Well, I can start us off. Just to re-center us: last time we talked, Julia, before you had some time off, we wanted to present our discovery work, show where we are and the next steps we have, and make sure we're aligned. Quick spoiler: we were able to do some cursory Rectify research as well, so this also includes Rectify work.
*01:48*

**Julia P**: Okay, next.
*01:48*

**Dan Maser**: Gus or Nate, anything you'd add before we get started?
*01:48*

**Gus Schissler**: I just wanted to mention that you folks have done an excellent job presenting the problem to us previously. So a lot of this will probably be us repeating back to you what you already told us. But we did want to surface some different insights we got from the four stakeholder interviews we've run over the last two weeks.
*02:50*

**Andrea Zotelli**: Good.
*02:50*

**Julia P**: Sounds good.
*02:50*

**Dan Maser**: And to add to that, we'll send this to you as a PDF later — feel free to do whatever you'd like with it.
*02:50*

**Julia P**: Nice.
*02:50*

**Dan Maser**: Great. So, starting at the problem — and as Gus mentioned, you all scoped this out really well — there are really two separate aspects. We were calling one "top-down requirements": requirements from Toyota, via the Customer Application liaison through product, being scattered across poorly structured documents and changing without any kind of notification. That was confirmed to be the core problem for this effort.
*02:50*

**Dan Maser**: We also wanted to document the "bottom-up" problem, which is very understandably a problem too. But we really wanted to focus on that top-down requirements challenge. In terms of the requirements themselves — as you've told us and as we've now observed — they don't live in a single spot today. There's no single source of truth. Some requirements are in Git repositories, some are already in Jama. They're in PRDs in Google Docs, in Confluence, on spreadsheets, and there's also a whole trove of tribal knowledge. And so you have this idea of consolidating them all into Jama as a more centralized location, which makes a ton of sense. In terms of scale — there are hundreds of requirements across many different functional areas, all being handled manually today. Lane change alone has 600-plus SWRDs.
*03:54*

**Dan Maser**: What your team is doing is finding, reading, interpreting, and entering requirements into Jama — manually tracking changes, creating test cases, and updating them quarter by quarter. If there's anything here that doesn't ring true or that you'd like changed, please don't hesitate to say so. This was a great quote from Hannah — she meant it as hyperbole, but we thought it was really fitting. Before we even started the interview, when we asked her to walk us through the process, she said: *"All I do is copy things into Jama."* It was telling — it shows just how much of her work is this manual ingestion. As a quick summary slide, from the four interviews we conducted, here are a few snapshots.
*05:01*

**Julia P**: Good morning.
*05:01*

**Dan Maser**: So: Hannah — confirmed by you all as the primary user with the most acute pain — walking us through creating Jama requirements and test cases. Nick, who's in another lane department and has a ton of pain specifically with manual change detection and creating SWRDs. Andrea, talking with us about the backlog, and specifically the TBD issue with requirements. And Julia, walking us through the overall process: how Customer Application works with product, the new structure, how that might help, and queuing us in on the new PRD process that Hannah can guide us through. Again, this is mostly a recap. So, zeroing in on scope: for this pilot we wanted to focus on one aspect of the problem. Oh — I just accidentally made this full screen so I can't see my screen.
*06:01*

**Dan Maser**: Here we go. In terms of what our system must accomplish, we zeroed in on three areas: (1) **Intake and Consolidation** — gathering requirements from scattered sources and structuring them into Jama with full context and version tracking; (2) **Change Detection and Notification** — detecting when Toyota updates requirements and alerting systems engineers before the impact is missed. As Nick noted, even where a change might not technically affect the current quarter's PRD, that context is still incredibly helpful for knowing how to approach test cases or flag issues in the version itself; and (3) **Test Case Generation** — auto-generating SWQTs from approved requirements to reduce manual drafting and significantly cut down time.
*07:22*

**Dan Maser**: Quickly, before we move on: here's a summary of what's in scope for this pilot phase versus out of scope. In scope: structured Jama requirements entry from SWRD content; gated test case generation via LLM — "gated" meaning we want approval before auto-generating, as Julia mentioned, since it's not always necessary; Jama source linkage and version history; lane change SWRDs from the Git repository we tracked down; automated SWRD discovery and batch import from PRD; and change notification and detection for changing versions. Out of scope: focusing on SWRDs only for now; focusing on lane change (which is all in Git, which is great); integration with upstream systems; and the bottom-up requirements.
*08:36*

**Dan Maser**: Any questions? I want to get into our MVP solution, but any questions or concerns first?
*09:52*

**Julia P**: No, it looks good to me.
*09:52*

**Dan Maser**: Great. So for the MVP solution, what we're really looking to show you — and hoping to get alignment on — is automating the pipeline from Git-based SWRDs into structured Jama entries, with change detection and gated test case generation. Meaning: if it makes sense for the systems engineer to say "this should be a test case," we can create one automatically. A quick insight: it was really interesting talking to Hannah because she's already using a lot of AI prompting and has created her own scripts to help the process. She had a couple of great quotes. First: *"A year ago, the LLM got me about 70% of the way there..."*
*09:52*

**Dan Maser**: *"...now WOVI is getting me about 90% of the way there."* And then: *"I didn't type all this by hand — it's not 2019 anymore."* It's great because it shows that WOVI can get these to 90% effectiveness, with her reviewing and curating the output. Less manual writing, more reviewing. Our thought: let's build on top of that, because there's already validation that this can and should be done. Just some alignment on constraints, similar to what's out of scope but in terms of the solution: working with Customer Application is out of scope in terms of authorship — issues can be highlighted, but Woven isn't in the business of fixing them at the source. The quality of what Customer Application writes is outside Woven's control. That's a lot of why you're bringing us in — to highlight bad quality — but pushing back at the authorship level is out of scope for now.
*11:01*

**Dan Maser**: Similarly, the PRD process that you're in the process of creating — this is not about redesigning that process or how it's handed off. We're operating on the assumption that the process is staying as-is and we'll work within that system. Teams won't move their docs — there are established practices for where requirements live, and we'll work with that: finding them at the source and pulling them into Jama. And finally: the process is still being defined — whether it's the CRB process, the Jama organization structure, whatever. We're working with a slightly moving target, which we understand. That's both good, in that we can hopefully help shape it, and tricky, in that while things are changing, if we have to dive into certain codebases or folder structures, we're well aware we'll need those things defined before we can launch this in the most automated way.
*12:13*

**Dan Maser**: So that said, our solution — and you've already seen this: you're probably wondering what System 1, System 2, System 3 are. We wanted to differentiate this three-part architecture and present it roughly in order of priority. System 1: requirements creation. Once it has the raw SWRD content, it takes that content and structures it into Jama-ready entries, plus gated test case drafting. Based on the access we currently have — or rather the lack of access — Gus is going to show off the proof of concept we already have without any access dependencies. We have this as System 1 because everything else builds on top of it. System 2 — I'll show it on a map in a second — is the actual gathering of requirements.
*13:18*

**Dan Maser**: That's discovering all the in-scope SWRDs from the quarterly PRD and ideally batch importing them, replacing the manual one-by-one hunt across Git and Google Docs. And then System 3 is change management: the problem of what happens when something changes and how we can alert people. Each system is independently useful. System 1 we have working today as a proof of concept. As we get access, it'll get more powerful, and Systems 2 and 3 will unlock progressively as the tooling gets access to Git, Google Drive, and Jama's API.
*14:27*

**Julia P**: Okay.
*15:32*

**Dan Maser**: This is the input/output map. I hope it's large enough to see. Julia, by all means, zoom in. Reading from left to right — the top blue is the user input. The first input is a link to the Google Doc for the PRD. If we get access to those PRDs, we could have a PRD fetcher that pulls the SWRDs from the PRD. From there, the input would be the link from Git to the specific SWRDs. The red access point indicates the Git access we're still working on.
*15:32*

**Dan Maser**: From there, this is System 2 — the gatherer — collecting all the requirements. That feeds into System 1: once you have access to the content within the SWRDs, that's where requirements generation happens. The output of the requirements generator depends on the access level. Right now, without any access, it can translate requirements from Japanese to English, reformat them, and display them so someone can manually copy and paste them into Jama. That's not ideal — what's ideal is getting Jama API access so we can automatically post into a specific Jama folder, or, even better, if we know the folder structure, automatically post into the correct Jama folders.
*16:45*

**Dan Maser**: I hope this diagram is making sense — we wanted to chart the inputs, the access blockers, and then based on those, the output options. There's also a requirement quality identifier: Gus was working on flagging TBDs and other potential issues. And the test generator — if the user feels a requirement is ready for a test, it can generate tests. The output destination again depends on API access and the known folder structure: either prompt the user to paste into Jama manually, or directly post into Jama in the correct spot. Gus is going to break these down individually. Gus, do you want to take over, and we can take questions afterward?
*18:07*

**Gus Schissler**: Yeah. Let's do that. I'll take over the screen share.
*19:17*

**Dan Maser**: Oh, sweet.
*19:17*

**Julia P**: That's a pretty neat presentation. What tool did you use to create it?
*19:17*

**Dan Maser**: We literally just made this in HTML.
*19:17*

**Julia P**: Really? Okay.
*19:17*

**Gus Schissler**: Yeah, my screen's sharing. Cool. So Dan talked about this at a high level with the three different systems. We've got some breakdowns of each. This is a bit of a reiteration, but for the manual process we have today: pasting, reviewing, and then copying what makes sense into Jama. We can fine-tune what this experience looks like — and this is also what I'll be demoing today. Then with additional access or structure, we can automate that copy-and-paste process.
*19:17*

**Gus Schissler**: We'll be able to do that from the requirements generation process. System 2 is around automated gathering. Right now we can manually paste content from the documentation layer into the tool. In the future, if the tool has access to the markdown files in Git, we could lift those directly — or if it can access the presentation layer, lift the content from there. There could also be a batching function, similar to what Dan described. I'm going to go off-script and just demo the requirements generator. What I'll be showing: I know WOVI has an API we can create a project for, but we have some open questions around that project setup. What I'll show is using test requirements I asked WOVI to create.
*20:27*

**Gus Schissler**: I'm not actually posting real Woven data to Anthropic — Atomic provides us with our own API keys. So this is functional tooling using test information. I'll copy and paste in a test requirement. It follows a lot of the same formatting as the actual documentation layer, which is based on a GitHub markdown repository — things like reasons, descriptions, and specific specifications. What Hannah described doing is manually copying some of these and pasting them into Jama, or maybe cleaning them up first. We've taken her description of that process and created a structured prompt to ingest this data and create a Jama requirement from it. So I'm feeding the test information and the prompt in, and what I'll get back is a description of what this requirement is and why it's important.
*21:38*

**Gus Schissler**: Just a bit of context so the user doesn't have to read through it. The test requirement is: "Vehicle steering commands produce smooth, comfortable lateral motion that keeps the car properly centered in the lane." And the reason it exists: to prevent driver discomfort from lateral deviation and sudden steering movements. This is the kind of light context that Nick and Hannah had to hunt and search for in a URD or other documentation. Below that, the structured field-by-field breakdown that Hannah currently copies into Jama one by one. Instead of having to hunt and peck for each field, she can just go through and copy from here. I have read access to Jama but not write access — but if I were demoing creating a new requirement, I'd create a new SWRD, then paste in the title, description, and rationale from what the tool has pulled out.
*23:02*

**Gus Schissler**: There are a few things to clarify with Hannah, Julia, and Andrea: what exactly do we want going into Jama? Just the English translation? English and Japanese both? Do we want to summarize, or a carbon copy of all the content? All stuff we can fine-tune. This is automating what is currently Hannah's process of copying content, pasting it into WOVI, finding her prompt, copying that in, pasting it back, and then loading the result into Jama.
*24:08*

**Julia P**: So this takes in the current requirement and puts it into a new structure for us, basically?
*24:08*

**Gus Schissler**: Correct. Right now this is that copy-and-paste flow we talked about. But once the tool gets Jama API access, we already have this structure set up. I haven't dug too deep into the Jama API yet, but I assume we'd be able to pipe these fields into the named fields within a Jama requirement — so maybe it's automatic, or maybe there's a "Send to Jama" button. And like Dan was saying, we know the requirements structure in Jama is still in flux around where things should go hierarchically. Once we have that settled with you folks, we can follow along that structure so we're putting the generated requirements in the correct places.
*25:19*

**Julia P**: Yeah. So I'm somewhat indifferent. Andrea, what do you think about the structure itself? My assumption is it's best to have the original requirement copied as-is into Jama — in the structure we need — so that we can easily track changes and know we have the exact item in Jama. But what you have here would be helpful for us to build our own requirement that's linked to the actual SWRD, giving context on how we interpret the SWRD for our product. The SWRDs aren't necessarily written for our product or our block, so we could use this to say "here's how IPA Shell interprets this" and write our own Jama item — but the SWRD as-is should also be in Jama so we can link it easily.
*26:22*

**Andrea Zotelli**: Yeah. The way it's currently written in GitHub, right? The true copy — we should have it in Jama including the Japanese, right?
*26:22*

**Julia P**: Yeah, yeah.
*26:22*

**Gus Schissler**: Got it. Yeah, and that'll make it really easy to compare versions. We'll talk about that when we cover the change monitoring solution — just surfacing what's a substantial change versus, say, a corrected misspelling.
*27:32*

**Julia P**: Yeah. Good point. That's exactly what I have in mind. If we see a change, we can go in and ask: does this change how we interpret this requirement for our product? If it's a no, we close it — "seen it, thank you for notifying" — and move on. If it does affect our interpretation, then we know we have to update what we wrote about this requirement and the associated test cases.
*27:32*

**Dan Maser**: Julia, just to get some clarity — I think what you said totally makes sense: having the original SWRD, but also having that additional context. Are you thinking that would be a separate Jama item, linked to the original source?
*28:24*

**Julia P**: Yeah, I think it would be its own item, linked to the original source.
*28:24*

**Gus Schissler**: Okay. And what we can do is work with you all on developing what that structure in Jama should look like — the hierarchy — and making sure those links are correctly applied. Jama does have that tooling built in for associating relationships between different items. And Hannah also uses WOVI to generate tests based on requirements. What this does when I hit "Generate Tests" is feed the raw requirement along with Hannah's prompt for generating tests, and it'll show me a series of test candidates.
*28:24*

**Gus Schissler**: Again, just skipping a few manual steps that Hannah does today.
*29:42*

**Julia P**: Nice. Just to confirm — this is through the Anthropic API, not WOVI, correct?
*29:42*

**Gus Schissler**: Correct. That's why I'm using test cases — I'm not posting sensitive Woven information to Anthropic. These are spoofed, fake requirements.
*29:42*

**Julia P**: Okay. But this doesn't mean we need to have it within WOVI's API, right? Because of...
*29:42*

**Gus Schissler**: That's actually the angle we're going for. I know WOVI allows pass-through API requests — the same kind of requests I'm sending to Anthropic right now can be routed through WOVI.
*29:42*

**Julia P**: Okay.
*29:42*

**Gus Schissler**: And WOVI also has access to GitHub, Slack... so there are probably some tooling access bits we can leverage along the way. We'll see if this generates — if it doesn't, I have a screenshot. It was working this morning, but it's a demo, so things usually go wrong.
*30:46*

**Julia P**: Yeah, we know how that is.
*30:46*

**Gus Schissler**: Okay. So we've talked about the requirements generation piece, and I think we've already answered some of the open questions: is it just copy-and-paste, or is there some intelligent transcription or translation happening? It sounds like it could be both. If we want a direct copy-paste, we most likely wouldn't even need an agent or LLM — if we know the expected structure from the markdown files, we could scrape that content pretty easily. And based on what I've seen in the GitHub we've gotten access to, where the lane change requirements are stored, they're pretty consistent throughout. I think they even have some testing set up to enforce that structure.
*30:46*

**Julia P**: Nice. Yeah.
*31:49*

**Gus Schissler**: And beyond this: we can explore whether we even need a front end, or whether there's other tooling at Woven we can plug into. I was poking around in WOVI, and I know Glean allows users to create agents — you give it inputs, it works on things and provides outputs, using all the same context WOVI has. So maybe instead of a front end that Hannah or Nick visits and pastes things into, this could be an agent they invoke through WOVI — and it generates the same outputs, maybe even calling the Jama API as well.
*31:49*

**Julia P**: It depends on what the front end does. If you only go to one front end, that would be totally fine. Having an agent within WOVI is also fine — I'd defer this to the team actually doing these steps to decide. I honestly don't have a strong preference.
*32:58*

**Gus Schissler**: Cool. And we haven't shown any of this to Hannah yet — we wanted to show you folks first. But I'm hoping she'll be excited by it.
*32:58*

**Julia P**: Oh, 100%.
*32:58*

**Gus Schissler**: We'll make sure we get to these open questions over the next week or so. I wanted to talk briefly about the automated gathering piece. Right now we're just pasting the text directly. If WOVI doesn't have GitHub access directly — though I was reading through the docs and the GitHub is synced with Jama access, so read access to Jama should provide read access to the documentation website as well.
*33:50*

**Julia P**: Okay.
*33:50*

**Gus Schissler**: So there could be an option there. The open question is: who do we talk to about adding new sources to WOVI? Is that possible?
*33:50*

**Julia P**: That's a good question. I'll have to find that out — I have no idea if it's within the scope of whoever's owning WOVI. Yeah.
*34:54*

**Gus Schissler**: And beyond that — we know requirements are coming through PRDs. I think I could ask WOVI right now to grab all the SWRDs from the last quarter's lane change PRD and just give me links to the documentation website. I haven't tested that yet, but I think I can. And that's another example of: once we have Git access or documentation access, we can start building that chain — instead of doing things one by one, how do we get all the PRD SWRDs into Jama for the quarter?
*34:54*

**Andrea Zotelli**: So if I wanted to start testing now with some real requirements, we can't do that yet, right? Because it's not even...
*34:54*

**Gus Schissler**: That's correct. So what I'd ask — Julia, this might be another thing you can look into — is the WOVI API project onboarding. It's pretty self-guided, but I got to a screen asking for line of business and project billing code and a spending limit, since these APIs have costs associated. They wouldn't be big costs — I think I've spent about a dollar so far. But if we get that access set up: WOVI is approved through L4, and our requirements are much less restrictive than L4 in terms of data classification. Atomic could host this on Vercel very easily and give you a URL, and then everyone would have access to drop in their own API key.
*36:03*

**Gus Schissler**: And then, Andrea, you'd be able to test with actual real requirements.
*37:05*

**Andrea Zotelli**: Yeah, because I was going to continue some work on creating SWQTs from SWRDs. It would be nice if we could at least test and see what results we're getting with real SWRD information.
*37:05*

**Gus Schissler**: I mostly just wanted to show that the SWQT generation does work — I had it working earlier.
*37:05*

**Andrea Zotelli**: Yeah, it didn't work at first. Yeah.
*37:05*

**Julia P**: So what do you need to get access to WOVI? You need to answer those questions about line of business?
*37:05*

**Gus Schissler**: Correct. I can send you a screenshot of that form.
*38:07*

**Julia P**: Yeah, yeah. Let me make sure we can answer it. Line of business is clear. The other one is basically the spending limit. Oh, great.
*38:07*

**Gus Schissler**: It's like: project name and slug I'm fine with, but project cost center, project line of business — stuff like that.
*38:07*

**Julia P**: Yeah. Spending limit.
*38:07*

**Gus Schissler**: I'll screenshot this right now and send it to you after the meeting.
*38:07*

**Julia P**: Yep. Yeah. The product spending limit per month is optional, so that's not blocking. And as for the model — do you know what you'd use, or do you need more information there?
*38:07*

**Gus Schissler**: I tend to use Anthropic. All the models available are the ones you'd select from what's available through WOVI.
*38:07*

**Julia P**: You can't choose outside of those?
*38:50*

**Gus Schissler**: Yeah, so I would default to probably Sonnet — that's what I've been building these proofs of concept with.
*38:50*

**Julia P**: Okay. Then I'll give you the line of business and the cost center.
*38:50*

**Gus Schissler**: Project cost center — and it did work!
*38:50*

**Dan Maser**: It worked.
*38:50*

**Andrea Zotelli**: See, just because we weren't looking.
*38:50*

**Gus Schissler**: Sweet. So we can clean up this format too — right now it's just the content you can copy and drop into Jama, but it gives you a test name following the format that Hannah's been setting up. I know Hannah has that Google Doc with the prompt, and we're using that as the input for getting things back from the model. So we get things like preconditions, postconditions, edge cases — that format.
*38:50*

**Gus Schissler**: You can see there were five test cases. Hannah said she likes at least one per SWRD, but there could be more. We still want to keep the human in the loop — we want someone to read through these and note if they make sense.
*39:49*

**Julia P**: Yeah, for sure. Yeah. I think we're definitely in a state of improving the prompt for some time, so that we can just trust it and move on.
*39:49*

**Andrea Zotelli**: Yeah.
*39:49*

**Gus Schissler**: And then the last bit I want to make sure we get to. We already covered how to get access to PRDs, Git, and Google Drive, and whether WOVI has access to Git — I think that's a no. I wanted to talk quickly about the change management piece. It's still up in the air whether we need to build this ourselves or if it could be covered by Rectify.
*39:49*

**Gus Schissler**: We were able to do some digging and research. It'd be easy to imagine how our system could diff things between what's in Jama and the source coming from GitHub — I could imagine a system that does that pretty easily, especially if we're directly copying the text from the requirement. But based on my research, Rectify has some things it does and some it doesn't. A big one: it doesn't create content. Based on my research — and I'd love to get a demo to confirm — if we relied solely on Rectify, someone would still have to go through and create the requirements in Jama. Maybe that's something our tool fills. But when things are already created, Rectify can link them: being able to say "this Jama requirement maps to this SWRD."
*40:46*

**Gus Schissler**: I don't know the full depth of what Rectify can do, but I assume it can tell when content changes. I think it uses URLs, and the URLs for these requirements all have version numbers in them. So we'd be able to surface: "this version number updated for this SWRD and this Jama requirement hasn't been updated yet." Rectify, I believe, has tools for suspicious link detection and change tracking, plus a dashboard, notifications, and digests. So our current thinking is that the ingestion and generation will live in whatever tool we build, and then our tool can interface with Rectify — as we create new Jama requirements, we link them back to those SWRDs, and then use Rectify as the single source of change management truth. But a lot of that's up in the air, and I know folks are still exploring whether to bring Rectify in at all.
*41:52*

**Gus Schissler**: We could go either way and we don't have to make this decision now. We can start building the Jama generation and automated gathering pieces, and when we get to change management — maybe in a few weeks, maybe a month — there will be more movement on Rectify and we'll know which direction to go.
*43:03*

**Julia P**: Yeah, I agree. There's also a workshop happening this week on requirements — let's see what comes out of that. I don't know if it's tool-related, but requirements might be moved around as well. Okay — I didn't know this. Really good to know about Rectify, because it's actually made for traceability between requirements and test cases. Does it also solve the problem of knowing the pass/fail status of test cases?
*43:03*

**Gus Schissler**: I don't know — I wasn't able to find that depth of information. From what I understood, Rectify was built primarily for the traceability piece: connecting things from different systems. I don't know if it has anything baked in for pass/fail status.
*44:05*

**Andrea Zotelli**: Yeah, from what I talked to Clifton about, I don't think it does that part. He said we could do it with some APIs, but it would be extra work beyond Rectify. He also said we'd need to know where the test results are stored so we could make the connections through Rectify.
*44:05*

**Julia P**: Okay. Yeah, this would be the case for any tool we use, because that's the other question we have: how do we close the gap? We've had some POCs with other companies, and our own ideas as well, but it means we'd need another tool in the end. So: requirements, test cases, actual test results — that part isn't fully figured out yet.
*44:05*

**Dan Maser**: Wow.
*44:59*

**Julia P**: But I'm thinking: if Rectify could technically handle that part, that would be another argument to get on the train with Rectify — especially if it resolves the problem of linking requirements to test results, which we have anyway. Maybe the test results are linked to many different sources, since we have different test modalities. But...
*44:59*

**Gus Schissler**: Yeah — that was actually one of Hannah's magic wand wishes. If she could wave a magic wand: "We've got the requirements, we've got the SWQTs, we've got the unit tests, and I can trace all the way back and forth — including statuses."
*44:59*

**Julia P**: Exactly. That's the whole overview we're trying to create.
*45:57*

**Dan Maser**: Yep.
*45:57*

**Julia P**: Not only "do we have it implemented and all the items in Jama" — it's also "how are we performing on this?"
*45:57*

**Gus Schissler**: Yeah, cool. So we've got open questions around connecting to WOVI and potentially getting WOVI access to that documentation layer. All of those are kind of in between us and building the requirements gathering piece of the tool. What we can do in the meantime is run through a similar demo with Hannah and maybe Nick as well, just to get some initial impressions: is this taking too much away from them, or does it fit their needs?
*45:57*

**Gus Schissler**: And from there we can iterate a bit. The other thing that would be good to explore is the Jama API. We may need either a Jama administrator or elevated permissions. I know Jama does have an API — I just need to understand what's available, what's configurable, what's not.
*47:04*

**Julia P**: Andrea, is there something you think you can do with the access you have in Jama?
*47:04*

**Andrea Zotelli**: Do you give administrator? No — if you need that kind of elevated access, it's a Stargate support request. I don't think just with write access you'd be able to do that.
*47:04*

**Julia P**: I agree.
*47:04*

**Gus Schissler**: It could even be that we just store the API key somewhere safely — we don't necessarily need organizational admin access. If someone can generate an API key with the correct scopes (creating or reading things in Jama), I can just follow the documentation and bake that into the tool. The real blocker is just the Jama API key.
*47:04*

**Andrea Zotelli**: I have to ask Stargate support, because it has to go through them.
*48:11*

**Julia P**: Okay. So that's for you to figure out what we need in Jama, right?
*48:11*

**Andrea Zotelli**: Yeah, I have to reach out to them. Unfortunately, every time I put in a request it goes to Japan, so I have to wait until the next day for a response.
*48:11*

**Dan Maser**: Great.
*48:11*

**Gus Schissler**: And we do have other things we can work on in the meantime — feasibility tests and additional work with Hannah and Nick. We're not immediately blocked on the API. Between the two next-step problems — adding a new source to WOVI versus getting Jama API access — I think the Jama API access will be a little easier and involve fewer people, which is why it's a bit higher on our list.
*48:11*

**Gus Schissler**: And then finally — I think Atomic has questions about what Rectify does, and it sounds like you folks probably have some questions too. If you wanted to schedule a Rectify demo and we could tag along, that would be great. Or if you'd rather we reach out and try to find who to contact for a demo, we're happy to help with that too.
*49:12*

**Gus Schissler**: I just don't know what the status of Rectify is at this point.
*50:32*

**Andrea Zotelli**: Clifton had a demo that was supposed to happen this week or maybe next week —
*50:32*

**Julia P**: Do we have it on the calendar yet?
*50:32*

**Andrea Zotelli**: I can reach out to him. I don't see it on our calendar yet. He said he'd set it up for this week or next week. And yesterday I had a meeting with the SNQ team and they also mentioned this demo is around the corner, but it's not on the calendar yet. The problem is: Clifton said I could install Rectify on my Windows machine, but he's trying to get the license from the Japan team. I can't install it yet because I don't have the license.
*50:32*

**Andrea Zotelli**: I can follow up with him and see if he has a date for when this demo will happen.
*51:31*

**Gus Schissler**: Okay.
*51:31*

**Julia P**: Okay. And when you have it on the calendar, can you make sure everyone is included? Because if it happens next week when I'm out —
*51:31*

**Andrea Zotelli**: Yeah, sure. We're going to record it.
*51:31*

**Julia P**: Okay.
*51:31*

**Gus Schissler**: Okay. And another thing: I know it's Wednesday. Julia, you're out next week, but maybe we can meet with Andrea and Hannah about what that destination folder structure might look like in Jama.
*51:31*

**Julia P**: Yeah.
*51:31*

**Gus Schissler**: It sounds like we could do some divergent and convergent thinking here — you seemed excited about both the plain-English translation of a requirement and the raw copy. It's probably just some relationships to set up. Once we have that structure and Jama API access, we can map to it pretty easily.
*51:31*

**Andrea Zotelli**: Yeah. I've made a lot of changes to the structure and put them in the documents. I'm going to send it to Julia and Hannah to review. But we can certainly sit down next week and discuss the structure as it currently stands.
*52:40*

**Dan Maser**: Regarding the structure — that's why when you reached out yesterday, I said we could talk about it later. We don't want to rush your structure creation. Ideally we're setting this up so the tool can utilize whatever structure you land on, and if the structure changes, we can handle that. But it would be really great if the tool automatically places things in the correct spot, rather than Hannah, Nick, or you having to manually click and drag.
*52:40*

**Gus Schissler**: Yeah. And now is probably a good time to mention: based on everything we've learned, this tool can end up being pretty small — like a scalpel, very surgical, fixing very specific problems. But Julia, like you mentioned, there's a larger problem space here that maybe this tool eventually addresses, or maybe it plugs into other tooling. We want to keep it small to start.
*52:40*

**Julia P**: Okay, sounds good. So on my action item list: I'll see if I can find a DRI for WOVI to see if we can get access or add Git — specifically the repository we have for the requirements — as an access point. And Gus, you're going to send me screenshots of the WOVI API setup form. Then the Rectify demo — Andrea, you'll see if that happens and make sure everyone is added to it. And then also help with the Jama API.
*53:31*

**Julia P**: Those were the main action items. Correct.
*54:42*

**Gus Schissler**: Yeah. And from our end, we'll talk with Hannah and Nick, do some demos, and if we can get everything hooked up to the WOVI project, Atomic could host this pretty easily on Vercel. Then we can let you folks play with it after a revision or two.
*54:42*

**Julia P**: Okay. That sounds good.
*54:42*

**Gus Schissler**: It might be soon to ask, but: if this tool does have a hosted front end somewhere, do you know who we'd talk to about standing up a small internal tool — a URL hosted somewhere inside the Woven ecosystem?
*54:42*

**Julia P**: I have no idea. I can ask...
*54:42*

**Gus Schissler**: We'll be talking with Brian —
*55:46*

**Andrea Zotelli**: Index support. Oh —
*55:46*

**Gus Schissler**: — we're talking with him this afternoon about the architecture diagram work. So we can probably just mention it then and see if he has thoughts.
*55:46*

**Andrea Zotelli**: Brian Hampton. Yeah. I'll try index support, because whenever it's something IT-related, it goes through them.
*55:46*

**Julia P**: Yeah. Or Sam might be a good contact too. Dev Eco has all their own tools they use for simulation and other applications, and Sam owns most of that. Maybe he has a good idea of what front-end structure to use or where to host it best. Let's start with Brian Hampton — if he doesn't know, the next stop would be Sam. I added his name to our doc. Are you running notes? Okay, awesome. Thank you so much. That was really good already.
*55:46*

**Gus Schissler**: Yeah.
*55:46*

**Julia P**: Yeah, I'm pretty excited.
*55:46*

**Gus Schissler**: Sweet. That's good to hear. We'll make sure you folks have either the actual HTML file or the PDF of the presentation.
*55:46*

**Julia P**: Awesome. Very great.
*55:46*
