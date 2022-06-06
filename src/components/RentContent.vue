<script>
import {storeToRefs} from 'pinia'
import {useRentsStore} from '@/store/rents'
import ContentCard from '@/components/ContentCard'
import ItemGrid from '@/components/ItemGrid'
import ItemCardUser from '@/components/ItemCardUser'


export default {
  name: 'rent-content',
  components: {
    ContentCard,
    ItemGrid,
    ItemCardUser,
  },
  data: () => ({
    showCartItems: false,
    dialogVisible: true
  }),
  methods: {
    onExpandItems() {
      this.showCartItems = !this.showCartItems
    }
  },
  computed: {
    expandItemsText() {
      if (this.showCartItems) return 'Скрыть товары'
      else return 'Показать товары'
    }
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
        <round-button :variant="'regular'" @click="onExpandItems">{{ expandItemsText }}</round-button>
        <round-button :variant="'danger'" @click="clearCart">Удалить</round-button>
        <round-button :variant="'accept'" @click="archiveRent">Оплалить</round-button>
      </section>
    </div>
  </content-card>
  <section>
    <item-grid v-if="showCartItems">
      <template #item-list>
        <item-card-user
          v-for="item in getCartItems"
          :key="'item-card-' + item.id"
          :item="item"
          @itemAdd="removeFromCart"/>
      </template>
    </item-grid>
  </section>
</template>

<style scoped>
/*
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Iiwicm9sZSI6IlVTRVIiLCJpc3MiOiJTcG9ydHMgRXF1aXBtZW50IFJlbnQiLCJleHAiOjE2NTQ0NTQ5NDMsImlhdCI6MTY1NDQ1MzE0MywiZW1haWwiOiJldmtha2l5QGdtYWlsLmNvbSJ9.AZwrx5TkG0SWYjvy0hlhT14D2g--WT61nywioBzT9gE",
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0IiwiaXNzIjoiU3BvcnRzIEVxdWlwbWVudCBSZW50IiwiZXhwIjoxNjU3MDQ1MTQzLCJpYXQiOjE2NTQ0NTMxNDMsImVtYWlsIjoiZXZrYWtpeUBnbWFpbC5jb20ifQ.Mm2JsRGEQUFLUJXiW2CFkhDvYNoFvBpXnYIzXMCAzpg"
}
*/
  .info-block {
    max-width: 500px;
  }

  .action-block .round-button {
    margin-right: 20px;
  }
</style>