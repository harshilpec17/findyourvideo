import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    randomMessage: [],
    chatRandomData: null,
    videoComment: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.randomMessage.splice(15, 1);
      state.randomMessage.unshift(action.payload);
    },
    addChatRandomData: (state, action) => {
      state.chatRandomData = action.payload;
    },
    addVideoComment: (state, action) => {
      state.videoComment = action.payload;
    },
  },
});

export const { addMessage, addChatRandomData, addVideoComment } =
  chatSlice.actions;
export default chatSlice.reducer;
