import React, { useState, useMemo } from "react";
import "./../styles/App.css";

// Create 50 tasks: 25 completed and 25 active
const todos = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  text: `Todo ${index + 1}`,
  completed: index < 25,
}));

// Filter tasks according to selected status
function filterTodos(todos, status) {
  if (status === "active") {
    return todos.filter((todo) => !todo.completed);
  }

  if (status === "completed") {
    return todos.filter((todo) => todo.completed);
  }

  return todos;
}

// Simulate expensive rendering
function slowDown() {
  let result = 0;

  for (let i = 0; i < 1000000; i++) {
    result += i;
  }

  return result;
}

// Memoized task list
const TodoList = React.memo(function TodoList({ todos }) {
  slowDown();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            marginBottom: "8px",
          }}
        >
          {todo.text} - {todo.completed ? "Completed" : "Active"}
        </li>
      ))}
    </ul>
  );
});

const App = () => {
  const [status, setStatus] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  // Recalculate filtered tasks only when status changes
  const filteredTodos = useMemo(() => {
    return filterTodos(todos, status);
  }, [status]);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#222",
        minHeight: "100vh",
        padding: "20px",
        transition: "background-color 0.2s, color 0.2s",
      }}
    >
      <h1>Todo List</h1>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => setStatus("all")}>All</button>

        <button onClick={() => setStatus("active")}>Active</button>

        <button onClick={() => setStatus("completed")}>
          Completed
        </button>

        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <h3>
        Showing {filteredTodos.length} of {todos.length} tasks
      </h3>

      <p>Note: Task-list rendering is artificially slowed down.</p>

      <TodoList todos={filteredTodos} />
    </div>
  );
};

export default App;