import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { toggleGPT: false, moviesData: null },
  reducers: {
    toggleGPTButton: (state) => {
      state.toggleGPT = !state.toggleGPT;
    },

    gptData: (state, action) => {
      state.moviesData = action.payload;
    },
  },
});

export const { toggleGPTButton, gptData } = gptSlice.actions;
export default gptSlice.reducer;
