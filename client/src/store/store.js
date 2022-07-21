import {configureStore} from '@reduxjs/toolkit'
import courseListSlice from './slices/courseListSlice'
import selectedCoursesSlice from './slices/selectedCoursesSlice';
import yearSemesterSlice from './slices/yearSemesterSlice';

const store =configureStore({
    reducer: {
        courseList: courseListSlice.reducer,
        selectedCourses: selectedCoursesSlice.reducer,
        yearSemester : yearSemesterSlice.reducer
    }
})

export default store;