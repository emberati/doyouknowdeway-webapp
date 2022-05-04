<script>
import {storeToRefs} from 'pinia'
import {useRentsStore} from '@/store/rents'
import ContentCard from '@/components/ContentCard'
import ItemGrid from '@/components/ItemGrid'

export default {
  name: 'rent-content',
  components: {
    ContentCard,
    ItemGrid
  },
  data: () => ({
    showCartItems: false,
    showCartItemsText: 'Скрыть всё',
  }),
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

<template>
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
        <round-button :variant="'regular'" @click="showCartItems = !showCartItems">{{ showCartItemsText }}</round-button>
        <round-button :variant="'danger'" @click="clearCart">Удалить</round-button>
        <round-button :variant="'accept'" @click="archiveRent">Оплалить</round-button>
      </section>
    </div>
  </content-card>
  <section>
    <item-grid
      v-if="showCartItems"
      :items="getCartItems"
      @itemAdd="removeFromCart"
    />        
  </section>
</template>

<style scoped>
  .info-block {
    width: 500px;
  }

  .action-block .round-button {
    margin-right: 20px;
  }
</style>