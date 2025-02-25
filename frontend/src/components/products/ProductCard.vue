<script setup>
const props = defineProps({
    product: { type: Object, required: true }
})


</script>

<template>
    <li>
        <a href="#" class="group block overflow-hidden">
            <img :src="product.image" alt=""
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />

            <div class="relative bg-white pt-3">
                <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {{ product.title.substring(0, 20) + ' ... ' }}
                </h3>

                <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900"> {{ product.price }} </span>
                </p>
            </div>
        </a>
    </li>
</template>