import {configureStore} from '@reduxjs/toolkit'
import application from '../features/applicationSlice'
import categoryReducer from '../features/CategoriesSlice'

export const store = configureStore({
    reducer: {
        application,
    categoryReducer
}
})