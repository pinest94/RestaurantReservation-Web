<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item router :to="{name: 'home'}" exact>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{name: 'restaurants'}" exact>
          <v-list-item-action>
            <v-icon>restaurant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>음식점 목록</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isLogin === false" router :to="{name: 'login'}" exact>
          <v-list-item-action>
            <v-icon>lock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>로그인</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isLogin === true" router :to="{name: 'mypage'}" exact>
          <v-list-item-action>
            <v-icon>info</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>마이페이지</v-list-item-title>
          </v-list-item-content>
        </v-list-item>      
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>기다림 없이</v-toolbar-title>
      <v-spacer></v-spacer>        
        <v-menu offset-y v-if="isLogin">
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"          
          icon
        >
        <v-icon>more_vert</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item router :to="{name: 'mypage'}">          
          <v-list-item-title>
            마이페이지
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="$store.dispatch('doLogout')">          
          <v-list-item-title>
            로그아웃
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        <v-btn text v-if="!isLogin" router :to="{name: 'login'}">로그인</v-btn>
        <v-btn text v-if="!isLogin" router :to="{name: 'join'}">회원가입</v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex"
  export default {
    props: {
      source: String,
    },
    computed: {
      ...mapState(["isLogin"])
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>