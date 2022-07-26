import { createSlice } from "@reduxjs/toolkit";

const selectedCoursesSlice = createSlice({
    name: 'selectedCourses',
    initialState: [],
    reducers:{
        addCourse : (state, action) =>{
            const stateTMP = state.filter((course) => {
                return course.key !== action.payload.key;
            })
            stateTMP.push(action.payload);
            return stateTMP;
        },
    } 
})
export default selectedCoursesSlice;