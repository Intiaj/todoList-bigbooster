import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [
        ...state.todoList,
        {
          id: state.todoList.length + 1,
          text: action.payload,
          importent: false,
        },
      ];
    },
    removeTodo: (state, action) => {
      const obj = state.todoList.findIndex(
        (item) => item.id === action.payload
      );
      state.todoList.splice(obj, 1);
    },
    addImportent: (state, action) => {
      const obj = state.todoList.findIndex(
        (item) => item.id === action.payload
      );
      state.todoList[obj].importent = !state.todoList[obj].importent;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, addImportent } = counterSlice.actions;

export default counterSlice.reducer;
