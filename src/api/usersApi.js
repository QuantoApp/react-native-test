import axios from "axios";

export function getUsers() {
  return axios.get(`https://reqres.in/api/users`);
}

export function getUserDetail(userId) {
  return axios.get(`https://reqres.in/api/users/${userId}`);
}