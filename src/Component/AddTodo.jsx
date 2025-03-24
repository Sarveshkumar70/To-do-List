import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo, editTodo } from "../features/todo/todoSlice";
import toast from "react-hot-toast";
import Todo from "./Todo";


function AddTodo() {

  const [input, setInput] = useState(" ");
  // to select or mark the id
  const [editID,setEditID]= useState(null);

  
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todos)

  // onChange on input
  const handleInput = (value) => {
    setInput(value);
  };

  // when submitting form
  const addTodoHandler = (e) => {
    e.preventDefault();

    // validation
    let newVal = input.trim();
    if (newVal === "") {
      toast.error("Enter some input value!!");
      return;
    }
    if (editID) {
      dispatch(editTodo({id:editID,text:newVal}))
      setEditID(null) 
      toast.success("Toast updated")
    }else{
      // adding to list
      dispatch(addTodo(newVal));
      toast.success("Toast added")
    }
  };

  const handleEdit = (id)=>{
    const todoToEdit= todos.find((item)=>item.id === id)
    if (todoToEdit) {
      setInput(todoToEdit.text)
      setEditID(id)
    }
  }

  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {editID?"Update Todo":"Add Todo"}
        </button>
      </form>

      {/* list of Todos */}
      <Todo handleEdit={handleEdit} />
    </>
  );
}

export default AddTodo;
