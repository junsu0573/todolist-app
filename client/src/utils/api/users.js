import api from "./api";

export const registerUser = async (user) => {
  try {
    const res = await api.post("/users", user);
    return res.data?.data || [];
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (user) => {
  try {
    const res = await api.post("/users/login", user);
    return res.data?.data || [];
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};
