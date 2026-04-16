import React from 'react';

const SquadPhotos = () => {
  return (
    <section className="photo-strip">
      <div className="photo-strip-inner">
        <div className="photo-strip-title">OUR SQUAD</div>
        <div className="photo-strip-sub">Our squad stays the same, but we&rsquo;re sadly splitting off between boys and girls at U12.</div>
        <div className="photo-grid">
          <img src="/photos/squad-01.jpg" alt="Squad photo — sunshine smiles" />
          <img src="/photos/squad-02.jpg" alt="Squad photo — mud and trophies" />
          <img src="/photos/squad-03.jpg" alt="Squad photo — game action" />
        </div>
        <div className="photo-grid-bottom">
          <img src="/photos/squad-04.jpg" alt="Squad photo — trophy winners" />
          <img src="/photos/squad-05.jpg" alt="Squad photo — team huddle" />
        </div>
      </div>
    </section>
  );
};

export default SquadPhotos;
