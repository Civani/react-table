import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  session: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession(state, action) {
      state.session = action.payload;
    },
    saveUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setSession, saveUser } = authSlice.actions;
export default authSlice.reducer;
