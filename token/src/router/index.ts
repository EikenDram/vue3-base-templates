import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/default/LayoutIndex.vue';
import HomeView from '../views/HomeView.vue'

import { useAuthStore } from '@/stores/auth';

import accountRoutes from './account';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', redirect: 'home' },
        { path: 'home', component: HomeView, meta: { title: 'Home' }, },
      ]
    },
    
    { ...accountRoutes },
    
    // catch all redirect to 404 page
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page 
  const publicPages = ['/account/login'];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.accessToken) {
      authStore.returnUrl = to.fullPath;
      return '/account/login';
  }
});

export default router
