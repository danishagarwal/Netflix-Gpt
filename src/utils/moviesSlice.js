import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { nowPlaying: null, trailerId: null },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    //For getting TrailerId to embed BackgroundVideo
    addtrailerId: (state, action) => {
      state.trailerId = action.payload;
    },
  },
});

export const { addNowPlaying, addtrailerId } = moviesSlice.actions;
export default moviesSlice.reducer;

//Added new slice - Trailer ID for getting the key to use in the Youtube Video Link, so that it can be done dynamically.
