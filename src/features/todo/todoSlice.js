import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // add to list
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    // remove from list
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((data) => {
        return data.id !== action.payload;
      });
    },

    // edit
    editTodo: (state, action) => {
      console.log(action);

      const editedIdList = state.todos.find(
        (data) => data.id === action.payload.id
      );
      //  console.log(editedIdList.id);

      if (editedIdList) {
        editedIdList.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
