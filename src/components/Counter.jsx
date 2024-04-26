import { useSelector } from "react-redux";

function Counter() {
  const { counter } = useSelector((state) => state.counter);
  console.log(counter);
  return (
    <div className="counter">
      <h1>Counter: {counter}</h1>
    </div>
  );
}

export default Counter;
