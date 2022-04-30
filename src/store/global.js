import {defineStore} from 'pinia'

/* FOR DEV ONLY START */
import image from '@/assets/img/rollers.png'
/* FOR DEV ONLY END */

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    loading: false,
    items: [],
    testFetchData: [
      {
        age_id: 'старше 15-ти',
        sex_id: 'унисекс', // сделать геттеры отображаемых значений по id
        season_id: 'весна-лето',
        size: '43 (EUR)',
        cost_per_hour: 199,
        description: `
        Всё ускоряющаяся эволюция компьютерных технологий предъявила жёсткие требования к производителям как собственно вычислительной техники, так и периферийных устройств.`,
        name: "Коньки роликовые",
        imageUrl: image
      },
      {
        age_id: 1,
        cost_per_hour: 299,
        description: `
        Официально заявляю читающим: даёшь подъем операции Ы! Хуже с ёлкой бог экспериментирует. Пиши: зять съел яйцо, ещё чан брюквы… эх! Ждем фигу!`,
        name: "Коньки роликовые",
        season_id: 0,
        imageUrl: image
      },
    ],
  }),
  getters: {
    isLoading() {
        return this.loading
    },
    getItems() {
        return this.items
    }
  },
  actions: {
    async fetchItems() {
      this.loading = true
      let promise = await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      }).then(() => {this.items = this.testFetchData})
      this.loading = false
    }
  }
})