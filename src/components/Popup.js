import React from 'react';
import * as RiIcons from 'react-icons/ri';
import '../sass/main.scss';

const Popup = (props) => {
  let dialog = (
    <div className="popup-card">
      <p className="popup-text">{props.text}</p>
      <button title="Close" onClick={props.isClosed}>
        <RiIcons.RiCloseLine className="close-icon" color="#FFFF" />
      </button>
    </div>
  );

  if (!props.isOpen) {
    dialog = null;
  }

  return (
    <div
      className={props.isOpen ? 'popup-container active' : 'popup-container'}
    >
      {dialog}
    </div>
  );
};

export default Popup;
