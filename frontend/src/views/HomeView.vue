<script setup>
import { useAuthUserStore } from '@/stores/useAuthUser';

const authUserStore = useAuthUserStore();

</script>

<template>
  <main>
    <h1>Home</h1>
    <pre>{{ authUserStore }}</pre>
  </main>
</template>
