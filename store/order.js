import urls from '~/services/apiUrl'
import pkg from '~/package.json'

export const actions = {
  async createOrder({
    commit
  }, {
    method
  }) {
    const res = await this.$axios.$post(urls.order, {
      method
    })
    let formatted = {}
    Object.entries(res).forEach(([key, value]) => {
      key = key.replace('\u0000*\u0000', '')
      formatted[key] = value
    })
    return formatted
  },
  async getOrder({
    commit
  }, orderId) {
    const res = await this.$axios.$get(`${urls.order}?id=${orderId}`)
    return res
  },
  async getOrders() {
    const res = await this.$axios.$get(`${urls.order}`)
    return res
  },
  async uploadSlip({}, {
    id,
    slipURL
  }) {
    const res = await this.$axios.$put(`${urls.order}`, {
      id,
      slipURL
    })
    return res
  },
  async getSubscriptions() {
    const res = await this.$axios.$get(`${urls.subscription}`)
    return res
  },
  async cancelSubscription({}, {
    id
  }) {
    const res = await this.$axios.$put(`${urls.subscription}`, {
      id
    })
    return res
  }
}

export const mutations = {}
