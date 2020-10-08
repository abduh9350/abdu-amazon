import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-abdu-ee14b.cloudfunctions.net/api",
  //http://localhost:5001/abdu-ee14b/us-central1/api
});

export default instance;
