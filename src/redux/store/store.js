import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../slices/postsSlices'
const store = configureStore({
    reducer: {
        post: postReducer
    }
})
export default store