import { defineStore } from 'pinia'
import { useGlobalStore } from '@/store/global'
import { filterItems, searchItems, saveItems, loadItems } from '@/handlers/items'

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    items: [],
    selectedCategories: [],
    allCategories: [
        {
          id: 0,
          type: 'sex',
          value: 'mal',
          name: 'Мужское'
        },
        {
          id: 1,
          type: 'sex',
          value: 'fem',
          name: "Женское"
        },
        {
          id: 2,
          type: 'sex',
          value: 'uni',
          name: "Унисекс"
        },
        {
          id: 3,
          type: 'season',
          value: 'winter',
          name: 'Зимнее'
        },
        {
          id: 4,
          type: 'season',
          value: 'spring-summer',
          name: 'Весна-лето'
        },
        {
          id: 5,
          type: 'age',
          value: 'yunger-15',
          name: 'Младше 15-ти'
        },
        {
          id: 6,
          type: 'age',
          value: 'older-15',
          name: 'Старше 15-ти'
        },
        {
          id: 7,
          type: 'age',
          value: 'adult',
          name: 'Взрослое'
        },
        {
          id: 8,
          type: 'age',
          value: 'yung',
          name: 'Детское'
        }
      ]
  }),
  getters: {
    getItems(store) {
      const global = useGlobalStore()
      let findedItems = null
      if (global.query.length < 3) findedItems = store.items
      else findedItems = searchItems(store.items, global.query)
      let filteredItems = filterItems(findedItems, this.selectedCategories)
      return filteredItems
    },
    getAllCategories(store) {
      return store.allCategories
    },
  },
  actions: {
    checkCategoryById(id) {
      let category = this.allCategories.find(cat => cat.id == id)
      this.selectedCategories.push(category)
    },
    setCategoryFilters(filters) {
      this.selectedCategories = filters
    },
    editCatalogItem(editedItem) {
      // replace on post
      let id = editedItem.id
      for (let item of this.items) {
        if (item.id == id) {
          item.age_id = editedItem.age_id
          item.sex_id = editedItem.sex_id
          item.season_id = editedItem.season_id
          item.size = editedItem.size
          item.cost_per_hour = editedItem.cost_per_hour
          item.description = editedItem.description
          item.imageUrl = editedItem.imageUrl
          break
        }
        saveItems(this.items)
      }
      // this.items
    },
    deleteCatalogItem(deletedItem) {
      var index = this.items.indexOf(deletedItem);
      if (~index) {
        this.items.splice(index, 1);
      }
      saveItems(this.items)
    },
    setCatalogItems(items) {
      this.items = items
    },
    async fetchItems() {
      if (this.items && this.items.length > 0) return
      const global = useGlobalStore()
      global.setLoading(true)
      let promise = await new Promise(resolve => {
        setTimeout(() => {
          resolve()
          this.items = loadItems()
          global.setLoading(false)
        }, 1000)
      })
    }
  }
})
