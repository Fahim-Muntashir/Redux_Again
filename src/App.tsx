import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter)


  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">

        <button className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold" onClick={() => dispatch(increment())}>Increment</button>
        <button className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold" onClick={() => dispatch(incrementByValue({ value: 5 }))}>Increment 5</button>

        <h1 className="text-3xl m-3">{count}</h1>

        <button className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold" onClick={() => dispatch(decrement())}>
          Decremnt</button>
      </div>

    </div >

  )
}

export default App
