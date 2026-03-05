# Nick Carcione Interview — Debrief

**Date:** 2026-03-04  
**Participants:** Dan Maser, Gus Schissler, Nate Papes (Atomic Object / Woven)  
**Context:** Internal debrief immediately following the Nick Carcione user interview.

---

## Debrief

*00:02*

**Dan Maser**: I didn't fully understand your question at the end — do you mind explaining it?

*00:05*

**Gus Schissler**: Yeah, and I think Nick actually put it in a better way. So — the CA team is distilling all of these upstream requirements down into SWRDs. Product is selecting from those and saying, okay, we're going to get these SWRDs done this quarter. Nick — and the developers — have the autonomy to say, we shouldn't do this particular SWRD. But that doesn't just magically remove the underlying need from the system. Like Nick said: follow along in the lane and don't slam on the brakes. If we're not putting down requirements, writing tests, and doing the traceability that way, how is it still being handled? Because the need still exists regardless.

*01:00*

**Dan Maser**: And what did Nick say? He didn't really define how it's being handled?

*01:03*

**Gus Schissler**: He did, actually. He said there are other testing and requirement methods for that kind of thing, especially for ML-based behavior. He said that would involve scenarios where they capture data — on-road or closed-course — and run tests against that captured data. That probably produces a pass/fail result.

That's likely outside the scope of what we're working on, so I didn't want to drill into it too much. It sounds like it might relate to SBRDs (Scenario-Based Requirements Documents). Not touching that area, but I was curious about how those requirements eventually get accounted for, since Toyota will need all of them documented prior to production release. If someone says "we're not doing this," what happens to it?

*02:14*

**Dan Maser**: Right. And that's the interesting thing — and it sounds like Hannah's approach is actually the correct new pattern. The clear difference is that Nick's attitude is: if it doesn't fit, we're not doing it. Whereas Hannah says: even if it doesn't fit, everything goes into JAMA so it can exist there and be worked through.

*02:41*

**Gus Schissler**: Or that's where it can die publicly — like a stinking corpse in a requirements backlog somewhere.

*02:51*

**Dan Maser**: Yes. And I think the biggest takeaway from this interview is that there don't seem to be any real format differences between Nick's SWRDs and Hannah's. It's more that Nick's current stance is basically: "98% of these are crap, so I'm leaving a comment and waiting." Whereas Hannah's explicit strategy is to get everything into JAMA regardless.

*03:13*

**Gus Schissler**: I have other questions that he couldn't really answer — like, does the CA team even have a comprehensive list of all these SWRDs? Right now, looking at this, the whole thing doesn't have defined boundaries. I'm worried it just sprawls. Which is probably why everyone seems overwhelmed by it.

*03:47*

**Dan Maser**: Yeah. But I'm encouraged that there does seem to be a consistent pattern across everyone we've talked to: they need a check step somewhere. Any automated solution we build would still need that — that doesn't go away. Even if we're just "teleporting" requirements into JAMA, we're still achieving something meaningful.

*07:25*

**Gus Schissler**: Yeah. I'm starting to think it's fundamentally a triaging problem for the SWRDs they're receiving. First: is this a should-do or a shouldn't-do? And then beyond that, there's the test-case writing piece — which is what Hannah talked about yesterday and what Nick touched on today.

*08:01*

**Dan Maser**: Do we actually know — was Hannah writing test cases even for the bad ones?

*08:08*

**Gus Schissler**: I can look. Based on my notes: for any TBDs, requirement mismatches, interface discrepancies, or over-prescriptive requirements, she mentioned making a comment on the requirement. Let me pull up the transcript and check…

*09:21*

**Gus Schissler**: Found it. Yes — she still puts requirements into JAMA regardless. Her explicit strategy around the 49-minute mark is to get everything into JAMA first, even problematic requirements. Ideally she'd resolve issues first, but in practice she moves forward anyway.

*11:37*

**Dan Maser**: So she's still writing test cases even for the problematic ones. Interesting.

*11:54*

**Gus Schissler**: Thank you, transcript!

*11:57*

**Dan Maser**: Alright, so we can talk more tomorrow. I feel good about where we're at. My thinking: use Alloy for some synthesis and context understanding, put together basic personas — though I already feel like the systems engineering role for in-lane is pretty similar to lane change — a list of pain points as a way to synthesize the notes, a cohesive service blueprint across all the players — not just the JAMA creation piece but the full picture — and then a focused user journey map for the JAMA assembly process specifically. I think that gets us to a good place to start generating solutions.

*13:06*

**Gus Schissler**: It might be a lot. I'm not sure what the ecosystem diagram would get us that the journey map wouldn't already cover.

*13:14*

**Dan Maser**: Yeah, you're probably right — the ecosystem diagram is more of a solution-space concern anyway. But for the rest of those, I think we could generate rough drafts.

*13:29*

**Gus Schissler**: I could take a crack at generating rough drafts tomorrow, and then we can talk through what they look like?

*13:36*

**Dan Maser**: Yeah. I'll get you the Zoom recording as soon as it's available. I think we can call it there.

*13:46*

**Gus Schissler**: Let's not schedule interviews for the end of the day going forward.

*13:53*

**Dan Maser**: Agreed. I could feel my energy dropping. See you later.

*14:05*

**Gus Schissler**: Still had good questions though — just scraping the bottom of the barrel energy-wise. Cool. Bye, folks.

---

*Recording source: AO × Nick Carcione Interview Debrief — 2026/03/04*
