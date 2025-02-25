<script setup>
import { useFetchStore } from '@/stores/useFetch';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import ProductLists from '@/components/products/ProductLists.vue';

const fetchStore = useFetchStore()
const { getData, countData, fetchingData } = storeToRefs(fetchStore)

onMounted(() => {
    fetchStore.fetchingData('https://fakestoreapi.com/products');
})

</script>

<template>
    <section>
        <ProductLists :products="getData" />
    </section>
</template>
