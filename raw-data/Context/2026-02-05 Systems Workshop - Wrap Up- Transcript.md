## **\[Placeholder\] PdM \<\> Systems Workshop \- Wrap Up \- 2026/02/05 14:28 PST \- Transcript**

# **Attendees**

A2-2203 (Arastradero, 2), Andrea Zotelli, Julia Pralle, Mahesh Sarode, Nick Carcione, Nithin Kashyap, Ryan Faries, Ryo Masutani, Wendi Zhao

# **Transcript**

A2-2203 (Arastradero, 2): potentially last session depending on if we want to keep the overflow with the Japan members for tonight. I was thinking for this just kind of prefer not have that session perfectly fine. so I just was kind of thinking, bring a formal end to Quick summary of what we discussed and agreed upon this week. make sure that we have a clear list of action items that we want to take going forward. so that what we actually discussed this week doesn't just go nowhere. We add the summary also for

A2-2203 (Arastradero, 2): points that we aligned on or changes from. All right. So starting with the summary, I think the first big thing that we kind of figured out and aligned on is the structure of the URD to SCRD workflow and decomposition.

A2-2203 (Arastradero, 2): who's going to take responsibility for what. at the end of our last meeting after you guys on the product team had left, we were going through a table that Sanjief had started with all of the different layers and who would be taking responsibility, how we would be testing things. I think we got most of the way through that, but once we get the link from him, we'll include that in here. I think that'll provide kind of a good overview, maybe something that we can start putting on confluence and sharing with other people as we get questions about this for who will be doing where you'll be able to find certain requirements and certain set test plans, what the expectations for everything will be. I didn't link. you haven't program yet? I just want to just add it.

A2-2203 (Arastradero, 2): So we can also do a quick glance at that for those who are not here to see it. So he kind of set up me over here explicitly showing the SYAD, the S SWAD what the different requirement and testing levels fall into in terms of system software and component. Then I think the most useful thing will be these tables over here where we have the requirement or architecture level from URD all the way down to SCRD.

A2-2203 (Arastradero, 2): what level that is at, where we're storing that if we already know that, the team responsible for that requirement or architecture level, how it gets validated, who's responsible for that validation, where that test plane is stored, what repo is validated at that level, and how we will be doing that. But this is kind of a good capture of everything we discussed and agreed upon especially the first one and a half two days. Yeah, it captures the current understanding. I think the way and something that we can take and see if we can fill this out further and get alignment on this that would be I think the main thing I would show Tanisan tonight.

A2-2203 (Arastradero, 2): You can't do it off. It's fine too. But I think it's something that we really need. I'm thinking about it. maybe we should keep that session. So Tanya can ask questions and then maybe some of that answer cuz if we can align on this and work and say this is our source of truth then I think we have done a lot of Good alignment here. Let's keep that one. That was a major part of the first day or two. earlier today we also had some alignment on the upcoming PRD timelines when we would expect some of the first drafts to be ready and what we expect SVNB to be doing for those or to be doing as a result of that.

### 00:05:00

A2-2203 (Arastradero, 2): Next week What other sessions have we had? So we had the requirements discussion where we aligned on what that is in that table. The example where I think is where we really nailed that down.

A2-2203 (Arastradero, 2): We had ownership which is in that table. Some examples where we called out some currently missing things or things that are not in the correct shape at the steps. Maybe this will be good to copy over into the summary the exact process through which this workflow will be working.

A2-2203 (Arastradero, 2): We have the VNV which is also captured in that table. So I think that table really just kind of captures and summarizes everything. We also had summarized the expectation around change requests. Yes, I think maybe that's something we don't see in the table. The only thing right have a weekly meeting making sure we get change requests and if proposed or flow or request any change request management requirements.

A2-2203 (Arastradero, 2): Those are the major topics that we discussed. Does anyone feel like we're missing anything there? So then also this morning I started going through all the notes and anywhere that we had an action item I was just trying to pull them into this one specific spot so we can make sure that they're still applicable. I think there's some of these that don't really have any individual DRI maybe we can work on assigning those as well.

A2-2203 (Arastradero, 2): So early on when we were discussing during our requirement examples we realized that operating conditions or ODDs weren't really explicitly included for a lot of these features. so Wendy I think you have an action item to talk with Tatson about how we can get that either from CA. yeah, the option I got is it's the same set of OD applied to all the URDS as production and it's defined in one of the documents. I add a link there of that. so that's the overall like OD assumption, right? Yeah.

A2-2203 (Arastradero, 2): I know in the IP road map there's some aspects about OD with rain and light driving will you transfer this into the PRD as well. So what's the expectation basically on OD elements per quarter this one is for mass production I think for the SOP is like where do you want to be at in Q4 exactly? Yeah, it's from in what tens are showing the kickoff meeting. So that one for example it says for Q4 it's only rain and night but here you can see it covers it even include cloth fog. So this one is more advanced. Yeah. Yeah.

