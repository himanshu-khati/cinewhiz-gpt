import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieNames: null,
    gptMovieResults: null,
    showShimmer: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovieNames = movieNames;
      state.gptMovieResults = movieResults;
    },
    toggleShimmerUi: (state, action) => {
      const { shimmer } = action.payload;
      state.showShimmer = shimmer;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, toggleShimmerUi } = gptSlice.actions;
export default gptSlice.reducer;
