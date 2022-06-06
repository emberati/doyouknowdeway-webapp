<script>
import RentContent from '@/components/RentContent'
import { useRentsStore } from '../../store/rents'

export default {
  name: 'Rents',
  components: {
    RentContent
  },
  setup() {
    const rents = useRentsStore()
  },
  mounted() {
    const rents = useRentsStore()
    console.log('Cart has items: ', rents.isCartNotEmpty)
  },
  unmounted() {
    const rents = useRentsStore()
    rents.saveActiveRent()
  }
}
</script>

<template>
  <div class="rents container">
    <div class="content">
      <section>
        <h1>Мои аренды</h1>
      </section>
      <rent-content/>
    </div>
  </div>
</template>

<style scoped>
  section {
    margin-top: 50px;
  }
</style>

<style>
  .content-card {
      padding-bottom: 50px;
  }
</style>