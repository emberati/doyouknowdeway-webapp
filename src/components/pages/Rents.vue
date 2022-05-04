<script>
import RentContent from '@/components/RentContent'

export default {
  name: 'Rents',
  components: {
    RentContent
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