import "./TodoCart.css";
import { MdRemoveCircleOutline } from "react-icons/md";
import { useAppDispatch } from "redux/hooks";
import { removeTodo } from "redux/slice/todosSlice";

function Todo(props: { text: string; id: number }) {
  const dispatch = useAppDispatch();

  function removeHandler() {
    dispatch(removeTodo(props.id));
  }

  return (
    <div className="todo">
      <span>{props.text}</span>
      <MdRemoveCircleOutline onClick={removeHandler} />
    </div>
  );
}

export default Todo;
