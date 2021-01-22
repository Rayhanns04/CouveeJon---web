import React from 'react';
import conversationImage from '../assets/img/cofee-with-friend.jpg';
import '../sass/main.scss';

const Conversation = () => {
  return (
    <div className="conversation-container">
      <div className="conversation-main">
        <div className="conversation-content">
          <img
            src={conversationImage}
            alt="coffe with friends"
            className="conversation-img"
          />
          <div className="conversation-box">
            <h1>
              "A cup of coffee shared with a friend is happiness tasted and time
              well spent. "
            </h1>
          </div>
          <img
            src="https://www.couvee.co.id/wp-content/uploads/2019/07/decoration-4.jpg"
            alt="decoration-wood"
            className="c-dcr"
          />
        </div>
      </div>
    </div>
  );
};

export default Conversation;
