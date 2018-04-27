<template>
  <div class="container">
    <div class="row _jtfct-ct">
      <div class="col-12 col-md-5 _mgv-16px _bgcl-tpr _bgcl-white-md _pdh-32px-md _pdv-24px-md">
        <Forgot />
      </div>
    </div>
  </div>
</template>

<script>
import Forgot from '~/components/forms/Forgot'
export default {
  head () {
    const siteTitle = this.$store.state.site.title
    return { 
      title: `ลืมรหัสผ่าน ${siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `ลืมรหัสผ่าน` },
        { hid: 'og:description', name: 'og:description', content: `ลืมรหัสผ่าน` }
      ]
    }
  },
  components: {
    Forgot
  },
  fetch ({ store, redirect }) {
    if (store.state.auth.user) {
      return redirect('/')
    }
  }
}
</script>
