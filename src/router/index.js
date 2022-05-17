import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import SongsIndex from '../views/SongsIndex.vue'
import SavedSongs from '../views/SavedSongs.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import LogOut from "../views/LogOut.vue"
import HomeTwo from "../views/HomeTwo.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/songs',
    name: 'songs',
    component: SongsIndex
  },
  {
    path: '/saved',
    name: 'saved',
    component: SavedSongs
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/home',
    name: 'home-two',
    component: HomeTwo
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogOut
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
