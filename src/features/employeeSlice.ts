import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

// export const loginEmp = createAsyncThunk(
//   'employees/login',

//   async ({ username, password }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         'http://localhost:5000/login',

//         {
//           method: 'PATCH',

//           headers: {
//             Accept: 'application/json',

//             'Content-Type': 'application/json',
//           },

//           body: JSON.stringify({
//             username,

//             password,
//           }),
//         }
//       );

//       let data = await response.json();

//       console.log('response', data);

//       if (response.status === 200) {
//         localStorage.setItem('token', data.token);

//         return data;
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);

//       thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

export const userSelector = (state) => state.user;

export const actions = employeeSlice.actions;

export default employeeSlice.reducer;
