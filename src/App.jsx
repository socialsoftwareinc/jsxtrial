import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import { useState } from "react";

const PHASES = [
  {
    id: "foundation",
    label: "Phase 1",
    title: "Foundation Work",
    subtitle: "Before you write a word",
    color: "#1a1a2e",
    accent: "#e8c547",
    timeEstimate: "2–3 hours",
    description: "The proposal fails or succeeds here. Most applicants skip this phase entirely and it shows.",
    categories: [
      {
        id: "self_audit",
        title: "Self-Audit",
        icon: "◈",
        tasks: [
          {
            id: "t1",
            text: "Write a 3-sentence answer to: What is the one thing I am uniquely positioned to do that almost no one else would think of or attempt?",
            tip: "This becomes the spine of your entire proposal. If you can't answer it, you're not ready to write yet.",
            done: false,
          },
          {
            id: "t2",
            text: "List 3 unconventional things you have already done — actions taken despite obstacles, not plans for the future.",
            tip: "Tyler bets on 'doer energy.' Prior action, however small, is more credible than any stated intention.",
            done: false,
          },
          {
            id: "t3",
            text: "Identify the specific moment or observation that made this problem feel urgent to you personally.",
            tip: "Generic origin stories ('I've always cared about X') are forgettable. A precise moment is memorable.",
            done: false,
          },
        ],
      },
      {
        id: "idea_sharpening",
        title: "Idea Sharpening",
        icon: "◉",
        tasks: [
          {
            id: "t4",
            text: "Write one sentence: 'My signature product is ___.' It must be a concrete thing — not a goal, not a domain.",
            tip: "Tyler's most common interview question is 'What is your signature product?' Answer it before he asks.",
            done: false,
          },
          {
            id: "t5",
            text: "Apply the Net New test: What happens if this grant doesn't exist? If the answer is 'someone else probably does this anyway' — rethink.",
            tip: "EV funds ideas that are impossible or significantly delayed without them. Marginal improvements belong elsewhere.",
            done: false,
          },
          {
            id: "t6",
            text: "Apply the 'So What?' test to your idea: Write the impact two levels down. Not just what you'll do, but what changes because of it.",
            tip: "Weak: 'I'll build a tool.' Strong: 'I'll build a tool → 50 cities get audited → $40M in waste surfaces.'",
            done: false,
          },
          {
            id: "t7",
            text: "Gut-check ambition: Would a standard grant committee reject this as 'too speculative'? If no, it might be too conservative for EV.",
            tip: "EV explicitly funds moonshots. If it sounds safe and fundable anywhere, it's probably not the right fit.",
            done: false,
          },
        ],
      },
      {
        id: "reviewer_study",
        title: "Know Your Reviewer",
        icon: "◎",
        tasks: [
          {
            id: "t8",
            text: "Read 10 recent EV winner announcements on Marginal Revolution. Note what makes each description compelling in 3 words or fewer.",
            tip: "Tyler's cohort announcements are short. They describe winners in ways that make you say 'that's interesting.' Study that feeling.",
            done: false,
          },
          {
            id: "t9",
            text: "Read Tyler's Marginal Revolution blog for 30 minutes. Notice: What excites him? What does he find tiresome? Mirror his intellectual register.",
            tip: "Writing to impress Tyler specifically — a curious polymath economist — is different from writing for a generic committee.",
            done: false,
          },
        ],
      },
    ],
  },
  {
    id: "drafting",
    label: "Phase 2",
    title: "Drafting",
    subtitle: "The three questions",
    color: "#16213e",
    accent: "#4ecdc4",
    timeEstimate: "3–5 hours",
    description: "EV has exactly three prompts. Each has a distinct job. Don't treat them as one long essay.",
    categories: [
      {
        id: "q1",
        title: "Q1 — Who Are You?",
        icon: "①",
        tasks: [
          {
            id: "t10",
            text: "Draft a 2-sentence 'origin moment' — the specific experience that made this problem real for you.",
            tip: "Not credentials. A scene. 'When my aunt waited six months for a diagnosis, I started counting how many others waited too.'",
            done: false,
          },
          {
            id: "t11",
            text: "List 3 things about your background that are directly relevant to this project. Cut anything that reads like a CV.",
            tip: "EV says explicitly: 'We probably don't care much about your formal education or credentials.' Relevance beats prestige.",
            done: false,
          },
          {
            id: "t12",
            text: "Write the connecting sentence: '_____ is what led me to _____, and that's why I'm the right person to do this.'",
            tip: "The connection between who you are and what you're proposing should feel inevitable, not incidental.",
            done: false,
          },
        ],
      },
      {
        id: "q2",
        title: "Q2 — The Trick Question",
        icon: "②",
        tasks: [
          {
            id: "t13",
            text: "Identify a mainstream consensus view in your field that you genuinely agree with — one where you arrived there through your own reasoning.",
            tip: "Avoid obvious answers ('climate change is real'). Pick something contested among smart people where you defend the consensus honestly.",
            done: false,
          },
          {
            id: "t14",
            text: "Write 3–4 sentences explaining WHY you agree with it — showing the reasoning, not just the conclusion.",
            tip: "The goal is to demonstrate calibrated, honest thinking. The trap is performing contrarianism. Show you reason, not perform.",
            done: false,
          },
          {
            id: "t15",
            text: "Self-check: Does your answer sound like you actually believe it, or like you're trying to seem intellectually sophisticated?",
            tip: "Tyler reads thousands of applications. He can tell the difference. If it feels performative to you, rewrite it.",
            done: false,
          },
        ],
      },
      {
        id: "q3",
        title: "Q3 — The Idea",
        icon: "③",
        tasks: [
          {
            id: "t16",
            text: "Write the 'hook sentence': Name the specific broken thing, not a vague domain. Replace 'healthcare is broken' with 'X diagnostic delay kills Y people annually in Z context.'",
            tip: "Specificity is credibility. Vague problems suggest vague thinking. Find the sharpest version of the problem.",
            done: false,
          },
          {
            id: "t17",
            text: "State your insight: What do you understand about this problem that most people — including experts — don't see?",
            tip: "This is your claim to originality. Without it, you're describing a problem, not proposing a solution only you could devise.",
            done: false,
          },
          {
            id: "t18",
            text: "Define your signature product in one sentence. Then write: 'If this works, the world looks like ___.'",
            tip: "One concrete deliverable + the downstream consequence. Don't list three deliverables. Focus is a signal of clear thinking.",
            done: false,
          },
          {
            id: "t19",
            text: "Write one honest paragraph about what might fail and why you think the upside is worth it anyway.",
            tip: "EV funds moonshots. Uncertainty is expected. Pretending there's no risk signals naivety. Honest risk acknowledgment signals maturity.",
            done: false,
          },
          {
            id: "t20",
            text: "Draft your budget: itemize every line with a specific number and one-sentence justification. Total should be lean.",
            tip: "Lean, specific budgets are green flags. Reviewers may round up if they trust your judgment. Vague asks signal poor planning.",
            done: false,
          },
          {
            id: "t21",
            text: "If your project has a path to revenue self-sufficiency, describe it explicitly. EV calls this a 'feature, not a bug.'",
            tip: "EV doesn't want permanent dependents. A path to sustainability strengthens your proposal meaningfully.",
            done: false,
          },
        ],
      },
    ],
  },
  {
    id: "refinement",
    label: "Phase 3",
    title: "Refinement",
    subtitle: "Elevating good to great",
    color: "#0f3460",
    accent: "#f7797d",
    timeEstimate: "2–3 hours",
    description: "Most proposals that reach this phase are already good. The gap between good and winning is almost always in the writing quality.",
    categories: [
      {
        id: "writing_quality",
        title: "Writing Quality",
        icon: "✦",
        tasks: [
          {
            id: "t22",
            text: "Read your full draft out loud. Mark every sentence where you stumble or cringe. Rewrite each one.",
            tip: "If you stumble reading it, the reviewer stumbles reading it. Fluent reading = fluent thinking.",
            done: false,
          },
          {
            id: "t23",
            text: "Grep for filler phrases and delete them: 'In today's world,' 'I have always been passionate about,' 'leverage synergies,' 'utilize,' 'going forward.'",
            tip: "These phrases are anti-signals. They tell Tyler the writer defaults to template language under pressure.",
            done: false,
          },
          {
            id: "t24",
            text: "Replace every passive construction with an active one. 'It is expected that...' → 'I will...' Count them. There should be zero.",
            tip: "Passive language signals low agency. EV funds high-agency people. Language is evidence.",
            done: false,
          },
          {
            id: "t25",
            text: "Check your opener: Does the first paragraph make a smart person want to read the second? If not, rewrite the opener entirely.",
            tip: "In a high-volume review environment, many proposals are decided in the first paragraph. Don't bury the lede.",
            done: false,
          },
        ],
      },
      {
        id: "stress_testing",
        title: "Stress Testing",
        icon: "⟁",
        tasks: [
          {
            id: "t26",
            text: "Give your draft to one person who knows nothing about your field. Ask: 'What is this person trying to do, and why does it matter?' Their answer should match yours.",
            tip: "EV is read by an intelligent generalist. If a non-expert can't extract your core point, the proposal needs work.",
            done: false,
          },
          {
            id: "t27",
            text: "Ask yourself: 'Is there a single, memorable sentence in this proposal that Tyler might quote to a colleague?' If not, write one.",
            tip: "The best proposals have at least one line that sticks. It can be a vivid problem description, a bold claim, or a surprising insight.",
            done: false,
          },
          {
            id: "t28",
            text: "Re-apply the 'Net New' test to the final draft. Is it still crystal clear what becomes possible that wasn't before?",
            tip: "This is the most important question EV implicitly asks. Make sure your draft answers it explicitly.",
            done: false,
          },
        ],
      },
    ],
  },
  {
    id: "interview",
    label: "Phase 4",
    title: "Interview Prep",
    subtitle: "If your proposal passes",
    color: "#1b1b2f",
    accent: "#a78bfa",
    timeEstimate: "1–2 hours",
    description: "The Zoom call with Tyler has no fixed format. But there are patterns. Preparation here is about clarity, not performance.",
    categories: [
      {
        id: "core_prep",
        title: "Core Preparation",
        icon: "◆",
        tasks: [
          {
            id: "t29",
            text: "Memorize your one-sentence answer to 'What is your signature product?' You must be able to say it calmly and immediately.",
            tip: "This is Tyler's most common probing question. Hesitating here signals the proposal was better than your actual clarity of thinking.",
            done: false,
          },
          {
            id: "t30",
            text: "Prepare to defend every line-item in your budget and every causal claim in your idea section.",
            tip: "Tyler will probe. If you can't justify a number or a logical step, it shouldn't be in the proposal.",
            done: false,
          },
          {
            id: "t31",
            text: "Prepare one genuine question for Tyler. Not flattery — a real intellectual question sparked by your project or his work.",
            tip: "He will often invite you to ask something. Asking a real question signals intellectual confidence. Flattery signals insecurity.",
            done: false,
          },
          {
            id: "t32",
            text: "Practice responding to a challenge to your core assumption. If someone smart said 'this won't work because ___,' what is your honest response?",
            tip: "Don't memorize a defense. Practice thinking out loud about the real weaknesses. Tyler respects honest engagement over polished deflection.",
            done: false,
          },
        ],
      },
    ],
  },
];

