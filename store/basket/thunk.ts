import { notification } from 'antd';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASKET_ALIAS, TBasketItem, TBasketStore } from '@/store/basket/type';
import { randomInteger } from '@/helpers/utils';
import { mockFetch } from '@/helpers/mockFetch';

const mockData: TBasketItem[] = [];

for (let i = 0; i < randomInteger(0, 4); i++) {
  mockData.push({
    productId: i,
    amount: randomInteger(1, 3),
    checked: !!randomInteger(0, 1),
  });
}

export const getBasketAction = createAsyncThunk<
  TBasketStore['dataSource'],
  undefined,
  {
    rejectValue: TBasketStore['error'];
  }
>(`${BASKET_ALIAS}/fetch`, async (_, { rejectWithValue }) => {
  try {
    const data = await mockFetch(mockData);
    return data;
  } catch (error) {
    notification.error({ message: String(error) });
    return rejectWithValue(error as Error);
  }
});
