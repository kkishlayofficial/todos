import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = () => {
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div className="todo-form mb-4">
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
          <button
            className="todo-button edit"
            onClick={() => {
              submitHandler();
              props.toggle();
            }}
          >
            Update
          </button>
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
          <button className="todo-button" onClick={submitHandler}>
            Add Task
          </button>
        </>
      )}
    </div>
  );
};

export default TodoForm;
