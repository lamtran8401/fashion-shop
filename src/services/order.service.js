import { APIService } from './service'

class OrderService extends APIService {
  async getAll() {
    try {
      const response = await this.get(`/orders`)
      return response
    } catch (error) {
      throw error
    }
  }

  async createOrder(order) {
    try {
      const response = await this.post(`/orders`, order)
      return response
    } catch (error) {
      throw error
    }
  }
}

export const orderService = new OrderService()
