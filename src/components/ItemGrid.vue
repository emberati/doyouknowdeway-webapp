<script>
import ItemCard from '@/components/ItemCard'

export default {
  name: 'item-grid',
  emits: ['itemAdd'],
  components: {
    ItemCard
  },
  props: {
    items: {
      type: Array[Object],
      required: true
    }
  }
}
</script>

<template>
  <div class="item-list-grid">
    <transition-group name="item-list">
      <item-card
        v-for="item in items"
        :item="item"
        :key="item.id"
        @itemAdd="(item) => {this.$emit('itemAdd', item)}"
      />
    </transition-group>
  </div>
</template>

<style scoped>
  .item-list-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  
  .item-list-enter-active,
  .item-list-leave-active {
    transition: all .3s ease;
  }
  
  .item-list-enter-from,
  .item-list-leave-to {
    opacity: 0;
    transform: scale(0.98);
  }
  
  .item-list-move {
    transition: 0s none;
  }
</style>