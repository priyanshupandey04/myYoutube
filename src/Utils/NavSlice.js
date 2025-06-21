import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
  name: "nav",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});
export const { toggleSidebar } = NavSlice.actions;
export default NavSlice.reducer;
