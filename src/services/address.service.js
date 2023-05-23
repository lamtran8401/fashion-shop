import { APIService } from './service'

class AddressService extends APIService {
  async getAddress() {
    try {
      const response = await this.get(`/addresses`)
      return response
    } catch (error) {
      throw error
    }
  }

  async createAddress(address) {
    try {
      const response = await this.post(`/addresses`, address)
      return response
    } catch (error) {
      throw error
    }
  }

  async updateAddress(addressId, data) {
    try {
      const response = await this.put(`/addresses/${addressId}`, data)
      return response
    } catch (error) {
      throw error
    }
  }

  async deleteAddress(addressId) {
    try {
      const response = await this.delete(`/addresses/${addressId}`)
      return response
    } catch (error) {
      throw error
    }
  }
}

export default new AddressService()
