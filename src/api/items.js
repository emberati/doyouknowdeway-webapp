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
    return DefaultAPIInstance.post(url)
  },
  createItem(data) {
    const url = `/items`
    return DefaultAPIInstance.post(url, data)
  },
  updateItem(id) {

  },
  deleteItemBy(id) {
    const url = `/items/${id}`
    return DefaultAPIInstance.post(url)
  },
  
}