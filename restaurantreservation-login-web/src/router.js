import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin === true) {
    alert("이미 로그인을 하였습니다.")
    next("/")
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: rejectAuthUser, // beforeEnter : 라우터를 실행하기 전 호출시키고 싶은 메소드를 등록
      component: () => import(/* webpackChunkName: "Login" */ './views/Login')
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import(/* webpackChunkName: "Mypage" */ './views/Mypage')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import(/* webpackChunkName: "Logout" */ './views/Logout')
    }
  ]
})
