import axios from "axios";

const API_PROVINCE = "http://localhost:3011/provinsi";
const API_CITY = "http://localhost:3011/kota/";
const API_TARIF = "http://localhost:3011/ongkir";

export function GetProvince() {
  return axios.get(API_PROVINCE);
}

export function GetCity(id) {
  return axios.get(API_CITY + id);
}

export function GetTarif(param) {
  return axios.post(API_TARIF, param);
}
