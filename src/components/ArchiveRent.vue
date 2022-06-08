<script>
import {storeToRefs} from 'pinia'
import {useRentsStore} from '@/store/rents'
import ContentCard from '@/components/ContentCard'
import ItemGrid from '@/components/ItemGrid'
import ItemCardUser from '@/components/ItemCardUser'


export default {
  name: 'archive-rents',
  components: {
    ContentCard,
    ItemGrid,
    ItemCardUser,
  },
  props: {
    rent: {
      status: String,
      rentStart: String,
      rentEnd: String,
      items: [],
    }
  },
  data: () => ({
    showCartItems: false,
    dialogVisible: true
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
    }
  },
  computed: {
    expandItemsText() {
      if (this.showCartItems) return 'Скрыть товары'
      else return 'Показать товары'
    }
  }
}
</script>

<template>
  <content-card>
    <div class="content">
      <section>
        <h1>Моя аренда</h1>
        <div class="info-block">
          <div class="info-row"></div>
          <div class="info-row">
            <editable-row 
              :id="'rent-status'"
              :value="rent.status">
              Статус аренды:
              </editable-row>
          </div>
          <div class="info-row">
            <editable-row 
              :id="'rent-start'"
              :type="'date'"
              :value="rent.rentStart">
              Начало аренды:
            </editable-row>
          </div>
          <div class="info-row">
            <editable-row
              :id="'rent-end'"
              :type="'date'"
              :value="rent.rentStart">
              Конец аренды:
            </editable-row>
          </div>
          <div class="info-row">
            <editable-row
              :id="'rent-price'"
              :value="'' + rent.totalCost + '₽'">
              Общая стоимость:
            </editable-row>
          </div>

        </div>
      </section>
      <section class="action-block">
        <round-button :variant="'regular'" @click="onExpandItems">{{ expandItemsText }}</round-button>
        <!-- <round-button :variant="'danger'" @click="clearCart">Удалить</round-button> -->
        <!-- <round-button :variant="'accept'" @click="archiveRent">Оплалить</round-button> -->
      </section>
    </div>
  </content-card>
  <section>
    <item-grid v-if="showCartItems">
      <template #item-list>
        <item-card-user
          v-for="item in rent.items"
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