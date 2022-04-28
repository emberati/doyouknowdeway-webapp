<script>
export default {
    name: 'footer-info',
}
</script>

<template>
<div class="footer">
  <div class="container">
    <div class="info content">
      <div class="info-block" id="authors">
        <h3>Создатели</h3>
        <p class="item">Шакайло Александр Евгеньевич</p>
        <p class="item">Селиванова Екатерина Александровна</p>
        <p class="item">Пилеич Мария Константиновна</p>
      </div>
      <div class="info-block" id="links">
        <h3>Навигация</h3>
        <p class="item" @click="$router.push('/')">Главная</p>
        <p class="item" @click="$router.push('/profile')">Профиль</p>
        <p class="item" @click="$router.push('/rents')">Мои аренды</p>
        <p class="item" @click="$router.push('/catalog')">Каталог</p>
        <p class="item" @click="$router.push('/help')">Помощь</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.footer {
    border-top: 1px solid var(--color-platinum-gray);
  }

  .info {
    padding-top: 30px;
    padding-bottom: 40px;
    display: flex;
  }

  .info-block {
    margin-right: 50px;
  }

  .info-block>h3 {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 20px;
  }

  .info-block>.item {
    font-weight: 400;
    margin-bottom: 10px;
  }

  .info-block p.item {
    width: fit-content;
  }

  .info-block p.item::after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    margin-top: 2px;
    background-color: var(--color-main-font);
  }

  #links p:hover {
    cursor: pointer;
    background-color: var(--color-main-layer);
  }
</style>