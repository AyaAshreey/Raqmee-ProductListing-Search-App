import { createRouter, createWebHistory } from 'vue-router';
import ProductsPage from '@/components/ProductsPage.vue';


// Define your routes
const routes = [
    {
        path: '/',
        name: 'ProductsPage',
        component: ProductsPage
    },


];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),  // This uses HTML5 history mode
    routes
});

export default router;
