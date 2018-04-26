import urls from '~/services/apiUrl'

export const state = () => ({
  isCartShowing: false,
  cartContent: null
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
  async addToCart ({ id, quantity }) {
    const added = this.$axios.$post(`${urls.addToCart}`, {
      product_id: id,
      quantity
    })
    return added
  }
}

export const mutations = {
  CLEAR_CART (state) {
    state.items = []
  },
  SET_CART_CONTENT (state, content) {
    state.cartContent = content
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