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

const onlyAuthUser = (to, from, next) => {
  if(store.state.isLogin === false) {
    alert("로그인이 필요한 페이지입니다. ")
    next("/login")
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
      path: '/join',
      name: 'join',
      component: () => import(/* webpackChunkName: "Join" */ './views/Join')
    },
    {
      path: '/mypage',
      name: 'mypage',
      beforeEnter: onlyAuthUser,
      component: () => import(/* webpackChunkName: "Mypage" */ './views/Mypage')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import(/* webpackChunkName: "Logout" */ './views/Logout')
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: () => import(/* webpackChunkName: "Restaurants" */ './views/Restaurants')
    },
    {
      path: '/restaurants/:id',
      name: 'restaurantDetail',
      component: () => import(/* webpackChunkName: "Restaurants" */ './views/RestaurantDetail')
    },
    {
      path: '/restaurants/:id/reservation',
      name: 'reservation',
      beforeEnter: onlyAuthUser,
      component: () => import(/* webpackChunkName: "Reservation" */ './views/Reservation')
    },
  ]
})
