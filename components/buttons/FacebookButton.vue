<template>
  <button 
    :class="{'-loading -disabled': isBtnLoading}" 
    :disabled="isBtnLoading"
    type="button"
    class="bio-button -facebook _w-100pct _mgv-16px _bdcl-neutral-100"
    @click="login">
    <h4>
      {{ btnTitle }} 
      <fa-icon :icon="['fab', 'facebook-square']"/>
    </h4>
  </button>
</template>

<script>
export default {
  props: {
    btnTitle: {
      type: String,
      default: 'ล็อกอินด้วย'
    }
  },
  data: () => ({
    isBtnLoading: false
  }),
  methods: {
    async login() {
      this.isBtnLoading = true
      const res = await this.$store.dispatch('auth/facebookSignUp')
      if (res) {
        // res = userData
        return this.$emit('success', res)
        // const token = await this.$store.dispatch('auth/login', {
        //   email: res.email,
        //   password: res.password
        // })
        // if (token) {
        //   // return this.$router.replace(`/${redirect}`)

        // }
        // return this.$emit('error', 'เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
      }
      return this.$emit('error', 'เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
    }
  }
}
</script>


<style lang="scss" scoped>
.-facebook {
  background-color: rgb(59, 89, 152);
}
</style>
