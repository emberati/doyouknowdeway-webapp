<script>

/* FOR DEV ONLY START */
import image from '@/assets/img/rollers.png'
import ButtonChecker from '@/components/ButtonChecker'
/* FOR DEV ONLY END */

import ItemCard from '@/components/ItemCard'

export default {
    name: 'Catalog',
    components: {
        ItemCard,
        ButtonChecker
    },
    props: {
      items: {
        type: Array[Object],
        required: true
      }
    },
    data: () => ({
      filterCategories: [],
    }),
    watch: {
      filterCategories: {
        handler(value) {
          console.log(this.filterCategories)
        },
        deep: true
      }
    }
}
</script>

<template>
  <div class="catalog container">
    <div class="content">
      <section>
        <h1>Фильтр по категориям</h1>
        <button-checker
          :options="
            ['Летнее', 'Зимнее', 'Демисезон',
            'Мужское', 'Женское', 'Для детей']"
        />
      </section>
      <section id="items-catalog">
        <h1>Каталог товаров</h1>
        <div class="item-list">
          <item-card :item="items[0]" v-for="i in 10"/>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
    .item-list {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 20px;
    }

    section {
      margin-top: 50px;
    }

    section > h1,
    section > h2,
    section > h3 {
      margin-bottom: 20px;
    }
</style>