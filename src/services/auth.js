import axios from "axios";
import api from "../lib/api";

const handleError = (error) => {
  const message = axios.isAxiosError(error)
    ? error.response?.data?.message || error.message
    : error instanceof Error
      ? error.message
      : "internal server error occurred";

  return {
    message,
    success: false,
  };
};

async function loginRequest(email, password) {
  try {
    const res = await api.post("/auth/login", { email, password });

    const data = res.data;

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}

async function logoutRequest() {
  try {
    const res = await api.post("/auth/logout");
    const data = res.data;

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}

export async function getAdmin() {
  try {
    const res = await api.get("/auth/me");
    const data = res.data;

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}
