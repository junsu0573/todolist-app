import TodoBoard from "../components/TodoBoard";
import AddTaskForm from "../components/AddTaskForm";
import { useState, useEffect } from "react";
import { getTasks } from "../utils/api/tasks";

function Home() {
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
      <h1 className="w-full max-w-2xl mb-2">ToDo App</h1>
      <AddTaskForm setTodoList={setTodoList} />
      <TodoBoard todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default Home;
