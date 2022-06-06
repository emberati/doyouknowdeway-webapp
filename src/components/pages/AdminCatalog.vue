<script>
import {useCatalogStore} from '@/store/catalog'
import {useGlobalStore} from '@/store/global'
import {useRentsStore} from '@/store/rents'
import {storeToRefs} from 'pinia'

import ItemGrid from '@/components/ItemGrid'
import ItemCardUser from '@/components/ItemCardUser'
export default {
  name: 'admin-catalog',
  components: {
    ItemGrid,
    ItemCardUser,
  },
  async setup() {
    console.log('setup')
    const catalog = useCatalogStore()
    const global = useGlobalStore()
    const rents = useRentsStore()

    const {
      getItems,
      getAllCategories,
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
      getAllCategories,
      setCategoryFilters,
      setCatalogItems,
      checkCategoryById
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
          :options="getAllCategories"
          @checked="setCategoryFilters"
        />
      </section>
      <section id="items-catalog">
        <h1>Каталог товаров</h1>
        <item-grid @itemAdd="addToCart">
          <template #item-list>
            <item-card-admin
              v-for="item in getItems"
              :key="'item-card-' + item.id"
              :item="item"
              @itemAdd="addToCart"/>
          </template>
        </item-grid>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .button-checker {
    margin-bottom: -20px;
  }
</style>