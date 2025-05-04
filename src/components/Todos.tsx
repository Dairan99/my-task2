import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { addTask, deletedTask, ITodoSlices, toggleTask } from "../store/todoSlices"



export const Todos = () => {
    const [text, setText] = useState("")
    const todos = useSelector((state:RootState) => state.todos)
    const dispatch = useDispatch()

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() !== "") {
            dispatch(addTask(text)); // Отправляем action addTask с текстом задачи
            setText(""); // Очищаем поле ввода
        }
    };

    const handleToggleTask = (id: number) => {
        dispatch(toggleTask(id)); // Отправляем action toggleTask с id задачи
    };

    const handleDeleteTask = (id: number) => {
        dispatch(deletedTask(id)); // Отправляем action deletedTask с id задачи
    };

    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Add new todo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo: ITodoSlices) => ( 
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleToggleTask(todo.id)}>
                            {todo.completed ? "Undone" : "Done"}
                        </button>
                        <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos