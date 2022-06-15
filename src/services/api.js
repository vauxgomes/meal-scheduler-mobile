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
      baseURL: process.env.API_URL,
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

  /** Login */

  async login(username, password) {
    try {
      const response = await this.api.post('/login', { username, password })
      return response.data
    } catch (error) {
      return null
    }
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
