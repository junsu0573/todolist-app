import api from "./api";

export const getTasks = async () => {
  const res = await api.get("/tasks");
  return res.data?.data || [];
};

export const addTask = async (task) => {
  const res = await api.post("/tasks", { task });
  return res.data?.data || [];
};

export const updateTask = async (id, task, completed) => {
  const res = await api.put(`/tasks/${id}`, { task, completed });
  return res.data?.data || [];
};

export const deleteTask = async (id) => {
  const res = await api.delete(`/tasks/${id}`);
  return res.data?.data || [];
};
