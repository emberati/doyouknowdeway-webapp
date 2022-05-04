<script>
import {useCatalogStore} from '@/store/catalog'
import {useGlobalStore} from '@/store/global'
import {useRentsStore} from '@/store/rents'
import {storeToRefs} from 'pinia'

/* FOR DEV ONLY START */
/* FOR DEV ONLY END */

import ItemGrid from '@/components/ItemGrid'

export default {
    name: 'Catalog',
    components: {
      ItemGrid,
    },
    props: {

    },
    async setup() {
      console.log('setup')
      const catalog = useCatalogStore()
      const global = useGlobalStore()
      const rents = useRentsStore()

      // const {
      //   isLoading
      // } = storeToRefs(global)

      const {
        getItems,
        sortedItems,
        getAllCategories,
        filteredItems,
        searchedItems
      } = storeToRefs(catalog)

      const {
        getTotalCost,
        getCartItemsCount
      } = storeToRefs(rents)

      const {
        fetchItems,
        setCatalogItems,
        checkCategoryById,
        setCategoryFilters
      } = catalog

      const {
        addToCart
      } = rents

      await fetchItems()

      return {
        getItems,
        addToCart,
        fetchItems,
        sortedItems,
        getAllCategories,
        setCategoryFilters,
        setCatalogItems,
        filteredItems,
        searchedItems,
        checkCategoryById
      }
    },
    async mounted() {
      // console.log('loading...')
      // await this.fetchItems()
      // console.log('loading done.')
      console.log(this.getItems)
    },
    unmounted() {
      console.log('unmounted')
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
        <item-grid :items="getItems" @itemAdd="addToCart"/>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .button-checker {
    margin-bottom: -20px;
  }
</style>