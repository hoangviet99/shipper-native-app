import { createSlice } from '@reduxjs/toolkit';

export const REDUCER_NAME = 'orderInfo';

const orderInfoSlices = createSlice({
  name: REDUCER_NAME,
  initialState: {
    responseData: undefined,
  },
  reducers: {
    setResponseData(state, action) {
      state.responseData = action.payload;
    },
  },
});

export const orderInfoActions = {
  ...orderInfoSlices.actions,
};

export default orderInfoSlices.reducer;
