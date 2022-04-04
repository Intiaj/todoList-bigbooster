import React, { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleClick = () => {
    text ? dispatch(addTodo(text)) : null;
    setText("");
  };
  return (
    <div className="bg-white rounded-xl flex flex-col justify-center p-4">
      <textarea
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-xl border h-36"
      />
      <button
        onClick={() => handleClick()}
        className="bg-blue-500 mx-8 p-2 text-white font-bold text-lg rounded-lg my-8"
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
