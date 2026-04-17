import React from 'react';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-crest-watermark"></div>
      <div className="hero-inner">
        <div className="hero-top-bar">
          <div className="hero-crest"></div>
          <div className="hero-club-meta">
            <div className="hero-club-name">WARLINGHAM RFC</div>
            <div className="hero-tagline">The Mighty Warl &middot; Grass roots, Surrey</div>
          </div>
        </div>

        <div className="hero-eyebrow">A Parent&rsquo;s Guide &middot; 2026 / 27 Season</div>

        <h1 className="hero-title">
          <span className="line">FROM <span className="arrow">&darr;</span> U11</span>
          <span className="line"><span className="u12">TO U12.</span></span>
        </h1>

        <p className="hero-lead">
          Next season, everything steps up. Bigger teams, bigger scrums, a bigger pitch &mdash; and a place in the <em>Surrey Waterfall Cup</em>. Here&rsquo;s everything you need to know about what&rsquo;s changing, what&rsquo;s staying, and what match days will look like for your child.
        </p>

        <div className="hero-tldr-label">THE QUICK SUMMARY &mdash; WHAT&rsquo;S NEW FOR PARENTS</div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">12</div>
            <div className="hero-stat-label">Players per side (up from 9)</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">MID<span style={{ fontSize: '0.6em', opacity: 0.6 }}>WEEK</span></div>
            <div className="hero-stat-label">Training added (Wed or Thu evening)</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">TEA</div>
            <div className="hero-stat-label">Post-match lunch &mdash; players must stay</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">TIE</div>
            <div className="hero-stat-label">Smart dress for after the match (club tie from shop)</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">CUP</div>
            <div className="hero-stat-label">Surrey Waterfall Cup &mdash; competitive league</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">SPLIT</div>
            <div className="hero-stat-label">Boys &amp; girls play in separate teams</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">5</div>
            <div className="hero-stat-label">In the scrum (up from 3)</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">HAND<span style={{ fontSize: '0.6em', opacity: 0.6 }}>OFF</span></div>
            <div className="hero-stat-label">Now permitted &mdash; below the armpit</div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll to explore</span>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Hero;
