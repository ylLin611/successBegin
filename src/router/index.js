import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const City = () => import('views/city/City')

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      component: City
    }
  ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
