<template>
  <div>
    <h4 class="_tal-ct _mgbt-32px">
      เข้าสู่ระบบ
    </h4>
    <no-ssr>
      <form @submit.stop.prevent="submit">
        <float-label>
          <input 
            v-validate="{required: true, email: true}"
            v-model="email"
            name="email"
            class="_bgcl-tpr"
            type="email" 
            data-vv-delay="500"
            data-vv-validate-on="none"
            placeholder="✉️ อีเมลที่ลงทะเบียน">
          <small 
            v-show="errors.has('email')"
            class="_cl-negative" 
          >กรุณาใส่อีเมล์</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true}"
            v-model="password"
            name="password"
            class="_bgcl-tpr"
            type="password" 
            data-vv-delay="500"
            data-vv-validate-on="none"
            placeholder="🔒 รหัสผ่าน">
          <small 
            v-show="errors.has('password')"
            class="_cl-negative" 
          >กรุณาใส่ Password</small>
        </float-label>
        <div 
          v-if="errorMsg" 
          class="bio-message -negative">
          {{ errorMsg }}
        </div>
        <button 
          :class="{'-loading -disabled': isBtnLoading}"
          type="submit" 
          class="bio-button -positive -outline _w-100pct _mgv-16px">
          <h4>
            เข้าสู่ระบบ
            <fa-icon icon="long-arrow-alt-right"/>
          </h4>
        </button>
      </form>
    </no-ssr>
    <div class="_tal-ct _mgv-12px">
      <span>ยังไม่ได้เป็นสมาชิก? </span>
      <nuxt-link 
        to="register" 
        class="bio-link -fancy">
        ลงทะเบียน
      </nuxt-link>
    </div>
    <div class="_tal-ct _mgv-12px">
      <span>ลืมรหัสผ่าน? </span>
      <nuxt-link 
        to="forgot-password" 
        class="bio-link -fancy">
        คลิ๊กที่นี่
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isBtnLoading: false,
    email: '',
    password: '',
    errorMsg: ''
  }),
  methods: {
    async login () {
      const redirect = this.$route.query.redirect || ''
      const res = await this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      })
      if (res.token) {
        // return this.$router.replace(`/${redirect}`)
        return window.location.href = `/${redirect}`
      }
      return this.errorMsg = 'เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง'
    },
    async submit () {
      this.isBtnLoading = true
      const isValid = await this.$validator.validateAll()
      if (isValid) {
        await this.login()
          .catch(err => this.errorMsg = 'เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
      }
      return this.isBtnLoading = false
    }
  }
}
</script>
