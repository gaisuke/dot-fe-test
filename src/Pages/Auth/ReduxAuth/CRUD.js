import axios from "axios";

const API_AUTH = "http://localhost:3011/auth";

export function GetAuth(param) {
  return axios.post(API_AUTH, param);
}
