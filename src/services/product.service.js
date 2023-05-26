import { APIService } from './service'

class ProductService extends APIService {
  async getList({ page = 1, limit = 10, search = '' } = {}) {
    try {
      const response = await this.get('/products')
      return response
    } catch (error) {
      throw error
    }
  }

  async getDetail(id) {
    try {
      const response = await this.get(`/products/${id}`)
      return response
    } catch (error) {
      throw error
    }
  }

  async create(data) {
    try {
      const response = await this.post('/products', data)
      return response
    } catch (error) {
      throw error
    }
  }

  async update(id, data) {
    try {
      const response = await this.put(`/products/${id}`, data)
      return response
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      const response = await this.delete(`/products/${id}`)
      return response
    } catch (error) {
      throw error
    }
  }
}

export const productService = new ProductService()
