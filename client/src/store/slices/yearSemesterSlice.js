import { createSlice } from "@reduxjs/toolkit";

const yearSemesterSlice = createSlice({
    name: 'yearSemester',
    initialState: {
        year: '',
        semester : ''
    },
    reducers:{
        changeYear : (state, action) =>{
            state.year = action.payload;
        },
        changeSemester : (state, action) => {
            state.semester = action.payload;
        }
    } 
})
export default yearSemesterSlice;