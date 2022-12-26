import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  offsetTop?: number;
}

const ContaineredAffix = ({ children, offsetTop = 32 }: IProps) => {
  return (
    <div>
      <div style={{ position: 'sticky', top: offsetTop }}>{children}</div>
    </div>
  );
};

export default ContaineredAffix;
