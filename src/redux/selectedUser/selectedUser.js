import { createSlice } from '@reduxjs/toolkit';

export const selectedUserSlice = createSlice({
  name: 'selectedUser',

  initialState: { selectedUser: null },

  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const selectedUserReducer = selectedUserSlice.reducer;
export const { setSelectedUser } = selectedUserSlice.actions;
