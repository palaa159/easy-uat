<template>
  <div class="container">
    <div class="row">
      <div class="col-12"/>
    </div>
  </div>
</template>

<script>
export default {
  async mounted () {
    if (process.browser) {
      let c = window.confirm('คุณแน่ในว่าต้องออกแบบจากระบบ?')
      if (c === true) {
        this.$store.dispatch('auth/logout')
      } else {
        this.$router.replace('/profile')
      }
    }
  }
}
</script>

