import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Landing'
import ReportOne from '@/components/ReportOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Hello
    },
    {
      path: '/reportone',
      name: 'ReportOne',
      component: ReportOne
    }
  ]
})