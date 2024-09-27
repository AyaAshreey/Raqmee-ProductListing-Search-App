import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router'; // Import your router
import products from './products';


//swiper congig
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

createApp(App).use(router).use(products).mount('#app');
