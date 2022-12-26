import { TBasketItem } from '@/store/basket/type';
import { TProductItem } from '@/store/productList/type';

export const getBasketTotalPrice = (
  basketItems: TBasketItem[],
  productItems: TProductItem[],
  withDiscount: boolean = true,
): number => {
  return basketItems.reduce((acc, current) => {
    if (!current.checked) {
      return acc;
    }
    return (
      acc +
      current.amount *
        (productItems[current.productId].price + (withDiscount ? 0 : 1000))
    );
  }, 0);
};

export const getBasketCount = (
  basketItems: TBasketItem[],
  onlyChecked = true,
) => {
  return onlyChecked
    ? basketItems.reduce((acc, current) => {
        if (!current.checked) {
          return acc;
        }
        return acc + current.amount;
      }, 0)
    : basketItems.reduce((acc, current) => {
        return acc + current.amount;
      }, 0);
};

export const isAllBasketChecked = (basketItems: TBasketItem[]): boolean => {
  return basketItems.every((elem) => elem.checked);
};
