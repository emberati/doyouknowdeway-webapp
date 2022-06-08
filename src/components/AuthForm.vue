<script>
import { useAuthStore } from '@/store/auth'
export default {
  name: 'auth-form',
  emits: ['hide'],
  data: () => ({
    auth: useAuthStore(),
    lastOption: String,
    currentOption: String,
    loginData: {
      email: '',
      password: '',
    },
    registerData: {
      firstname: '',
      secondname: '',
      lastname: '',
      login: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  }),
  methods: {
    onSubmit() {
      if (this.currentOption == 'Войти') {
        this.submitLogin()
      } else if (this.currentOption == 'Зарегистрироваться') {
        this.submitRegister()
      }
    },
    hideDialog() {
      this.$emit('hide')
    },
    onSwitch(option) {
      this.currentOption = option
      if (this.currentOption != this.lastOption) {
        this.lastOption = this.currentOption
      } else if (this.currentOption == 'Войти') {
        this.submitLogin()
      } else if (this.currentOption == 'Зарегистрироваться') {
        this.submitRegister()
      }
    },
    submitLogin() {
      this.auth.login(this.loginData).then(() => {this.hideDialog()})
    },
    submitRegister() {
      this.auth.register({
        first_name: this.registerData.firstname,
        second_name: this.registerData.secondname,
        last_name: this.registerData.lastname,
        login: this.registerData.login,
        email: this.registerData.email,
        password: this.registerData.password
      }).then(() => this.hideDialog())
    }
  }
}
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    action=""
    method="POST"
    id="auth-form"
    class="auth-form">
      <div v-if="currentOption == 'Войти'" class="form-inputs">
        <form-input
          :id="'email-input'"
          :label="'Электронная почта'"
          :autocomplete="'username'"
          @submit="onSubmit"
          v-model="loginData.email"/>
        <form-input
          :id="'password-input'"
          :label="'Пароль'"
          :type="'password'"
          :autocomplete="'current-password'"
          @submit="onSubmit"
          v-model="loginData.password"/>
      </div>
      <div v-else class="form-inputs">
        <form-input
          :id="'firstname-input'"
          :label="'Имя'"
          @submit="onSubmit"
          v-model="registerData.firstname"/>
        <form-input
          :id="'lastname-input'"
          :label="'Фамилия'"
          @submit="onSubmit"
          v-model="registerData.lastname"/>
        <form-input
          :id="'secondname-input'"
          :label="'Отчество'"
          @submit="onSubmit"
          v-model="registerData.secondname"/>
        <form-input
          :id="'login-input'"
          :label="'Логин'"
          :autocomplete="'username'"
          @submit="onSubmit"
          v-model="registerData.login"/>
        <form-input
          :id="'email-input'"
          :label="'Электронная почта'"
          :autocomplete="'username'"
          @submit="onSubmit"
          v-model="registerData.email"/>
        <form-input
          :id="'password-input'"
          :label="'Пароль'"
          :type="'password'"
          :name="'password'"
          :autocomplete="'new-password'"
          @submit="onSubmit"
          v-model="registerData.password"/>
        <form-input
          :id="'repeat-password-input'"
          :label="'Повторите пароль'"
          :type="'password'"
          :name="'password'"
          :autocomplete="'new-password'"
          @submit="onSubmit"
          v-model="registerData.repeatPassword"/>
    </div>
    <button-switcher
      :options="['Войти', 'Зарегистрироваться']"
      v-model="currentOption"
      @switch="onSwitch"
      />
    <div class="skip-wrapper">
      <span class="skip" @click="hideDialog">Продолжить в демо-режиме</span>
    </div>
  </form>
</template>

<style scoped>
  #auth-form {
    box-sizing: border-box;
    padding: 90px;
    padding-bottom: 50px;
  }

  .skip-wrapper {
    display: flex;
  }
  span.skip {
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 3px;

    cursor: pointer;
    user-select: none;

    border-bottom: 1px solid var(--color-main-font);
  }
</style>

<style>
  #auth-form label {
    font-size: 24px;
    font-weight: 700;
  }

  #auth-form input {
    font-size: 16px;
    margin-bottom: 20px;
  }

  #auth-form .button-switcher {
    margin-top: 20px;
    margin-bottom: 50px;
  }
</style>

