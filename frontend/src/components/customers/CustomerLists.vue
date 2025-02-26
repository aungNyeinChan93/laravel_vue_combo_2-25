<script setup>
import CustomerCard from './CustomerCard.vue';


const props = defineProps({
    customers: { type: Array, required: true }
})
</script>

<template>
    <section>
        <div class="grid grid-cols-1 md:grid-cols-4 mt-4 gap-6">
            <div v-for="customer in customers" :key="customer.id">
                <CustomerCard :customer="customer" />
            </div>
        </div>
    </section>
</template>

<style scoped></style>