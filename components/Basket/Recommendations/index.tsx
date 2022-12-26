import { Skeleton } from 'antd';

import ProductsList from '@/components/Main/ProductList';

import { getBasketLoading } from '@/store/basket/selectors';
import { getProductListDataSource } from '@/store/productList/selectors';
import { useAppSelector } from '@/hooks/store';
import Heading from '@/components/common/Heading';

const Recommendations = () => {
  const products = useAppSelector(getProductListDataSource);
  const loading = useAppSelector(getBasketLoading);

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <>
      <Heading>подобрали для тебя </Heading>
      <ProductsList productList={products} />
      <Heading>избранное</Heading>
      <ProductsList productList={products} />
    </>
  );
};

export default Recommendations;
