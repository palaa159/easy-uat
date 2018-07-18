<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-md-5 _mgv-16px _bgcl-tpr _bgcl-white-md _pdh-32px-md _pdv-24px-md">
        <ResetPassword />
      </div>
    </div>
  </div>
</template>

<script>
import ResetPassword from '~/components/forms/ResetPassword'
export default {
  head () {
    const siteTitle = this.$store.state.site.title
    return { 
      title: `รีเซ็ตรหัสผ่าน – ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `รีเซ็ตรหัสผ่าน` },
        { hid: 'og:description', name: 'og:description', content: `${siteTitle}` }
      ]
    }
  },
  components: {
    ResetPassword
  },
  validate ({ query }) {
    if (query && query.key && query.login) {
      return true
    }
    return false
  },
  fetch ({ store, redirect }) {
    if (store.state.auth.user) return redirect('/')
  },
}
</script>