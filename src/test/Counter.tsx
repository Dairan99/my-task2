import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prevCount) => prevCount += 1)
    }

    const decrement = () => {
        setCount((prevCount) => prevCount -= 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => increment()}>Добавить</button>
            <button onClick={decrement}>Убавить</button>
            <button onClick={reset}>Сбросить</button>
        </div>
    )
}

export default Counter