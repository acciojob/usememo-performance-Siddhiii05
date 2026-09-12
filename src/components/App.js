
import React, { useState, useMemo  } from "react";
import './../styles/App.css';

const App = () => {

  const todos = [
    { id: 1, text: "Complete React basics", completed: true },
    { id: 2, text: "Practice JavaScript arrays", completed: true },
    { id: 3, text: "Learn useState", completed: true },
    { id: 4, text: "Learn useEffect", completed: true },
    { id: 5, text: "Build a counter app", completed: true },
    { id: 6, text: "Practice array methods", completed: true },
    { id: 7, text: "Learn React props", completed: true },
    { id: 8, text: "Practice conditional rendering", completed: true },
    { id: 9, text: "Learn React components", completed: true },
    { id: 10, text: "Build a calculator", completed: true },
    { id: 11, text: "Practice JavaScript objects", completed: true },
    { id: 12, text: "Learn destructuring", completed: true },
    { id: 13, text: "Practice map and filter", completed: true },
    { id: 14, text: "Learn React events", completed: true },
    { id: 15, text: "Build a form", completed: true },
    { id: 16, text: "Practice promises", completed: true },
    { id: 17, text: "Learn async and await", completed: true },
    { id: 18, text: "Practice fetch API", completed: true },
    { id: 19, text: "Learn React Router", completed: true },
    { id: 20, text: "Create multiple routes", completed: true },
    { id: 21, text: "Practice useContext", completed: true },
    { id: 22, text: "Learn useRef", completed: true },
    { id: 23, text: "Practice callbacks", completed: true },
    { id: 24, text: "Review JavaScript fundamentals", completed: true },
    { id: 25, text: "Finish React assignment", completed: true },

    { id: 26, text: "Practice useMemo", completed: false },
    { id: 27, text: "Learn useCallback", completed: false },
    { id: 28, text: "Build a todo app", completed: false },
    { id: 29, text: "Practice React forms", completed: false },
    { id: 30, text: "Learn lifting state", completed: false },
    { id: 31, text: "Practice prop drilling", completed: false },
    { id: 32, text: "Build a weather app", completed: false },
    { id: 33, text: "Practice API integration", completed: false },
    { id: 34, text: "Learn error handling", completed: false },
    { id: 35, text: "Practice try catch", completed: false },
    { id: 36, text: "Learn localStorage", completed: false },
    { id: 37, text: "Build a notes app", completed: false },
    { id: 38, text: "Practice JavaScript classes", completed: false },
    { id: 39, text: "Learn inheritance", completed: false },
    { id: 40, text: "Practice DOM manipulation", completed: false },
    { id: 41, text: "Learn event delegation", completed: false },
    { id: 42, text: "Practice DSA arrays", completed: false },
    { id: 43, text: "Practice sorting algorithms", completed: false },
    { id: 44, text: "Solve two pointer problems", completed: false },
    { id: 45, text: "Practice recursion", completed: false },
    { id: 46, text: "Learn merge sort", completed: false },
    { id: 47, text: "Practice binary search", completed: false },
    { id: 48, text: "Build a React project", completed: false },
    { id: 49, text: "Review React hooks", completed: false },
    { id: 50, text: "Complete DSA practice", completed: false }
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
