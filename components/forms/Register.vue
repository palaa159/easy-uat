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
            data-vv-delay="250"
            placeholder="✉️ อีเมลที่จะใช้ลงทะเบียน">
          <small 
            v-show="errors.has('email')"
            class="_cl-negative" 
          >กรุณาใส่อีเมล์</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true, max: 20}"
            v-model="firstName"
            name="firstName"
            class="_bgcl-tpr"
            type="text" 
            data-vv-delay="250"
            placeholder="ชื่อ">
          <small 
            v-show="errors.has('firstName')"
            class="_cl-negative" 
          >กรุณาใส่ชื่อจริง</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true, max: 20}"
            v-model="lastName"
            name="lastName"
            class="_bgcl-tpr"
            type="text" 
            data-vv-delay="250"
            placeholder="นามสกุล">
          <small 
            v-show="errors.has('lastName')"
            class="_cl-negative" 
          >กรุณาใส่นามสกุล</small>
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true, regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%-_*#?&])[A-Za-z\d$@$!%-_*#?&]{8,}$/}"
            v-model="password"
            name="password"
            class="_bgcl-tpr"
            type="password" 
            data-vv-delay="250"
            placeholder="🔒 รหัสผ่าน">
        </float-label>
        <InvalidPassword v-show="errors.has('password')" />
        <div 
          v-if="errorMsg" 
          class="bio-message -negative">
          {{ errorMsg }}
        </div>
        <div 
          v-if="isLoggingIn" 
          class="bio-message -positive">
          <div>
            <fa-icon icon="check"/>
            <span class="_mgl-12px">สมัครสมาชิกสำเร็จ กำลังนำคุณเข้าสู่ระบบ</span>
          </div>
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
import InvalidPassword from '~/components/messages/invalid-password'
export default {
  components: {
    InvalidPassword
  },
  data: () => ({
    isBtnLoading: false,
    isLoggingIn: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    errorMsg: '',
  }),
  methods: {
    async register () {
      const redirect = this.$route.query.redirect || ''
      const register = await this.$store.dispatch('auth/register', {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      })
      if (register) {
        this.isLoggingIn = true
        const token = await this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password
        })
        if (token) return window.location.href = `/${redirect}`
        this.isLoggingIn = false
        return this.errorMsg = 'ลงทะเบียนไม่สำเร็จ กรุณาลองใหม่อีกครั้ง'
      }
      return this.errorMsg = 'ลงทะเบียนไม่สำเร็จ กรุณาลองใหม่อีกครั้ง'
    },
    async submit () {
      this.isBtnLoading = true
      this.errorMsg = ''
      const isValid = await this.$validator.validateAll()
      if (isValid) {
        await this.register()
          .catch(err => this.errorMsg = 'ลงทะเบียนไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
      }
      return this.isBtnLoading = false
    }
  }
}
</script>
