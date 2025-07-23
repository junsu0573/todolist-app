import { useState } from "react";
import { addTask } from "../utils/api/tasks";

function AddTaskForm({ setTodoList }) {
  const [value, setValue] = useState("");

  const onAddTask = async () => {
    const res = await addTask(value);
    setTodoList((prev) => [...prev, res]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    onAddTask();
    setValue("");
  };

  const onChange = (e) => setValue(e.target.value);

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-2xl flex bg-white rounded-lg p-4 gap-2 items-center justify-center mb-2"
    >
      <input
        className="w-full p-1 rounded-md focus:outline-none"
        type="text"
        placeholder="Add a new task"
        value={value}
        onChange={onChange}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
      >
        Add
      </button>
    </form>
  );
}

export default AddTaskForm;
