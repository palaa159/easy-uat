<template>
  <div>
    <h4 class="_tal-ct _mgbt-32px">
      ลงทะเบียนสมาชิก
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
            placeholder="✉️ อีเมลที่จะใช้ลงทะเบียน">
          <small 
            v-show="errors.has('email')"
            class="_cl-negative" 
          >กรุณาใส่อีเมล์</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true}"
            v-model="firstName"
            name="firstName"
            class="_bgcl-tpr"
            type="text" 
            data-vv-delay="500"
            placeholder="ชื่อ">
          <small 
            v-show="errors.has('firstName')"
            class="_cl-negative" 
          >กรุณาใส่ชื่อจริง</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true}"
            v-model="lastName"
            name="lastName"
            class="_bgcl-tpr"
            type="text" 
            data-vv-delay="500"
            placeholder="นามสกุล">
          <small 
            v-show="errors.has('lastName')"
            class="_cl-negative" 
          >กรุณาใส่นามสกุล</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true}"
            v-model="password"
            name="password"
            class="_bgcl-tpr"
            type="password" 
            data-vv-delay="500"
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
          class="bio-button -positive -outline _w-100pct _mgv-32px">
          <h4>
            ลงทะเบียน
            <fa-icon icon="long-arrow-alt-right"/>
          </h4>
        </button>
      </form>
    </no-ssr>
    <div class="_tal-ct _mgv-12px">
      <span>เป็นสมาชิกอยู่แล้ว? </span>
      <nuxt-link 
        to="login" 
        class="bio-link -fancy">
        เข้าสู่ระบบ
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isBtnLoading: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    errorMsg: 'x'
  }),
  methods: {
    async login () {
      const redirect = this.$route.query.redirect
      const res = await this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      if (res) {
        return this.$router.replace(`/${redirect}`)
      }
      return this.$router.replace('/')
    },
    async submit () {
      const isValid = await this.$validator.validateAll()
      if (isValid) {
        this.login()
          .catch(err => this.errorMsg = 'เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
      }
    }
  }
}
</script>
