import { validateResponse } from "./validateResponse"

const API_ENDPOINT = 'https://655426b15b8e68bb7eff2ddb.mockapi.io/todos'

interface ITodoData {
    text:string
    completed:boolean
}

export const addTodo = async (todoData:ITodoData) => {
    const response = await fetch(API_ENDPOINT, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData)
    })
    validateResponse(response)
    return response.json()
}

export const getTodo = async () => {
    const response = await fetch(API_ENDPOINT)
    validateResponse(response)
    const result = response.json()
    return result
}