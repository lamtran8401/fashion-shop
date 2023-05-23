import axiosInstance from '@/config/axiosInstance'

export class APIService {
  constructor() {
    this.$axios = axiosInstance
  }

  async get(url, config = {}) {
    try {
      const res = await this.$axios.get(url, config)
      return res.data
    } catch (error) {
      throw error
    }
  }

  async post(url, data, config = {}) {
    try {
      const res = await this.$axios.post(url, data, config)
      return res.data
    } catch (error) {
      throw error
    }
  }

  async put(url, data, config = {}) {
    try {
      const res = await this.$axios.put(url, data, config)
      return res.data
    } catch (error) {
      throw error
    }
  }

  async delete(url, config = {}) {
    try {
      const res = await this.$axios.delete(url, config)
      return res.data
    } catch (error) {
      throw error
    }
  }
}
