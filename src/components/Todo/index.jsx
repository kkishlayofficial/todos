import React from 'react'
import Todos from '../Todos'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

    return(
        <>
        {todos.map((todo,idx)=>{
            return(
                <Todos todo={todo} key={idx} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            )
        })}
        </>
    )
}

export default Todo;