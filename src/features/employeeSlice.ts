import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    value: {
      id: '',
      fname: 'Freddy',
      lname: 'Mercury',
      username: '',
      password: '',
      reimburseAccount: [],
      isManager: null,
      department: 'Music',
    },
  },
  reducers: {
    // loginState: (state, action) => {
    //   state.value = action.payload;
    // },
  },
  extraReducers: {
    // Extra reducer comes here
  },
});

export const loginEmp = createAsyncThunk(
  'employees/login',

  async ({ username, password }, thunkAPI) => {
    try {
      const response = await fetch(
        'http://localhost:5000/login',

        {
          method: 'PATCH',

          headers: {
            Accept: 'application/json',

            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            username,

            password,
          }),
        }
      );

      let data = await response.json();

      console.log('response', data);

      if (response.status === 200) {
        localStorage.setItem('token', data.token);

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);

      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const userSelector = (state) => state.user;

export const { loginState } = employeeSlice.actions;

export default employeeSlice.reducer;
