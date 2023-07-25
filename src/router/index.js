import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import History from '../views/HistoryView.vue'
import Home_New from '../views/HomeView_New.vue'
import About from '../views/AboutView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/history',
      name: 'history',
      component: History,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: About,
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/homenew',
      name: 'homenew',
      component: Home_New
    },
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})

export default router
