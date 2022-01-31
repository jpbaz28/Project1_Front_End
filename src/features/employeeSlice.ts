import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    value: {
      id: sessionStorage.getItem('id') ?? '',
      name: sessionStorage.getItem('name') ?? '',
      isAuthenticated: sessionStorage.getItem('isAunthenticated')
        ? true
        : false,
      reimburseAccount: [],
      isManager: sessionStorage.getItem('isManager') ? true : false,
    },
  },
  reducers: {
    updateState: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    // Extra reducer comes here
  },
});

export const userSelector = (state) => state.user;

export const actions = employeeSlice.actions;

export default employeeSlice.reducer;
