import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/components/Homepage'
import Collection from '@/components/Collection'
import Product from '@/components/Product'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {title: 'Classy Clothing'}
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
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
