import api from "./api";

export const getTasks = async () => {
  try {
    const res = await api.get("/tasks");
    console.log(res.data);
    return res.data?.data || [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const addTask = async (task) => {
  try {
    const res = await api.post("/tasks", { task });
    return res.data?.data || [];
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const updateTask = async (id, task, completed) => {
  try {
    const res = await api.put(`/tasks/${id}`, { task, completed });
    return res.data?.data || [];
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await api.delete(`/tasks/${id}`);
    return res.data?.data || [];
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
