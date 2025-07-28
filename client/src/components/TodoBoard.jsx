import TodoItem from "./TodoItem";

function TodoBoard({ todoList, setTodoList }) {
  return (
    <div className="w-full max-w-2xl flex flex-col bg-white rounded-lg p-4 gap-2 items-center justify-center">
      <h2>Tasks</h2>
      <div className="w-full flex flex-col gap-2">
        {todoList.length === 0 ? (
          <h2 className="text-center">There is no task</h2>
        ) : (
          todoList.map((item) => (
            <TodoItem
              key={item._id}
              item={item}
              completed={item.completed}
              id={item._id}
              setTodoList={setTodoList}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoBoard;
