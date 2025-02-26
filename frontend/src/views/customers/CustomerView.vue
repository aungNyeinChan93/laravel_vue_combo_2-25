<script setup>
import CustomerLists from '@/components/customers/CustomerLists.vue';
import { useCustomerStore } from '@/stores/useCustomer';
import { useAuthUserStore } from '@/stores/useAuthUser';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const authUserStore = useAuthUserStore();
const { user, getUser } = storeToRefs(authUserStore)

const customerStore = useCustomerStore();
const { getCustomers } = storeToRefs(customerStore)

onMounted(() => {
    customerStore.fetchCustomer('/api/customers', user.value.loginToken);
})

</script>

<template>
    <section>
        <CustomerLists :customers="getCustomers.value" />
    </section>
</template>
