<template>
  <div>
    <h4 class="_tal-ct">
      รีเซ็ตรหัสผ่าน
    </h4>
    <no-ssr>
      <form 
        @submit.stop.prevent="submit" 
      >
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true, regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%-_*#?&])[A-Za-z\d$@$!%-_*#?&]{8,}$/}"
            v-model="newPassword"
            name="newPassword"
            class="_bgcl-tpr"
            type="password" 
            data-vv-delay="500"
            placeholder="🔒 รหัสผ่านใหม่">
        </float-label>
        <float-label class="_mgbt-16px">
          <input 
            v-validate="{required: true, confirmed: 'newPassword'}"
            v-model="confirmNewPassword"
            name="confirmNewPassword"
            class="_bgcl-tpr"
            type="password" 
            data-vv-delay="250"
            placeholder="🔒 ยืนยันรหัสผ่านใหม่">
          <small 
            v-show="errors.has('confirmNewPassword')"
            class="_cl-negative" 
          >Password ไม่ตรงกัน</small>
        </float-label>
        <InvalidPassword v-show="errors.has('newPassword')" />
        <div 
          v-if="errorMsg" 
          class="bio-message -accent">
          <div>
            <fa-icon 
              class="_mgr-8px" 
              icon="times"/>
            {{ errorMsg }}
          </div>
        </div>
        <div 
          v-if="successMsg" 
          class="bio-message -positive">
          <div>
            <fa-icon 
              class="_mgr-8px" 
              icon="check"/>
            {{ successMsg }}
            <nuxt-link 
              class="bio-link -fancy _mgl-8px" 
              to="/login">เข้าสู่ระบบ</nuxt-link>
          </div>
        </div>
        <button 
          :class="{'-loading -disabled': isBtnLoading}"
          type="submit" 
          class="bio-button -info -outline _w-100pct _mgv-24px">
          <h4>
            เปลี่ยนแปลงรหัสผ่าน
            <fa-icon icon="long-arrow-alt-right"/>
          </h4>
        </button>
      </form>
    </no-ssr>
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
    newPassword: '',
    confirmNewPassword: '',
    successMsg: '',
    errorMsg: ''
  }),
  methods: {
    async submit () {
      this.isBtnLoading = true
      this.errorMsg = ''
      this.successMsg = ''
      const isValid = await this.$validator.validateAll()
      // if 
      if (isValid) { 
        await this.resetPassword()
          .catch(err => this.errorMsg = 'เกิดความผิดพลาด กรุณาลองใหม่อีกครั้ง')
      }
      return this.isBtnLoading = false
    },
    async resetPassword () {
      const isChanged = await this.$axios.$put(urls.forgotSetPassword, {
        key: this.$route.query.id,
        login: this.$route.query.login,
        password: this.newPassword
      })
      if (!isChanged) {
        return this.errorMsg = 'เกิดความผิดพลาด กรุณาลองใหม่อีกครั้ง'
      }
      this.successMsg = 'เปลี่ยนรหัสผ่านสำเร็จ'
      return 
    }
  }
}
</script>
