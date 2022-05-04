<template>
  <div ref="itemCard" class="item-card rounded">
    <div class="image-wrapper rounded">
      <img :src="item.imageUrl" alt="">
    </div>
    <div
      ref="description"
      class="description rounded"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp">
      <div class="description-inner float">
        <h2>{{ item.name }}</h2>
        <p>
          <ul class="characteristics">
            <li>
              <span class="characteristic-name">Размер: </span>
              <span>{{ item.size }}</span>
            </li>
            <li>
              <span class="characteristic-name">Возраст: </span>
              <span>{{item.age_id}}</span>
            </li>
            <li>
              <span class="characteristic-name">Пол: </span>
              <span>{{ item.sex_id }}</span>
            </li>
            <li>
              <span class="characteristic-name">Сезон: </span>
              <span>{{ item.season_id }}</span>
            </li>
          </ul>
        </p>
        <p>{{ item.description }}</p>
      </div>
      <div class="description-inner static">
        <div class="action-bar">
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
              Добавить
            </round-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['itemAdd'],
  props: {
    item: {
      age_id: Number,
      cost_per_hour: Number,
      description: String,
      name: String,
      season_id: Number,
      imageUrl: String
    }
  },
  data: () => ({
    descriptionElement: Object,
    itemCardElement: Object
  }),
  methods: {
    onMouseDown() {
      this.itemCardElement.classList.add('clicked')
      console.log('mousedown')
    },
    onMouseUp() {
      this.itemCardElement.classList.remove('clicked')
      this.descriptionElement.classList.toggle('expanded')
      console.log('mouseup')
    },
    onButtonAddClicked(e) {
      this.$emit('itemAdd', this.item)
    }
  },
  mounted() {
    this.descriptionElement = this.$refs.description
    this.itemCardElement = this.$refs.itemCard
    // this.descriptionElement.setAttribute('tabindex', '0')
  }
}
</script>

<style scoped>

.rounded {
  border-radius: 20px;
}

.image-wrapper {
  overflow: hidden;
  height: 100%;
}

img {
  -webkit-user-drag: none;
  width: -webkit-fill-available;
}
h2 {
  margin-bottom: 10px;
}

.characteristic-name {
  font-weight: 600;
}

.item-card {
  min-width: 380px;
  max-width: 410px;
  height: 300px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  background-color: white;
  border: 1px solid var(--color-platinum-gray);

  transition-property: transform, box-shadow, border;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

.item-card:hover {
  border: 1px solid var(--color-main-accent);
  box-shadow: 0 0 0 5px var(--color-main-layer);

  transition-property: transform, box-shadow, border;
  transition-duration: .1s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

.item-card.clicked {
  transform: scale(0.98);
  transition-property: transform, height;
  transition-duration: .1s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

.item-card:focus {
  border: 1px solid var(--color-main-accent);
  box-shadow: 0 0 0 5px var(--color-main-layer);
}

.item-card * {
  color: white;
}

.description {
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
  bottom: 0;
  width: 100%;
  min-height: 45%;
  max-height: 45%;

  background-color: var(--color-main-accent-transparent);

  transition-property: min-height, width, margin, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

.description:hover {
  min-height: 80%;
}

/* EXPANDING */
.description.expanded {
  /* z-index: 5; */
  /* width: 120%; */
  /* margin-left: -10%; */
  /* margin-bottom: -10%; */
  max-height: initial;
  min-height: 130%;
  border: 1px solid var(--color-main-accent);
  box-shadow: 0 0 0 6px var(--color-main-layer);
  background-color: var(--color-main-accent-light);
}

.description-inner {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
}

.description-inner.float>* {
  margin-top: 10px;
}

.description-inner.float>*:first-child {
  margin-top: 0;
}

.description-inner.static {
  padding-top: 25px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  background: rgb(106,124,241);
  background: linear-gradient(0deg, rgba(106,124,241,1) 35%, rgba(106,124,241,0) 100%);
}

.action-bar {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
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

.item-card-inner {
  height: 200px;
}
</style>