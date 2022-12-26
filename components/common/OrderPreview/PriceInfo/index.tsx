import { TProductItem } from '@/store/productList/type';
import { TBasketItem } from '@/store/basket/type';
import { getBasketTotalPrice } from '@/components/Basket/helpers';

import cx from './index.module.scss';

interface IProps {
  products: TProductItem[];
  basket: TBasketItem[];
}

const PriceInfo = ({ products, basket }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.infoRow}>
        <div className={cx.title}>сумма&nbsp;заказа</div>
        <div className={cx.dashed}></div>
        <div className={cx.price}>
          {getBasketTotalPrice(basket, products)}&nbsp;₽
        </div>
      </div>

      <div className={cx.infoRow}>
        <div className={cx.title}>скидка</div>
        <div className={cx.dashed}></div>
        <div className={cx.price}>0&nbsp;₽</div>
      </div>

      <div className={cx.totalPrice}>
        <div className={cx.title}>итого</div>
        <div className={cx.price}>
          {getBasketTotalPrice(basket, products)}&nbsp;₽
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
