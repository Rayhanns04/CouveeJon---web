import React from 'react';
import { PromoData } from './PromoData';
import '../../sass/main.scss';
import * as RiIcons from 'react-icons/ri';

const CompPromo = () => {
  const RenderItem = PromoData.map((item, index) => {
    return (
      <div className="comp-promo-card">
        <div className="comp-promo-thumb">
          <img src={item.img} alt="promo-thumb" />
          <div className="tape-promo">Promo!</div>
        </div>

        <div className="comp-promo-content">
          <div>
            <h6>{item.title}</h6>
            <p>{item.desc}</p>
          </div>

          <div className="meta">
            <p>{item.exp}</p>
            <div className="comp-promo-readmore">
              <p>Baca Detail</p>
              <RiIcons.RiArrowDropRightLine className="readmore-arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="comp-promo">
        <div className="comp-promo-container">{RenderItem}</div>
      </div>
    </>
  );
};

export default CompPromo;
