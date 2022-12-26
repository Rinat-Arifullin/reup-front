import Link from 'next/link';
import Image from 'next/image';
import { Tooltip } from 'antd';

import { TProductItem } from '@/store/productList/type';
import { EPagesRoutes } from '@/constants/router';
import { decoratePrice } from '@/helpers/decoratePrice';
import deleteIcon from '@/static/icons/delete.svg';

import cx from './index.module.scss';

interface IProps {
  product: TProductItem;
  amount: number;
  checked: boolean;
}

const BasketProductCard = ({ product, amount, checked }: IProps) => {
  return (
    <div className={cx.wrapper}>
      <Link
        className={cx.linkImage}
        href={`${EPagesRoutes.ProductDetail}/${product.id}`}
      >
        <Image src={product.imgSource} alt="product image" />
      </Link>

      <input type="checkbox" checked={checked} />

      <div className={cx.cardBody}>
        <div className={cx.top}>
          <div>
            <div className={cx.bold}>{product.title}</div>
            <div className={cx.bold}>тип товара</div>
            <div>название бренда</div>
            <div className={cx.params}>
              <div>цвет: черный</div>
              <div>размер: 46</div>
            </div>
          </div>

          <Tooltip title="удалить товар из корзины">
            <button className="iconBnt">
              <Image src={deleteIcon} alt="deleteIcon" />
            </button>
          </Tooltip>
        </div>

        <div className={cx.bottom}>
          <div className={cx.counter}>
            <button className="iconBnt">-</button>
            <div>{amount}</div>
            <button className="iconBnt">+</button>
          </div>

          <div className={cx.price}>
            <div className={cx.oldPrice}>
              {/*TODO: replace with old price (without discound) */}
              {decoratePrice((product.price + 1000) * amount)} ₽
            </div>
            <div className={cx.truePrice}>
              {decoratePrice(product.price * amount)} ₽
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketProductCard;
