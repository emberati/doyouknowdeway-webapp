<script>
import { storeToRefs } from 'pinia'
import { useRentsStore } from '@/store/rents'
import ArchiveRent from '@/components/ArchiveRent'
import RentContent from '@/components/RentContent'

export default {
  name: 'Rents',
  components: {
    RentContent,
    ArchiveRent
  },
  setup() {
    const rents = useRentsStore()
    
    const {
      getArchiveRents
    } = storeToRefs(rents)

    return {
      getArchiveRents
    }
  },
  mounted() {
    const rents = useRentsStore()
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
      <section>
        <rent-content/>
      </section>
      <section>
        <h1>Архив арендованных товаров</h1>
      </section>
      <section>
        <archive-rent
          v-for="rent in getArchiveRents"
          :key="Math.random()"
          :rent="rent"/>
      </section>
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