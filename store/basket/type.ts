export const BASKET_ALIAS = 'basketAlias' as const;

export type TBasketStore = {
  loading: boolean;
  error: Error | null;
  dataSource: TBasketItem[] | null;
};

export type TBasketItem = {
  productId: number;
  amount: number;
  checked: boolean;
};
