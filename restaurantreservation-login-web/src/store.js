import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers:[
      {id:1, userId:"doingnow94", name:"김한솔", userPassword:"wn13628747^^"},
      {id:2, userId:"wn7877", name:"hansol kim", userPassword:"wn7877"}
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
    }

  },
  actions: { // 비즈니스 로직
      // 로그인 시도
      doLogin({state, commit}, loginObj) {        
        // 전체 유저에서 해당 이메일로 유저를 찾는다.
        let selectedUser = null
        state.allUsers.forEach(user=> {
            if(user.userId === loginObj.userId && user.userPassword === loginObj.userPassword)
                selectedUser = user
        })
        if(selectedUser === null) { // 로그인 성공시
          commit('loginError')          
        } else { // 로그인 실패시
          commit('loginSuccess', selectedUser)
          router.push({name: "mypage"})
        }
        // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
        console.log(state.userId, state.userPassword);
      }
  }
})
