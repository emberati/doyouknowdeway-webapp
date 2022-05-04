<template>
  <div class="rents container">
    <div class="content">
      <section>
        <h1>Мои аренды</h1>
      </section>
      <content-card>
        <div class="content">
          <section>
            <h1>Активная аренда</h1>
            <div class="info-block">
              <editable-row 
                :id="'rent-status'"
                :value="'Готово к оплате'">
                Статус аренды:
              </editable-row>
              <editable-row 
                :id="'rent-start'" :type="'date'">
                Начало аренды:
              </editable-row>
              <editable-row 
                :id="'rent-end'" :type="'date'">
                Конец аренды:
              </editable-row>
              <editable-row 
                :id="'rent-price'"
                :value="'1239₽'">
                Общая стоимость:
              </editable-row>
            </div>
          </section>
          <section class="action-block">
            <round-button :variant="'regular'">Скрыть всё</round-button>
            <round-button :variant="'danger'">Удалить</round-button>
            <round-button :variant="'accept'">Оплалить</round-button>
          </section>
        </div>
      </content-card>
      <section>
          
      </section>
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard'
export default {
  components: {
    ContentCard
  }
}
</script>

<style scoped>
  section {
    margin-top: 50px;
  }

  .info-block {
    width: 500px;
  }

  .action-block .round-button {
    margin-right: 20px;
  }
</style>

<style>
  .content-card {
      padding-bottom: 50px;
  }
</style>