import { createSlice } from "@reduxjs/toolkit";

const selectedCoursesSlice = createSlice({
    name: 'selectedCourses',
    initialState: [],
    reducers:{
        addCourse : (state, action) =>{
            state.push(action.payload);
        },
    } 
})
export default selectedCoursesSlice;