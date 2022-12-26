import { randomInteger } from '@/helpers/utils';
import cx from './index.module.scss';

type IProps = {
  title: string;
};

const DescriptionHeader = ({ title }:IProps) => {
  const article = randomInteger(1000, 9999);
  return (
    <div className={cx.header}>
      <h2>{title}</h2>
      <h4>название бренда</h4>
      <span className={cx.article}>0{article}</span>
      <p>О ТОВАРЕ</p>
    </div>
  );
};

export default DescriptionHeader;
