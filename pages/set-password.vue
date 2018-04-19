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
      title: `รีเซ็ตรหัสผ่าน ${siteTitle}`
    }
  },
  components: {
    ResetPassword
  },
  fetch ({ store, redirect }) {
    if (store.state.auth.user) {
      return redirect('/')
    }
  }
}
</script>