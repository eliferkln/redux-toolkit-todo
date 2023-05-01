import { useAppSelector } from "redux/hooks";
import Todo from "components/Todocart/TodoCart";
import "./TodoContainer.css";

function TodoContainer() {
  const todos = useAppSelector((state) => state.todos.data);

  return (
    <div className="todo-list">
      {todos.map((item) => (
        <Todo key={item.id} text={item.text} id={item.id} />
      ))}
    </div>
  );
}

export default TodoContainer;
