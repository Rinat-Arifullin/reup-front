import { Skeleton } from 'antd';

import BasketHeader from '@/components/Basket/BasketItems/BasketHeader';
import EmptyBasket from '@/components/common/EmptyBasket';
import BasketProductCard from '@/components/Basket/BasketItems/BasketProductCard';
import BasketSummary from '@/components/Basket/BasketItems/BasketSummary';
import {
  isAllBasketChecked,
  getBasketTotalPrice,
  getBasketCount,
} from '@/components/Basket/helpers';

import {
  getBasketDataSource,
  getBasketLoading,
} from '@/store/basket/selectors';
import {
  getProductListDataSource,
  getProductListLoading,
} from '@/store/productList/selectors';

import { useAppSelector } from '@/hooks/store';

import cx from './index.module.scss';

const Basket = () => {
  const products = useAppSelector(getProductListDataSource);
  const basket = useAppSelector(getBasketDataSource);

  const basketLoading = useAppSelector(getBasketLoading);
  const productsLoading = useAppSelector(getProductListLoading);

  if (basketLoading || productsLoading) {
    return <Skeleton active />;
  }

  return (
    <div className={cx.wrapper}>
      <BasketHeader basketCount={basket ? getBasketCount(basket, false) : 0} />

      {!basket?.length ? (
        <EmptyBasket />
      ) : (
        <div>
          <label className={cx.chooseAll}>
            <input type="checkbox" checked={isAllBasketChecked(basket)} />
            выбрать все
          </label>

          <div className={cx.basketBody}>
            <div className={cx.basketProductList}>
              {basket.map((product) => {
                if (product.amount)
                  return (
                    <BasketProductCard
                      product={products[product.productId]}
                      amount={product.amount}
                      checked={product.checked}
                      key={product.productId}
                    />
                  );
              })}
            </div>
            <BasketSummary
              truePrice={getBasketTotalPrice(basket, products)}
              oldPrice={getBasketTotalPrice(basket, products, false)}
              count={getBasketCount(basket)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
