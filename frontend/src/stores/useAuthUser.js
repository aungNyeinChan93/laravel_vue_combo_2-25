import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
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

    const errors = ref({});

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
      try {
        await axiosClient.get("/sanctum/csrf-cookie"); // csrf token
        const { data: user } = await axiosClient.post(url, data);
        getUser.value.registerToken = user.data.registerToken;
        getUser.value.name = user.data.name;
        getUser.value.email = user.data.email;
        router.push({ name: "login" });
      } catch (error) {
        console.log(error);
        if (error.status === 422 || error) {
          errors.value = error.response.data.errors;
        }
      }
    };

    const userLogin = async (url, data, token) => {
      try {
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
      } catch (error) {
        console.log(error);
        if (error.status === 422) {
          errors.value = error.response.data.errors;
        } else if (error.status === 403) {
          errors.value = error.response.data;
        }
      }
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
      errors,
      fetchUserInfo,
      userRegister,
      userLogin,
      userLogout,
    };
  },
  { persist: true }
);
