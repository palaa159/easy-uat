export const actions = {
  async getPosts({}, {
    q = 'jamateurwanderer',
    max = 12
  }) {
    const res = await this.$axios.$get(`/tag/${q}`)
    return res
  }
}
