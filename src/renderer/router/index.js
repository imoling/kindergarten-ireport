import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import ThirdPage from '@/components/ThirdPage'
import FourthPage from '@/components/FourthPage'
import FifthPage from '@/components/FifthPage'
import SixthPage from '@/components/SixthPage'
import DraggleTest from '@/components/DraggleTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start-page',
      component: require('@/components/StartPage').default
    },
    {
      path: '/first',
      name: 'first-page',
      component: FirstPage
    },
    {
      path: '/second',
      name: 'second-page',
      component: SecondPage
    },
    {
      path: '/third',
      name: 'third-page',
      component: ThirdPage
    },
    {
      path: '/fourth',
      name: 'fourth-page',
      component: FourthPage
    },
    {
      path: '/fifth',
      name: 'fifth-page',
      component: FifthPage
    },
    {
      path: '/sixth',
      name: 'sixth-page',
      component: SixthPage
    },
    {
      path: '/draggle',
      name: 'draggle-page',
      component: DraggleTest
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
