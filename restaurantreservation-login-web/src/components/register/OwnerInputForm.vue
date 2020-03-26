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
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      phone: '',
      name: '',
      password: '',
      email: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    
  }
</script>