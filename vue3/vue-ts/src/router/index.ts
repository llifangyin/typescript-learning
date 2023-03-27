import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'props',
      component: () => import('../views/typescriptVue/props.vue')
    },
    // {
      
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/emit',
      name: 'emit',
      component: () => import('../views/typescriptVue/emit.vue')
    },
    {
      path: '/refOrReactive',
      name: 'refOrReactive',
      component: () => import('../views/typescriptVue/refOrReactive.vue')
    },
    {
      path: '/provide',
      name: 'provide',
      component: () => import('../views/typescriptVue/provide.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/typescriptVue/template.vue')
    },
    {
      path: '/basicType',
      name: 'basicType',
      component: () => import('../views/ts/basicType.vue')
    },
    {
      path: '/variableDeclaration',
      name: 'variableDeclaration',
      component: () => import('../views/ts/variableDeclaration.vue')
    },
    {
      path: '/interfaces',
      name: 'interfaces',
      component: () => import('../views/ts/interfaces.vue')
    },
    {
      path: '/function',
      name: 'function',
      component: () => import('../views/ts/function.vue')
    },
    {
      path: '/generic',
      name: 'generic',
      component: () => import('../views/ts/generic.vue')
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('../views/ts/class.vue')
    },
    {
      path: '/enum',
      name: 'enum',
      component: () => import('../views/ts/enum.vue')
    },
    {
      path: '/typeInterference',
      name: 'typeInterference',
      component: () => import('../views/ts/typeInterference.vue')
    },
    {
      path: '/typeCompatibility',
      name: 'typeCompatibility',
      component: () => import('../views/ts/typeCompatibility.vue')
    },
    {
      path: '/advancedTypes',
      name: 'advancedTypes',
      component: () => import('../views/ts/advancedTypes.vue')
    },
  ]
})

export default router
