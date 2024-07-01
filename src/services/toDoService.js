import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.REACT_APP_API_URL;

export function findAllToDoTasks() {
  const response = axios.get(`${BASE_URL}/tasks`, {
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  });

  return response;
}

export function deleteToDoTask(taskId) {
  return axios.delete(`${BASE_URL}/tasks/${taskId}`, {
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  });
}

export const createToDoTask = async (task) => {
  return axios.post(`${BASE_URL}/tasks/`, task, {
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  });
};

export function updateToDoTask(taskId, updatedData) {
  return axios.put(`${BASE_URL}/tasks/${taskId}`, updatedData, {
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  });
}
