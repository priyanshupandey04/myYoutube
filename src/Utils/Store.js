import { configureStore } from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';
import NavSlice from "./NavSlice";
import SearchQuery from "./SearchQuery";
enableMapSet();

const store = configureStore({
  reducer: {
    // anyName: SliceName, this anyName will be used during subscription to the slice
    sidebar: NavSlice,
    search: SearchQuery,
  },
});

export default store;
