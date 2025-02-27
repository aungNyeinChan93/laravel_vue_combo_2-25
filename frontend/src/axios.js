import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
});

// response error handling
// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.message === 404) {
//       router.push({ name: "login" });
//     }
//     throw error;
//   }
// );

export default axiosClient;
