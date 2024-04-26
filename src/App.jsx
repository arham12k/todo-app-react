import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
// import Buttons from "./components/Buttons";
// import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* <center className="box">
        <Counter></Counter>
        <Buttons></Buttons>
      </center> */}

      <Todo></Todo>
      <TodoList></TodoList>
    </>
  );
}

export default App;
