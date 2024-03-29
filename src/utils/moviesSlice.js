import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { nowPlaying: null, trailerId: null, popular: null },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    //For getting TrailerId to embed BackgroundVideo
    addtrailerId: (state, action) => {
      state.trailerId = action.payload;
    },

    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upComing = action.payload;
    },
  },
});

export const { addNowPlaying, addtrailerId, addPopular, addUpcoming } =
  moviesSlice.actions;
export default moviesSlice.reducer;

//Added new slice - Trailer ID for getting the key to use in the Youtube Video Link, so that it can be done dynamically.
