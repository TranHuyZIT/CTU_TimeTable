import {combineReducers, configureStore} from '@reduxjs/toolkit'
import courseListSlice from './slices/courseListSlice'
import selectedCoursesSlice from './slices/selectedCoursesSlice';
import yearSemesterSlice from './slices/yearSemesterSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
  }
const rootReducer = combineReducers({
        courseList: courseListSlice.reducer,
        selectedCourses: selectedCoursesSlice.reducer,
        yearSemester : yearSemesterSlice.reducer
})
   
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const store = configureStore(
    {
        reducer: persistedReducer
    }
)
export const persistor = persistStore(store);
export default store;