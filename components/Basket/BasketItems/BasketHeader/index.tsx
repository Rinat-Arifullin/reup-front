import Link from 'next/link';
import Image from 'next/image';
import { Tooltip } from 'antd';

import { EPagesRoutes } from '@/constants/router';
import closeIcon from '@/static/icons/close.svg';

import cx from './index.module.scss';

interface IProps {
  basketCount: number;
}

const BasketHeader = ({ basketCount }: IProps) => {
  return (
    <div className={cx.title}>
      <h1>
        корзина
        {!!basketCount && (
          <span className={cx.basketCount}> {basketCount} шт</span>
        )}
      </h1>
      <Tooltip title="закрыть корзину">
        <Link href={`${EPagesRoutes.Main}`}>
          <button className="iconBnt">
            <Image src={closeIcon} alt="closeIcon" />
          </button>
        </Link>
      </Tooltip>
    </div>
  );
};

export default BasketHeader;
