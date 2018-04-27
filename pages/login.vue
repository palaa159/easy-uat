<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-md-5 _mgv-16px _bgcl-tpr _bgcl-white-md _pdh-32px-md _pdv-24px-md">
        <Login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from '~/components/forms/Login'
export default {
  head () {
    const siteTitle = this.$store.state.site.title
    return { 
      title: `เข้าสู่ระบบ ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `เข้าสู่ระบบ` },
        { hid: 'og:description', name: 'og:description', content: `เข้าสู่ระบบ` }
      ]
    }
  },
  components: {
    Login
  },
  fetch ({ store, redirect }) {
    if (store.state.auth.user) {
      return redirect('/profile')
    }
  }
}
</script>
