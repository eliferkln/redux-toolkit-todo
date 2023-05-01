import TodoForm from "components/TodoForm/TodoForm";
import TodoContainer from "components/TodoContainer/TodoContainer";
import { useAppSelector } from "redux/hooks";
import "./Home.css";

function Home() {
  const pendingTasks = useAppSelector((state) => state.todos.data.length);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoContainer />
      <span className="pending">There is {pendingTasks} pending tasks</span>
    </div>
  );
}

export default Home;
