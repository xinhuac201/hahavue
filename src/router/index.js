import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import SuperWeekend from '../views/SuperWeekend'
import LongTrip from '../views/LongTrip'
import ShortTrip from '../views/ShortTrip'
import InternationalTravel from '../views/InternationalTravel'
import AboutUs from '../views/AboutUs'
import Itinerary from '../views/Itinerary'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/long-trip',
    name: 'LongTrip',
    component: LongTrip
  },
  {
    path: '/short-trip',
    name: 'ShortTrip',
    component: ShortTrip
  },
  {
    path: '/super-weekend',
    name: 'SuperWeekend',
    component: SuperWeekend
  },
  {
    path: '/international-travel',
    name: 'InternationalTravel',
    component: InternationalTravel
  },
  {
    path: '/itinerary/detail/:pk',
    name: 'Itinerary',
    component: Itinerary
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
