import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { toggleGPT: false },
  reducers: {
    toggleGPTButton: (state, action) => {
      state.toggleGPT = !state.toggleGPT;
    },
  },
});

export const { toggleGPTButton } = gptSlice.actions;
export default gptSlice.reducer;
