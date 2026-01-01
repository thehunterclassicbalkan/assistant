import { createRouter, createWebHashHistory } from 'vue-router'

const base = import.meta.env.PROD ? '/assistant/' : '/'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // Ako je back/forward dugme → koristi saved position
    if (savedPosition) {
      return savedPosition
    } else {
      // Uvek na vrh kad prelaziš na novu rutu
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/missions',
      name: 'missions',
      component: () => import('../views/Missions.vue'),
    },
    {
      path: '/weapons',
      name: 'weapons',
      component: () => import('../views/Weapons.vue'),
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: () => import('../views/Equipment.vue'),
    },
    // {
    //   path: 'overview',
    //   name: 'overview',
    //   component: () => import('../views/Overview.vue'),
    // },
    // {
    //   path: 'guides',
    //   name: 'guides',
    //   component: () => import('../views/Guides.vue'),
    // },
    {
      path: '/data',
      name: 'data',
      component: () => import('../views/Information.vue'),
    },
  ],
})

export default router
