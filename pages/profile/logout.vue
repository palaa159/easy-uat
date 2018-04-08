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
        const res = this.$axios.$post(this.$store.state.api.logout)
        if (res) {
          window.location.href = '/'
        }
      }
    }
  }
}
</script>

