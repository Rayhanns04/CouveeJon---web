import React from 'react';
import StoryImage from '../assets/img/story.jpg';
import '../sass/main.scss';
import * as BsIcons from 'react-icons/bs';
import decoration1 from '../assets/img/decoration-1.jpg';
import decoration2 from '../assets/img/decoration-2.jpg';

const Story = () => {
  return (
    <>
      <div className="story-container">
        <div className="story-left">
          <h1 className="story-title">STORY</h1>
          <p className="story-text">
            Founded in April 2017 by two young man from Yogyakarta, Couvee comes
            from an idea that everyone can enjoy coffee. It’s all started at a
            small rented building on Jalan Kaliurang. By 2019, Couvee has 5
            branches, one of them located in Jakarta.
          </p>
          <button className="story-button">
            <p>FULL STORY</p>
            <BsIcons.BsArrowRight />
          </button>
        </div>
        <div className="story-img">
          <img src={decoration2} alt="decoration-2" className="sty-dcr-2" />
          <img src={StoryImage} alt="story-img" />
        </div>
        <img src={decoration1} alt="decoration-1" className="sty-dcr-1" />
      </div>
    </>
  );
};

export default Story;
