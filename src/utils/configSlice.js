import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "english",
  },
  reducers: {
    changeLangugage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLangugage } = configSlice.actions;
export default configSlice.reducer;
