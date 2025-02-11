import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import users from '../../MokeData/users';


const initialState = {
  user: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return user;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
     
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        
        state.user = action.payload;
      })
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
