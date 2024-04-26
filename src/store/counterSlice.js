import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },

  reducers: {
    increment: (state) => {
      console.log("increment from reducers");
      state.counter++;
    },

    decrement: (state) => {
      state.counter--;
    },
  },
});

export const counterActions = counterSlice.actions;
