import React, { useState } from 'react';
import SignatureMenuData from '../../api/SignatureMenuData.json';
import * as GoIcons from 'react-icons/go';
import Popup from '../Popup';

const SignatureMenu = () => {
  const [dialog, setDialog] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const showAlert = (e) => {
    console.log('object');
    setIsOpen(true);
    return setDialog(e);
  };

  const RenderItem = SignatureMenuData.map((item, index) => {
    return (
      <div key={index} className="menuitem-each">
        <div className="menuitem-image-ctr">
          <img src={item.img} alt={item.title} />
          <div
            className="menuitem-item-overlay"
            onClick={() => showAlert(item.desc)}
          >
            <GoIcons.GoPlus
              className="menuitem-item-overlay-icon"
              color="#FFFF"
            />
            <h3>See Description</h3>
          </div>
        </div>
        <h1>{item.title}</h1>
      </div>
    );
  });

  return (
    <div className="menuitem__main">
      <Popup text={dialog} isOpen={isOpen} isClosed={() => setIsOpen(false)} />
      <div className="menuitem__content">{RenderItem}</div>
    </div>
  );
};

export default SignatureMenu;
