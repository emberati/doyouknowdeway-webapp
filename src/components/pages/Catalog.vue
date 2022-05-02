<script>
import {useCatalogStore} from '@/store/catalog'
import {useGlobalStore} from '@/store/global'
import {storeToRefs} from 'pinia'

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
      },
      searchQuery: String,
    },
    setup() {
      const catalog = useCatalogStore()
      const global = useGlobalStore()

      const {
        isLoading
      } = storeToRefs(global)

      const {
        sortedItems,
        getAllCategories,
        filteredItems,
        searchedItems
      } = storeToRefs(catalog)

      const {
        setItems,
        checkCategoryById,
        setCategoryFilters
      } = catalog

      return {
        sortedItems,
        getAllCategories,
        setCategoryFilters,
        setItems,
        filteredItems,
        searchedItems,
        checkCategoryById
      }
    },
    mounted() {
      this.setItems(this.items)
    }
}
</script>

<template>
  <div class="catalog container">
    <div class="content">
      <section>
        <h1>Фильтр по категориям</h1>
        <button-checker
          :options="getAllCategories"
          @checked="setCategoryFilters"
        />
      </section>
      <section id="items-catalog">
        <h1>Каталог товаров</h1>
        <div class="item-list">
          <item-card :key="item.id" :item="item" v-for="item in searchedItems"/>
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