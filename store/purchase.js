import urls from '~/services/apiUrl'

export const state = () => ({
  isCartShowing: false,
  isCartBubbleShowing: false,
  isCartProcessing: false,
  isPurchasing: false,
  cart: {
    cart_contents: {}
  },
  gateways: [],
  checkoutStep: 1
})

export const actions = {
  async getCartContent() {
    const cart = this.$axios.$get(`${urls.getCartContent}`)
    return cart
  },
  async clearCart({
    commit
  }) {
    const empty = await this.$axios.$post(urls.clearCart)
    const cart = await this.$axios.$get(`${urls.getCartContent}`)
    // Clear cookie

    return commit('SET_CART_CONTENT', cart)
  },
  async addToCart({
    commit
  }, {
    id,
    quantity = 1,
    variationId = false,
    data
  }) {
    commit('SET_CART_PROCESSING', true)
    const added = await this.$axios.$post(`${urls.addToCart}`, {
      id,
      quantity,
      variationId,
      data
    })
    commit('SET_CART_BUBBLE', true)
    setTimeout(() => {
      commit('SET_CART_BUBBLE', false)
    }, 4500)
    commit('SET_CART_PROCESSING', false)
    return commit('SET_CART_CONTENT', added)
  },
  async updateProductQuantity({
    commit
  }, {
    keyId,
    quantity
  }) {
    const update = await this.$axios.$put(urls.updateProductQuantity, {
      id: keyId,
      quantity
    })
    if (update) {
      const cart = await this.$axios.$get(`${urls.getCartContent}`)
      return commit('SET_CART_CONTENT', cart)
    }
  },
  async removeFromCart({
    commit
  }, keyId) {
    commit('SET_CART_PROCESSING', true)
    const remain = await this.$axios.$put(urls.removeFromCart, {
      id: keyId
    })
    commit('SET_CART_PROCESSING', false)
    return commit('SET_CART_CONTENT', remain)
  },
  async getPaymentGateways({
    commit
  }) {
    const gateways = await this.$axios.$get(urls.payment)
    return gateways
  }
}

export const mutations = {
  SET_STEP(state, step) {
    state.checkoutStep = step
  },
  SET_GATEWAYS(state, gateways) {
    state.gateways = gateways
  },
  CLEAR_CART(state) {
    state.items = []
  },
  SET_PURCHASING(state, bool) {
    state.isPurchasing = bool
  },
  SET_CART_PROCESSING(state, bool) {
    state.isCartProcessing = bool
  },
  SET_CART_BUBBLE(state, bool) {
    state.isCartBubbleShowing = bool
  },
  SET_CART_CONTENT(state, content) {
    // console.log(content)
    state.cart = content
  },
  SET_CART_SHOW(state, bool) {
    state.isCartShowing = bool
  },
  SET_PROD_CART_AMT(
    state,
    obj = {
      amount: 1,
      id: 1
    }
  ) {
    // n = 1, -1
    let clonedItems = state.items
    // Find item by obj.id
    const i = clonedItems.findIndex((x) => x.id === obj.id)
    clonedItems[i].amount = obj.amount
    state.items = clonedItems
  },
  REMOVE_PROD(state, id) {
    if (id) {
      let clonedItems = state.items.filter((x) => x.id !== id)
      state.items = clonedItems
    }
  }
}
