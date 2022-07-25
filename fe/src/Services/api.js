import axios from "axios";

const instance = axios.create({
  baseURL: "https://offbg.com:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;