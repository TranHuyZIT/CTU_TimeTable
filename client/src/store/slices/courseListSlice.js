import { createSlice } from "@reduxjs/toolkit";

const courseListSlice = createSlice({
  name: "courseList",
  initialState: [],
  reducers: {
    updateCourse: (state, action) => {
      return [...action.payload];
    },
    clearCourse: (state, action) => {
      state.splice(0, state.length);
    },
  },
});
export default courseListSlice;
