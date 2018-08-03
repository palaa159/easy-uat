import urls from '~/services/apiUrl'

export const actions = {
  async getPage({}, {
    slug
  }) {
    const res = await this.$axios.$get(`${urls.getPage}${slug? ('?slug=' + slug): ''}`)
    return res
  }
}
