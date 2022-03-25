import { createRouter, createWebHistory} from "vue-router";
import useAuth from "./composable/useAuth";

import Index from "./pages/index.vue";
import Search from "./pages/search.vue";
import Login from "./pages/login.vue";
import ShoppingCart from "./pages/shoppingcart.vue";
import NotFound from "./pages/404.vue";

const { isAuthenticated } = useAuth();

const routes = [{
    path: "/",
    name: "Index",
    component: Index,
},
{
    path: "/search",
    name: "Search",
    component: Search,
},
{
    path: "/login",
    name: "Login",
    component: Login,
},
{
    path: "/shoppingcart",
    name: "ShoppingCart",
    component: ShoppingCart,
    beforeEnter: (to, from, next) => {
        console.log(isAuthenticated);
        if (!isAuthenticated.value){
            next();
        }
        next();
               
    },
},
{
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;