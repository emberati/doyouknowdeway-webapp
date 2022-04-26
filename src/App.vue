<script>
import ItemCard from "@/components/ItemCard"

/* FOR DEV ONLY START */
import image from '@/assets/img/rollers.png'
/* FOR DEV ONLY END */

export default {
  name: 'App',
  components: {
    ItemCard
  },
  methods: {
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
<div class="catalog">
  <item-card :item="items[0]" v-for="i in 1"/>
</div>
<regular-button :style='`regular`'>obama</regular-button>
<regular-button :style='`regular`'>obama</regular-button>
<regular-button :style='`regular`'>obama</regular-button>
<search-field v-model="searchText"/>
<linear-loader/>
<p class="test">Загружаем</p>
</template>

<style>
  .catalog {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    
  }

  .test {
    width: 300px;
    margin-top: 20px;
    text-align: center;
    font-weight: 500;
  }
  /* @import url('./assets/css/reset.css'); */
</style>
