import axios from 'axios'

class AxiosAPI {
  constructor(baseURL = import.meta.env.VITE_API_URL) {
    this.instance = axios.create({ baseURL })

    this.configReqInterceptor(config => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    this.configResInterceptor(response => {
      return response
    })
  }

  configReqInterceptor(config) {
    this.instance.interceptors.request.use(config)
  }

  configResInterceptor(response) {
    this.instance.interceptors.response.use(response)
  }

  async get(path, config = {}) {
    const response = await this.instance.get(path, config)
    return response.data
  }

  async post(path, data, config = {}) {
    const response = await this.instance.post(path, data, config)
    return response.data
  }

  async put(path, data, config = {}) {
    const response = await this.instance.put(path, data, config)
    return response.data
  }

  async delete(path, config = {}) {
    const response = await this.instance.delete(path, config)
    return response.data
  }

  async patch(path, data, config = {}) {
    const response = await this.instance.patch(path, data, config)
    return response.data
  }
}

export { AxiosAPI }
export default new AxiosAPI()
