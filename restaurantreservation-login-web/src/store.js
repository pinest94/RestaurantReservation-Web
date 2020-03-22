import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers:[
      {id:1, email:"doingnow94", name:"김한솔", password:"wn13628747^^"},
      {id:2, email:"wn7877", name:"hansol kim", password:"wn7877"}
    ],
    isLogin: false,
    isLoginError: false,
    userInfo: null
  },
  mutations: { // state의 변화를 일으키는 곳

    // 로그인이 성공했을 때
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },

    // 로그인이 실패했을 때
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },

    // 로그아웃
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }

  },
  actions: { // 비즈니스 로직
      // 로그인 시도
      doLogin({commit}, loginObj) {        
        // 전체 유저에서 해당 이메일로 유저를 찾는다.
        axios.post("https://reqres.in/api/login", loginObj)
        .then(res => {
          
          // 성공 시 토큰을 헤더에 포함시켜서 유저정보 요청
          let config = {
            headers: {
              "accessToken":res.data.token
            }
          }

          axios
          .get("https://reqres.in/api/users/2", config)
          .then(response => {
            let userInfo = {
              id: response.data.data.id,
              first_name: response.data.data.first_name,
              last_name: response.data.data.last_name,
              avatar: response.data.data.avatar
            }

            commit("loginSuccess", userInfo)
            router.push({ name : "home" })
          })
          .catch(error => {
            alert('아이디와 비밀번호를 확인하세요.')
            console.log(error)
          })      
        })
        .catch(err => {       
          alert('아이디와 비밀번호를 확인하세요.')   
          commit("loginError")
          console.log(err)
        })
      },

      // 로그아웃 시도
      doLogout({commit}) {
        commit("logout")
        router.push({ name : "home" })
      },
      getMemberInfo() {
        
      }
  }
})
