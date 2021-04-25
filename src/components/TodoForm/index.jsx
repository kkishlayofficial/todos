import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  },[]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo-form mb-4" onSubmit={submitHandler}>
      {props.edit ? (
        <>
          <input
            type="text"
            name="text"
            className="todo-input edit"
            value={input}
            onChange={changeHandler}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            name="text"
            className="todo-input"
            placeholder="Add some work"
            value={input}
            onChange={changeHandler}
            ref={inputRef}
          />
          <button className="todo-button">Add Task</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
