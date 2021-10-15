import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import MineRouter from './mine'
import CinemaRouter from './cinema'


Vue.use(VueRouter)

const routes = [
  movieRouter,
  MineRouter,
  CinemaRouter,
  {
    path:'/*',
    redirect:'/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base : 'miaomiao',
  routes
})

export default router
