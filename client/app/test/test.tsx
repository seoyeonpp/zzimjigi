import { useCounterStore } from '../store/useCounterStore'

export function Test() {
  const { count, increase, decrease } = useCounterStore()

  return (
    <div>
      <button onClick={() => increase()}>Increase</button>
      <button onClick={() => decrease()}>Decrease</button>
      <p>Count: {count}</p>
    </div>
  )
}
