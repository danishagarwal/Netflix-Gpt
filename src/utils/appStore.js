import configReducer from "./configSlice";
import gptSlice from "./gptSlice";
import moviesReducer from "./moviesSlice";
import userReducer from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptSlice,
    config: configReducer,
  },
});

export default appStore;
