import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';
import cx from './index.module.scss';

const EmptyBasket = () => {
  return (
    <div className={cx.wrapper}>
      <div>пока что пусто...</div>
      <Link href={`${EPagesRoutes.Main}/`}>
        <button className={cx.gotoMainButton}>перейти к покупкам</button>
      </Link>
    </div>
  );
};

export default EmptyBasket;
