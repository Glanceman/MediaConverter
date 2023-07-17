import { createRouter, createWebHistory,createWebHashHistory,Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router:Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
