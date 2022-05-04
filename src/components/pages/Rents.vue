<template>
  <div class="rents container">
    <div class="content">
      <section>
        <h1>Мои аренды</h1>
      </section>
      <content-card>
        <div class="content">
          <section>
            <h1>Активная аренда</h1>
            <div class="info-block">
              <editable-row 
                :id="'rent-status'"
                :value="getCartStatus">
                Статус аренды:
              </editable-row>
              <editable-row 
                :id="'rent-start'" :type="'date'">
                Начало аренды:
              </editable-row>
              <editable-row 
                :id="'rent-end'" :type="'date'">
                Конец аренды:
              </editable-row>
              <editable-row 
                :id="'rent-price'"
                :value="'' + getTotalCost + '₽'">
                Общая стоимость:
              </editable-row>
            </div>
          </section>
          <section class="action-block">
            <round-button :variant="'regular'">Скрыть всё</round-button>
            <round-button :variant="'danger'" @click="clearCart">Удалить</round-button>
            <round-button :variant="'accept'" @click="archiveRent">Оплалить</round-button>
          </section>
        </div>
      </content-card>
      <section>
        <item-card
          v-for="item in getCartItems"
          :item="item"
          :key="item.id"
          @itemAdd="removeFromCart"
        />
      </section>
    </div>
  </div>
</template>

<script>
import {storeToRefs} from 'pinia'
import {useRentsStore} from '@/store/rents'

import ContentCard from '@/components/ContentCard'
import ItemCard from '@/components/ItemCard'

export default {
  components: {
    ContentCard,
    ItemCard
  },
  setup() {
    const rents = useRentsStore()

    const {
      getCartStatus,
      getTotalCost,
      getCartItems
    } = storeToRefs(rents)

    const {
      clearCart,
      removeFromCart,
      archiveRent
    } = rents

    return {
      getCartStatus,
      getTotalCost,
      getCartItems,
      clearCart,
      removeFromCart,
      archiveRent
    }
  }
}
</script>

<style scoped>
  section {
    margin-top: 50px;
  }

  .info-block {
    width: 500px;
  }

  .action-block .round-button {
    margin-right: 20px;
  }
</style>

<style>
  .content-card {
      padding-bottom: 50px;
  }
</style>