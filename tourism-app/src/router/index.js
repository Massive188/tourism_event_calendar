import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

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