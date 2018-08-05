import urls from '~/services/apiUrl'

export const actions = {
  async getPage({}, {
    slug,
    parent
  }) {
    const res = await this.$axios.$get(`${urls.getPage}?per_page=100${slug? ('&slug=' + slug): ''}${parent? ('&parent=' + parent): ''}`)
    return res
  }
}
