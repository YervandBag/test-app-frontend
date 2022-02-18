import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      isPrivate: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token');
  const isPrivate = to?.meta?.isPrivate;

  if (isPrivate && to.name !== 'Login' && !isAuthenticated) {
    return next({ name: 'Login' })
  }

  if (isAuthenticated && ['Login', 'Registration'].includes(to.name)) {
    return next({ name: 'Users' })
  }

  next()
})

export default router
