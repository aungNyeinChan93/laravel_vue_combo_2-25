import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFetchStore = defineStore("useFetch", () => {
  const data = ref([]);

  const getData = computed(() => data.value);

  const countData = computed(() => data.value.length);

  const fetchingData = async (url) => {
    const response = await axios.get(url);
    data.value = await response.data;
  };

  return { getData, countData, fetchingData };
});
