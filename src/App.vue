<script>
import ItemCard from "@/components/ItemCard"
import HeaderNav from "@/components/HeaderNav"
import FooterInfo from "@/components/FooterInfo"

import { useGlobalStore } from '@/store/global'
import { storeToRefs } from 'pinia'

export default {
  name: 'App',
  components: {
    ItemCard, HeaderNav, FooterInfo
  },
  methods: {

  },
  watch: {
  },
  data: () => ({
    syncedText: "",
    primitiveText: "",
  }),
  setup() {
    const store = useGlobalStore()

    const {
      isLoading,
      getRentsNotifications
    } = storeToRefs(store)

    return {
      store,
      isLoading,
      getRentsNotifications
    }
  },
  mounted() {

  }
}
</script>

<template>
  <header>
    <header-nav v-model="store.query" :loading="isLoading" :rentsNotifications="getRentsNotifications"/>
  </header>

  <router-view v-slot="{ Component }">
    <!-- Забагованая дичь, но пусть пока будет -->
    <suspense timeout="0">
      <template #default>
        <component class="page-body" :is="Component"/>
      </template>
      <template #fallback>
        <div>
          <h1 style="text-align: center; margin-top: 50px;">Загружаем...</h1>
          <linear-loader/>
        </div>
      </template>
    </suspense>
  </router-view>
  <footer>
    <footer-info/>
  </footer>
</template>

<style>
  #app {
    height: 100%;
    display: grid;
    grid-template-rows: 65px auto 300px;
  }

  html {
    min-height: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .header-bar {
    width: 100%;
    position: fixed;
    z-index: 10;
  }

  body {
    height: 100%;
    background-color: var(--color-main-background);
  }

  .for-test {
    margin-top: 20px;
  }
  /* @import url('./assets/css/reset.css'); */
</style>
