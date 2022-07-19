import {configureStore} from '@reduxjs/toolkit'
import courseListSlice from './courseListSlice'
import yearSemesterSlice from './yearSemesterSlice';

const store =configureStore({
    reducer: {
        courseList: courseListSlice.reducer,
        yearSemester : yearSemesterSlice.reducer
    }
})

export default store;