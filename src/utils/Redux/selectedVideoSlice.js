import { createSlice } from "@reduxjs/toolkit";

const selectedVideoSlice = createSlice({
  name: "selectedVideo",
  initialState: {
    selectVideo: null,
  },
  reducers: {
    addSelectVideo: (state, action) => {
      state.selectVideo = action.payload;
    },
  },
});

export const { addSelectVideo } = selectedVideoSlice.actions;
export default selectedVideoSlice.reducer;
