import { TProductCard } from '@/store/productDetail/type';
import cx from './index.module.scss';
import { TProductItem } from '@/store/productList/type';
import DescriptionHeader from './DescriptionHeader';
import DescriptionMain from './DescriptionMain';
import Price from './Price';

type IProps = {
  onAddToBasket: (id: number) => void;
  title:string;
  price:number;
  dataSourse: TProductCard;
  id:number;
};

const DescriptionBlock = ({title, dataSourse, price, onAddToBasket, id}:IProps) => {

  return (
    <div className={cx.descriptionBlock}>
      <DescriptionHeader title={title} />

      <DescriptionMain />

      <Price id={id} dataSourse={dataSourse} onClickBasket={onAddToBasket} price={price} />
    </div>
  );
};

export default DescriptionBlock;
