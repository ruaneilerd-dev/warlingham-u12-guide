import React, { useState } from 'react';

const categories = [
  { id: 'category-core', label: 'Team \u0026 Pitch' },
  { id: 'category-scrum', label: 'Scrum' },
  { id: 'category-contact', label: 'Contact \u0026 Play' },
  { id: 'category-kicking', label: 'Kicking' },
];

const data = {
  'category-core': {
    u11: [
      { label: 'Team size', value: '9 players per side' },
      { label: 'Match length', value: '20 minutes per half' },
      { label: 'Pitch', value: '60m × 43m (half a full pitch)' },
      { label: 'Competition', value: 'Friendlies & festivals — no formal cup' },
      { label: 'Mixed rugby', value: 'Boys and girls play together' },
    ],
    u12: [
      { label: 'Team size', value: '<strong>12 players per side</strong>' },
      { label: 'Match length', value: '20 minutes per half (same)' },
      { label: 'Pitch', value: '60m × 43m (same)' },
      { label: 'Competition', value: '<strong>Surrey Waterfall Cup</strong> — competitive league' },
      { label: 'Mixed rugby', value: '<strong>Boys and girls split</strong> into separate teams' },
    ],
  },
  'category-scrum': {
    u11: [
      { label: 'Forwards', value: '<strong>3 players</strong> — nearest the stoppage' },
      { label: 'Push', value: 'No pushing allowed' },
      { label: 'Strike', value: 'Both hookers can strike for the ball' },
      { label: 'Lineouts', value: 'None — restart is a free pass 5m from touch' },
    ],
    u12: [
      { label: 'Forwards', value: '<strong>5 players</strong> in a 3-2 formation' },
      { label: 'Push', value: 'Still no pushing — possession contest only' },
      { label: 'Strike', value: 'Both hookers can strike (same)' },
      { label: 'Lineouts', value: 'Still no lineouts — free pass from touch' },
    ],
  },
  'category-contact': {
    u11: [
      { label: 'Hand-off', value: '<strong>Not permitted</strong> — free kick if used' },
      { label: 'Rucks', value: 'Max 3 players per side in the ruck' },
      { label: 'Mauls', value: 'Max 3 players per side in the maul' },
      { label: 'After a rip', value: 'Ripper <strong>must pass</strong> — cannot run' },
    ],
    u12: [
      { label: 'Hand-off', value: '<strong>Introduced</strong> — allowed below the armpit' },
      { label: 'Rucks', value: '<strong>No limit</strong> on numbers contesting' },
      { label: 'Mauls', value: '<strong>No limit</strong> — normal laws apply' },
      { label: 'After a rip', value: 'Ripper <strong>can run or pass</strong>' },
    ],
  },
  'category-kicking': {
    u11: [
      { label: 'Tactical kicking', value: 'Allowed from hand (first season of kicking)' },
      { label: 'Knock-on leniency', value: 'Dropped kick-catch is <strong>not</strong> a knock-on' },
      { label: 'Box kicks', value: 'Not allowed' },
      { label: 'Kicks at goal', value: 'No conversions or penalty goals' },
    ],
    u12: [
      { label: 'Tactical kicking', value: 'Same rules from hand' },
      { label: 'Knock-on leniency', value: '<strong>Removed</strong> — normal knock-on rules apply' },
      { label: 'Box kicks', value: 'Still not allowed at 9' },
      { label: 'Kicks at goal', value: 'Still no conversions or penalty goals' },
    ],
  },
};

const WhatsChanging = () => {
  const [activeCategory, setActiveCategory] = useState('category-core');

  return (
    <section className="chapter changing" id="changing">
      <div className="chapter-inner">
        <div className="chapter-number">02</div>
        <div className="chapter-eyebrow reveal">Chapter Two</div>
        <h2 className="chapter-title reveal">A <span className="accent">bigger game.</span><br/>By design.</h2>
        <p className="chapter-lead reveal">U12 is where rugby starts to look more like the adult game. More players, bigger scrums, tactical kicking, and the introduction of the hand-off. Toggle between U11 and U12 to compare.</p>

        <div className="compare-toggle reveal">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={activeCategory === cat.id ? 'active' : ''}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="compare-grid reveal">
          <div className="compare-col u11">
            <div className="compare-col-header">U11</div>
            <div className="compare-col-sub">Last season &mdash; where we are now</div>
            <div className="compare-rows active">
              {data[activeCategory].u11.map((row, i) => (
                <div className="compare-row" key={i}>
                  <div className="compare-row-label">{row.label}</div>
                  <div className="compare-row-value" dangerouslySetInnerHTML={{ __html: row.value }} />
                </div>
              ))}
            </div>
          </div>

          <div className="compare-col u12">
            <div className="compare-col-header">U12</div>
            <div className="compare-col-sub">Next season &mdash; where we&rsquo;re heading</div>
            <div className="compare-rows active">
              {data[activeCategory].u12.map((row, i) => (
                <div className="compare-row" key={i}>
                  <div className="compare-row-label">{row.label}</div>
                  <div className="compare-row-value" dangerouslySetInnerHTML={{ __html: row.value }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsChanging;
