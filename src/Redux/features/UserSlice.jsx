import { createSlice } from '@reduxjs/toolkit';
import userss from '../../MokeData/users';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers(state) {
        state.users = userss;
      },
      deleteUser(state, action) {
        state.users = state.users.filter((user) => user.id !== action.payload);
      },
  },

});

export const { fetchUsers, deleteUser } = userSlice.actions;

export default userSlice.reducer;
