<script>
import ItemCard from '@/components/ItemCard'
export default {
  name: 'item-card-user',
  emits: ['itemAdd'],
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
    },
    btnText: String
  },
  methods: {
    onButtonAddClicked(e) {
      this.$emit('itemAdd', this.item)
    }
  }
}
</script>

<template>
  <item-card>
    <template #image-block>
      <img :src="item.imageUrl" alt="">
    </template>
    <template #description-block>
      <h2 class="item-name">{{ item.name }}</h2>
      <p>
        <ul class="characteristics">
          <li class="characteristic-row">
            <span class="characteristic-name">Размер: </span>
            <span>{{ item.size }}</span>
            <!-- <editable-row 
              @mousedown.stop
              @mouseup.stop
              :id="'item-size'"
              :disabled="false"
              :value="item.size"
              :variant="'latent'">
              Размер:
            </editable-row> -->
          </li>
          <li class="characteristic-row">
            <span class="characteristic-name">Возраст: </span>
            <span>{{item.age_id}}</span>
          </li>
          <li class="characteristic-row">
            <span class="characteristic-name">Пол: </span>
            <span>{{ item.sex_id }}</span>
          </li>
          <li class="characteristic-row">
            <span class="characteristic-name">Сезон: </span>
            <span>{{ item.season_id }}</span>
          </li>
        </ul>
      </p>
      <p>{{ item.description }}</p>
    </template>
    <template #action-block>
      <span class="price-wrapper">
        <p class="price">
          {{ item.cost_per_hour }}₽/час
        </p>
      </span>
      <round-button
        :variant="'white'"
        @mousedown.stop
        @mouseup.stop
        @click="onButtonAddClicked">
          {{btnText? btnText: 'Добавить'}}
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
</style>