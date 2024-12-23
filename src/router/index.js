import { createRouter, createWebHistory } from 'vue-router'
import HomaPage from '../views/HomaPage.vue'
import RouterTest from '../views/RouterTestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomaPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/MemberCenter',
      name: 'MemberCenter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MemberCenter.vue'),
    },
    {
      path: '/PayMent',
      name: 'PayMent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PayMent.vue'),
    },
    {
      path: '/CartDone',
      name: 'CartDone',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CartDone.vue'),
    },
    {
      path: '/activityabc',
      name: 'activityabc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ActivityDone.vue'),
    },
    {
      path: '/NoticeDone',
      name: 'NoticeDone',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NoticeDone.vue'),
    },
    {
      path: '/RegisterDone',
      name: 'RegisterDone',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterDone.vue'),
    },
    {
      path: '/routerTest',
      name: 'routerTest',
      component: RouterTest,
    }
  ],
})

export default router