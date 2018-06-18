import urls from '~/services/apiUrl'

export const actions = {
  async getWorkshop({}, {
    slug = false
  }) {
    const appendedSlug = slug ? `slug=${slug}` : ''
    const ws = await this.$axios.$get(`${urls.getWorkshop}?${appendedSlug}`)
    return ws || []
  }
}
