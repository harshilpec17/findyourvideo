import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import selectedVideoSlice from "./selectedVideoSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    video: videoSlice,
    search: searchSlice,
    chat: chatSlice,
    selectVideo: selectedVideoSlice,
  },
});

export default appStore;
