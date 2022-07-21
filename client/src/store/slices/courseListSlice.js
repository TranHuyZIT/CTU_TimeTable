import { createSlice } from "@reduxjs/toolkit";

const courseListSlice = createSlice({
    name: 'courseList',
    initialState: [],
    reducers:{
        updateCourse : (state, action) =>{
            return [
                ...action.payload
            ]
        }
    } 
})
export default courseListSlice;