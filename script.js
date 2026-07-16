const scenarios = [
  {
    id: 'pm-deadline',
    number: '01',
    title: 'PM wants to skip discovery',
    role: 'Design lead with a product partner',
    summary:
      'A PM wants to remove discovery, critique, and usability checks from the next sprint so the team can hit a public launch date.',
    tags: ['Deadline', 'PM', 'Negotiation'],
    decisions: [
      {
        title: 'The PM opens with: "We do not have time for design process this sprint."',
        context:
          'The launch date is visible to executives. Engineering is waiting. You know the current concept still has unresolved user risk.',
        choices: [
          {
            approach: 'Fighter',
            model: 'Conflict style',
            title: 'Hold the line immediately',
            move: '"We cannot cut discovery. I am not signing off on a rushed launch."',
            consequence:
              'You make the quality boundary clear, but the PM hears a veto before they hear a partner. The room shifts toward defense.',
            coaching:
              'Fighter energy can protect non-negotiables when the risk is high. Early in a cross-functional conflict, it works better after you name the shared goal and the actual risk.',
            script:
              'I share the urgency. I also see unresolved user risk. Before we choose what to cut, can we name what evidence the launch actually needs?',
            delta: { trust: -8, clarity: 9, integrity: 8 },
          },
          {
            approach: 'Negotiator',
            model: 'Creative negotiation',
            title: 'Reframe around launch evidence',
            move:
              '"What has to be true for us to launch responsibly, and what is the smallest test that answers that?"',
            consequence:
              'The PM stays engaged because you are not arguing for process as a ritual. You turn the conversation toward shared launch conditions.',
            coaching:
              'This is integrative negotiation: you keep the deadline in view while creating a path to learn. It uses framing before anchoring.',
            script:
              'Let us separate the date from the evidence. If we can answer the riskiest question in two days, we can protect both.',
            delta: { trust: 10, clarity: 12, integrity: 10 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Agree and absorb the risk',
            move: '"Okay, I can make the process lighter. We will make it work."',
            consequence:
              'The PM feels supported in the moment, but the design team loses a clear boundary and the risk moves underground.',
            coaching:
              'People Pleaser energy can build goodwill, but it becomes false alignment when the work still carries unresolved risk.',
            script:
              'I can make this lighter, but I do not want to hide risk. Here is the minimum evidence I think we still need.',
            delta: { trust: 4, clarity: -7, integrity: -11 },
          },
        ],
      },
      {
        title: 'The PM says the date is fixed and asks what you can cut.',
        context:
          'You have ten minutes left in the meeting. Engineering wants a decision today. The team needs a concrete path.',
        choices: [
          {
            approach: 'Negotiator',
            model: 'Form, framing, anchoring',
            title: 'Trade scope for learning',
            move:
              '"Let us cut breadth, not confidence. We test one critical flow, use three target users, and document the launch risk."',
            consequence:
              'The team gets a smaller, clearer plan. You protect the most important learning while respecting the deadline constraint.',
            coaching:
              'This anchors a viable alternative instead of debating ideals. It also clarifies what is being traded and what is not.',
            script:
              'My proposal: one riskiest flow, three users, same week. If it passes, we move. If it fails, we have evidence for a scope change.',
            delta: { trust: 10, clarity: 11, integrity: 9 },
          },
          {
            approach: 'Avoider',
            model: 'Conflict style',
            title: 'Delay the decision',
            move: '"Let us take this offline and come back later."',
            consequence:
              'The temperature drops, but the decision vacuum remains. Engineering continues planning with assumptions.',
            coaching:
              'Avoiding can be wise when emotions are high. Here the stakes are live and the room needs direction, so avoidance creates more hidden conflict.',
            script:
              'I need five minutes offline to check one dependency, then I will come back with a specific recommendation today.',
            delta: { trust: -3, clarity: -9, integrity: -5 },
          },
          {
            approach: 'Diplomat',
            model: 'Conflict style',
            title: 'Split the process in half',
            move:
              '"We can do a short critique and skip user checks this time. That gives everyone something."',
            consequence:
              'The compromise feels fair, but it may not answer the riskiest question. The team gets activity instead of evidence.',
            coaching:
              'Diplomacy is useful for temporary alignment, but middle ground is not always the same as meaningful risk reduction.',
            script:
              'If we compress, let us compress around the riskiest unknown rather than splitting every activity evenly.',
            delta: { trust: 5, clarity: 2, integrity: 1 },
          },
        ],
      },
      {
        title: 'Executives ask whether design supports the launch plan.',
        context:
          'The PM is in the room. You can either protect the relationship, protect the launch, or try to do both in one sentence.',
        choices: [
          {
            approach: 'Radical Candor',
            model: 'Care personally, challenge directly',
            title: 'Name support and risk together',
            move:
              '"I support the launch goal and I need to name one design risk: we have not validated the core handoff yet."',
            consequence:
              'You avoid surprising the PM while giving executives a clear view of the risk and the path to reduce it.',
            coaching:
              'Radical Candor keeps care and directness paired. It is especially strong when silence would create false confidence.',
            script:
              'My recommendation is to keep the date, protect one validation checkpoint, and agree now on what result would trigger a scope change.',
            delta: { trust: 9, clarity: 12, integrity: 11 },
          },
          {
            approach: 'Fighter',
            model: 'Conflict style',
            title: 'Escalate around the PM',
            move:
              '"Design does not support this plan. We have been pushed to cut the work that protects customers."',
            consequence:
              'You may slow a risky launch, but the PM experiences it as public opposition. Future collaboration gets harder.',
            coaching:
              'Fighter can be appropriate when there is serious harm. In lateral leadership, escalation lands better when you first make the shared facts visible.',
            script:
              'I want to be transparent about the risk and keep us partnered on the path forward.',
            delta: { trust: -12, clarity: 8, integrity: 7 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Signal alignment only',
            move: '"Design is aligned. We will make the deadline work."',
            consequence:
              'The meeting stays smooth, but you remove the last visible checkpoint. If the launch struggles, trust may drop later.',
            coaching:
              'This keeps the relationship comfortable in the moment by hiding material information. That is not true alignment.',
            script:
              'Design is aligned on the goal, and here is the condition we need to meet to launch responsibly.',
            delta: { trust: 3, clarity: -8, integrity: -12 },
          },
        ],
      },
    ],
  },
  {
    id: 'critique-conflict',
    number: '02',
    title: 'Peer challenges you in critique',
    role: 'Design lead facilitating critique',
    summary:
      'A peer designer publicly challenges your direction in critique and says the team is ignoring stronger alternatives.',
    tags: ['Critique', 'Feedback', 'Repair'],
    decisions: [
      {
        title: 'Your peer interrupts and says: "This direction is weak."',
        context:
          'The critique has six people in it. A junior designer looks uncomfortable. You feel your shoulders tense.',
        choices: [
          {
            approach: 'SBI',
            model: 'Situation, Behavior, Impact',
            title: 'Ground the moment',
            move:
              '"In this critique, when the direction is called weak without criteria, the team loses the thread. What objective is it missing?"',
            consequence:
              'You redirect the heat toward criteria without shaming the peer. The room gets a path back to useful critique.',
            coaching:
              'SBI works because it names the specific situation and behavior before describing impact. It keeps the person separate from the problem.',
            script:
              'Let us convert that into critique: what objective is the concept failing, and what evidence are you seeing?',
            delta: { trust: 9, clarity: 11, integrity: 7 },
          },
          {
            approach: 'Fighter',
            model: 'Conflict style',
            title: 'Defend the direction',
            move:
              '"That is not fair. The team already explored the alternatives, and this is the strongest path."',
            consequence:
              'You protect the work, but the critique becomes a debate about authority and taste instead of evidence.',
            coaching:
              'Fighter energy can stop unfair attacks. In critique, it can also pull attention away from the design objective.',
            script:
              'I want to respond, but first let us anchor on the objective and evidence.',
            delta: { trust: -7, clarity: 3, integrity: 2 },
          },
          {
            approach: 'Avoider',
            model: 'Conflict style',
            title: 'Move past it',
            move: '"Okay, noted. Let us keep going."',
            consequence:
              'The meeting stays moving, but tension stays in the room. The junior designer learns that conflict gets buried.',
            coaching:
              'Avoidance can help when emotions are too hot. Here it leaves the behavior uninterpreted and the team less safe.',
            script:
              'I want to pause there because the way we critique affects the quality of the conversation.',
            delta: { trust: -4, clarity: -8, integrity: -4 },
          },
        ],
      },
      {
        title: 'After the meeting, the peer messages: "You shut me down."',
        context:
          'You do not think you shut them down, but you can see how the public redirect may have landed.',
        choices: [
          {
            approach: 'Radical Candor',
            model: 'Care and challenge',
            title: 'Repair and clarify',
            move:
              '"I care about your critique and I also need it tied to criteria. Can we unpack what happened?"',
            consequence:
              'You open repair without abandoning the standard. The peer has a path to be heard and a clear expectation for next time.',
            coaching:
              'Radical Candor is useful when both relationship and standard matter. It avoids the false choice between apology and authority.',
            script:
              'I may have moved too fast in redirecting. I want your pushback, and I need us to keep it specific to the work.',
            delta: { trust: 11, clarity: 8, integrity: 8 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Concede to smooth it over',
            move: '"You are right. I should not have said that. We can revisit your direction."',
            consequence:
              'The peer feels validated, but your standard for critique becomes unclear. The team may read repair as reversal.',
            coaching:
              'People Pleaser energy can repair warmth quickly. It becomes risky when the apology blurs what actually needs to change.',
            script:
              'I am sorry for the impact. I still want critique grounded in criteria so the team can use it.',
            delta: { trust: 6, clarity: -6, integrity: -3 },
          },
          {
            approach: 'Fighter',
            model: 'Expert power',
            title: 'Document the decision',
            move:
              '"I am going to send the rationale so everyone understands why this direction is right."',
            consequence:
              'The rationale may help, but it avoids the relational rupture. The peer may feel managed instead of engaged.',
            coaching:
              'Expert power is valuable, but documentation is not repair. The relationship still needs a conversation.',
            script:
              'I can share the rationale after we talk about the critique dynamic.',
            delta: { trust: -6, clarity: 7, integrity: 3 },
          },
        ],
      },
      {
        title: 'The next critique needs a better container.',
        context:
          'You want strong disagreement without personal friction. The team also needs to make a decision by the end.',
        choices: [
          {
            approach: 'Facilitator',
            model: 'Critique vs. feedback',
            title: 'Set criteria first',
            move:
              '"We will critique against the objective, evidence, and user risk. Strong disagreement is welcome when it is specific."',
            consequence:
              'The room has shared rules. Disagreement becomes a design tool rather than a social threat.',
            coaching:
              'Facilitation is lateral leadership. You shape the conditions so the team can be honest and productive.',
            script:
              'Before opinions, let us name the objective. Then each critique needs evidence and a suggested next move.',
            delta: { trust: 9, clarity: 12, integrity: 9 },
          },
          {
            approach: 'Diplomat',
            model: 'Conflict style',
            title: 'Blend both directions',
            move:
              '"Let us combine your alternative with the current direction so everyone is represented."',
            consequence:
              'The peer feels included, but the work may become incoherent if the blend is not tied to user or business goals.',
            coaching:
              'Diplomacy can cool conflict. It should not replace decision criteria.',
            script:
              'Let us compare both directions against the same objective before we decide whether to blend anything.',
            delta: { trust: 5, clarity: -1, integrity: -2 },
          },
          {
            approach: 'Avoider',
            model: 'Conflict style',
            title: 'Keep critique smaller',
            move:
              '"I will just review with the core team this time so we can move faster."',
            consequence:
              'You reduce friction, but you also reduce dissent and shared ownership. The conflict may return later.',
            coaching:
              'Avoiding a person can look efficient, but it often converts open conflict into hidden resistance.',
            script:
              'I want the right people in the room and a clearer critique structure.',
            delta: { trust: -8, clarity: 1, integrity: -5 },
          },
        ],
      },
    ],
  },
  {
    id: 'accessibility-scope',
    number: '03',
    title: 'Engineering cuts accessibility',
    role: 'Design lead with engineering partners',
    summary:
      'Engineering wants to defer keyboard, screen reader, and focus-state work because the sprint is already overloaded.',
    tags: ['Access', 'Engineering', 'Scope'],
    decisions: [
      {
        title: 'Engineering says accessibility is a post-launch enhancement.',
        context:
          'The product supports a public workflow. The team has not budgeted enough engineering time for accessibility requirements.',
        choices: [
          {
            approach: 'Fighter',
            model: 'Boundary setting',
            title: 'Make it non-negotiable',
            move: '"Accessibility is not optional. We cannot ship a public workflow that excludes users."',
            consequence:
              'The ethical boundary is clear. Engineering may agree with the principle but still feel trapped by the timeline.',
            coaching:
              'Fighter is often appropriate for harm prevention. Pair it with a path, or the boundary can sound like blame.',
            script:
              'I am treating keyboard access and screen reader support as launch requirements. Let us define the minimum viable path.',
            delta: { trust: -3, clarity: 9, integrity: 12 },
          },
          {
            approach: 'Negotiator',
            model: 'Creative negotiation',
            title: 'Decompose the work',
            move:
              '"Can we separate must-ship access from improvements and estimate the smallest compliant path?"',
            consequence:
              'Engineering sees a solvable problem instead of an all-or-nothing demand. The team can negotiate the implementation plan.',
            coaching:
              'This protects integrity while respecting constraints. It turns conflict from values-versus-velocity into a scoped design problem.',
            script:
              'Let us define must, should, and later. I will help reduce interaction complexity if we protect the access baseline.',
            delta: { trust: 10, clarity: 11, integrity: 11 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Accept the deferral',
            move: '"I get it. We can log it as fast-follow accessibility work."',
            consequence:
              'The sprint feels easier, but the team normalizes exclusion as debt. The design leader has hidden a core product risk.',
            coaching:
              'Goodwill is not the same as leadership. This is a moment where people pleasing creates ethical and user harm.',
            script:
              'I understand the workload. I cannot support deferring the baseline access that makes the workflow usable.',
            delta: { trust: 4, clarity: -6, integrity: -14 },
          },
        ],
      },
      {
        title: 'Engineering asks for evidence, not principles.',
        context:
          'They are not dismissive. They need a concrete reason to change sprint allocation and defend the tradeoff.',
        choices: [
          {
            approach: 'Informational power',
            model: 'Influence source',
            title: 'Bring evidence and options',
            move:
              '"Here are the user impact, compliance risk, and reduced implementation options. Which path is most feasible?"',
            consequence:
              'You use information as a service to the team. Engineering can help choose a realistic path without owning the moral burden alone.',
            coaching:
              'Informational power works best when it helps others make a better decision rather than cornering them.',
            script:
              'I brought the W3C business case, issue examples, and a smaller interaction pattern. Can we estimate these three options?',
            delta: { trust: 10, clarity: 10, integrity: 10 },
          },
          {
            approach: 'SBI',
            model: 'Feedback model',
            title: 'Name the pattern',
            move:
              '"In the last two scope cuts, accessibility moved to later. The impact is that users with assistive tech are never in the launch definition."',
            consequence:
              'You surface a real pattern. If delivered calmly, it can deepen accountability; if delivered sharply, it may sound accusatory.',
            coaching:
              'SBI is strong for repeated behavior. Anchor it in observable decisions and connect it to product impact.',
            script:
              'I want to name the pattern so we can change the system, not blame one person.',
            delta: { trust: 3, clarity: 9, integrity: 8 },
          },
          {
            approach: 'Avoider',
            model: 'Conflict style',
            title: 'Hand it to a specialist',
            move:
              '"Let me ask the accessibility specialist to weigh in and we can decide later."',
            consequence:
              'Expert input may help, but the decision stalls and the team may treat accessibility as someone else responsibility.',
            coaching:
              'Seeking expertise is useful. Avoiding ownership is not. Keep the decision moving while you bring in expertise.',
            script:
              'I will ask the specialist for validation, and today we still need to reserve time for the baseline.',
            delta: { trust: -1, clarity: -7, integrity: -4 },
          },
        ],
      },
      {
        title: 'The team needs a final scope recommendation.',
        context:
          'You can recommend a minimum access baseline, a partial compromise, or a release block.',
        choices: [
          {
            approach: 'Negotiator',
            model: 'Anchoring',
            title: 'Anchor a baseline plus staged plan',
            move:
              '"Minimum launch scope: keyboard flow, visible focus, labels, error announcements. Enhancements move to the next milestone."',
            consequence:
              'The team has a clear access floor and a credible staged plan. The launch can move without erasing user needs.',
            coaching:
              'This is a strong lateral move because it defines the non-negotiable minimum and leaves room to collaborate on implementation.',
            script:
              'This is the access floor I can stand behind. I am flexible on how we implement it, not on whether it exists.',
            delta: { trust: 9, clarity: 12, integrity: 12 },
          },
          {
            approach: 'Diplomat',
            model: 'Conflict style',
            title: 'Reduce to visible polish',
            move:
              '"Let us at least fix contrast and focus states, then schedule the rest."',
            consequence:
              'The team sees movement, but the workflow may still exclude assistive technology users. The compromise is too shallow.',
            coaching:
              'Middle ground can create motion, but accessibility requires functional access, not only visible polish.',
            script:
              'Contrast matters, and it is not enough. The baseline has to include operable and understandable interactions.',
            delta: { trust: 4, clarity: 3, integrity: -7 },
          },
          {
            approach: 'Fighter',
            model: 'Release boundary',
            title: 'Block the release',
            move: '"If this baseline is not included, I will recommend we do not ship."',
            consequence:
              'This may be necessary if access remains absent. It also raises the conflict level, so the rationale must be precise and shared.',
            coaching:
              'A release boundary is valid when harm is material. Use it as a principled escalation, not a surprise threat.',
            script:
              'If the baseline is out, my recommendation is no launch. Here is the specific user harm and the smallest path to avoid it.',
            delta: { trust: -5, clarity: 9, integrity: 13 },
          },
        ],
      },
    ],
  },
  {
    id: 'intake-bypass',
    number: '04',
    title: 'Stakeholder bypasses intake',
    role: 'Design lead protecting team focus',
    summary:
      'A senior stakeholder sends a direct executive request to one designer and asks for a polished concept by tomorrow.',
    tags: ['Process', 'Power', 'DesignOps'],
    decisions: [
      {
        title: 'The request arrives outside intake with an executive name attached.',
        context:
          'The designer feels pressured. The work is interesting, but it would displace committed roadmap work.',
        choices: [
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Take the request',
            move: '"We can help. I will find someone to put together a concept tonight."',
            consequence:
              'The stakeholder feels supported, but the intake system loses legitimacy and the team absorbs hidden work.',
            coaching:
              'People pleasing can create fast goodwill with powerful stakeholders while quietly damaging team trust.',
            script:
              'We want to help, and we need to route it against current commitments so the tradeoff is visible.',
            delta: { trust: -5, clarity: -8, integrity: -7 },
          },
          {
            approach: 'Radical Candor',
            model: 'Care and challenge',
            title: 'Acknowledge and redirect',
            move:
              '"This sounds important. I also need to protect the team from unplanned executive work. Let us route it today and decide the tradeoff."',
            consequence:
              'You respect the stakeholder and the team. The request becomes visible without turning process into a wall.',
            coaching:
              'This pairs care with directness. It treats process as a prioritization tool rather than bureaucracy.',
            script:
              'I can help triage this today. If it outranks current work, we will make that tradeoff explicit and staff it cleanly.',
            delta: { trust: 10, clarity: 11, integrity: 9 },
          },
          {
            approach: 'Avoider',
            model: 'Conflict style',
            title: 'Wait for the form',
            move: '"Please submit the intake request and we will review it in the next planning cycle."',
            consequence:
              'The process is protected on paper, but the stakeholder may escalate because urgency was not acknowledged.',
            coaching:
              'Avoiding can protect boundaries, but a high-power request often needs a same-day response and a visible tradeoff conversation.',
            script:
              'Please add it to intake so we have the details. I will also hold fifteen minutes today to triage the urgency.',
            delta: { trust: -6, clarity: 4, integrity: 3 },
          },
        ],
      },
      {
        title: 'The team is frustrated: "Why do exec requests always jump the line?"',
        context:
          'The frustration is valid. The team wants you to protect them, not just explain the stakeholder perspective.',
        choices: [
          {
            approach: 'AID',
            model: 'Action, Impact, Development',
            title: 'Name the system impact',
            move:
              '"When requests bypass intake, committed work gets displaced. The next step is that I will make tradeoffs visible before assigning anything."',
            consequence:
              'The team hears that you see the impact and are changing the operating pattern. Trust starts to recover.',
            coaching:
              'AID is useful because it moves from what happened to why it matters to what changes next.',
            script:
              'The action was bypassing intake. The impact is hidden work and lower trust. The development step is visible tradeoff review.',
            delta: { trust: 11, clarity: 10, integrity: 8 },
          },
          {
            approach: 'Diplomat',
            model: 'Conflict style',
            title: 'Quietly absorb the work',
            move:
              '"I know it is frustrating. Let us just get this one done and avoid making it bigger."',
            consequence:
              'The conflict stays calm, but the team learns that the process will bend when power enters the room.',
            coaching:
              'Diplomacy can reduce friction, but it can also preserve the system that caused the conflict.',
            script:
              'We may still do the work, but not invisibly. I will show what moves if this moves in.',
            delta: { trust: -7, clarity: -5, integrity: -7 },
          },
          {
            approach: 'Fighter',
            model: 'Conflict style',
            title: 'Call out the stakeholder',
            move:
              '"This is exactly why stakeholders cannot keep skipping the process. I will tell them it is unacceptable."',
            consequence:
              'The team feels defended, but the stakeholder relationship may become adversarial and harder to influence later.',
            coaching:
              'Fighter energy can protect the team. It lands better when aimed at the system and the tradeoff, not the person.',
            script:
              'I will address the bypass directly and keep the focus on how we prioritize, not on blaming one stakeholder.',
            delta: { trust: 2, clarity: 7, integrity: 4 },
          },
        ],
      },
      {
        title: 'An executive asks why design is slowing a strategic idea.',
        context:
          'This is agenda power. If you only defend process, you may look obstructive. If you cave, the team loses focus.',
        choices: [
          {
            approach: 'Negotiator',
            model: 'Portfolio tradeoff',
            title: 'Show options and tradeoffs',
            move:
              '"We can support this. Option A pauses onboarding work, Option B scopes a two-hour sketch, Option C schedules discovery next sprint."',
            consequence:
              'You convert a process fight into a leadership decision. The executive sees speed, cost, and focus as explicit tradeoffs.',
            coaching:
              'This is lateral leadership through resource and informational power. You are not saying no; you are making the decision real.',
            script:
              'I recommend Option B today and a full intake review Friday if the signal is strong.',
            delta: { trust: 10, clarity: 13, integrity: 10 },
          },
          {
            approach: 'Fighter',
            model: 'Process boundary',
            title: 'Defend the rule',
            move: '"The process exists for a reason. We cannot make exceptions for executive ideas."',
            consequence:
              'The boundary is clear, but the executive may hear rigidity rather than stewardship of team capacity.',
            coaching:
              'Rules need business reasoning. Lateral influence grows when you translate process into visible consequences.',
            script:
              'The process protects focus. Here are the tradeoffs if this becomes the priority.',
            delta: { trust: -7, clarity: 6, integrity: 5 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Make an exception',
            move: '"We can make an exception this time and tighten the process later."',
            consequence:
              'The executive gets speed, but the exception becomes precedent. The team will expect the bypass to happen again.',
            coaching:
              'A one-time exception without an explicit tradeoff is how side channels become culture.',
            script:
              'If this is the priority, we can move it in. I need us to name what moves out.',
            delta: { trust: -4, clarity: -8, integrity: -9 },
          },
        ],
      },
    ],
  },
  {
    id: 'research-dismissal',
    number: '05',
    title: 'Research gets dismissed',
    role: 'Design lead with product and data partners',
    summary:
      'A product partner wants to keep a launch plan unchanged after usability sessions reveal a comprehension risk that does not yet show up in the dashboard.',
    tags: ['Research', 'Evidence', 'Influence'],
    decisions: [
      {
        title: 'The PM says: "The sample is too small to change direction."',
        context:
          'Quantitative indicators look healthy. Five usability sessions show that target users misunderstand a high-stakes setting before confirming it.',
        choices: [
          {
            approach: 'Informational power',
            model: 'Evidence triangulation',
            title: 'Triangulate the signal',
            move:
              '"The sample is small, and the failure mode is consistent. Let us compare the sessions, support risk, and analytics before we decide."',
            consequence:
              'You avoid overstating the research while making the risk harder to dismiss. The team can discuss confidence instead of sample size alone.',
            coaching:
              'Informational power is strongest when it makes uncertainty more precise. You are not asking the team to obey research; you are helping them understand what kind of evidence they have.',
            script:
              'I would not call this statistically conclusive. I would call it decision-relevant because the same misunderstanding repeated in a high-risk moment.',
            delta: { trust: 9, clarity: 12, integrity: 11 },
          },
          {
            approach: 'Fighter',
            model: 'Expert power',
            title: 'Defend the research',
            move:
              '"We cannot ignore users because the dashboard story is convenient."',
            consequence:
              'You protect the insight, but the PM may hear contempt for their evidence. The conversation shifts toward which discipline is more credible.',
            coaching:
              'Fighter energy can protect user evidence, but it lands better when you challenge the decision logic rather than the partner intelligence.',
            script:
              'I want to put both evidence streams on the table and ask what risk each one can and cannot see.',
            delta: { trust: -7, clarity: 6, integrity: 8 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Downplay the finding',
            move:
              '"You are right, it is probably not enough to change anything. We can keep an eye on it."',
            consequence:
              'The launch plan stays smooth, but the team loses the chance to address a predictable comprehension risk before users encounter it.',
            coaching:
              'This sounds collaborative because you are respecting data, but you are also hiding a real user signal. That is false alignment dressed as humility.',
            script:
              'The sample is limited. I still think the pattern is worth a small mitigation before launch.',
            delta: { trust: 3, clarity: -8, integrity: -11 },
          },
        ],
      },
      {
        title: 'The data partner asks what evidence would change the recommendation.',
        context:
          'The room is calmer now. You can either define a decision rule, request more research, or soften the insight.',
        choices: [
          {
            approach: 'Negotiator',
            model: 'Decision criteria',
            title: 'Define a decision rule',
            move:
              '"If two more target users miss the setting, we revise the flow. If they complete it, we launch with monitoring."',
            consequence:
              'The team gets a concrete learning path and a shared standard for what evidence means. Disagreement turns into an experiment.',
            coaching:
              'This is integrative negotiation around uncertainty. It gives product speed, data a measurable rule, and design a way to protect user comprehension.',
            script:
              'Let us agree now what result would change the decision so we are not renegotiating after the evidence arrives.',
            delta: { trust: 10, clarity: 13, integrity: 10 },
          },
          {
            approach: 'Avoider',
            model: 'Conflict style',
            title: 'Ask for more research',
            move:
              '"We probably need a larger study before making any call."',
            consequence:
              'More evidence could help, but the request is too broad for the timeline. The team may treat research as an obstacle instead of a decision aid.',
            coaching:
              'Avoiding premature certainty is good. Avoiding the decision is different. In a live launch, ask for the smallest next evidence that could change the plan.',
            script:
              'We do not need a perfect study. We need one more targeted check on the failure mode that would change launch readiness.',
            delta: { trust: -2, clarity: -7, integrity: 2 },
          },
          {
            approach: 'Diplomat',
            model: 'Conflict style',
            title: 'Label it a watch item',
            move:
              '"Let us note this as something to watch after launch so we can keep moving."',
            consequence:
              'The team feels aligned, but the watch item has no owner, threshold, or mitigation. The risk is acknowledged without being managed.',
            coaching:
              'Diplomacy can keep a room moving, but a watch item only works when it has a trigger, a telemetry plan, and someone accountable for response.',
            script:
              'If we watch it, let us define what we are watching, who owns it, and what result triggers a change.',
            delta: { trust: 5, clarity: -2, integrity: -5 },
          },
        ],
      },
      {
        title: 'An executive asks if the launch is research-approved.',
        context:
          'The PM is present. Your answer can either create false certainty, block the launch, or explain the conditions for confidence.',
        choices: [
          {
            approach: 'Radical Candor',
            model: 'Care personally, challenge directly',
            title: 'Support beta with guardrails',
            move:
              '"Research supports a limited beta if we add the copy clarification and monitor the setting error rate in week one."',
            consequence:
              'You give leadership a usable recommendation without hiding uncertainty. The PM keeps momentum, and the risk has a mitigation plan.',
            coaching:
              'This is nuanced because it avoids both overclaiming and obstruction. You are clear about what research supports, what it does not, and what guardrail makes the decision responsible.',
            script:
              'My recommendation is beta with two guardrails: clarify the decision point now and set a threshold for post-launch intervention.',
            delta: { trust: 10, clarity: 12, integrity: 12 },
          },
          {
            approach: 'Fighter',
            model: 'Release boundary',
            title: 'Recommend no launch',
            move:
              '"No. Research shows users do not understand this flow, and we should not launch."',
            consequence:
              'You communicate the risk clearly, but the recommendation may sound more certain than the evidence supports. Partners may challenge the research instead of the mitigation.',
            coaching:
              'A no-launch boundary is appropriate when harm is material and evidence is strong. Here the evidence is serious but limited, so a guarded launch may be more credible than a full stop.',
            script:
              'I am not comfortable with a broad launch. I can support beta if we reduce the known misunderstanding first.',
            delta: { trust: -5, clarity: 8, integrity: 9 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Green-light without caveat',
            move:
              '"Yes, research is aligned enough for launch."',
            consequence:
              'The executive hears certainty the evidence does not justify. If users struggle, research credibility and cross-functional trust both take a hit.',
            coaching:
              'This answer protects the room from discomfort by spending future credibility. When evidence is mixed, the leadership move is a conditional recommendation, not a clean bill of health.',
            script:
              'Research supports momentum, with one unresolved comprehension risk that should be mitigated before broad release.',
            delta: { trust: 2, clarity: -9, integrity: -13 },
          },
        ],
      },
    ],
  },
  {
    id: 'system-fork',
    number: '06',
    title: 'Team wants a system fork',
    role: 'Design lead stewarding a design system',
    summary:
      'A squad wants to create a one-off component to satisfy an enterprise request, but the fork would weaken accessibility, consistency, and future maintenance.',
    tags: ['Design system', 'Governance', 'Customer pressure'],
    decisions: [
      {
        title: 'Engineering says the system component is too slow to modify.',
        context:
          'The customer demo is next week. The proposed shortcut would ship faster but bypass token, accessibility, and interaction guidance.',
        choices: [
          {
            approach: 'Negotiator',
            model: 'Creative negotiation',
            title: 'Separate need from solution',
            move:
              '"Let us name the customer need first. Then we can decide whether this is a system variant, a local override, or a true exception."',
            consequence:
              'You slow the rush just enough to keep options open. The team can pursue speed without assuming the fork is the only path.',
            coaching:
              'This reframes the conflict from governance versus velocity to need, constraint, and implementation route. That gives everyone more room to solve.',
            script:
              'I am not rejecting speed. I want us to choose the fastest path that does not create avoidable system debt.',
            delta: { trust: 10, clarity: 12, integrity: 10 },
          },
          {
            approach: 'Fighter',
            model: 'Process boundary',
            title: 'Reject the fork',
            move:
              '"No. We are not creating one-off components outside the system."',
            consequence:
              'The governance boundary is clear, but the squad may experience design systems as control rather than enablement.',
            coaching:
              'A firm no can protect long-term integrity, but it should come with a path. Otherwise the system becomes the villain in a story about customer urgency.',
            script:
              'I cannot support an unmanaged fork. I can help define the fastest compliant variant today.',
            delta: { trust: -6, clarity: 8, integrity: 9 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Approve the exception',
            move:
              '"Go ahead for this demo. We can clean it up later."',
            consequence:
              'The squad feels unblocked, but the exception becomes a precedent. Cleanup becomes unlikely once the demo pressure passes.',
            coaching:
              'This is the classic design-system debt trap: speed is real, but the repayment plan is imaginary unless it is staffed, dated, and visible.',
            script:
              'If we make an exception, we need an expiration date, owner, and conversion plan before it ships.',
            delta: { trust: 4, clarity: -6, integrity: -10 },
          },
        ],
      },
      {
        title: 'Product says the enterprise customer needs a custom workflow by Friday.',
        context:
          'Revenue pressure is real. The team is looking for permission to prioritize the customer promise over system consistency.',
        choices: [
          {
            approach: 'Negotiator',
            model: 'Portfolio tradeoff',
            title: 'Offer a system-safe variant',
            move:
              '"We can create a constrained variant for this workflow and pause one lower-priority system request to staff it."',
            consequence:
              'You make the cost of the customer promise explicit while offering a path that protects the system from an unmanaged fork.',
            coaching:
              'This is a clean tradeoff move. You are not saying the system matters more than revenue; you are showing what revenue urgency costs.',
            script:
              'I recommend a constrained variant with a named owner, demo scope, and follow-up system review next week.',
            delta: { trust: 10, clarity: 12, integrity: 11 },
          },
          {
            approach: 'Diplomat',
            model: 'Conflict style',
            title: 'Fork and document it',
            move:
              '"Let us allow the fork, document why, and revisit after the demo."',
            consequence:
              'The team gets short-term relief and some visibility, but documentation alone does not prevent the fork from becoming permanent.',
            coaching:
              'This is passable only if the exception has a real sunset. Without a conversion date, documentation becomes a museum label for debt.',
            script:
              'If we document it, we also need a sunset date and a decision about whether it graduates into the system.',
            delta: { trust: 6, clarity: 4, integrity: -3 },
          },
          {
            approach: 'Avoider',
            model: 'Conflict style',
            title: 'Send it to backlog',
            move:
              '"Add it to the design system backlog and we will prioritize it in the next planning cycle."',
            consequence:
              'The process stays intact, but the urgency goes unanswered. Product may route around the system entirely.',
            coaching:
              'Avoiding the urgency can protect the queue on paper while losing influence in practice. A same-week triage path keeps the system relevant.',
            script:
              'Put it in the backlog, and let us triage it today against customer impact and existing commitments.',
            delta: { trust: -6, clarity: 3, integrity: 2 },
          },
        ],
      },
      {
        title: 'After the demo, two more teams ask for similar exceptions.',
        context:
          'The original decision has become a signal. You need to repair governance without punishing teams for following the precedent.',
        choices: [
          {
            approach: 'Facilitator',
            model: 'Governance container',
            title: 'Create an exception rule',
            move:
              '"Exceptions need an owner, expiration date, accessibility check, and decision on whether they become system work."',
            consequence:
              'You turn a messy precedent into a repeatable governance pattern. Teams can move quickly without creating invisible debt.',
            coaching:
              'This is lateral leadership through container design. The rule does not eliminate exceptions; it makes the cost and responsibility visible.',
            script:
              'The goal is not fewer requests. The goal is no unmanaged exceptions.',
            delta: { trust: 9, clarity: 13, integrity: 12 },
          },
          {
            approach: 'AID',
            model: 'Action, Impact, Development',
            title: 'Name the fork pattern',
            move:
              '"When one-off components ship without review, teams copy them. The impact is system drift. Next, we review all exceptions monthly."',
            consequence:
              'You make the pattern visible and propose a development step. The team hears the system impact without one squad being singled out.',
            coaching:
              'AID works here because the problem is behavioral and systemic. It names the action, the organizational impact, and the next operating habit.',
            script:
              'This is not about blaming the demo team. It is about closing the loop so their shortcut does not become everyone else default.',
            delta: { trust: 8, clarity: 11, integrity: 9 },
          },
          {
            approach: 'Fighter',
            model: 'Governance boundary',
            title: 'Lock the system down',
            move:
              '"No more exceptions. All component changes must go through the system team."',
            consequence:
              'The drift may slow, but teams may experience governance as a bottleneck and start hiding work until it is too late.',
            coaching:
              'A hard boundary can be necessary after drift, but it works better when paired with a fast lane. Control without responsiveness invites bypass.',
            script:
              'We need a boundary and a fast exception path so teams bring us the work early instead of hiding it late.',
            delta: { trust: -5, clarity: 8, integrity: 7 },
          },
        ],
      },
    ],
  },
  {
    id: 'sales-promise',
    number: '07',
    title: 'Sales promises a custom demo',
    role: 'Design lead with sales, product, and solutions engineering',
    summary:
      'Sales has promised a strategic customer a custom workflow demo before product and design have agreed what can responsibly be shown.',
    tags: ['Sales', 'Customer pressure', 'Commitment'],
    decisions: [
      {
        title: 'Sales says: "We already told the customer we can show this next week."',
        context:
          'The account is valuable. The promise is visible to leadership. Your team has not validated the workflow or staffed the design work.',
        choices: [
          {
            approach: 'Negotiator',
            model: 'Commitment mapping',
            title: 'Translate promise into options',
            move:
              '"Let us separate what we promised from what we can responsibly demonstrate. I can give you three demo paths with different risk levels."',
            consequence:
              'You respect the customer pressure without accepting the promise as already solved. Sales gets a path forward, and the team gets a real tradeoff conversation.',
            coaching:
              'This is strong lateral leadership because it turns a surprise commitment into a decision menu. You are not punishing sales; you are making the hidden cost visible.',
            script:
              'Option A is a concept demo, Option B is a prototype with caveats, and Option C requires pausing roadmap work. I recommend A unless leadership funds C.',
            delta: { trust: 10, clarity: 13, integrity: 10 },
          },
          {
            approach: 'Fighter',
            model: 'Boundary setting',
            title: 'Call out the promise',
            move:
              '"Sales cannot commit design work before the product team agrees. This is exactly how teams get burned."',
            consequence:
              'You name a real governance problem, but the sales partner may feel blamed in public. The conversation shifts from customer risk to functional defensiveness.',
            coaching:
              'The boundary is valid, but the delivery makes repair harder. Aim the force at the commitment mechanism, not the person who is under revenue pressure.',
            script:
              'We need to pause because this commitment has a staffing and credibility cost. Let us decide the customer message together.',
            delta: { trust: -8, clarity: 8, integrity: 7 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Rally design overnight',
            move:
              '"Okay, we will pull together something polished for the meeting."',
            consequence:
              'Sales feels supported immediately, but the design team absorbs hidden labor and the customer may see a promise the product cannot keep.',
            coaching:
              'This is the helpfulness trap. You solve the emotional urgency by spending team trust, product clarity, and future credibility.',
            script:
              'I want to help the account, and I need us to name what we are actually promising before design starts polishing.',
            delta: { trust: 3, clarity: -8, integrity: -10 },
          },
        ],
      },
      {
        title: 'Product asks design to make the demo feel real even though backend work is not scoped.',
        context:
          'The prototype could impress the customer. It could also imply implementation confidence the team does not have.',
        choices: [
          {
            approach: 'Radical Candor',
            model: 'Care personally, challenge directly',
            title: 'Name demo truth and risk',
            move:
              '"I want this customer to feel heard, and I do not want the demo to imply a build commitment we have not made."',
            consequence:
              'You protect the relationship and the truth at the same time. Product can still pursue the customer, but the demo needs clear framing.',
            coaching:
              'This move is nuanced because it does not treat polish as the enemy. It treats unspoken commitment as the risk.',
            script:
              'Let us label the prototype as directional and end with the decisions required before we commit to delivery.',
            delta: { trust: 10, clarity: 11, integrity: 12 },
          },
          {
            approach: 'Diplomat',
            model: 'Conflict style',
            title: 'Polish without caveat',
            move:
              '"We can keep it aspirational and let the account team handle the details."',
            consequence:
              'The demo may look impressive, but ambiguity moves downstream. The customer and sales team may interpret polish as product commitment.',
            coaching:
              'Diplomacy can preserve momentum, but vague aspiration is dangerous when buyers are listening for promises.',
            script:
              'We can make it aspirational if we also make the status explicit: concept, not committed scope.',
            delta: { trust: 5, clarity: -6, integrity: -9 },
          },
          {
            approach: 'Informational power',
            model: 'Assumption mapping',
            title: 'Show implementation assumptions',
            move:
              '"Here are the design, data, integration, and support assumptions behind this workflow. Which are we comfortable exposing?"',
            consequence:
              'The team sees the real surface area of the demo. The decision becomes about risk exposure rather than visual polish alone.',
            coaching:
              'Information is doing useful work here: it converts an abstract concern into shared assumptions the team can accept, mitigate, or remove.',
            script:
              'I can prototype the happy path, but these assumptions need to be named in the customer narrative.',
            delta: { trust: 8, clarity: 12, integrity: 10 },
          },
        ],
      },
      {
        title: 'After the demo, the customer asks if this will ship this quarter.',
        context:
          'Sales is on the call. Product is quiet. The customer is asking for a direct answer that could become a commitment.',
        choices: [
          {
            approach: 'Negotiator',
            model: 'Conditional commitment',
            title: 'Commit to a discovery path',
            move:
              '"The workflow is not committed for this quarter. We can commit to validating scope with you and returning with a delivery recommendation."',
            consequence:
              'The customer gets a credible next step without receiving a false date. Internally, the team keeps control of commitment quality.',
            coaching:
              'This is the strongest move because it offers progress without faking certainty. It turns pressure into a scoped next agreement.',
            script:
              'We can give you a decision checkpoint, not a delivery promise today.',
            delta: { trust: 10, clarity: 12, integrity: 12 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Say yes-ish',
            move:
              '"That is the direction we are hoping for, and we will do everything we can."',
            consequence:
              'The answer sounds positive, but it creates interpretive commitment. The customer may hear a quarter promise even though the team did not make one.',
            coaching:
              'Soft yes language is still commitment language when the listener has buying power. If the answer is uncertain, the uncertainty has to be explicit.',
            script:
              'I do not want to overstate it. The next step is scope validation before we can name a quarter.',
            delta: { trust: 2, clarity: -10, integrity: -12 },
          },
          {
            approach: 'Fighter',
            model: 'Release boundary',
            title: 'Refuse the commitment publicly',
            move:
              '"No, we cannot commit to that. This is not on the roadmap."',
            consequence:
              'The truth is clear, but the customer and sales team may experience the answer as abrupt. The account relationship needs repair.',
            coaching:
              'Direct refusal can be necessary, but in a live customer conversation it needs a bridge to what is possible next.',
            script:
              'I cannot commit to this quarter. What I can commit to is a scope review and a clear recommendation after that.',
            delta: { trust: -7, clarity: 9, integrity: 8 },
          },
        ],
      },
    ],
  },
  {
    id: 'ai-ethics',
    number: '08',
    title: 'AI feature raises ethics risk',
    role: 'Design lead with ML, legal, and product partners',
    summary:
      'The team wants to launch an AI-assisted recommendation feature, but consent, transparency, and user control are still under-specified.',
    tags: ['AI', 'Ethics', 'Transparency'],
    decisions: [
      {
        title: 'The ML lead says transparency copy will reduce adoption.',
        context:
          'The model performs well in testing, but users may not understand when a recommendation is AI-generated or how to challenge it.',
        choices: [
          {
            approach: 'Negotiator',
            model: 'Ethical baseline',
            title: 'Define informed consent baseline',
            move:
              '"Let us define the minimum transparency users need to make an informed choice, then test the least disruptive version."',
            consequence:
              'You keep adoption concerns in the conversation while refusing to treat user understanding as optional.',
            coaching:
              'This is a strong move because it turns ethics into a design constraint and experiment, not a moral standoff.',
            script:
              'The design question is not whether transparency hurts adoption. It is what transparency users need and how clearly we can provide it.',
            delta: { trust: 9, clarity: 12, integrity: 12 },
          },
          {
            approach: 'Fighter',
            model: 'Boundary setting',
            title: 'Insist on transparency',
            move:
              '"We are not hiding AI involvement to increase adoption."',
            consequence:
              'The ethical boundary is unmistakable. The ML partner may agree with the principle but still feel their adoption concern was dismissed.',
            coaching:
              'The boundary is appropriate when transparency affects user autonomy. Pair it with a design path so the conversation can move from principle to execution.',
            script:
              'Transparency is a launch requirement. I am open to the lightest version that still lets users understand and contest the recommendation.',
            delta: { trust: -3, clarity: 10, integrity: 13 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Soften the warning',
            move:
              '"We can make the AI language subtle so it does not distract from conversion."',
            consequence:
              'The team avoids friction, but the design may obscure material information users need to understand the system.',
            coaching:
              'Subtlety is not neutral when users need notice and control. This is another version of false harmony: adoption is protected by spending user agency.',
            script:
              'We can make it concise, but not invisible. Users need to know what is happening and what control they have.',
            delta: { trust: 4, clarity: -7, integrity: -13 },
          },
        ],
      },
      {
        title: 'Legal says the flow is compliant, but user harm still feels possible.',
        context:
          'The feature may steer users toward options that are technically allowed but hard to evaluate. Product wants legal approval to settle the debate.',
        choices: [
          {
            approach: 'Radical Candor',
            model: 'Care and challenge',
            title: 'Name ethics beyond compliance',
            move:
              '"Compliance matters, and I do not think compliance alone answers whether users can understand and challenge the recommendation."',
            consequence:
              'You respect legal expertise while keeping product ethics in scope. The team has to discuss user agency, not only risk clearance.',
            coaching:
              'This is nuanced because it does not undermine legal. It clarifies that compliance is one input, not the whole design standard.',
            script:
              'Can we add a user-understanding checkpoint before we treat this as launch-ready?',
            delta: { trust: 9, clarity: 11, integrity: 12 },
          },
          {
            approach: 'Informational power',
            model: 'Risk evidence',
            title: 'Bring user harm cases',
            move:
              '"Here are three places where users may over-trust or misunderstand the recommendation. Let us decide which risk we accept."',
            consequence:
              'The concern becomes concrete. Partners can evaluate actual harm pathways instead of debating whether ethics is too abstract.',
            coaching:
              'Information helps because it narrows the ethics conversation to observable user moments and decision criteria.',
            script:
              'I am not asking us to solve every theoretical risk. I am asking us to address these three high-probability misunderstanding points.',
            delta: { trust: 8, clarity: 12, integrity: 11 },
          },
          {
            approach: 'Avoider',
            model: 'Conflict style',
            title: 'Wait for policy',
            move:
              '"Maybe we should wait until the company has a clearer AI policy before deciding."',
            consequence:
              'The concern is valid, but the team still has a live launch decision. Waiting for policy may become a way to avoid local judgment.',
            coaching:
              'Avoidance can be responsible if policy is imminent and stakes are high. Here, the design team still needs a principled interim decision.',
            script:
              'We should align to policy when it exists. For this launch, let us define the user protections we can own now.',
            delta: { trust: -2, clarity: -8, integrity: 2 },
          },
        ],
      },
      {
        title: 'An executive asks whether the AI feature can launch this month.',
        context:
          'The roadmap depends on it. The risk is not fully eliminated, but a narrower release could reduce harm while preserving learning.',
        choices: [
          {
            approach: 'Negotiator',
            model: 'Guardrailed pilot',
            title: 'Launch a controlled pilot',
            move:
              '"I recommend a limited pilot with clear AI labeling, opt-out, appeal language, and a review of misunderstanding signals after week one."',
            consequence:
              'The team keeps momentum while bounding the risk. The launch becomes a learning system instead of a leap of faith.',
            coaching:
              'This is the strongest move when uncertainty remains but can be contained. It names the controls that make learning ethical.',
            script:
              'I can support a pilot, not broad release, if these user protections are in the launch definition.',
            delta: { trust: 10, clarity: 12, integrity: 12 },
          },
          {
            approach: 'Fighter',
            model: 'Launch boundary',
            title: 'Block until audit',
            move:
              '"We should not launch until we complete a formal AI ethics audit."',
            consequence:
              'You protect against harm, but the recommendation may feel disproportionate if a smaller pilot could answer the risk safely.',
            coaching:
              'A full block is warranted when harm is severe or irreversible. If the risk can be bounded, a pilot with strong guardrails may earn more influence.',
            script:
              'If we are considering broad release, I recommend an audit first. If we need learning now, I recommend a protected pilot.',
            delta: { trust: -4, clarity: 8, integrity: 10 },
          },
          {
            approach: 'Diplomat',
            model: 'Conflict style',
            title: 'Rely on opt-out',
            move:
              '"We can launch if users can turn it off in settings."',
            consequence:
              'The compromise sounds reasonable, but opt-out buried in settings may not protect users who never understood the recommendation was AI-assisted.',
            coaching:
              'Opt-out is not meaningful control if notice and comprehension are weak. The user has to know the choice exists at the moment it matters.',
            script:
              'Opt-out helps, but it is not enough without visible notice and a clear way to challenge the recommendation.',
            delta: { trust: 5, clarity: 2, integrity: -7 },
          },
        ],
      },
    ],
  },
  {
    id: 'remote-critique',
    number: '09',
    title: 'Remote critique loses safety',
    role: 'Design lead facilitating a distributed design team',
    summary:
      'A remote critique with senior voices, silent juniors, and a looming decision starts to feel performative instead of useful.',
    tags: ['Remote', 'Critique', 'Psychological safety'],
    decisions: [
      {
        title: 'A senior designer dominates the video critique.',
        context:
          'They are making useful points, but others have stopped contributing. The presenter is defending instead of learning.',
        choices: [
          {
            approach: 'Facilitator',
            model: 'Critique container',
            title: 'Reset the container',
            move:
              '"I want to pause and rebalance. We will take two silent minutes, then critique against objective, evidence, and next decision."',
            consequence:
              'You protect the senior designer contribution while reopening the room. Critique becomes structured enough for quieter voices to re-enter.',
            coaching:
              'Facilitation is the leadership move here because the problem is not just one person; it is the shape of participation.',
            script:
              'Strong points are on the table. Now I want to hear what the rest of the room sees against the objective.',
            delta: { trust: 10, clarity: 12, integrity: 9 },
          },
          {
            approach: 'SBI',
            model: 'Situation, Behavior, Impact',
            title: 'Name the pattern live',
            move:
              '"In this critique, when one voice responds to each point first, the impact is that others stop contributing."',
            consequence:
              'You make the dynamic visible. If delivered calmly, it can shift the room; if too sharp, it may embarrass the senior designer.',
            coaching:
              'SBI is useful because it names a participation behavior without turning the senior designer into the villain.',
            script:
              'Let us change the order: silent notes first, then round-robin, then open discussion.',
            delta: { trust: 5, clarity: 10, integrity: 8 },
          },
          {
            approach: 'Avoider',
            model: 'Conflict style',
            title: 'Let it continue',
            move:
              '"These are good points, so let us keep going."',
            consequence:
              'The critique moves quickly, but the participation pattern hardens. Quiet designers learn that video critique rewards speed and status.',
            coaching:
              'Avoiding the dynamic protects the moment from awkwardness by spending psychological safety.',
            script:
              'I want to keep the useful points and change the participation pattern before we decide.',
            delta: { trust: -7, clarity: 2, integrity: -4 },
          },
        ],
      },
      {
        title: 'A junior designer messages: "I did not feel safe speaking."',
        context:
          'The meeting is over. You need to repair with the junior designer and change the system, not just reassure them privately.',
        choices: [
          {
            approach: 'Radical Candor',
            model: 'Care personally, challenge directly',
            title: 'Repair and invite input',
            move:
              '"Thank you for telling me. I should have created more space. I want your read on the work, and I am changing the critique format next time."',
            consequence:
              'The junior designer hears care and action. You avoid making them responsible for fixing the room while still inviting their expertise.',
            coaching:
              'This repair is strong because it acknowledges impact, asks for the missed contribution, and commits to a system change.',
            script:
              'You should not have had to fight for airtime. What did the room miss, and what format would make speaking easier next time?',
            delta: { trust: 12, clarity: 8, integrity: 9 },
          },
          {
            approach: 'People Pleaser',
            model: 'Conflict style',
            title: 'Reassure without changing',
            move:
              '"I am so sorry. Your voice matters so much, and I hope you speak up next time."',
            consequence:
              'The message is warm, but it puts the burden back on the junior designer. The meeting structure remains unchanged.',
            coaching:
              'Care without a system change can feel comforting but not safe. Psychological safety is built by predictable conditions, not only encouragement.',
            script:
              'I am sorry, and I am going to change the format so speaking up is not dependent on confidence alone.',
            delta: { trust: 4, clarity: -5, integrity: -5 },
          },
          {
            approach: 'AID',
            model: 'Action, Impact, Development',
            title: 'Change the critique format',
            move:
              '"When critique stays open-floor, senior voices dominate. The impact is lost input. Next time we use silent notes and facilitated turns."',
            consequence:
              'You identify the operating pattern and a new behavior. The repair moves beyond individual confidence to team practice.',
            coaching:
              'AID works because it turns a painful signal into a concrete operating improvement.',
            script:
              'I am going to name the format change at the next critique so everyone understands why we are doing it.',
            delta: { trust: 10, clarity: 11, integrity: 10 },
          },
        ],
      },
      {
        title: 'The next remote critique still needs a decision by the end.',
        context:
          'You need psychological safety and decision progress. Too much process may feel slow; too little process repeats the pattern.',
        choices: [
          {
            approach: 'Facilitator',
            model: 'Decision facilitation',
            title: 'Use silent review plus criteria',
            move:
              '"We will start with silent notes, cluster by objective, discuss the top risks, then choose a direction against the decision criteria."',
            consequence:
              'The team gets voice, structure, and a decision. The process makes dissent useful instead of performative.',
            coaching:
              'This is the strongest move because it designs for both safety and closure. Voice without decision is drift; decision without voice is brittle.',
            script:
              'The goal is not equal airtime for its own sake. The goal is better evidence before we choose.',
            delta: { trust: 11, clarity: 12, integrity: 10 },
          },
          {
            approach: 'Diplomat',
            model: 'Conflict style',
            title: 'Ask everyone to be kinder',
            move:
              '"Let us all try to be more mindful and make space for each other today."',
            consequence:
              'The intention is good, but the instruction is too vague to change the meeting mechanics. Dominant patterns may return.',
            coaching:
              'Diplomacy can set tone, but safety in critique needs explicit structure: order, criteria, turn-taking, and decision rules.',
            script:
              'I want kindness and structure, so we will use silent notes before discussion.',
            delta: { trust: 5, clarity: -3, integrity: -2 },
          },
          {
            approach: 'Fighter',
            model: 'Facilitation boundary',
            title: 'Set a no-interruption rule',
            move:
              '"No interruptions today. If anyone talks over someone else, I will stop the conversation."',
            consequence:
              'The boundary may reduce obvious dominance, but it can also make the room tense if it is not paired with a positive participation structure.',
            coaching:
              'A rule can protect safety, but rules alone do not create contribution. Pair the boundary with a clear way for people to enter.',
            script:
              'No interruptions, and we will use a round-robin so everyone has a clean opening to contribute.',
            delta: { trust: -1, clarity: 8, integrity: 7 },
          },
        ],
      },
    ],
  },
];

const scenarioDebriefs = {
  'pm-deadline': {
    lens: 'Deadline conflict is rarely process versus speed. It is usually confidence, evidence, and risk ownership competing for the same calendar space.',
    practice:
      'Practice translating design process into launch evidence: riskiest assumption, smallest test, decision rule, and owner for the tradeoff.',
    repair:
      'If trust finished low, repair with the PM by naming shared urgency first, then restating the specific evidence needed for responsible launch.',
    transfer:
      'Before the next roadmap meeting, write one sentence that separates the date from the evidence required to support that date.',
    teamPrompt:
      'Ask the team: Where do we defend process as identity, and where do we convert it into the minimum evidence a launch actually needs?',
  },
  'critique-conflict': {
    lens:
      'Critique conflict tests whether you can protect disagreement without letting status, taste, or public defensiveness run the room.',
    practice:
      'Practice converting vague critique into criteria: objective, evidence, user risk, and suggested next move.',
    repair:
      'If trust finished low, repair the relationship privately while keeping the critique standard public and consistent.',
    transfer:
      'Open your next critique by naming the decision needed, the kind of feedback wanted, and the criteria that will govern the work.',
    teamPrompt:
      'Ask the team: What kinds of disagreement make our work better, and what meeting conditions make that disagreement safer to use?',
  },
  'accessibility-scope': {
    lens:
      'Accessibility scope conflict tests whether inclusion is treated as a launch condition or as polish that can be traded away under pressure.',
    practice:
      'Practice naming the access baseline: operable flow, visible focus, labels, error announcements, and assistive technology support.',
    repair:
      'If clarity finished low, repair by turning values language into a scoped baseline with estimates, owners, and staged enhancements.',
    transfer:
      'Bring one accessibility baseline checklist to the next sprint tradeoff conversation before scope is already overloaded.',
    teamPrompt:
      'Ask the team: Which accessibility decisions are true launch requirements, and which are enhancements that can be sequenced responsibly?',
  },
  'intake-bypass': {
    lens:
      'Intake bypass conflict tests whether process is experienced as bureaucracy or as the mechanism that makes power, focus, and tradeoffs visible.',
    practice:
      'Practice replacing process defense with option framing: what moves in, what moves out, who decides, and what timeline is honest.',
    repair:
      'If integrity finished low, repair with the design team by naming hidden work and committing to visible tradeoff review before assignment.',
    transfer:
      'Create a one-line intake redirect that acknowledges urgency while preserving prioritization: "I can triage this today, and we need to name what it displaces."',
    teamPrompt:
      'Ask the team: Where do side channels enter our work, and what same-day triage path would make them visible without making us rigid?',
  },
  'research-dismissal': {
    lens:
      'Research dismissal conflict tests whether you can hold uncertainty with discipline instead of overstating insight or hiding it to keep momentum.',
    practice:
      'Practice triangulating evidence: what qualitative sessions reveal, what analytics can validate, and what decision rule would change launch readiness.',
    repair:
      'If trust finished low, repair by acknowledging the limits of the research method while restating why the repeated failure mode matters.',
    transfer:
      'For the next mixed-evidence decision, define in advance what finding would trigger mitigation, beta, rollback, or scope change.',
    teamPrompt:
      'Ask the team: When evidence is incomplete but the risk is serious, how do we avoid both false certainty and false comfort?',
  },
  'system-fork': {
    lens:
      'Design-system conflict tests whether governance enables speed with accountability or becomes a wall teams learn to route around.',
    practice:
      'Practice separating need from solution: customer need, compliant variant, local override, exception rule, sunset, and ownership.',
    repair:
      'If clarity finished low, repair by defining the exception path and the criteria for graduating work into the system.',
    transfer:
      'Add a lightweight exception template to your next system review: owner, expiry, access check, conversion decision, and debt owner.',
    teamPrompt:
      'Ask the team: Which exceptions help us learn, and which exceptions quietly create a second design system?',
  },
  'sales-promise': {
    lens:
      'Sales-promise conflict tests whether you can protect customer momentum without letting enthusiasm become an accidental product commitment.',
    practice:
      'Practice translating a promised demo into options: concept, prototype with caveats, staffed build path, and the cost of each.',
    repair:
      'If trust finished low, repair with sales by acknowledging the account pressure and co-authoring a customer message that separates interest from commitment.',
    transfer:
      'Before the next customer-facing demo, write the exact sentence that clarifies whether the work is concept, prototype, beta, or committed roadmap.',
    teamPrompt:
      'Ask the team: What phrases do customers interpret as commitments, and who is allowed to make those commitments?',
  },
  'ai-ethics': {
    lens:
      'AI ethics conflict tests whether you can keep adoption, compliance, transparency, and user agency in the room at the same time.',
    practice:
      'Practice defining the ethical baseline as designable controls: notice, explanation, opt-out, appeal, monitoring, and launch guardrails.',
    repair:
      'If integrity finished low, repair by naming what users need to understand or contest before the feature earns broader release.',
    transfer:
      'For the next AI decision, write a launch recommendation that distinguishes broad release, controlled pilot, and no-launch boundary.',
    teamPrompt:
      'Ask the team: Where are we using compliance as a finish line when the user experience still needs ethical design decisions?',
  },
  'remote-critique': {
    lens:
      'Remote critique conflict tests whether psychological safety is designed into the meeting or left to individual confidence and status.',
    practice:
      'Practice structuring participation before critique begins: silent notes, criteria, turn order, dissent capture, and decision rule.',
    repair:
      'If trust finished low, repair by acknowledging missed participation and changing the meeting mechanics, not merely encouraging people to speak up.',
    transfer:
      'Change one recurring critique this week so the first five minutes are silent review against criteria before open discussion.',
    teamPrompt:
      'Ask the team: Which voices shape our decisions by default, and what facilitation structure would make quieter evidence easier to contribute?',
  },
};

const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const panelToggles = document.querySelectorAll('.panel-toggle');
const revealItems = document.querySelectorAll('.reveal');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

const scenarioRail = document.getElementById('scenario-rail');
const scenarioNumber = document.getElementById('scenario-number');
const scenarioTags = document.getElementById('scenario-tags');
const scenarioRole = document.getElementById('scenario-role');
const scenarioTitle = document.getElementById('scenario-title');
const scenarioSummary = document.getElementById('scenario-summary');
const stageTrack = document.getElementById('stage-track');
const decisionKicker = document.getElementById('decision-kicker');
const decisionTitle = document.getElementById('decision-title');
const decisionContext = document.getElementById('decision-context');
const choiceList = document.getElementById('choice-list');
const outcomePane = document.getElementById('outcome-pane');
const outcomeActions = document.getElementById('outcome-actions');
const outcomeColumn = document.querySelector('.outcome-column');
const metricEls = {
  trust: document.getElementById('metric-trust'),
  clarity: document.getElementById('metric-clarity'),
  integrity: document.getElementById('metric-integrity'),
};
const metricValueEls = {
  trust: document.getElementById('metric-trust-value'),
  clarity: document.getElementById('metric-clarity-value'),
  integrity: document.getElementById('metric-integrity-value'),
};

const state = {
  scenarioIndex: 0,
  stageIndex: 0,
  history: [],
  completed: false,
};

const setTheme = (theme) => {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = nextTheme;

  if (themeToggle) {
    const isDark = nextTheme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', nextTheme === 'dark' ? '#131610' : '#F0EEEA');
  }
};

const clamp = (value) => Math.max(0, Math.min(100, value));

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const formatDelta = (value) => (value > 0 ? `+${value}` : String(value));

const setOutcomeActions = (html = '') => {
  outcomeActions.innerHTML = html;
  outcomeColumn?.classList.toggle('has-actions', html.trim().length > 0);
};

let outcomeScrollFrame = 0;
let clearOutcomeScrollListener = null;

const prepareOutcomeScrollCue = ({ resetScroll = false } = {}) => {
  if (!outcomePane) return;

  if (outcomeScrollFrame) {
    cancelAnimationFrame(outcomeScrollFrame);
  }

  if (clearOutcomeScrollListener) {
    clearOutcomeScrollListener();
    clearOutcomeScrollListener = null;
  }

  const audit = outcomePane.querySelector('.outcome-audit');
  const hasAlreadyScrolled = !resetScroll && outcomePane.classList.contains('has-seen-scroll');
  outcomePane.classList.remove('has-scroll-cue');
  outcomePane.classList.toggle('has-seen-scroll', hasAlreadyScrolled);

  if (!audit) return;

  if (resetScroll) {
    audit.scrollTop = 0;
  }

  outcomeScrollFrame = requestAnimationFrame(() => {
    outcomeScrollFrame = 0;
    const needsScroll = audit.scrollHeight > audit.clientHeight + 2;

    outcomePane.classList.toggle('has-scroll-cue', needsScroll);

    if (!needsScroll) {
      outcomePane.classList.remove('has-seen-scroll');
      return;
    }

    if (outcomePane.classList.contains('has-seen-scroll')) return;

    const markSeen = () => {
      outcomePane.classList.add('has-seen-scroll');
      clearOutcomeScrollListener = null;
    };

    audit.addEventListener('scroll', markSeen, { once: true, passive: true });
    clearOutcomeScrollListener = () => audit.removeEventListener('scroll', markSeen);
  });
};

const coachingLenses = {
  Fighter: {
    protects: 'A clear boundary, speed, and visible accountability when the work carries real risk.',
    risks:
      'It can convert useful task conflict into relationship conflict if people experience the move as status, blame, or a public veto.',
    useWhen:
      'Use it when harm, ethics, safety, or a non-negotiable product standard is at stake. Pair the boundary with shared purpose and evidence.',
    research:
      'Conflict research separates task conflict from relationship conflict; the same disagreement becomes less useful when it feels personal or status-threatening.',
  },
  Negotiator: {
    protects:
      'Shared ownership, decision quality, and the possibility that both sides are protecting legitimate constraints.',
    risks:
      'It can become over-collaboration if you keep exploring interests but never anchor a concrete recommendation or decision rule.',
    useWhen:
      'Use it when the other side has real constraints and you need a tradeoff, not a winner. Name interests, options, and objective criteria.',
    research:
      'Principled negotiation emphasizes interests over positions, options for mutual gain, and criteria that do not depend on whoever has the loudest voice.',
  },
  Diplomat: {
    protects:
      'Face-saving, short-term stability, and enough alignment to keep a complicated conversation from breaking down.',
    risks:
      'Middle ground can become shallow compromise: everyone gives something up, but the riskiest assumption remains untested.',
    useWhen:
      'Use it as a temporary bridge when trust is fragile or the issue is too complex to solve in one meeting. Make the temporary nature explicit.',
    research:
      'Negotiation research warns that splitting the difference can miss underlying interests; compromise is not the same as joint problem solving.',
  },
  Avoider: {
    protects:
      'Emotional regulation, timing, and the option to return when people can think instead of simply react.',
    risks:
      'If it is not time-boxed, avoidance becomes conflict debt. The system keeps moving, but the assumptions are now invisible.',
    useWhen:
      'Use it when emotions are too hot, stakes are low, or you genuinely need missing information. Always name when and how you will return.',
    research:
      'Relationship conflict reliably damages team outcomes; pausing can help prevent escalation, but unresolved conflict tends to reappear as process drag.',
  },
  'People Pleaser': {
    protects:
      'Belonging, warmth, and short-term relationship comfort, especially when power differences make directness feel risky.',
    risks:
      'It creates false alignment. The group hears agreement, while the real concern moves underground and becomes harder to repair later.',
    useWhen:
      'Use the care underneath the instinct, but do not trade away the truth. Convert agreement into a conditional yes with visible risks.',
    research:
      'Psychological safety and employee voice research show that teams learn when people can raise concerns without interpersonal punishment.',
  },
  'Radical Candor': {
    protects:
      'Both care and standards: the relationship is treated as real, and the work still receives direct challenge.',
    risks:
      'If the care is not credible or specific, the challenge can sound like a polished version of criticism.',
    useWhen:
      'Use it when silence would create false confidence, but bluntness would create defensiveness. Lead with shared commitment and observable facts.',
    research:
      'Feedback research suggests feedback lands better when attention stays on task, behavior, and next action rather than on the person’s identity.',
  },
  SBI: {
    protects:
      'Specificity. It slows the leap from visible behavior to character judgment and gives the other person something concrete to respond to.',
    risks:
      'It can feel procedural or prosecutorial if delivered without curiosity, especially when the other person already feels exposed.',
    useWhen:
      'Use it when the conflict is getting blurry. State the situation, name observable behavior, then describe impact without assigning motive.',
    research:
      'Feedback Intervention Theory cautions that feedback can backfire when it pulls attention toward the self instead of the task and next behavior.',
  },
  AID: {
    protects:
      'A development path. It moves from what happened, to why it matters, to what should change next.',
    risks:
      'It can over-focus on correction if you skip the relationship, the constraint, or the part of the person’s intent that was reasonable.',
    useWhen:
      'Use it when a pattern needs to change and you want the conversation to end with a clear behavior, owner, and follow-up.',
    research:
      'Feedback is more useful when it is actionable and close to the work; vague evaluation rarely changes behavior on its own.',
  },
  Facilitator: {
    protects:
      'The conditions for better conflict: shared purpose, turn-taking, criteria, and enough psychological safety for dissent to be usable.',
    risks:
      'Process can become avoidance if facilitation replaces the hard decision the group actually needs to make.',
    useWhen:
      'Use it when the room is mixing critique, status, decision-making, and emotion. Design the container before debating the content.',
    research:
      'Psychological safety research links leader inclusiveness and clear team structures with speaking up, learning, and improvement behavior.',
  },
  'Informational power': {
    protects:
      'Evidence quality and shared decision-making. Information becomes a service to the group rather than private leverage.',
    risks:
      'Information can become a weapon if it is used to corner people or make them look irresponsible in public.',
    useWhen:
      'Use it when the conflict needs facts, examples, user impact, or decision criteria. Invite the other function to shape the options.',
    research:
      'Influence without authority often depends on expert and informational power, but trust depends on whether that power is used transparently.',
  },
};

const choiceCoachingDepth = {
  'Hold the line immediately':
    'The boundary is legitimate, but the opening move makes the PM defend speed before you have framed the user risk. A stronger version separates the non-negotiable outcome from the negotiable process: what evidence is essential, what can be compressed, and what decision rule will govern launch.',
  'Reframe around launch evidence':
    'This is one of the strongest lateral moves because it does not ask the PM to choose between deadline and design ritual. The nuance is to follow the question with an anchor: the riskiest assumption, the smallest test, and the result that would change the launch plan.',
  'Agree and absorb the risk':
    'This is only responsible when the risk is genuinely low or when the launch has an explicit rollback, beta label, or monitoring plan. Without those guardrails, the yes creates false alignment: the PM hears support, the design team loses a boundary, and customers inherit the uncertainty.',
  'Trade scope for learning':
    'This move protects both the date and the decision quality because it trades breadth, not confidence. Make the trade visible in writing so the team understands that discovery was not skipped; it was narrowed to the question most likely to change the plan.',
  'Delay the decision':
    'Pausing can be mature when the group is flooded or missing critical data. In this moment, the decision is already live, so delay needs a hard return time and a named owner or it becomes an invitation for others to proceed on assumptions.',
  'Split the process in half':
    'This feels fair because everyone sacrifices something, but fairness is not the same as risk reduction. The more nuanced move is to ask which activity actually lowers the launch risk; if user evidence is the missing input, cutting that may preserve harmony while weakening the product.',
  'Name support and risk together':
    'This is high-skill public alignment: you protect the PM from surprise while refusing to hide material risk. The sentence works because it holds three truths at once: shared goal, current uncertainty, and a concrete checkpoint that lets executives make an informed decision.',
  'Escalate around the PM':
    'Escalation may be ethical if the plan creates real harm, but doing it around your partner changes the conflict from task disagreement to relationship rupture. The cleaner escalation is pre-briefed when possible, evidence-led in the room, and focused on the decision criteria rather than the PM intent.',
  'Signal alignment only':
    'This keeps the room comfortable by removing the very information leaders need. The more disciplined move is to align on the goal, then state the condition for responsible support; that preserves trust now and protects credibility if the launch later struggles.',
  'Ground the moment':
    'This is effective because it converts a vague status move into usable critique without humiliating the peer. The nuance is tone: the same SBI structure can feel like facilitation or like a public correction depending on whether you invite criteria with curiosity.',
  'Defend the direction':
    'The impulse is understandable because critique can feel like an attack on judgment. The problem is that defending the answer too soon teaches the room to debate taste and authority; a stronger move protects the critique standard before defending the design.',
  'Move past it':
    'Moving on preserves pace, but the room still learns from the moment. If a sharp comment goes uninterpreted, junior teammates may conclude that critique is socially risky and that leaders prefer speed over safety.',
  'Repair and clarify':
    'This is a strong repair because it does not confuse listening with surrender. You acknowledge impact, check your own speed, and restate the critique standard so the peer can stay influential without making the room less safe.',
  'Concede to smooth it over':
    'An apology can be generous, but this version overcorrects before the facts are clear. The nuance is to apologize for impact while keeping the behavioral standard intact: critique is welcome, criteria are required, and the work still needs a decision.',
  'Document the decision':
    'Rationale helps clarity, but it cannot substitute for repair when someone feels shut down. If you send documentation first, it may read as a legal brief; talk first, then use the rationale to support shared understanding.',
  'Set criteria first':
    'This is strong because it designs the conditions for productive conflict before people are emotionally invested in winning. Criteria make disagreement safer and more useful: the team can challenge the work without challenging each other status.',
  'Blend both directions':
    'Blending can be useful after the team has identified complementary strengths. Used too early, it rewards social discomfort instead of design reasoning and can produce a compromised concept that satisfies nobody and serves no clear user need.',
  'Keep critique smaller':
    'Reducing the room can help when a decision needs speed, but using exclusion to avoid one difficult voice creates hidden resistance. A better move is to keep the necessary voices and redesign the critique container so dissent has rules.',
  'Make it non-negotiable':
    'The ethical stance is correct: public workflows need baseline access. The nuance is that a value statement still needs an implementation path; pairing the boundary with a minimum viable baseline helps engineering move from agreement in principle to action in sprint planning.',
  'Decompose the work':
    'This is the strongest collaborative move because it refuses the false binary of perfect accessibility or no accessibility. By separating must-ship access from enhancements, you give engineering a solvable scope while keeping the product commitment intact.',
  'Accept the deferral':
    'This sounds cooperative but makes exclusion a scheduling problem instead of a launch problem. If access is required for the workflow to be usable, a fast-follow promise does not protect users unless there is a narrow release, a clear mitigation, and accountable follow-through.',
  'Bring evidence and options':
    'This uses informational power cleanly: evidence expands the team ability to decide rather than cornering engineering. The nuance is to offer options with effort and risk attached so the conversation becomes joint problem solving, not a moral lecture.',
  'Name the pattern':
    'This is useful because repeated access cuts are a system signal, not a one-off prioritization choice. Keep the language behavioral and cumulative so the team can see the pattern without hearing accusation: what moved, when it moved, and who was affected.',
  'Hand it to a specialist':
    'Expert input can improve the recommendation, but outsourcing the decision lets everyone avoid ownership. The stronger move keeps a baseline reserved now, then uses the specialist to validate details and reduce implementation uncertainty.',
  'Anchor a baseline plus staged plan':
    'This is strong because it names the floor and the flexibility separately. Engineering can negotiate implementation details, but the team cannot negotiate away operability, understandable labels, focus visibility, and error recovery for a public workflow.',
  'Reduce to visible polish':
    'This is passable only for a narrow visual-quality issue; it is not enough for functional access. Contrast and focus are part of the baseline, but screen reader support, keyboard operation, and understandable errors are what make the workflow usable.',
  'Block the release':
    'A release block can be the right move when the remaining harm is material and avoidable. It should come after the baseline has been defined, options have been offered, and the team understands exactly what user harm justifies escalation.',
  'Take the request':
    'This protects the stakeholder relationship in the moment while quietly taxing the team system. The danger is precedent: one heroic save teaches stakeholders that side channels work and teaches designers that prioritization is less real than executive urgency.',
  'Acknowledge and redirect':
    'This is strong because it validates urgency without letting urgency erase the operating model. The redirect works best when it is immediate and practical: same-day triage, explicit tradeoff, and a staffing decision that does not hide the cost.',
  'Wait for the form':
    'The boundary is clear but emotionally underpowered for a senior request with executive pressure attached. Process needs a human bridge: acknowledge the business signal, ask for the needed details, and create a short triage path so the form is not experienced as stonewalling.',
  'Name the system impact':
    'This is a good team repair move because it names the operating failure rather than asking people to be more patient. The development step matters most: the team needs to hear what will change before the next request arrives.',
  'Quietly absorb the work':
    'This reduces friction today by borrowing trust from tomorrow. When leaders absorb unplanned work invisibly, they train the team to expect hidden labor, unclear priorities, and resentment that surfaces later as burnout or cynicism.',
  'Call out the stakeholder':
    'The protective instinct is real, and the team may need to see you hold the line. Aim the force at the pattern and decision mechanism rather than the person, or the conversation becomes a loyalty test instead of a capacity discussion.',
  'Show options and tradeoffs':
    'This is strong because it translates design process into executive language: choices, cost, speed, and opportunity tradeoff. It also preserves lateral influence because you are not asking for permission to say no; you are making the strategic decision legible.',
  'Defend the rule':
    'A rule without its business reason can sound like bureaucracy. The stronger explanation is that intake protects focus, sequencing, and quality; then show what gets delayed if the executive idea moves ahead.',
  'Make an exception':
    'Exceptions are sometimes right, but only when they are explicit and paid for. If you make one quietly, it becomes shadow process; if you make it visibly, it becomes a leadership tradeoff with a named cost.',
  'Triangulate the signal':
    'This move is strong because it respects the limits of qualitative evidence without pretending the pattern is meaningless. A design leader does not need to prove certainty; they need to clarify what kind of risk the current evidence is good at seeing.',
  'Defend the research':
    'The user advocacy is real, but the phrasing risks making the PM defend their evidence identity. The stronger version compares evidence streams: analytics show what users did at scale, while sessions can reveal why a high-stakes moment is failing.',
  'Downplay the finding':
    'This avoids looking alarmist, but it teaches the room that research only matters when it is statistically large. If the failure mode is severe and repeated, the better move is a small mitigation or decision rule, not silence.',
  'Define a decision rule':
    'This is a mature uncertainty move. It prevents the team from relitigating taste after every data point because everyone agrees in advance what evidence would change the plan.',
  'Ask for more research':
    'More research may be useful, but the request is too vague to help a time-sensitive decision. Ask for the smallest learning loop that could change launch readiness, then make the tradeoff visible.',
  'Label it a watch item':
    'A watch item can be responsible only when it has a metric, threshold, owner, and response plan. Without those, it is a polite way of moving the risk out of the meeting and into the user experience.',
  'Support beta with guardrails':
    'This is strong because it matches recommendation strength to evidence strength. You preserve momentum while making uncertainty visible, bounded, and actively managed.',
  'Recommend no launch':
    'A hard stop is credible when evidence and harm are both strong. Here, the insight may justify limiting scope before broad release, but a full block can make partners attack the research method instead of address the user risk.',
  'Green-light without caveat':
    'This is a credibility leak. It turns mixed evidence into false certainty, which may feel helpful in the room but weakens research influence when the unresolved risk appears later.',
  'Separate need from solution':
    'This is strong because it refuses the first proposed implementation without rejecting the customer need. Design-system leadership often starts by reopening the option space under pressure.',
  'Reject the fork':
    'The boundary protects system integrity, but a naked no can make the system feel like a gatekeeping body. Pair the refusal with the fastest compliant alternative so governance remains enabling.',
  'Approve the exception':
    'This is tempting because demo urgency is real. The leadership risk is that later cleanup is rarely funded unless the exception has a visible owner, expiration date, and conversion path before it ships.',
  'Offer a system-safe variant':
    'This is a strong tradeoff because it makes capacity explicit. You protect revenue urgency and system health by naming what work pauses, who owns the variant, and how it re-enters governance.',
  'Fork and document it':
    'Documentation is better than secrecy, but it is not governance by itself. The nuance is whether the fork has a sunset; if not, the document becomes permission for future drift.',
  'Send it to backlog':
    'The process answer is technically correct but strategically weak. When urgency is high, a backlog-only response teaches teams to route around the system instead of inviting it into the decision.',
  'Create an exception rule':
    'This is the strongest recovery move because it turns an awkward one-off into a reusable operating agreement. It protects speed and integrity by making exception costs explicit.',
  'Name the fork pattern':
    'This works because it makes the system impact visible without shaming the first team. AID helps move from what happened, to why it matters, to the new habit that prevents recurrence.',
  'Lock the system down':
    'A lock-down can stop drift briefly, but it can also drive work underground. The more durable boundary includes a fast lane so teams surface exceptions early while there is still time to shape them.',
  'Translate promise into options':
    'This is strong because it converts a surprise commitment into explicit options with risk levels. The move protects the account without pretending design capacity, product scope, and delivery confidence are already solved.',
  'Call out the promise':
    'The governance concern is real, but the phrasing can make sales defend themselves instead of partnering on the customer message. Name the commitment mechanism and the tradeoff, not the character of the team that made the promise.',
  'Rally design overnight':
    'This is tempting because it feels helpful and heroic. The hidden cost is that the design team becomes the shock absorber for a commitment they did not shape, and the customer may confuse a rushed prototype with a real roadmap signal.',
  'Name demo truth and risk':
    'This move protects momentum and credibility at the same time. It says the customer can see the direction, but the team will not let prototype polish silently become delivery certainty.',
  'Polish without caveat':
    'This can win the room in the short term while creating future mistrust. When a prototype looks real, caveats have to be equally real or the design becomes a promise-making tool.',
  'Show implementation assumptions':
    'This uses information to slow the conversation productively. By making assumptions visible, the team can decide which risks to expose, mitigate, or remove before the customer hears the story.',
  'Commit to a discovery path':
    'This is the cleanest answer because it gives the customer progress without inventing certainty. It changes the commitment from delivery date to decision process, which is often the most honest next step.',
  'Say yes-ish':
    'Soft optimism is still a signal when a customer is listening for commitments. The safer move is to be explicit about what is known, what is not known, and when the team will return with a real recommendation.',
  'Refuse the commitment publicly':
    'The directness protects truth but can damage the account relationship if it lacks a bridge. A stronger refusal names what cannot be promised and immediately offers the next credible commitment.',
  'Define informed consent baseline':
    'This is strong because it treats ethics as a design problem the team can solve, not a speech about values. It keeps adoption in view while making user understanding a launch requirement.',
  'Insist on transparency':
    'The boundary is right when user agency is at stake. It becomes more influential when paired with a testable design path: visible enough to inform, concise enough not to overwhelm.',
  'Soften the warning':
    'This protects adoption by weakening user understanding. In AI contexts, subtle language can become functional concealment if users do not know when automation is shaping the recommendation.',
  'Name ethics beyond compliance':
    'This is a mature cross-functional move because it respects legal clearance while keeping design accountability alive. Compliance can say what is allowed; design still has to decide what users can understand and control.',
  'Bring user harm cases':
    'Concrete harm pathways help the team move past abstract ethics debate. The more specific the user misunderstanding, the easier it is to design a protection or make a principled launch boundary.',
  'Wait for policy':
    'Waiting can be responsible if policy is imminent and risk is severe. Here, it may also let the team avoid the local design choices it already owns: notice, choice, appeal, and monitoring.',
  'Launch a controlled pilot':
    'This is strong because it matches release scope to uncertainty. A pilot is not a loophole; it is only responsible when the protections and review triggers are named before launch.',
  'Block until audit':
    'A full audit boundary can be right for irreversible or high-harm decisions. If the risk can be contained, a guardrailed pilot may protect users while preserving learning and influence.',
  'Rely on opt-out':
    'Opt-out sounds like user control, but it fails if users do not understand what they are opting out of. Control has to appear at the decision moment, not only in buried settings.',
  'Reset the container':
    'This is strong because it treats the room dynamic as designable. You preserve the senior designer insight while changing the participation structure that was narrowing the conversation.',
  'Name the pattern live':
    'This can shift the room quickly, but it needs a calm tone and a concrete next structure. Without that structure, SBI may feel like a public correction instead of facilitation.',
  'Let it continue':
    'This keeps the meeting comfortable for the loudest voices while teaching quieter people that participation is optional or unsafe. The hidden cost shows up later as weaker decisions and less ownership.',
  'Repair and invite input':
    'This is strong repair because it combines accountability, curiosity, and a system change. You do not make the junior designer responsible for becoming louder in a meeting format that failed them.',
  'Reassure without changing':
    'Warmth helps, but encouragement without structure often leaves the same power pattern intact. Psychological safety is built through predictable meeting mechanics, not just kind words.',
  'Change the critique format':
    'This is effective because it turns feedback about safety into a specific operating change. The next step should be public enough that the team sees the system learning from the signal.',
  'Use silent review plus criteria':
    'This is the strongest facilitation move because it protects both inclusion and closure. Silent notes generate broader evidence; criteria prevent the discussion from becoming a popularity contest.',
  'Ask everyone to be kinder':
    'The intention is generous but too vague to change behavior. Kindness becomes useful when translated into meeting mechanics: who speaks when, what evidence counts, and how the decision will be made.',
  'Set a no-interruption rule':
    'A boundary can reduce harm, but a prohibition alone can also make people cautious. Pair it with a positive entry path so the room knows how to contribute, not only what to avoid.',
};

const getCoachingLens = (choice) =>
  coachingLenses[choice.approach] ||
  (choice.model.includes('SBI') ? coachingLenses.SBI : null) ||
  (choice.model.includes('AID') ? coachingLenses.AID : null) ||
  (choice.model.includes('Radical') ? coachingLenses['Radical Candor'] : null) ||
  (choice.model.includes('negotiation') || choice.model.includes('anchoring')
    ? coachingLenses.Negotiator
    : null) ||
  coachingLenses.Negotiator;

const getChoiceDepth = (choice) =>
  choiceCoachingDepth[choice.title] ||
  'Look for what this move protects, what it hides, and what repair would be needed if the cost shows up later.';

const getDeltaNarrative = (choice) => {
  const losses = Object.entries(choice.delta)
    .filter(([, value]) => value < 0)
    .sort((a, b) => a[1] - b[1])
    .map(([key]) => key);
  const gains = Object.entries(choice.delta)
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key);

  if (losses.length && gains.length) {
    return `This move buys ${gains.join(' and ')} by spending ${losses.join(' and ')}. In real leadership, that tradeoff is acceptable only if you plan the repair, not just the decision.`;
  }

  if (losses.length) {
    return `This move weakens ${losses.join(' and ')}. Before using it, ask whether the short-term relief is worth the hidden cost it creates for the next conversation.`;
  }

  return `This move improves ${gains.join(' and ')}. It is still worth naming the constraint aloud so the group understands why this response fits this moment.`;
};

const getMetrics = () => {
  const metrics = { trust: 60, clarity: 60, integrity: 60 };
  state.history.forEach((choice) => {
    if (!choice) return;
    metrics.trust = clamp(metrics.trust + choice.delta.trust);
    metrics.clarity = clamp(metrics.clarity + choice.delta.clarity);
    metrics.integrity = clamp(metrics.integrity + choice.delta.integrity);
  });
  return metrics;
};

const renderMetrics = () => {
  const metrics = getMetrics();
  Object.entries(metrics).forEach(([key, value]) => {
    metricEls[key].style.width = `${value}%`;
    metricValueEls[key].textContent = value;
  });
};

const renderRail = () => {
  scenarioRail.innerHTML = scenarios
    .map(
      (scenario, index) => `
        <button
          class="scenario-button${index === state.scenarioIndex ? ' is-active' : ''}"
          type="button"
          data-scenario-index="${index}"
          aria-pressed="${index === state.scenarioIndex}"
        >
          <span>${escapeHtml(scenario.number)}</span>
          <strong>${escapeHtml(scenario.title)}</strong>
        </button>
      `,
    )
    .join('');
};

const renderStageTrack = (scenario) => {
  const stageItems = scenario.decisions
    .map((decision, index) => {
      const isComplete = Boolean(state.history[index]);
      const isCurrent = index === state.stageIndex && !state.completed;
      const className = `stage-pill${isCurrent ? ' is-current' : ''}${isComplete ? ' is-complete' : ''}`;
      return `<span class="${className}">Decision ${index + 1}</span>`;
    })
    .join('');
  stageTrack.innerHTML = stageItems;
};

const renderOutcome = (choice, isFinalDecision) => {
  const lens = getCoachingLens(choice);
  const choiceDepth = getChoiceDepth(choice);
  const tradeoff = getDeltaNarrative(choice);

  outcomePane.classList.add('is-live');
  outcomePane.innerHTML = `
    <div class="outcome-audit">
      <p class="detail-label">${escapeHtml(choice.approach)} / ${escapeHtml(choice.model)}</p>
      <h4>${escapeHtml(choice.title)}</h4>
      <p>${escapeHtml(choice.consequence)}</p>
      <div class="delta-grid" aria-label="Metric changes">
        <div><span>Trust</span><strong>${formatDelta(choice.delta.trust)}</strong></div>
        <div><span>Clarity</span><strong>${formatDelta(choice.delta.clarity)}</strong></div>
        <div><span>Integrity</span><strong>${formatDelta(choice.delta.integrity)}</strong></div>
      </div>
      <div class="coach-block">
        <span>Coaching</span>
        <p>${escapeHtml(choice.coaching)}</p>
        <p>${escapeHtml(choiceDepth)}</p>
      </div>
      <div class="coach-block">
        <span>Tradeoff read</span>
        ${escapeHtml(tradeoff)}
      </div>
      <div class="nuance-grid">
        <div>
          <span>Protects</span>
          ${escapeHtml(lens.protects)}
        </div>
        <div>
          <span>Watch for</span>
          ${escapeHtml(lens.risks)}
        </div>
        <div>
          <span>Works best when</span>
          ${escapeHtml(lens.useWhen)}
        </div>
        <div>
          <span>Research lens</span>
          ${escapeHtml(lens.research)}
        </div>
      </div>
      <div class="micro-script">
        <span>Stronger move</span>
        ${escapeHtml(choice.script)}
      </div>
    </div>
  `;
  setOutcomeActions(`
    <button class="next-button" type="button" data-next-decision>${isFinalDecision ? 'Finish rehearsal' : 'Next decision'}</button>
  `);
  prepareOutcomeScrollCue({ resetScroll: true });
};

const renderDebrief = () => {
  const scenario = scenarios[state.scenarioIndex];
  const debrief = scenarioDebriefs[scenario.id] || {
    lens:
      'This rehearsal is testing how well the team keeps the work, the relationship, and the truth visible at the same time.',
    practice: 'Practice naming the real tradeoff, the decision owner, and the repair plan before the conversation ends.',
    repair: 'If one metric finished low, plan one concrete repair before replaying the scenario.',
    transfer: 'Choose one live meeting this week where the same leadership move would help.',
    teamPrompt:
      'Ask the team: Which choice felt natural, which choice felt hardest, and what system condition made the conflict predictable?',
  };
  const metrics = getMetrics();
  const sortedMetrics = Object.entries(metrics).sort((a, b) => b[1] - a[1]);
  const strongest = sortedMetrics[0][0];
  const stretch = sortedMetrics[sortedMetrics.length - 1][0];
  const approachCounts = state.history.reduce((counts, choice) => {
    counts[choice.approach] = (counts[choice.approach] || 0) + 1;
    return counts;
  }, {});
  const dominant = Object.entries(approachCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Mixed';

  outcomePane.classList.add('is-live');
  outcomePane.innerHTML = `
    <div class="outcome-audit">
      <p class="detail-label">Debrief profile / ${escapeHtml(scenario.title)}</p>
      <h4>${escapeHtml(dominant)} instincts showed up most.</h4>
      <div class="debrief-card">
        <span>Scenario read</span>
        ${escapeHtml(debrief.lens)}
      </div>
      <div class="debrief-grid">
        <div>
          <span>Strongest signal</span>
          ${escapeHtml(strongest)} finished highest. Notice what your choices protected and how that strength helped the conversation move.
        </div>
        <div>
          <span>Stretch signal</span>
          ${escapeHtml(stretch)} finished lowest. This is where the real-world repair or reinforcement plan should start.
        </div>
        <div>
          <span>Practice focus</span>
          ${escapeHtml(debrief.practice)}
        </div>
        <div>
          <span>Repair move</span>
          ${escapeHtml(debrief.repair)}
        </div>
      </div>
      <div class="coach-block">
        <span>Transfer drill</span>
        <p>${escapeHtml(debrief.transfer)}</p>
        <p>${escapeHtml(debrief.teamPrompt)}</p>
      </div>
    </div>
  `;
  setOutcomeActions(`
    <div class="debrief-actions">
      <button class="reset-button" type="button" data-reset-scenario>Replay this scenario</button>
      <button class="next-button" type="button" data-next-scenario>Try another scenario</button>
    </div>
  `);
  prepareOutcomeScrollCue({ resetScroll: true });
};

const renderDecision = () => {
  const scenario = scenarios[state.scenarioIndex];
  const decision = scenario.decisions[state.stageIndex];
  const selectedChoice = state.history[state.stageIndex];

  decisionKicker.textContent = `Decision ${state.stageIndex + 1} of ${scenario.decisions.length}`;
  decisionTitle.textContent = decision.title;
  decisionContext.textContent = decision.context;
  choiceList.innerHTML = decision.choices
    .map(
      (choice, index) => `
        <button
          class="choice-card${selectedChoice === choice ? ' is-selected' : ''}"
          type="button"
          data-choice-index="${index}"
          aria-pressed="${selectedChoice === choice}"
        >
          <span>${escapeHtml(choice.approach)} / ${escapeHtml(choice.model)}</span>
          <strong>${escapeHtml(choice.title)}</strong>
          <em>${escapeHtml(choice.move)}</em>
        </button>
      `,
    )
    .join('');

  if (state.completed) {
    renderDebrief();
  } else if (selectedChoice) {
    renderOutcome(selectedChoice, state.stageIndex === scenario.decisions.length - 1);
  } else {
    outcomePane.classList.remove('is-live');
    setOutcomeActions();
    outcomePane.innerHTML = `
      <div class="outcome-audit">
        <p class="detail-label">Coach's console</p>
        <h4>Pick an approach.</h4>
        <p>
          See the consequence, metric shifts, coaching note, and a sentence you could try in the
          real conversation.
        </p>
      </div>
    `;
    prepareOutcomeScrollCue({ resetScroll: true });
  }
};

const renderScenario = () => {
  const scenario = scenarios[state.scenarioIndex];
  scenarioNumber.textContent = scenario.number;
  scenarioRole.textContent = scenario.role;
  scenarioTitle.textContent = scenario.title;
  scenarioSummary.textContent = scenario.summary;
  scenarioTags.innerHTML = scenario.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');
  renderRail();
  renderStageTrack(scenario);
  renderMetrics();
  renderDecision();
};

const setScenario = (index) => {
  state.scenarioIndex = index;
  state.stageIndex = 0;
  state.history = [];
  state.completed = false;
  renderScenario();
};

setTheme(document.documentElement.dataset.theme);

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);

  try {
    localStorage.setItem('conflict-simulator-theme', nextTheme);
  } catch {
    // Theme persistence is a nice-to-have; the toggle still works without storage.
  }
});

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
};

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', prepareOutcomeScrollCue, { passive: true });
updateHeader();

document.fonts?.ready.then(prepareOutcomeScrollCue).catch(() => {});

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  siteNav?.classList.toggle('is-open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    siteNav?.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

panelToggles.forEach((toggle) => {
  const details = document.getElementById(toggle.getAttribute('aria-controls'));

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    details?.classList.toggle('is-open', !isOpen);
  });
});

document.addEventListener('click', (event) => {
  const scenarioButton = event.target.closest('[data-scenario-index]');
  if (scenarioButton) {
    setScenario(Number(scenarioButton.dataset.scenarioIndex));
    return;
  }

  const launchButton = event.target.closest('[data-scenario-launch]');
  if (launchButton) {
    const index = scenarios.findIndex((scenario) => scenario.id === launchButton.dataset.scenarioLaunch);
    if (index >= 0) {
      setScenario(index);
      document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return;
  }

  const choiceButton = event.target.closest('[data-choice-index]');
  if (choiceButton && !state.completed) {
    const scenario = scenarios[state.scenarioIndex];
    const decision = scenario.decisions[state.stageIndex];
    state.history[state.stageIndex] = decision.choices[Number(choiceButton.dataset.choiceIndex)];
    renderScenario();
    return;
  }

  if (event.target.closest('[data-next-decision]')) {
    const scenario = scenarios[state.scenarioIndex];
    if (!state.history[state.stageIndex]) return;
    if (state.stageIndex < scenario.decisions.length - 1) {
      state.stageIndex += 1;
    } else {
      state.completed = true;
    }
    renderScenario();
    return;
  }

  if (event.target.closest('[data-reset-scenario]')) {
    setScenario(state.scenarioIndex);
    return;
  }

  if (event.target.closest('[data-next-scenario]')) {
    setScenario((state.scenarioIndex + 1) % scenarios.length);
  }
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

renderScenario();
