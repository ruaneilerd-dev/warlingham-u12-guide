import React from 'react';

const pillars = [
  {
    num: '01',
    title: 'Advanced Functional Strength & Conditioning',
    intro: 'We have already integrated S&C into our routine, with mid-week training available in juniors, we are increasing our focus here. We will be prioritizing the three functional pillars of rugby power: Push, Pull, and Leg Strength.',
    goal: 'To build the "armor" and explosive power required for safe, dominant contact.',
    focus: 'Developing consistent technique in these movements to ensure players are physically resilient as the game becomes more demanding.',
    icon: '⬡',
  },
  {
    num: '02',
    title: 'Decision-Making Through Scenario Training',
    intro: 'We will continue to utilize game-based training, moving away from isolated drills into real-time scenarios.',
    goal: 'To force players to solve problems under pressure.',
    focus: 'By simulating match-day situations, we empower players to make their own tactical calls on the fly, which is where games are won or lost.',
    icon: '◎',
  },
  {
    num: '03',
    title: 'Introduction of Classroom Sessions',
    intro: 'To maximize our time on the pitch, we will be introducing classroom-based sessions.',
    goal: 'To develop "Rugby Intelligence" without the physical fatigue of a full session.',
    focus: 'These sessions will break down our specific systems of play and identify key development areas, ensuring everyone is tactically aligned before we cross the white line.',
    icon: '◈',
  },
  {
    num: '04',
    title: 'Elevating Training Intensity',
    intro: 'We are consciously building our training intensity to better reflect match-day conditions.',
    goal: 'To ensure the team remains strong and mentally sharp in the final stages of a game.',
    focus: 'High-intensity training demands high discipline. We are moving toward a standard where focus and work rate are non-negotiable from the first whistle of the session.',
    icon: '◇',
  },
  {
    num: '05',
    title: 'Embedding Our Systems (Pods)',
    intro: 'We have introduced the concept of Pods, and our next step is to embed this system fully into our game.',
    goal: 'To move away from "bunched" play and use structure to open up space across the pitch.',
    focus: 'Ensuring players understand their positioning within the pod system to manipulate the defense, create overlaps, and maintain a constant forward momentum.',
    icon: '◉',
  },
];

const TrainingPhilosophy = () => {
  return (
    <section className="chapter training-section" id="training">
      <div className="chapter-inner">
        <div className="chapter-number">04</div>
        <div className="chapter-eyebrow reveal">Our Approach</div>
        <h2 className="chapter-title reveal">Building <span className="accent">complete</span><br/>rugby players.</h2>
        <p className="chapter-lead reveal">
          U12 is about more than rule changes. It&rsquo;s a step up in how we train, how we think, and how we prepare.
          Our focus is on building well-rounded athletes who are physically resilient, tactically intelligent, and mentally tough.
        </p>

        <div className="training-pillars">
          {pillars.map((p) => (
            <div className="training-pillar reveal" key={p.num}>
              <div className="training-pillar-header">
                <div className="training-pillar-num">{p.num}</div>
                <div className="training-pillar-icon">{p.icon}</div>
              </div>
              <h3 className="training-pillar-title">{p.title}</h3>
              <p className="training-pillar-intro">{p.intro}</p>
              <div className="training-pillar-details">
                <div className="training-detail">
                  <div className="training-detail-label">THE GOAL</div>
                  <p>{p.goal}</p>
                </div>
                <div className="training-detail">
                  <div className="training-detail-label">THE FOCUS</div>
                  <p>{p.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPhilosophy;
