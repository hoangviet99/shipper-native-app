import { createSlice } from '@reduxjs/toolkit';

export const REDUCER_NAME = 'userAccount';

const userAccountSlices = createSlice({
  name: REDUCER_NAME,
  initialState: {
    isLogin: false,
    code: undefined,
    groupCL: undefined,
    groupCG: undefined,
    groupDG: undefined,
    groupTL: undefined,
    listOrderCL: undefined,
    streetNameCL: undefined,
    streetNameCG: undefined,
    streetNameDG: undefined,
    streetNameTL: undefined,
  },
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    setCode(state, action) {
      state.code = action.payload;
    },
    setGroupCL(state, action) {
      state.groupCL = action.payload;
    },
    setGroupCG(state, action) {
      state.groupCG = action.payload;
    },
    setGroupDG(state, action) {
      state.groupDG = action.payload;
    },
    setGroupTL(state, action) {
      state.groupTL = action.payload;
    },
    setListOrderCL(state, action) {
      state.listOrderCL = action.payload;
    },
    setStreetNameDG(state, action) {
      state.streetNameDG = action.payload;
    },
    setStreetNameCG(state, action) {
      state.streetNameCG = action.payload;
    },
    setStreetNameTL(state, action) {
      state.streetNameTL = action.payload;
    },
    setStreetNameCL(state, action) {
      state.streetNameCL = action.payload;
    },
  },
});

export const userAccountActions = {
  ...userAccountSlices.actions,
};

export default userAccountSlices.reducer;
