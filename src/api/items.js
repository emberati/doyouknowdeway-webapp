import { DefaultAPIInstance } from '@/api'

export const ItemsAPI = {
  /**
   * @method GET
   * @returns all fetched items
   */
  getAllItems() {
    const url = '/items'
    return DefaultAPIInstance.get(url)
  },
  /**
   * 
   * @param {id} item id
   * @returns 
   */
  getItem(id) {
    const url = `/items/${id}`
    return DefaultAPIInstance.get(url)
  },
  createItem(data) {
    const url = `/items`
    return DefaultAPIInstance.post(url, data)
  },
  updateItem(data) {
    const url = `/items`
    return DefaultAPIInstance.put(url, data)
  },
  deleteItemBy(id) {
    const url = `/items/${id}`
    return DefaultAPIInstance.delete(url)
  },
  
}