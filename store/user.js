import urls from '~/services/apiUrl'

export const actions = {
  async updateBasicProfile({
    commit
  }, {
    firstName,
    lastName
  }) {
    const res = await this.$axios.$put(urls.updateBasicProfile, {
      firstName,
      lastName
    })
    return res
  },
  async updatePassword({}, {
    currentPassword,
    newPassword
  }) {
    const res = await this.$axios.$put(urls.changePassword, {
      currentPassword,
      newPassword
    })
    return res
  },
  async updateAddress({}, data) {
    const res = await this.$axios.$put(urls.address, data)
    return res
  },
  async getCustomer() {
    const res = await this.$axios.$get(urls.customer)
    return res
  }
}
