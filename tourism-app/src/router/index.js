import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import VueGridLayout from 'vue-grid-layout';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;