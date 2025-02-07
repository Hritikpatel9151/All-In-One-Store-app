import { createSlice } from '@reduxjs/toolkit';
import users from '../../MokeData/users';

const initialState = {
  islogin: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        state.user = user;
        state.islogin = true;
      } else {
        console.error("Invalid email or password");
      }
    },
    logout: (state) => {
      state.islogin = false;
      state.user = null;
    },
  },
});

export const { login, logout,user } = authSlice.actions;

export default authSlice.reducer;
