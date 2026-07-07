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
];

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
  outcomePane.classList.add('is-live');
  outcomePane.innerHTML = `
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
      ${escapeHtml(choice.coaching)}
    </div>
    <div class="micro-script">
      <span>Try saying</span>
      ${escapeHtml(choice.script)}
    </div>
    <button class="next-button" type="button" data-next-decision>${isFinalDecision ? 'Finish rehearsal' : 'Next decision'}</button>
  `;
};

const renderDebrief = () => {
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
    <p class="detail-label">Debrief profile</p>
    <h4>${escapeHtml(dominant)} instincts showed up most.</h4>
    <div class="debrief-card">
      <span>Strongest signal</span>
      ${escapeHtml(strongest)} finished highest. Notice what your choices protected.
    </div>
    <div class="debrief-card">
      <span>Stretch signal</span>
      ${escapeHtml(stretch)} finished lowest. In a real conversation, this is where you would plan repair or reinforcement.
    </div>
    <div class="coach-block">
      <span>Team debrief</span>
      Which choice would your team naturally make? Which choice would be hardest to say out loud? What system condition made the conflict predictable?
    </div>
    <div class="debrief-actions">
      <button class="reset-button" type="button" data-reset-scenario>Replay this scenario</button>
      <button class="next-button" type="button" data-next-scenario>Try another scenario</button>
    </div>
  `;
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
    outcomePane.innerHTML = `
      <p class="detail-label">Coach's console</p>
      <h4>Pick an approach.</h4>
      <p>
        See the consequence, metric shifts, coaching note, and a sentence you could try in the
        real conversation.
      </p>
    `;
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
updateHeader();

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
      document.getElementById('simulator-console')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
