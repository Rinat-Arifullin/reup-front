import Like from '@/static/icons/like.svg';
import { TProductCard } from '@/store/productDetail/type';
import Image from 'next/image';
import Slider from '../Slider';
import cx from './index.module.scss';

type IProps = {
  onLike: (id: number) => void;
  dataSourse: TProductCard;
  id: number
};

const LeftUpBlock = ({ onLike, id, dataSourse }: IProps) => {

  return (
    <div className={cx.leftUpBlockLike}>
      <Image
        onClick={() => onLike(id)}
        className={cx.like}
        src={Like}
        alt="Like"
      />
      <Slider images={dataSourse?.images || []} />
    </div>
  );
};

export default LeftUpBlock;
