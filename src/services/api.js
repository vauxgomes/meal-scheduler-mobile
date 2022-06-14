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
      baseURL: 'http://192.168.0.10:3333',
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

  /** Orders */

  async postOrder(schedule_id) {
    try {
      const response = await this.api.post('/orders', { schedule_id }, this.config)
      return response.data
    } catch (error) {
      return null
    }
  }
}

export default new API()
