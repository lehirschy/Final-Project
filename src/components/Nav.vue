<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";
const {isAuthenticated, logout} = useAuth();
const router = useRouter();

const loggingOut = () => {
    logout();
    router.push("/");
};
</script>
<template>
    <div class="text-blue-200 bg-blue-800">
        <div class="container flex items-center justify-between mx-auto " >
            <h1 class="text-3xl font-thin tracking-tighter">Final<span class="font-normal">Project</span></h1>
            <nav>
                <ul class="flex w-full space-x-4">
                    <router-link to="/">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">
                            Home 
                        </li>
                    </router-link>
                    <router-link to="/search">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">
                            Search
                        </li>
                    </router-link>
                    <router-link v-if="!isAuthenticated" to="/login">
                        <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">
                            Login
                        </li>
                    </router-link>
                    <div v-else class="flex">
                        <router-link to="/shoppingcart">
                            <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">
                                Shopping Cart
                            </li>
                        </router-link>
                        <button  @click="loggingOut">
                            <li class="px-4 py-8 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-800">
                                Logout
                            </li>
                        </button>
                    </div>
                </ul>
            </nav>
        </div>
    </div>
</template>