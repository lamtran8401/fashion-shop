import { APIService } from './service'

class UserService extends APIService {
  async login({ email, password }) {
    try {
      const response = await this.post('/auth/login', { email, password })
      return response
    } catch (error) {
      throw error
    }
  }

  async register({ email, password, name }) {
    try {
      const response = await this.post('/auth/register', { email, password, name })
      return response
    } catch (error) {
      throw error
    }
  }

  async logout() {
    try {
      const response = await this.post('/auth/logout')
      return response
    } catch (error) {
      throw error
    }
  }

  async getMyInfo() {
    try {
      const response = await this.get('/users/me')
      return response
    } catch (error) {
      throw error
    }
  }

  async updateUser(data) {
    try {
      const response = await this.put('/users', data)
      return response
    } catch (error) {
      throw error
    }
  }

  async refreshToken() {
    try {
      const response = await this.post('/auth/refresh')
      console.log(response)
      return response
    } catch (error) {
      throw error
    }
  }
}

export default new UserService()
