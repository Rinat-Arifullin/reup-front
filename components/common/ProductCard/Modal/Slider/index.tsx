import { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import cx from './index.module.scss';

interface IProps {
  images: any[]; // TODO поменять на url
}

const Slider = ({ images }: IProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onNextSlide = () => {
    const maxCount = (images?.length || 0) - 1;
    if (maxCount) {
      setActiveSlide((state) => {
        if (state + 1 > maxCount) {
          return 0;
        }
        return state + 1;
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      onNextSlide();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={cx.slider}>
      {images?.map((img, index) => {
        return (
          <div
            key={index}
            className={classNames(cx.slide, activeSlide === index && cx.active)}
            style={{
              flexGrow: activeSlide === index ? images?.length : 1,
            }}
            onClick={() => setActiveSlide(index)}
          >
            <Image src={img} alt="img" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
