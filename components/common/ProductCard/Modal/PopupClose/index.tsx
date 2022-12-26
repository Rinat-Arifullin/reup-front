import Image from 'next/image';
import React from 'react';
import cx from './index.module.scss';
import Close from '@/static/icons/popupClose.svg';

type IProps = {
  setModal: any;
};

const PopupClose = ({setModal}:IProps) => {
  const closePopup = () => {
    setModal(false);
  };

  return (
    <div className={cx.popupClose}>
      <Image onClick={closePopup} src={Close} alt="close" />
    </div>
  );
};

export default PopupClose;
