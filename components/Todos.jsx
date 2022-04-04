import React, { useState } from "react";
import { useSelector } from "react-redux";
import EachTodo from "./EachTodo";

function Todos() {
  const allTodos = useSelector((state) => state.todo.todoList);
  console.log(allTodos);
  return (
    <div className="bg-white rounded-xl">
      {allTodos.map((item) => (
        <EachTodo
          key={item.id}
          text={item.text}
          id={item.id}
          importent={item.importent}
        />
      ))}
    </div>
  );
}

export default Todos;
