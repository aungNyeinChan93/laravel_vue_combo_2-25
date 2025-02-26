<script setup>
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuthUserStore } from '@/stores/useAuthUser';
import { storeToRefs } from 'pinia';

const authUserStore = useAuthUserStore();

const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const { errors } = storeToRefs(authUserStore)

const submit = () => {
    authUserStore.userRegister('/api/register', form)
}

</script>

<template>
    <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="lg:col-span-2 lg:py-12">
                    <p class="max-w-xl text-lg">
                        At the same time, the fact that we are wholly owned and totally independent from
                        manufacturer and other group control gives you confidence that we will only recommend what
                        is right for you.
                    </p>

                    <div class="mt-8">
                        <a href="#" class="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>

                        <address class="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                    </div>
                </div>

                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form @submit.prevent="submit" class="space-y-4">
                        <div>
                            <label class="sr-only" for="name">Name</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Name" type="text"
                                v-model="form.name" id="name" />
                            <small v-if="errors" class="text-sm text-red-600">{{ errors?.name }}</small>
                        </div>

                        <div>
                            <label class="sr-only" for="email">Email</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Email address"
                                v-model="form.email" type="email" id="email" />
                            <small v-if="errors" class="text-sm text-red-600">{{ errors?.email }}</small>

                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" for="password">Password</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" v-model="form.password"
                                    placeholder="Enter Password" type="password" id="password" />
                                <small v-if="errors" class="text-sm text-red-600">{{ errors?.password }}</small>

                            </div>

                            <div>
                                <label class="sr-only" for="passwordConfirmation">Confirm Password</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    v-model="form.password_confirmation" placeholder="Confirm Password" type="password"
                                    id="passwordConfirmation" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <button type="submit"
                                class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                                Register
                            </button>
                            <p class="p-2 mt-4">You have already account ? <RouterLink :to="{ name: 'login' }"
                                    class="text-blue-500">Login
                                    Here</RouterLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>