<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <section>

        <nav>
            <RouterLink to="/"> Home </RouterLink>
            <RouterLink to="/about"> About </RouterLink>
            <RouterLink :to="{ name: 'login' }"> Login </RouterLink>
        </nav>

        <main>
            <RouterView />
        </main>
    </section>
</template>