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
    },
    onMouseUp() {
      this.itemCardElement.classList.remove('clicked')
      this.toggleCardContent()
    },
    toggleCardContent() {
      this.descriptionElement.classList.toggle('expanded')
    },
    expandCardContent() {
      this.descriptionElement.classList.add('expanded')
    },
    collapseCardContent() {
      this.descriptionElement.classList.remove('expanded')
    }
  },
  mounted() {
    this.descriptionElement = this.$refs.description
    this.itemCardElement = this.$refs.itemCard
    // this.descriptionElement.setAttribute('tabindex', '0')
  }
}
</script>

<template>
  <div ref="itemCard" class="item-card rounded">
    <div class="image-wrapper rounded">
      <slot name="image-block"></slot>
    </div>
    <div
      ref="description"
      class="description rounded"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp">
      <div class="description-inner float">
        <slot name="description-block"></slot>
      </div>
      <div class="description-inner static">
        <div class="action-bar">
          <slot name="action-block"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.rounded {
  border-radius: 20px;
}

.image-wrapper {
  overflow: hidden;
  height: 100%;
  width: 100%;
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

.item-card-inner {
  height: 200px;
}
</style>

<style>
  h2.item-name {
    margin-bottom: 10px;
  }
  .item-card * {
    color: var(--color-main-foreground);
  }
  .characteristic-row {
    margin-bottom: 5px;
  }

  .image-wrapper img {
    -webkit-user-drag: none;
    width: 100%;
  }
</style>