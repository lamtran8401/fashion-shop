import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  config => {
    if (config.url === '/auth/login' || config.url === '/auth/register') return config

    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

// refresh token if expired
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const { config, response } = error
    if (response.status === 401 && response.data.message.startsWith('JWT')) {
      console.log('refresh token')
      const userId = JSON.parse(localStorage.getItem('user')).id
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh`,
          {
            userId,
          },
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        const { accessToken } = res.data
        localStorage.setItem('token', accessToken)
        return axiosInstance(config)
      } catch (err) {
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
