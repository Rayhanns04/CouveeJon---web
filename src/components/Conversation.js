import React from 'react';
import conversationImage from '../assets/img/cofee-with-friend.jpg';
import decorationStone from '../assets/img/decoration-1.jpg';
import decorationWood from '../assets/img/decoration-2.jpg';

const Conversation = () => {
  return (
    <>
      <div>
        <img src={conversationImage} alt="coffe with friends" />
        <img src={decorationWood} alt="decoration-wood" className="c-dcr" />
      </div>
    </>
  );
};

export default Conversation;
