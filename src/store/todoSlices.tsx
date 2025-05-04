import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodoSlices {
    id:number,
    text:string,
    completed:boolean
}

const initialState:ITodoSlices[] = []

const TodoSlices = createSlice({
    name:"Todo",
    initialState,
    reducers: {
        addTask: (state, action:PayloadAction<string>) => {
            const newTask = {
                id:Date.now(),
                text:action.payload,
                completed:false
            }
            state.push(newTask)
        },
        toggleTask: (state, action:PayloadAction<number>) => {
            const taskId = action.payload
            const task = state.find(task => task.id === taskId )
            if (task) {
                task.completed = !task.completed;
            }
        },
        deletedTask: (state, action:PayloadAction<number>) => {
            const taskId = action.payload
            const task = state.filter(task => task.id !== taskId)
            return task
        }
    }
})

export const {addTask, toggleTask, deletedTask} = TodoSlices.actions
export default TodoSlices.reducer