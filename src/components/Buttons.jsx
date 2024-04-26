import { useDispatch } from "react-redux";
import { counterActions } from "./store/counterSlice";

export default function Buttons() {
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(counterActions.increment());
  };

  const handleDec = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className="buttons">
      <button onClick={handleInc}>Increment ++</button>
      <button onClick={handleDec}>Decrement --</button>
    </div>
  );
}
