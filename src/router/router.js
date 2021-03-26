import { createWebHistory, createRouter } from "vue-router";
import CoffeeList from "../components/CoffeeList";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: CoffeeList
    },
    {
        path: '/list',
        name: 'List',
        component: CoffeeList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;