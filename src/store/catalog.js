import { defineStore } from 'pinia'
import { useGlobalStore } from '@/store/global'

function itemMatch(item, query) {
  let size = item.size
  size = size.split(" ")[0]
  size = size.trim()
  let nameMatch = false
  let sizeMatch = false
  let descriptionMatch = false

  query.forEach(str => {
    str = str.toLowerCase()
    nameMatch ||= item.name.toLowerCase().includes(str)
    sizeMatch ||= str == size
    descriptionMatch ||= item.description.toLowerCase().includes(str)
  })

  return {
      name: nameMatch,
      size: sizeMatch,
      description: descriptionMatch
  }
}

function filterItems(items, categories) {
  console.log("filtering...")
  let result = []
  console.log(items.length)
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    let match = false
    for (let j = 0; j < categories.length; j++) {
      let category = categories[j]
      match ||= (
        category.name.toLowerCase() == item.sex_id ||
        category.name.toLowerCase() == item.age_id ||
        category.name.toLowerCase() == item.season_id
      )
    }
    if (match) result.push(item)
  }
  console.log('result:', result)
  return result
}

function searchItems(items, query) {
  query = query.match(/[^ ]+/g)
  if (!query) return items

  console.log('global query: ', query)

  let itemsMatchName = []
  let itemsMatchSize = []
  let itemsMatchDescription = []
  let itemsMatchNameAndSize = []

  items.forEach(item => {
    // Маппинг совпадений
    let matching = itemMatch(item, query)
      if (matching.name) itemsMatchName.push(item)
      if (matching.name && matching.size) itemsMatchNameAndSize.push(item)
      if (matching.description) itemsMatchDescription.push(item)
  })

  // Приоритеты поиска рещультата
  if (itemsMatchNameAndSize.length > 0) return itemsMatchNameAndSize
  if (itemsMatchName.length > 0) return itemsMatchName
  if (itemsMatchDescription.length > 0) return itemsMatchDescription
}

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
    getAllCategories(store) {
      return store.allCategories
    },
    sortedItems(store) {
      return store.items
    },
    filteredItemsByCategories: (store) => {
      if (store.selectedCategories.length == 0) {
        console.log('Selected Categories is empty!: ', store.selectedCategories)
        return store.items
      }

      return filterItems(store.items, store.selectedCategories)
    },
    searchedItems(store) {
      const global = useGlobalStore()
      
      let result = searchItems(store.items, global.query)
      console.log('sdfgsdfg')
      return result
    }
  },
  actions: {
    checkCategoryById(id) {
      let category = this.allCategories.find(cat => cat.id == id)
      this.selectedCategories.push(category)
    },
    setCategoryFilters(filters) {
      this.selectedCategories = filters
    //   console.log('Filters updated: ', filters)
    //   console.log('selectedCategories:', this.selectedCategories)
    },
    setItems(items) {
      this.items = items
    }
  }
})