import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResult: {},
  },
  reducers: {
    cacheResult: (state, action) => {
      state.searchResult = { ...action.payload, ...state.searchResult };
    },
  },
});

export const { cacheResult } = searchSlice.actions;
export default searchSlice.reducer;
