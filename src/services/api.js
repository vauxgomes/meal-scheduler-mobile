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
      baseURL: 'http://localhost:3333'
    })

    this.setToken(token)
  }

  /** Sets */

  setToken(token) {
    this.config = {
      headers: {
        Authorization: token
      }
    }
  }

  /** Login */

  async getToken(username, password) {
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
}

export default new API()
