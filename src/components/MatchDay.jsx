import React from 'react';

const MatchDay = () => {
  return (
    <>
      {/* Boys / Girls Split */}
      <section className="chapter split-section">
        <div className="chapter-inner">
          <div className="chapter-eyebrow reveal">An important note</div>
          <h2 className="chapter-title reveal">Boys and girls <span className="accent">separate.</span></h2>
          <div className="split-callout reveal">
            <div className="split-callout-inner">
              <h3>From U12, the team <span className="accent">splits.</span></h3>
              <p>Under RFU regulations, mixed contact rugby stops at U11. From U12 onwards boys and girls play in their own teams, following slightly different competition pathways &mdash; girls progressing into the Surrey Girls Waterfall Cup, boys into the boys&rsquo; Waterfall Cup. The training environment and club experience stays shared wherever we can, but matches will be played separately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Match Day */}
      <section className="chapter matchday" id="matchday">
        <div className="chapter-inner">
          <div className="chapter-number">06</div>
          <div className="chapter-eyebrow reveal">Chapter Six</div>
          <h2 className="chapter-title reveal">What a<br/><span className="accent">match day</span> looks like.</h2>
          <p className="chapter-lead reveal">Sunday match days are still the highlight of the week &mdash; just with a new rhythm at U12. One game, then lunch, then awards. Players are expected to stay for the whole thing.</p>

          <div className="matchday-grid">
            <div className="matchday-schedule reveal">
              <h3>TYPICAL MATCH DAY</h3>
              <div className="schedule-item">
                <div className="schedule-marker">01</div>
                <div className="schedule-content">
                  <h4>Arrival &amp; warm-up</h4>
                  <p>Players arrive in kit, coaches lead the warm-up. Times vary by fixture &mdash; confirmed in the weekly email.</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="schedule-marker">02</div>
                <div className="schedule-content">
                  <h4>The match</h4>
                  <p>One competitive match. Two 20-minute halves, with rolling substitutions &amp; the half-game rule enforced.</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="schedule-marker">03</div>
                <div className="schedule-content">
                  <h4>Change for lunch</h4>
                  <p>After the match, players shower and change out of kit into smart clothes for the post-match meal.</p>
                </div>
              </div>
              <div className="schedule-item">
                <div className="schedule-marker">04</div>
                <div className="schedule-content">
                  <h4>Lunch &amp; awards</h4>
                  <p>Shared lunch with both teams &mdash; a proper rugby tradition. Players are expected to stay for this. Awards follow.</p>
                </div>
              </div>
            </div>

            <div className="matchday-aside reveal">
              <h3>A STEP UP IN TRADITION</h3>
              <p>The post-match lunch is a genuine rugby tradition and one of the best parts of moving up. Both teams eat together, speeches are made, awards are given out, and friendships are built across clubs.</p>
              <p>It also means your child is representing Warlingham off the pitch as well as on it &mdash; which is why the dress code matters.</p>

              <div className="dress-code">
                <h4>POST-MATCH DRESS CODE</h4>
                <ul>
                  <li>Smart shirt</li>
                  <li>Warlingham club tie (available from the club shop)</li>
                  <li>Trousers (not jeans, not tracksuit bottoms)</li>
                  <li>Clean, tidy shoes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MatchDay;
