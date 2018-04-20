<template>
  <form 
    class="_mgt-32px"
    @submit.stop.prevent="submit">
    <h5>เปลี่ยนรหัสผ่าน</h5>
    <float-label class="_mgbt-16px">
      <input 
        v-validate="{required: true, min: 8, max: 16}"
        v-model="currentPassword"
        name="currentPassword"
        class="_bgcl-tpr"
        type="password" 
        data-vv-delay="250"
        placeholder="🔒 รหัสผ่านเดิม">
      <small 
        v-show="errors.has('currentPassword')"
        class="_cl-negative" 
      >กรุณาใส่ Password</small>
    </float-label>
    <float-label class="_mgbt-16px">
      <input 
        v-validate="{required: true, min: 8, max: 16, regex: $store.state.passwordRegex}"
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
</template>

<script>
import InvalidPassword from '~/components/messages/invalid-password'
export default {
  components: {
    InvalidPassword
  },
  data: () => ({
    isBtnLoading: false,
    currentPassword: '',
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
        await this.changePassword()
          .catch(err => this.errorMsg = 'เกิดความผิดพลาด กรุณาลองใหม่อีกครั้ง')
      }
      return this.isBtnLoading = false
    },
    async changePassword () {
      // console.log('change password')
      // const isChanged = await this.$axios.$put(urls.changePassword, {
      //   currentPassword: this.currentPassword,
      //   newPassword: this.newPassword
      // }).catch(err => this.errorMsg = 'เกิดความผิดพลาด กรุณาลองใหม่อีกครั้ง')
      // if (!isChanged) {
      //   return this.errorMsg = 'เกิดความผิดพลาด กรุณาลองใหม่อีกครั้ง'
      // }
      // return this.successMsg = 'เปลี่ยนรหัสผ่านสำเร็จ'
      this.errorMsg = ''
      this.successMsg = ''
      const res = await this.$store.dispatch('user/updatePassword', {
        currentPassword: this.currentPassword,
        newPassword: this.newPassword
      })
      if (res) return this.successMsg = 'สำเร็จ'
      return this.errorMsg = 'กรุณาลองใหม่อีกครั้ง'
    }
  }
}
</script>
