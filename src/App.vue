<script>
import ItemCard from "@/components/ItemCard"
import HeaderNav from "@/components/HeaderNav"
import FooterInfo from "@/components/FooterInfo"

import {useGlobalStore} from '@/store/global'

export default {
  name: 'App',
  components: {
    ItemCard, HeaderNav, FooterInfo
  },
  methods: {
    onSearch(query) {

    },
    async load() {

    }
  },
  watch: {
    syncedText() {
      console.log(this.syncedText)
    }
  },
  data: () => ({
    store: null,
    loading: false,
    searchText: "",
    syncedText: "",
    primitiveText: "",
    items: []
  }),
  setup() {
    console.log('setup')
  },
  mounted() {
    this.store = useGlobalStore()
    this.store.fetchItems()
    this.items = this.store.getItems
    console.log(this.items)
  }
}
</script>

<template>
  <header>
    <header-nav v-model="searchText" :loading="store.loading"/>
  </header>

  <router-view v-if="store && items && !store.loading" class="page-body" :items="items"/>
  <div v-else class="">
    <h1 style="text-align: center; margin-top: 50px;">Загружаем...</h1>
    <linear-loader/>
  </div>
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

  .test {
    width: 300px;
    margin-top: 20px;
    text-align: center;
    font-weight: 500;
  }
  /* @import url('./assets/css/reset.css'); */
</style>
