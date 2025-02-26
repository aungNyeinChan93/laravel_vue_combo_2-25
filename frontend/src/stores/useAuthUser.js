import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import axiosClient from "@/axios";
import { useRouter } from "vue-router";

export const useAuthUserStore = defineStore(
  "useAuthUser",
  () => {
    const router = useRouter();

    const user = reactive({
      name: "",
      email: "",
      registerToken: "", //for login
      loginToken: "", // for other purpose
      image: "",
    });

    const getUser = computed(() => user);

    const fetchUserInfo = async () => {
      await axiosClient.get("/sanctum/csrf-cookie");
      const { data } = await axiosClient.get("/api/user", {
        headers: {
          Authorization: `Bearer ${getUser.value.loginToken}`,
          "Content-Type": "application/json",
        },
      });
      getUser.value.name = data.name;
      getUser.value.email = data.email;
    };

    const userRegister = async (url, data) => {
      await axiosClient.get("/sanctum/csrf-cookie"); // csrf token
      const { data: user } = await axiosClient.post(url, data);
      getUser.value.registerToken = user.data.registerToken;
      getUser.value.name = user.data.name;
      getUser.value.email = user.data.email;
      router.push({ name: "login" });
    };

    const userLogin = async (url, data, token) => {
      await axiosClient.get("/sanctum/csrf-cookie"); //csrf token
      const { data: user } = await axiosClient.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      getUser.value.loginToken = user.data.loginToken;
      getUser.value.name = user.data.name;
      getUser.value.email = user.data.email;
      router.push({ name: "home" });
    };

    const userLogout = async (url) => {
      await axiosClient.get("/sanctum/csrf-cookie");
      await axiosClient.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${getUser.value.loginToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      getUser.value.loginToken = "";
      window.location.reload();
    };

    return {
      user,
      getUser,
      fetchUserInfo,
      userRegister,
      userLogin,
      userLogout,
    };
  },
  { persist: true }
);
