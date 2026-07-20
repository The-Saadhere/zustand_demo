import { useCounterStore } from "../store/counterStore";



const CounterValue = () => {
    const count = useCounterStore((state) => state.count)

  return (
     <div className="mb-6 text-center text-6xl font-bold text-indigo-600">
          {count}
        </div>
  )
}

export default CounterValue