import TodoBoard from "../components/TodoBoard";
import AddTaskForm from "../components/AddTaskForm";
import { useState, useEffect } from "react";
import { getTasks } from "../utils/api/tasks";
import { Link } from "react-router-dom";

function Home({ user }) {
  const [todoList, setTodoList] = useState([]);

  const fetchTasks = async () => {
    const tasks = await getTasks();
    console.log(tasks);
    setTodoList(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="w-full flex flex-col items-center h-screen bg-gray-300 p-5 sm:p-20 text-sm sm:text-base">
      <div className="w-full flex justify-between items-center max-w-2xl mb-2">
        <h1>ToDo App</h1>
        <button
          onClick={() => {
            sessionStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
      <AddTaskForm setTodoList={setTodoList} user={user} />
      <TodoBoard todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default Home;
