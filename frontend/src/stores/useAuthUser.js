import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useAuthUserStore = defineStore(
  "useAuthUser",
  () => {
    const user = reactive({
      name: "default name",
      email: "default email",
      registerToken: "",
      loginToken: "",
      image: "",
    });

    const getUser = computed(() => user);

    return { user, getUser };
  },
  { persist: true }
);
