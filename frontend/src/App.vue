<script setup>
import { RouterView } from 'vue-router'
import Master from './components/layouts/Master.vue';
</script>

<template>
  <header>

    <div class="wrapper">
      <Master>
        <RouterView />
      </Master>
    </div>
  </header>

</template>
