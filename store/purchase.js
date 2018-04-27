import urls from '~/services/apiUrl'

export const state = () => ({
  isCartShowing: false,
  isCartBubbleShowing: false,
  isCartProcessing: false,
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
    commit('SET_CART_PROCESSING', true)
    const added = await this.$axios.$post(`${urls.addToCart}`, {
      id,
      quantity,
      data
    })
    commit('SET_CART_BUBBLE', true)
    setTimeout(() => {
      commit('SET_CART_BUBBLE', false)
    }, 4500)
    commit('SET_CART_PROCESSING', false)
    return commit('SET_CART_CONTENT', added)
  },
  async updateProductQuantity ({ commit }, { keyId, quantity }) {
    commit('SET_CART_PROCESSING', true)
    const remain = await this.$axios.$put(urls.updateProductQuantity, {
      id: keyId,
      quantity
    })
    commit('SET_CART_PROCESSING', false)
    return commit('SET_CART_CONTENT', remain)
  },
  async removeFromCart ({ commit }, keyId) {
    commit('SET_CART_PROCESSING', true)
    const remain = await this.$axios.$put(urls.removeFromCart, {
      id: keyId
    })
    commit('SET_CART_PROCESSING', false)
    return commit('SET_CART_CONTENT', remain)
  }
}

export const mutations = {
  CLEAR_CART (state) {
    state.items = []
  },
  SET_CART_PROCESSING (state, bool) {
    state.isCartProcessing = bool
  },
  SET_CART_BUBBLE (state, bool) {
    state.isCartBubbleShowing = bool
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