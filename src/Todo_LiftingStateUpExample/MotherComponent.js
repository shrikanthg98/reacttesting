import TodoCount from "./TodoCount";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

import React from "react";

import { useSelector, useDispatch, useStore } from "react-redux";

function MotherComponent() {
  /*In React, sharing state is accomplished by moving it up to 
  the closest common ancestor of the components that need it. 
  This is called “lifting state up”.*/
  //MotherComponent is closest common ancestor of the components TodoCount, TodoList & AddTodo

  const [todos, setTodos] = React.useState([]);

  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);

  const increase = () => {
    dispatch({ type: "increment" });
  };

  const decrease = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <br />
      <br />
      <h3>The Count is {count}</h3>
      <br />
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h1>Todo App</h1>
      <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

export default MotherComponent;
