import { createRouter, createWebHistory } from 'vue-router'
import progress from '@bassist/progress'
import routes from './routes'
import { APP_NAME } from '@/constants'

progress.configure({ showSpinner: false })
progress.setColor('#596fda')

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_DEPLOY_BASE_URL),
  // history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition ? savedPosition : { top: 0, left: 0 }
  },
})
router.beforeEach((to, from, next) => {
  progress.start()
  next()
  // const token = sessionStorage.getItem('TOKEN')
  // if (to.path === '/login') {
  //   next()
  // } else if (to.path === '/404' || to.path === '/403') {
  //   if (!token) next('/login')
  //   else next()
  // } else {
  //   if (!token) next('/login')
  //   const requiredRole: string[] = to.meta.requiredRole as string[]
  //   const { role, auth } = JSON.parse(
  //     sessionStorage.getItem('USERINFO') as string
  //   )
  //   // const homePath = auth === 'root' ? ROLE_HOME_MAP[auth] : ROLE_HOME_MAP[role]
  //   if (token && !requiredRole.includes(role) && !requiredRole.includes(auth)) {
  //     // ElMessage.error('权限不足')
  //     next('/403')
  //   } else next()
  //   // const token = sessionStorage.getItem('TOKEN')
  //   // token ? next() : next('/login')
  // }
})

router.afterEach((to) => {
  const { title } = to.meta
  document.title = title ? `${title} - ${APP_NAME}` : APP_NAME
  progress.done()
})

export default router
