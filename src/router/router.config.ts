import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Main.vue'),
    meta: { title: 'Home', keepAlive: false },
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('../views/Hello.vue'),
    meta: { title: 'Hello', keepAlive: false },
  },
]
