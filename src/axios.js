import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/abdu-ee14b/us-central1/api",
});

export default instance;
