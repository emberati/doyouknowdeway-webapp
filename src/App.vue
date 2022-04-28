<script>
import ItemCard from "@/components/ItemCard"
import HeaderNav from "@/components/HeaderNav"

/* FOR DEV ONLY START */
import image from '@/assets/img/rollers.png'
/* FOR DEV ONLY END */

export default {
  name: 'App',
  components: {
    ItemCard, HeaderNav
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
  data() {
    return {
      searchText: "",
      syncedText: "",
      primitiveText: "",
      items: [
          {
            age_id: 0,
            cost_per_hour: 1199,
            description: `
            Всё ускоряющаяся эволюция компьютерных технологий предъявила жёсткие требования к производителям как собственно вычислительной техники, так и периферийных устройств.`,
            name: "Коньки роликовые",
            season_id: 0,
            imageUrl: image
          },
          {
            age_id: 1,
            cost_per_hour: 3299,
            description: `
            Официально заявляю читающим: даёшь подъем операции Ы! Хуже с ёлкой бог экспериментирует. Пиши: зять съел яйцо, ещё чан брюквы… эх! Ждем фигу!`,
            name: "Коньки роликовые",
            season_id: 0,
            imageUrl: image
          },
        ],
    }
  }
}
</script>

<template>
  <header><header-nav v-model="searchText"/></header>
  <div class="page-body container">
    <div class="catalog content">
      <item-card :item="items[0]" v-for="i in 10"/>
    </div>
  </div>
  <footer></footer>
</template>

<style>
  #app {
    height: 100%;
    display: grid;
    grid-template-rows: 65px auto 200px;
  }

  .catalog {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    
  }

  html {
    min-height: 100%;
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
