<script>
import ItemCard from "@/components/ItemCard"
import HeaderNav from "@/components/HeaderNav"
import FooterInfo from "@/components/FooterInfo"


export default {
  name: 'App',
  components: {
    ItemCard, HeaderNav, FooterInfo
  },
  methods: {
    onSearch(query) {

    }
  },
  watch: {
    syncedText() {
      console.log(this.syncedText)
    }
  },
  data: () => ({
      loading: false,
      searchText: "",
      syncedText: "",
      primitiveText: "",
  })
}
</script>

<template>
  <header>
    <header-nav v-model="searchText" :loading="loading"/>
  </header>
  <router-view class="page-body"/>
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
