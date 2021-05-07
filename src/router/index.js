import Vue from 'vue'
import VueRouter from 'vue-router'
import ContadorS from '../views/contador.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Contador Simple',
    component: ContadorS
  },
  {
    path: '/contador-modificable',
    name: 'Contadot Modificable',
    component: () => import(/* webpackChunkName: "contador modificable" */ '../views/contadorMod.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
