import React, { useState } from "react";
import TodoForm from "../TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todos = ({ todo, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const [flag, setFlag] = useState(true);

  const toggleFlag = () => setFlag(!flag);
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  return flag ? (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons d-flex justify-content-center">
        <RiCloseCircleLine
          onClick={() => {
            removeTodo(todo.id);
          }}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
            toggleFlag();
          }}
          className="edit-icon"
        />
      </div>
    </div>
  ) : (
    <TodoForm edit={edit} onSubmit={submitUpdate} toggle={toggleFlag} />
  );
};

export default Todos;
