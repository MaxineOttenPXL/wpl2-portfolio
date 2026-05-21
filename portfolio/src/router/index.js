import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/Pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: () => import('@/Pages/Skills.vue'),
    },
    {
      path: '/Realisaties',
      name: 'Realisaties',
      component: () => import('@/Pages/Realisaties.vue'),
    },
    {
      path: '/Stage',
      name: 'Stage',
      component: () => import('@/Pages/Stage.vue'),
    },
  ],
})

export default router
