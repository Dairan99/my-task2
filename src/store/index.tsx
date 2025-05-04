import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices"
import todoReducer  from "../store/todoSlices"

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        todos:todoReducer 
    }
})

export default store