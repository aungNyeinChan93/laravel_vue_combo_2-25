<script setup>


const props = defineProps({
    customer: { type: Object }
})
</script>

<template>

    <article class="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <img alt="" :src="customer?.image" class="absolute inset-0 h-full w-full object-cover" />

        <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
                <time datetime="2022-10-10" class="block text-xs text-white/90"> 10th Oct 2022 </time>

                <a href="#">
                    <h3 class="mt-0.5 text-lg text-white">{{ customer?.name }}</h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    {{ customer?.type }}
                </p>
            </div>
        </div>
    </article>
</template>