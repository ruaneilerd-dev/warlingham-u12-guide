import React, { useEffect, useState } from 'react';

const Nav = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`top-nav${visible ? ' visible' : ''}`} id="topNav">
      <div className="top-nav-inner">
        <div className="top-nav-crest">
          <img src="/photos/crest.png" alt="Warlingham RFC" />
          <span>Warlingham RFC</span>
        </div>
        <ul className="top-nav-links">
          <li><a href="#stays" onClick={(e) => handleClick(e, '#stays')}>Stays the Same</a></li>
          <li><a href="#changing" onClick={(e) => handleClick(e, '#changing')}>What&rsquo;s Changing</a></li>
          <li><a href="#timeline" onClick={(e) => handleClick(e, '#timeline')}>The Season</a></li>
          <li><a href="#training" onClick={(e) => handleClick(e, '#training')}>Training</a></li>
          <li><a href="#cup" onClick={(e) => handleClick(e, '#cup')}>Waterfall Cup</a></li>
          <li><a href="#matchday" onClick={(e) => handleClick(e, '#matchday')}>Match Day</a></li>
          <li><a href="#faq" onClick={(e) => handleClick(e, '#faq')}>FAQ</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
