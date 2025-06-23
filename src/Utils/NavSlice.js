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
    closeSidebar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});
export const { toggleSidebar, closeSidebar } = NavSlice.actions;
export default NavSlice.reducer;
