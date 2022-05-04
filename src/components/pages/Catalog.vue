<script>
import {useCatalogStore} from '@/store/catalog'
import {useGlobalStore} from '@/store/global'
import {storeToRefs} from 'pinia'

/* FOR DEV ONLY START */
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

    },
    async setup() {
      console.log('setup')
      const catalog = useCatalogStore()
      const global = useGlobalStore()

      const {
        isLoading
      } = storeToRefs(global)

      const {
        getItems,
        sortedItems,
        getAllCategories,
        filteredItems,
        searchedItems
      } = storeToRefs(catalog)

      const {
        fetchItems,
        setCatalogItems,
        checkCategoryById,
        setCategoryFilters
      } = catalog

      await fetchItems()

      return {
        getItems,
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
        <div class="item-list-grid">
          <transition-group name="item-list">
            <item-card 
              v-for="item in getItems"
              :item="item"
              :key="item.id"
            />
          </transition-group>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
    .item-list-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }

    .item-list-enter-active,
    .item-list-leave-active {
      transition: all .3s ease;
    }

    .item-list-enter,
    .item-list-leave-to {
      opacity: 0;
      transform: scale(0.98);
    }

    .item-list-move {
      transition: 0s none;
    }

    .button-checker {
      margin-bottom: -20px;
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