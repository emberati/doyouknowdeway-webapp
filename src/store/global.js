import {defineStore} from 'pinia'

/* FOR DEV ONLY START */
import image from '@/assets/img/rollers.png'
/* FOR DEV ONLY END */

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    loading: false,
    query: '',
    items: [],
    testFetchData: [
      {
        id: 0,
        age_id: 'старше 15-ти',
        sex_id: 'унисекс', // сделать геттеры отображаемых значений по id
        season_id: 'весна-лето',
        size: '43 (EUR)',
        cost_per_hour: 199,
        description: `
        Коньки роликовые, для детей и подростков,
        от известного швейцарско бренда спортивного
        инвентаря Swizz Sport.
        Обладают тремя большими, упругими колёсами
        с хорошим накатом, ботинком из синтетического
        волокна с качественным пошивом,
        всё это обеспечивает высокую надёжность и
        много удовольствия от катания.`,
        name: "Коньки роликовые",
        imageUrl: image
      },
      {
        id: 5,
        age_id: 'младше 15-ти',
        sex_id: 'Унисекс',
        season_id: 0,
        size: '32',
        cost_per_hour: 299,
        description: `
        Официально заявляю читающим: даёшь подъем операции Ы! Хуже с ёлкой бог экспериментирует. Пиши: зять съел яйцо, ещё чан брюквы… эх! Ждем фигу!`,
        name: "Коньки роликовые",
        
        imageUrl: image
      },
    ],
  }),
  getters: {
    isLoading(store) {
        return store.loading
    },
    getItems(store) {
        return store.items
    }
  },
  actions: {
    setLoading(value) {
      this.loading = value
    },
    async fetchItems() {
      console.log('педераст')
      this.setLoading(true)
      let promise = await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      }).then(() => {this.items = this.testFetchData})
      console.log('педераст 2')
      this.setLoading(false)
    }
  },
})