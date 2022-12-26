import { RootState } from 'store';

export const getProductListDataSource = (state: RootState) =>
  state.productList.dataSource;

export const getProductListLoading = (state: RootState) =>
  state.productList.loading;
