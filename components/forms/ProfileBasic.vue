<template>
  <form 
    @submit.stop.prevent="submit"
  >
    <h5>อัพเดทข้อมูลส่วนตัว</h5>
    <float-label>
      <input 
        v-validate="{required: true, email: true}"
        v-model="email"
        disabled
        name="email"
        class="_bgcl-tpr"
        type="email" 
        data-vv-delay="250"
        placeholder="✉️ อีเมล">
      <small 
        v-show="errors.has('email')"
        class="_cl-negative" 
      >กรุณาใส่อีเมล์</small>
    </float-label>
    <float-label class="_mgbt-16px">
      <input 
        v-validate="{required: true, min: 2, max: 40}"
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
        v-validate="{required: true, min: 2, max: 40}"
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
    <div 
      v-if="errorMsg" 
      class="bio-message -negative">
      <div>
        <fa-icon 
          icon="times" 
          class="_mgr-8px"/>
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
        อัพเดทข้อมูลส่วนตัว
        <fa-icon icon="long-arrow-alt-right"/>
      </h4>
    </button>
  </form>
</template>

<script>
export default {
  data: () => ({
    isBtnLoading: false,
    email: '',
    firstName: '',
    lastName: '',
    errorMsg: '',
    successMsg: ''
  }),
  created () {
    // Init data values
    this.email = this.$store.state.auth.user.email
    this.firstName = this.$store.state.auth.user.first_name
    this.lastName = this.$store.state.auth.user.last_name
  },
  methods: {
    async updateProfile () {
      this.errorMsg = ''
      this.successMsg = ''
      const res = await this.$store.dispatch('user/updateBasicProfile', {
        firstName: this.firstName,
        lastName: this.lastName
      })
      if (res) return this.successMsg = 'สำเร็จ'
      return this.errorMsg = 'กรุณาลองใหม่อีกครั้ง'
    },
    async submit () {
      this.isBtnLoading = true
      const isValid = await this.$validator.validateAll()
      if (isValid) {
        await this.updateProfile()
          .catch(err => this.errorMsg = 'เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง')
      }
      return this.isBtnLoading = false
    }
  }
}
</script>
