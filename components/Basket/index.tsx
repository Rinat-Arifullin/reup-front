import { useEffect } from 'react';

import Basket from '@/components/Basket/BasketItems';
import Recommendations from '@/components/Basket/Recommendations';

import { getProductListAction } from '@/store/productList/thunk';

import { getBasketAction } from '@/store/basket/thunk';
import { useAppDispatch } from '@/hooks/store';

const BasketLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductListAction());
    dispatch(getBasketAction());
  }, []);

  return (
    <>
      <Basket />
      <Recommendations />
    </>
  );
};

export default BasketLayout;
