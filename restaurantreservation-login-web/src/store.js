import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
      localStorage.removeItem("accessToken") // token 삭제
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }

  },
  actions: { // 비즈니스 로직
    // 로그인 시도
    doLogin({ dispatch }, loginObj) {
      // 전체 유저에서 해당 이메일로 유저를 찾는다.
      axios.post("http://localhost:9000/session", loginObj)
        .then(res => {
          alert(res.status)
          alert(res.data.accessToken)
          // 성공 시 토큰을 헤더에 포함시켜서 유저정보 요청          
          localStorage.setItem("accessToken", res.data.accessToken)
          dispatch("getMemberInfo")
        })
        .catch(err => {
          alert('아이디와 비밀번호를 확인하세요.')
          // commit("loginError")
          console.log(err)
        })
    },

    // 로그아웃 시도
    doLogout({ commit }) {
      commit("logout")
      router.push({ name: "home" })
    },

    // 유저정보 요청
    getMemberInfo({ commit }) {
      let token = localStorage.getItem("accessToken")
      if (token != null) {
        let config = {
          headers: {
            "accessToken": token
          }
        }

        axios
          .get("https://reqres.in/api/users/2", config)
          .then(response => {
            let userInfo = {
              id: response.data.data.id,
              name: response.data.data.name,
            }

            commit("loginSuccess", userInfo)
            router.push({ name: "mypage" })
          })
          .catch(error => {
            alert('아이디와 비밀번호를 확인하세요.')
            console.log(error)
          })
      }
    }
  }
})
