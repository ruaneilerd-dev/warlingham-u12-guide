import React from 'react';

const WaterfallCup = () => {
  return (
    <section className="chapter waterfall" id="cup">
      <div className="chapter-inner">
        <div className="chapter-number">05</div>
        <div className="chapter-eyebrow reveal">Chapter Five</div>
        <h2 className="chapter-title reveal">The Surrey<br/><span className="accent">Waterfall Cup.</span></h2>
        <p className="chapter-lead reveal">A &ldquo;waterfall&rdquo; format sounds complex &mdash; it isn&rsquo;t. It simply means teams are placed into tiers based on strength, so the games are closely matched and genuinely competitive. No one gets hammered. No one cruises.</p>

        <div className="waterfall-diagram reveal">
          <h4>HOW THE TIERS WORK</h4>
          <div className="waterfall-tiers">
            <div className="waterfall-tier">
              <div className="tier-rank">A</div>
              <div className="tier-content">
                <div className="tier-name">TOP TIER</div>
                <div className="tier-desc">The strongest teams across Surrey at this age grade.</div>
              </div>
            </div>
            <div className="waterfall-tier">
              <div className="tier-rank">B</div>
              <div className="tier-content">
                <div className="tier-name">SECOND TIER</div>
                <div className="tier-desc">Strong, established squads &mdash; closely contested games.</div>
              </div>
            </div>
            <div className="waterfall-tier">
              <div className="tier-rank">C</div>
              <div className="tier-content">
                <div className="tier-name">MID TIER</div>
                <div className="tier-desc">Competitive, well-matched fixtures across the board.</div>
              </div>
            </div>
            <div className="waterfall-tier">
              <div className="tier-rank">D</div>
              <div className="tier-content">
                <div className="tier-name">DEVELOPING TIER</div>
                <div className="tier-desc">Squads building experience &mdash; every game is winnable.</div>
              </div>
            </div>
          </div>
          <p className="waterfall-caption">Our placement is set by Surrey Rugby based on coach input &amp; previous seasons. Teams can move up or down between years based on results.</p>
        </div>

        <div className="cup-facts">
          <div className="cup-fact reveal">
            <div className="cup-fact-label">When</div>
            <div className="cup-fact-value">Post-Christmas only</div>
            <div className="cup-fact-note">Competitive fixtures run January through April.</div>
          </div>
          <div className="cup-fact reveal">
            <div className="cup-fact-label">Day</div>
            <div className="cup-fact-value">Sundays</div>
            <div className="cup-fact-note">Kick-off times vary &mdash; confirmed per fixture.</div>
          </div>
          <div className="cup-fact reveal">
            <div className="cup-fact-label">Format</div>
            <div className="cup-fact-value">~5 rounds</div>
            <div className="cup-fact-note">Tier-based pools &mdash; round robin or waterfall.</div>
          </div>
          <div className="cup-fact reveal">
            <div className="cup-fact-label">Points</div>
            <div className="cup-fact-value">Wins, draws &amp; bonuses</div>
            <div className="cup-fact-note">Try-bonus &amp; losing-bonus points available.</div>
          </div>
          <div className="cup-fact reveal">
            <div className="cup-fact-label">Finals</div>
            <div className="cup-fact-value">Single venue showpiece</div>
            <div className="cup-fact-note">All U12 teams together on Finals Day &mdash; a great atmosphere.</div>
          </div>
          <div className="cup-fact reveal">
            <div className="cup-fact-label">Why it works</div>
            <div className="cup-fact-value">Closely matched games</div>
            <div className="cup-fact-note">The tier system means your child plays meaningful, balanced rugby every week.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterfallCup;
