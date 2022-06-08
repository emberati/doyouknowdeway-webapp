<script>
import MainLayout from './components/layouts/MainLayout'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  computed: {
    layout() {
      const layoutName = this.$route.meta.layout || 'main-layout'
      return layoutName
    }
  },
  
}
</script>

<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<style>
  /* @import url('./assets/css/global.css'); */

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
</style>
