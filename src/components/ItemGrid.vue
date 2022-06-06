<script>
import ItemCard from '@/components/ItemCard'

export default {
  name: 'item-grid',
  components: {
    ItemCard
  }
}
</script>

<template>
  <div class="item-list-grid">
    <slot name="item-list"></slot>
  </div>
</template>

<style scoped>
  .item-list-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  @media screen and (max-width: 1280px) {
    .item-list-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 860px) {
    .item-list-grid {
      grid-template-columns: 1fr;
    }
  }

</style>