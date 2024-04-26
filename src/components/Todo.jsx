import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { nanoid } from "nanoid";

export default function Todo() {
  const dispatch = useDispatch();
  const inputVal = useRef("");
  function handleAdd() {
    dispatch(
      addTodo({
        id: nanoid(),
        title: inputVal.current.value,
      })
    );
    inputVal.current.value = "";
  }

  return (
    <div className="todo-container">
      <input type="text" placeholder="add todo" ref={inputVal} />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
