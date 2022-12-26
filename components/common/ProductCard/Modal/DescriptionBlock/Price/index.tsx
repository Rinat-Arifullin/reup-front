import Select from '@/components/common/Select';
import ArrowDown from '@/static/icons/arrow-down.svg';
import { TProductCard } from '@/store/productDetail/type';
import Image from 'next/image';
import { useMemo } from 'react';
import cx from './index.module.scss';

type IProps = {
  onClickBasket: (id: number) => void;
  id:number;
  price:number;
  dataSourse: TProductCard;
};

const Price = ({onClickBasket, id, price, dataSourse }:IProps) => {

  const sizesOption = useMemo(() => {
    return (
      dataSourse?.sizes.map((i) => ({
        id: i,
        value: i,
        label: String(i),
      })) || []
    );
  }, [dataSourse]);

  return (
      <div className={cx.btnPrice}>
        <div className={cx.price}>
          <span className={cx.throughPrice}>9900 </span>
          <span className={cx.activePrice}>{price}</span>
        </div>
        <div className={cx.chooseSize}>
          <Select title="выбрать размер" options={sizesOption} />
          <Image className={cx.arrowDown} src={ArrowDown} alt="sizes" />
          <span>{}</span>
        </div>
        <div className={cx.appCart}>
          <button onClick={() => onClickBasket(id)}>добавить в корзину</button>
        </div>
      </div>
  );
};

export default Price;
