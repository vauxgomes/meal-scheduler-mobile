/**
 * AXIOS
 * --------------------------------------
 * axios.request(config)
 * axios.get(url[, config])
 * axios.delete(url[, config])
 * axios.head(url[, config])
 * axios.options(url[, config])
 * axios.post(url[, data[, config]])
 * axios.put(url[, data[, config]])
 * axios.patch(url[, data[, config]])
 */

import axios from 'axios'

class API {
  constructor(token = null) {
    this.api = axios.create({
      baseURL: 'https://meal-scheduler-backend.herokuapp.com',
    })

    this.token(token)
  }

  /** Sets */

  token(token) {
    this.config = {
      headers: {
        Authorization: token,
      },
    }

    return this
  }

  host(host) {
    this.api.defaults.baseURL = host
    return this
  }

  /** Login */

  async login(username, password) {
    const response = await this.api.post('/login', { username, password })
    return response.data
  }

  /* Week */

  async getWeek() {
    try {
      const response = await this.api.get('/weeks', this.config)
      return response.data
    } catch (error) {
      return null
    }
  }

  /** Schedule */

  async getSchedule(schedule_id) {
    try {
      const response = await this.api.get(
        `/schedules/${schedule_id}`,
        this.config
      )

      return response.data
    } catch (error) {
      return null
    }
  }

  /** Orders */

  async postOrder(schedule_id) {
    const response = await this.api.post(
      '/orders',
      { schedule_id },
      this.config
    )

    return response.data
  }

  async getOrders() {
    const response = await this.api.get('/orders', this.config)
    return response.data
  }

  async putLike(order_id, like) {
    const response = await this.api.put(
      `/orders/${order_id}`,
      { like },
      this.config
    )

    return response.data
  }
}

export default new API()
