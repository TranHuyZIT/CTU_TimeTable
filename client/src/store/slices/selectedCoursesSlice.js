import { createSlice } from "@reduxjs/toolkit";

const selectedCoursesSlice = createSlice({
    name: 'selectedCourses',
    initialState: [],
    reducers:{
        addCourse : (state, action) =>{
            const stateTMP = state.filter((course) => {
                return course.key !== action.payload.key;
            })
            let validTime = true;
            stateTMP.forEach((course) => {
                course.time.forEach((addedCourseTime) => {
                    action.payload.time.forEach((addingCourseTime) => {
                        if (addedCourseTime.day === addingCourseTime.day){
                            let addingCourseTimePeriods = [];
                            for(let i = addingCourseTime.start; i <= addingCourseTime.start + addingCourseTime.count; i++){
                                addingCourseTimePeriods.push(i);
                            }
                            for(let i = addedCourseTime.start; i <= addedCourseTime.start + addedCourseTime.count; i++){
                                if (addingCourseTimePeriods.includes(i)){
                                    validTime = false;
                                    return;
                                }
                            }
                        }
                    })
                })
            })
            if (validTime) stateTMP.push(action.payload);
            return stateTMP;
        },
    } 
})
export default selectedCoursesSlice;