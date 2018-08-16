<template>
  <section class="_w-100pct">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="_tal-ct">Fasten your seatbelt. Your website will be live in 10 seconds.<br >
            <img 
              src="~/assets/images/loading.gif" 
              alt=""
              class="_mgt-32px"
              height="32">
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ app, store, query }) {
    // Ping server
    const shop = await app.$axios.$post(`/user/${query.redirect}`)
    return
  },
  mounted () {
    setTimeout(() => {
      window.location.href = window.location.origin + `/${this.$route.query.redirect}`
    }, 1000 * 10)
  }
}
</script>
