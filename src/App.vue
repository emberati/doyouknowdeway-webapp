<script>
import ItemCard from "@/components/ItemCard"
import HeaderNav from "@/components/HeaderNav"
import FooterInfo from "@/components/FooterInfo"

import { useGlobalStore } from '@/store/global'
import { storeToRefs } from 'pinia'
import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    ItemCard, HeaderNav, FooterInfo
  },
  methods: {
    async onSearch(query) {
      this.store.query = query
      // global.setLoading(true)
      // this.items = await searchItems(store.items, global.query)
      // global.setLoading(false)
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
    // store: null
    searchText: "",
    syncedText: "",
    primitiveText: "",
  }),
  setup() {
    console.log('setup')
    const store = useGlobalStore()

    const {
      fetchItems,
      setLoading
    } = store

    const {
      isLoading,
      getItems
    } = storeToRefs(store)

    return {
      store,
      fetchItems,
      isLoading,
      setLoading,
      getItems
    }
  },
  async mounted() {
    await this.fetchItems()
  }
}
</script>

<template>
  <header>
    <header-nav :modelValue="store.query" @update:modelValue="onSearch" :loading="isLoading"/>
  </header>
  <router-view v-if="!isLoading" class="page-body" :items="store.getItems"/>
  <div v-else>
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

  .test {
    width: 300px;
    margin-top: 20px;
    text-align: center;
    font-weight: 500;
  }
  /* @import url('./assets/css/reset.css'); */
</style>
