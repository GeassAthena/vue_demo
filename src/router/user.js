/**
 * Created by 17637 on 2019/6/14.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
