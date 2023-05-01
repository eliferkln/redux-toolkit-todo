import React, { useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { addTodo } from "redux/slice/todosSlice";
import "./TodoForm.css";

function TodoForm() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  function changeHandler(e: React.FormEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }

  const addTodoCart = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(text));
  };
  return (
    <div className="todo-form">
      <label>New Todo</label>
      <div className="todo-add">
        <input
          onChange={changeHandler}
          value={text}
          placeholder="Add new todo here"
        />
        <button onClick={(e: React.FormEvent) => addTodoCart(e)}>+</button>
      </div>
    </div>
  );
}

export default TodoForm;
