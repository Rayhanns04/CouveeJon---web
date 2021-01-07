import React from 'react';
import StoryImage from '../assets/img/story.jpg';
import '../sass/main.scss';

const Story = () => {
  return (
    <>
      <div className="flex px-auto">
        <div className="story-container">
          <p className="story-text">
            Founded in April 2017 by two young man from Yogyakarta, Couvee comes
            from an idea that everyone can enjoy coffee. It’s all started at a
            small rented building on Jalan Kaliurang. By 2019, Couvee has 5
            branches, one of them located in Jakarta.
          </p>
          <button className="story-button">Full Story</button>
        </div>
        <div>
          <img src={StoryImage} alt="story-img" />
        </div>
      </div>
    </>
  );
};

export default Story;
