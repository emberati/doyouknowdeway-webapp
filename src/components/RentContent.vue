<script>
import {storeToRefs} from 'pinia'
import {useRentsStore} from '@/store/rents'
import { useAuthStore } from '@/store/auth'

import ContentCard from '@/components/ContentCard'
import ItemGrid from '@/components/ItemGrid'
import ItemCardUser from '@/components/ItemCardUser'
import { useGlobalStore } from '../store/global'

export default {
  name: 'rent-content',
  components: {
    ContentCard,
    ItemGrid,
    ItemCardUser,
  },
  data: () => ({
    showCartItems: false,
    dialogVisible: true,
    rentStartInputDisabled: true,
    rentEndInputDisabled: true
  }),
  methods: {
    onExpandItems() {
      this.showCartItems = !this.showCartItems
    },
    editStartTime() {
      this.rentStartInputDisabled = !this.rentStartInputDisabled
    },
    editEndTime() {
      this.rentEndInputDisabled = !this.rentEndInputDisabled
    },
    resetEditing() {
      this.rentStartInputDisabled = true
      this.rentEndInputDisabled = true
    },
    pay() {
      const rents = useRentsStore()
      const auth = useAuthStore()
      const global = useGlobalStore()

      if (auth.getUserLogin)
        rents.archiveRent()
      else global.showAuthDialog()
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
      getCartItems,
      getCartItemsCount
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
      getCartItemsCount,
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
          <div class="info-row">
            <editable-row 
              :id="'rent-status'"
              :value="getCartStatus">
              Статус аренды:
              </editable-row>
          </div>
          <div class="info-row">
            <editable-row 
              :id="'rent-start'"
              :type="'date'"
              :disabled="rentStartInputDisabled">
              Начало аренды:
            </editable-row>
            <button class="edit-button"
              @click="editStartTime">
              <i class="icon-edit"></i>
            </button>
          </div>
          <div class="info-row">
            <editable-row
              :id="'rent-end'"
              :type="'date'"
              :disabled="rentEndInputDisabled">
              Конец аренды:
            </editable-row>
            <button
              class="edit-button"
              @click="editEndTime">
              <i class="icon-edit"></i>
            </button>
          </div>
          <div class="info-row">
            <editable-row
              :id="'rent-price'"
              :value="'' + getTotalCost + '₽'">
              Общая стоимость:
            </editable-row>
          </div>
        </div>
      </section>
      <section class="action-block">
        <round-button :variant="'regular'" @click="onExpandItems">{{ expandItemsText }}</round-button>
        <round-button :variant="'danger'" @click="clearCart">Удалить</round-button>
        <round-button :variant="'accept'" @click="pay">Оплалить</round-button>
      </section>
    </div>
  </content-card>
  <section v-if="showCartItems && getCartItemsCount">
    <item-grid>
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

  .info-row {
    display: grid;
    grid-template-columns: auto 10%;
  }

  .info-row .edit-button {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    padding: 0;

    box-sizing: border-box;
    border: none;
    outline: none;
    cursor: pointer;

    border: 1px solid transparent;
    border-radius: 30px;
    background-color: transparent;
    transition: .3s ease;
  }

  .info-row .edit-button:hover {
    transform: translateY(-3px);
  }

  .info-row .edit-button i.icon-edit {
    color: var(--color-main-accent);
    font-size: 24px;
  }
</style>