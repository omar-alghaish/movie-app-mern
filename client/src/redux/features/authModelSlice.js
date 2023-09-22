import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModalOpen: false,
};

export const authModalSlice = createSlice({
  name: "AuthModel",
  initialState,
  reducers: {
    setAuthModalOpen: (state, action) => {
      state.authModalOpen = action.payload;
    },
  },
});

export const { setAuthModalOpen } = authModalSlice.actions;

export default authModalSlice.reducer;
