import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Books from '../views/Books'
import Authors from '../views/Authors'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Authors
    }
  ]
});
