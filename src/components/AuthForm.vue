<script>
export default {
  name: 'auth-form',
  emits: ['hide'],
  data: () => ({
    email: '',
    password: '',
    lastOption: String,
    currentOption: String,
    loginData: {
      email: '',
      password: '',
    },
    registerData: {
      firstname: '',
      lastname: '',
      login: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  }),
  methods: {
    onSubmit() {
      console.log('This form can not be submitted!')
    },
    hideDialog() {
      this.$emit('hide')
      console.log('hide')
    },
    onSwitch(option) {
      this.currentOption = option
      if (this.currentOption != this.lastOption) {
        this.lastOption = this.currentOption
      } else {
        console.log(this.currentOption)
      }
      
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
          v-model="loginData.email"/>
        <form-input
          :id="'password-input'"
          :label="'Пароль'"
          :type="'password'"
          v-model="loginData.password"/>
      </div>
      <div v-else class="form-inputs">
        <form-input
          :id="'firstname-input'"
          :label="'Имя'"
          v-model="registerData.firstname"/>
        <form-input
          :id="'lastname-input'"
          :label="'Фамилия'"
          v-model="registerData.lastname"/>
        <form-input
          :id="'login-input'"
          :label="'Логин'"
          v-model="registerData.login"/>
        <form-input
          :id="'email-input'"
          :label="'Электронная почта'"
          v-model="registerData.email"/>
        <form-input
          :id="'password-input'"
          :label="'Пароль'"
          :type="'password'"
          v-model="registerData.password"/>
        <form-input
          :id="'repeat-password-input'"
          :label="'Повторите пароль'"
          :type="'password'"
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

