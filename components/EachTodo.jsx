import React, { useState } from "react";
import { addImportent, removeTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function EachTodo({ id, text, importent }) {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between py-8">
      <div className="flex items-center px-8 gap-4">
        <input
          type="checkbox"
          id={id}
          className="w-5 h-5"
          onChange={(e) => setChecked(!e.target.checked)}
        />
        <h1
          className={
            checked
              ? "font-bold text-xl"
              : "font-semibold text-gray-500 line-through"
          }
        >
          {text}
        </h1>
      </div>

      <div className="flex gap-4 items-center">
        <svg
          onClick={() => dispatch(addImportent(id))}
          xmlns="http://www.w3.org/2000/svg"
          className={
            importent
              ? "h-8 w-8 text-yellow-400 cursor-pointer"
              : "h-8 w-8 cursor-pointer"
          }
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>

        <svg
          onClick={() => dispatch(removeTodo(id))}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  );
}

export default EachTodo;
