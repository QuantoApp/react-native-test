import axios from "axios";

export function getUsers() {
  return axios.get(`https://reqres.in/api/users`);
}