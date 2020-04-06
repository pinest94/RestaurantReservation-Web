<template>
    <v-container fill-height style="max-width:450px">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert 
                    class="mb-3"
                    type="error"
                    :value="isLoginError"
                >
                    이메일 또는 비밀번호를 확인해주세요
                </v-alert>
                <v-alert 
                    class="mb-3"
                    type="success"
                    :value="isLogin"
                >
                    로그인이 완료되었습니다
                </v-alert>
                <v-card>
                    <v-toolbar
                    flat
                    dark                    
                    color="#FFAB40"
                    >                    
                    <v-toolbar-title>로그인</v-toolbar-title>
                </v-toolbar>
                <div class="pa-3">
                    <v-text-field
                    v-model="email"
                    label="이메일"                    
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    type="password"
                    label="비밀번호"                    
                ></v-text-field>
                <v-btn
                large
                block
                depressed
                dark
                color="#FFAB40"
                @click="doLogin({email, password})"
                >로그인</v-btn>
                </div>
                </v-card>                
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
    data() {
        return {
            email: null,
            password: null,            
        }
    },
    computed: {
        ...mapState(["isLogin", "isLoginError"])
    },
    methods: {
        ...mapActions(["doLogin"]),
    }
}
</script>