import Vue from 'vue'
import Router from 'vue-router'
import ComponentA from '@/components/ComponentA'
import ComponentB from '@/components/ComponentB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/A'
    },
    {
      path: '/A',
      name: 'ComponentA',
      component: ComponentA
    }, {
      path: '/B',
      name: 'ComponentB',
      component: ComponentB
    }
  ]
})
