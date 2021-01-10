import React, { useState } from 'react';
import '../sass/main.scss';
import * as GoIcons from 'react-icons/go';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/autoplay';
import productHomeData from '../api/ProductsHomeData.json';
import Popup from './Popup';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ProductsHome = () => {
  const [dialog, setDialog] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const showAlert = (e) => {
    console.log('object');
    setIsOpen(true);
    return setDialog(e);
  };

  const RenderItem = productHomeData.map((item, index) => {
    return (
      <SwiperSlide key={index} className="swiper-each">
        <div className="swiper-image-ctr">
          <img src={item.img} alt={item.title} />
          <div
            className="swiper-item-overlay"
            onClick={() => showAlert(item.desc)}
          >
            <GoIcons.GoPlus
              className="swiper-item-overlay-icon"
              color="#FFFF"
            />
            <h3>See Description</h3>
          </div>
        </div>
        <h1>{item.title}</h1>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <Popup text={dialog} isOpen={isOpen} isClosed={() => setIsOpen(false)} />
      <div className="prd-hm-container">
        <h1 className="prd-hm-heading">PRODUCTS</h1>
        <Swiper
          breakpoints={{
            360: {
              width: 350,
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          slidesPerView={3}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {RenderItem}
        </Swiper>

        <div className="prd-hm-section">
          <button className="prd-hm-btn mx-auto">
            <p>ALL MENU</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsHome;
