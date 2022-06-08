<script>
import { useGlobalStore } from '@/store/global'
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

    const {
      getUserLogin,
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

      getUserLogin,

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
  <transition name="login-dialog">
    <fixed-dialog v-if="isAuthDialogVisible" @hide="hideAuthDialog">
      <auth-form @hide="hideAuthDialog"/>
    </fixed-dialog>
  </transition>
  <div v-if="!isLoading" class="page-body container">
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

<style scoped>
.login-dialog-enter-active,
.login-dialog-leave-active {
  transition: .5s ease;
}

.login-dialog-enter-from,
.login-dialog-leave-to {
  opacity: 0;
}
</style>