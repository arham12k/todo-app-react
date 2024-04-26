import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

export default function TodoList() {
  //   const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo);
  console.log(todo, "i am todo");

  return (
    <div className="todoList">
      {todo.map((todoitem) => {
        return (
          <div key={todoitem.id} className="todoPara">
            {todoitem.title}
            <button onClick={() => dispatch(removeTodo(todoitem.id))}>X</button>
          </div>
        );
      })}
    </div>
  );
}
