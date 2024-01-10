import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    mostPopularVideo: null,
  },
  reducers: {
    addPopularVideo: (state, action) => {
      state.mostPopularVideo = action.payload;
    },
  },
});

export const { addPopularVideo } = videoSlice.actions;
export default videoSlice.reducer;
