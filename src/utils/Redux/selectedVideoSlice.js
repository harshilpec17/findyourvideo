import { createSlice } from "@reduxjs/toolkit";

const selectedVideoSlice = createSlice({
  name: "selectedVideo",
  initialState: {
    selectVideo: null,
    channelInfo: null,
  },
  reducers: {
    addSelectVideo: (state, action) => {
      state.selectVideo = action.payload;
    },
    addChannelInfo: (state, action) => {
      state.channelInfo = action.payload;
    },
  },
});

export const { addSelectVideo, addChannelInfo } = selectedVideoSlice.actions;
export default selectedVideoSlice.reducer;
