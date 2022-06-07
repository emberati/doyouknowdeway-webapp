<script>
import ItemCard from '@/components/ItemCard'
export default {
  name: 'item-card-admin',
  emits: ['editItem', 'deleteItem'],
  components: {
    ItemCard
  },
  props: {
    item: {
      id: Number,
      name: String,
      age_id: Number,
      sex_id: Number,
      season_id: Number,
      description: String,
      cost_per_hour: Number,
      imageUrl: String
    }
  },
  data: () => ({
    editMode: false
  }),
  methods: {
    deleteButtonClicked() {
      console.log('Deleting items is not supported yet.')
    },
    editModeOn() {
      if (!this.editMode) {
        this.editMode = true
        this.itemCardElement.expandCardContent()
      } else {
        this.editMode = false
        this.itemCardElement.collapseCardContent()
      }
    },
  },
  mounted() {
    this.itemCardElement = this.$refs.itemCardElement
  }
}
</script>

<template>
  <item-card ref="itemCardElement">
    <template #image-block>
      <img :src="item.imageUrl" alt="">
    </template>
    <template #description-block>
      <h2 class="item-name">{{ item.name }}</h2>
      <p>
        <ul class="characteristics">
          <li class="characteristic-row">
            <div v-if="editMode">

            </div>
            <div v-else>

            </div>
            <div v-if="editMode">
              <editable-row 
                @mousedown.stop
                @mouseup.stop
                :id="'item-size'"
                :disabled="!editMode"
                :value="item.size"
                :variant="'latent'">
                Размер:
              </editable-row>            
            </div>
            <div v-else>
              <span class="characteristic-name">Размер: </span>
              <span>{{ item.size }}</span>
            </div>
          </li>
          <li class="characteristic-row">
            <div v-if="editMode">
              <editable-row 
                @mousedown.stop
                @mouseup.stop
                :id="'item-size'"
                :disabled="!editMode"
                :value="item.age_id"
                :variant="'latent'">
                Возраст:
              </editable-row>
            </div>
            <div v-else>
              <span class="characteristic-name">Возраст: </span>
              <span>{{item.age_id}}</span>
            </div>
          </li>
          <li class="characteristic-row">
            <div v-if="editMode">
              <editable-row 
                @mousedown.stop
                @mouseup.stop
                :id="'item-size'"
                :disabled="!editMode"
                :value="item.sex_id"
                :variant="'latent'">
                Пол:
              </editable-row>
            </div>
            <div v-else>
              <span class="characteristic-name">Пол: </span>
              <span>{{ item.sex_id }}</span>
            </div>
          </li>
          <li class="characteristic-row">
            <div v-if="editMode">
              <editable-row 
                @mousedown.stop
                @mouseup.stop
                :id="'item-size'"
                :disabled="!editMode"
                :value="item.season_id"
                :variant="'latent'">
                Сезон:
              </editable-row>
            </div>
            <div v-else>
              <span class="characteristic-name">Сезон: </span>
              <span>{{ item.season_id }}</span>
            </div>
          </li>
        </ul>
      </p>
      <textarea
        v-if="editMode"
        @mousedown.stop
        @mouseup.stop
        name="item-description"
        id="item-description"
        class="description-input"
        rows="10">{{ item.description }}</textarea>
      <p v-else>{{ item.description }}</p>
    </template>
    <template #action-block>
      <span class="price-wrapper">
        <editable-row 
          v-if="editMode"
          class="price"
          @mousedown.stop
          @mouseup.stop
          :id="'item-price'"
          :disabled="!editMode"
          :value="item.cost_per_hour"
          :variant="'latent'">
          Цена:
        </editable-row>
        <p class="price" v-else>
          {{ item.cost_per_hour }}₽/час
        </p>
      </span>
      <round-button
        class="iconic"
        :variant="'white'"
        @mousedown.stop
        @mouseup.stop
        @click="deleteButtonClicked">
          <i class="icon-delete"></i>
      </round-button>
      <round-button
        class="iconic"
        :variant="'white'"
        @mousedown.stop
        @mouseup.stop
        @click="editModeOn">
          <i class="icon-edit"></i>
      </round-button>
      <round-button
        :variant="'white'"
        @mousedown.stop
        @mouseup.stop
        @click="onButtonAddClicked">
          Добавить
      </round-button>
    </template>
  </item-card>
</template>

<style scoped>
.characteristic-name {
  font-weight: 600;
}

span.price-wrapper {
  display: flex;
  height: auto;
}

p.price {
  margin-top: auto;
  margin-bottom: auto;
  font-size: 24px;
  font-weight: 900;
}

#button-add.button {
  display: block;
  width: 100%;
  margin-bottom: 20px;
}

.button.iconic {
  padding: 5px;
  width: 37px;
}

.button.iconic i {
   font-size: 16px;
}
.button.iconic:hover i {
  color: var(--color-main-accent);
}

.button.iconic:hover i.icon-delete {
  color: red;
}

.description-input {
  width: 100%;
  margin-bottom: 50px;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 5px;

  border: none;
  outline: none;

  border: 2px solid var(--color-main-accent);
  font-family: 'Montserrat';
  background-color: transparent;
  transition: .3s ease;
}

.description-input:focus {
  box-shadow: 0 0 0 5px var(--color-main-layer)
}
</style>

<style>
.editable-row.price {
  height: auto!important;
}

.editable-row.price input.invisible-input {
  width: 70px!important;
}
</style>