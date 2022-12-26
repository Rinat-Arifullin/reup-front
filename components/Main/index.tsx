import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';

import ProductsList from '@/components/Main/ProductList';
import ReupChoosen from '@/components/Main/ReupChoosen';
import SaleSector from '@/components/Main/SaleSector';
import Slider from '@/components/Main/Slider';
import Category from '@/components/Main/Category';
import Collections from '@/components/Main/Collections';
import Heading from '@/components/common/Heading';

import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { getProductListDataSource } from '@/store/productList/selectors';
import { getProductListAction } from '@/store/productList/thunk';

import cx from './index.module.scss';
import classNames from 'classnames';

const MainPageComponents = () => {
  const dispatch = useAppDispatch();
  const newProducts = useAppSelector(getProductListDataSource);
  

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return (
    <div className={cx.main}>
      <Slider />
      <Category />
      <div className={cx.text}>
        <Heading>picked for you</Heading>
      </div>
      <ProductsList productList={newProducts} />
      <div className={cx.text}>
        <Heading>REUP choos</Heading>
      </div>
      <div className={cx.pink}>
        <ReupChoosen />
        <div className={cx.text}>
          <Heading>collections</Heading>
        </div>
        <Collections />
        <div className={classNames(cx.text, cx.left)}>
          <Heading>i like</Heading>
        </div>
        <ProductsList productList={newProducts} />
      </div>
      <Marquee gradient={false} speed={60}>
        <span className={cx.marquee}>
          акции скидки акции скидки акции скидки акции скидки
        </span>
      </Marquee>
      <ProductsList productList={newProducts} />
      <SaleSector />
    </div>
  );
};

export default MainPageComponents;
