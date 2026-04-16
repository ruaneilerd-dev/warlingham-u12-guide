import React from 'react';

const faqs = [
  {
    num: '01',
    q: "What's the weekly time commitment?",
    a: [
      'Expect two touchpoints per week during the season. <strong>Sunday mornings</strong> are the main session — training in early season, then matches from January onwards.',
      'We also add <strong>midweek training on a Wednesday or Thursday evening</strong> (the exact day is still to be confirmed and will be communicated ahead of the season). Midweek is shorter and focused on skills, fitness, and prepping for the weekend.',
      "The half-game rule still applies, so your child will always get meaningful minutes — whether they make every session or not. Consistency helps, but we understand family life happens.",
    ],
  },
  {
    num: '02',
    q: 'What time should we arrive on match day?',
    a: [
      "Arrival and kick-off times <strong>vary from fixture to fixture</strong> — away games in particular can start earlier than home ones. We'll confirm exact times in the weekly pre-match email from the team manager.",
      'As a general rule: plan to be at the ground <strong>at least 45 minutes before kick-off</strong> in full kit, ready for the warm-up. Late arrivals mean missed warm-ups, and a cold player is a more easily injured player.',
    ],
  },
  {
    num: '03',
    q: 'Do the kids really need to stay for lunch?',
    a: [
      "<strong>Yes — this is a genuine expectation at U12.</strong> Post-match lunch with the opposing team is one of rugby's oldest traditions and the single biggest cultural step-up from minis to youth rugby.",
      "It's where friendships form between clubs, where speeches are made, and where player awards are handed out. Leaving early sends the wrong message. Please plan your Sundays around the full match-day experience, not just kick-off to final whistle.",
    ],
  },
  {
    num: '04',
    q: 'What does my child need to bring to away games?',
    a: [
      'A rough checklist for any Sunday — home or away: <strong>full playing kit, gum shield, boots, warm layer, water bottle, a change of clothes (including smart shirt, tie and trousers for after the match), toiletries, and a towel.</strong>',
      "For away games, check the team email for <strong>venue details, postcode, and directions</strong> the week before. Car-sharing is often organised via the team parent WhatsApp — a great way to ease the logistics and get to know other families.",
    ],
  },
  {
    num: '05',
    q: 'How can parents get involved and volunteer?',
    a: [
      'The club runs on parent volunteers and every bit helps. A few of the regular roles:',
      '<strong>Fixtures secretary</strong> — coordinating fixtures and liaising with other clubs. <strong>Pitch-side first aid</strong> — training provided. <strong>Clubhouse & lunch support</strong> — especially on home match days. <strong>Transport & car shares</strong> — for away fixtures.',
      "You don't need a rugby background for any of this. If you're keen to help, please have a word with the head coach or drop the team manager a message — we'll find something that fits your time and interests.",
    ],
  },
  {
    num: '06',
    q: 'Is U12 rugby safe? The contact sounds heavier.',
    a: [
      'Yes. The rules at U12 are carefully calibrated by the RFU to introduce new elements (hand-offs, bigger scrums, unrestricted rucks) gradually and safely. <strong>Scrums are still uncontested for pushing</strong>, tackles must be below sternum height, and coaches are trained to spot and manage any unsafe technique.',
      'Every Warlingham coach holds current RFU age-grade coaching qualifications and Headcase concussion awareness training. If a player shows any sign of concussion, they\'re removed immediately and follow the RFU return-to-play protocol.',
    ],
  },
];

const FAQ = () => {
  return (
    <section className="chapter faq-section" id="faq">
      <div className="chapter-inner">
        <div className="chapter-number">07</div>
        <div className="chapter-eyebrow reveal">Chapter Seven</div>
        <h2 className="chapter-title reveal">Parent <span className="accent">FAQs.</span></h2>
        <p className="chapter-lead reveal">The questions we hear most often when families are moving up. Everything you need to know at a glance.</p>

        <div className="faq-grid">
          {faqs.map((faq) => (
            <div className="faq-card reveal" key={faq.num}>
              <div className="faq-card-number">Q.{faq.num}</div>
              <div className="faq-card-question">{faq.q}</div>
              <div className="faq-card-answer">
                {faq.a.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
