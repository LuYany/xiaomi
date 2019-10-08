import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import classification from '@/components/classification/classification'
import shopcart from '@/components/shopcart/shopcart'
import mine from '@/components/mine/mine'
import detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/classification/classification',
      name: 'classification',
      component: classification
    },
    {
      path: '/shopcart/shopcart',
      name: 'shopcart',
      component: shopcart
    },
    {
      path: '/mine/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/detail/detail',
      name: 'detail',
      component: detail
    }
  ]
})


// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// };