import axios from "axios";
import { API_URL } from "../utils/constants";

export function getUsers() {
  return axios.get(`${API_URL}/users`);
}

export function getUserDetail(userId) {
  return axios.get(`${API_URL}/users/${userId}`);
}