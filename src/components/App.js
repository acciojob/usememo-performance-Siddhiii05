
import React, { useState, useMemo  } from "react";
import './../styles/App.css';

const App = () => {

  const todos = [
  { id: 1, text: "Todo 1", completed: true },
  { id: 2, text: "Todo 2", completed: true },
  { id: 3, text: "Todo 3", completed: true },
  { id: 4, text: "Todo 4", completed: true },
  { id: 5, text: "Todo 5", completed: true },
  { id: 6, text: "Todo 6", completed: true },
  { id: 7, text: "Todo 7", completed: true },
  { id: 8, text: "Todo 8", completed: true },
  { id: 9, text: "Todo 9", completed: true },
  { id: 10, text: "Todo 10", completed: true },
  { id: 11, text: "Todo 11", completed: true },
  { id: 12, text: "Todo 12", completed: true },
  { id: 13, text: "Todo 13", completed: true },
  { id: 14, text: "Todo 14", completed: true },
  { id: 15, text: "Todo 15", completed: true },
  { id: 16, text: "Todo 16", completed: true },
  { id: 17, text: "Todo 17", completed: true },
  { id: 18, text: "Todo 18", completed: true },
  { id: 19, text: "Todo 19", completed: true },
  { id: 20, text: "Todo 20", completed: true },
  { id: 21, text: "Todo 21", completed: true },
  { id: 22, text: "Todo 22", completed: true },
  { id: 23, text: "Todo 23", completed: true },
  { id: 24, text: "Todo 24", completed: true },
  { id: 25, text: "Todo 25", completed: true },

  { id: 26, text: "Todo 26", completed: false },
  { id: 27, text: "Todo 27", completed: false },
  { id: 28, text: "Todo 28", completed: false },
  { id: 29, text: "Todo 29", completed: false },
  { id: 30, text: "Todo 30", completed: false },
  { id: 31, text: "Todo 31", completed: false },
  { id: 32, text: "Todo 32", completed: false },
  { id: 33, text: "Todo 33", completed: false },
  { id: 34, text: "Todo 34", completed: false },
  { id: 35, text: "Todo 35", completed: false },
  { id: 36, text: "Todo 36", completed: false },
  { id: 37, text: "Todo 37", completed: false },
  { id: 38, text: "Todo 38", completed: false },
  { id: 39, text: "Todo 39", completed: false },
  { id: 40, text: "Todo 40", completed: false },
  { id: 41, text: "Todo 41", completed: false },
  { id: 42, text: "Todo 42", completed: false },
  { id: 43, text: "Todo 43", completed: false },
  { id: 44, text: "Todo 44", completed: false },
  { id: 45, text: "Todo 45", completed: false },
  { id: 46, text: "Todo 46", completed: false },
  { id: 47, text: "Todo 47", completed: false },
  { id: 48, text: "Todo 48", completed: false },
  { id: 49, text: "Todo 49", completed: false },
  { id: 50, text: "Todo 50", completed: false }
];

  function generateTodos(){
    return todos;
  }

  const [darkMode, setDarkMode] = useState(false);
  const [status , setStatus] = useState("all");

  function filterTodos(todos, status){
    if (status === "all"){
      return todos;
    }
    else if (status === "active"){
      return todos.filter((todo) => {
        if(todo.completed === false)
          return todo;
      })
    }
    else if(status === "completed"){
      return todos.filter((todo) => {
        if(todo.completed === true)
          return todo;
      })
    }
  }

  const filteredTodos = useMemo(() => {
    return filterTodos(todos, status);
  }, [todos, status])

  function slowDown(todo){
    let result = 0;

    for (let i = 0; i < 10000000; i++) {
      result += i;
    }

    return todo;
  }

  return (
    <div  style={{
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
      minHeight: "100vh"
    }}>
      
      <button onClick={() => setStatus("all")}>All</button>
      <button onClick={() => setStatus("active")}>Active</button>
      <button onClick={() => setStatus("completed")}>Completed</button>
      <button onClick={() => setDarkMode(!darkMode)}>Dark mode</button>
      <hr/>
      <h2>Note: List is artificially slowed down!</h2>
      {
        filteredTodos.map((todos) => {
          slowDown(todos);
          return (
          <ul key={todos.id}>
            <li style={{
              textDecoration: todos.completed ? "line-through" : "none"
            }}>{todos.text}</li>
          </ul>
          )
        })
      }
    </div>
  )
}

export default App
