import ScrollSlider from '@/components/common/ScrollSlider';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import Jeans from '@/static/img/Jeans.png';
import { getProductDetailDataSource } from '@/store/productDetail/selectors';
import { getProductDetailAction } from '@/store/productDetail/thunk';
import { TProductItem } from '@/store/productList/type';
import { Skeleton } from 'antd';
import Image from 'next/image';
import { useEffect } from 'react';
import DescriptionBlock from './DescriptionBlock';
import cx from './index.module.scss';
import LeftUpBlock from './LeftUpBlock';
import PopupClose from './PopupClose';

type IProps = {
  onLike: (id: number) => void;
  onAddToBasket: (id: number) => void;
  goToProductDetail: () => void;
  setModal: any;
  productList: TProductItem[]
} & TProductItem;
  
const Modal = ({onLike, goToProductDetail, id, onAddToBasket, setModal, title, price, description, productList }:IProps) => {

  const dispatch = useAppDispatch();
  
  const modalList = [...productList, ...productList].map((product) => {
    return (
      <Image key={product.id} onClick={goToProductDetail} className={cx.Jeans} src={Jeans} alt="Jeans" />
    );
  });

  useEffect(() => {
    if (id) {
      dispatch(getProductDetailAction(String(id)));
    }
  }, [id]);
  const data = useAppSelector(getProductDetailDataSource);

  if (!data) {
    return <Skeleton active />;
  }

  return (
    <div className={cx.wrapper}>
      <div className={cx.popup}>
        <div className={cx.scroll}>
          <PopupClose setModal={setModal}/>
          <div className={cx.upBlock}>
            <div className={cx.leftUpBlock}>
              <LeftUpBlock onLike={onLike} id={id} dataSourse={data}/>
            </div>
            <DescriptionBlock dataSourse={data} id={id} price={price} title={title} onAddToBasket={onAddToBasket} />
          </div>

          <div className={cx.maybeLike}>
            <h2>возможно, вам понравится</h2>
          </div>

          <div className={cx.slideBlock}>
            <ScrollSlider cardList={modalList}/>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Modal;
