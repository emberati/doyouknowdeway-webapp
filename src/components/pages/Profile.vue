<script>
import ContentCard from '@/components/ContentCard'
import { useAuthStore } from '@/store/auth'
import router from '../../router'
import { useGlobalStore } from '../../store/global'

export default {
  name: 'profile',
  components: {
    ContentCard
  },
  data: () => ({
    auth: useAuthStore(),
    global: useGlobalStore(),
  }),
  methods: {
    onLogout() {
      this.auth.logout()
      this.$router.push('/catalog')
      this.global.showAuthDialog()
    }
  }
}
</script>

<template>
  <div class="profile container">
    <div class="content">
      <section>
        <h1>Профиль</h1>
      </section>
      <section>
        <content-card class="container">
          <section>
            <div class="info-block content">
              <div class="info-row">
                <editable-row 
                  :id="'rent-status'"
                  :value="auth.getUserLogin">
                  Имя пользователя
                  </editable-row>
              </div>
              <section class="action-block">
                <round-button @click="onLogout">Выйти из профиля</round-button>
              </section>
            </div>
          </section>
          
        </content-card>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .info-block {
    max-width: 500px;
  }

  .action-block .round-button {
    margin-right: 20px;
  }

  .info-row {
    display: grid;
    grid-template-columns: auto 10%;
  }

  .info-row .edit-button {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    padding: 0;

    box-sizing: border-box;
    border: none;
    outline: none;
    cursor: pointer;

    border: 1px solid transparent;
    border-radius: 30px;
    background-color: transparent;
    transition: .3s ease;
  }

  .info-row .edit-button:hover {
    transform: translateY(-3px);
  }

  .info-row .edit-button i.icon-edit {
    color: var(--color-main-accent);
    font-size: 24px;
  }
</style>