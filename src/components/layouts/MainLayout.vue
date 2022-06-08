<script>
import { useGlobalStore } from '@/store/global'
import { useAuthStore } from '@/store/auth'
import { storeToRefs } from 'pinia'

import ItemCard from "@/components/ItemCard"
import HeaderNav from "@/components/HeaderNav"
import FooterInfo from "@/components/FooterInfo"
import AuthForm from '@/components/AuthForm'

export default {
  name: 'main-layout',
  components: {
    ItemCard,
    HeaderNav,
    FooterInfo,
    AuthForm
  },
  setup() {
    const store = useGlobalStore()
    const auth = useAuthStore()
    // auth.login('evkakiy@gmail.com', 'evkakiy')
    // console.log("creditionals: ", auth.creditionals)

    const {
      getUserLogin,
      getUserRole
    } = storeToRefs(auth)

    const {
      login,
      logout,
      register
    } = auth

    const {
      isAuthDialogVisible,
      isLoading,
      getRentsNotifications
    } = storeToRefs(store)

    const {
      showAuthDialog,
      hideAuthDialog
    } = store

    return {
      store,
      
      login,
      logout,
      register,
      getUserLogin,
      getUserRole,

      isLoading,
      getRentsNotifications,
      isAuthDialogVisible,
      showAuthDialog,
      hideAuthDialog
    }
  },
}
</script>

<template>
  <header>
    <header-nav v-model="store.query"
      :loading="isLoading"
      :login="getUserLogin"
      :rentsNotifications="getRentsNotifications"/>
  </header>
  <div v-if="!isLoading" class="page-body container">
    <fixed-dialog v-if="isAuthDialogVisible" @hide="hideAuthDialog">
      <auth-form @hide="hideAuthDialog"/>
    </fixed-dialog>
    <slot></slot>
  </div>
  <div v-else>
    <h1 style="text-align: center; margin-top: 50px;">Загружаем...</h1>
    <linear-loader/>
  </div>
  <footer>
    <footer-info/>
  </footer>
</template>

<style>
</style>