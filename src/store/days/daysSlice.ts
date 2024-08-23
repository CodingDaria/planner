import { createAppSlice } from '../createAppSlice';
import { DaysState } from './types';

const initialState: DaysState = {};

export const daysSlice = createAppSlice({
  name: 'days',
  initialState,
  reducers(creators) {},
});
