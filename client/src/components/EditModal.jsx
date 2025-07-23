import { useState } from "react";
import { updateTask } from "../utils/api/tasks";

function EditModal({ onClose, task, id, setTodoList }) {
  const [editedTask, setEditedTask] = useState(task);

  const onClickEdit = () => {
    updateTask(id, editedTask);
    setTodoList((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, task: editedTask } : item
      )
    );
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-2 bg-white p-4 rounded-md"
      >
        <h2>Edit Task</h2>
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          className="border border-gray-300 rounded-md p-1 focus:outline-none"
        />
        <div className="flex justify-center gap-2">
          <button
            onClick={onClickEdit}
            className="w-full px-2 py-1 bg-blue-500 text-white rounded-md"
          >
            Edit
          </button>
          <button
            onClick={onClose}
            className="w-full px-2 py-1 bg-red-500 text-white rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
