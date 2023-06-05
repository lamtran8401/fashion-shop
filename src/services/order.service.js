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

  async getAllByStatus(status) {
    try {
      if (status === 'ALL') {
        const response = await this.getAll()
        return response
      } else {
        const response = await this.get(`/orders/query?status=${status}`)
        return response
      }
    } catch (error) {
      throw error
    }
  }

  async updateStatus(orderId, status) {
    try {
      const response = await this.put(`/orders/admin-orders/${orderId}?status=${status}`)
      return response
    } catch (error) {
      throw error
    }
  }

  async getAllOrdersAdmin() {
    try {
      const response = await this.get(`/orders/admin-orders`)
      return response
    } catch (error) {
      throw error
    }
  }
}

export const orderService = new OrderService()
