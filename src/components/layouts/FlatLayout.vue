<script>
import { useGlobalStore } from '@/store/global';

export default {
  name: 'flat-layout',
  data: () => ({
    global: useGlobalStore()
  })
}
</script>

<template>
  <div v-if="!global.isLoading" class="page-body container">
    <slot></slot>
  </div>
  <div v-else>
    <h1 style="text-align: center; margin-top: 50px;">Загружаем...</h1>
    <linear-loader/>
  </div>
</template>

<style scoped>
</style>