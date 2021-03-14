import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('./pages/home.vue'),
  },
  {
    name: 'settings',
    path: '/settings',
    component: () => import('./pages/settings.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('./pages/login.vue'),
  },
  {
    name: 'signup',
    path: '/signup',
    component: () => import('./pages/signup.vue'),
  },
  {
    name: 'error',
    path: '/:pathMatch(.*)*',
    component: () => import('./pages/error.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
