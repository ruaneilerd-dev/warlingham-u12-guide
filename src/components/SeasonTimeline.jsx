import React from 'react';

const SeasonTimeline = () => {
  return (
    <section className="chapter timeline-chapter" id="timeline">
      <div className="chapter-inner">
        <div className="chapter-number">03</div>
        <div className="chapter-eyebrow reveal">Chapter Three</div>
        <h2 className="chapter-title reveal">The <span className="accent">season</span> ahead.</h2>
        <p className="chapter-lead reveal">The U12 season has two clear halves. Autumn is about building the squad and getting match-ready through friendlies. From January, it&rsquo;s competitive &mdash; the Surrey Waterfall Cup kicks in.</p>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-month">SEPTEMBER</div>
            <div className="timeline-phase">Phase 1 &middot; Pre-Christmas</div>
            <div className="timeline-title">Season begins</div>
            <div className="timeline-desc">Return to training. Sunday sessions plus midweek training begins on a <strong>Wednesday or Thursday evening</strong> (day to be confirmed).</div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-month">OCT &mdash; DEC</div>
            <div className="timeline-phase">Phase 1 &middot; Pre-Christmas</div>
            <div className="timeline-title">Friendlies &amp; development</div>
            <div className="timeline-desc">Friendly matches against other Surrey clubs. Players learn the new 12-a-side structure, try positions, and get comfortable with the bigger scrum, hand-offs, and full rucking laws.</div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-month">JANUARY</div>
            <div className="timeline-phase">Phase 2 &middot; Competitive</div>
            <div className="timeline-title">Waterfall Cup begins</div>
            <div className="timeline-desc">The Surrey Waterfall Cup kicks off. Teams are seeded into tiers and play a series of competitive Sunday matches against similarly-matched opposition.</div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-month">FEB &mdash; APR</div>
            <div className="timeline-phase">Phase 2 &middot; Competitive</div>
            <div className="timeline-title">The Cup plays out</div>
            <div className="timeline-desc">Around five Waterfall rounds spread across Sundays. Points for wins, draws, try-bonuses and losing bonuses. Every match counts toward the tier standings.</div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-month">APRIL</div>
            <div className="timeline-phase">Finals</div>
            <div className="timeline-title">Waterfall Cup Finals Day</div>
            <div className="timeline-desc">All U12 teams in the competition meet at a single host venue for Finals Day &mdash; a full day of rugby with every tier playing its final fixtures together.</div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-month">END OF SEASON</div>
            <div className="timeline-phase">Wrap-up</div>
            <div className="timeline-title">Results shape next year</div>
            <div className="timeline-desc">Final placings in the Waterfall Cup inform the following season&rsquo;s tier seeding. Teams can move up or down depending on how the year has gone.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonTimeline;
