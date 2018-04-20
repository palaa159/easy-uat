import urls from '~/services/apiUrl'

export const actions = {
  async updateBasicProfile ({ commit }, {firstName, lastName}) {
    const res = await this.$axios.$put(urls.updateBasicProfile, {
      firstName,
      lastName
    })
    return res
  },
  async updatePassword ({}, { currentPassword, newPassword }) {
    const res = await this.$axios.$put(urls.changePassword, {
      currentPassword,
      newPassword
    })
    return res
  }
}