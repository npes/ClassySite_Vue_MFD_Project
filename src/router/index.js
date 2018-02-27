import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Collection from '@/components/Collection'
import Product from '@/components/Product'
import Contact from '@/components/Contact'
//import Brandslider from '@/components/Brandslider.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    },
  ],
  saveScrollPosition: true,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})
