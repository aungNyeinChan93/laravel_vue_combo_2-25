<script setup>
import { reactive, ref } from 'vue';
import axiosClient from '@/axios'
import router from '@/router';
import { useAuthUserStore } from '@/stores/useAuthUser';

const authUserStore = useAuthUserStore();
const form = reactive({
    email: '',
    password: ''
});


const login = async () => {
    await axiosClient.get('/sanctum/csrf-cookie'); //csrf token
    const { data: user } = await axiosClient.post('api/login', form);
    authUserStore.user.token = user.data.loginToken;
    router.push({ name: 'home' });
}

</script>

<template>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-[100px]">
        <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

            <p class="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                ipsa culpa autem, at itaque nostrum!
            </p>
        </div>

        <form @submit.prevent="login" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
                <label for="email" class="sr-only">Email</label>

                <div class="relative">
                    <input type="email" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                        v-model="form.email" placeholder="Enter email" />
                </div>
            </div>

            <div>
                <label for="password" class="sr-only">Password</label>
                <div class="relative">
                    <input type="password" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                        v-model="form.password" placeholder="Enter password" />
                </div>
            </div>

            <div class="flex items-center justify-between">
                <p class="text-sm text-gray-500">
                    No account?
                    <RouterLink class="underline" :to="{ name: 'register' }">Sign up</RouterLink>
                </p>

                <button type="submit"
                    class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>