<script>
import ItemCard from "@/components/ItemCard"
import HeaderNav from "@/components/HeaderNav"
import FooterInfo from "@/components/FooterInfo"
/* FOR DEV ONLY START */
import image from '@/assets/img/rollers.png'
/* FOR DEV ONLY END */

export default {
  name: 'App',
  components: {
    ItemCard, HeaderNav, FooterInfo
  },
  methods: {
    onSearch(query) {

    },
    async load() {
      this.loading = true
      let promise = await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      }).then(() => {this.loaded = this.items})
      this.loading = false
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
      loaded: [],
      items: [
        {
          age_id: 'старше 15-ти',
          sex_id: 'унисекс', // сделать геттеры отображаемых значений по id
          season_id: 'весна-лето',
          size: '43 (EUR)',
          cost_per_hour: 199,
          description: `
          Всё ускоряющаяся эволюция компьютерных технологий предъявила жёсткие требования к производителям как собственно вычислительной техники, так и периферийных устройств.`,
          name: "Коньки роликовые",
          
          imageUrl: image
        },
        {
          age_id: 1,
          cost_per_hour: 299,
          description: `
          Официально заявляю читающим: даёшь подъем операции Ы! Хуже с ёлкой бог экспериментирует. Пиши: зять съел яйцо, ещё чан брюквы… эх! Ждем фигу!`,
          name: "Коньки роликовые",
          season_id: 0,
          imageUrl: image
        },
      ],
  }),
  mounted() {
    this.load()
  }
}
</script>

<template>
  <header>
    <header-nav v-model="searchText" :loading="loading"/>
  </header>

  <router-view v-if="!loading" class="page-body" :items="loaded"/>
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
