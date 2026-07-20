import { useCounterStore } from "../store/counterStore";
import CounterValue from "./CounterValue";

const Counter = () => {
  const {  increase, decrease, reset } = useCounterStore();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100">
      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Counter
        </h1>

        <CounterValue />

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={decrease}
            className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600 active:scale-95"
          >
            − Decrease
          </button>

          <button
            onClick={reset}
            className="rounded-lg bg-gray-300 px-4 py-2 font-medium text-gray-800 transition hover:bg-gray-400 active:scale-95"
          >
            Reset
          </button>

          <button
            onClick={increase}
            className="rounded-lg bg-green-500 px-4 py-2 font-medium text-white transition hover:bg-green-600 active:scale-95"
          >
            + Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;