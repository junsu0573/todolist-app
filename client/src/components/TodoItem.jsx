import { deleteTask, updateTask } from "../utils/api/tasks";
import EditModal from "./EditModal";
import { useState } from "react";

function TodoItem({ task, completed, id, setTodoList }) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickStatus = () => {
    updateTask(id, task, !completed);
    setTodoList((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const onClickDelete = () => {
    deleteTask(id);
    setTodoList((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between gap-2 border border-gray-400 p-2 rounded-md">
      <div className="w-full flex gap-2 ">
        <p className={"truncate w-full"}>{task}</p>
        <button
          onClick={onClickStatus}
          className={`px-2 rounded-md shrink-0 ${
            completed
              ? "text-white bg-blue-500 hover:bg-blue-600"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {completed ? "완료" : "미완료"}
        </button>
      </div>
      <div className="flex gap-2 flex-shrink-0 justify-end">
        <button
          onClick={() => setIsEdit(true)}
          className="px-2 rounded-md bg-yellow-100 hover:bg-yellow-200"
        >
          Edit
        </button>
        <button
          onClick={onClickDelete}
          className="px-2 rounded-md bg-red-300 hover:bg-red-400"
        >
          Delete
        </button>
      </div>
      {isEdit && (
        <EditModal
          isOpen={isEdit}
          onClose={() => setIsEdit(false)}
          id={id}
          task={task}
          setTodoList={setTodoList}
        />
      )}
    </div>
  );
}

export default TodoItem;
