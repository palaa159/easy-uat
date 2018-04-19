import urls from '~/services/apiUrl'

export const actions = {
  async updateBasicProfile ({ commit }, {firstName, lastName}) {
    const res = await this.$axios.$put(urls.updateBasicProfile, {
      firstName,
      lastName
    })
    return res
  }
}