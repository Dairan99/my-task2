import { createSlice } from "@reduxjs/toolkit";

interface ICounter {
    value:number
}

const initialState:ICounter = {
    value:0
}


const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        incrementByAmount: (state, action) => {
            state.value = action.payload
        },
    },
})

export const {increment, decrement, reset, incrementByAmount} = CounterSlice.actions

export default CounterSlice.reducer