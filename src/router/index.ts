import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './router.config'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.title)
    document.title = to.meta.title

  next()
})

export default router
