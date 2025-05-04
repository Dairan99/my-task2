import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { decrement, increment, incrementByAmount, reset } from "../store/slices"


export const Counter = () => {
    const count = useSelector((state:RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
             <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
        </div>
    )
}