const totalTasks = PHASES.flatMap((p) => p.categories.flatMap((c) => c.tasks)).length;

export default function EVGrantPlanner() {
  const [taskState, setTaskState] = useState(() => {
    const init = {};
    PHASES.forEach((p) =>
      p.categories.forEach((c) =>
        c.tasks.forEach((t) => {
          init[t.id] = false;
        })
      )
    );
    return init;
  });
  const [activePhase, setActivePhase] = useState(0);
  const [expandedTip, setExpandedTip] = useState(null);

  const toggle = (id) =>
    setTaskState((prev) => ({ ...prev, [id]: !prev[id] }));

  const completedCount = Object.values(taskState).filter(Boolean).length;
  const pct = Math.round((completedCount / totalTasks) * 100);

  const phaseComplete = (phase) => {
    const tasks = phase.categories.flatMap((c) => c.tasks);
    return tasks.every((t) => taskState[t.id]);
  };

  const phasePct = (phase) => {
    const tasks = phase.categories.flatMap((c) => c.tasks);
    const done = tasks.filter((t) => taskState[t.id]).length;
    return Math.round((done / tasks.length) * 100);
  };

  const phase = PHASES[activePhase];

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0d0d14", minHeight: "100vh", color: "#e8e8f0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", borderBottom: "1px solid #2a2a4a", padding: "28px 32px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8c547", fontWeight: 600, marginBottom: 8 }}>
            Emergent Ventures · Application Planner
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 6px", letterSpacing: "-0.02em", color: "#f0f0fa" }}>
            Grant Proposal Execution Plan
          </h1>
          <p style={{ margin: 0, color: "#8888aa", fontSize: 14, lineHeight: 1.5 }}>
            {totalTasks} tasks across 4 phases · Estimated total: 8–13 hours of focused work
          </p>

          {/* Global progress */}
          <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ flex: 1, height: 6, background: "#2a2a4a", borderRadius: 99, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: "linear-gradient(90deg, #e8c547, #4ecdc4)",
                  borderRadius: 99,
                  transition: "width 0.4s ease",
                }}
              />
            </div>
            <span style={{ fontSize: 13, color: "#e8c547", fontWeight: 600, minWidth: 80, textAlign: "right" }}>
              {completedCount}/{totalTasks} complete
            </span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px 64px" }}>
        {/* Phase tabs */}
        <div style={{ display: "flex", gap: 10, padding: "24px 0 0", flexWrap: "wrap" }}>
          {PHASES.map((p, i) => {
            const pp = phasePct(p);
            const isActive = i === activePhase;
            const isDone = phaseComplete(p);
            return (
              <button
                key={p.id}
                onClick={() => setActivePhase(i)}
                style={{
                  flex: "1 1 auto",
                  minWidth: 150,
                  background: isActive ? p.accent : isDone ? "#1a2a1a" : "#1a1a2e",
                  color: isActive ? "#0d0d14" : isDone ? "#4ecdc4" : "#aaaacc",
                  border: `1.5px solid ${isActive ? p.accent : isDone ? "#4ecdc4" : "#2a2a4a"}`,
                  borderRadius: 10,
                  padding: "12px 16px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, marginBottom: 3 }}>
                  {p.label} {isDone ? "✓" : `${pp}%`}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.2 }}>{p.title}</div>
                <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>{p.timeEstimate}</div>
              </button>
            );
          })}
        </div>

        {/* Phase detail */}
        <div style={{ marginTop: 28 }}>
          {/* Phase header */}
          <div
            style={{
              background: `linear-gradient(135deg, ${phase.color} 0%, #0d0d14 100%)`,
              border: `1px solid ${phase.accent}30`,
              borderRadius: 14,
              padding: "24px 28px",
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: phase.accent, fontWeight: 700, marginBottom: 6 }}>
                  {phase.label} · {phase.subtitle}
                </div>
                <h2 style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 700, color: "#f0f0fa", letterSpacing: "-0.01em" }}>
                  {phase.title}
                </h2>
                <p style={{ margin: 0, color: "#9999bb", fontSize: 14, lineHeight: 1.6, maxWidth: 560 }}>
                  {phase.description}
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 800,
                    color: phase.accent,
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {phasePct(phase)}%
                </div>
                <div style={{ fontSize: 12, color: "#7777aa", marginTop: 4 }}>complete</div>
              </div>
            </div>
          </div>

          {/* Categories */}
          {phase.categories.map((cat) => {
            const catDone = cat.tasks.filter((t) => taskState[t.id]).length;
            return (
              <div
                key={cat.id}
                style={{
                  background: "#13131f",
                  border: "1px solid #2a2a4a",
                  borderRadius: 12,
                  marginBottom: 16,
                  overflow: "hidden",
                }}
              >
                {/* Category header */}
                <div
                  style={{
                    padding: "16px 24px",
                    borderBottom: "1px solid #2a2a4a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#16162a",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 18, color: phase.accent }}>{cat.icon}</span>
                    <span style={{ fontWeight: 700, fontSize: 15, color: "#e0e0f0", letterSpacing: "-0.01em" }}>
                      {cat.title}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      color: catDone === cat.tasks.length ? "#4ecdc4" : "#7777aa",
                      fontWeight: 600,
                      background: catDone === cat.tasks.length ? "#0d2a2a" : "#1a1a2e",
                      padding: "3px 10px",
                      borderRadius: 99,
                    }}
                  >
                    {catDone}/{cat.tasks.length}
                  </span>
                </div>

                {/* Tasks */}
                <div style={{ padding: "8px 0" }}>
                  {cat.tasks.map((task, ti) => {
                    const done = taskState[task.id];
                    const tipOpen = expandedTip === task.id;
                    return (
                      <div key={task.id}>
                        <div
                          style={{
                            display: "flex",
                            gap: 14,
                            padding: "14px 24px",
                            alignItems: "flex-start",
                            borderTop: ti > 0 ? "1px solid #1e1e32" : "none",
                            background: done ? "#0d1a14" : "transparent",
                            transition: "background 0.2s",
                          }}
                        >
                          {/* Checkbox */}
                          <button
                            onClick={() => toggle(task.id)}
                            style={{
                              width: 22,
                              height: 22,
                              minWidth: 22,
                              borderRadius: 6,
                              border: `2px solid ${done ? "#4ecdc4" : "#3a3a5a"}`,
                              background: done ? "#4ecdc4" : "transparent",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginTop: 1,
                              transition: "all 0.15s",
                            }}
                          >
                            {done && (
                              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                <path d="M1 5L4.5 8.5L11 1" stroke="#0d0d14" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </button>

                          {/* Text */}
                          <div style={{ flex: 1 }}>
                            <p
                              style={{
                                margin: "0 0 6px",
                                fontSize: 14,
                                lineHeight: 1.55,
                                color: done ? "#6688aa" : "#d0d0e8",
                                textDecoration: done ? "line-through" : "none",
                                textDecorationColor: "#3a4a5a",
                              }}
                            >
                              {task.text}
                            </p>
                            <button
                              onClick={() => setExpandedTip(tipOpen ? null : task.id)}
                              style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: 0,
                                fontSize: 12,
                                color: tipOpen ? phase.accent : "#5555aa",
                                display: "flex",
                                alignItems: "center",
                                gap: 5,
                                fontWeight: 500,
                              }}
                            >
                              <span style={{ fontSize: 10 }}>{tipOpen ? "▲" : "▼"}</span>
                              {tipOpen ? "Hide" : "Show"} strategy note
                            </button>

                            {tipOpen && (
                              <div
                                style={{
                                  marginTop: 10,
                                  padding: "10px 14px",
                                  background: "#1a1a2e",
                                  borderLeft: `3px solid ${phase.accent}`,
                                  borderRadius: "0 8px 8px 0",
                                  fontSize: 13,
                                  color: "#9999cc",
                                  lineHeight: 1.6,
                                }}
                              >
                                {task.tip}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Reference card */}
        <div
          style={{
            marginTop: 32,
            background: "#13131f",
            border: "1px solid #2a2a4a",
            borderRadius: 14,
            padding: "24px 28px",
          }}
        >
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "#e8c547", fontWeight: 700, marginBottom: 16 }}>
            Quick Reference · What Tyler Cowen Has Said
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { label: "On writing", quote: "How good the proposal is is really very important.", src: "North Star Podcast" },
              { label: "On mistakes", quote: "Timidness perhaps? Unwillingness to try something strange or unusual?", src: "AEA Interview" },
              { label: "On people", quote: "I look for energy level, persistence, curiosity and some level of caring or authenticity.", src: "Daily Campus" },
              { label: "On credentials", quote: "We probably don't care much about your formal education, credentials, or awards.", src: "EV Application" },
            ].map((q) => (
              <div
                key={q.label}
                style={{
                  background: "#0d0d1a",
                  borderRadius: 10,
                  padding: "14px 16px",
                  border: "1px solid #2a2a4a",
                }}
              >
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "#7777aa", fontWeight: 600, marginBottom: 8 }}>
                  {q.label}
                </div>
                <p style={{ margin: "0 0 8px", fontSize: 13, color: "#c0c0e0", lineHeight: 1.6, fontStyle: "italic" }}>
                  "{q.quote}"
                </p>
                <span style={{ fontSize: 11, color: "#5555aa" }}>— Tyler Cowen, {q.src}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After */}
        <div
          style={{
            marginTop: 20,
            background: "#13131f",
            border: "1px solid #2a2a4a",
            borderRadius: 14,
            padding: "24px 28px",
          }}
        >
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "#f7797d", fontWeight: 700, marginBottom: 18 }}>
            Writing Test · Before vs. After
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "#1a0d0d", border: "1px solid #4a2a2a", borderRadius: 10, padding: "16px 18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#f7797d", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                ✗ Weak
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#aa8888", lineHeight: 1.7 }}>
                "The project aims to develop a software application that aggregates municipal budget data. We will use a team of three developers to clean the data and create a web interface. The expected outcome is increased transparency."
              </p>
            </div>
            <div style={{ background: "#0d1a0d", border: "1px solid #2a4a2a", borderRadius: 10, padding: "16px 18px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#4ecdc4", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                ✓ Strong
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#88aa88", lineHeight: 1.7 }}>
                "Municipal budgets are locked in opaque PDFs, preventing citizen oversight. I am building an open-source tool that automates extraction across 50 cities — surfacing hidden patterns in public spending. This grant funds the API integration that lets us launch in 90 days, a timeline impossible through normal procurement."
              </p>
            </div>
          </div>
          <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              ["Describes a task, not an impact", "Missing agency and voice", "No 'net new' articulated"],
              ["Sharp problem with specificity", "Active voice, clear ownership", "'Net new' made explicit (90-day vs. normal)"],
            ].map((items, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {items.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12, color: i === 0 ? "#886666" : "#668866" }}>
                    <span style={{ fontSize: 10 }}>{i === 0 ? "✗" : "✓"}</span> {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



function App() {
}

export default App
