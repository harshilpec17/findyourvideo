import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    randomMessage: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.randomMessage.splice(20, 1);
      state.randomMessage.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
