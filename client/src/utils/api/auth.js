import api from "./api";

export const loginAuth = async () => {
  try {
    const res = await api.post("/auth/login");
    return res.data?.data || [];
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
};
