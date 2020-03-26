<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-text-field
            v-model="name"
            label="이름"
            outlined
            dense
            :rules="nameRules"
          ></v-text-field>
        </v-col>     
        <v-col cols="12" sm="12" md="12">
          <v-text-field
            v-model="email"
            label="이메일"
            outlined
            dense
            :rules="emailRules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            type="password"
            v-model="password"
            label="비밀번호"
            outlined
            dense            
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            type="password"
            v-model="password2"
            label="비밀번호 확인"
            outlined
            dense            
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-text-field
            v-model="phone"
            label="전화번호"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-btn          
            color="success"
            class="mr-6 submit-btn"                          
            x-large
            @click="doRegister({email, password, name, phone})"
            >
            가입완료
        </v-btn>
      </v-row>      
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios"
import router from "../../router"

  export default {
    data: () => ({      
      valid: true,
      phone: '',
      name: '',
      password: '',
      password2: '',
      nameRules: [
        v => !!v || '이름을 입력하세요',
        v => v.length <= 10 || '10자 이하로 입력해주세요',
      ],
      email: '',
      emailRules: [
        v => !!v || '이메일을 입력하세요',
        v => /.+@.+/.test(v) || '이메일 형식으로 입력해주세요',
      ],
      passwordRules: [
        v => !!v || '비밀번호를 입력하세요',
        v => "^(?=.*[A-Za-z])(?=.*)(?=.*[$@$!%*#?&])[A-Za-z$@$!%*#?&]{8,}$".test(v) || '최소 8자 이상, 최소 하나 이상의 문자와 숫자 및 특수문자를 입력하세요',
      ],
      // passwordCheck: [
      //   v => !!v || '비밀번호를 확인해주세요',
      //   v => this.password === v || '비밀번호가 일치하지 않습니다',
      // ],
      
    }),
    methods: {
        // 회원가입 시도
        doRegister: function(registerInfo) {
                    
          axios.post("http://localhost:9000/users", registerInfo)
            .then(res => {
              alert(res.status)
              alert("회원가입이 정상적으로 완료되었습니다.")
              router.push({ name: "home" })
            })
            .catch(err => {
              alert('서버 오류')
              // commit("loginError")
              console.log(err)
            })
        },
      }
  }
</script>

<style>
.submit-btn {
        margin-left: 70%;        
    }
</style>