export default ({ $axios, redirect, store }) => {
  if (store.state.auth.token && store.state.auth.token.length > 10) $axios.setToken(store.state.auth.token, 'Bearer')
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400 || code === 404) {
      redirect('/400')
    }
  })
}