A2-2203 (Arastradero, 2): I understand that this is the overall expectations what's applicable for Q4. Yeah. So put this on a road map basically that we know when we need to prepare For any other data or testing basically. We should add it in the PR. That will be helpful. For each quarter also. Yeah. Yeah. And if this is applicable to all features that we having then it might be an overall more high level PR. I don't know how you want to manage this or you add it into every single feature PR but for instance I don't think we stop right so I'll add in the quest here for each feature.

### 00:10:00

A2-2203 (Arastradero, 2): I'll say scope OD for each feature should be including P prd. All right, Julia, I think you assigned yourself an action item to check in with Philip on SWAB. Brian, I know you also had a conversation with him. Did he answer that about the status? He did. See sufficient. Sure.

A2-2203 (Arastradero, 2): that has what we're looking for but that's why he provided an architecture I don't see actual architecture in here. Yeah, maybe there's still some followup to get the actual one.

A2-2203 (Arastradero, 2): I added the link to that in there, but I can take a closer look at this. I don't even think so. We think we had an action item for you to review the overall PR process with To make sure it aligns with their expectations. SBNB our team I think in general owns an action item to start creating a smaller separate SBD structure to start testing the use of synthetic sim for SBD evaluation. Do we want to identify a single person who will maybe try to head this up? I can take this.

A2-2203 (Arastradero, 2): And we also had an action item was following up with SNQ about the traceability and report generation for SMQT unit testing. So I think this was related to cadence of it and how we would report it. Feel like you take that one because connected to the traceability. Yeah.

A2-2203 (Arastradero, 2): Parliament is any expectations on the report basically should deliver in the end you can follow up with Clinton if you don't mind just so the names there R and Julia you guys had an action item for creating new J structure for the requirement change requests Ryan you had shared an example from couple years ago that I think you guys were going to try to replicate for the new process. also when you're talking about the workflow with the autonomy teams, we had discussed wanting

A2-2203 (Arastradero, 2): to replicate this original SWRD spreadsheet to track their acknowledgement and receipt of the SWRDs but organized for our capability groups. I think that might be maybe something for our team. I'm not sure who wants to take that on. So maybe this could be the new phase of the PRD in regards of the requirements if we could use this table for the requirements themselves. Either we do it in this format or another one. But yeah, it's good work. That would be like a capability group. Yeah. Yeah.

### 00:15:00

A2-2203 (Arastradero, 2): Yeah, as video I would say creating the tab, making sure that all the requirements are in the PRD in there and then start to review phase basically. SVNB. I think we still need some more internal conversations on how we want this to look, but we need to work on setting up our Java structure for all the SWTS and below. Hannah or Andrea? Yeah. are you guys willing to kind of spearhead this since we've been doing stuff like this?

A2-2203 (Arastradero, 2): pretty much basically this is already kind of being taken care of but maybe there's some more work to be done to say this is what our process and the steps that we will take look like and flush that crush the existing work a little bit more and then try to have a more clear picture or from our side maybe we receive this is next step I think yes

A2-2203 (Arastradero, 2): Sanji said that he would work on confirming the terminology that we were using in that diagram that I showed. We might also be able to confirm some of that tonight to make sure that it's aligned with PDM and the broader TMC organization. Then this is largely duplicated. Yeah, that was everything that was in the notes from throughout the week. Is there anything that I missed that people are aware of?

A2-2203 (Arastradero, 2): One work item that we don't have in there that's happening anyway is the explorative project we're doing with these three contractors starting next week and see how we can automate the requirement intake from different sources. That's a huge project where we can add it here and we can track it. It's all related. Julie, is that for you?

A2-2203 (Arastradero, 2): Any last session comments, questions? Otherwise, I think we're all okay if we end a couple minutes early on this one. Is there another session after this? there's a night one with Japan. I think mostly to review the table, but most of us I'm not on it. Yeah, I don't see my calendar either. That's okay. Because realized then I was changed right quick. Maybe I shouldn't have spoken for a second. Is time still available for that time or Yes, I think so. at 4 p.m. Okay.

A2-2203 (Arastradero, 2): 4:13 and 5:30. Yeah. You guys want to be on it? Can add you right now. no I don't. But if you feel an important contributor, I'll mark you as options. It's at least on your calendar and can come if you have the time and desire. And also I guess maybe half an hour might be good enough for just you and you can add me as optional as well. Yeah, you can add me. Okay.

### 00:20:00

A2-2203 (Arastradero, 2): I think we're good then. I know this was a long week with a lot of conversations. It was Thank you guys for doing this. I hope and I think that everything is a lot clearer now. And we should actually have a path forward. Instead of weekly meetings that Mike and I kicked on in time. Forwarding for us. That was a very well planned workshop. So one thing at the end after the meeting with Tony I may not be able to join that. I do want us to take that table and start putting the details behind this as this is what we're doing in our confluence page. And set the stage so that this is documented for us as our plan.

A2-2203 (Arastradero, 2): I'll put that as me and Sanjie to make sure that it gets on there. And then we need to start and then this kind of kicks off some of the other activities that for the purities we have to start putting together those test plans the verification tables and the so on and so forth. It's now starting moving away. We have agreement to now execution. Yeah. All right. Thank you everyone. Thank going to close my workshop.

### Meeting ended after 00:22:45 👋

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*

