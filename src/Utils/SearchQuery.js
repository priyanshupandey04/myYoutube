import { createSlice } from "@reduxjs/toolkit";

const SearchQuery = createSlice({
  name: "searchQuery",
  initialState: {
    // initialize a new map which will be used to store the search queries and their corresponding suggestions as key-value pairs
    cacheRes:new Map(),
  },
  reducers: {
    addSearchQuery: (state, action) => {
      state.cacheRes.set(action.payload.searchQuery, action.payload.searchSuggestions);
    },
  },
});

export const { addSearchQuery } = SearchQuery.actions;
export default SearchQuery.reducer;
