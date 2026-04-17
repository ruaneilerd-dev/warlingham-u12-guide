import React from 'react';

const StaysSame = () => {
  return (
    <section className="chapter stays-same" id="stays">
      <div className="chapter-inner">
        <div className="chapter-number">01</div>
        <div className="chapter-eyebrow reveal">Chapter One</div>
        <h2 className="chapter-title reveal">The <span className="accent">same club.</span><br/>The same values.</h2>
        <p className="chapter-lead reveal">Before we get into what&rsquo;s changing, it&rsquo;s worth saying what isn&rsquo;t. The heart of your child&rsquo;s experience at Warlingham stays exactly as it&rsquo;s been.</p>

        <div className="stays-grid">
          <div className="stays-card reveal">
            <div className="stays-card-icon">◎</div>
            <h3>SUNDAY RUGBY</h3>
            <p>Sunday mornings are still rugby mornings. That hasn&rsquo;t changed and won&rsquo;t change. Kick-off times vary depending on the fixture.</p>
          </div>
          <div className="stays-card reveal">
            <div className="stays-card-icon">◇</div>
            <h3>HALF-GAME RULE</h3>
            <p>Every player in the match day squad must get at least 50% of the available playing time. Every player matters. Every player plays.</p>
          </div>
          <div className="stays-card reveal">
            <div className="stays-card-icon">◉</div>
            <h3>CORE VALUES</h3>
            <p>Teamwork, Respect, Enjoyment, Discipline, Sportsmanship. The five values the RFU lives by &mdash; and so do we.</p>
          </div>
          <div className="stays-card reveal">
            <div className="stays-card-icon">◊</div>
            <h3>COMPETITIVE SPIRIT</h3>
            <p>We&rsquo;re instilling a competitive edge and a will to win &mdash; whilst always maintaining a fun, inclusive atmosphere where every player is valued.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaysSame;
