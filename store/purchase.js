import urls from '~/services/apiUrl'

export const state = () => ({
  isCartShowing: false,
  cart: {
    cart_contents: {}
  }
})

export const actions = {
  async getCartContent () {
    const cart = this.$axios.$get(`${urls.getCartContent}`)
    return cart
  },
  async clearCart () {
    const clear = this.$axios.$get(`${urls.clearCart}`)
    const cart = this.$axios.$get(`${urls.getCartContent}`)
    return cart
  },
  async addToCart ({ commit }, { id, quantity = 1, data }) {
    const added = await this.$axios.$post(`${urls.addToCart}`, {
      id,
      quantity,
      data
    })
    return commit('SET_CART_CONTENT', added)
  },
  async removeFromCart ({ commit }, keyId) {
    const remain = await this.$axios.$put(urls.removeFromCart, {
      id: keyId
    })
    return commit('SET_CART_CONTENT', remain)
  }
}

export const mutations = {
  CLEAR_CART (state) {
    state.items = []
  },
  SET_CART_CONTENT (state, content) {
    // console.log(content)
    state.cart = content
  },
  SET_CART_SHOW (state, bool) {
    state.isCartShowing = bool
  },
  SET_PROD_CART_AMT (state, obj = {
    amount: 1,
    id: 1
  }) { // n = 1, -1
    let clonedItems = state.items
    // Find item by obj.id
    const i = clonedItems.findIndex(x => x.id === obj.id)
    clonedItems[i].amount = obj.amount
    state.items = clonedItems
  },
  REMOVE_PROD (state, id) {
    if (id) {
      let clonedItems = state.items.filter(x => x.id !== id)
      state.items = clonedItems
    }
  }
}