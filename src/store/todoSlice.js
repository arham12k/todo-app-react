import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",

  initialState: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],

  reducers: {
    addTodo: (state, action) => {
      if (action.payload.title === "") {
        alert("Please Enter something");
        return state;
      } else {
        state = [...state, action.payload];
        localStorage.setItem("users", JSON.stringify(state));
        return state;
      }
    },

    removeTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(state));
      return state;
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
