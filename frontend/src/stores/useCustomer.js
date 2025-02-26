import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axiosClient from "@/axios";

export const useCustomerStore = defineStore("useCustomer", () => {
  const customers = ref([]);

  const fetchCustomer = async (url, token) => {
    await axiosClient.get("/sanctum/csrf-cookie"); //csrf token
    const { data } = await axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    customers.value = data.customers;
  };

  const getCustomers = computed(() => customers);

  return { getCustomers, fetchCustomer };
});
