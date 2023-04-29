import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import singleCar from '../views/singlecar.vue'
import rentView from '../views/rentView.vue'
import allCarsView from '../views/allCarsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/cars/:data",
    name:"singleCar",
    component:singleCar,
    props: true,
  },
  {
    path:"/rent",
    name:"rentView",
    component:rentView,
    props:true,
  },
  {
    path:"/all",
    name:"allCarsView",
    component:allCarsView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
