// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import HousingDetails from '../views/HousingDetails.vue'
import BookingForm from '@/components/BookingForm.vue'



const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path:'/accomodation',
    name : 'Accomodation',
    component : BookingForm
  },
  {
    path: '/housing/:id',
    name: 'HousingDetails',
    component: HousingDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
