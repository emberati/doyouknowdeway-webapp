<script>

/* FOR DEV ONLY START */
import image from '@/assets/img/rollers.png'
/* FOR DEV ONLY END */

import ItemCard from '@/components/ItemCard'

export default {
    name: 'Catalog',
    components: {
        ItemCard
    },
    data: () => ({
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
    }),
}
</script>

<template>
<div class="catalog container">
    <div class="catalog-items content"><item-card :item="items[0]" v-for="i in 3"/></div>
</div>
</template>

<style scoped>
    .catalog-items {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 20px;
    }
</style>