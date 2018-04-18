export const state = () => ({
  isCartShowing: false,
  items: [{
    id: 1,
    title: 'เครื่องตรวจระดับนำตาลในเลือด SD CHECK GOLD',
    amount: 1,
    price: 12000
  }, {
    id: 2,
    title: 'เครื่องตรวจระดับนำตาลในเลือด SD CHECK GOLD',
    amount: 1,
    price: 12000
  }, {
    id: 3,
    title: 'เครื่องตรวจระดับนำตาลในเลือด SD CHECK GOLD',
    amount: 1,
    price: 12000
  }, {
    id: 4,
    title: 'เครื่องตรวจระดับนำตาลในเลือด SD CHECK GOLD',
    amount: 1,
    price: 12000
  }, {
    id: 5,
    title: 'เครื่องตรวจระดับนำตาลในเลือด SD CHECK GOLD',
    amount: 1,
    price: 12000
  }, {
    id: 6,
    title: 'เครื่องตรวจระดับนำตาลในเลือด SD CHECK GOLD',
    amount: 1,
    price: 12000
  }]
})

export const mutations = {
  CLEAR_CART (state) {
    state.items = []
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