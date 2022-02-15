import { createSlice } from '@reduxjs/toolkit';

export const REDUCER_NAME = 'listOrder';

const listOrderSlices = createSlice({
  name: REDUCER_NAME,
  initialState: {
    isReloadGettingDataCL: false,
    isReloadGettingDataCG: false,
    isReloadGettingDataDG: false,
    isReloadGettingDataTL: false,
  },
  reducers: {
    setIsReloadGettingDataCL(state, action) {
      state.isReloadGettingDataCL = action.payload;
    },
    setIsReloadGettingDataCG(state, action) {
      state.isReloadGettingDataCG = action.payload;
    },
    setIsReloadGettingDataDG(state, action) {
      state.isReloadGettingDataDG = action.payload;
    },
    setIsReloadGettingDataTL(state, action) {
      state.isReloadGettingDataTL = action.payload;
    },
  },
});

export const listOrderActions = {
  ...listOrderSlices.actions,
};

export default listOrderSlices.reducer;
