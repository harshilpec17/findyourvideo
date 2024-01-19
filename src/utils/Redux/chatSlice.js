import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    randomMessage: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.randomMessage.splice(15, 1);
      state.randomMessage.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
